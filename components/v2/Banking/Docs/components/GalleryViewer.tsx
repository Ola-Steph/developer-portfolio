import { useState } from "react";
import Image from "next/image";

import GallerySidebar from "./GallerySidebar";
import GalleryBadge from "./GalleryBadge";

import { bankingGallery } from "@/data/banking-gallery";

export default function GalleryViewer() {
  const [active, setActive] = useState(0);

  const item = bankingGallery[active];

  return (
    <div className="grid gap-8 lg:grid-cols-4">

      {/* Sidebar */}

      <GallerySidebar
        items={bankingGallery.map((i) => i.title)}
        active={active}
        onSelect={setActive}
      />

      {/* Content */}

      <div className="lg:col-span-3">

        {/* Image */}

        <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-700">

          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />

        </div>

        {/* Header */}

        <div className="mt-8 flex items-center justify-between">

          <div>

            <h2 className="text-3xl font-bold">

              {item.title}

            </h2>

            <p className="mt-3 text-slate-400">

              {item.description}

            </p>

          </div>

          <div className="rounded-full bg-slate-800 px-4 py-2">

            {active + 1} / {bankingGallery.length}

          </div>

        </div>

        {/* Endpoint */}

        <section className="mt-10">

          <h3 className="mb-3 text-xl font-semibold">

            Backend Endpoint

          </h3>

          <div className="rounded-xl bg-slate-900 p-4 font-mono">

            {item.endpoint}

          </div>

        </section>

        {/* Security */}

        <section className="mt-10">

          <h3 className="mb-4 text-xl font-semibold">

            Security

          </h3>

          <div className="flex flex-wrap gap-3">

            {item.security.map((security) => (

              <GalleryBadge
                key={security}
                text={security}
              />

            ))}

          </div>

        </section>

        {/* Database */}

        <section className="mt-10">

          <h3 className="mb-4 text-xl font-semibold">

            Database Collections

          </h3>

          <div className="flex flex-wrap gap-3">

            {item.database.map((collection) => (

              <GalleryBadge
                key={collection}
                text={collection}
              />

            ))}

          </div>

        </section>

        {/* Tech */}

        <section className="mt-10">

          <h3 className="mb-4 text-xl font-semibold">

            Technologies

          </h3>

          <div className="flex flex-wrap gap-3">

            {item.technologies.map((tech) => (

              <GalleryBadge
                key={tech}
                text={tech}
              />

            ))}

          </div>

        </section>

        {/* Navigation */}

        <div className="mt-12 flex justify-between">

          <button
            disabled={active === 0}
            onClick={() => setActive(active - 1)}
            className="rounded-lg bg-slate-800 px-5 py-3 disabled:opacity-40"
          >
            Previous
          </button>

          <button
            disabled={active === bankingGallery.length - 1}
            onClick={() => setActive(active + 1)}
            className="rounded-lg bg-blue-600 px-5 py-3 disabled:opacity-40"
          >
            Next
          </button>

        </div>

      </div>

    </div>
  );
}