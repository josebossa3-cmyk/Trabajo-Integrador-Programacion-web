let slides = document.querySelectorAll(".slide");
let index = 0;

document.querySelector(".next").addEventListener("click", () => {
  slides[index].classList.remove("activo");
  index = (index + 1) % slides.length;
  slides[index].classList.add("activo");
});

document.querySelector(".prev").addEventListener("click", () => {
  slides[index].classList.remove("activo");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("activo");
});

const modal = document.createElement("div");
modal.id = "modal";
modal.style.cssText = `
  position:fixed;top:0;left:0;width:100%;height:100%;
  background: rgba(0,0,0,0.8);display:none;justify-content:center;align-items:center;z-index:1000;
`;
const modalImg = document.createElement("img");
modalImg.style.maxWidth = "90%";
modalImg.style.maxHeight = "90%";
modal.appendChild(modalImg);
document.body.appendChild(modal);

document.querySelectorAll(".slide img, .wallpaper img").forEach((img) => {
  img.addEventListener("click", () => {
    modalImg.src = img.src;
    modal.style.display = "flex";
  });
});

modal.addEventListener("click", () => {
  modal.style.display = "none";
});

document.getElementById("subirForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("msg").textContent = "¡Gracias por tu sugerencia!";
  this.reset();
});
