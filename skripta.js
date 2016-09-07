

var main = function() {
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0%"
    }, 200);

    $('body').animate({
      left: "10%"
    }, 200);
    
    $('body').css({ opacity: 0.4 });
  });

  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-10%"
    }, 200);

    $('body').animate({
      left: "0%"
    }, 200);
        $('body').css({ opacity: 1.0 });
  });
};


$(document).ready(main);
