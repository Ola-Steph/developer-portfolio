import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  step: number;
  text: string;
}

export default function FlowStep({ step, text }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center"
    >
      <div className="flex w-full items-center gap-5 rounded-xl border border-slate-700 bg-slate-900 p-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
          {step}
        </div>

        <p className="text-slate-300">
          {text}
        </p>
      </div>

      {step !== 7 && (
        <ArrowDown className="my-2 text-slate-500" />
      )}
    </motion.div>
  );
}