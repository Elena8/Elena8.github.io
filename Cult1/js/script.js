$(function(){
    $(".map").googleMap();
    $(".map").addMarker({
      zoom: 100, // Initial zoom level (optional)
      coords: [55.035738, 82.900490], // Map center (optional)
    address: "Вокзальная магистраль 1, Новосибирск",
        text:"<b>Cult</b>"
      //type: "ROADMAP" // Map type (optional)
    });
    
    
    $('.flexslider').flexslider({
    animation: "slide"
  });
    
    
   /*$( "#datepicker" ).datepicker();
    
    $("td").click(function(){
        console.log("dfhvhdgfhgdfh");
        console.log($(this).text());
        console.log($(this).attr("data-month"));
        console.log($(this).attr("data-year"));
    });*/
    
   /*$(document).ready(function(){
			$("#countdown").countdown({
				date: "01 april 2017 12:00:00",
				format: "on"
			},
			
			function() {
				// callback function
			});
		});*/
    
    var note = $('#note'),
                ts = new Date(2017, 3, 1),
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
    
    
    /////////////////////////////////////////////////
    
    
	


/*function showDate(date) {
	alert('The date chosen is ' + date);
}*/


	//$('#inlineDatepicker').datepick({onSelect: showDate});
   
    
  
    
    
});
/*$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});*/



//AIzaSyDqgZhc7BIUEnCmfSjPkWrt9x6EV3HKYAA