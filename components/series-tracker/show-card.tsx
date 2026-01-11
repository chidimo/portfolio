"use client";

import { RemoveShow } from "./remove-show";

type Props = {
  show: any;
  onRemoveShow: (removeId: string) => void;
};

export const ShowCard = ({ show, onRemoveShow }: Props) => {
  return (
    <li className="relative border rounded p-3">
      <RemoveShow showId={show.imdbId} onRemove={onRemoveShow} />
      <div className="flex gap-3">
        {show.thumbnail && show.thumbnail !== "N/A" ? (
          <img
            src={show.thumbnail}
            alt="poster"
            className="h-24 w-16 object-cover rounded md:h-40 md:w-28"
          />
        ) : (
          <div className="h-24 w-16 bg-gray-200 rounded md:h-40 md:w-28" />
        )}
        <div className="flex-1">
          <div className="font-semibold">{show.title}</div>
          {show.releaseYear ? (
            <div className="text-xs text-gray-600">{show.releaseYear}</div>
          ) : null}
          {show.plot ? (
            <div className="text-xs text-gray-700 mt-1 line-clamp-3">
              {show.plot}
            </div>
          ) : null}
          {show.mainCast && show.mainCast.length > 0 ? (
            <div className="mt-2 flex flex-wrap gap-1">
              {show.mainCast.slice(0, 3).map((c) => (
                <span
                  key={c}
                  className="text-[10px] md:text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full"
                >
                  {c}
                </span>
              ))}
            </div>
          ) : null}
          {show.nextAirDate ? (
            <div
              className={
                "text-xs mt-1 " +
                (Date.now() + 7 * 24 * 60 * 60 * 1000 >=
                new Date(show.nextAirDate).getTime()
                  ? "text-green-700"
                  : "text-gray-700")
              }
            >
              Next air date: {new Date(show.nextAirDate).toLocaleDateString()}
            </div>
          ) : null}
          <div className="mt-2 flex flex-wrap gap-2 items-center">
            <a
              href={show.imdbUrl}
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 hover:underline text-sm"
            >
              Open on IMDb
            </a>
            <a
              href={`/applications/series-movie-tracker/show/${show.imdbId}`}
              className="text-sm text-blue-700 hover:underline"
            >
              View details
            </a>
            <div className="w-full" />
          </div>
        </div>
      </div>
    </li>
  );
};
