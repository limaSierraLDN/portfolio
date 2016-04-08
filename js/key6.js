$(document).keydown(function(e) {
    switch(e.which) {

        case 37: // left
                 window.location.href= 'port5.html';
        break;
        
        
        case 39: // right
               
        break;

       
        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});



$(function() {      
      $(".portImage").swipe( {
        //Single swipe handler for left swipes
        swipeRight:function(event, direction, distance, duration, fingerCount) {
             window.location.href= 'port5.html';
        },
        
      });
    });