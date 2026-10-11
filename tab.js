$(".button_area li").click(function () {
    var i = $(this).index();

    $(".tab").css("opacity", "0")
    $(".tab").css("display", "none");
    $(".tab").eq(i).css("opacity", "1")
    $(".tab").eq(i).css("display", "block");


    $(".button_area li").css("border-bottom", "0px solid black").css("font-weight", "200")
        .css("color", "black");
    $(this).css("border-bottom", "2px solid black").css("font-weight", "600")
        .css("color", "black");
})
