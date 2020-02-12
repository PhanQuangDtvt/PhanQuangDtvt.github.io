var x = window.matchMedia("(max-width: 700px)");
/** function scroll  line */
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