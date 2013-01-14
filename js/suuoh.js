$(document).ready(function() {
  $(".fancybox").fancybox({
    helpers : {
      overlay : {
        css : {
          "background" : "rgba(25, 25, 25, 0.80)"
        }
      }, 
      title: {
        type: "over"
      }
    }
  });
});