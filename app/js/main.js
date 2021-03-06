$(document).ready(function () {


    var IS_MOBILE_SAFARI_7 = !!navigator.userAgent.match(/i(Pad|Phone|Pod).+(Version\/7\.\d+ Mobile)/i);
    if (IS_MOBILE_SAFARI_7) {
        $('.start').addClass('manualheight');
    }


    var profiles = [
        "<div class=\"member col-sm-6 col-md-4\"> <img class=\"img-responsive\" src=\"img/team/jo.jpg\" alt=\"Jo Wickert\"><div class=\"overlay\"><h2>Prof. Jo Wickert<br> Kommumikationsdesigner </h2><span class=\"desc\">" +
        "Pendelt zwischen Berlin, Meersburg und Konstanz</span> </div></div>",

        "<div class=\"member col-sm-6 col-md-4\"> <img class=\"img-responsive\" src=\"img/team/boger.jpg\" alt=\"Marko Boger\"><div class=\"overlay\"><h2>Prof. Dr. Marko Boger<br>  Software engineer </h2><span class=\"desc\">" +
        "K&uuml;mmert sich um Studenten, seine Kinder und segelt</span> </div></div>",

        "<div class=\"member col-sm-6 col-md-4\"> <img class=\"img-responsive\" src=\"img/team/lukas.jpg\" alt=\"Lukas L&ouml;gler\"><div class=\"overlay\"><h2>Lukas L&ouml;gler (28), <br> Kommumikationsdesigner </h2><span class=\"desc\">" +
        "Will die ganze Welt sehen und daf&uuml;r so wenig wie m&ouml;glich bezahlen. Notfalls schl&auml;ft er am Stra&szlig;enrand. K&ouml;nnte sich durch jedes Land futtern und hat keine Scheu Grenzen auszuloten.</span> </div></div>",

        "<div class=\"member col-sm-6 col-md-4\"><img class=\"img-responsive\" src=\"img/team/stephan.jpg\" alt=\"Stephan Lawson\"><div class=\"overlay\"><h2>Stephan Lawson (22), Kommunikationsdesigner</h2><span class=\"desc\">" +
        "Reist am liebsten in andere St&auml;dte, um mit Gleichgesinnten &uuml;ber Mauern zu h&uuml;pfen. Eigentlich nimmt er sich auch immer vor im Urlaub zu arbeiten, denn da sollte man ja eigentlich Zeit haben. Klappen tut es aber nie. </span></div></div>",

        "<div class=\"member col-sm-6 col-md-4\"><img class=\"img-responsive\" src=\"img/team/anna.jpg\" alt=\"Anna Klokow\"><div class=\"overlay\"><h2>Anna Klokow (23), <br> Kommunikationsdesignerin</h2><span class=\"desc\">" +
        "Macht am liebsten St&auml;dtetrips. Wurde schon am ersten Tag bei ihrem Urlaub in Rom um f&uuml;nfhundert Euro erleichtert. Shoppen fiel leider aus, der Urlaub war aber trotzdem sch&ouml;n.</span></div></div>",

        "<div class=\"member col-sm-6 col-md-4\"><img class=\"img-responsive\" src=\"img/team/julian.jpg\" alt=\"Julian Pellduat\"><div class=\"overlay\"><h2>Julian Pellduat (25),<br> Kommunikationsdesigner</h2><span class=\"desc\">" +
        "Hat f&uuml;r den Sommerurlaub kein Geld, da er viel lieber im Winter in die Berge f&auml;hrt um Snowboard zu fahren. </span></div></div>",

        "<div class=\"member col-sm-6 col-md-4\"><img class=\"img-responsive\" src=\"img/team/benedikt.jpg\" alt=\"Benedikt Schnurr\"><div class=\"overlay\"><h2>Benedikt Schnurr (24), <br> Kommunikationsdesigner</h2><span class=\"desc\">" +
        "Am liebsten bereist er St&auml;dte. Die sch&ouml;nsten sind mit viel Wasser drum herum. So z&auml;hlen Venedig, Hamburg, Amsterdam und nat&uuml;rlich Konstanz zu seinen absoluten Favoriten.</span></div></div>",

        "<div class=\"member col-sm-6 col-md-4\"><img class=\"img-responsive\" src=\"img/team/julien.jpg\" alt=\"Julien Kuny\"><div class=\"overlay\"><h2>Julien Kuny (22), <br> Kommunikationsdesigner</h2><span class=\"desc\">" +
        "Ist von der eigenen Hausparty abgehauen, um mit dem bestem Freund ans italienische Mittelmeer zu fahren. Neue St&auml;dte und Orte, besonders die am Wasser gelegenen ziehen ihn an, sei es London, Amsterdam, Hamburg oder Konstanz.</span></div></div>",

        "<div class=\"member col-sm-6 col-md-4\"><img class=\"img-responsive\" src=\"img/team/pascal.jpg\" alt=\"Pascal R&uuml;ttenauer\"><div class=\"overlay\"><h2>Pascal \"Ayin\" R&uuml;ttenauer (23), Kommunikationsdesigner</h2><span class=\"desc\">" +
        "Entspricht voll dem Cliche, dass alle Asiaten Kung Fu k&ouml;nnen. Hat Konstanz erst lieben gelernt als er von einem Jahr Shanghai zur&uuml;ckkam. W&auml;re am liebsten mehr in Hong Kong oder auf Reisen. In der Zwischenzeit &uuml;bt er flei&szlig;ig weiter sein Kame-Hame-Ha... bisher vergeblich.</span></div></div>",

        "<div class=\"member col-sm-6 col-md-4\"><img class=\"img-responsive\" src=\"img/team/timotheus.jpg\" alt=\"Timotheus Ruprecht\"><div class=\"overlay\"><h2>Timotheus Ruprecht (26),<br> Software engineer</h2><span class=\"desc\">" +
        "Versucht jedes Jahr ein neues Land zu erkunden. Das n&auml;chste Ziel ist Australien. In Deutschland reist er am liebsten mit dem Fernbus nach M&uuml;nchen.</span></div></div>",

        "<div class=\"member col-sm-6 col-md-4\"><img class=\"img-responsive\" src=\"img/team/timo.jpg\" alt=\"Timo Weiss\"><div class=\"overlay\"><h2>Timo Weiss (25),<br> Software engineer</h2><span class=\"desc\">" +
        "War schon in vielen deutschen St&auml;dten, ohne etwas von ihnen zu sehen. Bevorzugt Sommer &uuml;ber Winter, Wasser &uuml;ber Schnee.</span></div></div>",

        "<div class=\"member col-sm-6 col-md-4\"><img class=\"img-responsive\" src=\"img/team/nikolai.jpg\" alt=\"Nicolai L&ouml;ffler\"><div class=\"overlay\"><h2>Nicolai L&ouml;ffler (23),<br> Software engineer</h2><span class=\"desc\">" +
        "Er reist regelm&auml;&szlig;ig mit Mitfahrgelegenheiten durch Deutschland und f&uuml;hlt sich eigentlich &uuml;berall zu Hause. Eine gem&uuml;tliche Couch zieht er dabei stets einem Hotel vor. Seine Lieblingsreiseziele sind Hamburg, Berlin und Freiburg.</span></div></div>",

        "<div class=\"member col-sm-6 col-md-4\"><img class=\"img-responsive\" src=\"img/team/steffen.jpg\" alt=\"Steffen Gorenflo\"><div class=\"overlay\"><h2>Steffen Gorrenflo (28),<br> Software engineer</h2><span class=\"desc\">" +
        "Geht gern dahin wo es warm ist. Deshalb ging es auch schon nach Mittel- und S&uuml;damerika. Aber da es im Sommer in Konstanz auch warm ist, bleibt er auch am liebsten am sch&ouml;nen Bodensee und geht segeln.</span></div></div>",

        "<div class=\"member col-sm-6 col-md-4\"><img class=\"img-responsive\" src=\"img/team/michael.jpg\" alt=\"Michael Knoch\"><div class=\"overlay\"><h2>Michael Knoch (23),<br> Software engineer</h2><span class=\"desc\">" +
        "Bereist am liebsten Gro&szlig;st&auml;dte, um Musik und Kultur zu erleben. Neben seiner gro&szlig;en Liebe zu Berlin gef&auml;llt ihm London, Paris und nat&uuml;rlich die wundersch&ouml;ne Weltmetropole Konstanz.</span></div></div>",

        "<div class=\"member col-sm-6 col-md-4\"><img class=\"img-responsive\" src=\"img/team/dennis.jpg\" alt=\"Dennis Moosmann\"><div class=\"overlay\"><h2>Dennis Moosmann (26),<br> Software engineer</h2><span class=\"desc\">" +
        "Wenn er w&auml;hrend der Urlaubszeit mal nicht arbeiten muss, zieht es ihn meist in eine Metropole, in der er zuvor noch nicht war. Am besten gefiel es ihm in Hamburg,wo sowohl kulturelle als auch kulinarische Highlights gibt.</span></div></div>"
    ];

    var startheight = $('.start').height();
    var menu = $('.menu-wrapper');

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    var shuffledProfiles = shuffle(profiles);

    $("div.profiles")
        .html(shuffledProfiles.join(""));

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

// registration

    var errorBorder = {border: "1.5px solid #FF0000"};
    var normalBorder = {border: "1px solid #e6e6e6"};




// feedback
    $(".feedback-submit").click(function (event) {
        event.preventDefault();

        var $form = $("#forms");

        var name = $form.find('input[name="name"]');
        var mail = $form.find('input[name="email"]');
        var subject = $form.find('input[name="subject"]');
        var message = $form.find('textarea[name="message"]');

        name.css(normalBorder);
        mail.css(normalBorder);
        message.css(normalBorder);


        if (!name.val()) {
            name.css(errorBorder);
            return;
        } else if (!mail.val() || !(/[^\s@]+@[^\s@]+\.[^\s@]+/).test(mail.val())) {
            mail.css(errorBorder);
            return;
        } else if (!message.val()) {
            message.css(errorBorder);
            return;
        } else if (!subject.val()) {
            // allow empty subject
        }

        var feedback = {
            name: name.val(),
            mail: mail.val(),
            subject: subject.val() || 'empty subject',
            message: message.val()
        };

        $.ajax({
            type: 'POST',
            url: '/mail/feedback',
            contentType: 'application/json',
            data: JSON.stringify(feedback),
            success: feedbackSuccess,
            error: feedbacknError,
            processData: false
        });
    });

    function feedbackSuccess() {
        $(".success-feedback").fadeIn("thanks");
        var $form = $("#forms");
        $form.find('input[name="name"]').val('');
        mail = $form.find('input[name="email"]').val('');
        subject = $form.find('input[name="subject"]').val('');
        message = $form.find('textarea[name="message"]').val('');
        setTimeout(function () {
            $(".success-feedback").fadeOut("thanks");
        }, 3000)
    }

    function feedbacknError(resp) {
        $(".error-feedback").fadeIn("generic");
        setTimeout(function () {
            $(".error-feedback").fadeOut("thanks");
        }, 3000)

    }


})
;
