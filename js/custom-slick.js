jQuery(document).ready(function () {
  jQuery('.featured-insights-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    speed: 1000,
    dots: false,
    arrows: true,
    variableWidth: true,
	draggable: true,
    touchThreshold: 200,
    swipeToSlide: true,
    prevArrow: '<span class="slick-arrow prev-arrow fa-sharp fa-solid fa-arrow-left flex flex-center"></span>',
    nextArrow: '<span class="slick-arrow next-arrow fa-sharp fa-solid fa-arrow-right flex flex-center"></span>',
    responsive: [

      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
			dots: true,
        }
      }
    ]
  });
	
	jQuery('.more-news-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    speed: 1000,
    dots: false,
    arrows: true,
    variableWidth: true,
	draggable: true,
    touchThreshold: 200,
    swipeToSlide: true,
    prevArrow: '<span class="slick-arrow prev-arrow fa-sharp fa-solid fa-arrow-left flex flex-center"></span>',
    nextArrow: '<span class="slick-arrow next-arrow fa-sharp fa-solid fa-arrow-right flex flex-center"></span>',
    responsive: [

      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
			dots: true,
        }
      }
    ]
  });
	
	
	jQuery('.webinars-events-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    speed: 1000,
    dots: false,
    arrows: true,
    variableWidth: true,
	draggable: true,
    touchThreshold: 200,
    swipeToSlide: true,
    prevArrow: '<span class="slick-arrow prev-arrow fa-sharp fa-solid fa-arrow-left flex flex-center"></span>',
    nextArrow: '<span class="slick-arrow next-arrow fa-sharp fa-solid fa-arrow-right flex flex-center"></span>',
    responsive: [

      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
			dots: true,
        }
      }
    ]
  });

	
	
	jQuery('.experts-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    speed: 1000,
    dots: false,
    arrows: true,
    variableWidth: true,
	draggable: true,
    touchThreshold: 200,
    swipeToSlide: true,
    prevArrow: '<span class="slick-arrow prev-arrow fa-sharp fa-solid fa-arrow-left flex flex-center"></span>',
    nextArrow: '<span class="slick-arrow next-arrow fa-sharp fa-solid fa-arrow-right flex flex-center"></span>',
    responsive: [

      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
			dots: true,
        }
      }
    ]
  });

 
});
