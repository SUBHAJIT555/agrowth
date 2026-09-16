"use client";

import { useEffect } from "react";

export function GsapProvider() {
  useEffect(() => {
    let cancelled = false;

    void import("@/lib/gsap").then(async ({ registerGsapPlugins, ScrollTrigger }) => {
      registerGsapPlugins();
      await document.fonts.ready;
      if (!cancelled) {
        ScrollTrigger.refresh();
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
