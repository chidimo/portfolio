import Container from "react-bootstrap/Container";
import { mySocial } from "../data/social";
import Image from "next/image";
import styles from "./IndexComponent.module.scss";

export const IndexComponent = () => {
  return (
    <Container>
      <div className={styles.social_container_style}>
        {mySocial.map((soc, idx) => {
          const { badgeUrl, socialUrl } = soc;

          const src = `${badgeUrl}&link=${socialUrl}`

          return (
            <div key={idx}>
              <a href={socialUrl} target="_blank" rel="noopener noreferrer">
                <Image
                  className={styles.image}
                  src={src}
                  alt={socialUrl}
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
