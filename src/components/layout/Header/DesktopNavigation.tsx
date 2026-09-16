"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerNavigation, isNavItemActive } from "@/config/navigation";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/navigation";

function DesktopItem({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const hasChildren = Boolean(item.children?.length);
  const isActive = isNavItemActive(pathname, item);
  const submenuId = `${item.label.replace(/\s+/g, "-").toLowerCase()}-submenu`;

  return (
    <li className="group relative">
      <Link
        href={item.href}
        className={cn(
          "inline-flex items-center gap-1 px-3 py-2 text-[18px] font-semibold capitalize leading-[26px] tracking-[0.6px] text-white transition-colors duration-300 hover:text-[#ff8235]",
          isActive && "text-brand-orange-mid",
        )}
        aria-haspopup={hasChildren ? "true" : undefined}
        aria-controls={hasChildren ? submenuId : undefined}
      >
        {item.label}
        {hasChildren ? (
          <svg
            viewBox="0 0 12 12"
            className="size-3.5 opacity-90"
            aria-hidden="true"
          >
            <path
              d="M2.5 4.5 6 8l3.5-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : null}
      </Link>
      {hasChildren ? (
        <div
          id={submenuId}
          className="invisible absolute top-full left-0 z-50 pt-2 opacity-0 transition-[opacity,visibility] duration-300 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 motion-reduce:transition-none"
        >
          <ul className="min-w-[220px] origin-top translate-y-5 rounded-[14px] bg-[rgba(18,9,4,0.95)] py-2 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-[15px] transition-transform duration-300 group-hover:translate-y-0 group-focus-within:translate-y-0 motion-reduce:translate-y-0 motion-reduce:transition-none">
            {item.children?.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  className="block px-5 py-2 text-[14px] font-medium leading-[26px] tracking-[0.6px] whitespace-nowrap text-white transition-[color,padding,background-color] duration-200 hover:bg-white/[0.06] hover:pl-6 hover:text-[#ff8235]"
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
}

export function DesktopNavigation() {
  return (
    <nav aria-label="Primary">
      <ul className="flex flex-wrap items-center">
        {headerNavigation.map((item) => (
          <DesktopItem key={item.href} item={item} />
        ))}
      </ul>
    </nav>
  );
}
