$(document).ready(function(){
	$('.object').click(function(){
		$(this).children('.description').toggle(100);
	});

	$('.arrow-next').click(function(){
		var currentSlide = $('.current-slide');
		var nextSlide = currentSlide.next();

		var currentDot = $('.current-dot');
		var nextDot = currentDot.next();

		//wrapped to last page, go back to first
		if(nextSlide.length == 0){
			nextSlide = $('.slide').first();
			nextDot = $('.dot').first();
		}

		currentSlide.fadeOut(200).removeClass('current-slide');
		nextSlide.fadeIn(200).addClass('current-slide');

		currentDot.fadeOut(200).removeClass('current-dot');
		nextDot.fadeIn(200).addClass('current-dot');
	});

	$('.arrow-prev').click(function(){
		var currentSlide = $('.current-slide');
		var prevSlide = currentSlide.prev();

		var currentDot = $('.current-dot');
		var prevDot = currentDot.prev();

		//wrapped to first page, go back to last
		if(prevSlide.length == 0){
			prevSlide = $('.slide').last();
			prevDot = $('.dot').last();
		}

		currentSlide.fadeOut(200).removeClass('current-slide');
		prevSlide.fadeIn(200).addClass('current-slide');

		currentDot.fadeOut(200).removeClass('current-dot');
		prevDot.fadeIn(200).addClass('current-dot');
	});

	$('#about').click(function(){
		$('.current-slide').fadeOut(200).removeClass('current-slide');
		$('.about').fadeIn(200).addClass('current-slide');
	});

	$('#education').click(function(){
		$('.current-slide').fadeOut(200).removeClass('current-slide');
		$('.education').fadeIn(200).addClass('current-slide');
	});

	$('#work').click(function(){
		$('.current-slide').fadeOut(200).removeClass('current-slide');
		$('.work').fadeIn(200).addClass('current-slide');
	});

	$('#skills').click(function(){
		$('.current-slide').fadeOut(200).removeClass('current-slide');
		$('.skills').fadeIn(200).addClass('current-slide');
	});
});

