import { motion } from "framer-motion";

interface EndpointCardProps {
  method: string;
  endpoint: string;
}

const colors: Record<string, string> = {
  GET: "bg-green-500",
  POST: "bg-blue-500",
  PATCH: "bg-yellow-500",
  PUT: "bg-orange-500",
  DELETE: "bg-red-500",
};

export default function EndpointCard({
  method,
  endpoint,
}: EndpointCardProps) {
  return (
    <motion.div
      whileHover={{ x: 6 }}
      className="flex items-center gap-4 rounded-xl border border-slate-700 bg-slate-900 p-3"
    >
      <span
        className={`rounded px-2 py-1 text-xs font-bold text-white ${
          colors[method]
        }`}
      >
        {method}
      </span>

      <code className="text-sm text-slate-300">
        {endpoint}
      </code>
    </motion.div>
  );
}