import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

export default function FeatureCard({
  icon,
  title,
  description,
  features,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .4 }}
      whileHover={{ y: -8 }}
      className="
      rounded-3xl
      border
      border-slate-700
      bg-slate-900
      p-8
      shadow-lg
      transition-all
      hover:border-blue-500
      hover:shadow-blue-500/20
      "
    >
      <div className="mb-5 text-blue-400">
        {icon}
      </div>

      <h3 className="mb-2 text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mb-6 text-slate-400">
        {description}
      </p>

      <ul className="space-y-3">
        {features.map(feature => (
          <li
            key={feature}
            className="flex items-center gap-3 text-slate-300"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}