import EducationCard from "./EducationCard";
import { education } from "./education-data";

export default function Education() {
  return (
    <section
      id="education"
      className="bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold text-white">
            Education
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-400">
            My academic background in computer science provides a strong
            foundation for building scalable software systems, while my
            continued learning keeps me current with modern technologies.
          </p>

        </div>

        <div className="space-y-8">

          {education.map((item) => (
            <EducationCard
              key={`${item.degree}-${item.institution}`}
              item={item}
            />
          ))}

        </div>

      </div>
    </section>
  );
}