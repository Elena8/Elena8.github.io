/*$(function() {
              $('.flexslider').flexslider({
                animation: "slide"
              });
});*/

 $(function() {

    $('.flexslider').flexslider({

          animation: "fade"

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
        $('#text_more').css({'display':'none'});
    }
    else {
        $('#text_more').css({'display':'block'});
    }
 });
     
 

  });

