import { track } from "@vercel/analytics";

/**
 * Events that tell whether a tech lead reaches the code.
 *   click_github_<where>   link to the GitHub profile (nav, hero, contacto…)
 *   click_repo_<repo>      link to a specific repository
 *   open_case_<slug>       open a case study from the home page
 *   click_email            mailto link
 *   scroll_75              75% of the page scrolled (once per page view)
 */
export type EventName =
  | `click_github_${string}`
  | `click_repo_${string}`
  | `open_case_${string}`
  | "click_email"
  | "scroll_75";

type Props = Record<string, string | number | boolean | null>;

declare global {
  interface Window {
    clarity?: (command: "event", name: string) => void;
  }
}

/** Sends the event to Vercel Analytics and, when loaded, to Microsoft Clarity. */
export function trackEvent(name: EventName, props?: Props) {
  track(name, props);
  window.clarity?.("event", name);
}

/** Event names only allow [a-z0-9_]; turns "mesa-viva" into "mesa_viva". */
export function eventSlug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "_");
}
