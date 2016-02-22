

$( "#search-bethnal-tube" ).on( "click", function() {
  // api request to be sent on button click

$.getJSON("https://api.tfl.gov.uk/Line/central/Arrivals/940GZZLUBLG?direction=inbound&app_id=&app_key=", function(data) {
    
    // function
    console.log(data);
    var items = [];
    
    data.map(function(arrival) {
        
        var name = arrival.destinationName;
        var time = moment().add(arrival.timeToStation, 'seconds').fromNow();
        
        console.log(arrival);
        console.log(arrival.destinationName);
        console.log(moment().add(arrival.timeToStation, 'seconds').fromNow());
         $('#resultsName').append("<p class='name'>" + name + "</p>");
        $('#resultsTime').append("<p class='time'>" + time + "</p>");
    });
    
 
});
});


/*
$( "#search" ).on( "click", function() {
  // api request to be sent on button click

$.getJSON("https://api.tfl.gov.uk/journey/journeyresults/bethnal%20green%20underground%20station/to/bank%20underground%20station", function(data) {
    
        data.map(function(journey) {
        
        var a = journey.legs.departurePoint.commonName;
        var b = journey.legs.arrivalPoint.commonName;
        var duration = journey.duration;
        var departure = journey.legs.departureTime;
        var arrival = journey.legs.arrivalTime;
        
            console.log(name);
            console.log(a);
            console.log(b);
            console.log(duration);
            console.log(departure);
            console.log(arrival);
            
            });
});
});
    
   
  */
    