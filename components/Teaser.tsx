import { type SbBlokData, storyblokEditable } from "@storyblok/react/rsc";
import type { FC } from "react";

const Teaser: FC<{ blok: SbBlokData }> = ({ blok }) => {
  return (
    <h2 {...storyblokEditable(blok)} className="text-4xl font-bold mb-10">
      {typeof blok.headline !== "object" && blok.headline}
    </h2>
  );
};

export default Teaser;
