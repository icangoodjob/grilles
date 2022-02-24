// ОКНО ВЫЗОВА КАТАЛОГА
$('#header__catalog').on('click', function(e){
	e.preventDefault();
	$('.catalog__window').toggleClass('active');
	$('.aside').toggleClass('index');
	$('.product-card__btn-section').toggleClass('index');
	$('.overlay').toggleClass('active');
	$('body').toggleClass('lock');
});
$('.overlay').mouseup(function(e) {
	var $target = $(e.target);
	if ($target.closest(".catalog__item").length == 0) {
		$(".catalog__window").removeClass("active");
		$('body').removeClass('lock');
		$(this).removeClass('active');
	}
});
// Плавная прокрутка страницы на самый верх
$(function() {
	$('.go-up__btn').click(function(){
		$('html, body').animate({scrollTop: 0}, 500);
	});
});

// Меню Burger
$('.burger').click(function(event) {
	$('.burger, .header__menu').toggleClass('active');
	if ($(this).hasClass('active')) {
		var scrollPosition = [
		self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
		self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
		];
			var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
			html.data('scroll-position', scrollPosition);
			html.data('previous-overflow', html.css('overflow'));
			html.css('overflow', 'hidden');
			window.scrollTo(scrollPosition[0], scrollPosition[1]);
		} else {
			var html = jQuery('html');
			var scrollPosition = html.data('scroll-position');
			html.css('overflow', html.data('previous-overflow'));
			window.scrollTo(scrollPosition[0], scrollPosition[1])
		}
		$('.adaptive__logo').toggleClass('active');
		$('.header__top').toggleClass('white');
		$('.adaptive__user__btn').toggleClass('black');
		$('.adaptive__basket__btn').toggleClass('black');
		$('.adaptive__enter__btn').toggleClass('black');
	});

// Каталог адаптив
const catalogBtn = document.querySelector('.menu__link_catalog'),
subMenuCatalog = document.querySelector('.sub-menu__catalog');

catalogBtn.addEventListener('click', function(e){
	e.preventDefault();
	this.classList.toggle('active');
	subMenuCatalog.classList.toggle('active');
});

// МОДАЛЬНОЕ ОКНО ЗАКАЗАТЬ ЗВОНОК
$('#ordercall').click(function (e) {
	e.preventDefault();
	$('#modalcall').addClass('show');
});
$('.modal__close').click(function (e) {
	e.preventDefault();
	$('#modalcall').removeClass('show');
});
$('#modalcall').mouseup(function (e) {
	let modalContent = $('.modal-body');
	if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('show');
		$('body').removeClass('lock');
	}
	
});

$(function() {
	$('.lazy').lazy({
		combined: true,
		delay: 3000,
	});
});

$(function() {
	$('.lazy-fade').lazy({
		combined: true,
		effect: "fadeIn",
		effectTime: 700,
		threshold: 0,
	});
});


// MASK & PRELOADER
let imageMask = document.querySelectorAll('.image-mask');
let lazyFade = document.querySelectorAll('.lazy-fade');
let lazy = document.querySelectorAll('.lazy');

if (lazyFade){
	lazyFade.forEach(function(el){
		el.addEventListener('load', function(){
			for (let i = 0; i < imageMask.length; i++) {
				imageMask[i].classList.add('hide');
				setTimeout(function(){
					imageMask[i].remove();
				}, 500)
			}
		})
	});
}
if(lazy) {
	lazy.forEach(function(el){
		el.addEventListener('load', function(){
			for (let i = 0; i < imageMask.length; i++) {
				imageMask[i].classList.add('hide');
				setTimeout(function(){
					imageMask[i].remove();
				}, 500)
			}
		})
	});
}



// MASK FOR PHONE
var inputsTel = document.querySelectorAll('input[type="tel"]');
Inputmask({
	"mask": "999 999 99 99",
	showMaskOnHover: false
}).mask(inputsTel);

var inputsCall = document.querySelectorAll('.input-call');
Inputmask({
	"mask": "+7 (999) 999 - 99 - 99",
	showMaskOnHover: false
}).mask(inputsCall);



// ВХОД И РЕГИСТРАЦИЯ
$('#enter-btn').click(function(){
	$('.reg__modal__wrapper').addClass('active');
	$('#modal-login').css('display','block');
	$('.reg__overlay').addClass('active');
	$('html').css('overflow', 'hidden');
});	
$('#enter-icon').click(function(){
	$('.reg__modal__wrapper').addClass('active');
	$('#modal-login').css('display','block');
	$('.reg__overlay').addClass('active');
	$('html').css('overflow', 'hidden');
});
$('#modal-return-btn').click(function(){
	$('.reg__modal__wrapper').removeClass('active');
	$('#modal-registration-1').css('display','none');
	$('#modal-registration-2').css('display','none');
	$('#modal-registration-3').css('display','none');
	$('#modal-registration-4').css('display','none');
	$('#modal-login').css('display','none');
	$('#password-recovery').css('display','none');
	$('.reg__overlay').removeClass('active');
	$('html').css('overflow', 'hidden auto');
});
$('#modal-last-return').click(function(){
	$('.reg__modal__wrapper').removeClass('active');
	$('#modal-registration-1').css('display','none');
	$('#modal-registration-2').css('display','none');
	$('#modal-registration-3').css('display','none');
	$('#modal-registration-4').css('display','none');
	$('#modal-login').css('display','none');
	$('#password-recovery').css('display','none');
	$('.reg__overlay').removeClass('active');
	$('html').css('overflow', 'hidden auto');
});
$('#forget-password').click(function(){
	$('#modal-login').css('display','none');
	$('#password-recovery').css('display','block');
});
$('#recovery-password-return').click(function(){
	$('#password-recovery').css('display','none');
	$('#modal-login').css('display','block');
});
$('#create-account').click(function(){
	$('#modal-login').css('display','none');
	$('#modal-registration-1').css('display','block');
});
$('#modal-reg-back').click(function(){
	$('#modal-registration-1').css('display','none');
	$('#modal-login').css('display','block');
});
$('#enter-account').click(function(){
	$('#modal-registration-1').css('display','none');
	$('#modal-login').css('display','block');
});
$('#to-reg-2').click(function(){
	$('#modal-registration-1').css('display','none');
	$('#modal-registration-2').css('display','block');
});
$('#to-reg-1').click(function(){
	$('#modal-registration-1').css('display','block');
	$('#modal-registration-2').css('display','none');
});
$('#return-green-1').click(function(){
	$('#modal-registration-1').css('display','block');
	$('#modal-registration-2').css('display','none');
});
$('#to-reg-3').click(function(){
	$('#modal-registration-2').css('display','none');
	$('#modal-registration-3').css('display','block');
});
$('#return-reg-2').click(function(){
	$('#modal-registration-2').css('display','block');
	$('#modal-registration-3').css('display','none');
});
$('#return-green-2').click(function(){
	$('#modal-registration-2').css('display','block');
	$('#modal-registration-3').css('display','none');
});
$('#to-reg-4').click(function(){
	$('#modal-registration-3').css('display','none');
	$('#modal-registration-4').css('display','block');
});
$('.return-dot-1').click(function(){
	$('#modal-registration-3').css('display','none');
	$('#modal-registration-2').css('display','none');
	$('#modal-registration-1').css('display','block');
});
$('.return-dot-2').click(function(){
	$('#modal-registration-3').css('display','none');
	$('#modal-registration-2').css('display','block');
	$('#modal-registration-1').css('display','none');
});
const input = document.querySelector('._error');
input.insertAdjacentHTML(
	'afterend',
	`<p>Данное поле заполнено некорректно. Внесите необходимые изменения и попробуйте еще раз.</p> `
	);




