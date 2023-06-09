$(document).ready(function(){
    $('.section-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        infinite: true,
        arrows:false,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            mobileFirst:true,
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots:true,
            mobileFirst:true,
            infinite:true
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
            mobileFirst:true,
            infinite:false
            }
        }
        ],
        
    });
  });