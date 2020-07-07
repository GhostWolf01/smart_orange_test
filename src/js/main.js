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
});