import Container from "react-bootstrap/Container";

import { myPublications } from "../data/publications";
import styles from "./PublicationsComponent.module.scss";

export const PublicationsComponent = () => {
  const mediumUrl = "https://medium.com";
  const smashingUrl = "https://smashingmagazine.com";

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
          const { title, platform, publication_date, link, summary } = ct;

          let platformLink = "";
          switch (platform) {
            case "smashingmagazine":
              platformLink = smashingUrl;
              break;
            case "medium":
              platformLink = mediumUrl;
              break;
            default:
              break;
          }

          const wrapperClassName = ['list_item_container'].join(' ');

          return (
            <div key={idx} className={wrapperClassName}>
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
