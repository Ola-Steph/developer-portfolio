"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

import MethodBadge from "./MethodBadge";
import StatusBadge from "./StatusBadge";
import JsonViewer from "./JsonViewer";
import InfoBadge from "./InfoBadge";

interface Props {
  method: "GET" | "POST" | "PATCH" | "DELETE";
  endpoint: string;
  description: string;
  protectedRoute: boolean;
  request?: string;
  response?: string;
  middleware?: string[];
}

export default function EndpointAccordion({
  method,
  endpoint,
  description,
  protectedRoute,
  request,
  response,
  middleware = [],
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900">

      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <div className="flex items-center gap-4">

          <MethodBadge method={method} />

          <div>

            <h3 className="font-semibold">

              {endpoint}

            </h3>

            <p className="text-sm text-slate-400">

              {description}

            </p>

          </div>

        </div>

        {open ? <ChevronDown /> : <ChevronRight />}
      </button>

      {open && (

        <div className="space-y-6 border-t border-slate-700 p-6">

          <StatusBadge protectedRoute={protectedRoute} />

          {middleware.length > 0 && (

            <div>

              <h4 className="mb-3 font-semibold">

                Middleware

              </h4>

              <div className="flex flex-wrap gap-2">

                {middleware.map((item) => (

                  <InfoBadge
                    key={item}
                    text={item}
                  />

                ))}

              </div>

            </div>

          )}

          {request && (

            <JsonViewer
              title="Example Request"
              json={request}
            />

          )}

          {response && (

            <JsonViewer
              title="Example Response"
              json={response}
            />

          )}

        </div>

      )}

    </div>
  );
}