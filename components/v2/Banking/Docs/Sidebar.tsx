import SidebarItem from "./SidebarItem";
import { DocPage } from "./types";

interface Props {
  active: DocPage;
  setActive: (page: DocPage) => void;
}

const items = [
  ["overview", "Overview"],
  ["architecture", "Architecture"],
  ["features", "Features"],
  ["api", "API Explorer"],
  ["authentication", "Authentication"],
  ["security", "Security"],
  ["database", "Database"],
  ["deployment", "Deployment"],
  ["gallery", "Gallery"],
  ["challenges", "Challenges"],
  ["lessons", "Lessons Learned"],
] as const;

export default function Sidebar({
  active,
  setActive,
}: Props) {
  return (
    <aside className="sticky top-28 h-fit rounded-3xl border border-slate-700 bg-slate-900 p-6">

      <h3 className="mb-6 text-xl font-bold text-white">
        Documentation
      </h3>

      <div className="space-y-2">

        {items.map(([id, title]) => (
          <SidebarItem
            key={id}
            title={title}
            active={active === id}
            onClick={() => setActive(id)}
          />
        ))}

      </div>
    </aside>
  );
}