import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div" | "article";
  id?: string;
};

export function Section({
  children,
  className,
  as: Component = "section",
  id,
}: SectionProps) {
  return (
    <Component id={id} className={cn("relative", className)}>
      {children}
    </Component>
  );
}
