import "../styles/globals.css";

import { PageHead } from "../components/PageHead";
import { TopNavigation } from "components/TopNavigation";

function MyApp({ Component, pageProps }: any) {
  return (
    <div>
      <PageHead />

      <div className="">
        <TopNavigation />

        <div className="px-2 md:px-8 lg:px-20 pt-8">
          {/* <SocialInfo /> */}
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
