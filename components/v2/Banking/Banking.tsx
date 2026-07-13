import BankingHero from "./BankingHero";
import BankingArchitecture from "./BankingArchitecture";
import BankingFeatures from "./BankingFeatures";
import BankingMetrics from "./BankingMetrics";
import BankingAPI from "./BankingAPI";
import { BankingDocs } from "./Docs";

export default function Banking() {
  return (
    <section id="projects">
    <>
    
      <BankingHero />
      <BankingArchitecture />
      <BankingFeatures />
      <BankingMetrics />
      <BankingAPI />
      <BankingDocs />
    </>
    </section>
  );
}