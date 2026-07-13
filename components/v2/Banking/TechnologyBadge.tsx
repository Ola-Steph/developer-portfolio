interface TechnologyBadgeProps {
  text: string;
}

export default function TechnologyBadge({
  text,
}: TechnologyBadgeProps) {
  return (
    <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-cyan-300">
      {text}
    </span>
  );
}