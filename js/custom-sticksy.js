/*!
 * StickySidebar jQuery Plugin v1.0.1
 * Copyright 2014 Dawid Pawelec
 * Released under the MIT license
 */

(function ($) {
  var $w = $(window);

  $.fn.stickySidebar = function (options) {
    var o = $.extend({}, $.fn.stickySidebar.defaults, options),
      $c = $(o.container);

    return this.each(function () {
      var $s = $(this),
        sh = $s.outerHeight(),
        originalMarginTop = parseInt($s.css("margin-top"), 10),
        top = $s.offset().top - o.offsetTop - originalMarginTop,
        bottom = $c.offset().top + $c.outerHeight() - o.offsetTop,
        handleScroll = function () {
          var scroll = $w.scrollTop();
          if (scroll > top) {
            if (scroll + sh + o.offsetBottom > bottom && o.bottom) {
              $s.removeClass(o.stuckClass);
              $s.addClass(o.bottomClass);
            } else {
              $s.css("margin-top", o.offsetTop + originalMarginTop);
              $s.addClass(o.stuckClass);
            }
          } else {
            $s.css("margin-top", originalMarginTop);
            $s.removeClass(o.stuckClass);
            $s.removeClass(o.bottomClass);
          }
        };

      $w.on("scroll", handleScroll);
    });
  };

  $.fn.stickySidebar.defaults = {
    stuckClass: "fixed",
    bottomClass: "bottom",
    container: "#sticky-main",
    offsetTop: 0,
    offsetBottom: 0,
    bottom: true,
  };
})(jQuery);

jQuery(document).ready(function () {
  jQuery(".fixed-social-icons").stickySidebar({
    container: "#sticky-main",
    offsetTop: document.querySelector("header").getBoundingClientRect().height,
    offsetBottom: 5,
  });
});
