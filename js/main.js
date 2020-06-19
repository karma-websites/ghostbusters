$(document).ready(function() {
	
	
	/* Menu nav toggle */
	let nav = $("#nav");
	let mobuleButtons = $("#mobuleButtons");
	
	mobuleButtons.on("click", function(e) {
		event.preventDefault();
		
		$(this).toggleClass("active");
		nav.toggleClass("active");
	});
	
	
});