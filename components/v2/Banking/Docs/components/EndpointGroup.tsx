interface Props {
  title: string;
  children: React.ReactNode;
}

export default function EndpointGroup({
  title,
  children,
}: Props) {
  return (
    <section>

      <h2 className="mb-6 text-3xl font-bold">

        {title}

      </h2>

      <div className="grid gap-6">

        {children}

      </div>

    </section>
  );
}