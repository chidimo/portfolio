import Link from "next/link";

import { Publication } from "types/index";
import { publications } from "data/publications";

const Publications = () => {
  return (
    <div>
      <ul role="list" className="divide-y divide-gray-200">
        {publications
          .sort((a, b) => {
            return (
              new Date(b.pub_date).getTime() - new Date(a.pub_date).getTime()
            );
          })
          .map((pub: Publication, idx: number) => {
            return (
              <li key={idx} className="py-4">
                <div className="flex space-x-3">
                  <img
                    className="h-6 w-6 rounded-full"
                    src={`https://ui-avatars.com/api/?name=${pub.platform}`}
                    alt=""
                  />
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <Link href={pub.link}>
                        <a target="_blank" rel="noreferrer noopener">
                          <h3 className="text-sm font-medium">{pub.title}</h3>
                        </a>
                      </Link>
                      <p className="text-sm text-gray-500 capitalize">
                        {pub.pub_date}
                      </p>
                    </div>
                    <p className="text-sm text-gray-500 capitalize">
                      {pub.platform}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Publications;
