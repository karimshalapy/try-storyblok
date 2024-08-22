/** 1. Tag it as a client component */
"use client";
import type { FC, PropsWithChildren } from "react";

/** Import your components */
import { storyblokAppInit } from "@/utils/getStoryblokApi";
import Feature from "./Feature";
import Grid from "./Grid";
import Page from "./Page";
import Teaser from "./Teaser";

export const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};

/** 2. Initialize it as usual */
// storyblokInit({
//   accessToken: "cIV218lCFqzwU6yE580I0Qtt",
//   use: [apiPlugin],
//   components,
// });

storyblokAppInit();

export const StoryblokProvider: FC<PropsWithChildren> = ({ children }) => {
  return children;
};

export default StoryblokProvider;
