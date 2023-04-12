'use strict';

const showModals = document.querySelectorAll('.show-modal');
const modalWindow = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-modal');
const hideClass = document.querySelector('.hidden');
const overlay = document.querySelector('.overlay');

// Nodelist is a little bit like an array but at the same time it's not an array.

for (let i = 0; i < showModals.length; i++) {
    const modal  = showModals[i];
    console.log(modal.textContent);
}