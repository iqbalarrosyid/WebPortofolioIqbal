window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  var scrolled = window.scrollY;

  if (scrolled > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    document.querySelector(".navbar").classList.toggle("navbar-scrolled");
  });
