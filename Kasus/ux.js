function revealCasesOnScroll() {
  const cards = document.querySelectorAll('.case-card');
  const windowHeight = window.innerHeight;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < windowHeight - 50) {
      card.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealCasesOnScroll);
window.addEventListener('load', revealCasesOnScroll);