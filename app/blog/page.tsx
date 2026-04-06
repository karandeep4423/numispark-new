import type { Metadata } from "next";
import BlogPage from "../components/BlogPage";

export const metadata: Metadata = {
  title: "Le Blog | Numispark",
  description: "Suivez toute l'actualité de Numispark",
};

export default function Page() {
  return <BlogPage />;
}
