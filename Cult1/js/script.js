$(function(){
    $(".map").googleMap();
    $(".map").addMarker({
      zoom: 100, // Initial zoom level (optional)
      //coords: [48.895651, 2.290569], // Map center (optional)
    address: "Вокзальная магистраль 1 Новосибирск",
        text:"<b>Cult</b>"
      //type: "ROADMAP" // Map type (optional)
    });
    
    
    $('.flexslider').flexslider({
    animation: "slide"
  });
    
    
   $( "#datepicker" ).datepicker();
    
});
/*$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});*/



//AIzaSyDqgZhc7BIUEnCmfSjPkWrt9x6EV3HKYAA