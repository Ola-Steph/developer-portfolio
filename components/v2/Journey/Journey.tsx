import JourneyCard from "./JourneyCard";
import { journey } from "./journey-data";

export default function Journey() {
  return (
    <section
      id="experience"
      className="bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold text-white">
            Professional Journey
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-400">
            My experience building production-ready software,
            collaborating with teams and continuously improving
            through real-world projects.
          </p>

        </div>

        <div className="space-y-8">

          {journey.map((item) => (
            <JourneyCard
              key={item.company}
              item={item}
            />
          ))}

        </div>

      </div>
    </section>
  );
}