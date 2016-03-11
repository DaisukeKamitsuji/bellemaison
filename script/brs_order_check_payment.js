$(function(){
//----- 141001 追記
//----- 一番右のメニューにクラス追加
	$('.box1 .select-pay-method li:nth-child(5n)').each( function(){
		$(this).find('.al-l').removeClass('al-l').addClass('al-r');
	});
//----- 141001 追記

//----- チェックされたリストの色変更
	$('.box1 .select-pay-method li input:checked').parents('li').addClass('checked');
	changePage();//選択されているリストに該当する下部ページを表示
	$('.box1 .select-pay-method .ds-checked').find('input').attr('disabled', true);

	$('.box1 .select-pay-method li.ds-checked .paym-ttl').hover(
		function(){ $(this).siblings().css('display','block'); },
		function(){ $(this).siblings().css('display','none'); }
	);

	$('.box1 .select-pay-method li').not('li.ds-checked').find('input:radio').change(function(){
		$('.box1 .select-pay-method li')
			.each(function(){ $(this).removeClass('checked'); });
		$(this).parents('li').addClass('checked');
		//----- box1ページ切り替え
		$('.pays').each(function(){ $(this).css('display','none'); });
		changePage();
	});

});//startFunction[END]

function changePage(){
	if($('.checked').hasClass('pay0')){
		$('.pays.pay0').css('display','block')
	}else if($('.checked').hasClass('pay1')){
		$('.pays.pay1').css('display','block')
	}else if($('.checked').hasClass('pay2')){
		$('.pays.pay2').css('display','block');
	}else if($('.checked').hasClass('pay3')){
		$('.pays.pay3').css('display','block');
	}else if($('.checked').hasClass('pay4')){
		$('.pays.pay4').css('display','block');
	}else if($('.checked').hasClass('pay5')){
		$('.pays.pay5').css('display','block');
	}else if($('.checked').hasClass('pay6')){
		$('.pays.pay6').css('display','block');
	}else if($('.checked').hasClass('pay7')){
		$('.pays.pay7').css('display','block');
	}else if($('.checked').hasClass('pay8')){
		$('.pays.pay8').css('display','block');
	//2014/08/22追記
	}else if($('.checked').hasClass('pay9')){
		$('.pays.pay9').css('display','block');
	//2014/08/22追記
	}
}