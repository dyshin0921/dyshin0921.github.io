$(function(){
    $('.nav-icon').click(function(){
        $(this).toggleClass('on');
        if($(this).hasClass('on')){
            $('#gnb').animate({top:0});
        }else{
             $('#gnb').animate({top:'-150%'});
        }
    });
    $('#fullpage').fullpage({
        autoScrolling:false,
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
//        navigation:true,
        afterLoad: function(origin, destination, direction){
            if(destination.index == 0){
                $('#header').removeClass('scroll')
            }else{
                $('#header').addClass('scroll')
            }
		    if(destination.index == 1){
                $('.photoshop .bar').stop().delay(200).animate({width:'95%'},1000)
                $('.vue .bar').stop().delay(300).animate({width:'60%'},1000)
                $('.html .bar').stop().delay(400).animate({width:'95%'},1000)
                $('.jq .bar').stop().delay(500).animate({width:'90%'},1000)
                $('.sub').css({background: 'rgba(0,0,0,.3)'})
            }else{
                $('.photoshop .bar').stop().animate({width:'0%'},1000)
                $('.vue .bar').stop().animate({width:'0%'},1000)
                $('.html .bar').stop().animate({width:'0%'},1000)
                $('.jq .bar').stop().animate({width:'0%'},1000)
                $('.sub').css({background: 'rgba(255,255,255,.3)'})
            }
            if(destination.index == 2){
                $('.sub').css({background: 'rgba(0,0,0,.3)'})
            }
            if(destination.index == 3){
                $('#contact .contact-text').addClass('slide-top')
            }
        }
    })
    AOS.init({
        duration: 1300,
        once: true,
        disable: 'mobile'
    });
    
/* #page3 
============================ */

// init Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
        getSortData: {
            name: '.name',
            symbol: '.symbol',
            number: '.number parseInt',
            category: '[data-category]',
            weight: function( itemElem ) {
                var weight = $( itemElem ).find('.weight').text();
                return parseFloat( weight.replace( /[\(\)]/g, '') );
            }
        }
    });
    
    // filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function() {
            var number = $(this).find('.number').text();
            return parseInt( number, 10 ) > 50;
        },
        // show if name ends with -ium
        ium: function() {
            var name = $(this).find('.name').text();
            return name.match( /ium$/ );
        }
    };
    
    // bind filter button click
    $('#filters').on( 'click', 'button', function() {
        var filterValue = $( this ).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[ filterValue ] || filterValue;
        $grid.isotope({ filter: filterValue });
    });
    
    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
        });
    });
/* end : #page3 ================= */ 
    
    //animatedModal
    $("#demo01,#demo02").animatedModal();
    $("#demo01,#demo02").on('click',function(){
        var modalId=$(this).attr('id').substr(4,6)
        $('#c'+modalId).show();
        $('#c'+modalId).siblings().hide();
    })
})
