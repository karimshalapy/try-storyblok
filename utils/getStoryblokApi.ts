import {
  StoryblokClient,
  apiPlugin,
  getStoryblokApi as getStoryblokApiDefault,
  storyblokInit,
} from "@storyblok/react/rsc";

/** Import your components */
import Page from "@/components/Page";
import Teaser from "@/components/Teaser";
import Feature from "@/components/Feature";
import Grid from "@/components/Grid";

const storyblokApi: StoryblokClient | undefined = undefined;

export const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};

export const storyblokAppInit = () => {
  storyblokInit({
    accessToken: "cIV218lCFqzwU6yE580I0Qtt",
    use: [apiPlugin],
    components,
  });

  return getStoryblokApiDefault();
};

/**
 * The default `getStoryblokApi` is not working as intended
 * so this is a custom one that retrieves the Storyblok API
 * client that we store in memory and initializes the app if
 * it's missing.  
 * This is a workaround and should be fixed by
 * Storyblok's team soon.
 *
 * @returns The Storyblok API client.
 * @see https://github.com/storyblok/storyblok-react/issues/952#issuecomment-1964192581
 */
export const getStoryblokApi = (): StoryblokClient => {
  if (storyblokApi !== undefined) return storyblokApi;
  return storyblokAppInit();
};
