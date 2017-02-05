$(document).ready(function($) {

	printText;

// site preloader -- also uncomment the div in the header and the css style for #preloader

	$('#preloader').fadeOut('slow',function() {
    $(this).remove();
		printText();
  }
);



//Print First instance of copyP and titleP
/*
$('.titlep').text("testing");
$('.copyContentp').text("testing");
*/

//Slideshow Init
  $('.slideshow').slick({
    //setting-name: setting-value
    prevArrow: $('.prev'),
      nextArrow: $('.next'),
      infinite: true,
      speed: 900,
			variableWidth: true
  });


// Print

var printText = function () {
	checkCurrent = parseInt(checkCurrent);
  if (checkCurrent === 0) {
	//Client: Focused Landscaping
	$('.titlep').text("Client: Focused Landscaping");
	$('.copyContentp').text("Logo design");
	$('.website').text(" ");
} else  if (checkCurrent === 1) {
	//Client:  The Fruit & Wool Exchange
	$('.titlep').text("Client:  The Fruit & Wool Exchange");
	$('.copyContentp').text("Image montage");
	$('.website').text(" ");
	} else  if (checkCurrent === 2) {
		//Client:  The Fruit & Wool Exchange
		$('.titlep').text("Client:  The Fruit & Wool Exchange");
		$('.copyContentp').text("Image montage");
		$('.website').text(" ");
		} else  if (checkCurrent === 3) {
			//Client:  The Fruit & Wool Exchange
			$('.titlep').text("Client:  The Fruit & Wool Exchange");
			$('.copyContentp').text("Image montage");
			$('.website').text(" ");
			} else  if (checkCurrent === 4) {
				//Client:  The Fruit & Wool Exchange
				$('.titlep').text("Client:  The Fruit & Wool Exchange");
				$('.copyContentp').text("Image montage");
				$('.website').text(" ");
				} else  if (checkCurrent === 5) {
					//Client:  The Fruit & Wool Exchange
						$('.titlep').text("Client:  The Fruit & Wool Exchange");
						$('.copyContentp').text("Map design and architectural elevation artwork");
						$('.website').text(" ");
					} else  if (checkCurrent === 6) {
						//Client:  The Fruit & Wool Exchange
							$('.titlep').text("Client:  The Fruit & Wool Exchange");
							$('.copyContentp').text("Architectural floorplan artwork.Redrawn and styled floorplans.");
							$('.website').text(" ");
						} else  if (checkCurrent === 7) {
							//Client: Merkaba
								$('.titlep').text("Client: Merkaba");
								$('.copyContentp').text("Web layout design");
								$('.website').text("Merkabacommunity.com");
							} else  if (checkCurrent === 8) {
								//Client: Merkaba
									$('.titlep').text("Client: Merkaba");
									$('.copyContentp').text("Web layout design");
									$('.website').text("Merkabacommunity.com");
								} else  if (checkCurrent === 9) {
									// Client: Nature To Nurture
									$('.titlep').text("Client: Nature To Nurture");
									$('.copyContentp').text("Logo and web layout design");
									$('.website').text("nature-to-nurture.co.uk");
									}  else  if (checkCurrent === 10) {
										// Client: Nature To Nurture
										$('.titlep').text("Client: Nature To Nurture");
										$('.copyContentp').text("Logo and web layout design");
										$('.website').text("nature-to-nurture.co.uk");
										} else if (checkCurrent == 11 ) {
											//One Valpy Cover
												$('.titlep').text("Client: One Valpy");
												$('.copyContentp').text(" ");
												$('.website').text(" ");
										}
										else if (checkCurrent == 12 ) {
											//One Valpy Cover
												$('.titlep').text("Client: One Valpy");
												$('.copyContentp').text("Map Design");
												$('.website').text(" ");
										}
										else if (checkCurrent == 13 ) {
											//One Valpy Cover
												$('.titlep').text("Client: One Valpy");
												$('.copyContentp').text("Artworked, styled and stacked Architectural floorplans.");
												$('.website').text(" ");
										}else if (checkCurrent == 14) {
											//One Valpy Map
												$('.titlep').text("Client: Thames Tower Map");
												$('.copyContentp').text("Styled location map of Reading");
												$('.website').text(" ");
										} else if (checkCurrent == 15) {
										  //One Valpy Artwork
											$('.titlep').text("Client: The Hideout");
											$('.copyContentp').text("In need of a cool and contemporary brand to suit their stylish sell-out events, The Hideout pop-up restaurant requested marketing materials that would represent their up-to-date attitude to hosting and catering events.");
											$('.website').text(" ");
									} else if (checkCurrent == 16) {
										//The Rising Sun, Berkhamsted
											$('.titlep').text("The Rising Sun, Berkhamsted");
											$('.copyContentp').text("Beer & Cider festival poster");
										  $('.website').text(" ");
								} else if (checkCurrent == 17)  {
										//One Valpy Cover
											$('.titlep').text("Client: Walter House & 50 Bedford Street");
											$('.copyContentp').text("Artworked, styled and stacked Architectural floorplans.");
											$('.website').text(" ");
									} else if (checkCurrent == 18)  {
											//One Valpy Cover
												$('.titlep').text("Client: Walter House & 50 Bedford Street");
												$('.copyContentp').text("Artworked, styled and stacked Architectural floorplans.");
												$('.website').text(" ");
										}
									}





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


	$(document).keydown(function(e) {
	    switch(e.which) {
	        case 37: // left
					$('.slideshow').slick('slickPrev');
					printText();
	        break;

	        case 38: // up
	        break;

	        case 39: // right
					$('.slideshow').slick('slickNext');
						printText();
	        break;

	        case 40: // down
	        break;

	        default: return; // exit this handler for other keys
	    }
	    e.preventDefault(); // prevent the default action (scroll / move caret)
	});


});
