import navbar from "../components/navigation_part.js";

let navbar_div = document.getElementById("navbar");

let user = JSON.parse(localStorage.getItem("users")) || [];


if (user[0] === undefined) {
  navbar_div.innerHTML = navbar("signin");

  //will check is signup data has any data, if data exists locate users to signin else in signup page

  document.getElementById("gs-signin").addEventListener("click", () => {
    //alert("go somewhere, do something");

    window.location.href = "../signup.html";
  });
} else {
  navbar_div.innerHTML = navbar(user[0].fname);
}

document.getElementById("gsproduct").addEventListener("click",()=>{
  window.location.href = "../products-landing.html"
})


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

//searching

let showResults = document.getElementById("gs-showsearch-result");
let searchbox = document.getElementById("gs-searchinput");
let searchbtn = document.getElementById("gs-searchbtn");
searchbtn.addEventListener("click", searchFunction);

searchbox.addEventListener("input", searchFunction);

function searchFunction() {
  let searchValue = searchbox.value;
  showResults.style.display = "block";

  if (searchValue == "") {
    showResults.style.display = "none";
  }

  // let results = "ruko jara sabra karo";
  appendSearchResults();
}

function appendSearchResults() {
  showResults.innerHTML = null;
  let p = document.createElement("p");
  p.innerText = "Mix Fruit Scrub";
  let d = document.createElement("p");
  d.innerText = "Fairness Scrub";
  

  showResults.append(p,d);
}
