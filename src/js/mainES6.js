'use strict'
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
let mapStyle = [
  {
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#444444"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [
          {
              "color": "#f2f2f2"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "landscape.man_made",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "hue": "#ffd100"
          },
          {
              "saturation": "44"
          }
      ]
  },
  {
      "featureType": "landscape.man_made",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "saturation": "-1"
          },
          {
              "hue": "#ff0000"
          }
      ]
  },
  {
      "featureType": "landscape.natural",
      "elementType": "geometry",
      "stylers": [
          {
              "saturation": "-16"
          }
      ]
  },
  {
      "featureType": "landscape.natural",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "hue": "#ffd100"
          },
          {
              "saturation": "44"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "all",
      "stylers": [
          {
              "saturation": "-30"
          },
          {
              "lightness": "12"
          },
          {
              "hue": "#ff8e00"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "simplified"
          },
          {
              "saturation": "-26"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
          {
              "color": "#c0b78d"
          },
          {
              "visibility": "on"
          },
          {
              "saturation": "4"
          },
          {
              "lightness": "40"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
          {
              "hue": "#ffe300"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "hue": "#ffe300"
          },
          {
              "saturation": "-3"
          },
          {
              "lightness": "-10"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "labels",
      "stylers": [
          {
              "hue": "#ff0000"
          },
          {
              "saturation": "-100"
          },
          {
              "lightness": "-5"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  }
];
let map;
let apiKey = "AIzaSyCuJQvEPFtEnnUeDksw0T1BFBW0KNL3DHM";
let loaderOptions = {
    language: 'ua', 
    libraries: 'geometry,places,visualization'
};

var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key='+apiKey+'&libraries='+loaderOptions.libraries+'&language='+loaderOptions.language+'&callback=initMap';
script.defer = true;
script.async = true;

window.initMap = function() {
  let options = {
    zoom: 17,
    center: { lat:50.476186, lng:30.669717},
    styles: JSON.stringify(mapStyle),
    mapTypeId: 'roadmap',
    disableDefaultUI: true
  };
  map = new google.maps.Map(document.getElementsByClassName('office__map')[0], options);
  new google.maps.Marker({
  position: {
    lat: 50.475858, 
    lng: 30.669840
  },
  map: map,
  title:"",
  icon: "../images/marker-club.png", 
  });
  new google.maps.Marker({
  position: {
    lat: 50.476472,  
    lng: 30.669507,
  },
  map: map,
  title:"",
  icon: "../images/marker-rezedence.png", 
  });
  new google.maps.Marker({
  position: {
    lat: 50.476923, 
    lng: 30.669260 
  },
  map: map,
  title:"",
  icon:"../images/marker-office.png", 
  });
};

document.head.appendChild(script);
/* ========= Google Map ========= */
