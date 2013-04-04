//
// suuoh.com
// Melvin Chien 2013
//

$(document).ready(function() {
  $("a[href^='#']").click(function(){  
    var id = $(this).attr("href");
    var posTop = $(id).position().top;
    if ($(".hidden-phone").is(":visible"))
      posTop -= 50;
    $("html, body").animate({
      scrollTop: posTop
    }, 1000);
  });
  $("a[href^='http']").attr("target", "_blank");
  $("a[class='tooltip-hover']").tooltip();
  $("img.lazy").show().lazyload({
    effect: "fadeIn"
  });
  $("a[href$='.gif'],a[href$='.jpg'],a[href$='.png']").fancybox({
    padding: 10,
    margin: 50,
    loop: false,
    helpers: {
      title: {
        type: "over"
      },
      overlay: {
        showEarly: false,
        css: {
          "background" : "rgba(25, 25, 25, 0.80)"
        }
      }
    }
  });
  $(".fancybox-media").fancybox({
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
          "background" : "rgba(25, 25, 25, 0.80)"
        }
      }
    }
  });
});