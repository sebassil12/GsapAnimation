import { useState } from "react";
import { sliderLists } from "../../constants"

function Menu() {

    const [currentIndex, setCurrentIndex] = useState(0);
    
    const totalCocktails = sliderLists.length;

    const goToSlide = (index: number) => {
        const newIndex = (index + totalCocktails) % totalCocktails;
        setCurrentIndex(newIndex);
    }

    const getCocktailAll = (index: number) => {
        return sliderLists[(currentIndex + index + totalCocktails) % totalCocktails];
    }

    const currentCocktail = getCocktailAll(0);
    const prevCocktail = getCocktailAll(-1);
    const nextCocktail = getCocktailAll(1);

  return (
    <section id="menu" aria-labelledby="menu-heading">
      <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf"/>
      <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf"/>

      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>

      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {sliderLists.map((cocktail, index) => {
            const isActive = index === currentIndex;
            return(
                <button key={cocktail.id} className={`
                ${isActive ? 'text-white border-white' : 'text-white/50 border-white/50 hover:text-white hover:border-white'}`}
                onClick={() => goToSlide(index)}>
                    {cocktail.name}
                </button>
            )
        })}
      </nav>

      <div className="content">
        <div className="arrow">
            <button className="text-left" onClick={() => goToSlide(currentIndex - 1)}>
                <span>{prevCocktail.name}</span>
                <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true"/>
            </button>

            <button className="text-left" onClick={() => goToSlide(currentIndex + 1)}>
                <span>{nextCocktail.name}</span>
                <img src="/images/left-arrow.png" alt="right-arrow" aria-hidden="true"/>
            </button>
        </div>

        <div className="cocktail">
            <img src={currentCocktail.image} className="object-contain"/>
        </div>

      </div>
    </section>
  )
}

export default Menu