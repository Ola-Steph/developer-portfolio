interface Props {
  method: "GET" | "POST" | "PATCH" | "DELETE";
}

const colors = {
  GET: "bg-green-600",
  POST: "bg-blue-600",
  PATCH: "bg-yellow-600",
  DELETE: "bg-red-600",
};

export default function MethodBadge({ method }: Props) {
  return (
    <span
      className={`${colors[method]} rounded-md px-3 py-1 text-xs font-bold`}
    >
      {method}
    </span>
  );
}