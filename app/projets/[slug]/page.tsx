import ProjectDetailPage from "@/components/projects/ProjectDetailPage";
import ProjectNotFound from "@/components/projects/ProjectNotFound";
import {
  getAllProjectSlugs,
  getProjectBySlug,
} from "@/components/projects/data/projects";

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return <ProjectNotFound />;
  }

  return <ProjectDetailPage project={project} />;
}
