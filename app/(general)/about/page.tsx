import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Title",
  description: "SEO Description",
  keywords: ["SEO", "Keywords", "mio"],
};

export default function AboutPage() {
  return <span className="text-7xl">ABout Page</span>;
}
