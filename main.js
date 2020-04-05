$(document).ready(function() {

	// code photo
	$('.profile-photo a').fancybox({
		openEffect : 'elastic',
		openSpeed  : 150,

		closeEffect : 'elastic',
		closeSpeed  : 150,
	});

	$('.menu-switch').click(function(event) {
		$(this).toggleClass('open');
		$('#site-navigation').toggleClass('extend');
		$('.main-cv').toggleClass('main-rotate');
		$('.den').toggleClass('len');
	});

	$('#den-3d').click(function(event) {
		$('.menu-switch').removeClass('open');
		$('#site-navigation').removeClass('extend');
		$('.main-cv').removeClass('main-rotate');
		$('.den').removeClass('len');
	});

	$('.fa-home').click(function(event) {
		$('.main-cv').animate({
			    scrollTop: 0},
			 	'slow');
		$('.item').removeClass('active');
		$('#item-home').toggleClass('active');
	});

	$('.fa-user').click(function(event) {
		$('.main-cv').animate({
			    scrollTop: 657},
			 	'slow');
		$('.item').removeClass('active');
		$('#item-about').toggleClass('active');
	});

	$('.fa-signal').click(function(event) {
		$('.main-cv').animate({
			    scrollTop: 1162},
			 	'slow');
		$('.item').removeClass('active');
		$('#item-skill').toggleClass('active');
	});

	$('.fa-bar-chart-o').click(function(event) {
		$('.main-cv').animate({
			    scrollTop: 1687},
			 	'slow');
		$('.item').removeClass('active');
		$('#item-exp').toggleClass('active');
	});

	$('.fa-book').click(function(event) {
		$('.main-cv').animate({
			    scrollTop: 2720},
			 	'slow');
		$('.item').removeClass('active');
		$('#item-edu').toggleClass('active');
	});

	$('.main-cv').scroll(function (event) {
    	var scroll = $('.main-cv').scrollTop();
    	$('.item').removeClass('active');
    	if (scroll < 400) {
    		$('#item-home').addClass('active');
			$('.scroll-title-1').addClass('title-name');
			$('.scroll-title').addClass('title-name');
			$('.scroll-icon').addClass('social-profiles');
    	} else if (400 <= scroll && scroll < 990) {
    		$('.scroll-title').removeClass('title-name');
    		$('.scroll-title-1').removeClass('title-name');
    		$('.scroll-icon').removeClass('social-profiles');
    		$('#item-about').addClass('active');
    	} else if (990 <= scroll && scroll < 1560) {
    		$('.scroll-title').removeClass('title-name');
    		$('.scroll-title-1').removeClass('title-name');
    		$('.scroll-icon').removeClass('social-profiles');
    		$('#item-skill').addClass('active');
    	} else if (1560 <= scroll && scroll < 2550) {
    		$('#item-exp').addClass('active');
    		$('.scroll-title').removeClass('title-name');
    		$('.scroll-title-1').removeClass('title-name');
    		$('.scroll-icon').removeClass('social-profiles');
    	} else {
    		$('#item-edu').addClass('active');
    		$('.scroll-title').removeClass('title-name');
    		$('.scroll-title-1').removeClass('title-name');
    		$('.scroll-icon').removeClass('social-profiles');
    	}
	});
});
