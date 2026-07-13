interface Props {
  title: string;
  json: string;
}

export default function JsonViewer({
  title,
  json,
}: Props) {
  return (
    <div className="rounded-xl overflow-hidden border border-slate-700">

      <div className="bg-slate-800 px-4 py-2 font-semibold">
        {title}
      </div>

      <pre className="overflow-auto bg-slate-950 p-5 text-sm text-green-300">
        <code>{json}</code>
      </pre>

    </div>
  );
}