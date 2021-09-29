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