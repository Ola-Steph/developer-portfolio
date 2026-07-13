import { motion } from "framer-motion";

interface HeroStat {
  value: string;
  label: string;
}

interface HeroStatsProps {
  stats: HeroStat[];
}

export default function HeroStats({ stats }: HeroStatsProps) {
  return (
    <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.15,
            duration: 0.4,
          }}
          className="rounded-xl border border-slate-800 bg-slate-900 p-5 text-center"
        >
          <h3 className="text-3xl font-bold text-blue-400">
            {stat.value}
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}