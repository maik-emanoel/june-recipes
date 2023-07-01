import {
  Basket,
  CaretCircleLeft,
  CaretCircleRight,
  CookingPot,
} from "@phosphor-icons/react";
import { useState } from "react";
import { recipes } from "./recipes";

import recipe1 from "./assets/recipe-1.png";
import recipe2 from "./assets/recipe-2.jpg";
import recipe3 from "./assets/recipe-3.jpg";
import recipe4 from "./assets/recipe-4.png";

const recipeImages = [
  {
    src: recipe1,
    alt: "Ilustração de uma Pamonha",
  },
  {
    src: recipe2,
    alt: "Imagem de um pote cheio de Paçocas",
  },
  {
    src: recipe3,
    alt: "Ilustração de uma Maça do amor",
  },
  {
    src: recipe4,
    alt: "Ilustração de um Bolo de Fubá",
  },
];

export default function App() {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    if (count === recipes.length - 1) return;
    setCount((prevState) => prevState + 1);
  }

  function handleDecrease() {
    if (count > 0) {
      setCount((prevState) => prevState - 1);
    }
  }

  console.log(recipes.length);
  return (
    <>
      <div className="bg-[#FEECE0] min-h-[50vh] pt-28 pb-14 lg:min-h-0 md:pt-20">
        <div className="max-w-[1073px] w-[90%] h-fit flex gap-14 mx-auto text-[#58190A] md:flex-col md:items-center md:text-center md:gap-6">
          <div className="max-w-[409px] w-full h-[293px] lg:h-48">
            <img
              src={recipeImages[count].src}
              alt={recipeImages[count].alt}
              className={`w-full h-full object-contain ${
                count === 0 ? "" : "mix-blend-multiply"
              }`}
            />
          </div>

          <div className="relative pb-11">
            <h1 className="text-7xl font-bold leading-normal lg:leading-none lg:text-5xl lg:mb-3">
              {recipes[count].name}
            </h1>
            <p className="text-4xl lg:text-2xl">{recipes[count].description}</p>
            <div className="flex absolute bottom-3 gap-2 md:left-[50%] md:translate-x-[-50%] md:bottom-0">
              <CaretCircleLeft
                size={36}
                color="#9B6647"
                onClick={handleDecrease}
                className={`cursor-pointer active:scale-95 ${
                  count < 1 ? "disabled" : ""
                }`}
              />
              <CaretCircleRight
                size={36}
                color="#9B6647"
                onClick={handleIncrease}
                className={`cursor-pointer active:scale-95 ${
                  count >= recipes.length - 1 ? "disabled" : ""
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#9B6647] text-[#FEECE0] min-h-[50vh]">
        <div className="max-w-[1100px] w-[90%] h-fit flex gap-14 mx-auto py-[72px] lg:gap-6 md:flex-col md:items-center">
          <div className="flex flex-col gap-4 max-w-[433px] w-full md:w-4/5 md:max-w-none sm:!w-[95%]">
            <h2 className="flex items-center gap-3 text-4xl sm:text-3xl">
              <Basket size={32} />
              Ingredientes
            </h2>
            <ul className="list-disc pl-8">
              {recipes[count].ingredients.map((ingredient, index) => (
                <li key={index} className="text-2xl lg:text-xl">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4 flex-2 md:w-4/5 sm:!w-[95%]">
            <h2 className="flex items-center gap-3 text-4xl sm:text-3xl">
              <CookingPot size={32} />
              Modo de preparo
            </h2>
            <ol className="list-decimal pl-8 sm:pl-7">
              {recipes[count].prepareMode.map((step, index) => (
                <li key={index} className="text-2xl lg:text-xl">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
