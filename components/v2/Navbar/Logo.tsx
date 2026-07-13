import { useRouter } from "next/router";

export default function Logo() {
  const router = useRouter();

  const isBankingPage = router.pathname === "/banking";

  return (
    <a
      href={isBankingPage ? "/#home" : "#home"}
      className="text-2xl font-bold tracking-tight text-white"
    >
      JaiyeOla Stephen <span className="text-blue-500">.</span>
    </a>
  );
}