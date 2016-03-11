var uacheck = 0;
var userAgent = window.navigator.userAgent.toLowerCase();
var appVersion = window.navigator.appVersion.toLowerCase();

if (userAgent.indexOf('msie') != -1) {
	if (appVersion.indexOf("msie 6.") != -1) {
		uacheck = 1;
	}else if (appVersion.indexOf("msie 7.") != -1) {
		uacheck = 1;
	}
}

if (uacheck == 0){
$(function() {
@@$(".lineup-itembox").tile(4);
});


(function($) {
	$.fn.tile = function(columns) {
	var tiles, $tile, max, c, h, s, remove, a = ["height"],
	last = this.length - 1;
	if(!columns) columns = this.length;
		s = document.body.style;
		remove = s.removeProperty ? s.removeProperty : s.removeAttribute;
		return this.each(function() {
			remove.apply(this.style, a);
		}).each(function(i) {
			c = i % columns;
			if(c == 0) tiles = [];
			$tile = tiles[c] = $(this);
			h = ($tile.css("box-sizing") == "border-box") ? $tile.outerHeight() : $tile.innerHeight();
			if(c == 0 || h > max) max = h;
			if(i == last || c == columns - 1) {
			$.each(tiles, function() { this.css("height", max); });
		}
	});
};
})(jQuery);
}



