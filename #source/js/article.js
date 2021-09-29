const articleSlider = document.querySelector('.article-slider__container');
let articleSwiper = new Swiper(articleSlider, {
	slidesPerGroup: 1,
	loop: false,
	speed: 600,
	watchOverflow: true,
	pagination: {
		el: '.article-pagination',
		type: 'bullets',
		clickable: true,
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	breakpoints: {
		300: {
			slidesPerView: 1.2,
		},
		320: {
			slidesPerView: 1.2,
			spaceBetween: 20,
		},
		580: {
			spaceBetween: 20,
			slidesPerView: 3,
			effect: 'slide',
		},
		767: {
			spaceBetween: 20,
			slidesPerView: 3,
		},
		1170: {
			slidesPerView: 1,
			effect: 'fade',
			fadeEffect: {
				crossFade: true,
			},
		}
	},
});
function disabledSlider(){
	if($(".article-slider__container .swiper-slide").length === 1) {
		$('.swiper-wrapper').addClass( "disabled" );
		$('.article-pagination').css( "display", 'none');
	}
};
disabledSlider();

const slider2 = document.querySelector('.slider__container-2');
let mobileSwiper2;
function mobSwiper() {
	if (window.innerWidth <= 991 && slider2.dataset.mobile == 'false'){
		mobileSwiper2 = new Swiper(slider2, {
			loop: true,
			slideClass: 'index__news__col',
			pagination: {
				el: ".slider__pagination",
				type: "progressbar",
			},
			breakpoints: {
				300: {
					slidesPerView: 1.2,
					spaceBetween: 10,
				},
				375: {
					slidesPerView: 1.2,
					spaceBetween: 20,
				},
				580: {
					slidesPerView: 1.8,
					spaceBetween: 20,
				},
				767: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				991: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
			},
		});
		slider2.dataset.mobile = 'true';
	}
	if (window.innerWidth > 991) {
		slider2.dataset.mobile = 'false';
		if (slider2.classList.contains('swiper-container-initialized')){
			mobileSwiper2.destroy();
		}
	}
}
mobSwiper();
window.addEventListener('resize', () => {
	mobSwiper();
});

// МОДАЛЬНОЕ ОКНО ARTICLE
$('.article__item').click(function (e) {
	e.preventDefault();
	$('.modal.article').addClass('show');
	$('html').css('overflow','hidden');
});
$('.popup__close').click(function (e) {
	e.preventDefault();
	$('.modal.article').removeClass('show');
	$('html').css('overflow','hidden auto');
});