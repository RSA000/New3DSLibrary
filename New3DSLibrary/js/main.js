
/* Not sure, could be special cases for button pressing */
/*
var control = function(ev) {
	switch(ev.which) {
		case 13: alert("A"); break;
		case 37: alert("left"); break;
		case 38: alert("up"); break;
		case 39: alert("right"); break;
		case 40: alert("down"); break;
	}
};
*/


(function(){
	/*The DEFAULT variable is displayed when no menu items on the lower screen are hovered over. */
	var DEFAULT = 'img/MainMenu.jpg';
	
	/*This function continuously scrolls the screen to the 40,215 coordinates */
	var center = function(){
		/* Coordinates to set to */
		window.scrollTo(40, 215);
	};
	
	/* Not sure */
	var init = function(anchors) {
		var link;
		for(var i = 0, l = anchors.length; i<l; i++){
			link = anchors[i].href;
			anchors[i].style.background = "url("+link+")";
		}
	};
	
	/* Not sure */
	var active = function(ev) {
		var top = document.getElementById("top");
		var value = this.style.background;
		top.style.background = value;
	};
	
	/* Not sure */
	var inactive = function(ev) {
		var top = document.getElementById("top");
		top.style.background = "url("+DEFAULT+")";
	};

	/* Not familiar with syntax, displays image on hover */
	document.addEventListener('DOMContentLoaded', function(ev) {
		setInterval(center, 42);
		var anchors = this.querySelectorAll("#bottom a[href$='.jpg']");
		init(anchors);
		inactive();
		for(var i = 0, l = anchors.length; i<l; i++){
			anchors[i].addEventListener('focus', active, false);
			anchors[i].addEventListener('blur', inactive, false);
		}
	}, false);

	/* Same as previous chunk of code, but for mpo */
	document.addEventListener('DOMContentLoaded', function(ev) {
		setInterval(center, 42);
		var anchors = this.querySelectorAll("#bottom a[href$='.mpo']");
		init(anchors);
		inactive();
		for(var i = 0, l = anchors.length; i<l; i++){
			anchors[i].addEventListener('focus', active, false);
			anchors[i].addEventListener('blur', inactive, false);
		}
	}, false);

})()
