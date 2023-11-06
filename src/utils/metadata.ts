// src/utils/metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zack DeParle | Portfolio",
  authors: [
    { name: "Zack DeParle", url: "https://github.com/zdeparle" },
  ],
  description: "Zack DeParle's personal portfolio website.",
  openGraph: {
    title: "Zack DeParle | Portfolio",
    description: "Zack DeParle's personal portfolio website.",
    url: "https://www.ZackDeParle.com",
    images: [
      {
        url: "/photo.jpeg",
        alt: "Zack DeParle | Portfolio",
        width: 640,
        height: 800,
      },
    ],
  },
  alternates: {
    canonical: "https://www.ZackDeParle.com",
  },
};
