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
/*

//JQuery code
"use strict";
$("#meni-btn", "#close-btn").click(function () {
  $("#mobile-meni").toggle();
});

/* nije radio na domu
//for header
let heroSection = document.getElementById("hero-section");
let heroSectionHeight = heroSection.clientHeight;
let header = document.getElementById("header");

if (document.documentElement.scrollTop > heroSectionHeight) {
  if (!header.classList.contains("solid-header")) {
    header.classList.add;
    ("solid-header");
  }
} else {
  header.classList.contains("solid-header");
  header.classList.remove;
}
*/
/*
//jQuery code
$(document).scroll(function () {
  let header = $("#header");
  if ($(this).scrollTop() > $("#hero-section").height()) {
    if (!header.hasClass("solid-header")) {
      header.addClass("solid-header");
    } else {
      if (header.hasClass("solid-header")) {
        header.removeClass("solid-header");
      }
    }
  }
});
*/
