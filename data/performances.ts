export type Performance = {
  id: string;
  date: string; // Display format: MM.DD.YYYY or TBD
  dateISO?: string; // Optional ISO for sorting when available
  title: string;
  venue: string;
  location: string;
  details?: string;
  url?: string;
};

/**
 * Upcoming performances — replace placeholders with real concert data.
 * Keep entries empty or marked as placeholders until confirmed.
 */
export const performances: Performance[] = [
  {
    id: "placeholder-1",
    date: "TBD",
    title: "Upcoming Performance — Title TBD",
    venue: "Venue TBD",
    location: "San Antonio, TX",
    details:
      "Concert details will be announced here. Replace this placeholder entry with confirmed performance information.",
  },
  {
    id: "placeholder-2",
    date: "TBD",
    title: "Upcoming Performance — Title TBD",
    venue: "Venue TBD",
    location: "Location TBD",
    details:
      "Add date, venue, program notes, and ticket links when available.",
  },
];

export const performancesSection = {
  label: "Performances",
  heading: "Upcoming Performances",
  emptyNote:
    "Concert dates will be published as they are confirmed. Please check back soon or inquire for current scheduling.",
} as const;
