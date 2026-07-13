import { useRouter } from "next/router";
import { navLinks } from "./nav-links";

export default function DesktopNav() {
  const router = useRouter();

  const isBankingPage = router.pathname === "/banking";

  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={isBankingPage ? `/${link.href}` : link.href}
          className="text-sm font-medium text-slate-300 transition hover:text-blue-400"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}