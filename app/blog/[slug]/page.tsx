import type { Metadata } from "next";
import BlogDetailPage from "@/components/blog/BlogDetailPage";

export const metadata: Metadata = {
  title: "Article à la une | Blog | Numispark",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export default function Page() {
  return <BlogDetailPage />;
}
