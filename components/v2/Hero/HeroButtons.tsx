import { Download } from "lucide-react";
import { Button } from "../shared";

export default function HeroButtons() {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <Button href="/Stephen_Jaiyeola_CV.pdf">
        <Download size={18} />
        <span className="ml-2">Download CV</span>
      </Button>

<Button
  href="https://banking-app-frontend-zeta.vercel.app/"
  variant="secondary"
>
  View Banking Platform
</Button>

      <Button
        href="https://github.com/Ola-Steph"
        variant="secondary"
      >
        {/* <Github size={18} /> */}
        <span className="ml-2">GitHub</span>
      </Button>
    </div>
  );
}