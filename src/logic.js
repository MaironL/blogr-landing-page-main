'use strict';

window.addEventListener('load', () => {
  const menuOpen = document.querySelector('#menuOpen');
  const menuClose = document.querySelector('#menuClose');
  const menu = document.querySelector('#menu');

  menuOpen.addEventListener('click', () => {
    menuOpen.classList.add('hidden');
    menuOpen.classList.remove('block');
    menuClose.classList.add('block');
    menuClose.classList.remove('hidden');
    menu.classList.add('flex');
    menu.classList.remove('hidden');
  });

  menuClose.addEventListener('click', () => {
    menuOpen.classList.add('block');
    menuOpen.classList.remove('hidden');
    menuClose.classList.add('hidden');
    menuClose.classList.remove('block');
    menu.classList.add('hidden');
    menu.classList.remove('flex');
  });

  window.addEventListener('resize', () => {
    let widthSize = window.innerWidth;
    if (widthSize >= 900) {
      menuClose.classList.add('hidden');
      menuClose.classList.remove('block');
      menuOpen.classList.remove('hidden');
    }
  });
});
