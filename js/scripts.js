$(document).ready(function() {

  /***************** Waypoints ******************/

  $('.wp1').waypoint(function() {
    $('.wp1').addClass('animated fadeInUp');
  }, {
    offset: '75%'
  });
  $('.wp2').waypoint(function() {
    $('.wp2').addClass('animated fadeInUp');
  }, {
    offset: '75%'
  });
  $('.wp3').waypoint(function() {
    $('.wp3').addClass('animated fadeInRight');
  }, {
    offset: '75%'
  });

  /***************** Initiate Flexslider ******************/
  $('.officeslider').flexslider({
    animation: "slide",
    slideshow: false,
    controlNav: true,
    directionNav: false
  });

  /***************** Initiate Flexslider ******************/
  $('.snackkslider').flexslider({
    animation: "slide",
    slideshow: false,
    controlNav: false,
    directionNav: true,
    animationLoop: false
  });

  /***************** Initiate Fancybox ******************/

  $('.single_image').fancybox({
    padding: 4,
  });

  /***************** Tooltips ******************/
  $('[data-toggle="tooltip"]').tooltip();

  /***************** Nav Transformicon ******************/

  /* When user clicks the Icon */
  $('.nav-toggle').click(function() {
    $(this).toggleClass('active');
    $('.header-nav').toggleClass('open');
    event.preventDefault();
  });
  /* When user clicks a link */
  $('.header-nav .menu li a').click(function() {
    $('.nav-toggle').toggleClass('active');
    $('.header-nav').toggleClass('open');
    $('.header-nav .menu li a').removeClass();
    $(this).toggleClass('active');
  });  

  /* When user clicks a link */
  $('.header-nav .language li a').click(function() {
    $('.nav-toggle').toggleClass('active');
    $('.header-nav').toggleClass('open');
    $('.header-nav .language li a').removeClass();
    $(this).toggleClass('active');
  });


  /***************** Header BG Scroll ******************/

  $(function() {
    calcScroll();
    $(window).scroll(function() {
      calcScroll();
    });
  });
  /***************** Smooth Scrolling ******************/

  $(function() {

    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 2000);
          return false;
        }
      }
    });

  });

});

function calcScroll() {
  var scroll = $(window).scrollTop();
  if (scroll >= 20) {
    $('section.navigation').addClass('fixed');
    $('header').css({
      "border-bottom": "none",
      "padding": "23px 0"
    });
    $('header .member-actions').css({
      "top": "26px",
    });
    $('header .navicon').css({
      "top": "34px",
    });
  } else {
    $('section.navigation').removeClass('fixed');
    $('header .member-actions').css({
      "top": "41px",
    });
    $('header .navicon').css({
      "top": "48px",
    });
  }
}

/***************** Set Map ******************/  
function initMap() {
  var officeLatLng = {
    lat: 37.515580, 
    lng: 127.0220000
  };

  var map = new google.maps.Map(document.getElementById('map'), {
    center: officeLatLng,
    scrollwheel : false,
    draggable : true,
    zoom: 18
  });

  var marker = new google.maps.Marker({
    map: map,
    position: officeLatLng,
    title: 'MADSqaure Inc.'
  });

  google.maps.event.addDomListener(window, "resize", function() {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
  });
}