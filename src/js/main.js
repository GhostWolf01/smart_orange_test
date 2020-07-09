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
    /* ========= Slider ============= */
    /* ========== Home ========= */
    slickHead = $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        dotsClass: "slider__dots",
        arrows: true,
        adaptiveHeight: true,
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
            top: window.pageYOffset+document.documentElement.clientHeight*(-0.25)+'px',
            width: 0,
            height: 0,
            left: '50%'
        }, 800, function(){
            $('.form-phone').css({
            'display': 'none'
            });
        });
        
    });

    $('.slide__phone-btn').click(function(){
        $('.form-phone').css({
            top: '25%',
            display: 'block',
            width: 0,
            height: 0,
            left: '50%'
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
    });

    $('.gallery__nav-club-rezedence').click(function(){
        $('.gallery__slider').slick('slickGoTo', 1);
        $('.gallery__nav-club-rezedence').addClass('gallery__nav-club--active');
        $('.gallery__nav-club-home').removeClass('gallery__nav-club--active');
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
        arrows: false,
        focusOnSelect: true,
        accessibility: false,
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
        arrows: false,
        asNavFor: '.gallery__club-rezedence__for',
        focusOnSelect: true,
        accessibility: false
    });

    var gallery__control__dots = $('.gallery__nav-control-dots li');
    for(var i=0; i<gallery__control__dots.length; i++){
        $(gallery__control__dots[i]).click(function(slideN){
            return function(){
                $('.gallery__slider .slick-current .gallery__slide__nav').slick('slickGoTo', slideN);
            }
        }(i))
    }

    $('.gallery__slide__nav').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(gallery__control__dots).removeClass('slick-active');
        $(gallery__control__dots[nextSlide]).addClass('slick-active');
        var elem = $('.gallery__slider .slick-current .gallery__slide__nav .gallery__slide__nav-img');
        elem.removeClass('gallery__slide__nav-img--active');
        $(elem[nextSlide]).addClass('gallery__slide__nav-img--active');
    });

    $(".gallery__slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
        if(event.target==event.delegateTarget){
            var gallery_slide = $('.gallery__slide__nav');
            $(gallery__control__dots).removeClass('slick-active');
            $(gallery__control__dots[$(gallery_slide[nextSlide]).slick('slickCurrentSlide')]).addClass('slick-active');
        }
    });

    $(".gallery__nav-control--left").click(function(){
        $('.gallery__slider .slick-current .gallery__slide__nav').slick('slickPrev');
    });

    $(".gallery__nav-control--right").click(function(){
        $('.gallery__slider .slick-current .gallery__slide__nav').slick('slickNext');
    });
 
 
    /* ========== Gallery ========= */

    /* ========== Layouts ========= */

    $(".layouts__header-slider").slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: false,
        arrows: false,
        infinite: false,
        autoplay: false,
        swipe: false,
        draggable: false,
    });

    var group_title = $('.layouts__nav-group__title')
    for (var i = 0 ; i < group_title.length ; i++){
        $(group_title[i]).click(function(slideN){
            return function() {
                var nav_group = $('.layouts__nav-group');
                $(nav_group).removeClass('layouts__nav-group--active');
                $(nav_group[slideN]).addClass('layouts__nav-group--active');
                $('.layouts__header-slider').slick('slickGoTo', slideN);
            }
        }(i));
    }

    $(".layouts__header-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
        if(event.target==event.delegateTarget){
            var layouts_slider = $('.layouts__slider');
            $(layouts__control__dots).removeClass('slide-active');
            $(layouts__control__dots[$(layouts_slider[nextSlide]).slick('slickCurrentSlide')]).addClass('slide-active');
        }
    });

    $('.layouts__slider').slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: false,
        arrows: false,
        infinite: false,
        autoplay: false,
        swipe: true,
        draggable: true,
    });

    $('.layouts__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(layouts__control__dots).removeClass('slide-active');
        $(layouts__control__dots[nextSlide]).addClass('slide-active');
        var group_element_active = $('.layouts__nav-group--active .layouts__nav-group__element');
        $(group_element_active).removeClass('layouts__nav-group__element--active');
        $(group_element_active[nextSlide]).addClass('layouts__nav-group__element--active');
    });

    var layouts_slider = $('.layouts__slider');
    var group_elements = $('.layouts__nav-group__elements');
    var layouts__control__dots = $('.layouts__control-dots li');
    for(var i=0; i < group_elements.length; i++){
        for(var j=0; j <  group_elements[i].children.length; j++)
        {
            $(group_elements[i].children[j]).click(function(slideN, sliderN){
                return function(){
                    $(layouts_slider[sliderN]).slick('slickGoTo', slideN);
                }
            }(j, i));

        }
    }

    for(var i=0; i<layouts__control__dots.length; i++){
        $(layouts__control__dots[i]).click(function(slideN){
            return function(){
                $('.layouts__header-slider .slick-current .layouts__slider').slick('slickGoTo', slideN);
            }
        }(i))
    }

    $(".layouts__control--left").click(function(){
        $('.layouts__header-slider .slick-current .layouts__slider').slick('slickPrev');
    });

    $(".layouts__control--right").click(function(){
        $('.layouts__header-slider .slick-current .layouts__slider').slick('slickNext');
    });
     
    $('.layouts__flat-contacts__btn').click(function(){
        $('.form-phone').css({
            top: window.pageYOffset+document.documentElement.clientHeight*0.25+'px',
            display : 'block',
            width: 0,
            height: 0,
            left: '50%'
        });
        $('.form-phone').animate({
            width: '770px',
            height: '505px',
            left : '25%'
        }, 1000);
    });
    /* ========== Layouts ========= */

    /* ========== Documets ========= */
    $('.documents__slider').slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: true,
        variableWidth: true,
        appendDots: $('.documents__control-dots'),
        arrows: true,
        prevArrow: $('.documents__control--left'),
        nextArrow: $('.documents__control--right'),
        infinite: false,
        autoplay: false,
    });
    /* ========== Documets ========= */

    /* ========= Slider ============= */
});