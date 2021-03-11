$(function() {
    $("#txt").val("Texto jquery");
    $(".email").val("Texto jquery email");

    // $("p:not(.destaque), li").css("color", "red");
    // $(".container > ul > li").css("color", "black");

    $(".destaque ~ p").addClass("destaque");
    $("li:first").css("color", "green");
    $("li:last").css("color", "green");
    $("li:first-child").css("color", "green");
    $("li:last-child").css("color", "green");
    $("p:lt(2)").css({
        "color": "orange",
        fontSize: "22px"
    });

    $("a[title]").css("color", "red");
    $("a:not([title])").hide();
    $("li:odd").css("backgroundColor", "gray");
    $("li:even").css("backgroundColor", "#ccc");

    $("p:contains(afo 6)").css("color", "orange")
    $("p:has(i)").css("color", "red");
    $("p:empty").text("paragrafo vazio");
    $("p:hidden").show();
});