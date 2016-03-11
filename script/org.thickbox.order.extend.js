/* 
 * org.thickbox.order.jsはライブラリ扱いとしているため、基本的には変更を行えない。
 * そのため、org.thickbox.order.jsに関連する機能の追加等はこのファイルに記述する。
 * jspではorg.thickbox.order.jsと当ファイルへの参照を追加して使用する。
 */
// ライトボックスまたはポップアップ表示したウィンドウを閉じる
function tb_GenericClose(){
	if (parent.document.getElementById("TB_window") != null) {
		parent.tb_remove();
	} else {
		close();
	}
}
