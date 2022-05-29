import Container from "react-bootstrap/Container";
import styles from "./IndexComponent.module.scss";
import { SocialInfo } from "./SocialInfo";
import Link from "next/link";

const myPhone = "+2349036650603";
const myEmail = "orjichidi95@gmail.com";
const resumeLink =
  "https://docs.google.com/document/d/1zV-1cdYFYVq8AxzmyLgCXedTC4ppP_ngtBCFmgGzgso/edit?usp=sharing";

export const IndexComponent = () => {
  return (
    <Container>

      <div>
        <h4 className="page_title">Hi, I am Chidi Orji</h4>

        <div className={styles.about_me}>
          <p>
            I am a frontend developer by day and fullstack developer by night. I
            equally enjoy working on both frontend and backend.
          </p>

          <p className={styles.contact_information}>
            You can reach me by phone (
            <a href={`tel:${myPhone}`}>+234 903 665 0603</a>) or email (
            <a href={`mailto:${myEmail}`}>{myEmail}</a>), and my resume is
            available on this{" "}
            <a target="_blank" rel="noopener noreferrer" href={resumeLink}>
              link
            </a>
            .
          </p>

          <p>
            I currently work with{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://softcom.xyz"
            >
              Softcom
            </a>{" "}
            as a frontend developer, doing awesome things at{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https:beta.identify.softcom.xyz"
            >
              Identify
            </a>{" "}
            and{" "}
            <a target="_blank" rel="noopener noreferrer" href="https://koya.co">
              Koya LMS
            </a>
            .
          </p>

          <p>
            My core competencies are in <code>JavaScript</code> (
            <code>React</code>, <code>React Native</code>, <code>Redux</code>,{" "}
            <code>ApolloClient</code>, <code>Next.js</code>,{" "}
            <code>Typescript</code> etc) and <code>Python</code> (
            <code>Django</code>, <code>Flask</code>, <code>PostgreSQL</code>,{" "}
            <code>SQLAlchemy</code>, etc). I ocassionally work with{" "}
            <code>Express.js</code> and <code>Meteor.js</code>.
          </p>

          <p>
            I write and publish technical articles on{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.smashingmagazine.com/author/chidi-orji/"
            >
              smashingmagazine
            </a>
            .
          </p>

          <p>
            You can find my portfolio <Link href="/portfolio">here</Link> and a
            list of my published technical articles{" "}
            <Link href="/publications">here</Link>.
          </p>
        </div>
      </div>
    </Container>
  );
};
