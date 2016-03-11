var userAgent = window.navigator.userAgent.toLowerCase();
	
$(function(){
	var objmessa = $('.cartMessage');
	var objarea = $('.messageArea')
	objmessa.hide();
		
	function makeArea() {
		objarea.eq(0).animate({
			height : "15px"
		}, "slow", "swing");			
	}

	function makeArea01() {
		objarea.eq(1).animate({
			height : "15px"
		}, "slow", "swing");			
	}
	if (userAgent.indexOf('msie') != -1) {
		if(document.compatMode==='BackCompat'){
			$('.orderStep .orderClick').click(function(){
				objarea.eq(0).animate({
					height : "15px"
				}, "slow", "swing");							
				setTimeout(function(){
					objmessa.eq(0).show();
				}, 800);
			});
		} else {
			$('.orderStep .orderClick').click(function(){
				makeArea()
				setTimeout(function(){
					objmessa.eq(0).show();
				}, 800);
			});
		}
	} else {
		$('.orderStep .orderClick').click(function(){
			makeArea()
			setTimeout(function(){
				objmessa.eq(0).show();
			}, 800);
		});
	}


	if (userAgent.indexOf('msie') != -1) {
		if(document.compatMode==='BackCompat'){
			$('.fixtotalMoney .orderClick02').click(function(){
				var fixed = $(".fixorderStep");
				var inheight = $(window).height();
				var selfheight = fixed.height();
				var intscroll = $(window).scrollTop();
				var intfixposi = inheight - selfheight +intscroll;
				fixed.animate({
					top: intfixposi-10
				}, 100);
				objarea.eq(1).animate({
					height : "15px"
				}, "slow", "swing");											
				setTimeout(function(){
					objmessa.eq(1).show();
				}, 800);
			});
		} else {
			$('.fixtotalMoney .orderClick02').click(function(){
				makeArea01()
				setTimeout(function(){
					objmessa.eq(1).show();
				}, 800);
			});			
		}
	} else {
		$('.fixtotalMoney .orderClick02').click(function(){
			makeArea01()
			setTimeout(function(){
				objmessa.eq(1).show();
			}, 800);
		});
	}
});
