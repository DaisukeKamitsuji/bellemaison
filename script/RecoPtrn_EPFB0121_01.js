// 名前空間の定義
var RecoPtrn_pc_EPFB0121_nsz1 = function(){};

// レコメンド結果をJSONP形式で受け取る際のコールバック関数
//	 [引数]	  data： 返却されたXMLデータ
//	 [返り値] なし
RecoPtrn_pc_EPFB0121_nsz1.setRecommendItems = function(data) {

// 2015.07.21 update AMS start
	var div = document.getElementById("recommender_10");
	if((div != 'undefined') && (div != null) && (div.childElementCount > 0))
	{

// 2015.07.27 update AMS start
//		div.removeChild(div);
		for(var nI = div.childNodes.length - 1; nI >= 0; nI--)
		{
			div.removeChild(div.childNodes[nI]);
		}
// 2015.07.27 update AMS end

	}
	div = null;
// 2015.07.21 update AMS end

	if (data) {
		var ITEMS = data.items;
		
		if (ITEMS.length > 0) {
			var recObj = window.document.getElementById('recommender_10');
			
			if (recObj != null && recObj != undefined) {
				var rec_div = document.createElement('DIV');
				recObj.appendChild(rec_div);
				rec_div.className = 'dv_recommend';
				
				var header_div = document.createElement('DIV');
				header_div.className = 'dv_rc_header';
				rec_div.appendChild(header_div);
				
				var title_div = document.createElement('DIV');
				title_div.className = 'dv_rc_title';
				title_div.id = 'dv_rc_title';
				rec_div.appendChild(title_div);
				
				// 商品情報
				for (var i = 0; i < ITEMS.length; i++) {
					var item_div = document.createElement('DIV');
					item_div.className = 'dv_rc_items';
					rec_div.appendChild(item_div);
					
					// 商品画像
					var image_div = document.createElement('DIV');
					image_div.className = 'dv_rc_img';
					item_div.appendChild(image_div);
					
					var image_a = document.createElement('A');
					image_div.appendChild(image_a);
					image_a.href = ITEMS[i][0].ct_url;
					
					var img = document.createElement('IMG');
					image_a.appendChild(img);
					img.alt = ITEMS[i][0].title;
					img.src = ITEMS[i][0].img_url;
					
					// 商品名
					var name_div = document.createElement('DIV');
					name_div.className = 'dv_rc_name';
					item_div.appendChild(name_div);
					
					var name_a = document.createElement('A');
					name_div.appendChild(name_a);
					name_a.href = ITEMS[i][0].ct_url;
					name_a.innerHTML = ITEMS[i][0].title;
					
					// 価格
					var price_div = document.createElement('DIV');
					price_div.className = 'dv_rc_price';
					item_div.appendChild(price_div);
					price_div.innerHTML = ITEMS[i][0].price_string;
					
					// 商品評価
					var description_div = document.createElement('DIV');
					description_div.className = 'dv_rc_description';
					item_div.appendChild(description_div);
					description_div.innerHTML = ITEMS[i][0].desc;
				}
				var footer_div = document.createElement('DIV');
				footer_div.className = 'dv_rc_footer';
				rec_div.appendChild(footer_div);
				
				var end_div = document.createElement('DIV');
				recObj.appendChild(end_div);
				end_div.className = 'recommenderEnd';
			}
		}
	}
}

// cookieに格納された型番号の直近3件について、レコメンドのパラメータとする。
//	 [引数]	  prk： cookieから取得した型番号群
//	 [返り値] レコメンドへ渡すパラメータ(エスケープしない)
RecoPtrn_pc_EPFB0121_nsz1.recommender_initCookie = function(prk) {
	var RRKKEY_1 = '..';
	var RRKKEY_2 = '__';
	var recommenderKatArray;
	var recommenderKatText;
	var tempProInfo = prk;
	var proInfoList = tempProInfo.split(RRKKEY_1);
	if (proInfoList[0] != null && proInfoList[0] != '') {
		recommenderKatArray = proInfoList[1].split(RRKKEY_2).slice(0,3);
		for (var i in recommenderKatArray) {
			recommenderKatArray[i] = recommenderKatArray[i].slice(0,6);
		}
		if (recommenderKatArray[0] != '' && recommenderKatArray[0] != null) {
			recommenderKatText = '&prod=' + recommenderKatArray[0]
		}
		if (recommenderKatArray[1] != '' && recommenderKatArray[1] != null) {
			recommenderKatText += '&prod=' + recommenderKatArray[1]
		}					
		if (recommenderKatArray[2] != '' && recommenderKatArray[2] != null) {
			recommenderKatText += '&prod=' + recommenderKatArray[2]
		}
	} else {
		recommenderKatText = '';
	}
	return recommenderKatText;
}


// 汎用cookie読み込み処理
// 名前空間の都合上、P_commonScript.jsから移植。
//	 [引数]	  kword：検索キーワード
//	 [返り値] 検索値(エスケープを解除する)
RecoPtrn_pc_EPFB0121_nsz1.cookieRead = function(kword)
{
	var strReturn = "";
	
	if(typeof(kword) == "undefined")
	{
		return(strReturn);
	}
	
	// 検索キーワードと検索箇所を定義し、検索キーワードが存在するかチェックする
	var strKeyword = kword + "=";
	var strCookie = document.cookie + ";";
	var nStart = strCookie.indexOf(strKeyword);
	
	// 検索キーワードが見つかれば検索値を抽出して、エスケープを解除する
	if(nStart != -1)
	{
		var nEnd = strCookie.indexOf(";", nStart);
		strReturn = unescape(strCookie.substring(nStart + strKeyword.length, nEnd));
	}
	
	nStart = null;
	strCookie = null;
	strKeyword = null;
	
	return(strReturn);
}


// レコメンド取得処理の実行
//	 [引数]	  なし
//	 [返り値] なし
RecoPtrn_pc_EPFB0121_nsz1.execute = function()
{
	// cookieより型番号群を取得
	var strPrkprod = RecoPtrn_pc_EPFB0121_nsz1.cookieRead('RRKPROD');
	
	// 取得した型番号群をパラメータに変換
	var strItemNum = RecoPtrn_pc_EPFB0121_nsz1.recommender_initCookie(strPrkprod);
	strPrkprod = null;
	
	// 送信URLの作成
	//var strRecomUrl = "";
	var strRecomUrl = RecommendUtilJS.getRecommendProtocol(RecommendUtilJS.ENV.PROTOCOL.HTTP) 
		+ "//" + RecommendUtilJS.getRecommendDomain() 
		+ "/pycre5/jsonp/recommend"
		+ "?merch=" + RecommendUtilJS.getMerch() 
		+ "&spec=10"
		+ "&prod="
		+ "&num=5"
		+ "&sess=1"
		+ "&custom_ct_param=" + escape("&SHNCRTTKKRO_KBN=RJ&BELN_SHOP_KBN=100") 
		+ "&callback=RecoPtrn_pc_EPFB0121_nsz1.setRecommendItems";
	
	// 変数に送信用URLが設定されている場合、
	if(strRecomUrl.length > 0)
	{
		// 取得した型番号群をパラメータに設定
		strRecomUrl = strRecomUrl.replace('&prod=', strItemNum);
		
		var recomHidden = $('#recomUrl');
		if(typeof recomHidden.val() != 'undefined')
		{
			recomHidden.val(strRecomUrl);
		}
		recomHidden = null;
		
		// 送信URLの実行
		var recomScript = document.createElement('script');
		recomScript.src = strRecomUrl;
		document.body.appendChild(recomScript);
		recomScript = null;
	}
	
	strItemNum = null;
	strRecomUrl = null;
}


// 名前空間の定義
var RecoPtrn_pc_EPFB0121_nsz2 = function(){};

// レコメンド取得処理の実行
//	 [引数]	  なし
//	 [返り値] なし
RecoPtrn_pc_EPFB0121_nsz2.execute = function()
{
	var sourceTag = null;
	var targetTag = null;
	
	// 注文番号の取得
	var szWork = null;
	sourceTag = $("#RECO_PARAMS #CHMN_NO");
	if(sourceTag != null)
	{
		szWork = sourceTag.val();
	}
	sourceTag = null;
	
	// 注文番号の設定
	targetTag = $("#__se_spec_23 .__se_prod");
	targetTag.empty();
	targetTag.append(szWork);
	targetTag = null;

	// 送信URLの作成
	//var strRecomUrl = "";
	var strRecomUrl = RecommendUtilJS.getRecommendProtocol(RecommendUtilJS.ENV.PROTOCOL.HTTP) 
		+ "//" + RecommendUtilJS.getRecommendDomain() 
		+ "/suite/page"
		+ "?m=" + RecommendUtilJS.getMerch() 
		+ "&p=pc_EPFB0121_chumon0"
		+ "&t=" + (new Date()).getTime()
		+ "&r=" + escape(document.referrer);
	// 変数に送信用URLが設定されている場合、
	if(strRecomUrl.length > 0)
	{
		// 送信URLの実行
		var recomScript = document.createElement('script');
		recomScript.src = strRecomUrl;
		document.body.appendChild(recomScript);
		recomScript = null;
	}
}
