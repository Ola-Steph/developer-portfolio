interface Props {
  code: string;
}

export default function CodeBlock({
  code,
}: Props) {
  return (
    <pre className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm text-green-300">
      <code>{code}</code>
    </pre>
  );
}