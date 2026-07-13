interface BadgeProps {
  text: string;
}

export default function Badge({ text }: BadgeProps) {
  return (
    <span
      className="
      inline-flex
      items-center
      rounded-full
      bg-blue-600/20
      text-blue-400
      px-3
      py-1
      text-sm
      font-medium
      border
      border-blue-500/30
    "
    >
      {text}
    </span>
  );
}