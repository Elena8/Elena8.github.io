/*global $ */
/*jslint browser: true*/
/*global alert: false*/

$(function () {
    'use strict';
    
    function fileSelect(e) {
        var files = e.target.files,
            fileRead,
            file,
            data;
        file = files[0];
        $(".errors").html('<p id="errors__img"></p>');
        
        if (/image.*/.test(file.type)) {
            data = [file.name, file.type, file.size];
            $("#errors__img").html('<p></p>');
            
            if (file.size < 4000000) {
                $("#errors__img").html('<p></p>');
                fileRead = new FileReader();
                fileRead.readAsDataURL(file);
                fileRead.onload = function (file, data) {
                    return function (e) {
                        var img = new Image();
                        img.src = e.target.result;
                        if (img.complete) {
                            if (img.height > 300 || img.width > 300) {
                                $("#errors__img").html('<p></p>');
                                $(".img__upload").append('<span class="img__wrap"><img class="thumb" src="' + e.target.result + '"></span>');
                                $("#add-id").css({'display': 'none'});
                        
                            } else {
                                $("#errors__img").html('<p>image little</p>');
                        
                            }
                        }
                         
                    };
                }(file, data);
                 
            } else {
                $("#errors__img").html('<p>image >5MB</p>');
                    
            }
        } else {
            $("#errors__img").html('<p>Not image file</p>');
        }
        
    }
    
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        onload = function () {
            $(".input__file").get(0).addEventListener('change' , fileSelect , false);
      
        };
  
    } else {
        alert('К сожалению ваш браузер не поддерживает file API');
    }
});