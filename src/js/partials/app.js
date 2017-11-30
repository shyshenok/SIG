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

    var a = 0;
    $(window).scroll(function() {

        var oTop = $('#counter').offset().top - window.innerHeight;



        if (a === 0 && $(window).scrollTop() > oTop) {
            $('.counter').each(function (){
                var parentEl = $(this);
                parentEl.append("<path class='track' d='M723 314L543 625.77 183 625.77 3 314 183 2.23 543 2.23 723 314z'></path>" +
                    "<path class='fill' d='M723 314L543 625.77 183 625.77 3 314 183 2.23 543 2.23 723 314z'></path>" );
                parentEl.html(parentEl.html());
            });
            $('.counter-value').each(function() {

                var $this = $(this),
                    countTo = $this.attr('data-count'),
                    suffix = $this.attr('suffix');

                $({

                    countNum: $this.text()
                }).animate({
                        countNum: countTo
                    },
                    {
                        duration: 2000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.floor(this.countNum)+suffix);
                        },
                        complete: function() {
                            $this.text(this.countNum+suffix);
                        }

                    });
            });
            a = 1;
        }

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

