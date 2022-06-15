import navbar from "../components/navigation_part.js";

let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

// navbar functionality
let gsproduct = document.getElementById("gsproduct");
let gsabout = document.getElementById("gsabout");
let productSubMenu = document.getElementById("product-sub-menu");
let aboutUsSubmenu = document.getElementById("about-us-submenu");

gsproduct.addEventListener("mouseenter", () => {
  productSubMenu.style.display = "grid";

  productSubMenu.addEventListener("mouseenter", () => {
    productSubMenu.style.display = "grid";
  });
  productSubMenu.addEventListener("mouseleave", () => {
    productSubMenu.style.display = "none";
  });
});
gsproduct.addEventListener("mouseleave", () => {
  productSubMenu.style.display = "none";
});

gsabout.addEventListener("mouseenter", () => {
  aboutUsSubmenu.style.display = "grid";

  aboutUsSubmenu.addEventListener("mouseenter", () => {
    aboutUsSubmenu.style.display = "grid";
  });
  aboutUsSubmenu.addEventListener("mouseleave", () => {
    aboutUsSubmenu.style.display = "none";
  });
});
gsabout.addEventListener("mouseleave", () => {
  aboutUsSubmenu.style.display = "none";
});
