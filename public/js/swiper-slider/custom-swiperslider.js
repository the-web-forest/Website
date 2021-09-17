(function($) {
  "use strict";
  
  $(document).ready(function() {
	  escope_swiper_slider_init();
  });  
  

  var $swiper_gallery = $('.tm-sc-portfolio-swiper-gallery');
  if ( $swiper_gallery.length > 0 ) {
    var swiperAnimation = new SwiperAnimation();
    var galleryThumbs = new Swiper('.tm-sc-portfolio-swiper-gallery .swiper-gallery-thumb', {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.tm-sc-portfolio-swiper-gallery .swiper-gallery-top', {
      spaceBetween: 10,
      effect: 'fadeInLeft',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs
      },
      on: {
        init: function () {
          swiperAnimation.init(this).animate();
        },
        slideChange: function () {
          swiperAnimation.init(this).animate();
        }
      }
    });
  }

      
  function escope_swiper_slider_init() {
	//swiper photo gallery with thumbnail
    var photogalleryTop = new Swiper('.swiper-photogallery-top2', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10,
    });
    var photogalleryThumbs = new Swiper('.swiper-photogallery-thumbs2', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
		    keyboardControl: true,
        slideToClickedSlide: true
    });
    photogalleryTop.params.control = photogalleryThumbs;
    photogalleryThumbs.params.control = photogalleryTop;
	
	
	//swiper fullscreen slider with text
    var swiperFullwidthSlider = new Swiper('.swiper-fullscreen-slider', {
        pagination: '.swiper-pagination',
		    keyboardControl: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        effect: 'fadeInLeft',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        parallax: true,
        speed: 600,
    });
	
  //swiper fullscreen slider Lazyload image
    var swiperLazyLoad = new Swiper('.swiper-lazyload-slider', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        effect: 'fadeInLeft',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // Disable preloading of all images
        preloadImages: false,
        // Enable lazy loading
        lazy: true
    });
	
  }
})(jQuery);