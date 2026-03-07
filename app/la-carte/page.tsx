import type { Metadata } from "next";
import CarteMenu from "@/components/sections/carte-menu";

export const metadata: Metadata = {
  title: "La Carte | StrictFood",
  description:
    "Decouvre notre carte : burgers, wraps, snacks et desserts proteines. 0% huile de cuisson, macros affichees sur chaque produit.",
};

export default function LaCartePage() {
  return <CarteMenu />;
}
