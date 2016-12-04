/*global $ */
/*jslint browser: true*/
/*global alert: false, console: false*/
/*jshint boss:true */
$(function () {
    'use strict';
    $.ajax({
        type: "GET",
        url: "http://504080.com/api/v1/directories/enquiry-types",
        dataType: "json",
        success: function (data) {
            var html,
                content;
            console.log("data.data", data.data);
            html = $('#tmpl').html();
            content = tmpl(html, data);
            $('.input__select').append(content);
        }
    });
    console.log("curSel");
                
                
    
    $(".log__in").click(function () {
        
        $(".modal__window").css({'display': 'block'});
        var params = {
                changedEl: ".input__select select",
                scrollArrows: false
            };
        cuSel(params);
    
       
                
        $(".select__main").change(function () {
            console.log("place");
            var place;
            console.log($(".select__main #idSelect").val());
            place = $(".select__main #idSelect").val();
            if (~place.indexOf("Password")) {
                console.log("pass find");
                $(".input__select").append('<div class="input_new"><input placeholder="' + place + '" type="password" name="' + place + '" class="input__input" autocomplete="on" ></div>');
                        
            } else {
                       
                $(".input__select").append('<div class="input_new"><input placeholder="' + place + '" type="text" name="' + place + '" class="input__input" autocomplete="on" ></div>');
            }
        });
                
                
        /*Закрываем окно если клик вне окна
        $(document).mouseup(function (e) {
            var modal = $(".modal__window");
            if (modal.has(e.target).length === 0) {
                $("div.input_new").remove();
                $(".modal__window").hide();
            }
        });*/
               
                /****Submit***/
                
        $(".submit").click(function () {
            var p, r,
                str_name = $('.input__name').val(),
                str_email = $('.input__email').val(),
                str_subject = $('.input__subject').val(),
                str_description = $('.input__description').val();
            str_name = $.trim(str_name);
            str_email = $.trim(str_email);
            str_subject = $.trim(str_subject);
            str_description = $.trim(str_description);
            $(".errors").html('<p></p>');
            function strLength(r) {
                var errorLen;
                r = errorLen;
                switch (0) {
                case str_name.length:
                    return 1;
                case str_email.length:
                    return 1;       
                case str_subject.length:
                    return 1;
                case str_description.length:
                    return 1;
                }
                        
            }
                
            if (strLength(r) === 1) {
                        
                $('.errors').html('<p>Не заполненны обязательные поля</p>');

            } else {
                if (str_description.length > 1000) {
                    console.log("polya OK!");
                    $('.errors').html('<p>Количество знаков >1000</p>');
                    return false;
                } else {
                    console.log("<1000 OK!");
                    var strEmail = /^\w+@\w+\.\w{2,10}$/i;
                    if (!strEmail.test(str_email)) {
                        $('.errors').html('<p>email not correct</p>');
                    } else {
                        var mesForm   = $('#form-id').serialize();
                        $.ajax({
                            type: 'POST',
                            url: 'http://504080.com/api/v1/support',
                            data: mesForm,
                            success: function (data) {
                                alert("данные отправлены!");
                            },
                            error:  function (xhr, str) {
	                            alert('Возникла ошибка: ' + xhr.responseCode);
                            }
                        });
                        $('.input__name').val('');
                        $('.input__email').val('');
                        $('.input__subject').val('');
                        $('.input__description').val('');
                        //alert("данные отправлены!");
                        $(".modal__window").hide();
                        $("div.input_new").remove();

                    }
  
                }
            }

        });

    });
   
});


