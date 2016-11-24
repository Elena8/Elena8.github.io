//$(function () {
$(window).load(function(){
 'use strict';
  function callback() {
  var input = document.querySelector('#query');
  var btn = document.querySelector('.content3__search');
  var grid = $('.grid');
  var API_KEY = '2630817-b95f50d1e0fc2b68ed1f4d734';
  var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+input.value+"&image_type=photo";
  $.getJSON(URL, function (data) {
	  console.log(data);
    $.each(data.hits, function (i, hit) {
	    
        if(data.hits.length>0) {
                    
                    $(".grid").remove();
                    console.log(data.hits.length);
                }
        console.log(data);$('.content3__images').css('display','none');
        if(i==4 || i==5){
      $('<img>').attr('src', hit.webformatURL).appendTo('.grid').wrap('<div class="grid-item-w2">');}
        else{
      $('<img>').attr('src', hit.webformatURL).appendTo('.grid').wrap('<div class="grid-item">');}
       
      if (i === 6) {
        return false;
      }
    });
  });
      
    callback();  
      console.log("masonry");
     var $grid = $('.grid').imagesLoaded( function() {
        $grid.masonry({
            
            // options
  itemSelector: '.grid-item',
  columnWidth: '.grid-item',
        percentPosition: true});
    });
  };
    
    $('.content3__search').on('click', callback);
    

    $('#query').keypress(function (e) {
        if (e.which === 13) {
            callback();
            
        }
    });
    
    

	   
    
    $('.flexslider').flexslider({
    animation: "slide"
  });
    
    
    
    
  });
