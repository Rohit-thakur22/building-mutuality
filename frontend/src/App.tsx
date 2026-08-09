import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import WhoWeHelp from "@/pages/WhoWeHelp";
import FifthRevolution from "@/pages/FifthRevolution";
import Services from "@/pages/Services";
import Programmes from "@/pages/Programmes";
import ExecutiveCoaching from "@/pages/ExecutiveCoaching";
import CultureAudits from "@/pages/CultureAudits";
import HIAccreditation from "@/pages/HIAccreditation";
import About from "@/pages/About";
import Books from "@/pages/Books";
import Ethos from "@/pages/Ethos";
import Resources from "@/pages/Resources";
import ResourceCategory from "@/pages/ResourceCategory";
import Speaking from "@/pages/Speaking";
import Contact from "@/pages/Contact";
import PrivacyPolicy from "@/pages/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/who-we-help" element={<WhoWeHelp />} />
          <Route path="/fifth-revolution" element={<FifthRevolution />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/programmes" element={<Programmes />} />
          <Route path="/services/executive-coaching" element={<ExecutiveCoaching />} />
          <Route path="/services/culture-audits" element={<CultureAudits />} />
          <Route path="/services/hi-accreditation" element={<HIAccreditation />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<Books />} />
          <Route path="/ethos" element={<Ethos />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:slug" element={<ResourceCategory />} />
          <Route path="/speaking" element={<Speaking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
