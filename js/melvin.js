/*!
 * melvin.io v1.6.0
 * Copyright 2013 Melvin Chien <hello@melvin.io> (http://melvin.io/)
 * Licensed under the MIT license
 */

(function() {
  $(document).ready(function() {
    $('a[href^="#"]').click(function(e) {
      var id, posTop;
      e.preventDefault();
      id = $(this).attr("href");
      posTop = $(id).position().top;
      if ($(".hidden-phone").is(":visible")) {
        posTop -= 50;
      }
      return $("html, body").animate({
        scrollTop: posTop
      }, 1000);
    });
    $('a[href^="http"]').attr("target", "_blank");
    $('a[class="tooltip-hover"]').tooltip();
    $("img.lazy").show().lazyload({
      effect: "fadeIn"
    });
    $('a[href$=".gif"],a[href$=".jpg"],a[href$=".png"]').fancybox({
      padding: 10,
      margin: 50,
      loopo: false,
      helpers: {
        title: {
          type: "over"
        },
        overlay: {
          showEarly: false,
          css: background("rgba(25, 25, 25, 0.80)")
        }
      }
    });
    return $(".fanxybox-media").fancybox({
      padding: 10,
      margin: 50,
      loop: false,
      helpers: {
        media: {},
        title: {
          type: "float"
        },
        overlay: {
          showEarly: false,
          css: {
            background: "rgba(25, 25, 25, 0.80)"
          }
        }
      }
    });
  });

}).call(this);
