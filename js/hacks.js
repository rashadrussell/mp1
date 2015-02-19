$(document).ready(function() {

	$('.hack').each(function() {

		$(this).hover(function(e) {
			$(this).css('cursor', 'pointer');
		});

	});

	// Carousel Modal
	$('#hackList').on('click', 'img', function(e) {

		var transparentScreen = $('<div class="transparentScreen" />'),
			modal = $('.modal').css('display', 'initial'),
			list = $('<ul />'),
			hackImgs = $(this).clone().find('img'),
			chosenImage = $(e.target),
			image = $('<img />'),
			item = $('<li />');

		image.attr('src', $(this).attr('src'));
		item.append(image);
		list.append(item);

		modal.find('.description').append(chosenImage.next().clone());
		modal.find('.listContainer').append(list);

		$('body').append(modal);
		$('body').append(transparentScreen);

		var iter = parseInt(chosenImage.attr('value'));

		$('.modal .imgArea').on('mouseenter', function() {
			console.log('yo yo yo');
			$('.modal .arrows').fadeIn('fast');
		})
		.mouseleave(function() {
			$('.modal .arrows').fadeOut('fast');
		});


		$('.arrows').on('click', function(e) {
			var images = $('#hackList').find('img'),
			    len = images.length,
			    nextImage,
			    nextImageIdx;

			iter++;

			$('.modal .description').html($(images[iter%len]).next().clone());
			nextImageIdx = $(images[iter%len]).attr('value'); 
			nextImage = $('img[value="' + nextImageIdx +'"]');
			
			$('.modal .listContainer img').attr('src', nextImage.attr('src'));
			
		});

		$('.transparentScreen').on('click', function() {
			$('.modal').css('display', 'none');
			$('.modal .description').empty();
			$('.arrows').unbind('click');
			$('.modal').find('ul').remove();
			$(this).remove();
		});

	});

	

});