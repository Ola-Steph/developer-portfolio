interface Props {
  title: string;
  active: boolean;
  onClick: () => void;
}

export default function SidebarItem({
  title,
  active,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full rounded-xl px-4 py-3 text-left
        transition-all duration-200

        ${
          active
            ? "bg-blue-600 text-white"
            : "text-slate-400 hover:bg-slate-800 hover:text-white"
        }
      `}
    >
      {title}
    </button>
  );
}