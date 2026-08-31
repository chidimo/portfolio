import { PageHeader } from "components/page-header";
import { MlProjectList } from "components/ml-project-list";
import { mlProjects } from "lib/ml-projects";
import { getMetadata } from "lib/constants";

export const metadata = getMetadata({
  title: "ML & AI Projects",
  path: "/ml",
  description:
    "Applied machine learning from production systems and MSc research at the University of Salford — semantic search, NLP, topic modelling, and computer vision.",
});

export default function MlProjectsPage() {
  return (
    <div>
      <PageHeader
        kicker="Research & Applied ML"
        title="ML & AI Projects"
        intro="Applied machine learning work from production systems and MSc research at the University of Salford."
      />

      <MlProjectList projects={mlProjects} />
    </div>
  );
}
