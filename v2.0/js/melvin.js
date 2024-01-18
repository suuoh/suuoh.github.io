/*!
 * melvin.io v2.0
 * Licensed under the MIT license
 */

/* Current Year */
var currentYear = document.getElementById("currentYear");
currentYear.innerHTML = new Date().getFullYear();

/* Contact Form */
async function submitContact(event) {
  event.preventDefault();
  var contactAlert = document.getElementById("contactAlert");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: contactForm.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        contactAlert.style.display = "";
        contactAlert.classList.add("alert-success");
        contactAlert.classList.add("show");
        contactAlert.innerHTML =
          "<strong>Thanks for your message!</strong> I will get back to you as soon as I can.";
        setTimeout(function () {
          contactAlert.classList.remove("show");
          contactAlert.classList.remove("alert-success");
          setTimeout(function () {
            contactForm.reset();
            contactAlert.style.display = "none";
          }, 300);
        }, 3000);
      } else {
        response.json().then((data) => {
          contactAlert.style.display = "";
          contactAlert.classList.add("alert-danger");
          contactAlert.classList.add("show");
          if (Object.hasOwn(data, "errors")) {
            contactAlert.innerHTML =
              "<strong>" +
              data["errors"].map((error) => error["message"]).join(", ") +
              "!</strong> Please try again or email me directly instead.";
          } else {
            contactAlert.innerHTML =
              "<strong>Something went wrong!</strong> Please email me directly instead.";
          }
          setTimeout(function () {
            contactAlert.classList.remove("show");
            contactAlert.classList.remove("alert-danger");
            setTimeout(function () {
              contactAlert.style.display = "none";
            }, 300);
          }, 3000);
        });
      }
    })
    .catch((error) => {
      contactAlert.style.display = "";
      contactAlert.classList.add("alert-danger");
      contactAlert.classList.add("show");
      contactAlert.innerHTML =
        "<strong>Something went wrong!</strong> Please email me directly instead.";
      setTimeout(function () {
        contactAlert.classList.remove("show");
        contactAlert.classList.remove("alert-danger");
        setTimeout(function () {
          contactAlert.style.display = "none";
        }, 300);
      }, 3000);
    });
}

var contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", submitContact);