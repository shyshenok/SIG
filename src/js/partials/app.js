/**
 * Created by shyshenok on 19.09.17.
 */
'use strict';

var languages = [
    {
        name: "English",
        image: "/image/eng.png"
    },
    {
        name: "Russian",
        image: "/image/ru.png"
    },
    {
        name: "Ukrainian",
        image: "/image/uk.png"
    }
];

$(document).ready(function() {

    addSelectLanguage();

    $(window).resize(setBackground);
    setBackground();

    $('.parallax-window-header').parallax({
        imageSrc: "/image/12.jpg"
    });


    $("[href='#products']").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function(){

                window.location.hash = hash;
            });
        }
    });

    $("#toggle").click(function() {
        var elem = $("#toggle").text();
        if (elem === "Read More...") {
            //Stuff to do when btn is in the read more state
            $("#toggle").text("Read Less");
            $("#text").slideDown();
        } else {
            //Stuff to do when btn is in the read less state
            $("#toggle").text("Read More...");
            $("#text").slideUp();
        }
    });

    $('.wrapper-product-category').find("#table").click(function () {
        $(".product-block").removeClass('product-block').addClass("product-table");
        $(".wrapper-square").removeClass('wrapper-square').addClass("wrapper-line");
    });

    $('.wrapper-product-category').find("#block").click(function () {
        $(".product-table").removeClass('product-table').addClass("product-block");
        $(".wrapper-line").removeClass('wrapper-line').addClass("wrapper-square");

    });

});

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

