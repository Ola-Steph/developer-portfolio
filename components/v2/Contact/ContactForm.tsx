export default function ContactForm() {
  return (
    <form
      action="mailto:YOUR_EMAIL"
      method="post"
      encType="text/plain"
      className="rounded-3xl border border-slate-800 bg-slate-950 p-10"
    >
      <h3 className="text-2xl font-bold text-white">
        Send a Message
      </h3>

      <div className="mt-8 space-y-6">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 text-white outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 text-white outline-none"
        />

        <textarea
          rows={6}
          name="message"
          placeholder="Tell me about your project..."
          className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 text-white outline-none"
        />

        <button
          className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
        >
          Send Message
        </button>

      </div>
    </form>
  );
}