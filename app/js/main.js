$(document).ready(function () {

    var startheight = $('.start').height();
    var menu = $('.menu-wrapper');

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


    // Cache selectors
    var lastId,
        topMenu = $("#navigation"),
        topMenuHeight = 1,
    // All list items
        menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });

// Bind click handler to menu items
// so we can get a fancy scroll animation
    menuItems.click(function (e) {
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 800);
        e.preventDefault();
    });

// Bind to scroll
    $(window).scroll(function () {
        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight;
        // Get id of current scroll item
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
                .parent().removeClass("active")
                .end().filter("[href=#" + id + "]").parent().addClass("active");
        }
    });

});