import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Code2  } from "lucide-react";

import { bankingProject } from "@/data/portfolio";
import { Container } from "../shared";

import TechBadge from "./TechBadge";

export default function BankingHero() {
  return (
    <section className="py-24 bg-slate-950">
      <Container>

        {/* Featured Badge */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center rounded-full bg-yellow-500/10 border border-yellow-500/30 px-4 py-2 text-sm font-medium text-yellow-300">
            ⭐ Featured Project
          </span>
        </motion.div>

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 text-5xl font-bold text-white"
        >
          {bankingProject.title}
        </motion.h2>

        {/* Tagline */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 max-w-3xl text-xl leading-8 text-slate-300"
        >
          {bankingProject.tagline}
        </motion.p>

        {/* Tech Pills */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {bankingProject.techStack.map((tech) => (
            <TechBadge
              key={tech}
              label={tech}
            />
          ))}
        </motion.div>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href={bankingProject.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            <ExternalLink size={18} />
            Live Demo
          </a>

          <a
            href={bankingProject.github}
              target="_blank"
                rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 font-medium text-white transition hover:border-slate-500"
          >
            <Code2 size={18} />
            GitHub
          </a>
        </motion.div>

        {/* Dashboard Screenshot */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden rounded-3xl border border-slate-800 shadow-2xl"
        >
          <Image
            src={bankingProject.image}
            alt={bankingProject.title}
            width={1600}
            height={900}
            className="w-full"
            priority
          />
        </motion.div>

      </Container>
    </section>
  );
}