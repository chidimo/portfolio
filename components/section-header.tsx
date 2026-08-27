import { BrandMark } from "./brand-mark";

type Props = {
  title: string;
  description?: string;
  badge?: string;
};

export const SectionHeader = ({ title, description, badge }: Props) => (
  <div className="flex gap-4">
    <BrandMark name={badge || title} className="h-11 w-11 text-sm" />
    <div>
      <p className="font-serif text-lg font-bold leading-snug">{title}</p>
      {description ? (
        <p className="mt-1 text-sm text-muted">{description}</p>
      ) : null}
    </div>
  </div>
);
