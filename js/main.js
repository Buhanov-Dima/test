$(document).ready(function(){

	$('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(el).offset().top -0}, 1000);
        return false;
	});

});

$(window).scroll(function(){
    if ($(window).scrollTop() > 1) {
        $('.wp-header').addClass('fixed');
    }
    else {
        $('.wp-header').removeClass('fixed');
    }
});