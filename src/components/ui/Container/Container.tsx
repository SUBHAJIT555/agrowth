import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "nav";
  width?: "default" | "narrow" | "wide" | "full";
};

const widths = {
  default: "max-w-site",
  narrow: "max-w-narrow",
  wide: "max-w-wide",
  full: "max-w-none",
} as const;

export function Container({
  children,
  className,
  as: Component = "div",
  width = "default",
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full px-[15px]",
        widths[width],
        className,
      )}
    >
      {children}
    </Component>
  );
}
