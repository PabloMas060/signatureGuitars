
const carousel = document.querySelector('.home__body_carreteMarcas-container');


const carouselItems = carousel.querySelectorAll('.home__body_carreteMarcas-container-image');
const carouselClone = Array.from(carouselItems).map(item => item.cloneNode(true));

// Agregar los elementos clonados al carrusel
carouselClone.forEach(clone => carousel.appendChild(clone));

// Calcular el ancho total del carrusel
const carouselWidth = carousel.scrollWidth;

// Animar el carrusel
function animateCarousel() {
  carousel.style.transform = `translateX(-${carouselWidth}px)`;
  carousel.style.transition = 'transform 10s linear';

  // Restablecer el carrusel al final de la animación
  setTimeout(() => {
    carousel.style.transform = 'translateX(0)';
    carousel.style.transition = 'none';
    animateCarousel();
  }, 10000); // Esperar 10 segundos antes de reiniciar la animación
}

// Llamar a la función de animación
animateCarousel();