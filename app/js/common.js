$(document).ready(function () {
	// моб.меню
	$(".toggle-mnu_1").click(function() {
	  $(this).toggleClass("on");
	  $(".main-mnu_1").slideToggle();
	  return false;
	});
	$(".toggle-mnu_2").click(function() {
	  $(this).toggleClass("on");
	  $(".main-mnu_2").slideToggle();
	  return false;
	});

	// ховер на хнопки
	$(function() {
	    $('.btn')
	        .on('mouseenter', function(e) {
	            var parentOffset = $(this).offset(),
	                relX = e.pageX - parentOffset.left,
	                relY = e.pageY - parentOffset.top;
	            $(this).find('span').css({ top: relY, left: relX })
	        })
	        .on('mouseout', function(e) {
	            var parentOffset = $(this).offset(),
	                relX = e.pageX - parentOffset.left,
	                relY = e.pageY - parentOffset.top;
	            $(this).find('span').css({ top: relY, left: relX })
	        });
	    $('[href=#]').click(function() {
	        return false });
	});


	//Fixed Cart
	var scrollTop, wrapperBasketTop;
	function fixedCart() {
		scrollTop = $(window).scrollTop();
		wrapperBasketTop = $('.header_top').outerHeight();
		if(scrollTop >= wrapperBasketTop){
			$('.wrapper_basket').addClass('fixed-style');
		}else{
			$('.wrapper_basket').removeClass('fixed-style');
		}
	}

	$(window).load(function () {
		fixedCart();
	});

	$(window).on('scroll', function () {
		fixedCart();
	});


});