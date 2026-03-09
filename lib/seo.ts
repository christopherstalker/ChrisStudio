import type { Metadata } from "next";

import { siteConfig } from "@/data/site";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function createMetadata({ title, description, path }: MetadataInput): Metadata {
  const normalizedPath = path.startsWith("/") || path === "" ? path : `/${path}`;
  const url = `${siteConfig.url}${normalizedPath}`;

  return {
    title,
    description,
    alternates: {
      canonical: normalizedPath || "/",
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
