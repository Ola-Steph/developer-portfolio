import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-blue-600 hover:bg-blue-700 text-white"
      : "border border-slate-600 hover:border-blue-500 text-white";

  const isExternal =
    href.startsWith("http://") || href.startsWith("https://");

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300 ${styles}`}
    >
      {children}
    </Link>
  );
}