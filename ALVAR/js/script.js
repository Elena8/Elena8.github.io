jQuery(function() {

  jQuery('.flexslider').flexslider({
    animation: "slide"
  });
    
//    jQuery('ul > li').onclick(function() {
//			jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
//        }, function() {
//        jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
//		});
    
    
    //////////////////////////////////////////
//    jQuery('ul > li').on('click',function() {
//jQuery(this).find('.dropdown-menu').stop(true, true).fadeIn();
//}, function() {
//jQuery(this).find('.dropdown-menu').stop(true, true).fadeOut();
//});
    /////////////////////////////////////////
    
//    jQuery('ul > li').hover(function() {
//jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
//}, function() {
//jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
//});
    
    var $dropdowns = $('.dropdown');
$dropdowns.click(function() {
  if ( $(this).hasClass('active') ){
    $(this).toggleClass('active');
  } else {
    $dropdowns.removeClass('active');
    $(this).toggleClass('active');
  }
});
    
    jQuery(document).on('click',function(){
        jQuery('.collapse').collapse('hide');
    });
    
      
$('.sipuchie__img__wrap').click(function(){
    if ( $('.sipuchie_all').css('display')!= 'none' ) {
        $('.sipuchie_all').slideUp("slow");
//       $('#button_d').removeClass('icon-up-open-big');
        event.stopPropagation();
    }
    else {
//        $('#button_d').addClass('icon-up-open-big');
        $(this).siblings(".sipuchie_all").slideToggle("slow");
    }
 });

});