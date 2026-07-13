import { motion } from "framer-motion";

interface TechnologyCardProps {
  name: string;
}

export default function TechnologyCard({
  name,
}: TechnologyCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        rounded-2xl
        border
        border-slate-800
        bg-slate-900
        p-6
        text-center
        shadow-lg
        hover:border-blue-500
      "
    >
      <p className="text-lg font-semibold text-white">
        {name}
      </p>
    </motion.div>
  );
}