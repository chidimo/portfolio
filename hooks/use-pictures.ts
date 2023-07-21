// "use client";

import fs from "fs";
import path from "path";
import clsx from "clsx";
import sizeOf from "image-size";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

import { Project, Screenshot } from "types/index";
import Modal from "components/Modal";
import { mergeURLParams } from "utils/manipulateUrlParams";
import { imageDirectories, portfolio_projects } from "../data/portfolio";
import Link from "next/link";

async function getPictures() {
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
}

export async function getStaticProps() {
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

  return {
    props: { images },
  };
}

type Props = {
  images?: {
    projectName: string;
    fileData: Screenshot[];
  }[];
};

export const PortfolioProjs = (props: Props) => {
  const router = useRouter();

  const { images } = props;

  const [modalOpen, setModalOpen] = useState(false);
  const onCloseModal = () => setModalOpen(false);

  const [selectedImage, setSelectedImage] = useState<Screenshot | null>(null);

  const badgeClass =
    "bg-gray-200 px-2 py-1 rounded cursor-pointer flex justify-center";

  const techs = useMemo(
    () =>
      ((router.query.technologies ?? "") as string)
        .split(",")
        .filter((n) => n !== ""),
    [router.query.technologies]
  );

  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);

  const handleStackClick = (name: string) => {
    let arr = [name];

    if (techs.length > 0) {
      if (techs.includes(name)) {
        arr = techs.filter((sn) => sn !== name);
      } else {
        arr = techs.concat(name);
      }
    }

    const computedRoute = mergeURLParams(router.query, "/portfolio", {
      technologies: arr.join(","),
    });
    router.push(computedRoute);
  };

  useEffect(() => {
    let visibleProjects = portfolio_projects;

    if (techs.length > 0) {
      visibleProjects = visibleProjects.filter((pf) =>
        techs.some((el) => pf.stack.includes(el))
      );
    }

    setVisibleProjects(visibleProjects);
  }, [techs]);

  return {images}
};
