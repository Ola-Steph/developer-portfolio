import DocumentationHeader from "../components/DocumentationHeader";

import DatabaseMetric from "../components/DatabaseMetric";
import CollectionCard from "../components/CollectionCard";
import FieldRow from "../components/FieldRow";
import RelationshipDiagram from "../components/RelationshipDiagram";

export default function Database() {
  return (
    <div className="space-y-16">
      <DocumentationHeader
        title="Database Design"
        description="The banking platform uses MongoDB with Mongoose ODM. The data model was designed around simplicity, scalability, and secure handling of sensitive financial information."
        category="Database"
        complexity="Advanced"
        related={[
          {
            name: "Architecture",
            href: "/banking/docs/architecture",
          },
          {
            name: "API",
            href: "/banking/docs/api",
          },
          {
            name: "Security",
            href: "/banking/docs/security",
          },
        ]}
      />

      <section>
        <h2 className="mb-8 text-3xl font-bold">
          Database Overview
        </h2>

        <div className="grid gap-6 md:grid-cols-4">
          <DatabaseMetric
            label="Collections"
            value="2"
          />

          <DatabaseMetric
            label="Relationships"
            value="2"
          />

          <DatabaseMetric
            label="Embedded Objects"
            value="1"
          />

          <DatabaseMetric
            label="Enums"
            value="4"
          />
        </div>
      </section>

      <CollectionCard
        title="Users Collection"
        description="Stores customer accounts, authentication data, balances, KYC information and profile settings."
      >
        <FieldRow field="firstName" type="String" required />
        <FieldRow field="lastName" type="String" required />
        <FieldRow field="email" type="String (Unique)" required />
        <FieldRow field="password" type="String (bcrypt)" required />
        <FieldRow field="accountNumber" type="String (Unique)" />
        <FieldRow field="balance" type="Number" />
        <FieldRow field="role" type="Enum" />
        <FieldRow field="kycStatus" type="Enum" />
        <FieldRow field="profileImage" type="String" />
        <FieldRow field="otp" type="String" />
        <FieldRow field="passwordResetToken" type="String" />
      </CollectionCard>

      <CollectionCard
        title="Transactions Collection"
        description="Stores deposits, withdrawals, transfers and approval information."
      >
        <FieldRow field="sender" type="ObjectId → User" required />
        <FieldRow field="receiver" type="ObjectId → User" />
        <FieldRow field="externalAccount" type="Embedded Object" />
        <FieldRow field="type" type="Enum" required />
        <FieldRow field="status" type="Enum" />
        <FieldRow field="amount" type="Number" required />
        <FieldRow field="authorizationCode" type="String" />
      </CollectionCard>

      <RelationshipDiagram />

      <section>
        <h2 className="mb-8 text-3xl font-bold">
          Design Decisions
        </h2>

        <div className="space-y-6 rounded-2xl border border-slate-700 bg-slate-900 p-8">
          <div>
            <h3 className="text-xl font-semibold">
              Embedded User Metadata
            </h3>

            <p className="mt-2 text-slate-400">
              Password reset tokens, OTP values, profile images and KYC
              information are stored directly within the User document.
              This reduces unnecessary joins and keeps user-related data
              centralized.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Transaction References
            </h3>

            <p className="mt-2 text-slate-400">
              Transactions reference sender and receiver documents using
              MongoDB ObjectIds, providing efficient relationship mapping
              while avoiding duplicated user information.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Enumerated Status Fields
            </h3>

            <p className="mt-2 text-slate-400">
              Enums are used throughout the data model for roles, KYC
              states, transaction types and transaction status to enforce
              consistent values across the application.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}