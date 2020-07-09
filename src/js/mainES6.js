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
/* ========= Progress Bar ========= */
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
/* ========= Progress Bar ========= */

/* ========= Google Map ========= */
let googleMapStyle = require("../js/mapStyle.json");
let markerClub = require("../images/marker-club.png");
let markerRezedence = require("../images/marker-rezedence.png");
let markerOfiice = require("../images/marker-office.png");

let map;
let apiKey = "AIzaSyCuJQvEPFtEnnUeDksw0T1BFBW0KNL3DHM";
let loaderOptions = {
    language: 'ua', 
    libraries: ['geometry', 'places', 'visualization']
};
let loader = new Loader( apiKey, loaderOptions);
let options = {
        zoom: 15,
        center: { lat:50.476186, lng:30.669717},
        styles: googleMapStyle,
        mapTypeId: 'roadmap',
        disableDefaultUI: true
    };
loader.load().then((google) => {
  map = new google.maps.Map(document.getElementsByClass('office__map')[0], options);
  new google.maps.Marker({
    position: {
      lat: 50.475858, 
      lng: 30.669840
    },
    map: map,
    title:"",
    icon: markerClub,
  });
  new google.maps.Marker({
    position: {
      lat: 50.476472,  
      lng: 30.669507,
    },
    map: map,
    title:"",
    icon: markerRezedence,
  });
  new google.maps.Marker({
    position: {
      lat: 50.476923, 
      lng: 30.669260 
    },
    map: map,
    title:"",
    icon: markerOfiice,
  });
});
/* ========= Google Map ========= */
