$(function() {
	$('#popupDatepicker').datepick();
	$('#inlineDatepicker').datepick({onSelect: showDate});
    var daTa = showDate;
    console.log ("data!!",daTa);
    $(".btn__form").click(function () {
      var time, name, tel__number, comment,datta;
      name = $('.input__name').val();
      tel__number = $('.input_telNumber').val();
      comment = $('.online__txtarea').val();
    datta=$('.datepick-selected').attr('title');
     //daTa = date;
      console.log (name);
      console.log (tel__number);
      console.log (comment);
      console.log (datta);
  });
    function showDate(date) {
	//alert('The date chosen is ' + date);
    console.log(date);
}
});


