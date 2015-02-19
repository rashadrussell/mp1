$(document).ready(function() {

	$('#header .nav').on('click', 'a', function(e) {
		var section = $(e.currentTarget).prop('hash');

		e.preventDefault();

		$('html,body').stop().animate({
			scrollTop: $(section).prop('offsetTop')
		}, 800);
	});

});