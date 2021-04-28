
// $(document).ready(function(){
//     $('.slider').slick({
//       arrows: false,
//       autoplay: true,
//       speed: 300
//     });
//   });

//main slider
$('.slider').slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 2000,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//client slider
$('.client_slider').slick({
  arrows: true,
  autoplay: false,
  // autoplaySpeed: 2000,
  speed: 2000,
  pauseOnHover: false,
  slidesToShow: 1,
  prevArrow : '.left_angle',
  nextArrow : '.right_angle',

})

// Typed Js
var typed = new Typed('#typed', {
  stringsElement: '#typed_strings',
  typeSpeed: 50,
  loop: true
});

// venobocx js
$('.venobox').venobox()

//skillbar js
$(document).ready(function () {
  $('.skillbar').skillbar();
});