$(document).ready(function() {
	
	
	/* Menu nav toggle */
	let nav = $("#nav");
	let mobuleButtons = $("#mobuleButtons");
    let menuButton = $("#menuButton");
	
	mobuleButtons.on("click", function(e) {
		event.preventDefault();
		
		nav.toggleClass("active");
        menuButton.toggleClass("active");
	});
    
    
    
    /* Tabs */
    $(".tab__item").not(":first").hide();
    $(".tabs .section__title").click(function () {
        $(".tabs .section__title")
            .removeClass("active").eq($(this).index()).addClass("active");
        $(".tab__item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
	
    
    
});







