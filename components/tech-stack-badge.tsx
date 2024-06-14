"use client";

import { BadgeColor, TechnologyStack } from "types";
import { Badge } from "./badge";
import { stackReadableNames } from "lib/constants";

interface Props {
  stack?: TechnologyStack;
  onClick?: () => void;
}

export const TechStackBadge = (props: Props) => {
  const { stack, onClick } = props;

  if (!stack) return null;

  let color: unknown = "";

  if (stack === TechnologyStack.reactNative) color = BadgeColor.blue;
  if (stack === TechnologyStack.redux) color = BadgeColor.purple;
  if (stack === TechnologyStack.javascript) color = BadgeColor.yellow;
  if (stack === TechnologyStack.web3) color = BadgeColor.green;
  if (stack === TechnologyStack.react) color = BadgeColor.blue;
  if (stack === TechnologyStack.nextJs) color = BadgeColor.gray;
  if (stack === TechnologyStack.typescript) color = BadgeColor.blue;
  if (stack === TechnologyStack.arcgisDesktop) color = BadgeColor.blue;
  if (stack === TechnologyStack.mongoDb) color = BadgeColor.green;
  if (stack === TechnologyStack.meteorJs) color = BadgeColor.indigo;
  if (stack === TechnologyStack.python) color = BadgeColor.blue;
  if (stack === TechnologyStack.django) color = BadgeColor.green;
  if (stack === TechnologyStack.bootstrap) color = BadgeColor.purple;
  if (stack === TechnologyStack.graphene) color = BadgeColor.blue;
  if (stack === TechnologyStack.apolloClient) color = BadgeColor.gray;
  if (stack === TechnologyStack.expressJs) color = BadgeColor.gray;
  if (stack === TechnologyStack.html5) color = BadgeColor.purple;
  if (stack === TechnologyStack.css3) color = BadgeColor.purple;
  if (stack === TechnologyStack.djangoRestFramework) color = BadgeColor.blue;
  if (stack === TechnologyStack.pandas) color = BadgeColor.blue;
  if (stack === TechnologyStack.matplotlib) color = BadgeColor.blue;
  if (stack === TechnologyStack.youtubeApiV3) color = BadgeColor.red;
  return (
    <Badge
      text={stackReadableNames[stack]}
      color={color as undefined}
      onClick={onClick}
    />
  );
};
