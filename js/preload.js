function preloader() {
	if (document.images) {
		var img1 = new Image();
		var img2 = new Image();
		var img3 = new Image();
    var img4 = new Image();
    var img5 = new Image();
    var img6 = new Image();
    var img7 = new Image();
    var img8 = new Image();
    var img9 = new Image();
    var img10 = new Image();
    var img11 = new Image();
    var img12 = new Image();
    var img13 = new Image();
    var img14 = new Image();
    var img15 = new Image();
    var img16 = new Image();
    var img17 = new Image();
    var img18 = new Image();

		img1.src = "images/Work/imagesSmall/CollageSpread.png";
    img2.src = "images/Work/imagesSmall/Focused.png";
    img3.src = "images/Work/imagesSmall/HappyPoster.png";
    img4.src = "images/Work/imagesSmall/HideoutFlyer.png";
    img5.src = "images/Work/imagesSmall/HideoutMenu.png";
    img6.src = "images/Work/imagesSmall/HideoutMenu.png";
    img7.src = "images/Work/imagesSmall/MaxisFrontCover.png";
    img8.src = "images/Work/imagesSmall/MaxisSpread.png";
    img9.src = "images/Work/imagesSmall/Nature2NurtureAbout.png";
    img10.src = "images/Work/imagesSmall/OneValpyCover.png";
    img11.src = "images/Work/imagesSmall/OneValpyMapSpread.png";
    img12.src = "images/Work/imagesSmall/OneValpyPlansSpread.png";
    img13.src = "images/Work/imagesSmall/PlanSpread.png";
    img14.src = "images/Work/imagesSmall/TTSpread.png";
    img15.src = "images/Work/imagesSmall/TTFrontCover.png";
    img17.src = "images/Work/imagesSmall/WalterHouseCover.png";
    img18.src = "images/Work/imagesSmall/WalterHouseSpread.png";
	}
}
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}
addLoadEvent(preloader);
