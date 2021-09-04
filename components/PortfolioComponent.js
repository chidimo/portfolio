import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

import { myPortfolio } from "../data/portfolio";
import styles from "./PortfolioComponent.module.scss";

export const PortfolioComponent = () => {
  const [selectedStack, setSelectedStack] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState([]);

  useEffect(() => {
    setVisibleProjects(myPortfolio);
  }, []);

  const handleStackClick = (stackName) => {
    let data = [];
    let newStack = [];

    if (selectedStack.includes(stackName)) {
      newStack = selectedStack.filter((sn) => sn === stackName);
      data = visibleProjects.filter((pf) => !pf.stack.includes(stackName));
    } else {
      newStack = selectedStack.concat(stackName);
      data = myPortfolio.filter((pf) => pf.stack.includes(stackName));
    }
    setVisibleProjects(data);
    setSelectedStack(newStack);
  };

  return (
    <Container>
      <h3 className="page_title">Portfolio</h3>

      {selectedStack.length > 0 && (
        <div className={styles.selectedStack}>
          <p>
            Showing{" "}
            {selectedStack.map((sst, idx) => {
              const selectedStackClassName = ["chip", "blueBg"].join(" ");
              return (
                <span key={idx} className={selectedStackClassName}>
                  {sst}
                </span>
              );
            })}
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
              <div className={["mb_5"].join(" ")}>
                {categories.map((ct, idx) => {
                  const categoryClassName = ["chip", "greyBg"].join(" ");
                  return (
                    <span key={idx} className={categoryClassName}>
                      {ct}
                    </span>
                  );
                })}
              </div>

              <div className={["mb_5"].join(" ")}>
                {stack.map((st, idx) => {
                  const stackClassName = [
                    "chip",
                    "lightGreyBg",
                    "pointer",
                    selectedStack.includes(st) ? "selected_stack" : "",
                  ].join(" ");
                  return (
                    <span
                      key={idx}
                      className={stackClassName}
                      onClick={() => handleStackClick(st)}
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
