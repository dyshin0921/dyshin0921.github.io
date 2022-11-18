$(document).ready(function(){
    $('.area,.subgnb').on('mouseenter',function(){
        $('.subgnb').stop().slideDown();
    })
    $('.area,.subgnb').on('mouseleave',function(){
        $('.subgnb').stop().slideUp();
    })
    $('.commu,.subgnb2').on('mouseenter',function(){
        $('.subgnb2').stop().slideDown();
    })
    $('.commu,.subgnb2').on('mouseleave',function(){
        $('.subgnb2').stop().slideUp();
    })
     $('.rank,.rankbox').on('mouseenter',function(){
        $('.rankbox').stop().show();
    })
     $('.rank,.rankbox').on('mouseleave',function(){
        $('.rankbox').stop().hide();
    })
    var current=0;
    $('.prev').on('click',function(){
        current--;
        if(current<0){
            current=1;
            lookImg();
        }else{
            $('#look_img div span').text(current+1);
            $('#look_img .sec').show();
            $('#look_img .sec').parent().siblings().children('img').hide();
        }
    })
    $('.next').on('click',function(){
        current++;
        if(current>1){
            current=0;
            $('#look_img div span').text(current+1);
            $('#look_img .sec').show();
            $('#look_img .sec').parent().siblings().children('img').hide();
        }else{
            lookImg();
        }
    })
function lookImg(){
    $('#look_img div span').text(current+1);
    $('#look_img .sec').hide();
    $('#look_img .sec').parent().siblings().children('img').show();
}
})