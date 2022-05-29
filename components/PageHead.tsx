import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export const PageHead = () => {
  const router = useRouter();

  const [ogUrl, setOgUrl] = useState("");
  const ogImage = "/images/headshot.JPG";

  let titleText = "Welcome";

  switch (router.pathname) {
    case "/portfolio":
      titleText = "Portfolio";
      break;
    case "/publications":
      titleText = "Publications";
      break;
    case "/certifications":
      titleText = "Certifications";
      break;
    case "/blog":
      titleText = "Blog";
      break;
    case "/experience":
      titleText = "Experience";
      break;
    default:
      break;
  }

  const browserTitle = `${titleText} _-_ Chidi Orji`;
  const description = "The personal website of Chidi Orji.";

  useEffect(() => {
    const baseUrl = `https://${window.location.host}`;

    setOgUrl(`${baseUrl}${router.pathname}`);
  }, [router.pathname]);

  return (
    <Head>
      <title>{browserTitle}</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={browserTitle} />
      <meta name="twitter:card" content="summary" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content="A picture of me smiling." />
    </Head>
  );
};
