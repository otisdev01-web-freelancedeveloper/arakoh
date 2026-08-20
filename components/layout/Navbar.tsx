"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";
import { useScrolled } from "@/hooks/useMedia";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const pathname = usePathname();
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);
  const isStudio = pathname?.startsWith("/studio");

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color,color] duration-500",
          solid
            ? "border-b border-obsidian/8 bg-ivory/92 text-obsidian backdrop-blur-md"
            : isStudio
              ? "border-b border-transparent bg-transparent text-obsidian"
              : "border-b border-transparent bg-transparent text-ivory",
        )}
      >
        <div className="site-shell flex h-[var(--nav-h)] items-center justify-between gap-6">
          <Link
            href="/"
            className="focus-ring font-serif text-[1.35rem] tracking-[0.08em] uppercase"
            onClick={() => setOpen(false)}
          >
            {siteConfig.name}
          </Link>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => {
              const base = link.href.split("#")[0] || "/";
              const active =
                base === "/"
                  ? pathname === "/"
                  : Boolean(pathname?.startsWith(base));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "group relative text-[0.6875rem] font-medium tracking-[0.2em] uppercase transition-opacity hover:opacity-100 focus-ring",
                    active ? "opacity-100" : "opacity-70",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
                      solid || isStudio ? "bg-obsidian" : "bg-ivory",
                      active && "scale-x-100",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button
              href="/studio#inquire"
              variant={solid || isStudio ? "brass" : "light"}
              size="md"
              className="!py-2.5"
            >
              Private Lessons
            </Button>
          </div>

          <button
            type="button"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 bg-ivory lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <motion.nav
              aria-label="Mobile"
              className="site-shell flex h-full flex-col justify-center gap-2 pt-[var(--nav-h)]"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.07 } },
              }}
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={link.href}
                    className="display block py-3 text-[clamp(2.5rem,10vw,3.5rem)] text-obsidian"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  show: { opacity: 1, y: 0 },
                }}
                className="mt-8"
              >
                <Button href="/studio#inquire" variant="brass" className="w-full sm:w-auto">
                  Private Lessons
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
