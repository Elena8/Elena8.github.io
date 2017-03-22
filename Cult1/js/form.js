$(function() {
	$('#popupDatepicker').datepick();
	$('#inlineDatepicker').datepick({onSelect: showDate});
    var selectTime;
    var daTa = showDate;
    console.log ("data!!",daTa);
        
    $("#idSelect").change(function() {
        console.log("TIME:change ");
        selectTime = $("#idSelect").val();
        
        console.log("TIME: ",selectTime);
    });
    $(".btn__form").click(function () {
      var time, name, tel__number, comment,datta;
      name = $('.input__name').val();
      tel__number = $('.input_telNumber').val();
      comment = $('.online__txtarea').val();
    datta=$('.datepick-selected').attr('title');
    
        
     //daTa = date;
        //selectTime =$("#idSelect:selected").attr("value");
        
     console.log("TIME POST: ",selectTime);
      console.log (name);
      console.log (tel__number);
      console.log (comment);
      console.log (datta);
     $(".modal__window_wrap").css({"display":"block"});
    $(".modal__name-form").text(name);
    $(".modal__tel-form").text(tel__number);
    $(".modal__time-form").text(selectTime);
    $(".modal__comment-form").text(comment);
    $(".modal__data-form").text(datta);
        
        $(".btn__ago").click(function(){
            $(".modal__window_wrap").hide();
            $(".modal__name-form").text('');
            $(".modal__tel-form").text('');
            $(".modal__time-form").text('');
            $(".modal__comment-form").text('');
            $(".modal__data-form").text('');
        });
        
       $(".btn__post").click(function(){
           $(".modal__window_wrap").hide();
            
            $(".modal__name-form").val('').trigger('input');
            $(".modal__tel-form").text('');
            $(".modal__time-form").text('');
            $(".modal__comment-form").text('');
            $(".modal__data-form").text('');
    });
       
  });
    function showDate(date) {
	//alert('The date chosen is ' + date);
    console.log(date);
}
});


