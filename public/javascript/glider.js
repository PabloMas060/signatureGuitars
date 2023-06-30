
console.log('vinculado');
window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
 slidesToShow: 3
    })
  })
  
  new Glider(document.querySelector('.glider'), {
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.home__body_sectionOfertas_glider--button-prev',
      next: '.home__body_sectionOfertas_glider--button-next'
    }
  });


 