$(function(){
    $('#fullpage').fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        menu:'#header',
        anchors:['section1','section2','section3','section4','section5']
    });
    //section3 제품 슬라이더
    $('.p_list').bxSlider({
        pager:false,
        maxSlides:4,
        slideWidth:160,
        moveSlides:1,
        auto:true,
        pause:2500,
        touchEnabled:false
    });
    $('.p_list a').fancybox();
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
