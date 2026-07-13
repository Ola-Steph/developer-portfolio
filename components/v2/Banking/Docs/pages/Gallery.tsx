import DocumentationHeader from "../components/DocumentationHeader";
import GalleryViewer from "../components/GalleryViewer";

export default function Gallery() {
  return (
    <div className="space-y-16">

      <DocumentationHeader
        title="Application Gallery"
        description="A walkthrough of the major features available within the banking platform."
        category="UI Showcase"
        complexity="Intermediate"
        related={[
          {
            name: "Features",
            href: "/banking/docs/features",
          },
          {
            name: "API",
            href: "/banking/docs/api",
          },
          {
            name: "Database",
            href: "/banking/docs/database",
          },
        ]}
      />

      <GalleryViewer />

    </div>
  );
}