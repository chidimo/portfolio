import clsx from "clsx";
import { HomeLeft } from "components/home-left";

export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 md:space-y-0">
      <HomeLeft />
      <div className="relative mt-20 md:mt-0">
        <img
          src="/images/headshot.JPG"
          alt=""
          className={clsx(
            "aspect-[6/5] w-full rounded-2xl object-cover lg:max-w-none xl:row-span-2"
          )}
        />
      </div>
    </div>
  );
}
