import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const logoAssets = {
  white: {
    src: "/assets/logos/agrowth-logo-white.png",
    width: 120,
    height: 124,
  },
  whiteSmall: {
    src: "/assets/logos/agrowth-logo-white-small.png",
    width: 97,
    height: 100,
  },
  mark: {
    src: "/assets/logos/agrowth-mark.png",
    width: 800,
    height: 676,
  },
} as const;

const sizes = {
  header: { width: 70, height: 72 },
  footer: { width: 142, height: 120 },
  mobile: { width: 43, height: 44 },
} as const;

type LogoProps = {
  variant?: keyof typeof logoAssets;
  size?: keyof typeof sizes;
  className?: string;
  priority?: boolean;
};

export function Logo({
  variant = "white",
  size = "header",
  className,
  priority = false,
}: LogoProps) {
  const asset = logoAssets[variant];
  const display = sizes[size];

  return (
    <Link
      href="/"
      className={cn("inline-flex items-center", className)}
      aria-label="AGrowth.io home"
    >
      <Image
        src={asset.src}
        alt="AGrowth.io"
        width={display.width}
        height={display.height}
        priority={priority}
        className="object-contain"
        style={{ width: display.width, height: display.height }}
      />
    </Link>
  );
}
