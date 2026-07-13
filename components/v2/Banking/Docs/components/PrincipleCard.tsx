import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
}

export default function PrincipleCard({
  title,
  description,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-slate-700 bg-slate-900 p-6"
    >
      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-400">
        {description}
      </p>
    </motion.div>
  );
}