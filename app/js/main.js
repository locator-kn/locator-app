$(document).ready(function () {

    var startheight = $('.start').height();
    var menu = $('.menu-wrapper')

    fixedMenu();

    $(document).scroll(function () {
        fixedMenu();
    });

    $(window).resize(function () {
        var startheight = $('.start').height();
        fixedMenu();
    });

    function fixedMenu() {
        if ($(document).scrollTop() >= startheight) {
            menu.addClass('fixed');
        } else {
            menu.removeClass('fixed');
        }
    }
});