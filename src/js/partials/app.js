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

    addSelectLanguage();

    $(window).resize(setBackground);
    setBackground();

    $('.parallax-window-header').parallax({
        imageSrc: "../../image/12.jpg"
    });

    var a = 0;
    $(window).scroll(function() {

        var oTop = $('#counter').offset().top - window.innerHeight;

        if (a === 0 && $(window).scrollTop() > oTop) {
            $('.counter').each(function (){
                var parentEl = $(this);
                parentEl.append("<path class='track' d='M723 314L543 625.77 183 625.77 3 314 183 2.23 543 2.23 723 314z'></path>" +
                    "<path class='fill' d='M723 314L543 625.77 183 625.77 3 314 183 2.23 543 2.23 723 314z'></path>" );
                parentEl.html(parentEl.html());

                animateCounterHexagon();
            });

            a = 1;
        }

    });

});

function animateCounterHexagon() {
    $('.counter-value').each(function() {

        var $this = $(this),
            countTo = $this.attr('data-count'),
            suffix = $this.attr('suffix');

        $({countNum: 0}).animate( // start value
            {
                countNum: countTo // end value
            },
            {
                duration: 3000,
                easing: 'swing',
                queue: false,
                step: function(current) {

                    $('.fill').css({
                        strokeDashoffset: 2160 * (1 - (current / countTo)), // 2160 calculate dynamically, .getTotalLength()
                        transition: "stroke-dashoffset 200ms linear"

                    });
                    $this.text(Math.floor(this.countNum)+suffix);
                },
                complete: function() {
                    $('.fill').css({
                        strokeDashoffset:  '0'
                    });
                    $this.text(this.countNum+suffix);

                }

            });
    });
}

function setBackground() {
    var width = $(window).width();
    var height = $(window).height()- $(".wrapper-navigation").height();
    if(width >= 992) {
        $('.jumbotron').css({
            'height' : height,
            'width' : width
        });
    } else {
        $('.jumbotron').css({
            'height' : '100%',
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

