import Link from "next/link";

import { navItems, siteConfig } from "@/data/site";
import { BrandLogo } from "@/components/layout/brand-logo";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function Footer() {
  return (
    <footer className="pb-8 pt-16">
      <div className="container-shell">
        <Reveal>
          <div className="surface overflow-hidden rounded-[32px] p-8 transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-ink/10 hover:shadow-floating sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-5">
                <BrandLogo />
                <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                  Product-grade websites and software for teams that care how the work is built.
                </h2>
                <p className="max-w-2xl text-base leading-7">
                  Premium web applications, SaaS platforms, internal tooling, and
                  marketing sites shaped around business clarity, maintainable code,
                  and a serious design bar.
                </p>
                <Button href="/contact" variant="primary" trailingIcon>
                  Discuss a Project
                </Button>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="mb-4 text-sm font-semibold text-ink">Navigation</p>
                  <div className="space-y-3">
                    {navItems.map((item) => (
                      <Link key={item.href} href={item.href} className="block text-sm text-muted hover:text-ink">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-4 text-sm font-semibold text-ink">Contact</p>
                  <div className="space-y-3 text-sm text-muted">
                    <p>{siteConfig.email}</p>
                    <p>{siteConfig.location}</p>
                    <div className="pt-2">
                      {siteConfig.socialLinks.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="mr-4 inline-block hover:text-ink"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-2 border-t border-line/70 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
              <p>Copyright {new Date().getFullYear()} {siteConfig.name}. Built for serious client work.</p>
              <p>{siteConfig.availability}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
