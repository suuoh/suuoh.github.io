$(document).ready(function() {
  $(".tooltiplink").tooltip();
  $("a[href$='.jpg'],a[href$='.png']").fancybox({
    padding: 10,
    margin: 50,
    loop: false,
    helpers : {
      title : {
        type: "over"
      },
      overlay : {
        showEarly: false,
        css : {
          "background" : "rgba(25, 25, 25, 0.80)"
        }
      }
    }
  });
  $(".fancybox-media").fancybox({
    padding: 10,
    margin: 50,
    loop: false,
    helpers : {
      media : {},
      title : {
        type: "float"
      },
      overlay : {
        showEarly: false,
        css : {
          "background" : "rgba(25, 25, 25, 0.80)"
        }
      }
    }
  });
});