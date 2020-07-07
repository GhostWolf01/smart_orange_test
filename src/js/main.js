var slickHead;
$(function () {


    /* ===============================  Preloader page  =============================== */

    paceOptions = {
        ajax: true,
        document: true,
        eventLag: false
    };
    
    Pace.on('done', function () {
        $('#preloader').addClass("isdone");
        $('.loading-text').addClass("isdone");
    });
    /* ===============================  Preloader page  =============================== */
    /* ========= Animation Text =======*/
    function animationTextFun(classSeach="animation-text", aosDelayDefault=0, aosOffset=-100, aosAnimation="fade-left"){
       var animTextElements = document.getElementsByClassName(classSeach);
        for( elem of animTextElements)
        {
            $(elem).splitText({'type':'lines'});
            for(elemLine of elem.children)
            {
                $(elemLine).splitText({'type':'letters'});
                $(elemLine.children).attr('data-aos', aosAnimation);
                $(elemLine.children).attr('data-aos-offset', ''+aosOffset);
                for(var i=0; i<elemLine.children.length;i++){
                    $(elemLine.children[i]).attr('data-aos-delay', ''+(aosDelayDefault+50*i));
                }
            }
        }
    }
    animationTextFun(); //default classSeach animation-text
    animationTextFun("review__animation-text", 8000, 300);
    /* ========= Animation Text =======*/
    /* ========= Slider ============= */
    /* ========== Home ========= */
    slickHead = $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        dotsClass: "slider__dots",
        arrows: true,
        infinite: true,
        prevArrow: $('.slider-control--left'),
        nextArrow: $('.slider-control--right'),
    });

    $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        if(event.target.className==slickHead[0].className)
        {
            bar.set(0);
            bar.animate(1.0, {} , function() {
                $('.slider').slick('slickNext');
              });
            document.getElementsByClassName('slider__numb-old')[0].innerHTML='0'+(nextSlide+1);
            document.getElementsByClassName('slider__numb-new')[0].innerHTML='0'+(currentSlide+1);
        }
    });

    $('.form__close').click(function(){
        $('.form-phone').animate({
            width: 0,
            height: 0,
            left: '50%'
        }, 1000, function(){
            $('.form-phone').css({
            'display': 'none'
            });
        });
        
    });

    $('.slide__phone-btn').click(function(){
        $('.form-phone').css({
            'display': 'block',
            'width': 0,
            'height': 0,
            'left': '50%'
        });
        $('.form-phone').animate({
            width: '770px',
            height: '505px',
            left : '25%'
        }, 1000);
        
    });
    /* ========== Home ========= */
    /* ========== Gallery ========= */
    $('.gallery__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: false,
        autoplay: false,
        swipe: false,
        draggable: false,
    });

    $('.gallery__nav-club-home').click(function(){
        $('.gallery__slider').slick('slickGoTo', 0);
        $('.gallery__nav-club-home').addClass('gallery__nav-club--active');
        $('.gallery__nav-club-rezedence').removeClass('gallery__nav-club--active');
        $('.gallery__club-rezedence__controls').css({
            display : 'none'
        });
        $('.gallery__club-home__controls').css({
            display : 'block'
        });
        
    });

    $('.gallery__nav-club-rezedence').click(function(){
        $('.gallery__slider').slick('slickGoTo', 1);
        $('.gallery__nav-club-rezedence').addClass('gallery__nav-club--active');
        $('.gallery__nav-club-home').removeClass('gallery__nav-club--active');
        $('.gallery__club-home__controls').css({
            display : 'none'
        });
        $('.gallery__club-rezedence__controls').css({
            display : 'block'
        });
    });

    $('.gallery__club-home__for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        accessibility: false,
        asNavFor: '.gallery__club-home__nav',
    });

    $('.gallery__club-home__nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: false,
        asNavFor: '.gallery__club-home__for',
        arrows: true,
        prevArrow: $('.gallery__club-home__controls .gallery__nav-control--left'),
        nextArrow: $('.gallery__club-home__controls .gallery__nav-control--right'),
        dots: true,
        appendDots: $('.gallery__club-home__controls .gallery__nav-control-dots'),
        focusOnSelect: true,
        accessibility: false,
    });

    $('.gallery__club-home__nav').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var elem = $('.gallery__club-home__nav .gallery__slide__nav-img');
        elem.removeClass('gallery__slide__nav-img--active');
        $(elem[''+nextSlide]).addClass('gallery__slide__nav-img--active');
    });

    $('.gallery__club-rezedence__for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        accessibility: false,
        asNavFor: '.gallery__club-rezedence__nav',
    });

    $('.gallery__club-rezedence__nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: false,
        responsive: "unslick",
        asNavFor: '.gallery__club-rezedence__for',
        arrows: true,
        prevArrow: $('.gallery__club-rezedence__controls .gallery__nav-control--left'),
        nextArrow: $('.gallery__club-rezedence__controls .gallery__nav-control--right'),
        dots: true,
        appendDots: $('.gallery__club-rezedence__controls .gallery__nav-control-dots'),
        focusOnSelect: true,
        accessibility: false
    });

    $('.gallery__club-rezedence__nav').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var elem = $('.gallery__club-rezedence__nav .gallery__slide__nav-img');
        elem.removeClass('gallery__slide__nav-img--active');
        $(elem[''+nextSlide]).addClass('gallery__slide__nav-img--active');
    });
    /* ========== Gallery ========= */
    /* ========= Slider ============= */
});