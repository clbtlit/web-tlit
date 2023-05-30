$(document).ready(function(){
    $('.section-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        infinite: true,
        arrows: true,
        prevArrow:'<span class="prev-arrow"><i class="fa-solid fa-circle-chevron-left"></i></span>',
        nextArrow:'<span class="next-arrow"><i class="fa-solid fa-circle-chevron-right"></i></span>',
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
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
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ],
        
    });
  });