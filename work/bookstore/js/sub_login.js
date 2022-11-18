$(function(){
    $('.tab_title ul li').on('click',function(){
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
        var num=$(this).index();
        $('.tab_contents ul').eq(num).show();
        $('.tab_contents ul').eq(num).siblings().hide();
    })
})