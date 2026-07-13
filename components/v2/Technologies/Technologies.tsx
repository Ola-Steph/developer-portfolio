import { technologies } from "@/data/portfolio";

import { Container, SectionTitle } from "../shared";

import TechnologyCard from "./TechnologyCard";

export default function Technologies() {
  return (
    <section 
    id="tech-stack"
    className="bg-slate-950 py-24">
      <Container>
        <SectionTitle
          centered
          title="Trusted Technologies"
          subtitle="Technologies I use to build secure, scalable and production-ready software."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology}
              name={technology}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}