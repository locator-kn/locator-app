$(document).ready(function () {
    window.setTimeout(function () {
        $('.start .teaser-left').addClass('animated');
        animate();
    }, 1000);

    $('.mainnav li a').click(function () {
        $('.mainnav').removeClass('in');
    });

    $('a[href*=#]:not(.carousel-control)').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body')
                    .animate({
                        scrollTop: targetOffset
                    }, 1000);
                return false;
            }
        }
    });
});


$(window).scroll(function () {
    if ($(document).scrollTop() > 400) {
        $('.menu').addClass('small');
    } else {
        $('.menu').removeClass('small');
    }
});


function animate() {
    $('.back1').addClass('zeroopac');
    $('.back2').addClass('show');
    $('.start .teaser').addClass('showUp');
}