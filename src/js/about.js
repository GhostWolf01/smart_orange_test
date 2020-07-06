$(function(){
    $('.team__items').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        dots: true,
        dotsClass: "team__slider-btn",
        arrows: false,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});
/* 
let aboutImgParallx = document.getElementsByClassName('about-parallax__img');
new simpleParallax (aboutImgParallx); */

function servicesActive (e){
    document.getElementsByClassName("services__item--active")[0].className = 'services__item aos-animate aos-init';
    
    e.srcElement.className +=" services__item--active";
}