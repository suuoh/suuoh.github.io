/*!
 * melvin.io v1.8
 * Licensed under the MIT license
 */

$(document).ready(function() {
  $(".nav-link").click(function(event) {
    event.preventDefault();
    var clickedSection = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(clickedSection).offset().top
    }, 500);
  });

  $(".project-card").click(function(event) {
    event.preventDefault();
    var clickedProject = $(this).attr("href");

    $(".project-panel").not(clickedProject).each(function() {
      $(this).collapse("hide");
    })

    $(clickedProject).on("shown.bs.collapse", function() {
      $("html, body").animate({
        scrollTop: $(this).offset().top
      }, 500);
    });
  });

  $("#contactForm").submit(function(event) {
    event.preventDefault();
    $.ajax({
      url: "https://formspree.io/me@melvin.io",
      method: "POST",
      dataType: "JSON",
      data: $("#contactForm").serialize(),
      success: function() {
        $("#contactAlert")
          .html("<strong>Success!</strong> Your message was sent. I will get back to you soon.")
          .show()
          .addClass("alert-success show")
          .removeClass("alert-danger")
          .delay(3000)
          .slideUp(500, function() {
            $(this).removeClass("show");
          });
      },
      error: function() {
        $("#contactAlert")
          .html("<strong>Oops!</strong> Something went wrong. Please try sending your message again or emailing me directly instead.")
          .show()
          .addClass("alert-danger show")
          .removeClass("alert-success")
          .delay(3000)
          .slideUp(500, function() {
            $(this).removeClass("show");
          });
      }
    });
  });
});
