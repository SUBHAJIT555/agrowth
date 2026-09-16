"use client";

import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "left" | "right";
};

export function FadeIn({
  children,
  className,
  delay = 0,
  variant = "up",
}: FadeInProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.18);
  const motionClass = variant === "left" ? "aos-left" : variant === "right" ? "aos-right" : "aos-fade";

  return (
    <div
      ref={ref}
      className={cn(motionClass, inView && "in-view", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
