$(document).ready(function() {

	$('.linkedin').on('click', function(e) {
		window.location.href = $(this).attr('href');
	});
	
	$(window).on('scroll', function(e) {

		if( $(document).scrollTop() > 80 ) {
			$('.nav').css('fontSize', '12px');
			$('.nav').css('padding', '5px');

		} else {
			$('.nav').css('fontSize', '16px');
			$('.nav').css('padding', '10px');
		}

		var sections = [];

		$('#header .nav a').each(function() {
			sections.push($(this).prop('hash'));
		});


		if($(window).scrollTop() < 770) {

			$('a[href='+sections[0]+'] li').css('background-color', 'green');
			$('.nav :not(a[href='+sections[0]+'] li)').css('background-color', 'transparent');

		} else if($(window).scrollTop() >= 771 && $(window).scrollTop() < 1000) {

			$('a[href='+sections[1]+'] li').css('background-color', 'green');
			$('.nav :not(a[href='+sections[1]+'] li)').css('background-color', 'transparent');

		} else if($(window).scrollTop() >= 1001 && $(window).scrollTop() < 1500) {

			$('a[href='+sections[2]+'] li').css('background-color', 'green');
			$('.nav :not(a[href='+sections[2]+'] li)').css('background-color', 'transparent');

		} else if($(window).scrollTop() >= 1501 && $(window).scrollTop() < 2000) {

			$('a[href='+sections[3]+'] li').css('background-color', 'green');
			$('.nav :not(a[href='+sections[3]+'] li)').css('background-color', 'transparent');

		} else {

			$('a[href='+sections[4]+'] li').css('background-color', 'green');
			$('.nav :not(a[href='+sections[4]+'] li)').css('background-color', 'transparent');

		}
		

		
	});

	

});