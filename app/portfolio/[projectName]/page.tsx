import { portfolio_projects } from "data/portfolio";

export default function ProjectID({ params }) {
  // const {projectName} = params

  console.log(params);
  const project = portfolio_projects.filter(
    (p) => p.name === params.projectName
  )[0];
  return (
    <>
      <pre>{JSON.stringify(project, null, 2)}</pre>
    </>
  );
}
