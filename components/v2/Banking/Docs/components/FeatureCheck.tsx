import { CheckCircle2 } from "lucide-react";

interface Props {
  text: string;
}

export default function FeatureCheck({
  text,
}: Props) {
  return (
    <div className="flex items-center gap-3">

      <CheckCircle2 className="text-green-400" size={20} />

      <span>{text}</span>

    </div>
  );
}