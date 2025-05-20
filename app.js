const container = document.querySelector('.container');
const slides = container.querySelectorAll('.slide');
const modal = document.getElementById('modal');
const modalContent = modal.querySelector('.modal-content');
const modalClose = document.getElementById('modal-close');

let activeSlide = container.querySelector('.slide.active');

container.addEventListener('mouseover', e => {
  const slide = e.target.closest('.slide');
  if (!slide || slide === activeSlide) return;

  activeSlide.classList.remove('active');
  slide.classList.add('active');
  activeSlide = slide;
});

container.addEventListener('click', e => {
  const slide = e.target.closest('.slide');
  if (!slide) return;

  const bg = slide.style.backgroundImage;
  const url = bg.slice(5, -2);
  modalContent.style.backgroundImage = `url('${url}')`;
  modal.classList.add('active');
});

const closeModal = () => {
  modal.classList.remove('active');
  modalContent.style.backgroundImage = '';
};

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeModal();
  }
});
