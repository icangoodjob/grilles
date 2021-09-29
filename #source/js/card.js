$(document).ready(function(){
	$('.js-gallery').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite:false,
		focusOnSelect: true,
		arrows: true,
		initialSlide: 0,
		draggable: false,
		variableWidth: true,
		speed: 500,
		lazyLoad: 'progressive',
		asNavFor: '.slider-nav',
	});
	$('.slider-nav').slick({
		arrows: true,
		slidesToShow: 4,
		slidesToScroll:1,
		speed:500,
		infinite:false,
		autoplay: false,
		autoplaySpeed:3000,
		draggable: false,
		focusOnSelect: true,
		initialSlide: 0,
		lazyLoad: 'progressive',
		asNavFor: '.js-gallery',
		responsive: [
		{
			breakpoint: 580,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				draggable:true,
			}
		},
		{
			breakpoint: 370,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				draggable:true,
			},
		}
		]
	});
	$('.slider-nav.gallery-nav').slick({
		arrows: true,
		slidesToShow: 4,
		slidesToScroll:1,
		speed:500,
		infinite:false,
		autoplay: false,
		autoplaySpeed:3000,
		focusOnSelect: true,
		draggable: false,
		initialSlide: 0,
		lazyLoad: 'progressive',
		asNavFor: '.js-gallery',
		responsive: [
		{
			breakpoint: 580,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				draggable:true,
			}
		},
		{
			breakpoint: 370,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				draggable:true,
			},
		}
		]
	});
	let slickNavGallery = $('.slider-nav.gallery-nav').length;
	if(slickNavGallery <= 4) {
		$('.slider-nav.gallery-nav').slick('unslick');
	};
	let slickItems = $('.slider-nav').length;
	if(slickItems <= 4) {
		$('.slider-nav').slick('unslick');
		$('.slider-nav .slick-arrow').css('display', 'none');
		$('.slider-nav').css({ 
			'display': 'flex',
			'justify-content': 'center'});
	};
});
$('.gallery-img-holder').click(function(){
	$('.gallery-modal').addClass('open');
	$('body').addClass('lock');
});
$('.modal__close').click(function(){
	$('.gallery-modal').removeClass('open');
	$('body').removeClass('lock');
});
let slickJsGallery = $('.js-gallery').length;
if(slickJsGallery <= 1) {
	$('.js-gallery').slick('unslick');
	$('.slick-gallery .slick-arrow').css('display', 'none');
};

// Slider-swiper tabs
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
				slidesPerView: 'auto',
			},
			320: {
				slidesPerView: 1.2,
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

(function($) {
	$(function() {
		$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
			$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
		});
	});
})(jQuery);

// Mounting Slider
const mountingSlider = document.querySelector('.mounting-slider__container');
let mountingSwiper = new Swiper(mountingSlider, {
	loop: true,
	spaceBetween: 20,
	// slidesPerView:'auto',
	slidesPerGroup: 1,
	speed: 800,
	pagination: {
		el: ".swiper__pagination",
		type: "progressbar",
	},
	slideClass: 'mounting__column',
	navigation: {
		nextEl: '.swiper-btn-next',
		prevEl: '.swiper-btn-prev',
	},
	breakpoints: {
		300: {
			slidesPerView: 'auto',
		},
		320: {
			slidesPerView: 'auto',
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



// TABS
$(document).ready(function(){
	$('.tabs-triggers__item').click(function(e) {
		e.preventDefault();
		$('.tabs-triggers__item').removeClass('tabs-triggers__item_active');
		$('.tabs-content__item').removeClass('tabs-content__item_active');
		$(this).addClass('tabs-triggers__item_active');
		$($(this).attr('href')).addClass('tabs-content__item_active');
	});
	$('.tabs-triggers__item:first').click();
});



$('.tabs-reviews__button').click(function () {
	$('.popup.reviews').addClass('active');
});
$('.popup__close').click(function () {
	$('.popup.reviews').removeClass('active');
});
$('.popup.reviews').mouseup(function (e) {
	e.stopPropagation();
	let modalContent = $(".popup__body");
	if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('active');
	}
});

$('#btn-buy').click(function () {
	$('.popup.buy').addClass('active');
	$('html').css('overflow','hidden');
});
$('.popup__close').click(function (e) {
	e.preventDefault();
	$('.popup.buy').removeClass('active');
	$('html').css('overflow','hidden auto');
});
$('.popup.buy').mouseup(function (e) {
	e.stopPropagation();
	let modalContent = $(".popup__body");
	if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('active');
		$('html').css('overflow','hidden auto');
	}
});

$('#delivery').click(function () {
	$('.popup.delivery').addClass('active');
	$('html').css('overflow','hidden');
});
$('.popup__close').click(function (e) {
	e.preventDefault();
	$('.popup.delivery').removeClass('active');
	$('html').css('overflow','hidden auto');
});
$('.popup.delivery').mouseup(function (e) {
	e.stopPropagation();
	let modalContent = $(".popup__body");
	if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('active');
		$('html').css('overflow','hidden auto')
	}
});

$('#payment').click(function () {
	$('.popup.payment').addClass('active');
	$('html').css('overflow','hidden')
});
$('.popup__close').click(function (e) {
	e.preventDefault();
	$('.popup.payment').removeClass('active');
	$('html').css('overflow','hidden auto')
});
$('.popup.payment').mouseup(function (e) {
	e.stopPropagation();
	let modalContent = $(".popup__body");
	if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('active');
		$('html').css('overflow','hidden auto');
	}
});

$('#advantages-btn').click(function () {
	$('.popup.advantages').addClass('active');
	$('html').css('overflow','hidden')
});
$('.popup__close').click(function (e) {
	e.preventDefault();
	$('.popup.advantages').removeClass('active');
	$('html').css('overflow','hidden auto')
});
$('.popup.advantages').mouseup(function (e) {
	e.stopPropagation();
	let modalContent = $(".popup__body");
	if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('active');
		$('html').css('overflow','hidden auto')
	}
});


$('.list-item__question').click(function (e) {
	e.preventDefault();
	$('#modalquestion').addClass('show');
});
$('.modal__close').click(function (e) {
	e.preventDefault();
	$('#modalquestion').removeClass('show');
});
$('#modalquestion').mouseup(function (e) {
	let modalContent = $('.modal-body');
	if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('show');
	}
});


// Radio кнопки
$(document).ready(function() {
	$.each($(".radiobutton__item"), function(index, val) {
		if ($(this).find('input').prop("checked")==true) {
			$(this).addClass('active');
		};
	});
	$(document).on('click', '.radiobutton__item', function(event) {
		allRadio = $(this).parents()['0'].children;
		for (child of Object.values(allRadio)) {
			$(child).removeClass("active");
			child.firstElementChild.checked = false;
		};
		$(this).toggleClass("active");
		$(this).find('input').prop('checked', true);
		return false;
	});
});

// Custom-select
$(".custom-select").each(function() {
	var classes = $(this).attr("class"),
	id      = $(this).attr("id"),
	name    = $(this).attr("name");
	var template =  '<div class="' + classes + '">';
	template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
	template += '<div class="custom-options">';
	$(this).find("option").each(function() {
		template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
	});
	template += '</div></div>';

	$(this).wrap('<div class="custom-select-wrapper"></div>');
	$(this).hide();
	$(this).after(template);
});
$(".custom-option:first-of-type").hover(function() {
	$(this).parents(".custom-options").addClass("option-hover");
}, function() {
	$(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function() {
	$('html').one('click',function() {
		$(".custom-select").removeClass("opened");
	});
	$(this).toggleClass('active');
	$(this).parents(".custom-select").toggleClass("opened");
	event.stopPropagation();
});
$(".custom-option").on("click", function() {
	$(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
	$(this).parents(".custom-options").find(".custom-option").removeClass("selection");
	$(this).addClass("selection");
	$(this).parents(".custom-select").removeClass("opened");
	$(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});


// Всплывающее окно при наведение на иконку информации
$('.tabs-size__icon.type').mouseover(function(){
	$('.window-info.type').slideToggle(300, function(){
		$(this).addClass('show');
	});
});
$('.tabs-size__icon.type').mouseout(function(){
	$('.window-info.type').slideToggle(300, function(){
		$(this).removeClass('show');
	});
});

$('.tabs-size__icon.test').mouseover(function(){
	$('.window-info.test').slideToggle(300, function(){
		$(this).addClass('show');
	});
});
$('.tabs-size__icon.test').mouseout(function(){
	$('.window-info.test').slideToggle(300, function(){
		$(this).removeClass('show');
	});
});


$(function() {
	$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
		$(this)
		.addClass('active').siblings().removeClass('active')
		.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});
});
let s = document.getElementsByClassName("popup-content")[0];

// Смена значений в input при клике на plus или minus
$('.main-card__quantity-right .main-quantity__minus').click(function() {
	let $input = $(this).parent().find('.main-qunatity__input');
	let count = parseInt($input.val()) - 1;
	count = count < 1 ? 1 : count;
	$input.val(count);
});
$('.main-card__quantity-right .main-quantity__plus').click(function() {
	let $input = $(this).parent().find('.main-qunatity__input');
	let count = parseInt($input.val()) + 1;
	count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
	$input.val(parseInt(count));
}); 
$('.main-card__quantity-right .main-qunatity__input').bind("change keyup input click", function() {
	if (this.value.match(/[^0-9]/g)) {
		this.value = this.value.replace(/[^0-9]/g, '');
	}
	if (this.value == "") {
		this.value = 1;
	}
	if (this.value > parseInt($(this).data('max-count'))) {
		this.value = parseInt($(this).data('max-count'));
	}
});

// Галерея
$(document).on('click', '.slider-nav .gallery a', function (event) {
	event.preventDefault();
	$.each($('.slider-nav .gallery .swiper-slide'), function () {
		$(this).removeClass('active')
	})
	$(this).closest('.swiper-slide').addClass('active')
	$.each($('.swiper-wrapper.full-image .swiper-slide a'), function () {
		$(this).hide()
	})
	const link = $('.swiper-wrapper.full-image .swiper-slide a[href="' + $(this).attr('href') + '"]')
	link.show()
	link.click()
});

const sliderMounting = document.querySelector('.popup-slider');
let mySwiperMounting = new Swiper(sliderMounting, {
	slidesPerView: 1,
	slidesPerGroup: 1,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	slideToClickedSlide: true,
	centeredSlides: true,
	breakpoints: {
		300: {
			slidesPerView: 1,
		},
	}
});
// Mounting popup
$('.mounting__item').click(function () {
	$('.popup.mount').addClass('active');
	$('html').css('overflow','hidden');
});
$('.popup__close').click(function (e) {
	e.preventDefault();
	$('.popup.mount').removeClass('active');
	$('html').css('overflow','hidden auto');
});
$('.popup.mount').mouseup(function (e) {
	let modalContent = $('.popup__body');
	if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('active');
		$('html').css('overflow','hidden auto');
	}
});
$('#basket-place').click(function(){
	$(this).text('Товар добавлен');
	$(this).addClass('added');
	$(this).attr('disabled','true');
	$('#btn-buy').remove();
	$('#btn-buyed').css('display','block');
	$('.main-card__buttons').css('justify-content','flex-start');
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
//Select
let selects = document.getElementsByTagName('select');
if (selects.length > 0) {
	selects_init();
}
function selects_init() {
	for (let index = 0; index < selects.length; index++) {
		const select = selects[index];
		select_init(select);
	}
	//select_callback();
	document.addEventListener('click', function (e) {
		selects_close(e);
	});
	document.addEventListener('keydown', function (e) {
		if (e.which == 27) {
			selects_close(e);
		}
	});
}
function selects_close(e) {
	const selects = document.querySelectorAll('.select');
	if (!e.target.closest('.select')) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			select.classList.remove('_active');
			_slideUp(select_body_options, 100);
		}
	}
}
function select_init(select) {
	const select_parent = select.parentElement;
	const select_modifikator = select.getAttribute('class');
	const select_selected_option = select.querySelector('option:checked');
	select.setAttribute('data-default', select_selected_option.value);
	select.style.display = 'none';

	select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');

	let new_select = select.parentElement.querySelector('.select');
	new_select.appendChild(select);
	select_item(select);
}
function select_item(select) {
	const select_parent = select.parentElement;
	const select_items = select_parent.querySelector('.select__item');
	const select_options = select.querySelectorAll('option');
	const select_selected_option = select.querySelector('option:checked');
	const select_selected_text = select_selected_option.text;
	const select_type = select.getAttribute('data-type');

	if (select_items) {
		select_items.remove();
	}

	let select_type_content = '';
	if (select_type == 'input') {
		select_type_content = '<div class="select__value"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
	} else {
		select_type_content = '<div class="select__value"><span>' + select_selected_text + '</span></div>';
	}

	select_parent.insertAdjacentHTML('beforeend',
		'<div class="select__item">' +
		'<div class="select__title">' + select_type_content + '</div>' +
		'<div class="select__options">' + select_get_options(select_options) + '</div>' +
		'</div></div>');

	select_actions(select, select_parent);
}
function select_actions(original, select) {
	const select_item = select.querySelector('.select__item');
	const select_body_options = select.querySelector('.select__options');
	const select_options = select.querySelectorAll('.select__option');
	const select_type = original.getAttribute('data-type');
	const select_input = select.querySelector('.select__input');

	select_item.addEventListener('click', function () {
		let selects = document.querySelectorAll('.select');
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			if (select != select_item.closest('.select')) {
				select.classList.remove('_active');
				_slideUp(select_body_options, 100);
			}
		}
		_slideToggle(select_body_options, 100);
		select.classList.toggle('_active');
	});

	for (let index = 0; index < select_options.length; index++) {
		const select_option = select_options[index];
		const select_option_value = select_option.getAttribute('data-value');
		const select_option_text = select_option.innerHTML;

		if (select_type == 'input') {
			select_input.addEventListener('keyup', select_search);
		} else {
			if (select_option.getAttribute('data-value') == original.value) {
				select_option.style.display = 'none';
			}
		}
		select_option.addEventListener('click', function () {
			for (let index = 0; index < select_options.length; index++) {
				const el = select_options[index];
				el.style.display = 'block';
			}
			if (select_type == 'input') {
				select_input.value = select_option_text;
				original.value = select_option_value;
			} else {
				select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
				original.value = select_option_value;
				select_option.style.display = 'none';
			}
		});
	}
}
function select_get_options(select_options) {
	if (select_options) {
		let select_options_content = '';
		for (let index = 0; index < select_options.length; index++) {
			const select_option = select_options[index];
			const select_option_value = select_option.value;
			if (select_option_value != '') {
				const select_option_text = select_option.text;
				select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
			}
		}
		return select_options_content;
	}
}
function select_search(e) {
	let select_block = e.target.closest('.select ').querySelector('.select__options');
	let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
	let select_search_text = e.target.value.toUpperCase();

	for (let i = 0; i < select_options.length; i++) {
		let select_option = select_options[i];
		let select_txt_value = select_option.textContent || select_option.innerText;
		if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
			select_option.style.display = "";
		} else {
			select_option.style.display = "none";
		}
	}
}
function selects_update_all() {
	let selects = document.querySelectorAll('select');
	if (selects) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			select_item(select);
		}
	}
}
let _slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}

function set_color(precent, color, value) {
	const input = $('#color')

	input.val(value)
	input.css('background', color)

	$('#color_modal').click()
}
$('#color').click(function(){
	$('.select-colors').addClass('active');
	$('html').css('overflow','hidden');
})
$(document).mouseup(function(e) {
	var $target = $(e.target);
	if ($target.closest(".box").length == 0 && $target.closest("#color").length == 0) {
		$(".select-colors").removeClass("active");
		$('html').css('overflow','hidden auto');
	}
});


$('.item').click(function(){
	$('.select-colors').removeClass('active');
	$('html').css('overflow','hidden auto');
})
$('.close').click(function(){
	$('.select-colors').removeClass('active');
	$('html').css('overflow','hidden auto');
})

// МОДАЛЬНЫЕ ОКНА ВЫБОРА 
$('#bracing').click(function(){
	$('.popup.bracing').addClass('active');
	$('html').css('overflow','hidden');
})
$('.popup__close').click(function(){
	$('.popup.bracing').removeClass('active');
	$('html').css('overflow','hidden auto');
})
$('.popup__name.bracing').each(function(){
	$('.popup-text.bracing').click(function(){
		$('#bracing').val($(this).children('.popup__name.bracing').text());
		$('.popup.bracing').removeClass('active');
		$('html').css('overflow','hidden auto');
	});
})
$('.popup.bracing').mouseup(function (e) {
	e.stopPropagation();
	let modalContent = $('.popup__body');
	if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('active');
		$('html').css('overflow','hidden auto');
	}
});
$('#frame').click(function(){
	$('.popup.frame').addClass('active');
	$('html').css('overflow','hidden');
})
$('.popup__close').click(function(){
	$('.popup.frame').removeClass('active');
	$('html').css('overflow','hidden auto');
})
$('.popup__name.frame').each(function(){
	$('.popup-text.frame').click(function(){
		$('#frame').val($(this).children('.popup__name.frame').text());
		$('.popup.frame').removeClass('active');
		$('html').css('overflow','hidden auto');
	});
})
$('.popup.frame').mouseup(function (e) {
	e.stopPropagation();
	let modalContent = $('.popup__body');
	if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('active');
		$('html').css('overflow','hidden auto');
	}
});
$('#view').click(function(){
	$('.popup.view').addClass('active');
	$('html').css('overflow','hidden');
})
$('.popup__close').click(function(){
	$('.popup.view').removeClass('active');
	$('html').css('overflow','hidden auto');
})
$('.popup__name.view').each(function(){
	$('.popup-text.view').click(function(){
		$('#view').val($(this).children('.popup__name.view').text());
		$('.popup.view').removeClass('active');
		$('html').css('overflow','hidden auto');
	});
})
$('.popup.view').mouseup(function (e) {
	e.stopPropagation();
	let modalContent = $('.popup__body');
	if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('active');
		$('html').css('overflow','hidden auto');
	}
});
