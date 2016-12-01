$(function() {
    'use strict';
        $.ajax({
            type: "GET",
            url: "http://504080.com/api/v1/directories/enquiry-types",
            dataType: "json",
            success: function (data) {
                var html,
                    content;
                console.log("data.data",data.data);
                html = $('#tmpl').html();
                content = tmpl(html, data);
                $('.input__select').append(content);
                $(".select__main").change(function() {
                    console.log($(".select__main option:selected").text().toString());
                    var place=$(".select__main option:selected").text().toString();
                    console.log(place);
                    if(~place.indexOf("Password")){
                        console.log("pass find");
                        $(".input__select").append('<div class="input_new"><input placeholder='+place+' type="password" name='+place+' class="input__name" ></div>');
                        
                    } 
                    else{
                       
                    $(".input__select").append('<div class="input_new"><input placeholder='+place+' type="text" name='+place+' class="input__name" ></div>');
                    }
                });
                
               
                /****Submit***/
                
                $(".submit").click(function(){
                    var p,r;
                    var str_name = $('.input__name').val();
                    var str_email = $('.input__email').val();
                    var str_subject = $('.input__subject').val();
                    var str_description = $('.input__description').val();
                    str_name = jQuery.trim(str_name);
                    str_email = jQuery.trim(str_email);
                    str_subject = jQuery.trim(str_subject);
                    str_description = jQuery.trim(str_description);
                    $(".errors").html('<p></p>');
                    function strLength (r) {
                        var errorLen;
                        r=errorLen;
                        switch(0) {
                            case str_name.length:return errorLen=1;
                            case str_email.length:return errorLen=1;               
                            case str_subject.length:return  errorLen=1; 
                            case str_description.length:return errorLen=1;
                        }
                        
                   }
                
                    if(strLength(r)==1) {
                        $('.errors').html('<p>Не заполненны обязательные поля</p>');

                       //$(".errors-input").append('  Не заполненны обязательные поля');
                    }
                
                    if(str_description.length>1000) {
                         $('.errors').html('<p>Количество знаков >1000</p>');
                        //$(".errors-input").append('  Количество знаков >1000');
                        return false;
                    }
                
                ///EMAIL
                    var strEmail= /^\w+@\w+\.\w{2,4}$/i;
                    if (!strEmail.test(str_email)){
                         $('.errors').html('<p>email not correct</p>');
                        //$(".errors-input").append('  Введен некорректный email');
                    }

                    
                });
     
            }
            
        });
  
});
    
    
