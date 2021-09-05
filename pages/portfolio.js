import fs from "fs";
import path from "path";
import sizeOf from "image-size";

import { PortfolioComponent } from "../components/PortfolioComponent";
import { imageDirectories } from "../data/portfolio";

export async function getStaticProps() {
  const images = imageDirectories.map((name) => {
    const imagesPath = `public/images/${name}`;

    const imagesDir = path.join(process.cwd(), imagesPath);

    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir);
    }

    const filenames = fs.readdirSync(imagesDir);

    const fileData = filenames.map((filename) => {
      const imageFullPath = path.join(imagesDir, filename);
      const imageSizePath = path.join(imagesPath, filename);

      const imagePublicUrl = path.join(`/images/${name}`, filename);
      // const imageSrc = fs.readFileSync(imageFullPath, "utf8");

      const { width, height } = sizeOf(imageSizePath);
      return { width, height, filename, imagePublicUrl, imageFullPath };
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
