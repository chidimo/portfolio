import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

import { myPortfolio } from "../data/portfolio";
import styles from "./PortfolioComponent.module.scss";

export const PortfolioComponent = () => {
  const [selectedStack, setSelectedStack] = useState();
  const [visibleProjects, setVisibleProjects] = useState([]);

  useEffect(() => {
    setVisibleProjects(myPortfolio);
  }, []);

  const handleStackClick = (stackName) => {
    const data = myPortfolio.filter((pf) => pf.stack.includes(stackName));
    setVisibleProjects(data);
  };

  return (
    <Container>
      <h3 className="page_title">Portfolio</h3>

      {selectedStack && (
        <div>
          <p>
            Showing{" "}
            <span
              style={{
                background: "#07f",
                color: "#fff",
                padding: "5px",
                borderRadius: "3px",
              }}
            >
              {selectedStack}
            </span>{" "}
            projects
          </p>
        </div>
      )}

      {visibleProjects.map((pf, idx) => {
        const { title, categories, stack, links, description } = pf;

        return (
          <div key={idx} className={styles.single_project_parent_container}>
            <div className={styles.single_project_title}>
              <p>{title}</p>
            </div>

            <div className={styles.single_project_meta}>
              <div className={styles.single_project_category}>
                {categories.map((ct, idx) => {
                  return <span key={idx}>{ct}</span>;
                })}
              </div>

              <div className={styles.single_project_stack}>
                {stack.map((st, idx) => {
                  return (
                    <span
                      key={idx}
                      onClick={() => {
                        handleStackClick(st);
                        setSelectedStack(st);
                      }}
                    >
                      {st}
                    </span>
                  );
                })}
              </div>

              <div className={styles.single_project_links}>
                {Object.entries(links).map(([key, value], idx) => {
                  return (
                    <a
                      key={idx}
                      href={value}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {key}
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <p>{description}</p>
            </div>
          </div>
        );
      })}
    </Container>
  );
};
