import { foilBalloonProducts } from "@/data/foil-balloons";

export type FoilBalloonType = "heart" | "star" | "round" | "orbz" | "cartoon" | "number";

export const foilBalloonTypeNames: Record<FoilBalloonType, string> = {
  heart: "Heart Foil Balloon",
  star: "Star Foil Balloon",
  round: "Round Foil Balloon",
  orbz: "Orbz Balloon",
  cartoon: "Cartoon Foil Balloon",
  number: "Number & Alphabet Balloon",
};

export function filterFoilBalloonsByType(type: FoilBalloonType) {
  const filters: Record<FoilBalloonType, (name: string) => boolean> = {
    heart: (name) => name.includes("Heart"),
    star: (name) => name.includes("Star"),
    round: (name) => name.includes("Round"),
    orbz: (name) => name.includes("Orbz"),
    cartoon: (name) => name.includes("Cartoon"),
    number: (name) => name.includes("Number") || name.includes("Alphabet"),
  };

  const predicate = filters[type];
  return foilBalloonProducts.filter((product) => predicate(product.name));
}

export function isValidFoilBalloonType(type: string): type is FoilBalloonType {
  return ["heart", "star", "round", "orbz", "cartoon", "number"].includes(type);
}
