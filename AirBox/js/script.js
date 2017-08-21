jQuery(document).ready(function(){
    
     //scroll animation
  AOS.init({
    duration: 1500
  });
    
//    $("#btnMenu").on("click", function(){
//$("#top-menu").slideToggle();
//$(this).toggleClass("active");
//});
//    
//    $('#btnMenu').click(function(){
//    if ( $('#top-menu').css('display')!= 'none' ) {
//        $('#top-menu').slideUp("slow");
//        event.stopPropagation();
//    }
//    else {
//        $(this).siblings("#top-menu").slideToggle("slow");
//    }
// });
     
    
//  $('a[href="#"]').on('click', function(e) {
//    e.preventDefault();
//    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
//  });
    $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });


    
});