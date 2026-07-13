import { useState } from "react";

import Sidebar from "./Sidebar";
import Content from "./Content";
import { DocPage } from "./types";

export default function BankingDocs() {
  const [active, setActive] =
    useState<DocPage>("overview");

  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[280px_1fr]">

        <Sidebar
          active={active}
          setActive={setActive}
        />

        <Content active={active} />

      </div>

    </section>
  );
}