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
    var temp = function (event) {
        console.log(event);
    }
    for(var i = 0; i < languages.length; i++) {
        $(".dropdown-menu").append("<p id="+'lang-id'+ i + " class='dropdown-item lang-icon-item'>" +
                                    languages[i].name + "<img class='lang-icon' src=" +
                                    languages[i].image + " alt='English'></p>");
        console.log($("lang-id"+i));
        $("lang-id"+i).click(temp);
    }

}

