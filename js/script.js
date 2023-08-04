"use strict";

window.addEventListener('scroll', elem => {
  document.body.style.cssText = `--scrollTop: ${this.scrollY}px`;
});

const menuButton = document.querySelector('.header__menu-button');
const menu = document.querySelector('.header__menu-block')
const background = document.querySelector('.header__background-opacity');
const burger = document.querySelector('.header__burger');



menuButton.addEventListener('click', function () {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  background.classList.toggle('active');
});



