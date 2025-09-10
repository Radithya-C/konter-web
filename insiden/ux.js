/*Logo*/
function revealOnScroll() {
  const elements = document.querySelectorAll('.glitch-fade');
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 50) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

/*Casecard*/ 
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