import { useState } from "react";
import { sliderLists } from "../../constants"

function Menu() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const totalCocktails = sliderLists.length;

    const goToSlide = (index: number) => {
        const newIndex = (index + totalCocktails) % totalCocktails;
        setCurrentIndex(newIndex);
    }

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
    </section>
  )
}

export default Menu