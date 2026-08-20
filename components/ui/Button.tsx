"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type ButtonVariant = "solid" | "ghost" | "light" | "dark" | "brass";
type ButtonSize = "md" | "lg";

type CommonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  arrow?: boolean;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};

const variants: Record<ButtonVariant, string> = {
  light:
    "bg-[#F4F1EA] !text-[#111111] border border-[#F4F1EA] hover:bg-[#E9E4DA] hover:border-[#E9E4DA]",
  brass:
    "bg-[#A99570] !text-[#111111] border border-[#A99570] hover:bg-[#c4b396] hover:border-[#c4b396]",
  ghost:
    "bg-transparent !text-[#111111] border border-[#111111]/40 hover:bg-[#111111] hover:!text-[#F4F1EA]",
  solid:
    "bg-[#111111] !text-[#F4F1EA] border border-[#111111] hover:bg-[#2A2927] hover:border-[#2A2927]",
  dark: "bg-transparent !text-[#F4F1EA] border border-[#F4F1EA]/55 hover:bg-[#F4F1EA] hover:!text-[#111111]",
};

const sizes: Record<ButtonSize, string> = {
  md: "px-6 py-3 text-[0.6875rem]",
  lg: "px-8 py-3.5 text-[0.71875rem]",
};

export function Button({
  children,
  variant = "solid",
  size = "md",
  className,
  arrow = true,
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-3 font-medium tracking-[0.2em] uppercase transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#A99570]",
    variants[variant],
    sizes[size],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {arrow ? (
        <motion.span
          aria-hidden
          className="inline-flex"
          initial={false}
          whileHover={{ x: 2, y: -2 }}
        >
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </motion.span>
      ) : null}
    </>
  );

  if ("href" in props && props.href) {
    const { href, target, rel, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href} target={target} rel={rel} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button type={buttonProps.type ?? "button"} className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
