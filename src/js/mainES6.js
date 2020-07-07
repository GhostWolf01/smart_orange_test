'use strict'

/* ========= SHOW-SCROLL ========== */

let showScrolActive=false;
let oldPageYOffset=0;
let timer;
window.addEventListener('scroll', function() {
  if(oldPageYOffset<pageYOffset){
    clearInterval(timer);
    elemScrollUp.onclick=scrollToUp;
  }
  let headerTarget=document.getElementsByTagName('header')[0];
  if(oldPageYOffset<=pageYOffset){
    oldPageYOffset=pageYOffset;
    if(pageYOffset>150){
      if(headerTarget.className == "" )
      {
        headerTarget.className = "header__scroll--active";
      }
    }
    else{ 
      if(headerTarget.className == "header__scroll--active"){
        headerTarget.className="";
      }
    }
  }
  else {
    if(headerTarget.className == "header__scroll--active"){
      headerTarget.className="";
    }
    oldPageYOffset=pageYOffset;
  }

  if(pageYOffset>0 && !showScrolActive) 
  {
    showScrolActive=true;
    document.getElementById('show-scroll').className += " show-scroll--active";
  }
  else if(showScrolActive && pageYOffset==0){
      showScrolActive=false;
      document.getElementById('show-scroll').className = "show-scroll";
  }
});
/* ========= SHOW-SCROLL ========== */
/* ========= SCROLL-UP ============*/
let elemScrollUp =document.getElementById('show-scroll');
elemScrollUp.onclick=scrollToUp;
function scrollToUp(){
  elemScrollUp.onclick= null;
  let timeScrollSecond = 0.3*1000;
  let timeItervalMS = 6;
  let scrolStep = pageYOffset/(timeScrollSecond/timeItervalMS);
  oldPageYOffset= document.documentElement.scrollHeight;
  timer = setInterval(()=>{
    window.scrollBy(0,-scrolStep);
    oldPageYOffset=pageYOffset;
    if(pageYOffset==0){
      clearInterval(timer);
      elemScrollUp.onclick=scrollToUp;
    }
  }, timeItervalMS);
}
/* ========= SCROLL-UP ============*/
/* ========= Animation ==========*/
AOS.init({
  offset: 0,
  easing: 'linear',
  once: true,
  mirror: true,
});
/* ========= Animation ==========*/
/* =========Progress Bar ========= */
let bar = new ProgressBar.Line(document.getElementsByClassName('slider__numb-progress')[0], {
  color: '#DDDDDD',
  duration: 5000,
  strokeWidth: 100,
  trailColor: '#DDDDDD',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'}
});
bar.animate(1.0, {} , function() {
  $('.slider').slick('slickNext');
});
/* =========Progress Bar ========= */
/* 
let aboutImgParallx = document.getElementsByClassName('about-parallax__img');
new simpleParallax (aboutImgParallx); */

function servicesActive (e){
  document.getElementsByClassName("services__item--active")[0].className = 'services__item aos-animate aos-init';
  
  e.srcElement.className +=" services__item--active";
}
