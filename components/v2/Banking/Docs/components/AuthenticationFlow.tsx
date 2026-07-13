import { ArrowDown } from "lucide-react";

const steps = [
  "User Registration",
  "Validate Input",
  "Hash Password (bcrypt)",
  "Store User in MongoDB",
  "Send Verification Email",
  "Verify Account",
  "User Login",
  "Generate JWT Tokens",
  "Access Protected Dashboard",
];

export default function AuthenticationFlow() {
  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">

      <h2 className="mb-8 text-3xl font-bold">
        Authentication Flow
      </h2>

      <div className="flex flex-col items-center">

        {steps.map((step, index) => (

          <div
            key={step}
            className="flex flex-col items-center"
          >

            <div className="flex w-80 items-center gap-4 rounded-xl border border-slate-700 bg-slate-800 p-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold">

                {index + 1}

              </div>

              <p>{step}</p>

            </div>

            {index !== steps.length - 1 && (
              <ArrowDown className="my-3 text-slate-500" />
            )}

          </div>

        ))}

      </div>

    </div>
  );
}