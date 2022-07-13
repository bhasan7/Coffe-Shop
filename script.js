//JAVASCRIPT DOM
window.addEventListener("load", function () {
  let menuButton = document.getElementById("meni-btn");
  let mobileMeni = document.getElementById("mobile-meni");
  let closeButton = document.getElementById("close-btn");

  menuButton.addEventListener("click", function () {
    mobileMeni.style.display = "block";
  });
  closeButton.addEventListener("click", function () {
    mobileMeni.style.display = "none";
  });

  let mobileMeniItems = document.getElementsByClassName("menu-mobile-item");
  for (i = 0; i < mobileMeniItems.length; i++) {
    mobileMeniItems[i].addEventListener("click", function () {
      mobileMeni.style.display = "none";
    });
  }
});
