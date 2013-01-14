$(document).ready(function() {
  $("a[href$='.jpg'],a[href$='.png']").fancybox({
    padding : 10,
    margin: 50,
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