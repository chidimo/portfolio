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
  images: {
    projectName: string;
    fileData: Screenshot[];
  }[];
};

const Portfolio = (props: Props) => {
  const router = useRouter();

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

  return (
    <>
      <div>
        {visibleProjects.map((project: Project, idx: number) => {
          const shots = props.images.filter(
            (ssh) => ssh.projectName === project.screenshotsFolder
          )[0] || { fileData: [] };

          return (
            <div key={idx} className="py-3">
              <h2 className="text-2xl font-bold my-2">{project.title}</h2>

              <ul
                role="list"
                className="grid grid-cols-3 gap-x-2 gap-y-2 sm:grid-cols-4 lg:grid-cols-6 my-4"
              >
                {project.stack.map((st, idx) => {
                  return (
                    <li
                      key={idx}
                      title={`Click to show ${st} projects`}
                      className={clsx([badgeClass], {
                        "border-2 border-green-400": techs.includes(st),
                      })}
                      onClick={() => handleStackClick(st)}
                    >
                      {st}
                    </li>
                  );
                })}
              </ul>

              <ul
                role="list"
                className="grid grid-cols-3 gap-x-2 gap-y-2 sm:grid-cols-4 lg:grid-cols-6 my-4"
              >
                {project.links.map((link, idx) => {
                  if (!link.url) alert(JSON.stringify(link, null, 2))
                  return (
                    <li key={idx} className="">
                      <Link href={link.url}>
                        <a target='_blank' rel='noreferrer noopener' className='text-sm text-blue-600'>{link.name}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <ul
                role="list"
                className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
              >
                {shots.fileData?.map((shot: any, id: number) => (
                  <li
                    key={id}
                    className="relative rounded"
                    onClick={() => {
                      setSelectedImage(shot);
                      setModalOpen(true);
                    }}
                  >
                    <div className="group block w-full max-w-[250px] aspect-w-10 aspect-h-7  border-2 border-gray-200 rounded-lgbg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-blue-500 overflow-hidden">
                      <img
                        src={shot.imagePublicUrl}
                        alt=""
                        className="object-cover pointer-events-none group-hover:opacity-75"
                      />
                      <button
                        type="button"
                        className="absolute inset-0 focus:outline-none"
                      >
                        <span className="sr-only">Enlarge picture</span>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <Modal
        title=""
        isOpen={modalOpen}
        onClose={onCloseModal}
        content={
          <div>
            <img
              alt=""
              src={selectedImage?.imagePublicUrl}
              className="object-cover pointer-events-none group-hover:opacity-75"
            />
          </div>
        }
      />
    </>
  );
};

export default Portfolio;
