interface Props {
  title: string;
  items: string[];
}

export default function SecurityCard({
  title,
  items,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">

      <h3 className="mb-5 text-xl font-semibold">
        {title}
      </h3>

      <ul className="space-y-3">

        {items.map((item) => (

          <li
            key={item}
            className="flex items-center gap-3"
          >

            <div className="h-2 w-2 rounded-full bg-green-500" />

            {item}

          </li>

        ))}

      </ul>

    </div>
  );
}