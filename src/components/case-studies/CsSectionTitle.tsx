export function CsSectionTitle({
  prefix,
  highlight,
}: {
  prefix: string;
  highlight: string;
}) {
  return (
    <h2 className="cs-section-title">
      <span className="cs-section-title__prefix">{prefix}</span>{" "}
      <span className="cs-section-title__highlight">{highlight}</span>
    </h2>
  );
}
