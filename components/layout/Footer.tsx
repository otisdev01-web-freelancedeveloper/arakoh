import Link from "next/link";
import { footerLinks, siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-obsidian/10 bg-obsidian text-ivory">
      <div className="site-shell section-pad !py-16 md:!py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16">
          <div>
            <p className="font-serif text-[clamp(1.8rem,3vw,2.4rem)] tracking-[0.06em] uppercase">
              {siteConfig.name}
            </p>
            <p className="mt-3 text-[0.8125rem] tracking-[0.16em] uppercase text-brass-soft/90">
              Concert Pianist · Piano Professor
            </p>
            <p className="mt-6 max-w-sm text-warm-gray">{siteConfig.location}</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-4 inline-block text-ivory/90 underline decoration-brass/50 underline-offset-4 transition hover:decoration-brass focus-ring"
            >
              {siteConfig.email}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:justify-items-end">
            <div className="sm:col-span-2 md:col-span-3">
              <p className="eyebrow text-brass-soft/70">Navigate</p>
              <ul className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3 md:justify-end">
                {footerLinks.map((link) => {
                  const href =
                    link.label === "YouTube" && siteConfig.social.youtube
                      ? siteConfig.social.youtube
                      : link.href === "#youtube"
                        ? "/#watch"
                        : link.href;
                  const external = Boolean(
                    link.label === "YouTube" && siteConfig.social.youtube,
                  );
                  return (
                    <li key={link.label}>
                      <Link
                        href={href}
                        className="text-[0.75rem] tracking-[0.16em] uppercase text-ivory/75 transition hover:text-ivory focus-ring"
                        {...(external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <hr className="editorial-divider--light mt-14" />

        <div className="mt-6 flex flex-col gap-3 text-[0.75rem] tracking-[0.08em] text-warm-gray sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}
          </p>
          <p className="uppercase tracking-[0.16em]">
            San Antonio · Stone Oak · Texas
          </p>
        </div>
      </div>
    </footer>
  );
}
