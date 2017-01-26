$(document).ready(function($) {

// site preloader -- also uncomment the div in the header and the css style for #preloader

	$('#preloader').fadeOut('slow',function() {
    $(this).remove();
  }
);

//Print First instance of copyP and titleP

$('.titlep').text("testing");
$('.copyContentp').text("testing");


//Slideshow Init
  $('.slideshow').slick({
    //setting-name: setting-value
    prevArrow: $('.prev'),
      nextArrow: $('.next'),
      infinite: true,
      speed: 900,
  });

// Display Slide Id's

var checkCurrent;

  $('.slick-slide').siblings().each(function() {
  var slide = $(this).attr('data-slick-index');
     console.log("click: " + slide);
   });

// Check which slide ID is active

$('.prev').click(function(e) {
   checkCurrent = $('.slick-current').attr('data-slick-index');
   console.log("Current Slide: " + checkCurrent);
   printText();
 });

 $('.next').click(function(e) {
   checkCurrent = $('.slick-current').attr('data-slick-index');
    console.log("Current Slide: " + checkCurrent);
    printText();
  });


// Alter HTML
// switch case this sucka
var printText = function () {
  console.log('working');
  console.log(checkCurrent);
	checkCurrent = parseInt(checkCurrent);
  if (checkCurrent === 0) {
		// Client: Nature To Nurture
    $('.titlep').text("Client: Nature To Nurture");
    $('.copyContentp').text("Logo and web layout design");
		$('.website').text("nature-to-nurture.co.uk");
  } else  if (checkCurrent === 1) {
		//Client: Merkaba
      $('.titlep').text("Client: Merkaba");
      $('.copyContentp').text("Web layout design");
				$('.website').text("Merkabacommunity.com");
    } else  if (checkCurrent === 2) {
			//Client: Maxis Bracknell Maps
        $('.titlep').text("Client: Maxis Bracknell Maps");
        $('.copyContentp').text("Left: Schematic map of main road links into greater london. Right: Location map of Bracknell");
      } else  if (checkCurrent === 3) {
				//Client: Thames Tower Map
          $('.titlep').text("Client: Thames Tower Map");
          $('.copyContentp').text("Styled location map of Reading");
        } else  if (checkCurrent === 4) {
					//Client:  The Fruit & Wool Exchange
            $('.titlep').text("Client:  The Fruit & Wool Exchange");
            $('.copyContentp').text("Image montaget");
          } else  if (checkCurrent === 5) {
						//Client:  The Fruit & Wool Exchange
              $('.titlep').text("Client:  The Fruit & Wool Exchange");
              $('.copyContentp').text("Map design and architectural elevation artwork");
            } else  if (checkCurrent === 6) {
							//Client:  The Fruit & Wool Exchange
                $('.titlep').text("Client:  The Fruit & Wool Exchange");
                $('.copyContentp').text("Architectural floorplan artwork.Redrawn and styled floorplans.");

              } else  if (checkCurrent === 7) {
								//Client: Walter House & 50 Bedford Street
                  $('.titlep').text("Client: Walter House & 50 Bedford Street");
                  $('.copyContentp').text("Artworked, styled and stacked Architectural floorplans.");
                } else  if (checkCurrent === 8) {
									//Client: Focused Landscaping
                    $('.titlep').text("Client: Focused Landscaping");
                    $('.copyContentp').text("Logo design");
                  } else  if (checkCurrent === 9) {
										//The Rising Sun, Berkhamsted
                      $('.titlep').text("The Rising Sun, Berkhamsted");
                      $('.copyContentp').text("Beer & Cider festival poster");
                    }  else  if (checkCurrent === 10) {
											//The Rising Sun, Berkhamsted
	                      $('.titlep').text("Client: The Hideout");
	                      $('.copyContentp').text("In need of a cool and contemporary brand to suit their stylish sell-out events, The Hideout pop-up restaurant requested marketing materials that would represent their up-to-date attitude to hosting and catering events.");
	                    }
}


});
