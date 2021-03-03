const navbar = document.querySelector("#navbar");

window.addEventListener("scroll", () => {
  let offset = window.pageYOffset;
  if (offset >= 779) {
    navbar.style.background = "#C1272D";
  } else {
    navbar.style.background = "none";
  }
});
