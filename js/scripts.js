//Todas las tarjetas
const sliderCardsElements = document.querySelectorAll('.slider__card');

//Acceso a las variables de CSS
const rootStyles = document.documentElement.style;

// ¿Cuánto mide una tarjeta? -> sliderCardsElements[0].clientWidth
// ¿Cuántas tarjetas tengo? -> sliderCardsElements.length
const sliderWidth = () => {
  return (
    (sliderCardsElements[0].clientWidth + 16) *
      (sliderCardsElements.length - 2) +
    'px'
  );
};

rootStyles.setProperty('--slider-width', sliderWidth());
