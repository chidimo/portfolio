import { Monogram } from "./monogram";

type Props = {
  title: string;
  description?: string;
  /** Text the monogram derives its initials + tint from. Defaults to the title. */
  badge?: string;
};

export const SectionHeader = ({ title, description, badge }: Props) => {
  return (
    <div className="flex gap-4">
      <Monogram name={badge || title} className="h-11 w-11 text-sm" />
      <div className={description ? "" : "flex items-center"}>
        <p className="font-semibold leading-snug text-ink">{title}</p>
        {description ? (
          <p className="prose-muted mt-1 text-sm">{description}</p>
        ) : null}
      </div>
    </div>
  );
};
