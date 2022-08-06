$(document).ready(function(){

	$('.btn-scroll').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 500 ){
			$('.btn-scroll').slideDown(1000);
		} else {
			$('.btn-scroll').slideUp(1000);
		}
	});

});