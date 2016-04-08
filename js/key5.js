$(document).keydown(function(e) {
    switch(e.which) {

        case 37: // left
                 window.location.href= 'port4.html';
        break;
        
        
        case 39: // right
                window.location.href= 'port6.html';
        break;

       
        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

$(function() {      
      $(".portImage").swipe( {
        //Single swipe handler for left swipes
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
             window.location.href= 'port6.html';
        },
        
      });
    });

$(function() {      
      $(".portImage").swipe( {
        //Single swipe handler for left swipes
        swipeRight:function(event, direction, distance, duration, fingerCount) {
             window.location.href= 'port4.html';
        },
        
      });
    });