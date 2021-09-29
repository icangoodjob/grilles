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
	// Spoiler
	$(document).ready(function(){
		$('.questions__title').click(function(event){
			if($('.questions-block').hasClass('spoiler')){
				$('.questions__title').not($(this)).removeClass('active');
				$('.questions__text').not($(this).next()).slideUp(500);
			}
			$(this).toggleClass('active').next().slideToggle(500);
		});
	});