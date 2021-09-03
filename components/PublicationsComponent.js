import Container from "react-bootstrap/Container";

import { myPublications } from "../data/publications";

import styles from "./PublicationsComponent.module.scss";

export const PublicationsComponent = () => {
  return (
    <Container>
      <h3 className="page_title">My publications</h3>

      {myPublications
        .sort((a, b) => {
          return (
            new Date(b.publication_date).getTime() -
            new Date(a.publication_date).getTime()
          );
        })
        .map((ct, idx) => {
          const { title, platform, publication_date, link } = ct;

          return (
            <div key={idx} className={styles.publication_container}>
              <div className={styles.title_date_container}>
                <p className={styles.publication_title}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {title}
                  </a>
                </p>
                <p className={styles.publication_date}>{publication_date}</p>
              </div>
            </div>
          );
        })}
    </Container>
  );
};
