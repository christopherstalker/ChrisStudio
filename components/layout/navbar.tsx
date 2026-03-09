"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { navItems, siteConfig } from "@/data/site";
import { motionTransition } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/layout/brand-logo";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      <div className="container-shell pt-4">
        <div className="surface relative rounded-full px-4 py-3 sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" aria-label={`${siteConfig.name} home`}>
              <BrandLogo />
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-sm font-medium text-muted transition-[color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:text-ink",
                      isActive && "text-ink",
                    )}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-white shadow-sm"
                        transition={motionTransition.navPill}
                      />
                    ) : null}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <Button href="/contact" variant="primary" size="sm" trailingIcon>
                Start a Project
              </Button>
            </div>

            <button
              type="button"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setIsOpen((current) => !current)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white/80 text-ink md:hidden"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <AnimatePresence>
            {isOpen ? (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={motionTransition.menu}
                className="absolute left-0 right-0 top-[calc(100%+12px)] rounded-[28px] border border-line/80 bg-panel/95 p-4 shadow-floating backdrop-blur-sm md:hidden"
              >
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "rounded-2xl px-4 py-3 text-sm font-medium text-muted hover:bg-white hover:text-ink",
                          isActive && "bg-white text-ink",
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                  <Button href="/contact" className="mt-2 justify-center" trailingIcon>
                    Start a Project
                  </Button>
                </nav>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
