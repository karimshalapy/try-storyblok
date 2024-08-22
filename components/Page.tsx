import {
  StoryblokComponent,
  storyblokEditable,
  type SbBlokData,
} from "@storyblok/react/rsc";
import type { FC } from "react";

const Page: FC<{ blok: SbBlokData }> = ({ blok }) => (
  <div
    {...storyblokEditable(blok)}
    className="flex min-h-screen flex-col items-center justify-between p-24"
  >
    <header>This is a static header</header>
    <main>
      {Array.isArray(blok.body) &&
        blok.body.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
    </main>
    <footer>This is a static footer</footer>
  </div>
);

export default Page;
