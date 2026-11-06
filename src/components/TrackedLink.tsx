"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { trackEvent, type EventName } from "@/lib/analytics";

type Props = ComponentProps<"a"> & {
  href: string;
  event: EventName;
  eventProps?: Record<string, string>;
};

/** A link that records an analytics event on click. External links open in a new tab. */
export default function TrackedLink({ href, event, eventProps, onClick, children, ...rest }: Props) {
  const external = /^https?:\/\//.test(href);
  const handleClick: ComponentProps<"a">["onClick"] = (e) => {
    trackEvent(event, eventProps);
    onClick?.(e);
  };

  if (external || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        onClick={handleClick}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
