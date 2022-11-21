$(function(){
    $('.slide').slick({
        autoplay:true,
        autoplaySpeed:2000,
        dots:true 
    })
    $('.btnAllMenu').on('click',function(){
        $('.allMenu').animate({left:0});
        $('.allMenuMask').css({width:'100%',height:'100%'});
    })
    $('.allMenuClose').on('click',function(){
        $('.allMenu').animate({left:'-100%'});
        $('.allMenuMask').css({width:'0%',height:'0%'});
    })
    $('.main>li').on('click',function(){
        $(this).toggleClass('open');
        $(this).siblings().removeClass('open');
        var state=$(this).hasClass('open')
        if(state){
            $(this).children('.sub').stop().slideDown();
            $(this).siblings().children('.sub').stop().slideUp();
        }else{
             $(this).children('.sub').stop().slideUp();
        }
        
    })
    $('.closebtn').on('click',function(){
        $('#popwin').hide(); 
    })
    $('#pop_chk').on('click',function(){
        $.cookie('sdypop', 'hidepop123', { expires: 1, path: '/' });
    })
    if($.cookie('sdypop')=='hidepop123'){
        $('#popwin').hide();
    }
})
