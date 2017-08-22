jQuery(document).ready(function(){
    
     //scroll animation
  AOS.init({
    duration: 1500
//    disable: 'mobile'
  });
    
    $(".go_to").hide();
  if ($(window).scrollTop()<=$(document).height()-"999") $(".go_to").fadeIn("slow")
  $(window).scroll(function(){
  if ($(window).scrollTop()>=$(document).height()-"999") $(".go_to").fadeOut("slow")
  else $(".go_to").fadeIn("slow")
  });

     



    
});