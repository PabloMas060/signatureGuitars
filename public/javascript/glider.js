
console.log('vinculado');
window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
 slidesToShow: 3
    })
  })
  new Glider(document.querySelector('.glider'), {
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });