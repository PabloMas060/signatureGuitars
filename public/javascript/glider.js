
console.log('vinculado');
const glider = document.getElementById('glider');
const prevButton = document.querySelector('.home__body_sectionOfertas_glider--button-prev');
const nextButton = document.querySelector('.home__body_sectionOfertas_glider--button-next');

let currentPosition = 0;

prevButton.addEventListener('click', () => {
  currentPosition += 100; // Mueve la posición actual hacia la izquierda en 100 unidades
  glider.style.transform = `translateX(${currentPosition}%)`; // Aplica el desplazamiento
});

nextButton.addEventListener('click', () => {
  currentPosition -= 100; // Mueve la posición actual hacia la derecha en 100 unidades
  glider.style.transform = `translateX(${currentPosition}%)`; // Aplica el desplazamiento
});

glider.style.display = 'flex'; 
 