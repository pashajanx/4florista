$(document).ready(function () {

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
});