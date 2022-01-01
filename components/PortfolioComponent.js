import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import Container from "react-bootstrap/Container";

import { myPortfolio } from "../data/portfolio";
import styles from "./PortfolioComponent.module.scss";
import { useRouter } from "next/router";
import { mergeURLParams } from "../utils/manipulateUrlParams";
import { Modal } from "./Modal";

export const PortfolioComponent = ({ screenshots }) => {
  const router = useRouter();

  const [visibleProjects, setVisibleProjects] = useState([]);

  const selectedStack = useMemo(
    () =>
      router.query.selectedStack?.split(",").filter((name) => name !== "") ||
      [],
    [router.query]
  );

  const selectedCategory = useMemo(
    () =>
      router.query.selectedCategory?.split(",").filter((name) => name !== "") ||
      [],
    [router.query]
  );

  const handleStackClick = (stackName) => {
    let newStack = [];

    if (selectedStack.includes(stackName)) {
      newStack = selectedStack.filter((sn) => sn !== stackName);
    } else {
      newStack = selectedStack.concat(stackName);
    }

    const computedRoute = mergeURLParams(router.query, "/portfolio", {
      selectedStack: newStack?.join(","),
    });
    router.push(computedRoute);
  };

  const handleCategoryClick = (stackName) => {
    let newStack = [];

    if (selectedCategory.includes(stackName)) {
      newStack = selectedCategory.filter((sn) => sn !== stackName);
    } else {
      newStack = selectedCategory.concat(stackName);
    }

    const computedRoute = mergeURLParams(router.query, "/portfolio", {
      selectedCategory: newStack?.join(","),
    });
    router.push(computedRoute);
  };

  const clearFilter = () => router.push("/portfolio");

  useEffect(() => {
    let visibleProjects = myPortfolio;

    if (selectedStack.length > 0) {
      visibleProjects = visibleProjects.filter((pf) =>
        selectedStack.some((el) => pf.stack.includes(el))
      );
    }

    if (selectedCategory.length > 0) {
      visibleProjects = visibleProjects.filter((pf) =>
        selectedCategory.some((el) => pf.categories.includes(el))
      );
    }

    setVisibleProjects(visibleProjects);
  }, [selectedStack, selectedCategory]);

  const filterClassName = [
    "list_item_container",
    styles.portfolio_filter_container,
  ].join(" ");

  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState({});

  const closeModal = () => {
    setModalImage({});
    setModalOpen(false);
  };
  const openModal = (img) => {
    setModalImage(img);
    setModalOpen(true);
  };

  return (
    <Container>
      <h3 className="page_title">Portfolio</h3>

      {visibleProjects.length < myPortfolio.length && (
        <div className={filterClassName}>
          <div>
            <span
              className={["chip", "pointer"].join(" ")}
              onClick={clearFilter}
            >
              Clear all filter
            </span>
          </div>

          {selectedStack?.length > 0 && (
            <div>
              Selected stack(s){" "}
              {selectedStack.map((sst, idx) => {
                const selectedStackClassName = ["chip"].join(" ");
                return (
                  <span key={idx} className={selectedStackClassName}>
                    {sst}
                  </span>
                );
              })}
            </div>
          )}

          {selectedCategory?.length > 0 && (
            <div>
              Selected category(s){" "}
              {selectedCategory.map((sst, idx) => {
                const selectedStackClassName = ["chip"].join(" ");
                return (
                  <span key={idx} className={selectedStackClassName}>
                    {sst}
                  </span>
                );
              })}
            </div>
          )}
          {/* <hr /> */}
        </div>
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

        const wrapperClassName = ["list_item_container"].join(" ");

        return (
          <div key={idx} className={wrapperClassName}>
            <div className={styles.single_project_title}>
              <p>{title}</p>
            </div>

            <div className={styles.single_project_meta}>
              <div className={["mb_5"].join(" ")}>
                {categories.map((ct, idx) => {
                  const categoryClassName = [
                    "chip",
                    "grey_chip",
                    "pointer",
                    selectedCategory?.includes(ct) ? "selected_chip" : "",
                  ].join(" ");
                  return (
                    <span
                      key={idx}
                      title={`Click to show ${ct} projects`}
                      className={categoryClassName}
                      onClick={() => handleCategoryClick(ct)}
                    >
                      {ct}
                    </span>
                  );
                })}
              </div>

              <div className={["mb_5"].join(" ")}>
                {stack.map((st, idx) => {
                  const stackClassName = [
                    "chip",
                    "lightgrey_chip",
                    "pointer",
                    selectedStack?.includes(st) ? "selected_chip" : "",
                  ].join(" ");
                  return (
                    <span
                      key={idx}
                      title={`Click to show ${st} projects`}
                      className={stackClassName}
                      onClick={() => handleStackClick(st)}
                    >
                      {st}
                    </span>
                  );
                })}
              </div>

              <div>
                {Object.entries(links).map(([key, value], idx) => {
                  return (
                    <span key={idx} className={["chip", "link_chip"].join(" ")}>
                      <a href={value} target="_blank" rel="noopener noreferrer">
                        {key}
                      </a>
                    </span>
                  );
                })}
              </div>
            </div>

            <div>
              <p>{description}</p>
            </div>

            {shots.fileData?.length > 0 && (
              <p>{shots.fileData?.length} screenshots</p>
            )}

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
                      onClick={() => openModal(sh)}
                      // className={styles.image_style}
                    />

                    {/* <div className={styles.screenshot_mask}></div> */}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      <Modal isOpen={modalOpen} onRequestClose={closeModal}>
        <div>
          <Image
            width={modalImage.width}
            height={modalImage.height}
            src={modalImage.imagePublicUrl}
            alt={modalImage.filename}
            onClick={closeModal}
          />
        </div>
      </Modal>
    </Container>
  );
};
