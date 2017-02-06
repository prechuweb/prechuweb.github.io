$(window).on('load', function(){
	$('.carousel').slick({
	});
	$('.loader').fadeOut('slow');
});

$('.nav__btn').on('click', function(){
  $('.nav__mobi').addClass('active');
});

$('.nav__mobi i').on('click', function(){
  $('.nav__mobi').removeClass('active');
});

$(document).ready(function(){   
	var width_w = $(window).width();
	var img_height = 0.348*width_w;
	if (width_w>=320 && width_w<1024) {
		$(".carousel__image img").height(img_height);
	} else{
		var img_height = 436;
		$(".carousel__image img").height(img_height);
	}

    $(window).resize(function(){
		var width_w = $(window).width();
		var img_height = 0.348*width_w;
		if (width_w>=320 && width_w<1024) {
			$(".carousel__image img").height(img_height);
		} else{
			var img_height = 436;
			$(".carousel__image img").height(img_height);
		}
	});


    $(window).scroll(function () {

        if($(window).width() >= 1000){

            if ($(this).scrollTop() >= 300) {
                $('.our-skills__item.blue').addClass('move-left').removeClass('remove-left');
            }

            if ($(this).scrollTop() >= 300) {
                $('.our-skills__item.yellow').addClass('move-right').removeClass('remove-right');
            }

            if ($(this).scrollTop() >= 300) {
                $('.our-skills__item.red').addClass('hide').removeClass('rehide');
            }

            if ($(this).scrollTop() >= 450) {
                $('.main-advantage__logo').addClass('flip');
            }

            if ($(this).scrollTop() >= 450) {
                $('.main-advantage__description').addClass('zoomInDown');
            }


        }
    });

});



