import type { Metadata } from "next";
import BlogPage from "@/components/blog/BlogPage";

export const metadata: Metadata = {
  title: "Le Blog | Numispark",
  description: "Suivez toute l'actualité de Numispark",
};

export default function Page() {
  return <BlogPage />;
}
