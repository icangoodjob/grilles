$('.buy__info__accordion').click(function(){
	$(this).toggleClass('active');
	$(this).children('.accordion__body').toggleClass('active');
});