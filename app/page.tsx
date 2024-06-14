import clsx from "clsx";
import { HomeLeft } from "components/home-left";

export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 space-y-5 md:space-y-0">
      <HomeLeft />
      <img
        src="/images/headshot.JPG"
        alt=""
        className={clsx(
          "aspect-[6/5] w-full max-w-lg rounded-2xl object-cover lg:max-w-none xl:row-span-2"
        )}
      />
    </div>
  );
}
