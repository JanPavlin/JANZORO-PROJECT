

var main = function() {
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0%"
    }, 200);

    $('body').animate({
      left: "10%"
    }, 200);
    
     
         $("body").css("background-color", "rgbargba(255, 255, 255, 0.4)");
     
    
  });

  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-10%"
    }, 200);

    $('body').animate({
      left: "0%"
    }, 200);
    
  $("body").css("background-color", "white");
        
  });
  
    
};


$(document).ready(main);
