import fs from "node:fs";
import path from "node:path";
import sizeOf from "image-size";

import { ProjectList } from "components/project-list";
import { PageHeader } from "components/page-header";
import { imageDirectories } from "lib/portfolio";
import type { Screenshot } from "types";
import { getMetadata } from "lib/constants";

export const metadata = getMetadata({ title: "Portfolio" });

async function getPhotos() {
  const shotsFolder = "screenshots";

  const images = imageDirectories.map((name) => {
    const imagesPath = `public/${shotsFolder}/${name}`;
    const imagesDir = path.join(process.cwd(), imagesPath);

    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir);
    }

    const filenames = fs.readdirSync(imagesDir);

    const fileData = filenames.map((filename) => {
      const imageFullPath = path.join(imagesDir, filename);
      const imageSizePath = path.join(imagesPath, filename);
      const imagePublicUrl = path.join(`/${shotsFolder}/${name}`, filename);
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
  return (
    <div>
      <PageHeader
        eyebrow="Work"
        title="Portfolio"
        intro="A non-exhaustive selection of things I've built across my career — client work, open source, and experiments. Filter by technology, or open a project for details and screenshots."
      />
      <ProjectList projectImages={await getPhotos()} />
    </div>
  );
}
