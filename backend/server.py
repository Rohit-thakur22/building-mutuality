from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
import httpx
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str


# --- Contact form (managed Resend email) ---
EMAIL_BASE_URL = "https://integrations.emergentagent.com"
EMAIL_KEY = os.environ.get("EMERGENT_EMAIL_KEY")
EMAIL_FROM_NAME = os.environ.get("EMAIL_FROM_NAME", "Building Mutuality")
CONTACT_RECIPIENT = "matthew@mutuality.com.au"

CHALLENGE_OPTIONS = {
    "Starting AI transformation",
    "Overcoming adoption resistance",
    "Building AI capability",
    "Scaling AI integration",
    "Other",
}


class ContactRequest(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr
    organisation: str
    challenge: Optional[str] = None
    message: Optional[str] = ""


@api_router.post("/contact")
async def submit_contact(payload: ContactRequest):
    # Persist the enquiry
    doc = {
        "id": str(uuid.uuid4()),
        "first_name": payload.first_name,
        "last_name": payload.last_name,
        "email": payload.email,
        "organisation": payload.organisation,
        "challenge": payload.challenge,
        "message": payload.message,
        "created_at": datetime.now(timezone.utc).isoformat(),
    }
    try:
        await db.contact_submissions.insert_one(dict(doc))
    except Exception as e:
        logger.error(f"Failed to store contact submission: {e}")

    full_name = f"{payload.first_name} {payload.last_name}".strip()
    html = f"""
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family:Arial,sans-serif;color:#0A1628;">
      <tr><td style="padding:16px 0;">
        <h2 style="margin:0 0 16px;color:#0A1628;">New enquiry from the Building Mutuality website</h2>
        <table cellpadding="6" cellspacing="0" style="font-size:14px;">
          <tr><td style="color:#64748B;">Name</td><td><strong>{full_name}</strong></td></tr>
          <tr><td style="color:#64748B;">Email</td><td>{payload.email}</td></tr>
          <tr><td style="color:#64748B;">Organisation</td><td>{payload.organisation}</td></tr>
          <tr><td style="color:#64748B;">Primary challenge</td><td>{payload.challenge or '—'}</td></tr>
          <tr><td style="color:#64748B;vertical-align:top;">Message</td><td>{(payload.message or '—')}</td></tr>
        </table>
      </td></tr>
    </table>
    """

    if not EMAIL_KEY:
        logger.warning("EMERGENT_EMAIL_KEY not set; enquiry stored but email not sent.")
        return {"status": "stored", "message": "Submission received."}

    body = {
        "to": [CONTACT_RECIPIENT],
        "subject": f"New enquiry — {full_name} ({payload.organisation})",
        "html": html,
        "from_name": EMAIL_FROM_NAME,
        "contact_email": payload.email,
    }
    try:
        async with httpx.AsyncClient(timeout=30) as http_client:
            resp = await http_client.post(
                f"{EMAIL_BASE_URL}/api/v1/email/send",
                headers={"X-Email-Key": EMAIL_KEY},
                json=body,
            )
        resp.raise_for_status()
        return {"status": "success", "message": "Thank you — your message has been sent."}
    except Exception as e:
        logger.error(f"Contact email send failed: {e}")
        # Enquiry is already stored; report soft success so the user isn't blocked
        return {"status": "stored", "message": "Submission received."}


# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()