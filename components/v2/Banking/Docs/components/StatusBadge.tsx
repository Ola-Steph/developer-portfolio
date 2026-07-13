interface Props {
  protectedRoute: boolean;
}

export default function StatusBadge({
  protectedRoute,
}: Props) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-sm ${
        protectedRoute
          ? "bg-red-900 text-red-300"
          : "bg-green-900 text-green-300"
      }`}
    >
      {protectedRoute ? "Protected" : "Public"}
    </span>
  );
}