$(document).ready(function() {

	// code photo
	$('.profile-photo a').fancybox({
		openEffect : 'elastic',
		openSpeed  : 150,

		closeEffect : 'elastic',
		closeSpeed  : 150,
	});

	
});

/** function scroll  line */
var x = window.matchMedia("(max-width: 700px)");
function scrollingContainer(id) {
	if (x.matches) {
		$('html,body').animate({
	    scrollTop: $(id).offset().top-125},
	 	'slow'); 
	} else {
		$('html,body').animate({
	    scrollTop: $(id).offset().top-70},
	 	'slow'); 
	}

}