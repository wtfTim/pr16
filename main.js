const block2 = document.querySelector('.block2');
const popup = document.querySelector('.popup');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset;
  const block2Top = block2.offsetTop;

  if (scrollTop >= block2Top + block2.offsetHeight / 2) {
    popup.style.display = 'block';
  } else {
    popup.style.display = 'none';
  }
});
