interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = false,
}: SectionTitleProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className="text-4xl md:text-5xl font-bold text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-slate-400 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}