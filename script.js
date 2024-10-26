let colorDivs = document.querySelectorAll(".colors-container div");
let preview = document.querySelector(".preview");
if (localStorage.getItem("color")) {
  preview.style.backgroundColor = localStorage.getItem("color");
  colorDivs.forEach((colorDiv) => colorDiv.classList.remove("active"));
  colorDivs.forEach((colorDiv) => {
    if (colorDiv.classList.contains(localStorage.getItem("color")))
      colorDiv.classList.add("active");
  });
}

colorDivs.forEach(function (colorDiv) {
  colorDiv.addEventListener("click", function (event) {
    colorDivs.forEach((colorDiv) => colorDiv.classList.remove("active"));
    event.currentTarget.classList.add("active");
    preview.style.backgroundColor = colorDiv.classList.item(0);
    localStorage.setItem("color", colorDiv.classList.item(0));
  });
});
