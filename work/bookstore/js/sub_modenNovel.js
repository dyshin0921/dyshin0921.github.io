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
    $('.loca_ko').on('click',function(){
        $('.sub_loca_ko').toggle();
        $('.sub_loca_book').hide();
        $('.sub_location').hide();
    })
    $('.sub_loca_book a,.sub_location a,.sub_loca_ko a').on('click',function(){
        $(this).css({'font-weight':'bold'});
        $(this).parent().siblings().children('a').css({'font-weight':'normal'})
    })
    $(window).on('scroll',function(){
        var $stop=$(window).scrollTop();
        var $cotentsTop=$('.pro_img').position().top;
        if($stop>$cotentsTop){
            $('.quick').addClass('fix');
        }else{
            $('.quick').removeClass('fix');
        }
    })
    $('.tab ul li').on('click',function(e){
        e.preventDefault();
        var index=$(this).index();
        console.log(index)
        var targetpos='#tab'+index
        var $top=$(targetpos).position().top;
        console.log($top);
        $('html,body').animate({scrollTop:$top})
    })
    $('.button .shopping_list').on('click',function(){
        alert('상품을 장바구니에 담았습니다.')
    })
    $('.button .interest').on('click',function(){
        alert('로그인이 필요합니다. 로그인 하시겠습니까?')
    })
    $('.otherbooks').bxSlider({
        maxSlides:6,
        slideWidth:190,
        pager:false,
    })
    $('.bx-wrapper').on('mouseenter',function(){
        $('.bx-prev,.bx-next').show();
    })
    $('.bx-wrapper').on('mouseleave',function(){
        $('.bx-prev,.bx-next').hide();
    })
    
})