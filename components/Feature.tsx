import { type SbBlokData, storyblokEditable } from "@storyblok/react/rsc";
import type { FC } from "react";

const Feature: FC<{ blok: SbBlokData }> = ({ blok }) => (
  <div
    {...storyblokEditable(blok)}
    className="bg-blue-700 text-white text-center p-2 rounded-md"
  >
    {typeof blok.name !== "object" && blok.name}
  </div>
);

export default Feature;
