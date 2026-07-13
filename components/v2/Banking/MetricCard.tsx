import { motion } from "framer-motion";

interface MetricCardProps {
  value: string;
  label: string;
  description: string;
}

export default function MetricCard({
  value,
  label,
  description,
}: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      whileHover={{ scale: 1.03 }}
      className="
        rounded-3xl
        border
        border-slate-700
        bg-slate-900
        p-8
        text-center
        transition-all
        hover:border-cyan-500
        hover:shadow-xl
        hover:shadow-cyan-500/10
      "
    >
      <h2 className="text-5xl font-black text-cyan-400">
        {value}
      </h2>

      <h3 className="mt-4 text-xl font-semibold text-white">
        {label}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-400">
        {description}
      </p>
    </motion.div>
  );
}