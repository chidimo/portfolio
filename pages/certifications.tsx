import Link from "next/link";

import { Certificate } from "types/index";
import { certificates } from "data/certifications";

const Certifications = () => {
  return (
    <div>
      <ul role="list" className="divide-y divide-gray-200">
        {certificates.map((cert: Certificate, idx: number) => {
          return (
            <li key={idx} className="py-4">
              <div className="flex space-x-3">
                <img
                  className="h-6 w-6 rounded-full"
                  src={`https://ui-avatars.com/api/?name=${cert.platform}`}
                  alt=""
                />
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <Link href={`${cert.platform_url}/${cert.id}`}>
                      <a target="_blank" rel="noopener noreferrer">
                        <h3 className="text-sm font-medium">{cert.title}</h3>
                      </a>
                    </Link>
                    <p className="text-sm text-gray-500">{cert.platform}</p>
                  </div>
                  <p className="text-sm text-gray-500">{cert.about}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Certifications;
