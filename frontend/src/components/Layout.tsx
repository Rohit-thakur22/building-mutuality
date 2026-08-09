import { Outlet } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { StickyConnect } from "@/components/StickyConnect";

export function Layout() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SmoothScroll />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <StickyConnect />
      <Footer />
    </div>
  );
}
