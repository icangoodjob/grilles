(function($) {
	$(function() {
		$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
			$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
		});
	});
})(jQuery);

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
		$('html').css('overflow','hidden auto');
	}
});
$('#payment').click(function () {
	$('.popup.payment').addClass('active');
	$('html').css('overflow','hidden');
});
$('.popup__close').click(function (e) {
	e.preventDefault();
	$('.popup.payment').removeClass('active');
	$('html').css('overflow','hidden auto');
});
$('.popup.payment').mouseup(function (e) {
	e.stopPropagation();
	let modalContent = $(".popup__body");
	if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('active');
		$('html').css('overflow','hidden auto');
	}
});

// DROPDOWN MENU
$("#input-region").click(function(event) {
	toggleMenuRegion();
	event.stopPropagation();
});
let towns = $('.b-drop-down__list-item');
towns.each(function() {
	$('.b-drop-down__list-item').click(function() {
		$('#input-region').val($(this).text());
		closeMenuRegion();
	});
});
function toggleMenuRegion() {
	let menu = $("#drop-down__region");
	if (!menu.hasClass('active')) {
		window.addEventListener('click', closeMenuRegion);
	} else {
		window.removeEventListener('click', closeMenuRegion);
	}
	menu.toggleClass("active");
}
function closeMenuRegion() {
	$("#drop-down__region").removeClass("active")
}
$('#drop-down__region').click(function(event) {
	event.stopPropagation();
});
$('#input-region').on('input', function() { 
	let search = $(this).val();
	searchData(search);
});
function searchData(search) {
	let towns = $('.b-drop-down__list-item');
	towns.each(function() {
		if ($(this).text().indexOf(search) === -1) {
			$(this).addClass('item_hide');
		} else {
			$(this).removeClass('item_hide');
		}
	});
}
// DROPDOWN MENU 2
$("#input-city").click(function(event) {
	toggleMenuCity();
	event.stopPropagation();
});
let city = $('.b-drop-down__list-item--city');
city.each(function() {
	$('.b-drop-down__list-item--city').click(function() {
		$('#input-city').val($(this).text());
		closeMenuCity();
	});
});
function toggleMenuCity() {
	let menu = $("#drop-down__city");
	if (!menu.hasClass('active')) {
		window.addEventListener('click', closeMenuCity);
	} else {
		window.removeEventListener('click', closeMenuCity);
	}
	menu.toggleClass("active");
}
function closeMenuCity() {
	$("#drop-down__city").removeClass("active")
}
$('#drop-down__city').click(function(event) {
	event.stopPropagation();
});
$('#input-city').on('input', function() { 
	let search = $(this).val();
	searchDataCity(search);
});
function searchDataCity(search) {
	let city = $('.b-drop-down__list-item--city');
	city.each(function() {
		if ($(this).text().indexOf(search) === -1) {
			$(this).addClass('item_hide');
		} else {
			$(this).removeClass('item_hide');
		}
	});
}