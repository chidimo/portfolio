import { mySocial } from "../data/social";
import Image from "next/image";
import styles from "./SocialInfo.module.scss";
import Container from "react-bootstrap/Container";

export const SocialInfo = () => {
  return (
    <Container className={styles.social_container_style}>
      {mySocial.map((soc, idx) => {
        const { badgeUrl, socialUrl } = soc;

        const src = `${badgeUrl}&link=${socialUrl}`;

        return (
          <a
            key={idx}
            href={socialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social_info}
          >
            <Image
              className={styles.image}
              src={src}
              alt={socialUrl}
              width={75}
              height={20}
            />
          </a>
        );
      })}
    </Container>
  );
};
