$(function(){
    $(window).on('scroll',function(){
        var $stop=$(window).scrollTop();
        var $cotentsTop=$('.sublist').position().top;
        if($stop>$cotentsTop){
            $('.quick').addClass('fix');
        }else{
            $('.quick').removeClass('fix');
        }
    })
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
     $('.sub_loca_book li,.sub_location li,.sub_loca_ko li').on('click',function(){
        $(this).css({'font-weight':'bold'});
        $(this).siblings().css({'font-weight':'normal'});
        $(this).parent().siblings().children().css({'font-weight':'normal'})
    })
    $('.path li a').on('click',function(){
        $(this).css({'font-weight':'bold','color':'#46639f'})
        $(this).parent().siblings().children().css({'font-weight':'normal','color':'#000'})
    })
   var current=[1,1,1,1,1,1,1,1,1,1];
    $('.button_area div a:first-child').on('click',function(){
        var i=$(this).parents('.prd_list').index()-2;
        current[i]--;
        if(current[i]>0)
        $(this).siblings('span').text(current[i]);
        else{alert('1개 이상부터 구매할 수 있는 상품입니다.')}
        console.log(i)
        return false; //앵커 누르면 상단으로 올라가는거(# 페이지로 넘어가는) 없앰
    })
    $('.button_area div a:last-child').on('click',function(){
       var i=$(this).parents('.prd_list').index()-2;
        current[i]++;
        if(current[i]>0)
        $(this).siblings('span').text(current[i]);
         console.log(i)
        return false;
    })
    $('.button_area .shopping_list').on('click',function(){
        alert('상품을 장바구니에 담았습니다.')
    })
    $('.button_area .interest').on('click',function(){
        alert('로그인이 필요합니다. 로그인 하시겠습니까?')
    })
    $('.page_btn li').on('click',function(){
        $(this).addClass('page');
        $(this).siblings().removeClass('page');
    })
})