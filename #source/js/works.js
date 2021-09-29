	$('.works-content__item').click(function (e) {
		e.preventDefault();
		$('.popup.works').addClass('active');
	});
	$('.popup__close').click(function (e) {
		e.preventDefault();
		$('.popup.works').removeClass('active');
	});
	$('.popup.works').mouseup(function (e) {
		let modalContent = $(".popup__body");
		if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
			$(this).removeClass('active');
		}
	});
	const slider4 = document.querySelector('.slider__container-4');
	const typesSlider = document.querySelector('.types-slider__container');
	let mobileSwiper4;
	let typesSwiper;
	mobileSwiper4 = new Swiper(slider4, {
		loop: true,
		spaceBetween: 20,
		slideClass: 'index__client__col',
		pagination: {
			el: ".slider-pagination",
			type: "progressbar",
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			300: {
				slidesPerView: 'auto',
			},
			375: {
				slidesPerView: 'auto',
			},
			580: {
				slidesPerView: 2,
			},
			767: {
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: 5,
			},
		},
	});
	typesSwiper = new Swiper (typesSlider, {
		loop: true,
		spaceBetween: 20,
		slideClass: 'types__column',
		pagination: {
			el: ".swiper-pagination",
			type: "progressbar",
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			300: {
				slidesPerView: 'auto',
			},
			375: {
				slidesPerView: 'auto',
			},
			580: {
				slidesPerView: 2,
			},
			767: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 4,
			},
		},
	});
