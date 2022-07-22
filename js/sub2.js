
$(function(){
    $(".ico").click(function () {
        var favoriteImage = $(this).children("a").children("img");
        favoriteImage.attr("src", function (index, attr) {
            if (attr.match('line')) {
                return attr.replace("line", "fill");
            } else {
                return attr.replace("fill", "line");
            }
        });
    });
});
