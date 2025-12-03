import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Results | Permanent LED Lighting Installations | Diamond Property Masters",
  description:
    "See real results from our permanent all-season LED lighting installations in Calgary, Vancouver, and Toronto.",
};

export default function ResultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
