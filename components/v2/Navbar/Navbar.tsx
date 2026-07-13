import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Logo />

        <DesktopNav />

        <div className="flex items-center gap-4">

          <a
            href="/Ola_Steve_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-xl bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-500 lg:block"
          >
            Resume
          </a>

          <MobileNav />

        </div>

      </div>
    </header>
  );
}