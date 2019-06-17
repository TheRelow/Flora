$(document).ready(function(){
  $('#partners').owlCarousel({
    responsive: {
      0:{items: 1}, 600:{items: 2}, 900:{items: 3}, 1440:{items: 4} },
  	margin: 20,
  	loop: true,
  	nav: true,
  	navText: ["",""],
  	mouseDrag: false,
  	touchDrag: false
  });
});

$(document).ready(function(){
  $('#reviews').owlCarousel({
  	items: 3,
  	margin: 20,
    autoWidth: true,
  	loop: true,
  	nav: true,
  	navText: ["",""],
  	mouseDrag: false,
  	touchDrag: false
  });
});

$(document).ready(function(){
  $('#about').owlCarousel({
  	items: 3,
  	margin: 20,
  	loop: true,
  	nav: true,
  	navText: ["",""],
  	mouseDrag: false,
  	touchDrag: false
  });
});