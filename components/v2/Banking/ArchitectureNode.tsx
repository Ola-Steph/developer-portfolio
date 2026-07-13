import { motion } from "framer-motion";

interface ArchitectureNodeProps {
  title: string;
  subtitle?: string;
}

export default function ArchitectureNode({
  title,
  subtitle,
}: ArchitectureNodeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="
        w-full
        max-w-xs
        rounded-2xl
        border
        border-slate-700
        bg-slate-900
        p-6
        text-center
        shadow-lg
        transition-all
        hover:border-blue-500
        hover:shadow-blue-500/20
      "
    >
      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

      {subtitle && (
        <p className="mt-2 text-sm text-slate-400">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}