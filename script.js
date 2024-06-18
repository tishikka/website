document.addEventListener('DOMContentLoaded', () => {
  const card = document.querySelector('.card-animation');
  card.addEventListener('click', () => {
      card.classList.toggle('flipped');
  });
});
