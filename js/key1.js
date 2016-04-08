$(document).keydown(function(e) {
    switch(e.which) {


        case 39: // right
                window.location.href= 'port2.html';
        break;

       
        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

$(function() {      
      //Keep track of how many swipes
      var count=0;
      //Enable swiping...
      $(".portImage").swipe( {
        //Single swipe handler for left swipes
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
             window.location.href= 'port2.html';
        },
        
      });
    });