import data from "/public/sample/data.json";

export type CardInfo = {
  id: number;
  artist: string;
  imgSrc: string;
  url: string;
};

export const SHELFS = data as CardInfo[];
