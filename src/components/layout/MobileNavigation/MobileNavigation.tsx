"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Plus, X } from "lucide-react";
import { headerCta, headerNavigation } from "@/config/navigation";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

function MenuGlyph() {
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      aria-hidden="true"
    >
      <path d="M0 1.25h18" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 7h14" stroke="currentColor" strokeWidth="1.8" />
      <path d="M0 12.75h18" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const menuId = useId();

  useEffect(() => {
    const { body, documentElement } = document;
    const previousBody = body.style.overflow;
    const previousHtml = documentElement.style.overflow;

    if (open) {
      body.style.overflow = "hidden";
      documentElement.style.overflow = "hidden";
    }

    return () => {
      body.style.overflow = previousBody;
      documentElement.style.overflow = previousHtml;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="pointer-events-auto nav:hidden">
      <div className="fixed inset-x-0 top-0 z-50 flex h-[69px] items-center justify-between bg-header px-4 shadow-[0_10px_25px_rgba(0,0,0,0.3)] backdrop-blur-[20px]">
        <Logo variant="whiteSmall" size="mobile" priority />
        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-[4px] text-white"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(true)}
        >
          <MenuGlyph />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="fixed inset-0 z-[60] overflow-y-auto bg-[rgba(18,9,4,0.98)] px-[30px] pt-[55px] pb-10 backdrop-blur-[20px]"
            initial={prefersReducedMotion ? false : { x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={prefersReducedMotion ? undefined : { x: "-100%", opacity: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.3,
              ease: "easeOut",
            }}
          >
            <div className="mb-6 flex items-center justify-between">
              <Logo variant="white" size="header" />
              <button
                type="button"
                className="flex size-10 items-center justify-center text-white"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <X className="size-6" strokeWidth={2} />
              </button>
            </div>
            <nav aria-label="Mobile">
              <ul className="flex flex-col gap-y-3">
                {headerNavigation.map((item) => {
                  const hasChildren = Boolean(item.children?.length);
                  const expanded = openSection === item.href;
                  const submenuId = `${item.href}-mobile-submenu`;

                  return (
                    <li key={item.href}>
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          className="block py-2.5 text-[18px] font-medium capitalize leading-6 text-white transition-colors hover:text-[#ff8235]"
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </Link>
                        {hasChildren ? (
                          <button
                            type="button"
                            className="flex size-11 items-center justify-center text-white"
                            aria-expanded={expanded}
                            aria-controls={submenuId}
                            aria-label={`${expanded ? "Collapse" : "Expand"} ${item.label}`}
                            onClick={() =>
                              setOpenSection(expanded ? null : item.href)
                            }
                          >
                            <Plus
                              className={cn(
                                "size-5 transition-transform duration-300 motion-reduce:transition-none",
                                expanded && "rotate-45",
                              )}
                            />
                          </button>
                        ) : null}
                      </div>
                      {hasChildren ? (
                        <div
                          id={submenuId}
                          className={cn(
                            "grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none",
                            expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                          )}
                        >
                          <ul className="overflow-hidden pl-4">
                            {item.children?.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  className="block py-2 text-[15px] font-medium text-white/75 transition-colors hover:text-[#ff8235]"
                                  onClick={() => setOpen(false)}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="mt-6">
              <Button href={headerCta.href} className="w-full justify-center">
                {headerCta.label}
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
