export default function RelationshipDiagram() {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-10">

      <h2 className="mb-10 text-3xl font-bold">
        Collection Relationships
      </h2>

      <div className="flex flex-col items-center">

        <div className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold">
          Users
        </div>

        <div className="my-4 text-3xl text-slate-500">
          │
        </div>

        <div className="rounded-xl bg-emerald-600 px-8 py-4 font-semibold">
          Transactions
        </div>

        <div className="mt-8 text-center text-slate-400">

          One User can create many Transactions.

          <br />

          A Transaction references both sender and receiver using ObjectId relationships.

        </div>

      </div>

    </div>
  );
}

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