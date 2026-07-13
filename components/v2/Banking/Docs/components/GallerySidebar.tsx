interface Props {
  items: string[];
  active: number;
  onSelect: (index: number) => void;
}

export default function GallerySidebar({
  items,
  active,
  onSelect,
}: Props) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">

      {items.map((item, index) => (
        <button
          key={item}
          onClick={() => onSelect(index)}
          className={`mb-2 w-full rounded-lg px-4 py-3 text-left transition ${
            active === index
              ? "bg-blue-600 text-white"
              : "hover:bg-slate-800"
          }`}
        >
          {item}
        </button>
      ))}

    </div>
  );
}