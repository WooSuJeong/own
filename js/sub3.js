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



$(function(){
    $('.subs-list').click(function(){
        $(this).children('.text_info').slideToggle();
    });
    
    $('.subs-list, .subs-list li').click(function(){
        $(this).toggleClass('turn');
    });
    
    $('.text_info').css('display','none');
    
    if($('.text_info') === css('display','block')){
        $('.subs-list').addClass('turn');
    } else{
        $('.subs-list').removeClass('turn');
    }

});

