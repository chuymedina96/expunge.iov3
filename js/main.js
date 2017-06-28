! function(a) {
    "use strict";
    a(".page-scroll a").bind("click", function(b) {
        var c = a(this);
        a("html, body").stop().animate({
            scrollTop: a(c.attr("href")).offset().top - 50
        }, 1250, "easeInOutExpo"), b.preventDefault()
    }), a("body").scrollspy({
        target: ".navbar-fixed-top",
        offset: 51
    }), a(".navbar-collapse ul li a").click(function() {
        a(".navbar-toggle:visible").click()
    }), a("#mainNav").affix({
        offset: {
            top: 100
        }
    })
}(jQuery), 

$(document).ready(function() {
    $(".plusminus").parent().parent().click(function() {
        $(this).hasClass("collapsed") ? $(this).find("i").removeClass("fa-chevron-circle-right").addClass("fa-chevron-circle-down") : $(this).find("i").removeClass("fa-chevron-circle-down").addClass("fa-chevron-circle-right")
    })
}), $("#btn").click(function(a) {
    $("#fancy, #btn").fadeOut(1000, function() {
        $("#bank, #btn-bk").fadeIn(1000)
    })
}), $("#btn-bk").click(function(a) {
    $("#bank, #btn-bk").fadeOut(1000, function() {
        $("#fancy, #btn").fadeIn(1000)
    })
}), $("#understand").click(function() {
    $("#btn-bk, #bank").fadeOut(1000, function() {
        $("#btn-back").fadeIn(1000), $("#container").fadeIn(1000)
    })
}), $("#btn-back").click(function() {
    $("#container, #btn-back").fadeOut(1000, function() {
        $("#bank, #btn-bk").fadeIn(1000)
    })
}), $("#sixteen").click(function() {
    $("#container, #btn-back").fadeOut(1000, function() {
        $("#results, #btn-backItUp").fadeIn(1000)
    })
}), $("#btn-backItUp").click(function() {
    $("#results, #btn-backItUp").fadeOut(1000, function() {
        $("#container, #btn-back").fadeIn(1000)
    })
});

