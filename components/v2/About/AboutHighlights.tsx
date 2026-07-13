import {
  MapPin,
  Briefcase,
  Globe,
  Laptop,
  Plane,
  CheckCircle,
} from "lucide-react";

const items = [
  {
    icon: MapPin,
    title: "Location",
    value: "Nigeria",
  },
  {
    icon: Laptop,
    title: "Work Style",
    value: "Remote Friendly",
  },
  {
    icon: Globe,
    title: "Availability",
    value: "Worldwide",
  },
  {
    icon: Plane,
    title: "Relocation",
    value: "Open to Visa Sponsorship",
  },
  {
    icon: Briefcase,
    title: "Status",
    value: "Open to Work",
  },
  {
    icon: CheckCircle,
    title: "Focus",
    value: "Full Stack Development",
  },
];

export default function AboutHighlights() {
  return (
    <div className="grid gap-6">

      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="flex items-center gap-5 rounded-2xl border border-slate-800 bg-slate-900 p-6"
          >
            <div className="rounded-xl bg-blue-600/20 p-3 text-blue-400">
              <Icon size={24} />
            </div>

            <div>
              <p className="text-sm text-slate-500">
                {item.title}
              </p>

              <h3 className="font-semibold text-white">
                {item.value}
              </h3>
            </div>
          </div>
        );
      })}

    </div>
  );
}