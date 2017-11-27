/**
 * Created by shyshenok on 19.09.17.
 */
'use strict';

var languages = [
    {
        name: "English",
        image: "../image/eng.png"
    },
    {
        name: "Russian",
        image: "../image/ru.png"
    },
    {
        name: "Ukrainian",
        image: "../image/uk.png"
    }
];

$(document).ready(function() {

    $('.svg-test-1').svgTimer();
    $('.svg-test-2').svgTimer({
        time: 120,
        interval: 0.2


    });
    $('.svg-test-3').svgTimer({
        time: 60,
        interval: 60


    });
    $('.svg-test-4').svgTimer({
        time: 10,
        interval: 10


    });

    var height = $(window).height() - $(".wrapper-navigation").height();
    var width = $(window).width();

    setBackground(width, height);
    addSelectLanguage();
});

function setBackground(width, height) {
    if(width >= 992) {
        $('.jumbotron').css({
            'height' : height,
            'width' : width
        });
    }
}

function addSelectLanguage() {

    var selectedElement;

    $('.dropdown-menu').on('click', 'p', function(event) {
        if (selectedElement !== event.target.id) {
            $('.top-lang-icon').attr("src", $(event.target).find("img").attr("src"));
        }
       selectedElement =  event.target.id;

    });

    for(var i = 0; i < languages.length; i++) {
        $(".dropdown-menu").append("<p id="+'lang-id'+ i + " class='dropdown-item lang-icon-item'>" +
                                    languages[i].name + "<img class='lang-icon' src=" +
                                    languages[i].image + " alt='English'></p>");
    }

}

