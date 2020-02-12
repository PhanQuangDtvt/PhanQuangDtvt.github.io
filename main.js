/** function scroll  line */
function scrollingContainer(id) {
	$('html,body').animate({
	    scrollTop: $(id).offset().top-70},
	 	'slow');     
}