"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { headerCta } from "@/config/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { DesktopNavigation } from "@/components/layout/Header/DesktopNavigation";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { useScrolledPast } from "@/hooks/useScrolledPast";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const scrolled = useScrolledPast(0);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      const active = document.activeElement;
      if (active instanceof HTMLElement) active.blur();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className={cn(
        "pointer-events-none inset-x-0 top-0 z-50 py-3",
        scrolled ? "header-sticky-in fixed" : "absolute",
      )}
    >
      <Container>
        <div
          className={cn(
            "pointer-events-auto hidden items-center justify-between rounded-[100px] border border-white/[0.08] px-[35px] shadow-[0_15px_35px_rgba(0,0,0,0.3)] backdrop-blur-[20px] nav:flex",
            scrolled ? "bg-header-scrolled py-2" : "bg-header py-3",
          )}
        >
          <Logo variant="white" size="header" priority />
          <DesktopNavigation />
          <Button href={headerCta.href} className="shrink-0">
            {headerCta.label}
          </Button>
        </div>
      </Container>
      <MobileNavigation key={pathname} />
    </header>
  );
}
