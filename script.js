let searchBtn = document.querySelector(".search-icon");
let searchInput = document.querySelector("#search-input");

searchBtn.addEventListener("click", function () {
  searchInput.classList.toggle("width");
  searchInput.style.transition = "width 2s";
});
