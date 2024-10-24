
// Script to add dynamic animations (optional)
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  // Add a bounce effect on hover
  cards.forEach(card => {
    card.addEventListener("mouseover", () => {
      card.style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseout", () => {
      card.style.transform = "scale(1)";
    });
  });
});
