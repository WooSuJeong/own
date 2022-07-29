$(function(){
    $('#subscribe ul li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('.active').css({'background-color':'#685546','color':'#f0e6da'}).siblings().css({'background-color':'#f0e6da','color':'#685546'})
    });
});

$(function(){
    $('#subscribe .send').click(function(){
        $(this).addClass('active');
        $('.active').css({'background-color':'#685546','color':'#f0e6da'});
    });
});





$(function () {
    $('.title').click(function () {
        $(this).next('.text_info').slideToggle();
    });

    $('.title').click(function () {
        $(this).children(".plus").toggleClass('turn');
    });

    $('.subs .subs-list:first .text_info').css('display', 'block');

    if ($('.text_info') === css('display', 'block')) {
        $('.subs-list').addClass('turn');
    } else {
        $('.subs-list').removeClass('turn');
    }

});
