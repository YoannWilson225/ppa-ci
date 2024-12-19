import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <>
      <section
        className="hero-section hero-1 bg-cover fix"
        style={{ backgroundImage: 'url("assets/img/hero/hero.jpg")' }}
      >
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="hero-content">
              <div className="container mx-auto px-4 pt-10 text-center">
                <div className="animate-pulse inline-flex text-xs rounded-lg bg-white py-1 lg:px-4 px-1 text-[#0078d4]">
                  Bienvenue au Parti des Peuples Africains – Côte d'Ivoire
                </div>
                <div className="mx-auto my-6 w-full leading-snug font-bold !text-2xl lg:max-w-3xl lg:!text-5xl text-white">
                  Ensemble, bâtissons une{" "}
                  <span className="text-[#0078d4] leading-snug">
                    Côte d'Ivoire souveraine
                  </span>{" "}
                  et{" "}
                  <span className="leading-snug text-[#0078d4]">
                    panafricaine
                  </span>
                  .
                </div>
                <p className="mx-auto w-full text-white lg:text-lg text-base">
                  Rejoignez-nous dans notre engagement pour la solidarité et la
                  liberté des peuples africains.
                </p>
                <div className="flex justify-center mt-6 items-center gap-4">
                  <Input
                    type="email"
                    placeholder="Entrer votre adresse mail"
                    className="w-96 h-12 bg-white text-black"
                  />
                  <Button
                    type="submit"
                    className="h-12 w-32 bg-[#0078d4] hover:bg-white hover:text-black"
                    variant="default"
                  >
                    Adhérer
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
