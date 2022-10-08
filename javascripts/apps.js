headerHeight = function() {
  $('header#header').height('');
  $('header#header').height($(window).height());
  $('header#header').addClass('scroll');
}
navExpands = function () {
  $('header#header').addClass('nav-is-open');
  $('button.lines-button.x').addClass('close');
  $('section, footer').addClass('blur');
  $('body').addClass('no-scroll');
  headerHeight();
}
navCollapses = function () {
  $('header#header').removeClass('nav-is-open');
  $('button.lines-button.x').removeClass('close');
  $('body').removeClass('no-scroll');
  $('section, footer').removeClass('blur');
  $('header#header').height('');
}

mobileClass = function () {
  var windowWidth = $(window).width();
  if ( windowWidth < 768 ) {
    $('body').addClass('mobile');
    $('button.lines-button.x').hasClass('close');
    if ($('nav .wrapper').hasClass('closed')) {
      navExpands();
    }
    
  } else {
    $('body').removeClass('mobile');
    if (!$('nav .wrapper').hasClass('closed')) {
      navCollapses();
    }

  }
}

heroMobiletHeight = function(){
  var windowHeight = $(window).height();
  var windowWidth = $(window).width();
  if ( windowWidth < 768 ) {
    $('.home #hero').height(windowHeight);
  }
};





$(document).ready(function(){


  // Animated Hamburger Icon  
  $('body').on('click', 'button.lines-button.x', function (){
    if ( !$('button.lines-button').hasClass('close') ) {
      navExpands();
  
    } else {
      navCollapses();
    }      
    return false;
  });

   mobileClass();
   heroMobiletHeight();

  $('ul.index').onePageNav({
    currentClass: 'active',
    scrollSpeed: 750,
    scrollThreshold: 0.2,
    easing: 'swing',
  });

  $('a.scroll-to-anchor').click(function(){
    var headerHeight = $('header#header').outerHeight();
    if (this.href.indexOf('#') != -1) {
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top - headerHeight
      }, 750);
      return false;
    }
  });

  // Mobile Nav, close it when clicking on a nav item
  $('body').on('click', 'header a:not([href*="tel"])', function (){
    if ($('header').hasClass('nav-is-open')) {
      $('button.lines-button.x').click();
    }
  });

  $('a.register').click(function(){
    $(this).toggle();
    $('.contact-form').toggle();
    return false;
  });




  $('.parallax').each(function(){
    $.stellar({
      horizontalScrolling: false,
    });
  });


  // Map
  $("#map a.dot").click(function() {
    var href = $(this).attr('href');
    $(this).siblings().removeClass('active');    
    $(this).toggleClass('active');    
    $('#timeline div[id]').not(href).hide();
    $(href).toggle();
    $('#timeline').find('.dot').removeClass('active');
    if ($(href).is(':visible')) {
      $(href).parents('li').find('.dot').addClass('active');
    }
    return false;
  });


});



$(window).scroll(function() {
  if( $(this).scrollTop() >= 100) {
    $('header#header').addClass('fixed');
  } else {
    $('header#header').removeClass('fixed');
  }
});





$(window).resize(function() {
  mobileClass();
  heroMobiletHeight();
});




