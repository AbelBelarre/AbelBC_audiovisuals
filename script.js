document.addEventListener("DOMContentLoaded", () => {
    const slides = Array.from(document.querySelectorAll(".background-slideshow img"));
    let current = 0;

// Baraja aleatoriamente las imágenes (algoritmo de Fisher-Yates)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffle(slides);

// Muestra la primera imagen
slides[current].classList.add("active");

  // Cambia de imagen cada X segundos
setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 3000); // cambia cada 7s (ajusta al gusto)
});