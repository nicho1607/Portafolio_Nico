"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

/** Sends scroll_75 once per page view, when the bottom of the viewport passes 75% of the page. */
export default function ScrollDepth() {
  const pathname = usePathname();

  useEffect(() => {
    let sent = false;
    const onScroll = () => {
      if (sent) return;
      const { scrollHeight } = document.documentElement;
      if (window.scrollY + window.innerHeight >= scrollHeight * 0.75) {
        sent = true;
        trackEvent("scroll_75", { path: pathname });
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return null;
}
