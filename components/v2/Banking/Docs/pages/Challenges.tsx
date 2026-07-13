import DocumentationHeader from "../components/DocumentationHeader";

const challenges = [
  {
    title: "Secure Authentication",
    problem:
      "Protecting sensitive banking operations while maintaining a simple user experience.",
    solution:
      "Implemented JWT access token authentication with protected middleware, bcrypt password hashing, and role-based authorization.",
  },
  {
    title: "Authorization Code Workflow",
    problem:
      "Large transfers required an additional approval step beyond user authentication.",
    solution:
      "Designed a two-step transfer workflow where transfers remain pending until the user provides the generated authorization code.",
  },
  {
    title: "Transaction Integrity",
    problem:
      "Money transfers must remain consistent even if unexpected errors occur.",
    solution:
      "Validated balances before transfers and only updated account balances after successful transaction processing.",
  },
  {
    title: "File Uploads",
    problem:
      "Users needed to upload profile images and KYC documents securely.",
    solution:
      "Integrated Multer for multipart uploads and Cloudinary for secure cloud storage.",
  },
  {
    title: "Role-Based Administration",
    problem:
      "Administrative actions needed to remain inaccessible to normal users.",
    solution:
      "Created admin-only middleware protecting sensitive routes such as deposits and user management.",
  },
];

export default function Challenges() {
  return (
    <div className="space-y-12">
      <DocumentationHeader
        title="Engineering Challenges"
        description="Major technical challenges encountered while building the banking application."
        category="Engineering"
        complexity="Advanced"
      />

      <div className="space-y-8">
        {challenges.map((challenge) => (
          <div
            key={challenge.title}
            className="rounded-xl border border-slate-700 bg-slate-900 p-6"
          >
            <h2 className="text-2xl font-semibold text-white">
              {challenge.title}
            </h2>

            <div className="mt-5">
              <h3 className="font-semibold text-red-400">Problem</h3>
              <p className="mt-2 text-slate-300">
                {challenge.problem}
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-green-400">Solution</h3>
              <p className="mt-2 text-slate-300">
                {challenge.solution}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}