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

  return (
    <>
      <div className="bg-[#FEECE0] min-h-[50vh] pt-28 pb-14">
        <div className="max-w-[1073px] w-full h-fit flex gap-14 mx-auto">
          <div className="max-w-[409px] w-full h-[293px]">
            <img
              src={recipeImages[count].src}
              alt={recipeImages[count].alt}
              className={`w-full h-full object-contain ${
                count === 0 ? "" : "mix-blend-multiply"
              }`}
            />
          </div>

          <div className="relative">
            <h1 className="text-7xl font-bold leading-normal">
              {recipes[count].name}
            </h1>
            <p className="text-4xl">{recipes[count].description}</p>
            <div className="flex absolute bottom-3 gap-2">
              <CaretCircleLeft
                size={36}
                color="#9B6647"
                onClick={handleDecrease}
              />
              <CaretCircleRight
                size={36}
                color="#9B6647"
                onClick={handleIncrease}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#9B6647] text-[#FEECE0] min-h-[50vh]">
        <div className="max-w-[1100px] w-full h-fit flex gap-14 mx-auto py-[72px]">
          <div className="flex flex-col gap-4 max-w-[433px] w-full">
            <h2 className="flex items-center gap-3 text-4xl">
              <Basket size={32} />
              Ingredientes
            </h2>
            <ul className="list-disc pl-8">
              {recipes[count].ingredients.map((ingredient, index) => (
                <li key={index} className="text-2xl">{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4 flex-2">
            <h2 className="flex items-center gap-3 text-4xl">
              <CookingPot size={32} />
              Modo de preparo
            </h2>
            <ol className="list-decimal pl-8">
              {recipes[count].prepareMode.map((step, index) => (
                <li key={index} className="text-2xl">{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
