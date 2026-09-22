import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/config/site";
import { BrandMark } from "@/components/ui/Logo/BrandMark";

const sizes = {
  header: { mark: 36, wordmark: true, type: 18 },
  footer: { mark: 44, wordmark: true, type: 22 },
  mobile: { mark: 36, wordmark: false, type: 16 },
} as const;

type LogoProps = {
  variant?: "white" | "whiteSmall" | "mark" | "dark";
  size?: keyof typeof sizes;
  className?: string;
  priority?: boolean;
};

export function Logo({
  variant = "white",
  size = "header",
  className,
}: LogoProps) {
  const display = sizes[size];
  const onDark = variant !== "dark" && variant !== "mark";

  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2.5 no-underline", className)}
      aria-label={`${site.name} home`}
    >
      <BrandMark
        tone="color"
        title={site.name}
        className="shrink-0"
        style={{ width: display.mark, height: display.mark }}
      />
      {display.wordmark ? (
        <span
          className={cn(
            "font-semibold tracking-[-0.03em] leading-none",
            onDark ? "text-white" : "text-[#0b1220]",
          )}
          style={{ fontSize: display.type }}
        >
          Agent Mart{" "}
          <span className={onDark ? "text-[#ff8a3d]" : "text-[#e04300]"}>
            AI
          </span>
        </span>
      ) : null}
    </Link>
  );
}
