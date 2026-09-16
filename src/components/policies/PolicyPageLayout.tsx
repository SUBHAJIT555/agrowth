export function PolicyPageLayout({
  children,
  variant = "rich",
}: {
  children: React.ReactNode;
  variant?: "rich" | "document";
}) {
  return (
    <div className={`ag-policy-page ag-policy-${variant}`}>
      <div className="ag-policy-hero" aria-hidden="true" />
      <article className="ag-policy-article">
        <div className="ag-policy-container">{children}</div>
      </article>
    </div>
  );
}
