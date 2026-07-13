import Image from "next/image";
import { motion } from "framer-motion";
import { heroData } from "@/data/portfolio";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import { Badge, Container } from "../shared";

export default function Hero() {
  return (
    <section 
     id="home"
    className="bg-slate-950  pt-36 pb-24 text-white">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Badge text="Available for Remote, Relocation & Contract Opportunities" />

            <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-6xl">
              {heroData.name}
            </h1>

            <h2 className="mt-4 text-3xl font-semibold text-blue-400">
              {heroData.title}
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              {heroData.subtitle}
            </p>

            <HeroButtons />

            <HeroStats stats={heroData.stats} />
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex justify-center"
          >
            <div className="overflow-hidden rounded-3xl border border-slate-800 shadow-2xl">
              <Image
                src="/images/air.jpg"
                alt="Stephen Jaiyeola"
                width={420}
                height={520}
                priority
              />
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}