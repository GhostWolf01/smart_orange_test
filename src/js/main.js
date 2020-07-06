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


   /*  ///slider
    var $slider = $(".slider"),
        $slideBGs = $(".slide__bg"),
        diff = 0,
        curSlide = 0,
        numOfSlides = $(".slide").length - 1,
        animating = false,
        animTime = 500,
        autoSlideTimeout,
        autoSlideDelay = 30000,
        $pagination = $(".slider-pagi");

    function createBullets() {
        for (var i = 0; i < numOfSlides + 1; i++) {
            var $li = $("<li class='slider-pagi__elem'></li>");
            $li.addClass("slider-pagi__elem-" + i).data("page", i);
            if (!i) $li.addClass("active");
            $pagination.append($li);
        }
    }

    createBullets();

    function manageControls() {
        $(".slider-control").removeClass("inactive");
        if (!curSlide) $(".slider-control.left").addClass("inactive");
        if (curSlide === numOfSlides) $(".slider-control.right").addClass("inactive");
    }

    function autoSlide() {
        autoSlideTimeout = setTimeout(function () {
            curSlide++;
            if (curSlide > numOfSlides) curSlide = 0;
            changeSlides();
        }, autoSlideDelay);
    }

    autoSlide();

    function changeSlides(instant) {
        if (!instant) {
            animating = true;
            manageControls();
            $slider.addClass("animating");
            $slider.css("top");
            $(".slide").removeClass("active");
            $(".slide-" + curSlide).addClass("active");
            setTimeout(function () {
                $slider.removeClass("animating");
                animating = false;
            }, animTime);
        }
        window.clearTimeout(autoSlideTimeout);
        // $(".slider-pagi__elem").removeClass("active");
        // $(".slider-pagi__elem-" + curSlide).addClass("active");
        $slider.css("transform", "translate3d(" + -curSlide * 100 + "%,0,0)");
        $slideBGs.css("transform", "translate3d(" + curSlide * 50 + "%,0,0)");
        diff = 0;
        $(".slider__numb-now").text(curSlide + 1);
        autoSlide();
    }

    function navigateLeft() {
        if (animating) return;
        curSlide--;
        if (curSlide < 0) curSlide = numOfSlides;
        changeSlides();
    }

    function navigateRight() {
        if (animating) return;
        curSlide++;
        if (curSlide > numOfSlides) curSlide = 0;
        changeSlides();
    }

    $(document).on("mousedown touchstart", ".slider", function (e) {
        if (animating) return;
        window.clearTimeout(autoSlideTimeout);
        var startX = e.pageX || e.originalEvent.touches[0].pageX,
            winW = $(window).width();
        diff = 0;

        $(document).on("mousemove touchmove", function (e) {
            var x = e.pageX || e.originalEvent.touches[0].pageX;
            diff = (startX - x) / winW * 70;
            if ((!curSlide && diff < 0) || (curSlide === numOfSlides && diff > 0)) diff /= 2;
            $slider.css("transform", "translate3d(" + (-curSlide * 100 - diff) + "%,0,0)");
            $slideBGs.css("transform", "translate3d(" + (curSlide * 50 + diff / 2) + "%,0,0)");
        });
    });

    $(document).on("mouseup touchend", function () {
        $(document).off("mousemove touchmove");
        if (animating) return;
        if (!diff) {
            changeSlides(true);
            return;
        }
        if (diff > -8 && diff < 8) {
            changeSlides();
            return;
        }
        if (diff <= -8) {
            navigateLeft();
        }
        if (diff >= 8) {
            navigateRight();
        }
    });

    $(document).on("click", ".slider-control", function () {
        if ($(this).hasClass("left")) {
            navigateLeft();
        } else {
            navigateRight();
        }
    });

    $(document).on("click", ".slider-pagi__elem", function () {
        curSlide = $(this).data("page");
        changeSlides();
    });

    $('.our-work__slider').slick({
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        prevArrow: '<button class="our-work__arrows our-work__prev"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button class="our-work__arrows our-work__next"><i class="fas fa-arrow-right"></i></button>'
    });

    $('.testimonials__slider-img').slick({
        slidesToShow: 1,
        vertical: true,
        asNavFor: '.testimonials__slider-text',
        prevArrow: '<button class="testimonials__arrows testimonials__prev"><span class="fas fa-chevron-down"></span></button>',
        nextArrow: '<button class="testimonials__arrows testimonials__next"><span class="fas fa-chevron-up"></span></button>'
    })

    $('.testimonials__slider-text').slick({
        slidesToShow: 1,
        asNavFor: '.testimonials__slider-img',
        arrows: false
    }); */

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
});