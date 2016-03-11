$(function(){

//----- 色変更
	$('.box2 .pages li.p-num').click(function(){
		$('.box2 .pages .current').removeClass('current');
		$(this).addClass('current');
	});

});//startFunction[END]