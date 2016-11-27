
$(function() {
    'use strict';


 $(".add__btn").click(function() {
        $.ajax({
            /*/////////
            0db652546478e50858229ac61e3afc61da0deefa
            /////////*/
            type: "GET",
            headers: {"Authorization": "0db652546478e50858229ac61e3afc61da0deefa"},
            
            url: "http://504080.com/api/v1/services/categories",
            dataType: "json",
            //success: function (data) {
            statusCode: {
            200:function (data) {  console.log("ERROR NO!!");
                var html,
                    content;
                /*console.log("data.data",data.data);
                console.log("data.data.length",data.data.length);
                console.log("data.data.title",data.data.title);*/
                $(".column__center-wrap").remove();
                $(".wrapper__search").css({'display':'inline-block'});
                html = $('#tmpl').html();
                content = tmpl(html, data);
                $('.wrapper__search').append(content);
                
            },
            
            401: function(jqxhr, status, errorMsg) {
                console.log("Статус: " + status + " Ошибка:401 " + errorMsg);
                $(".column__center").append('<div  class="modalWindow"><div><a href="#" title="Закрыть" class="close">X</a><h2>ERROR!!!!</h2><p>Статус:  ' + status + '  Ошибка:401  '+ errorMsg+'</p></div></div>');
                
                $('.close').click(function(){
                    $(".modalWindow").remove();
                })
                
			},
            500: function(jqxhr, status, errorMsg) {
                console.log("Статус: " + status + " Ошибка:500 " + errorMsg);
                
                $(".column__center").append('<div  class="modalWindow"><div><a href="#" title="Закрыть" class="close">X</a><h2>ERROR!!!!</h2><p>Статус:  ' + status +'  Ошибка:500  '+ errorMsg+'</p></div></div>');
                
                $('.close').click(function(){
                    $(".modalWindow").remove();
                })
			}
            }
            
        });
    });
    

});
    
    
