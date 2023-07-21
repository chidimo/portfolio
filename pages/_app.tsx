import "../app/globals.css";

import { PageHead } from "../components/page-head";

function MyApp({ Component, pageProps }: any) {
  return (
    <div>
      <PageHead />

      <div className="">
        <div className="px-2 md:px-8 lg:px-20 pt-8">
          {/* <SocialInfo /> */}
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
