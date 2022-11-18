$(function(){
    $('.left a').on('mouseenter',function(){
        $(this).css({background: 'url(../image/left2.png)'})
    })
    $('.left a').on('mouseleave',function(){
        $(this).css({background: 'url(../image/left.png)'})
    })
    $('.right a').on('mouseenter',function(){
        $(this).css({background: 'url(../image/right2.png)'})
    })
    $('.right a').on('mouseleave',function(){
        $(this).css({background: 'url(../image/right.png)'})
    })
    /*for(var i=0;i<=7;i++){
        $('.book').eq(i).css({left:i*202});
        $('.new_pro .book').eq(i).css({left:i*202});
        $('.rec_pro .book').eq(i).css({left:i*202});
    }
    $('.best_pro .right').on('click',function(){
        for(var i=0;i<=7;i++){
            $('.book_slider .book').eq(i).animate({left:'-=202'},1000,function(){
                var leftpos=parseInt($(this).css('left'));
                if(leftpos<=-808){
                    $(this).css({left:808})
                }
            })
        }//for
        return false;
    })*/
    $('.slider').bxSlider({
        controls:false,
        auto:true,
    })
    $('.book_slider>div').bxSlider({
        maxSlides:4,
        slideWidth:223,
        pager:false,
        moveSlides:1
    });
    
    $(window).on('scroll',function(){
        var $stop=$(window).scrollTop();
        var $Top=$('#best').position().top;
        if($stop>$Top){
            $('.quick').addClass('fix');
        }else{
            $('.quick').removeClass('fix');
        }
    })
    /*알림 팝업창*/
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