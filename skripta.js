

var main = function() {
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0%"
    }, 200);

    $('body').animate({
      left: "10%"
    }, 200);
    
     $(this).stop().animate({
        $('body').css('background-color', 'rgba(0, 0, 0, '0.4')')
     }, 300);
    
  });

  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-10%"
    }, 200);

    $('body').animate({
      left: "0%"
    }, 200);
    
     $(this).stop().animate({
        $('body').css({"backgroundColor","white"})
     }, 300);
        
  });
  
    
};


$(document).ready(main);
