import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  outline: "btn-outline",
} as const;

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: keyof typeof variants;
  icon?: boolean;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Button({
  children,
  href,
  variant = "primary",
  icon = variant !== "outline",
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn("btn-base", variants[variant], className);

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {icon ? (
        <span className="btn-icon" aria-hidden="true">
          <svg viewBox="0 0 16 16" className="size-4" aria-hidden="true">
            <path
              d="M4.5 11.5 11.5 4.5M6 4.5h5.5V10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {content}
    </button>
  );
}
