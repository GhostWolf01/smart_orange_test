'use strict'

let burger = document.querySelector('.burger'),
    header = document.querySelector('header');

burger.addEventListener('click', ()=> {
  header.classList.toggle('header__active');
});

let blogImgParallx = document.querySelectorAll('.blog__item-image__link img');
new simpleParallax (blogImgParallx, {
  delay: 5,
  scale: 1.5,
	transition: 'cubic-bezier(0,0,0,1)'
});

let msnry = new Masonry('.portfolio__wrapper', {
  itemSelector: '.portfolio__wrapper-item',
  columnWidth: 95
});

let portfParallx = document.querySelectorAll('.portfolio__wrapper-item img');
new simpleParallax (portfParallx, {
  delay: 5,
  scale: 1.2,
	transition: 'cubic-bezier(0,0,0,1)'
});


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
