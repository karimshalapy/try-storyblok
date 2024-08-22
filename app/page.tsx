import { getStoryblokApi } from "@/utils/getStoryblokApi";
import { ISbStoriesParams, StoryblokStory } from "@storyblok/react/rsc";

export default async function Home() {
  const { data } = await fetchData();

  return <StoryblokStory story={data.story} />;
}

async function fetchData() {
  const sbParams: ISbStoriesParams = { version: "draft" };

  const storyblokApi = getStoryblokApi();

  console.log("storyblokApi", storyblokApi);

  return storyblokApi.get(`cdn/stories/home`, sbParams, { cache: "no-store" });
}
