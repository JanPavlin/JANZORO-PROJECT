

var main = function() {
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0%"
    }, 200);

    $('body').animate({
      left: "10%"
    }, 200);
    
     
      /*  $('body').css('background-color', 'rgba(0, 0, 0, '0.4')');
     */
    
  });

  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-10%"
    }, 200);

    $('body').animate({
      left: "0%"
    }, 200);
    
       /* $('body').css({"backgroundColor","white"});
     */
        
  });
  
    
};


$(document).ready(main);
