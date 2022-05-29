import Container from "react-bootstrap/Container";

import { myCertifications } from "../data/certifications";
import styles from "./CertificationsComponent.module.scss";

export const CertificationsComponent = () => {

  const iversityURL = "https://iversity.org/verify";
  const udacityURL = "https://graduation.udacity.com/confirm";
  const courseraURL = "https://www.coursera.org/account/accomplishments/verify";

  return (
    <Container>
      <h3 className="page_title">Certifications</h3>

      {myCertifications.map((ct, idx) => {
        const { title, platform, certificate } = ct;

        let certificationLink = "";
        switch (platform) {
          case "Udacity":
            certificationLink = `${udacityURL}/${certificate}`;
            break;
          case "Coursera":
            certificationLink = `${courseraURL}/${certificate}`;
            break;
          case "Iversity":
            certificationLink = `${iversityURL}/${certificate}`;
            break;
          default:
            break;
        }

        const platformClassName = ["chip", "grey_chip"].join(" ");
        const wrapperClassName = ['list_item_container'].join(' ');

        return (
          <div key={idx} className={wrapperClassName}>
            <p className={styles.single_cert_title}>{title}</p>

            <div>
              <span className={platformClassName}>{platform}</span>
            </div>

            <div className={["mb_5"].join(" ")}>
              <span>
                View{" "}
                <span className={["chip", "link_chip"].join(" ")}>
                  <a
                    href={certificationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Certificate
                  </a>
                </span>
              </span>
            </div>
          </div>
        );
      })}
    </Container>
  );
};
