import Container from "react-bootstrap/Container";

import { myCertifications } from "../data/certifications";
import styles from './CertificationsComponent.module.scss'

export const CertificationsComponent = () => {
  return (
    <Container>
      <h3 className="page_title">Certifications me.</h3>

      {myCertifications.map((ct, idx) => {
        const { title } = ct;

        return (
          <div key={idx}>
            <h5>{title}</h5>
          </div>
        );
      })}
    </Container>
  );
};
