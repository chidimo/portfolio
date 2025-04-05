import fs from "node:fs";
import path from "node:path";
import sizeOf from "image-size";

import { ProjectList } from "components/project-list";
import { imageDirectories } from "lib/portfolio";
import type { Screenshot } from "types";

async function getPhotos() {
  const shotsFoler = "screenshots";

  const images = imageDirectories.map((name) => {
    const imagesPath = `public/${shotsFoler}/${name}`;

    const imagesDir = path.join(process.cwd(), imagesPath);

    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir);
    }

    const filenames = fs.readdirSync(imagesDir);

    const fileData = filenames.map((filename) => {
      const imageFullPath = path.join(imagesDir, filename);
      const imageSizePath = path.join(imagesPath, filename);

      const imagePublicUrl = path.join(`/${shotsFoler}/${name}`, filename);
      // const imageSrc = fs.readFileSync(imageFullPath, "utf8");
      const { width, height } = sizeOf(imageSizePath);
      return {
        width,
        height,
        filename,
        imagePublicUrl,
        imageFullPath,
      } as Screenshot;
    });
    return { projectName: name, fileData };
  });

  return images;
}

export default async function ProjectsPage() {
  return <ProjectList projectImages={await getPhotos()} />;
}
