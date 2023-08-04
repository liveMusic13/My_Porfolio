'use strict';

let myjobArray = [
	{
		url: 'img/myProject/Farm_of_the_future.jpg',
		title: 'Игра для Россельхозбанка (HTML, SCSS, JS, React)',
		href: 'https://github.com/liveMusic13/Hakaton_RSXB_Remake.git',
	},
	{
		url: 'img/myProject/kanban.jpg',
		title: 'Канбан доска (HTML, SCSS, JS, React)',
		href: 'https://github.com/liveMusic13/Kanban_Board.git',
	},
	{
		url: 'img/myProject/layoutCorona.png',
		title: 'Верстка (HTML, SCSS)',
		href: 'https://livemusic13.github.io/Layout_Corona/',
	},
	{
		url: 'img/myProject/wheather.png',
		title: 'Мини-сайт прогноза погоды (HTML, SCSS, JS)',
		href: 'https://livemusic13.github.io/Project_Wheather/',
	},
	{
		url: 'img/myProject/generatePas.png',
		title: 'Генератор паролей (HTML, SCSS, JS)',
		href: 'https://livemusic13.github.io/Generate_Password/',
	},
	{
		url: 'img/myProject/layoutHomework.png',
		title: 'Верстка (HTML, SCSS, JS)',
		href: 'https://livemusic13.github.io/layout__Repair_Design_Project/#',
	},
];

function initSlider() {
	let sliderImages = document.querySelector('.wrapper-slider__images');
	let sliderArrows = document.querySelector('.wrapper-slider__arrows');
	let sliderDots = document.querySelector('.wrapper-slider__dots');

	initImages();
	initArrows();
	initDots();
	initTitles();
	initAutoplay();

	function initImages() {
		myjobArray.forEach((image, index) => {
			let imageDiv = `<div class="image n${index} ${
				index === 0 ? 'active' : ''
			}" style="background-image: url(${
				myjobArray[index].url
			});" data-index="${index}"></div>`;
			sliderImages.innerHTML += imageDiv;
		});
	}

	function initArrows() {
		sliderArrows.querySelectorAll('.wrapper-slider__arrow').forEach(arrow => {
			arrow.addEventListener('click', function () {
				let curNumber = +sliderImages.querySelector('.active').dataset.index;
				let nextNumber;
				if (arrow.classList.contains('wrapper-slider__arrow_left')) {
					nextNumber = curNumber === 0 ? myjobArray.length - 1 : curNumber - 1;
					initTitles(nextNumber);
				} else {
					nextNumber = curNumber === myjobArray.length - 1 ? 0 : curNumber + 1;
					initTitles(nextNumber);
				}
				moveSlider(nextNumber);
			});
		});
	}

	function initDots() {
		myjobArray.forEach((image, index) => {
			let dot = `<div class="wrapper-slider__dots-item n${index} ${
				index === 0 ? 'active' : ''
			}" data-index="${index}"></div>`;
			sliderDots.innerHTML += dot;
		});

		sliderDots.querySelectorAll('.wrapper-slider__dots-item').forEach(dot => {
			dot.addEventListener('click', function () {
				moveSlider(this.dataset.index);
				sliderDots.querySelector('.active').classList.remove('active');
				this.classList.add('active');
				initTitles(this.dataset.index);
			});
		});
	}

	function moveSlider(num) {
		sliderImages.querySelector('.active').classList.remove('active');
		sliderImages.querySelector('.n' + num).classList.add('active');
		sliderDots.querySelector('.active').classList.remove('active');
		sliderDots.querySelector('.n' + num).classList.add('active');
		changeTitle(num);
	}

	function initTitles(num = 0) {
		let title = document.querySelector('.wrapper-slider__images-title');
		if (title) {
			title.remove();
		}

		let titleDiv = `<a href="${
			myjobArray[num].href
		}" class="wrapper-slider__images-title activeTitle">${cropTitle(
			myjobArray[num].title,
			70
		)}</a>`;
		sliderImages.innerHTML += titleDiv;
	}

	function changeTitle(num) {
		if (!myjobArray[num].title) {
			return;
		}
		let sliderTitle = sliderImages.querySelector(
			'.wrapper-slider__images-title'
		);
		sliderTitle.innerText = cropTitle(myjobArray[num].title, 70);
	}

	function cropTitle(title, size) {
		if (title.length <= size) {
			return title;
		} else {
			return title.substr(0, size) + '...';
		}
	}

	function initAutoplay() {
		setInterval(() => {
			let curNumber = +sliderImages.querySelector('.active').dataset.index;
			let nextNumber = curNumber === myjobArray.length - 1 ? 0 : curNumber + 1;
			initTitles(nextNumber);
			moveSlider(nextNumber);
		}, 4000);
	}
}

document.addEventListener('DOMContentLoaded', initSlider);
