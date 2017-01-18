/*global $ */
$(function () {
    'use strict';
    $.fn.addImg = function () {
        var $teg = this;
        var i, pause = 0, l;
        l = $teg.length;
        for (i = 0; i < l; i++) {
        pause += 1000;
            $teg.eq(i).delay(pause).fadeIn(1000);
        }
        
        return $teg;
    };
        
    $('.ct').addImg();

    
});