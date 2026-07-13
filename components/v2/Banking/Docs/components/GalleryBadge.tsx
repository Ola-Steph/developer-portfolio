interface Props {
  text: string;
}

export default function GalleryBadge({
  text,
}: Props) {
  return (
    <span className="rounded-full bg-blue-600 px-3 py-1 text-sm">
      {text}
    </span>
  );
}