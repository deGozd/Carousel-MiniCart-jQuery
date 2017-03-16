$(document).ready(function () {
  
  // Carousel Position
  var position = 1;
  
  
  // Search Thumbnails and Calculate Height
  function calcHeight(position) {
    totalHeight = 0;
    for (i = position; i <= position + 3; i++) {
      var height = $('.carousel li:nth-child(' + i + ')').height();
      totalHeight += height;
      if (i != 1) {
        totalHeight += 30;
      }
    }
  }
  
  // Mobile CSS
  if ($('.carousel li').length == 0) {
    $('.carousel').hide();
    $('.slides').css('left', '0px');
    $('.slides').css('margin-right', '0px');
  }
  
  // Carousel Controls Hidden When Below 4
  if ($('.carousel li').length <= 4) {
    $('.carousel-up').hide();
    $('.carousel-down').hide();
  }
  
  // Carousel
  if ($('.carousel li').length > 3) {
    
    // Repeat Height Calculation until Images Load
    interval = setInterval(update, 10);

    function update() {
      if ($(document).width() > 767) {
        calcHeight(position);
        $('.product_gallery').height(totalHeight);
        if (totalHeight > 400) {
          console.log('log');
          clearInterval(interval);
        }
      }
    }
    
    // Carousel Up Control
    $('.carousel-up').click(function () {
      var top = parseInt($('.carousel').css('top'), 10);
      var currentHeight = $('.carousel li:nth-child(' + position + ')').height();
      var calc = top + (currentHeight + 30);
      $('.carousel').css('top', calc);
      position--;
      var lastItem = position + 3;
      var length = $('.carousel li').length;
      if (lastItem == length) {
        $('.carousel-down').addClass('disabled');
      }
      else {
        $('.carousel-down').removeClass('disabled');
      }
      calcHeight(position);
      if (position == 1) {
        $('.carousel-up').addClass('disabled');
        $('.product_gallery').height(totalHeight);
      }
      else {
        $('.carousel-up').removeClass('disabled');
        $('.product_gallery').height(totalHeight - 30);
      }
    });
    
    // Carousel Down Control
    $('.carousel-down').click(function () {
      var top = parseInt($('.carousel').css('top'), 10);
      var currentHeight = $('.carousel li:nth-child(' + position + ')').height();
      var calc = top - (currentHeight + 30);
      $('.carousel').css('top', calc);
      position++;
      calcHeight(position);
      if (position == 1) {
        $('.carousel-up').addClass('disabled');
        $('.product_gallery').height(totalHeight);
      }
      else {
        $('.carousel-up').removeClass('disabled');
        console.log('hello');
        $('.product_gallery').height(totalHeight - 30);
      }
      var lastItem = position + 3;
      var length = $('.carousel li').length;
      if (lastItem == length) {
        $('.carousel-down').addClass('disabled');
      }
      else {
        $('.carousel-down').removeClass('disabled');
      }
    });
    
    // Check Height on Resize and Check for Mobile
    $(window).resize(function () {
      if ($(document).width() > 767) {
        calcHeight(position);
        $('.product_gallery').height(totalHeight);
      }
    });
  }
  
  // Detect Click
  clicked = 0;
  
  // Mini Cart Button Function
  $('.mini-cart-button').mouseenter(function () {
    $('.mini-cart').show();
  });
  $('.mini-cart-button').mouseleave(function () {
    if (clicked == 1) {
      $('.mini-cart').show();
    }
    else {
      $('.mini-cart').hide();
    }
  });
  $('.mini-cart-button').click(function () {
    if (clicked == 0) {
      $('.mini-cart').show();
      clicked = 1;
    }
    else {
      $('.mini-cart').hide();
      clicked = 0;
    }
  });
  $('.mini-cart').mouseenter(function () {
    $('.mini-cart').show();
  });
  $('.mini-cart').mouseleave(function () {
    if (clicked == 1) {
      $('.mini-cart').show();
    }
    else {
      $('.mini-cart').hide();
    }
  });
  
  // My Account Function
  $('.myaccount-upgrade *').mouseenter(function () {
    $('.myaccount-upgrade').show();
  });
});

// Open and Close Functions for onClick

function openPopup() {
  $('#anitako-popup').fadeIn();
  $('.open-popup').hide();
  $('.close-popup').show();
  $('.mini-cart').fadeOut();
}

function closePopup() {
  $('#anitako-popup').fadeOut();
  $('.open-popup').show();
  $('.close-popup').hide();
}

function closeMiniCart() {
  $('.mini-cart').fadeOut();
  $('.mini-cart').hide();
  clicked = 0;
}