import { Outlet } from "react-router-dom";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function SiteLayout() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-hero-aurora opacity-70 blur-3xl" />
      <SiteHeader />
      <main className="relative z-10 flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
