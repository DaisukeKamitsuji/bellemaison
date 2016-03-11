$(function(){
/*------------------------------------------------------------------
	start_function
------------------------------------------------------------------*/
/*-------- スムーススクロール --------*/
	$('a[href^=#]').click(function(){
		var speed = 500;
		var href = $(this).attr("href");
		var target = $(href == "" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});

/*-------- 各値取得 --------*/
	var winH = $(window).height();
	lastBtnPosi = $('div.box-decided-btn').offset().top;
	btnBtm = $('#box-amount .btn-orange, #box-amount .order-apply').offset().top + 80 ;

/*-------- 確定ボタンboxとfixedbox用設定 --------*/
	$(window).scroll(function(){
		scrPosition = $(document).scrollTop();
		winPosi = winH + scrPosition ;
		fixedBox();
	});

	$(window).resize(function(){
		winH = $(window).height();
	});

/*-------- 適用ボタンの表示切り替え--------*/
//----- ポイント利用
if( $('.t-box input:radio').is(':checked') ){
	$('#point-amount').removeAttr('disabled').focus(function(){
		$(this).closest('div').nextAll('.sub-blue').removeClass('ds');
		var pt_button = document.getElementById("pt_button");
		pt_button.setAttribute( "href", "javascript:retBack('dTkyPoint')" ) ;
		});
	}else{
		$('#point-amount').attr('disabled','true');
	}

	$('input[name="BM_PNT_SY_SITE"]:radio').change(function(){
		$(this).closest('div').nextAll('.sub-blue').removeClass('ds');
		var pt_button = document.getElementById("pt_button");
		pt_button.setAttribute( "href", "javascript:retBack('dTkyPoint')" ) ;

		if( $('.t-box input:radio').is(':checked') ){
			$('#point-amount').removeAttr('disabled');

		}else{
			$('#point-amount').attr('disabled','true');
		}

	});


//----- クーポン
	if( $('.able input:radio').is(':checked') ){
		$('#cp-amount').removeAttr('disabled').focus(function(){
			$(this).closest('ul').nextAll('.sub-blue').removeClass('ds');
			var cp_button = document.getElementById("cp_button");
			cp_button.setAttribute( "href", "javascript:retBack('dTkyCoupon')" ) ;
		});
	}else{
		$('#cp-amount').attr('disabled','true');
	}

	$('input[name="CPN_RY_KBN"]').change(function(){
		$(this).closest('ul').nextAll('.sub-blue').removeClass('ds');
		var cp_button = document.getElementById("cp_button");
		cp_button.setAttribute( "href", "javascript:retBack('dTkyCoupon')" ) ;

		if( $('.able input:radio').is(':checked') ){
			$('#cp-amount').removeAttr('disabled');

		}else{
			$('#cp-amount').attr('disabled','true');
		}
	});

//----- お買物券
		$('#buy-ticket-target input').click(function(){
			$(this).closest('dl').nextAll('.sub-blue').removeClass('ds');
		});


});
/*-----------------------------------------end_start_function--------------------------------------*/


//----- 下部確定ボタン
var lastBtnPosi ;
var winPosi;
var scrPosition ;
var btnBtm;

function fixedBox(){
	if(btnBtm < scrPosition && winPosi <= lastBtnPosi){
		$('.box-fixed').fadeIn(300);
	}else{
		$('.box-fixed').fadeOut(300);
	}
}

//----- ポイント利用部分のテキストボックス操作
function tboxChange(){

}
