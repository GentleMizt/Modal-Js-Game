'use strict';

const showModals = document.querySelectorAll('.show-modal');
const modalWindow = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-modal');
const hideClass = document.querySelector('.hidden');
const overlay = document.querySelector('.overlay');

// Nodelist is a little bit like an array but at the same time it's not an array.

// Function to hide the modal
function hideModal() {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
}

// Function to open the modal
function openModal() {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

// looping through the showModals Array
for (let i = 0; i < showModals.length; i++) {
  const modal = showModals[i];
  modal.addEventListener('click', openModal);
}

closeBtn.addEventListener('click', hideModal);

overlay.addEventListener('click', hideModal);

// listening to the document object and reacting to an event when the Esc button is fired
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modalWindow.classList.contains('hidden')) {
      hideModal();
    }
  }
});
