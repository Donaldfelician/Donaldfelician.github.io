$(document).ready(function () {
	
	// display the navigation after scrolling
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$(".navigation").fadeIn(200);	
		} else{
			$(".navigation").fadeOut(200);
		}
	});

	$('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });


});