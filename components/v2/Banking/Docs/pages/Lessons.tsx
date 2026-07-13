import DocumentationHeader from "../components/DocumentationHeader";

const lessons = [
  {
    title: "Design Authentication Early",
    description:
      "Building authentication first established a secure foundation for every subsequent feature. It simplified protecting routes and enforcing authorization throughout the application.",
  },
  {
    title: "Middleware Improves Maintainability",
    description:
      "Separating authentication, authorization, file uploads, and error handling into middleware kept controllers focused on business logic and made the backend easier to extend.",
  },
  {
    title: "Database Design Matters",
    description:
      "Carefully modelling User and Transaction collections reduced complexity later when implementing transfers, transaction history, and administrative operations.",
  },
  {
    title: "Validation Prevents Bugs",
    description:
      "Validating requests before processing business logic significantly reduced runtime errors and protected the integrity of financial transactions.",
  },
  {
    title: "Security Is More Than Authentication",
    description:
      "Implementing JWT protection alone is not enough. Password hashing, authorization checks, protected routes, secure file uploads, and role-based access all contribute to a secure banking platform.",
  },
  {
    title: "Documentation Saves Time",
    description:
      "Maintaining Swagger documentation throughout development made testing easier and provided clear API references for future frontend integration.",
  },
];

export default function Lessons() {
  return (
    <div className="space-y-12">

      <DocumentationHeader
        title="Lessons Learned"
        description="Key engineering insights gained while designing and developing the banking application."
        category="Reflection"
        complexity="Advanced"
      />

      <div className="grid gap-6">

        {lessons.map((lesson, index) => (

          <div
            key={lesson.title}
            className="rounded-xl border border-slate-700 bg-slate-900 p-6"
          >

            <div className="flex items-center gap-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold">
                {index + 1}
              </div>

              <h2 className="text-2xl font-semibold text-white">
                {lesson.title}
              </h2>

            </div>

            <p className="mt-5 leading-8 text-slate-300">
              {lesson.description}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}