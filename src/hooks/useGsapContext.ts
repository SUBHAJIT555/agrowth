"use client";

import { useLayoutEffect, type DependencyList, type RefObject } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap, registerGsapPlugins } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function useGsapContext(
  scope: RefObject<HTMLElement | null>,
  animate: () => void,
  deps: DependencyList = [],
) {
  const prefersReducedMotion = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (prefersReducedMotion || !scope.current) {
      return;
    }

    registerGsapPlugins();

    const context = gsap.context(() => {
      animate();
    }, scope);

    return () => {
      context.revert();
    };
    // Caller supplies deps for values the animation reads.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReducedMotion, scope, ...deps]);
}

export function killScrollTriggers() {
  if (typeof window === "undefined") {
    return;
  }

  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}
