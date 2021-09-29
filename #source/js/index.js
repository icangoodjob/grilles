$(document).ready(function() {
	$('.main__white__slider').slick({
		arrows:false,
		dots:true,
		adaptiveHeight:false,
		slidesToShow:1,
		slidesToScroll:1,
		speed:1000,
		infinite:false,
		autoplay: true,
		autoplaySpeed:3000,
		draggable:false,
		fade: true,
		cssEase: 'linear',
	});
});
const sliders = document.querySelectorAll('.swiper-container');
sliders.forEach(function(el) {
	const swiper = new Swiper(el, {
		loop: false,
		slidesPerGroup: 1,
		spaceBetween: 20,
		speed: 800,
		observer: true,
		observeParents: true,
		grabCursor: true,
		observeSlideChildren: true,
		pagination: {
			el: el.querySelector('.swiper-pagination'),
			type: "progressbar",
		},
		navigation: {
			nextEl: el.querySelector('.swiper-button-next'),
			prevEl: el.querySelector('.swiper-button-prev'),
		},
		breakpoints: {
			300: {
				slidesPerView: 1.2,
			},
			375: {
				slidesPerView: 1.2,
			},
			480: {
				slidesPerView: 2,
			},
			580: {
				slidesPerView: 2,
			},
			767: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1100: {
				slidesPerView: 3,
			},
			1300:{
				slidesPerView: 4,
			},
		},
	});
});
	// Ховер на иконку в карточке
	$(function() {
		$("div.card-btn__like").each(function(b) {
			if (this.title) {
				var c = this.title;
            var x = -50;//расположение по горизонтали(left)
            var y = 35;//расположение по вертикали (top)
            $(this).mouseover(function(d) {
            	this.title = "";
            	if($(this).hasClass('bg')){
            		$("body").append('<div id="tooltip">' + 'Товар добавлен в избранное' + "</div>");
            	} else {
            		$("body").append('<div id="tooltip">' + c + "</div>");
            	}
            	$("#tooltip").css({
            		left: (d.pageX + x) + "px",
            		top: (d.pageY + y) + "px",
                    opacity: "1"//полупрозрачность
                }).show(300)//скорость появления подсказки
            }).mouseout(function() {
            	$("#tooltip").remove()
            }).mousemove(function(d) {
            	$("#tooltip").css({
            		left: (d.pageX + x) + "px",
            		top: (d.pageY + y) + "px"
            	})
            }).click(function(){
            	$(this).toggleClass('bg');
            	$("#tooltip").remove();
            });
        }
    })
	});
	$(function() {
    $("div.card-btn__filter").each(function(b) {//работа с элементом (ссылка)
    	if (this.title) {
    		var c = this.title;
            var x = -50;//расположение по горизонтали(left)
            var y = 35;//расположение по вертикали (top)
            $(this).mouseover(function(d) {
            	this.title = "";
            	$("body").append('<div id="tooltip">' + c + "</div>");
            	$("#tooltip").css({
            		left: (d.pageX + x) + "px",
            		top: (d.pageY + y) + "px",
                    opacity: "1"//полупрозрачность
                }).show(300)//скорость появления подсказки
            }).mouseout(function() {
            	this.title = c;
            	$("#tooltip").remove()
            }).mousemove(function(d) {
            	$("#tooltip").css({
            		left: (d.pageX + x) + "px",
            		top: (d.pageY + y) + "px"
            	})
            })
        }
    })
});
	(function($) {
		$(function() {
			$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
				$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
			});
		});
	})(jQuery);
	const slider = document.querySelector('.slider__container');
	const slider2 = document.querySelector('.slider__container-2');
	const slider3 = document.querySelector('.slider__container-3');
	const slider4 = document.querySelector('.slider__container-4');
	let mobileSwiper;
	let mobileSwiper2;
	let mobileSwiper3;
	let mobileSwiper4;
	function mobSwiper() {
		if (window.innerWidth <= 991 && slider.dataset.mobile == 'false'){
			mobileSwiper = new Swiper(slider, {
				slidesPerGroup: 1,
				loop: false,
				spaceBetween: 20,
				slideClass: 'index__works__col',
				initialSlide: 0,
				pagination: {
					el: ".slider__pagination",
					type: "progressbar",
				},
				breakpoints: {
					320: {
						slidesPerView: 1,
					},
					375: {
						slidesPerView: 1.2,
					},
				},
			});
			mobileSwiper2 = new Swiper(slider2, {
				loop: true,
				spaceBetween: 20,
				slideClass: 'index__news__col',
				lazy: true,
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
			mobileSwiper3 = new Swiper(slider3, {
				loop: true,
				spaceBetween: 20,
				slideClass: 'index__product__col',
				lazy: true,
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
					767: {
						slidesPerView: 2,
					},
				},
			});
			mobileSwiper4 = new Swiper(slider4, {
				loop: true,
				spaceBetween: 20,
				lazy: true,
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
			slider.dataset.mobile = 'true';
			slider2.dataset.mobile = 'true';
			slider3.dataset.mobile = 'true';
			slider4.dataset.mobile = 'true';
			$('img').removeClass('lazy-fade');
			$('img').addClass('lazy');
		};
		if (window.innerWidth > 991) {
			slider.dataset.mobile = 'false';
			slider2.dataset.mobile = 'false';
			slider3.dataset.mobile = 'false';
			slider4.dataset.mobile = 'false';
			if (slider.classList.contains('swiper-container-initialized')){
				mobileSwiper.destroy();
				mobileSwiper2.destroy();
				mobileSwiper3.destroy();
				mobileSwiper4.destroy();
			}
		}
	};
	mobSwiper();
	window.addEventListener('resize', () => {
		mobSwiper();
	});
