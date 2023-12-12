// menu.js
document.addEventListener("DOMContentLoaded", function () {
    // Hämta meny-elementet från menu.html med querySelector
    const menuContainer = document.querySelector("#menu");
    // Lägg till menyen till den aktuella sidan
    if (menuContainer) {
      fetch("Menu/headerMenu.html")
        .then(response => response.text())
        .then(menuHtml => {
          menuContainer.innerHTML = menuHtml;
        })

        .catch(error => console.error("Error fetching menu:", error));
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    // Hämta meny-elementet från menu.html med querySelector
    const footerContainer = document.querySelector("#footer")
    // Lägg till menyen till den aktuella sidan
    if (footerContainer) {
      fetch("Menu/footerMenu.html")
        .then(response => response.text())
        .then(footerHtml => {          
          footerContainer.innerHTML = footerHtml;
        })
        .catch(error => console.error("Error fetching menu:", error));
    }
  });

function redirectTo(page) {
    window.location.href = page;
}
function openInstagram() {
  // Ange URL till den sida du vill öppna i den nya fliken
  var url = "https://www.instagram.com/";

  // Öppna den nya fliken
  window.open(url, "_blank");
}
function openFacebook() {
  // Ange URL till den sida du vill öppna i den nya fliken
  var url = "https://www.facebook.com/";

  // Öppna den nya fliken
  window.open(url, "_blank");
}
function openMailClient() {
  // Ange e-postadressen
  var email = "info@dackpatrullen.se";

  // Skapa mailto-länken
  var mailtoLink = "mailto:" + email;

  // Öppna standard-e-postklienten eller e-posttjänsten
  window.location.href = mailtoLink;
}
