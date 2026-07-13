import { motion } from "framer-motion";

interface Props {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  responsibilities: string[];
}

export default function ArchitectureLayer({
  icon,
  title,
  subtitle,
  responsibilities,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-slate-700 bg-slate-900 p-6"
    >
      <div className="flex items-center gap-3">

        <div className="text-blue-400">
          {icon}
        </div>

        <div>

          <h3 className="text-xl font-semibold">
            {title}
          </h3>

          <p className="text-slate-400">
            {subtitle}
          </p>

        </div>

      </div>

      <div className="mt-6 flex flex-wrap gap-3">

        {responsibilities.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-800 px-3 py-2 text-sm"
          >
            {item}
          </span>
        ))}

      </div>

    </motion.div>
  );
}