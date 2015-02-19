$(document).ready(function() {
	
	$(window).scroll(function(e) {
		if( $(document).scrollTop() > 80 ) {
			$('.nav').css('background-color', '#000');
			$('.nav').css('fontSize', '12px');
		} else {
			$('.nav').css('background-color', 'transparent');
			$('.nav').css('fontSize', '16px');
		}
	});

});