const slider = document.querySelector('.slider__container');
const slider2 = document.querySelector('.slider__container-2');
const slider4 = document.querySelector('.slider__container-4');
const slider5 = document.querySelector('.slider__container-5');
let mobileSwiper;
let mobileSwiper2;
let mobileSwiper4;
let mobileSwiper5;
function mobSwiper() {
	if (window.innerWidth <= 991 && slider.dataset.mobile == 'false'){
		mobileSwiper = new Swiper(slider, {
			slidesPerView: 1,
			slidesPerGroup: 1,
			loop: true,
			spaceBetween: 20,
			slideClass: 'index__works__col',
			initialSlide: 0, 
			pagination: {
				el: ".slider__pagination",
				type: "progressbar",
			},
			breakpoints: {
				320: {
					slidesPerView: 1.2,
				},
			},	
		});
		mobileSwiper2 = new Swiper(slider2, {
			loop: true,
			spaceBetween: 20,
			slideClass: 'index__news__col',
			pagination: {
				el: ".slider__pagination",
				type: "progressbar",
			},
			breakpoints: {
				300: {
					slidesPerView: 1.2,
				},
				375: {
					slidesPerView: 1.5,
				},
				580: {
					slidesPerView: 1.8,
				},
				767: {
					slidesPerView: 2,
				},
				991: {
					slidesPerView: 2,
				},
			},
		});
		mobileSwiper4 = new Swiper(slider4, {
			loop: true,
			spaceBetween: 20,
			slideClass: 'index__client__col',
			pagination: {
				el: ".slider__pagination",
				type: "progressbar",
			},
			breakpoints: {
				300: {
					slidesPerView: 1.2,
				},
				375: {
					slidesPerView: 1.5,
				},
				580: {
					slidesPerView: 2,
				},
				767: {
					slidesPerView: 3,
				},
			},
		});
		mobileSwiper5 = new Swiper(slider5, {
			loop: true,
			spaceBetween: 12,
			slideClass: 'company__advantages__item',
			pagination: {
				el: ".slider__pagination",
				type: "progressbar",
			},
			breakpoints: {
				300: {
					slidesPerView: 1.2,
				},
				580: {
					slidesPerView: 1.5,
				},
				767: {
					slidesPerView: 1.5,
				},
			},
		});
		slider.dataset.mobile = 'true';
		slider2.dataset.mobile = 'true';
		slider4.dataset.mobile = 'true';
		slider5.dataset.mobile = 'true';
	}
	if (window.innerWidth > 991) {
		slider.dataset.mobile = 'false';
		slider2.dataset.mobile = 'false';
		slider4.dataset.mobile = 'false';
		slider5.dataset.mobile = 'false';
		if (slider.classList.contains('swiper-container-initialized')){
			mobileSwiper.destroy();
			mobileSwiper2.destroy();
			mobileSwiper4.destroy();
			mobileSwiper5.destroy();
		}
	}
}
mobSwiper();
window.addEventListener('resize', () => {
	mobSwiper();
});