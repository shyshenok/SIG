/**
 * Created by shyshenok on 04.12.2017.
 */

$(document).ready(function() {

    var a = 0;
    $(window).scroll(function () {

        var counters = $('#counter');

        if(counters.length > 0) {
            var oTop = counters.offset().top - window.innerHeight;


            if (a === 0 && $(window).scrollTop() > oTop) {
                $('.counter').each(function () {
                    var parentEl = $(this);
                    parentEl.append("<path class='track' d='M723 314L543 625.77 183 625.77 3 314 183 2.23 543 2.23 723 314z'></path>" +
                        "<path class='fill' d='M723 314L543 625.77 183 625.77 3 314 183 2.23 543 2.23 723 314z'></path>");
                    parentEl.html(parentEl.html());

                    animateCounterHexagon();
                });

                a = 1;
            }
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