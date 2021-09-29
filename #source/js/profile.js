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

$('.profile-order__show__btn').click(function(){
	$(this).css('display','none');
	$('.profile-order__bottom__img-item').removeClass('hidden').css('margin-bottom','10px');
	$('.profile-order__bottom__images.over').css('max-width','100%')
})

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

// Модальные окна
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
$('#buy-info').click(function (e) {
	e.preventDefault();
	$('.popup.buy-info').addClass('active');
	$('html').css('overflow','hidden');
});
$('.popup__close').click(function (e) {
	e.preventDefault();
	$('.popup.buy-info').removeClass('active');
	$('html').css('overflow','hidden auto');
});
$('.popup.buy-info').mouseup(function (e) {
	e.stopPropagation();
	let modalContent = $(".popup__body");
	if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('active');
		$('html').css('overflow','hidden auto');
	}
});
