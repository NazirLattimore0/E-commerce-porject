var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 7000);

const menuBtn = document.querySelector(".menu-btn");
const navlinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navlinks.classList.toggle("mobile-menu");
});
