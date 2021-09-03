import Container from "react-bootstrap/Container";
import { mySocial } from "../data/social";
import Image from "next/image";
import styles from "./IndexComponent.module.scss";

export const IndexComponent = () => {
  return (
    <Container>
      <div className={styles.social_container_style}>
        {mySocial.map((soc, idx) => {
          const { badgeLink, badgeText } = soc;

          return (
            <div key={idx}>
              <a href={badgeText} target="_blank" rel="noopener noreferrer">
                <Image
                  className={styles.image}
                  src={badgeLink}
                  alt={badgeText}
                  width={75}
                  height={20}
                />
              </a>
            </div>
          );
        })}
      </div>

      <div>
        <h3 className="page_title">Hi, I am Orji Chidi Matthew. </h3>
      </div>
    </Container>
  );
};
