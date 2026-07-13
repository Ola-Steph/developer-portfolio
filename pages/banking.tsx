
import CaseStudyHero from "@/components/v2/Banking/Docs/components/CaseStudyHero";
import ProjectStats from "@/components/v2/Banking/Docs/components/ProjectStats";
import BankingDocs from "@/components/v2/Banking/Docs/BankingDocs";

export default function BankingPage() {
  return (
    <>
     

      <div className="pt-20">

        <CaseStudyHero />

        <ProjectStats />

        <main className="bg-slate-950">
          <BankingDocs />
        </main>

      </div>
    </>
  );
}