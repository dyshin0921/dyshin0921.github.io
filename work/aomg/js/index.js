$(function(){
    $(window).on('scroll',function(){
        var $top=$(window).scrollTop();
        if($top>400){
            $('.header').addClass('h_top');
        }else{
            $('.header').removeClass('h_top');
        }
    })
    $('.nav-icon').click(function(){
        $(this).toggleClass('on');
        if($(this).hasClass('on')){
            $('.header ul').animate({right:0});
        }else{
             $('.header ul').animate({right:'-100%'});
        }
    });
    $('.mainslider').bxSlider({
        maxSlides:1, 
        minSlides:1,
        moveSlides:1,
        pager:false,
        video:true
    })
    $('.album ul li').on('mouseenter',function(){
        $(this).children().children('.album_txt').slideDown();
    })
    $('.album ul li').on('mouseleave',function(){
        $(this).children().children('.album_txt').slideUp();
    })
    $('.swiper-slide img').on('mouseenter',function(){
        $(this).css({opacity: '0.7'});
        $(this).next('p').css({transform: 'rotate(180deg)',opacity: '1'});
    })
    $('.swiper-slide img').on('mouseleave',function(){
        $(this).css({opacity: '1'});
        $(this).next('p').css({transform: 'rotate(-180deg)',opacity: '0'});
    })
    $('.w_slider').bxSlider({
        maxSlides:4, 
        minSlides:4,
        moveSlides:1,
        slideWidth:380,
        pager:false,
    });
    var mySwiper = new Swiper('.works .swiper-container', {
    loop:true,
    slidesPerView: 4,
    spaceBetween: 0,
    // Responsive breakpoints
    breakpoints: {
      // when window width is <= 960px
      1280: {
        slidesPerView: 4,
        spaceBetween: 0
      },
      // when window width is <= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 0
      },
      // when window width is <= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    })

    $('.voc_slider').bxSlider({
        maxSlides:4, 
        minSlides:1,
        moveSlides:1,
        slideWidth:400,
        pager:false,
    })
    $('.instagram li').on('mouseenter',function(){
        $(this).find('p').fadeIn();
    })
    $('.instagram li').on('mouseleave',function(){
        $(this).find('p').fadeOut();
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
