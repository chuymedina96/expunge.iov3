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
    $("#fancy, #btn").fadeOut("slow", function() {
        $("#bank, #btn-bk").fadeIn("slow")
    })
}), $("#btn-bk").click(function(a) {
    $("#bank, #btn-bk").fadeOut("slow", function() {
        $("#fancy, #btn").fadeIn("slow")
    })
}), $("#understand").click(function() {
    $("#btn-bk, #bank").fadeOut("slow", function() {
        $("#btn-back").fadeIn("slow"), $("#container").fadeIn("slow")
    })
}), $("#btn-back").click(function() {
    $("#container, #btn-back").fadeOut("slow", function() {
        $("#bank, #btn-bk").fadeIn("slow")
    })
}), $("#sixteen").click(function() {
    $("#container, #btn-back").fadeOut("slow", function() {
        $("#results, #btn-backItUp").fadeIn("slow")
    })
}), $("#btn-backItUp").click(function() {
    $("#results, #btn-backItUp").fadeOut("slow", function() {
        $("#container, #btn-back").fadeIn("slow")
    })
});

