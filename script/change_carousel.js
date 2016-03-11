var startItem = 1;
var startItem1 = 1;
var startItem2 = 1;
var scrollNum = 5;

(function() {
	changeCarousel();
})()

function changeCarousel(para,group) {
	$("#carouselArea"+group+" div.item").css("display","none");
	if (group == '01'){
		if (para == 'back') {
			startItem1 -= scrollNum;
		} else if (para == 'next'){
			startItem1 += scrollNum;
		}
		startItem = startItem1;
	} else if (group == '02') {
		if (para == 'back') {
			startItem2 -= scrollNum;
		} else if (para == 'next'){
			startItem2 += scrollNum;
		}
		startItem = startItem2;
	}
	var nextNum = "#carouselArea"+group+" div.item" + (scrollNum + startItem);
	if ($(nextNum).size() > 0) {
		$("#carouselArea"+group+"Next a").css("display","block");
	} else {
		$("#carouselArea"+group+"Next a").css("display","none");
	}
	var backNum = "#carouselArea"+group+" div.item" + (startItem - scrollNum);
	if ($(backNum).size() > 0) {
		$("#carouselArea"+group+"Back a").css("display","block");
	} else {
		$("#carouselArea"+group+"Back a").css("display","none");
	}
	for (var i=0; i < scrollNum; i++) {
		var className = "#carouselArea"+group+" div.item" + (i + startItem);
		if ($(className)) {
			$(className).css("display","block");
		}
	}
	
}


function windowOpenCarouselPopup(url){
	window.open(url,'carouselPopup','width=705,height=650,toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=yes').focus();
}