$(document).ready(function() {
  $("footer").hide();
  $("footer").delay(1500).fadeIn(3000);
  $("a[class='tooltip-hover']").tooltip();
  $("a[class^='tooltip-']").attr("href", "javascript:void(0)");
  $("img.lazy").show().lazyload({
    effect: "fadeIn"
  });
  $("a[href$='.jpg'],a[href$='.png']").fancybox({
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