import {
  Basket,
  CaretCircleLeft,
  CaretCircleRight,
  CookingPot
} from "@phosphor-icons/react";
import { useState } from "react";
import { recipes } from "./recipes";

import recipe1 from "./assets/recipe-1.png"
import recipe2 from "./assets/recipe-2.png"
import recipe3 from "./assets/recipe-3.jpg"
import recipe4 from "./assets/recipe-4.jpg"

const recipeImages = [
  {
    src: recipe1,
    alt: 'Ilustração de uma Pamonha'
  },
  {
    src: recipe2,
    alt: 'Imagem de um pote cheio de Paçocas'
  },
  {
    src: recipe3,
    alt: 'Ilustração de uma Maça do amor'
  },
  {
    src: recipe4,
    alt: 'Ilustração de um Bolo de Fubá'
  }
];

export default function App() {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    if(count === recipes.length - 1) return
    setCount((prevState) => prevState + 1);
    console.log(count)
  }

  function handleDecrease() {
    if(count > 0) {
      setCount((prevState) => prevState - 1);
    }
    console.log(count)
  }

  return (
    <>
      <div className="bg-[#FEECE0] min-h-[50vh]">
        <div>
          <img src={recipeImages[count].src} alt={recipeImages[count].alt} />

          <div>
            <h1>{recipes[count].name}</h1>
            <p>{recipes[count].description}</p>
              <div className="flex">
                <CaretCircleLeft
                  size={32}
                  color="#9B6647"
                  onClick={handleDecrease}
                />
                <CaretCircleRight
                  size={32}
                  color="#9B6647"
                  onClick={handleIncrease}
                />
              </div>
          </div>
        </div>
      </div>

      <div className="bg-[#9B6647] min-h-[50vh]">
        <div>
          <h2>
            <Basket size={32} color="#FEECE0" />
            Ingredientes
          </h2>
          <ul>
            {recipes[count].ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>
            <CookingPot size={32} color="#FEECE0" />
            Modo de preparo
          </h2>
          <ol>
            {recipes[count].prepareMode.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
        <div></div>
      </div>
    </>
  );
}
