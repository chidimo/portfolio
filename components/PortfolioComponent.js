import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import Container from "react-bootstrap/Container";

import { myPortfolio } from "../data/portfolio";
import styles from "./PortfolioComponent.module.scss";
import { useRouter } from "next/router";

export const PortfolioComponent = ({ screenshots }) => {
  const router = useRouter();

  const [visibleProjects, setVisibleProjects] = useState([]);

  const selectedStack = useMemo(
    () =>
      router.query.selectedStack?.split(",").filter((name) => name !== "") ||
      [],
    [router.query]
  );

  const getProjectsToShow = (filterArray) =>
    myPortfolio.filter((pf) => filterArray.some((el) => pf.stack.includes(el)));

  useEffect(() => {
    if (selectedStack.length > 0) {
      setVisibleProjects(getProjectsToShow(selectedStack));
    } else {
      setVisibleProjects(myPortfolio);
    }
  }, [selectedStack]);

  const handleStackClick = (stackName) => {
    let newStack = [];

    if (selectedStack.includes(stackName)) {
      newStack = selectedStack.filter((sn) => sn !== stackName);
    } else {
      newStack = selectedStack.concat(stackName);
    }

    setVisibleProjects(getProjectsToShow(newStack));
    router.push(`/portfolio?selectedStack=${newStack?.join(",")}`);
  };

  const clearFilter = () => {
    setVisibleProjects(myPortfolio);
    router.push("/portfolio");
  };

  return (
    <Container>
      <h3 className="page_title">Portfolio</h3>

      {selectedStack.length > 0 && (
        <>
          <div>
            <span
              className={["chip", "blueBg", "pointer"].join(" ")}
              onClick={clearFilter}
            >
              Clear filter
            </span>
          </div>
          <hr />

          <div className={styles.selectedStack}>
            <p>
              Showing projects built with{" "}
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
        </>
      )}

      {visibleProjects.map((pf, idx) => {
        const {
          title,
          stack,
          links,
          categories,
          description,
          screenshotsFolder,
        } = pf;

        const shots = screenshots.filter(
          (ssh) => ssh.projectName === screenshotsFolder
        )[0] || { fileData: [] };

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
                    selectedStack?.includes(st) ? "selected_stack" : "",
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

            <div className={styles.single_project_screenshots}>
              {shots.fileData.map((sh, idx) => {
                const { filename, imagePublicUrl, width, height } = sh;

                return (
                  <div key={idx} className={styles.screenshot_display}>
                    <Image
                      width={width}
                      height={height}
                      src={imagePublicUrl}
                      alt={filename}
                    />

                    {/* <div className={styles.screenshot_mask}></div> */}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </Container>
  );
};
