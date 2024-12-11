jQuery(document).ready(function () {

  /* Client Module toggle class */
  const observer = new IntersectionObserver(intersections => {
    intersections.forEach(({
      target,
      isIntersecting
    }) => {
      target.classList.toggle('animate', isIntersecting);
    });
  }, {
    threshold: 0
  });

  document.querySelectorAll('.client-module-wrap, .insights-slide:nth-child(7n)').forEach(div => {
    observer.observe(div);
  });


  /* Custom Scroll bar */
  jQuery(window).on("load", function () {

    jQuery(".banner-bucket").mCustomScrollBar({
      theme: "minimal"
    });

  });


  jQuery('.search-btn').on('click', function (e) {
    e.preventDefault();
    jQuery(this).toggleClass('active');
    jQuery('header').toggleClass('head-active');
    jQuery('.search_form').slideToggle(300);
  });

  jQuery('.clear-btn').click(function () {
    jQuery('.search-field').val('');
  });

  if (jQuery(".default_main").length > 0) {
    jQuery(window).on("scroll", function () {
      var height = jQuery(".default-banner-section").outerHeight(true);
      var scroll = jQuery(this).scrollTop() + 150;
      if (scroll >= height) {
        jQuery(".default_main").addClass("active");
      } else {
        jQuery(".default_main").removeClass("active");
      }
    });
  }


  jQuery('.mf-grid-item').hover(function () {
    jQuery(this).toggleClass("active");
    jQuery(this).siblings().toggleClass("non-active");
    jQuery('.mf-grid-item:last-child').toggleClass("txt-block");
  });

  jQuery('.mf-grid-item:last-child').addClass("txt-block");
	
	
	/* values */
	jQuery('.our-values-grid .grid').hover(function (e) {
      e.preventDefault();
      jQuery(this).toggleClass("active");
      jQuery(this).parent('.our-values-grid').siblings().find('.grid').toggleClass('non-active');
      jQuery(this).siblings().toggleClass("non-active");
  });


  /* Bottom Video Slide*/
  jQuery('.video-thumbnail .play-btn, .client-stories-main .thumbnail .play-btn, .client-stories-grid h4').on('click', function (e) {
    e.preventDefault();
    jQuery('body').addClass('pull_bottom');
    jQuery('.overlay_main_sec').addClass('active');
  });
  jQuery('.pop_connect_close').on('click', function () {
    jQuery('body').removeClass('pull_bottom');
    jQuery('.overlay_main_sec').removeClass('active');
  });

  jQuery(window).on("scroll", function () {
    var scroll = jQuery(this).scrollTop();
    if (scroll >= 4) {
      jQuery(".main_header").addClass("fixed-header");
    } else {
      jQuery(".main_header").removeClass("fixed-header");
    }
  });

  jQuery(".accordion-item .heading").on("click", function (e) {
    e.preventDefault();
    if (jQuery(this).closest(".accordion-item").hasClass("active")) {
      jQuery(".accordion-item").removeClass("active");
    } else {
      jQuery(".accordion-item").removeClass("active");
      jQuery(this).closest(".accordion-item").addClass("active");
    }
    var jQuerycontent = jQuery(this).next();
    jQuerycontent.slideToggle(300);
    jQuery(".accordion-item .content").not(jQuerycontent).slideUp("slow");
  });


  if (jQuery(window).width() <= 1023) {
    jQuery(".toggle_button").on("click", function (event) {
      event.preventDefault();
      jQuery(this).toggleClass("active");
      jQuery(".mobile_menu").toggleClass("navOpen");
      jQuery(".main_header").toggleClass("menu-open");
    });

    jQuery("ul.main_menu > li.menu-item-has-children > a").on("click", function (event) {
      event.preventDefault();
      jQuery('ul.main_menu > li.menu-item-has-children > a').not(jQuery(this)).removeClass('active');
      jQuery(this).toggleClass("active");
      jQuery(this).siblings('ul.sub-menu').slideToggle('900');
      var topParent = jQuery(this).parents('ul.main_menu > li').attr('id');
      var topChildParent = jQuery(this).parent('li').attr('id');
      jQuery('ul.main_menu ul.sub-menu').each(function () {
        if (jQuery(this).parents('ul.main_menu > li').attr('id') !== topParent) {
          jQuery(this).slideUp('700');
        } else {
          if (jQuery(this).find('li.menu-item-has-children').length) {
            getChild(jQuery(this).find('li.menu-item-has-children'), topChildParent);
          }
        }
      });
    });

    function getChild(obj, topChildParent) {
      obj.each(function () {
        if (jQuery(this).attr('id') !== topChildParent) {
          jQuery(this).find('ul.sub-menu').slideUp('700');
        }
      });
    }
  }

  if (jQuery(window).width() <= 767) {
    jQuery(".menu-list > li > a").on("click", function (event) {
      event.preventDefault();
      jQuery('.menu-list > li > a').not(jQuery(this)).removeClass('active');
      jQuery(this).toggleClass("active");
      jQuery(this).siblings('ul').slideToggle('1500');
      var topParent = jQuery(this).parents('.menu-list > li > a').attr('id');
      var topChildParent = jQuery(this).parent('li').attr('id');
      jQuery('.menu-list').each(function () {
        if (jQuery(this).parents('.menu-list > li > a').attr('id') !== topParent) {
          jQuery(this).slideUp('1500');
        } else {
          if (jQuery(this).find('li.menu-item-has-children').length) {
            getChild(jQuery(this).find('li.menu-item-has-children'), topChildParent);
          }
        }
      });
    });
  }

  function getChild(obj, topChildParent) {
    obj.each(function () {
      if (jQuery(this).attr('id') !== topChildParent) {
        jQuery(this).find('ul').slideUp('1500');
      }
    });
  }
  jQuery('select').selectBox({
    mobile: true,
    menuSpeed: 'normal',
    keepInViewport: false
  });

  jQuery('.side_mobile_menu').on('click', function (e) {
    e.preventDefault();
    jQuery(this).toggleClass('active');
    jQuery('ul.sidebar_panel').slideToggle();
    jQuery('.default-col').toggleClass('add-opac');
  });

});
