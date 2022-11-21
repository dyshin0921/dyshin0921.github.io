$('.mobile-menu-open').on('click',function(){
    $('.menu-wrap').toggleClass('on');
    var state=$('.menu-wrap').hasClass('on');
    if(state){
        $(this).find('img').attr({src:'images/menu2.png'})
    }else{
        $(this).find('img').attr({src:'images/menu.png'})
    }
})
/*모바일메뉴 아코디언*/
$('.main>li').on('click',function(){
    var _window=$(window).width();
    if(_window>=960){
        return; //함수 종료
    }
    $(this).toggleClass('on');
    $(this).siblings().removeClass('on');
    $(this).children('.sub').slideToggle();
    $(this).siblings().children('.sub').slideUp();
})
/*pc메뉴*/
$('.main>li').on('mouseenter',function(){
    var _window=$(window).width();
    if(_window<960){
        return; //함수 종료
    }
    $('.sub').stop().slideDown();
    $('.gnbbg').stop().slideDown();
})
$('.main>li').on('mouseleave',function(){
    var _window=$(window).width();
    if(_window<960){
        return; //함수 종료
    }
    $('.sub').stop().slideUp();
    $('.gnbbg').stop().slideUp();
})
/*메인슬라이더*/
var mySwiper = new Swiper('.mainVisual_top .swiper-container', {
    slidesPerView:1,
    effect:'fade',
    autoplay: {
        delay: 3000,
        disableOnInteraction:false,
    },
    loop:true,
    navigation: {
        nextEl: '.mainVisual_top .swiper-button-next',
        prevEl: '.mainVisual_top .swiper-button-prev',
    },
})
/*ROOMS 슬라이더와 탭*/
var current=0;
$('.rooms .button-next').on('click',function(){
    $('.rooms .rooms-slide').eq(current).css({left:0}).stop().animate({left:'-100%'},500);
    current++ // 다음번호로 업데이트
    if(current>2)current=0;
    $('.rooms .rooms-slide').eq(current).css({left:'100%'}).animate({left:0},500);
})
$('.rooms .button-prev').on('click',function(){
    $('.rooms .rooms-slide').eq(current).css({left:0}).stop().animate({left:'100%'},500);
    current-- // 다음번호로 업데이트
    if(current<0)current=2;
    $('.rooms .rooms-slide').eq(current).css({left:'-100%'}).animate({left:0},500);
})
$('.thumbnail li').on('click',function(){
    var index=$(this).index();
    $('.rooms-slide').eq(current).children('.bigimage').children('li').hide();
    $('.rooms-slide').eq(current).children('.bigimage').children('li').eq(index).show();
})
/*sns*/
var mySwiper = new Swiper('.sns .swiper-container', {
    loop:true,
    slidesPerView: 5,
    spaceBetween: 30,
    // Responsive breakpoints
    breakpoints: {
      // when window width is <= 960px
      1024: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      // when window width is <= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      // when window width is <= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      }
    },
    pagination: {
    el: '.sns .swiper-pagination',
    type: 'bullets',
    clickable:true,
  }
});
