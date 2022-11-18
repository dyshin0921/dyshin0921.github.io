$(function(){
    $('.loca_book').on('click',function(){
        $('.sub_loca_book').toggle();
        $('.sub_location').hide();
        $('.sub_loca_ko').hide();
    })
    $('.loca_novel').on('click',function(){
        $('.sub_location').toggle();
        $('.sub_loca_book').hide();
        $('.sub_loca_ko').hide();
    })
    $('.sub_loca_book li,.sub_location li').on('click',function(){
        $(this).css({'font-weight':'bold'});
        $(this).siblings().css({'font-weight':'normal'});
        $(this).parent().siblings().children().css({'font-weight':'normal'})
    })
    $('.recom_list img').on('mouseenter',function(){
        $(this).addClass('shadow');
        $(this).parent().siblings().children().removeClass('shadow');
        var img=$(this).parent().index();
        $('.recom_mainimg a').eq(img).show();
        $('.recom_mainimg a').eq(img).siblings().hide();
    })
    $('.cheap_list').bxSlider({
        maxSlides:5,
        slideWidth:230,
        pager:false,
    })
    
    $(window).on('scroll',function(){
        var $stop=$(window).scrollTop();
        var $cotentsTop=$('.sublist').position().top;
        if($stop>$cotentsTop){
            $('.quick').addClass('fix');
        }else{
            $('.quick').removeClass('fix');
        }
    })
})