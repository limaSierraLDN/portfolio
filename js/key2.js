$(document).keydown(function(e) {
    switch(e.which) {

        case 37: // left
                 window.location.href= 'port1.html';
        break;
        
        
        case 39: // right
                window.location.href= 'port3.html';
        break;

       
        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});