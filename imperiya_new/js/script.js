 $(function() {

    $('.flexslider').flexslider({
        animation: "fade"
    });
     
//////////////////////////////////////////
     
     $(document).on('click',function(){
        $('.collapse').collapse('hide');
    });
     
/////////////////////////////////////////
         
         // блок карусели
	var carousel = $("#carousel");
     carousel.owlCarousel({
	// Количество отображающихся блоков 
	// в зависимости от устройства (ширины экрана)
	
	// Количество блоков на больших экранах
	items:             5,
	
	// 5 блоков на компьютерах (экран от 1400px до 901px)
	itemsDesktop:      [1400, 5],
	
	// 3 блока на маленьких компьютерах (экран от 900px до 601px)
	itemsDesktopSmall: [900, 3],
	
	// 2 элемента на планшетах (экран от 600 до 480 пикселей)
	itemsTablet:       [600, 2],
	
	// Настройки для телефона отключены, в этом случае будут
	// использованы настройки планшета
	itemsMobile:       [479, 1],
         //Базовая скорость
    slideSpeed : 200,
    paginationSpeed : 800,
    rewindSpeed : 1000,
     
    //Авто-прокрутка
    autoPlay : true,
    stopOnHover : false,
     
    // Навигация
    navigation : false,
    navigationText : ["prev","next"],
    rewindNav : true,
    scrollPerPage : false,
     
    // Пагинация
    pagination : true,
    paginationNumbers: false,
     
    // Отзывчивость
    responsive: true,
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,


  });


	
	

    $(function() {

        $('.show_menu').click(function(){

                $('.menu').fadeIn();

                $('.show_menu').fadeOut();

                $('.hide_menu').fadeIn();

        });

        $('.hide_menu').click(function(){

                $('.menu').fadeOut();
                $('.show_menu').fadeIn();

                $('.hide_menu').fadeOut();

        });

    });
     
     $('a.link__call[href*=\\#]').click(function(){
         
         $('.modal__bg').css({'display':'block'}); $('.modal__window_wrap').css({'display':'block'});
         
         $('.modal__btn').click(function(){
             $('.modal__bg').hide(); $('.modal__window_wrap').hide();
             
         });
         
          $('.close__window').click(function(){
             $('.modal__bg').hide(); $('.modal__window_wrap').hide();
             
         })
         
     });
     
     
     
  
$('#button_d').click(function(){
    if ( $('#text_more').css('display')!= 'none' ) {
        $('#text_more').slideUp("slow");
       $('#button_d').removeClass('icon-up-open-big');
        event.stopPropagation();
    }
    else {
        $('#button_d').addClass('icon-up-open-big');
        $(this).siblings("#text_more").slideToggle("slow");
    }
 });
     
 

  });

