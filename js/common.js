
// gnb 스크롤 시 상단 고정
$(function(){
    $(window).scroll(function(){
        var docuTop = $(document).scrollTop();
        if(docuTop > 100){
            $('#gnb').css({'position':'fixed','top':'0'})
        } else{
            $('#gnb').css({'position':'absolute','top':'100px'})
        }
    })
});



// gnb li에 hover 시 gnb 길이 늘어나 sub 메뉴 보이기
$(function(){
    $("#gnb>.inner>ul>li").hover(function () {
        $("#gnb").stop().animate({ height: 240 });
        $('.sub>ul').css({'border-top':'1px dashed #685446'})
    }, function () {
        $("#gnb").stop().animate({ height: 80 });
    });
});


// top 버튼 fadeIn/fadeOut
$(function(){
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height > 150) {
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        }
    });
    $('#top-btn').click(function () {
        $("html, body").animate({
            scrollTop: 0
        },
        500);
        return false;
    });
});

