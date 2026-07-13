import { ArrowDown } from "lucide-react";

const flow = [
  "User Login",
  "Credentials Validated",
  "Password Compared (bcrypt)",
  "JWT Generated",
  "JWT Middleware",
  "Role Validation",
  "Controller Access Granted",
  "Database Operation",
  "Audit Log Recorded",
];

export default function SecurityFlow() {
  return (
    <section className="rounded-3xl border border-slate-700 bg-slate-900 p-8">

      <h2 className="mb-8 text-3xl font-bold">
        Security Execution Flow
      </h2>

      <div className="flex flex-col items-center">

        {flow.map((step, index) => (

          <div
            key={step}
            className="flex flex-col items-center"
          >

            <div className="flex w-96 items-center gap-4 rounded-xl border border-slate-700 bg-slate-800 p-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 font-bold">

                {index + 1}

              </div>

              <span>{step}</span>

            </div>

            {index !== flow.length - 1 && (
              <ArrowDown className="my-3 text-slate-500" />
            )}

          </div>

        ))}

      </div>

    </section>
  );
}