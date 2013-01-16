$(document).ready(function() {
  $("#splash").hide();
  $("footer").hide();
  if ($("#splash").length > 0) {
    $("#splash").bind("load", function () {
      $("#splash").fadeIn(2000);
      $("footer").delay(2000).fadeIn(2000);
    });
  } else {
    $("footer").delay(500).fadeIn(1000);
  }
  $("a[id^='tooltip-']").tooltip({
    trigger: "click"
  });
  $("a[id^='tooltip-']").attr("href", "javascript:void(0)");
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