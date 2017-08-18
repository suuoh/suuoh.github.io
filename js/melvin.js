/*!
 * melvin.io v1.8
 * Licensed under the MIT license
 */

$(document).ready(function() {
  $("#contactForm").submit(function(event) {
    event.preventDefault();
    $.ajax({
      url: "https://formspree.io/me@melvin.io",
      method: "POST",
      dataType: "JSON",
      data: $("#contactForm").serialize(),
      success: function() {
        var alertMessage = $("#contactAlert");
        alertMessage.html("<strong>Success!</strong> Your message was sent. I will get back to you soon.");
        alertMessage.show().addClass("alert-success show").removeClass("alert-danger");
        alertMessage.delay(3000).slideUp(500, function() {
          alertMessage.removeClass("show");
        });
      },
      error: function() {
        var alertMessage = $("#contactAlert");
        alertMessage.html("<strong>Oops!</strong> Something went wrong. Please try sending your message again or emailing me directly instead.");
        alertMessage.show().addClass("alert-danger show").removeClass("alert-success");
        alertMessage.delay(3000).slideUp(500, function() {
          alertMessage.removeClass("show");
        });
      }
    });
  });
});
