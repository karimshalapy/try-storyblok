import {
  StoryblokComponent,
  storyblokEditable,
  type SbBlokData,
} from "@storyblok/react/rsc";
import type { FC } from "react";

const Grid: FC<{ blok: SbBlokData }> = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="grid grid-cols-3 gap-1">
      {Array.isArray(blok.items) &&
        blok.items.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
    </div>
  );
};

export default Grid;
