interface Props {
  field: string;
  type: string;
  required?: boolean;
}

export default function FieldRow({
  field,
  type,
  required = false,
}: Props) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-slate-800 px-4 py-3">

      <span className="font-mono">
        {field}
      </span>

      <div className="flex items-center gap-3">

        <span className="text-slate-400">
          {type}
        </span>

        {required && (
          <span className="rounded bg-red-900 px-2 py-1 text-xs text-red-300">
            Required
          </span>
        )}

      </div>

    </div>
  );
}