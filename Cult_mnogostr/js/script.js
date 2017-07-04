$(function(){
//    $('.flexslider').flexslider({
//    animation: "slide"
//  });
//    $('.flexslider').focus();
    
    
    
    $(".map").googleMap();
    $(".map").addMarker({
      zoom: 100, // Initial zoom level (optional)
      coords: [55.035738, 82.900490], // Map center (optional)
    //address: "Вокзальная магистраль 1, Новосибирск",
        text:"<b>Cult</b>"
      //type: "ROADMAP" // Map type (optional)
    });
    
    
  
    
     $('a.link__online[href*=\\#]').click(function(){
         
         $('.modal__bg').css({'display':'block'}); $('.modal__window_wrap').css({'display':'block'});
         
         $('.modal__btn').click(function(){
             $('.modal__bg').hide(); $('.modal__window_wrap').hide();
             
         });
         
          $('.close__window').click(function(){
             $('.modal__bg').hide(); $('.modal__window_wrap').hide();
             
         })
         
     });
    
   
    
    
    $('.carousel').carousel({
  interval: 10000
})
    
 
var maxHeight2 = 0;
 
jQuery(".service__text").each(function(){
  if ( jQuery(this).height() > maxHeight2 ) 
  {
    maxHeight2 = jQuery(this).height();
  }
});
 
jQuery(".service__text").height(maxHeight2);   
  
    
    
});

//AIzaSyDqgZhc7BIUEnCmfSjPkWrt9x6EV3HKYAA