$(document).keydown(function(e) {
    switch(e.which) {


        case 39: // right
                window.location.href= 'port2.html';
        break;

       
        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});