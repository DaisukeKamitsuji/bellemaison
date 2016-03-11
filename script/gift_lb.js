/* 
 * org.thickbox.order.jsはライブラリ扱いとしているため、基本的には変更を行えない。
 * そのため、org.thickbox.order.jsに関連する機能の追加等はこのファイルに記述する。
 * jspではorg.thickbox.order.jsと当ファイルへの参照を追加して使用する。
 */
// ライトボックスまたはポップアップ表示したウィンドウを閉じる
function winClose(){
	if (parent.document.getElementById("TB_window") != null) {
		var linkObj = parent.document.getElementsByTagName('Select');
		for (var i=0; i<linkObj.length; i++) {
			linkObj[i].disabled = false;
		}
		var iframe = parent.document.getElementById("TB_window");
		iframe.style.position = "";
		parent.scrollTo(0,parent.document.form01.SCROLL_TOP.value);
	}
	tb_GenericClose();
}

//ライトボックスの画面サイズ変更および表示位置を絶対位置に指定
function resizeIframe() {
	if (parent.document.getElementById("TB_window") != null) {
		//スクロールを含む画面の高さを取得
		var height = document.body.scrollHeight;
		//表示しているライトボックスの高さを取得
		var iframeContent = parent.document.getElementById("TB_iframeContent");
		var iframHeight = iframeContent.style.height;
		var iframe = parent.document.getElementById("TB_window");
		if(iframHeight.length>2){ 
			//ライトボックスの高さよりも（ライトボックス内の）画面の高さの方が大きい場合
			if(height>iframHeight.slice(0, -2)){
				iframeContent.style.height = height+'px';
			}
			if (parent.document.form01.MARGIN_TOP.value == "") {
				var scrollTopValue = parent.document.form01.SCROLL_TOP.value;
				var marginTopValue = iframe.style.marginTop;
				if(marginTopValue.length>2){
					marginTopValue = parseInt(marginTopValue.slice(0, -2),10);
					scrollTopValue = parseInt(scrollTopValue,10);
					//ライトボックスの表示位置を指定
					var mTop = scrollTopValue+marginTopValue+60;
					iframe.style.marginTop = mTop+'px';
					parent.document.form01.MARGIN_TOP.value = mTop;
				}
			}
			//ライトボックスの表示位置を固定
			iframe.style.position = "absolute";
		}
	}
}