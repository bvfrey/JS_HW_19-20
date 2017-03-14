$(function () {

    $('.social_icon').hover(function () {
        var src_tmp = $(this).attr('src');
        var new_src = src_tmp.replace("1.png", "2.png");
        $(this).attr('src', new_src)
    }, function() {
        var src_tmp = $(this).attr('src');
        var new_src = src_tmp.replace("2.png", "1.png");
        $(this).attr('src', new_src)
    });

    $('.car').click(function () {
        var tmp = $(this).attr('id').slice(-1);
        var car_cur = "img/factory-" + tmp + ".jpg"
        $("#car_cur").attr('src', car_cur);

        $(".car").attr('src', "img/caroussel-not-active.png")
        $(this).attr('src', "img/caroussel-active.png")
    });

});
