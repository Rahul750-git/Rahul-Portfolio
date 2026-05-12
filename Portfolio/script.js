// SCROLL REVEAL ANIMATION

const cards = document.querySelectorAll(
  ".skill-card, .profile-card"
);

window.addEventListener("scroll", revealCards);

function revealCards() {

  const triggerBottom =
    window.innerHeight * 0.85;

  cards.forEach(card => {

    const cardTop =
      card.getBoundingClientRect().top;

    if(cardTop < triggerBottom){
      card.classList.add("show");
    }
    else{
      card.classList.remove("show");
    }

  });

}

// Initial reveal
revealCards();


// Mouse Glow Effect

const skillCards =
  document.querySelectorAll(".skill-card");

skillCards.forEach(card => {

  card.addEventListener("mousemove", e => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.background =
      `radial-gradient(circle at ${x}px ${y}px,
      rgba(56,189,248,0.25),
      rgba(255,255,255,0.05))`;

  });

  card.addEventListener("mouseleave", () => {

    card.style.background =
      "rgba(255,255,255,0.06)";

  });

});