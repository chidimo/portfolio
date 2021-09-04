import Container from "react-bootstrap/Container";

import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <Container className={styles.footer_container_style} fluid>
      <footer className={styles.footer}>
        Built with{" "}
        <a
          className={styles.footer_link}
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
        </a>
      </footer>
    </Container>
  );
};
