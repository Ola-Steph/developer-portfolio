interface Props {
  text: string;
}

export default function InfoBadge({
  text,
}: Props) {
  return (
    <span className="rounded-full bg-slate-800 px-3 py-1 text-xs">
      {text}
    </span>
  );
}