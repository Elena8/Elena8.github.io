$(document).ready(function() {
    console.log("123");
$(function(){
    $('#myCarousel3').on('slide.bs.carousel', function () {
     console.log("Событие срабатывает перед началом процесса смены слайда.");
    });
  });
	
	
});