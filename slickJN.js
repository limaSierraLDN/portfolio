$(document).ready(function($) {

// site preloader -- also uncomment the div in the header and the css style for #preloader

	/*$('#preloader').fadeOut('slow',function() {
    $(this).remove();
  }
);*/

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
    $('.titlep').text("testing");
    $('.copyContentp').text("testing");
  } else  if (checkCurrent === 1) {
      $('.titlep').text("ffff");
      $('.copyContentp').text("testing");
    } else  if (checkCurrent === 2) {
        $('.titlep').text("testiaaaang");
        $('.copyContentp').text("testing");
      } else  if (checkCurrent === 3) {
          $('.titlep').text("aaaww");
          $('.copyContentp').text("testing");
        } else  if (checkCurrent === 4) {
            $('.titlep').text("fghyjy");
            $('.copyContentp').text("testing");
          } else  if (checkCurrent === 5) {
              $('.titlep').text("testing");
              $('.copyContentp').text("testing");
            } else  if (checkCurrent === 6) {
                $('.titlep').text("fffff");
                $('.copyContentp').text("testing");
              } else  if (checkCurrent === 7) {
                  $('.titlep').text("testing");
                  $('.copyContentp').text("testing");
                } else  if (checkCurrent === 8) {
                    $('.titlep').text("testing");
                    $('.copyContentp').text("testing");
                  } else  if (checkCurrent === 9) {
                      $('.titlep').text("testing");
                      $('.copyContentp').text("testing");
                    }
}


});
