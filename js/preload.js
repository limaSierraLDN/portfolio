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

		img1.src = "images/Work/largeJpegs/fruitAndCoverCollageSpread.jpg";
        img2.src = "images/Work/largeJpegs/fruitAndWoolCover.jpg";
        img3.src = "images/Work/largeJpegs/fruitAndWoolMapSpread.jpg";
        img4.src = "images/Work/largeJpegs/fruitAndWoolPlanSpread.jpg";
        img5.src = "images/Work/largeJpegs/happyLarge.jpg";
        img6.src = "images/Work/largeJpegs/hideoutFlyerLarge.jpg";
        img7.src = "images/Work/largeJpegs/hideoutMenuLarge.jpg";
        img8.src = "images/Work/largeJpegs/maxisFrontCoverLarge.jpg";
        img9.src = "images/Work/largeJpegs/maxisMapsVisualLarge.jpg";
        img10.src = "images/Work/largeJpegs/nature2NurtureAbout.jpg";
        img11.src = "images/Work/largeJpegs/nature2NurtureHome.jpg";
        img12.src = "images/Work/largeJpegs/oneValpyCover.jpg";
        img13.src = "images/Work/largeJpegs/oneValpyMapSpread.jpg";
        img14.src = "images/Work/largeJpegs/oneValpyplansSpread.jpg";
        img15.src = "images/Work/largeJpegs/tTFrontCover.jpg";
        img16.src = "images/Work/largeJpegs/tTSpread.jpg";
        img17.src = "images/Work/largeJpegs/walterHouseCoverLarge.jpg";
        img18.src = "images/Work/largeJpegs/walterHouseSpreadLarge.jpg";
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

