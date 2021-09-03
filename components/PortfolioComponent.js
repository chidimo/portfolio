import Container from "react-bootstrap/Container";

import { projects } from "../data/portfolio";
import styles from "./PortfolioComponent.module.scss";

export const PortfolioComponent = () => {
  return (
    <Container>
      <h3 className="page_title">Portfolio</h3>

      {projects.map((pf, idx) => {
        const { title, category, stack, links, description } = pf;

        return (
          <div key={idx}>
            <h5>{title}</h5>
          </div>
        );
      })}
    </Container>
  );
};
