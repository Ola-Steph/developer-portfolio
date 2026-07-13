import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold text-white">
            Let us Build Something Great
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-400">
            I am currently open to remote software engineering roles,
            international opportunities, freelance work and exciting
            collaborations.
          </p>

        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          <ContactCard />

          <ContactForm />

        </div>

      </div>
    </section>
  );
}



// import ContactCard from "./ContactCard";

// export default function Contact() {
//   return (
//     <section id="contact">
//       <ContactCard />
//     </section>
//   );
// }