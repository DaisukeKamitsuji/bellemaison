var tb_pathToImage = "/pc/for_app/img/gift/loading.gif";

//画面のスクロール
function moveTo(intnum,gmnkbn){
	var gmnId = "";
	if(gmnkbn =="3"){
		gmnId = "okr_ns";
	}else if(gmnkbn =="2"){
		gmnId = "dkn_ctlg";
	}else if(gmnkbn =="1"){
		gmnId = "hs_group";
	}
	var targetOffset = $('#'+gmnId+intnum).offset().top;
	$('html,body').delay(1000).animate({scrollTop: targetOffset}, "slow");
}
// 設定できない入力項目の値をクリアする処理
function setDisableValues() {
	// 連番なしでのし選択のブロックが取得できた場合はEPJB0077からの呼び出しと判定、以降は連番なしで処理
	var elementGftYtKbnBln = document.getElementById("GFT_YT_KBN_BLN");
	if (elementGftYtKbnBln != null) {
		// インデックス指定なしで処理
		setDisableValuesByIndex("");
	}
	else {
		// 連番の最大値は、『のし選択』の表示ブロックの数を使用する
		var maxIdx = document.getElementsByName("GFT_YT_KBN_BLN").length;
		// 連番の数だけループ
		for (var idx = 0; idx < maxIdx; idx ++) {
			setDisableValuesByIndex(idx);
		}
	}
}
// 指定位置のギフト設定を初期化する
function setDisableValuesByIndex(idx) {
	// のし設定
	var elementNoshiSetGif = document.getElementById("noshi-set-gft" + idx);
	if (elementNoshiSetGif !=null && elementNoshiSetGif.style.display == "none") {
		// のしがけ
		document.getElementById("NSGK_SELCF" + idx).value = "0";
		// のし表書き内容
		document.getElementById("NS_HS_KNY_CD" + idx).value = "";
		// のし表書き名
		//   個人・連名
		document.getElementById("NSGK_KJ_VC" + idx).value = "";
		//   夫婦家族連名(姓)
		document.getElementById("KZK_RNM_SEI_KJ_VC" + idx).value = "";
		//   夫婦家族連名(名)
		document.getElementById("KZK_RNM_MEI_KJ_VC" + idx).value = "";
		// 水引き
		document.getElementById("NS_SHR_KBN" + idx).value = "";
		// のし表書き(入力)
		document.getElementById("NS_CONTENTS_OTH" + idx).value = "";
	}
	
	// 命名カード
	var elementMeimeiCard = document.getElementById("meimei-card" + idx);
	if (elementMeimeiCard !=null && elementMeimeiCard.style.display == "none") {
		// 命名カード台紙
		document.getElementById("MSCRD_SBT_MEMEI" + idx).value = "";
		// 命名カード(お名前)
		document.getElementById("MEMEI_CRD_KJ" + idx).value = "";
		// 命名カード(ふりがな)
		document.getElementById("MEMEI_CRD_KN" + idx).value = "";
	}
	
	// のし設定の水引き
	var elementMizSetting = document.getElementById("mizhiki" + idx);
	if (elementMizSetting !=null && elementMizSetting.style.display == "none") {
		// 水引き
		document.getElementById("NS_SHR_KBN" + idx).value = "";
	}
	
	// のし表書き(入力)
	var elementNoshiOther = document.getElementById("noshi-other" + idx);
	if (elementNoshiOther !=null && elementNoshiOther.style.display == "none") {
		// のし表書き(入力)
		document.getElementById("NS_CONTENTS_OTH" + idx).value = "";
	}
	
	// ラッピング
	var elementRapGftNoset = document.getElementById("rap-gft-noset" + idx);
	var elementRapGftSetting = document.getElementById("rap-gft-setting" + idx);
	if ((elementRapGftNoset !=null && elementRapGftNoset.style.display == "none") 
		&& (elementRapGftSetting !=null && elementRapGftSetting.style.display == "none")) {
		// ラッピング
		document.getElementById("SIN_RAP_KBN_RAP" + idx).value = "";
	}
	
	// 包装紙
	var elementRapHsNoset = document.getElementById("rap-hs-noset" + idx);
	var elementRapHsSetting = document.getElementById("rap-hs-setting" + idx);
	if ((elementRapHsNoset !=null && elementRapHsNoset.style.display == "none") 
		&& (elementRapHsSetting !=null && elementRapHsSetting.style.display == "none")) {
		// 包装
		document.getElementById("SIN_RAP_KBN_HS" + idx).value = "";
	}

	// メッセージカード
	var elementMessageNone = document.getElementById("message-none" + idx);
	var elementMessageTeik = document.getElementById("message-teik" + idx);
	var elementMessageFree = document.getElementById("message-free" + idx);
	if (elementMessageNone != null && elementMessageTeik != null && elementMessageFree != null) {
		// 定型カードが選ばれていない場合
		if (elementMessageTeik != null && elementMessageTeik.style.display == "none") {
			document.getElementById("MSCRD_SBT_TEKEI" + idx).value = "";
		}
		// フリーメッセージが選ばれていない場合
		if (elementMessageFree != null && elementMessageFree.style.display == "none") {
			// メッセージ台紙
			document.getElementById("MSCRD_SBT_DAIS" + idx).value = "";
			// メッセージ例文
			document.getElementById("MSG_RBN_BNRI_CD" + idx).value = "";
			// フォント種別
			document.getElementById("FNT_SBT" + idx).value = "";
			// メッセージ１～８
			document.getElementById("MSG1" + idx).value = "";
			document.getElementById("MSG2" + idx).value = "";
			document.getElementById("MSG3" + idx).value = "";
			document.getElementById("MSG4" + idx).value = "";
			document.getElementById("MSG5" + idx).value = "";
			document.getElementById("MSG6" + idx).value = "";
			document.getElementById("MSG7" + idx).value = "";
			document.getElementById("MSG8" + idx).value = "";
		}
		if (elementMessageNone.style.display == "none" && elementMessageTeik.style.display == "none" && elementMessageFree.style.display == "none") {
			document.getElementById("radio"+idx+"-011").checked = true;
			document.getElementById("radio"+idx+"-021").checked = false;
			document.getElementById("radio"+idx+"-031").checked = false;
			document.getElementById("MSCRD" + idx).value='1';
		}
	}
}

// ライトボックスを閉じた後に元のスクロール位置に戻すため、現在のスクロール位置を取得
function getScroll(){
	var scroll = $(document).scrollTop();
    document.form01.SCROLL_TOP.value = scroll;
}
