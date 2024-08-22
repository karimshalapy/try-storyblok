import { components } from "@/components/SotryblokProvider";
import {
  StoryblokClient,
  apiPlugin,
  getStoryblokApi as getStoryblokApiDefault,
  storyblokInit,
} from "@storyblok/react/rsc";

const storyblokApi: StoryblokClient | undefined = undefined;

export const AppStoryblokInit = () => {
  storyblokInit({
    accessToken: "cIV218lCFqzwU6yE580I0Qtt",
    use: [apiPlugin],
    components,
  });

  return getStoryblokApiDefault();
};

export const getStoryblokApi = (): StoryblokClient => {
  if (storyblokApi !== undefined) return storyblokApi;
  return AppStoryblokInit();
};
