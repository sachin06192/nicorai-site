import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — NicorAI",
  description:
    "Get in touch with NicorAI. Reach our offices in Montreal, Toronto, and Quebec City for AI consulting, development, and digital transformation services.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
