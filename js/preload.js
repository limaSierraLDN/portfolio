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
		var img19 = new Image();
		var img20 = new Image();
		var img21 = new Image();
		var img22 = new Image();



		img1.src = "images/ImagesSmall/Fruit-&-Wool-Collage-Spread.jpg";
		img20.src = "images/ImagesSmall/Fruit-&-Wool-Front-Cover.jpg";
		img21.src = "images/ImagesSmall/Fruit-&-Wool-Map-Spread.jpg";
		img22.src = "images/ImagesSmall/Fruit-&-Wool-Plan-Spread.jpg";

    img2.src = "images/ImagesSmall/Focused.jpg";


    img3.src = "images/ImagesSmall/The-Rising-Sun-Happy-Poster.jpg";

    img4.src = "images/ImagesSmall/The-Hideout-pop-up.jpg";

    img7.src = "images/ImagesSmall/Maxis-Front-Cover.jpg";
    img8.src = "images/ImagesSmall/Maxis-Map-Spread.jpg";

    img9.src = "images/ImagesSmall/Nature-2-Nurture-Home.jpg";
    img10.src = "images/ImagesSmall/Nature-2-Nurture-About.jpg";

    img11.src = "images/ImagesSmall/One-Valpy-Map-Spread.jpg";
    img12.src = "images/ImagesSmall/One-Valpy-plans-Spread.jpg";
    img13.src = "images/ImagesSmall/Merkaba-Gallery.jpg";

    img14.src = "images/ImagesSmall/Thames-Tower-Cover.jpg";
    img15.src = "images/ImagesSmall/Thames-Tower-Spread.jpg";
    img17.src = "images/ImagesSmall/Walter-House-Cover.jpg";
    img18.src = "images/ImagesSmall/Walter-House-Spread.jpg";

		img19.src = "images/ImagesSmall/Merkaba-Home.jpg";


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
