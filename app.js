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

		currentSlide.fadeOut(0).removeClass('current-slide');
		nextSlide.fadeIn(200).addClass('current-slide');

		currentDot.removeClass('current-dot');
		nextDot.addClass('current-dot');
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

		currentSlide.fadeOut(0).removeClass('current-slide');
		prevSlide.fadeIn(200).addClass('current-slide');

		currentDot.removeClass('current-dot');
		prevDot.addClass('current-dot');
	});

	$('.select-menu').change(function(){
		var value = $(this).val();

		if(value == 'about'){
			$('.current-slide').fadeOut(0).removeClass('current-slide');
			$('.about').fadeIn(200).addClass('current-slide');

			$('.current-dot').removeClass('current-dot');
			$('.about-dot').addClass('current-dot');
		}
		if(value == 'education'){
			$('.current-slide').fadeOut(0).removeClass('current-slide');
			$('.education').fadeIn(200).addClass('current-slide');

			$('.current-dot').removeClass('current-dot');
			$('.education-dot').addClass('current-dot');
		}
		if(value == 'work'){
			$('.current-slide').fadeOut(0).removeClass('current-slide');
			$('.work').fadeIn(200).addClass('current-slide');

			$('.current-dot').removeClass('current-dot');
			$('.work-dot').addClass('current-dot');
		}
		if(value == 'skills'){
			$('.current-slide').fadeOut(0).removeClass('current-slide');
			$('.skills').fadeIn(200).addClass('current-slide');

			$('.current-dot').removeClass('current-dot');
			$('.skills-dot').addClass('current-dot');
		}
	});

	$('#about').click(function(){
		$('.current-slide').fadeOut(0).removeClass('current-slide');
		$('.about').fadeIn(200).addClass('current-slide');

		$('.current-dot').removeClass('current-dot');
		$('.about-dot').addClass('current-dot');
	});

	$('#education').click(function(){
		$('.current-slide').fadeOut(0).removeClass('current-slide');
		$('.education').fadeIn(200).addClass('current-slide');

		$('.current-dot').removeClass('current-dot');
		$('.education-dot').addClass('current-dot');
	});

	$('#work').click(function(){
		$('.current-slide').fadeOut(0).removeClass('current-slide');
		$('.work').fadeIn(200).addClass('current-slide');

		$('.current-dot').removeClass('current-dot');
		$('.experience-dot').addClass('current-dot');
	});

	$('#skills').click(function(){
		$('.current-slide').fadeOut(0).removeClass('current-slide');
		$('.skills').fadeIn(200).addClass('current-slide');

		$('.current-dot').removeClass('current-dot');
		$('.skills-dot').addClass('current-dot');
	});
});

