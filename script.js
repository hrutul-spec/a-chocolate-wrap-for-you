const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const intro = document.getElementById("intro");
const memories = document.getElementById("memories");

// NO button runs away
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// YES button
yesBtn.addEventListener("click", () => {
  intro.classList.remove("active");
  memories.classList.add("active");
});

// Chocolate open
function openChocolate(element) {
  const text = element.querySelector("p");
  text.classList.toggle("hidden");
}
