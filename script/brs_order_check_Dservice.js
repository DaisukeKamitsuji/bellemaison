$(function(){

//----- box3　ds-select内のラジオボタン非活性化
	$('#brs .box3 .ds-select input').attr('disabled',true);

	if($(".box3 .deliver-info .check-box-dl input")[0])
		{
		//----- おまとめ配送の<dl>が存在する場合
			checkBoxChange();//----- まとめ送り以下のdl半透明化
			$('.box3 .deliver-info .check-box-dl input').change(function(){
				checkBoxChange();//----- まとめ送り解除のチェックボックスに変化があった時の処理
			});
		}else{
		//----- おまとめ配送の<dl>が存在しない場合
			//----- 一番最初の有効なラジオボタンにチェック
			$('.box3 .deliver-info > dl:not(".check-box-dl")').each(function(){
				if($(this).hasClass('ds-select') == false)
					{
						$(this).find('input:radio').attr('checked','true');
						return false;
					}
			});
			selectChange();
	}

//----- ラジオボタンの変化でセレクトボックスを制御
		$('.box3 .deliver-info > dl input:radio').change(function(){
			selectChange();//----- ラジオボタンに変化があった時の処理
		});

});//startFunction[END]


//----- まとめ送り解除のチェックボックスに変化があった時の処理
function checkBoxChange(){
	var checkBtn = $('#brs .box3 .check-box-dl input');
	var checkNextDl = checkBtn.closest('dl').nextAll('dl');

	if(checkBtn.is(':checked'))
		{
		//選択された場合
			checkNextDl.each(function(){
				$(this).removeClass('clear-dl');
				if($(this).hasClass('ds-select'))
					{
						$(this).find('input').attr('disabled','true');
					}else{
						$(this).find('input').removeAttr('disabled');
					}
				});
		}else{
		//未選択の場合
			checkNextDl.addClass('clear-dl');
			//----- 半透明化されたdl内のinputを無効化
			checkNextDl.find('input').attr('disabled',true);
			//----- 一番上のラジオボタンをチェック
			checkFstDl();
			//----- 未選択dlのセレクトボックスリセット
			selectChange();
		}
}

//----- 一番上の<dl>用設定
function checkFstDl(){
	if($('.box3 .deliver-info > dl:first-child').hasClass('ds-select'))
		{
		//一番上のdlが有効でない場合、すべてのラジオボタンを無効に
			$('.box3 .deliver-info > dl input:radio').each(function(){
				$(this).attr('disabled',true).attr('checked',false);
			});
		}else{
		//一番上のdlが有効な場合はそのラジオボタンにチェック
			$('.box3 .deliver-info > dl:first-child').find('dt input:radio').attr('checked',true);
			$('.box3 .deliver-info > dl:first-child').find('dd select').removeAttr('disabled');
	}
}

//----- セレクトボックス活性・非活性
function selectChange(){
	var radioBtn = $('.box3 .deliver-info > dl input:radio');

	radioBtn.each(function(){
		if($(this).is(':checked'))
			{
			//チェックの入っているセレクトボックスを有効化
				$(this).closest('dt').next('dd').find('select').removeAttr('disabled');
			}else{
			//チェックの入っているセレクトボックスを無効化し一番上のオプションを選択状態へ
				$(this).closest('dt').next('dd').find('select').attr('disabled',true);
				$(this).closest('dt').next('dd').find('select option:first-child').attr('selected',true);
			}
	});
}