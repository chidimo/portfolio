import fs from "fs";
import path from "path";
import sizeOf from "image-size";

import { PortfolioComponent } from "../components/PortfolioComponent";

export async function getStaticProps() {
  const directoriesToRead = ["ekeday", "identify", "koya", "dnd", "testx"];

  const images = directoriesToRead.map((name) => {
    const imgUrlPath = `images/${name}`;
    const imgPublicPath = `public/images/${name}`;

    const imgDir = path.join(process.cwd(), imgPublicPath);
    const filenames = fs.readdirSync(imgDir);

    const fileData = filenames.map((filename) => {
      const imagePath = path.join(imgUrlPath, filename);
      const imageFullPath = path.join(imgDir, filename);
      const imageSizePath = path.join(imgPublicPath, filename);

      // const imageSrc = fs.readFileSync(imageFullPath, "utf8");

      const { width, height } = sizeOf(imageSizePath);
      return { width, height, filename, imagePath, imageFullPath };
    });
    return { projectName: name, fileData };
  });

  return {
    props: { images },
  };
}

const Portfolio = (props) => {
  return <PortfolioComponent screenshots={props.images} />;
};

export default Portfolio;
