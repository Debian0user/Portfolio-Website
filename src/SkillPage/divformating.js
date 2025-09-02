// src/utils/boxHandler.js
export function initBoxHandler() {
  const boxes = document.querySelectorAll('.box');

  function setActive(target) {
    boxes.forEach(b => {
      b.classList.remove('active');
      b.classList.add('shrink');
    });
    target.classList.add('active');
    target.classList.remove('shrink');
  }

  boxes.forEach(b => {
    b.addEventListener('click', () => setActive(b));
  });
}
