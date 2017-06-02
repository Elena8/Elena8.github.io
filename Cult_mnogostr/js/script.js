$(function(){
    $('.flexslider').flexslider({
    animation: "slide"
  });
    $('.flexslider').focus();
    /*$('select').blur();
    $('input').blur();
    $('.datepick-cmd-prev ').blur();
    $('#inlineDatepicker').blur();
    $('textarea').blur();*/
    
    
    $(".map").googleMap();
    $(".map").addMarker({
      zoom: 100, // Initial zoom level (optional)
      coords: [55.035738, 82.900490], // Map center (optional)
    //address: "Вокзальная магистраль 1, Новосибирск",
        text:"<b>Cult</b>"
      //type: "ROADMAP" // Map type (optional)
    });
    
    
  /*  $('.flexslider').flexslider({
    animation: "slide"
  });*/
    
     $('a.link__online[href*=\\#]').click(function(){
         
         $('.modal__bg').css({'display':'block'}); $('.modal__window_wrap').css({'display':'block'});
         
         $('.modal__btn').click(function(){
             $('.modal__bg').hide(); $('.modal__window_wrap').hide();
             
         });
         
          $('.close__window').click(function(){
             $('.modal__bg').hide(); $('.modal__window_wrap').hide();
             
         })
         
     });
    
   
    var note = $('#note'),
                ts = new Date(2017, 6, 1),
                newYear = true;
        if((new Date()) > ts){
                // The new year is here! Count towards something else.
                // Notice the *1000 at the end - time must be in milliseconds
                ts = (new Date()).getTime() + 10*24*60*60*1000;
                newYear = false;
        }
        $('#countdown').countdown({
                timestamp        : ts,
                callback        : function(days, hours, minutes, seconds){
                        var message = "";
                        message += days + " day" + ( days==1 ? '':'s' ) + ", ";
                        message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
                        message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
                        message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
                        if(newYear){
                                message += "left until the new year!";
                        }
                        else {
                                message += "left to 10 days from now!";
                        }
                        note.html(message);
                }
        });
    
  
    
    
});

//AIzaSyDqgZhc7BIUEnCmfSjPkWrt9x6EV3HKYAA