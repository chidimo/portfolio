import { Provider } from "react-redux";
import ReactModal from 'react-modal';

import { Footer } from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { TopNavigation } from "../components/TopNavigation";
import { store } from "../store/store";
import "../styles/globals.css";
import Container from "react-bootstrap/Container";
import styles from "./_app.module.scss";
import { PageHead } from "../components/PageHead";
import { SocialInfo } from "../components/SocialInfo";

ReactModal.setAppElement('#root');


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PageHead />

      <Container
        fluid
        className={styles.top_level_container}
        style={{ padding: 0 }}
      >
        <TopNavigation />

        <Container
          className={styles.components_wrapper_container}
          style={{ paddingLeft: "0" }}
        >
          <SocialInfo />
          <Component {...pageProps} />
        </Container>
        <Footer />
        <Sidebar />
        {/* <ScrollToTop /> */}
      </Container>
    </Provider>
  );
}

export default MyApp;
