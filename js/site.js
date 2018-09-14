jQuery(document).ready(function($) {

	$('.accordion > li > ul').hide();
	
	$('.accordion > li > h3').click(function(){
		if( $(this).parent().hasClass('open') ){
			$(this).next('ul').slideUp();
		}
		else {
			$('.accordion > li > ul').slideUp();
			$('.accordion > li').removeClass('open');
			$(this).next('ul').slideDown();
		}
		$(this).parent().toggleClass('open');
	});
});
