import { motion } from "framer-motion";

import { Container, SectionTitle } from "../shared";

import ArchitectureNode from "./ArchitectureNode";
import ConnectionLine from "./ConnectionLine";
import TechnologyBadge from "./TechnologyBadge";

export default function BankingArchitecture() {
  return (
    <section className="bg-slate-900 py-24">
      <Container>
        <SectionTitle
          centered
          title="System Architecture"
          subtitle="A production-ready banking platform built with a secure and scalable full-stack architecture."
        />

        <div className="mt-16 flex flex-col items-center">

          <ArchitectureNode
            title="Next.js Frontend"
            subtitle="React • TypeScript • Tailwind CSS"
          />

          <ConnectionLine />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2"
          >
            <TechnologyBadge text="HTTPS" />
            <TechnologyBadge text="REST API" />
            <TechnologyBadge text="JWT" />
          </motion.div>

          <ConnectionLine />

          <ArchitectureNode
            title="Express.js Backend"
            subtitle="Node.js • TypeScript"
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <ArchitectureNode
              title="Authentication"
              subtitle="JWT • Refresh Tokens"
            />

            <ArchitectureNode
              title="Authorization"
              subtitle="Role-Based Access Control"
            />

            <ArchitectureNode
              title="Business Logic"
              subtitle="Transfers • Deposits • Withdrawals"
            />

            <ArchitectureNode
              title="Notifications"
              subtitle="Email • OTP"
            />

          </div>

          <ConnectionLine />

          <ArchitectureNode
            title="MongoDB Atlas"
            subtitle="Mongoose ODM"
          />

          <ConnectionLine />

          <ArchitectureNode
            title="Deployment"
            subtitle="Docker • Render • Vercel • GitHub Actions"
          />

        </div>
      </Container>
    </section>
  );
}