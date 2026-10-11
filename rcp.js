$(".rcp_button_area li").click(function () {
    var i = $(this).index();

    $(".rcp_tab").css("opacity", "0");
    $(".rcp_tab").eq(i).css("opacity", "1");


    $(".rcp_button_area li").css("background-color", "rgba(0,0,0,0.1)")
        .css("color", "black");
    $(this).css("background-color", "yellow")
        .css("color", "black");
})
