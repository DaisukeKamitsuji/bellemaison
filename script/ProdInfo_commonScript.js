var DispPattern = function() {

	//通常パターン設定区分
	this.NOBR_PRICE  = 1;
	this.BR_PRICE  = 2;
	this.NOBR_ONLY_INCTAX_PRICE  = 3;
	this.NOBR_PRICE_NOHONTAI  = 5;
	this.BR_PRICE_HONTAI  = 6;
	this.NODISP_PRICE_HONTAI = 7;
	this.SMARTPHONE_NORMAL_PRICE = 8;
	
	//特価パターン設定区分
	this.SPECIAL_BR_PRICE  = 1;
	this.SPECIAL_NOBR_PRICE  = 2;
	this.SPECIAL_NO_SNKPRICE  = 3;
	this.SPECIAL_NOBR_ONLY_INCTAX_PRICE  = 4;
	this.SPECIAL_NO_SNKPRICE_NOBR_ONLY_INCTAX_PRICE  = 5;
	this.SPECIAL_NOBR_PRODUCT_DETAIL_INCTAX_PRICE  = 6;
	this.SPECIAL_PRODUCT_LIST_INCTAX_PRICE  = 7;
	this.SPECIAL_PRODUCT_BEST_HIT_INCTAX_PRICE  = 8;
	this.SPECIAL_NODISP_PRICE_HONTAI = 9;
	this.SMARTPHONE_SPECIAL_PRICE = 10;
	this.SPECIAL_NOBR_PRICE_NOHONTAI = 11;
	
	//円マーク設定区分
	this.YEN_MARK_ON = 1;
	this.YEN_MARK_OFF = 0;

}

function PriceDisplay(taxRate, 
					  uriShzKbn,
					  tokkaKbn,
					  outlShnKbn,
					  lowKakk,
					  highKakk,
					  pattern , 
					  tokkaPattern ,
					  enMartSet,
					  fontSize){
					  
	var retValue = "";
	
	var taxHighKakk;
	var taxLowKakk;
	var incTaxHighKakk;
	var incTaxLowKakk;
	var taxSymbol;
	var taxSymbolTj;
	var enFlg;
	var price;
	var incTaxPrice;
	var fontSize2 = 3;
	
	var taxFlg = new Boolean(true);
	var dispPattern = new DispPattern();
	
	try{
		//特価区分を意識しない場合
		if(tokkaPattern.length == 0){
			tokkaPattern = 1;
		}
		
		if(taxRate.length == 0){
			taxRate = 0;
		}
	
		if(highKakk.length == 0 ){
			highKakk = 0;
		}
		
		if(lowKakk.length == 0 ){
			lowKakk = 0;
		}
		
		if(fontSize.length == 0 ){
			fontSize = 3;
		}

		//価格が両方0の場合は終了
		if(lowKakk == 0 && highKakk == 0){
			return retValue;
		}

		//フォントのサイズの指定が3以下の場合、フォントサイズ2を
		//指定フォントサイズに合わせる。
		if(fontSize < 3){
			fontSize2 = fontSize;
		}

		//円マーク設定
		if(enMartSet == dispPattern.YEN_MARK_ON){
			var enFlg = new Boolean(true);
		}else{
			var enFlg = new Boolean(false);
		}

		//消費税を少数に変換
		taxRate = Number(taxRate)/100;

		//消費税計算
		if(uriShzKbn == 1){
			//価格の消費税計算
			
			taxHighKakk = Math.floor(Number(highKakk)*Number(taxRate));
			incTaxHighKakk = Math.floor(Number(highKakk) + Number(taxHighKakk));
			
			taxLowKakk = Math.floor(Number(lowKakk)*Number(taxRate));
			incTaxLowKakk = Math.floor(Number(lowKakk) + Number(taxLowKakk));
			
		}else{
		
			incTaxHighKakk = highKakk;
			incTaxLowKakk = lowKakk;
		
		}

		//タグ付き金額表示用文字列を取得する
		if(tokkaKbn == "1" || outlShnKbn == "1") {
	
			/** 特価の税込価格改行あり*/
			if(tokkaPattern == dispPattern.SPECIAL_BR_PRICE ){

				getSpecialPrice(Boolean(true));
	
	    	/** 特価範囲価格の場合のみ税込価格改行あり*/
		  	}else if(tokkaPattern == dispPattern.SPECIAL_NOBR_PRICE ){
	
				getSpecialPrice(Boolean(false));
				
			/** 特価の通常販売価格表示なし・税込価格改行あり*/
		    }else if(tokkaPattern == dispPattern.SPECIAL_NO_SNKPRICE ){
	
		    	getSpecialPrice(Boolean(true));
	
			/** 特価の通常販売価格表示あり範囲価格の場合のみ税込価格改行あり*/
			}else if(tokkaPattern == dispPattern.SPECIAL_NOBR_ONLY_INCTAX_PRICE ){
		    
		    	getSpecialBROnlyRangePrice();
		    
		    /** 特価の通常販売価格表示なし範囲価格の場合のみ税込価格改行あり*/
		  	}else if(tokkaPattern == dispPattern.SPECIAL_NO_SNKPRICE_NOBR_ONLY_INCTAX_PRICE ){
		  	
		    	getSpecialBROnlyRangePrice();
	
			/** 特価の通常販売価格表示あり範囲価格の場合のみ税込価格改行あり(商品詳細用) */
		  	}else if(tokkaPattern == dispPattern.SPECIAL_NOBR_PRODUCT_DETAIL_INCTAX_PRICE ){
		  	
		    	getSpecialBROnlyRangePrice();
	
			/** 特価の通常販売価格表示あり(商品の一覧系) */
			}else if(tokkaPattern == dispPattern.SPECIAL_PRODUCT_LIST_INCTAX_PRICE ) {
			
				getSpecialProductListPrice();
			
			/** 特価の通常販売価格表示あり(商品のベストヒット系) */
			}else if(tokkaPattern == dispPattern.SPECIAL_PRODUCT_BEST_HIT_INCTAX_PRICE ) {
			
				getSpecialProductBestHitPrice();
			
			/** スマートフォン用価格表示(商品詳細在庫価格非同期通信時) */
			}else if(tokkaPattern == dispPattern.SMARTPHONE_SPECIAL_PRICE) {
			
				getSpecialSmDispPrice();
			
			/** 特価の場合税込価格改行なし */
			}else if(tokkaPattern == dispPattern.SPECIAL_NOBR_PRICE_NOHONTAI) {
			
				getNoBRPriceNohontai();
			
			}
			
		}else{
		
			/** 通常の税込価格改行なし*/
			if(pattern == dispPattern.NOBR_PRICE ){
	
				getBRPrice(Boolean(false));
	
	    	/** 通常の税込価格改行あり*/
		  	}else if(pattern == dispPattern.BR_PRICE ){
	
				getBRPrice(Boolean(true));
	
			/** 通常範囲価格の場合のみ税込価格改行あり*/
		    }else if(pattern == dispPattern.NOBR_ONLY_INCTAX_PRICE ){
	
		    	getBROnlyRangePrice();
	
			/** 通常の税込価格改行なし。本体価格の表示なし*/
			}else if(pattern == dispPattern.NOBR_PRICE_NOHONTAI ){
	
		    	getBRPriceNohontai();
	
		    /** 通常の税込価格、本体価格の場合のみ改行あり*/
		  	}else if(pattern == dispPattern.BR_PRICE_HONTAI ){
	
		    	getHONTAIBRPrice();
			
			/** スマートフォン用価格表示(商品詳細在庫価格非同期通信時) */
		  	}else if(pattern == dispPattern.SMARTPHONE_NORMAL_PRICE){
	
		    	getSmDispPrice();
	
		  	}
	
		}
	
	}catch(e){
	
		retValue = "";
	
	}
	
	//特価の場合
	function getSpecialPrice(brFlg){
	
		uriShzKbnEditPC(enFlg);
	
		retValue = "<FONT color=\"red\"" + " size=\"" + fontSize + "\"" + "><B>" + incTaxPrice  + "</B></FONT>&nbsp;" ;
	
		if(taxFlg.valueOf()) {
			//外税の場合 
			if(brFlg.valueOf()) {
				retValue = retValue + "<BR>";
			}
		}		
		//販売価格(本体価格)
		retValue = retValue + "<FONT color=\"red\"" + "size=\"" + fontSize2 + "\"" + ">" + price + "</FONT>";
	}
	
	//特価の場合(範囲価格の場合のみ改行)
	function getSpecialBROnlyRangePrice(){
	
		uriShzKbnEditPC(enFlg);
	
		//特別価格(税込)
		retValue = "<FONT color=\"red\"" + " size=\"" + fontSize + "\"" + "><B>" + incTaxPrice  + "</B></FONT>&nbsp;" ; 
	
		if(taxFlg.valueOf()) {
		//外税の場合
			if(retValue.indexOf("～") != -1) {
			//範囲価格の場合、税込金額を改行
				retValue = retValue + "<BR>";
			}
		}
		//特別価格(本体価格)
		retValue = retValue + "<FONT color=\"red\""  + "size=\"" + fontSize2 + "\"" + ">" + price + "</FONT>";
	
	}
	
	//特価の場合(範囲価格の場合のみ改行)(商品詳細)
	function getSpecialProductDiteilPrice() {
	
		uriShzKbnEditPC(enFlg);
	
		//特別価格(税込)
		retValue = "<FONT color=\"red\"" + " size=\"" + fontSize + "\"" + "><B>" + incTaxPrice  + "</B></FONT>&nbsp;" ; 
	
		if(taxFlg.valueOf()) {
		//外税の場合
			if(retValue.indexOf("～") != -1) {
			//範囲価格の場合、税込金額を改行
				retValue = retValue + "<BR>";
			}
		}
		//特別価格(本体価格)
		retValue = retValue + "<FONT color=\"red\"" + "size=\"" + fontSize2 + "\"" + ">" + price + "</FONT>";
	
	}
	
	//特価の場合(範囲価格の場合のみ改行)(商品の一覧系)
	function getSpecialProductListPrice() {
	
		uriShzKbnEditPC(enFlg);
	
		retValue = "<FONT color=\"red\"" + " size=\"" + fontSize + "\"" + "><B>" + incTaxPrice  + "</B></FONT>&nbsp;" ;
	
		if(taxFlg.valueOf()) {
			//外税の場合 
			retValue = retValue + "<BR>";
		}		
		//販売価格(本体価格)
		retValue = retValue + "<FONT color=\"red\""  + "size=\"" + fontSize2 + "\"" + ">" + price + "</FONT>";
	
	}
	
	// 特価の場合(商品のベストヒット(セレクション)系)
	function getSpecialProductBestHitPrice() {
	
		uriShzKbnEditPC(enFlg);
	
		retValue = "<FONT color=\"#FF0000\"" + " size=\"" + fontSize + "\"" + "><B>" + incTaxPrice  + "</B></FONT>&nbsp;" ;
	
		if(taxFlg.valueOf()) {
			//外税の場合 
			retValue = retValue + "<BR>";
		}
		//販売価格(本体価格)
		retValue = retValue + "<FONT color=\"#FF0000\"" + "size=\"" + fontSize2 + "\"" + ">" + price + "</FONT>";
	
	}
	
	//特価の場合(本体価格の表示なし)
	function getNoBRPriceNohontai() {
	
		var incTaxPrice = getRangePrice(incTaxLowKakk,incTaxHighKakk,enFlg);
				
		setTaxSymbolPC(uriShzKbn);
	
		retValue = incTaxPrice;
	
	}
	
	//通常(特価以外)の場合
	function getBRPrice(brFlg){
	
		uriShzKbnEditPC(enFlg);
	
		retValue = incTaxPrice;
	
		if(brFlg.valueOf()) {
			retValue = retValue + "<BR>";
		}
	
		retValue = retValue + price;
	
	}
	
	//通常(特価以外)の場合(範囲価格の場合のみ改行)
	function getBROnlyRangePrice() {
	
		uriShzKbnEditPC(enFlg);
		
		retValue = incTaxPrice;
		
		if(taxFlg.valueOf()) {
			if(retValue.indexOf("～") != -1) {
				//範囲価格の場合、税込金額を改行
				retValue = retValue + "<BR>";
			}
		}
	
		retValue = retValue + price;
	
	}
	
	//通常、本体価格の表示なしの場合
	function getBRPriceNohontai() {
	
		var incTaxPrice = getRangePrice(incTaxLowKakk,incTaxHighKakk,enFlg);
				
		setTaxSymbolPC(uriShzKbn);
	
		retValue = incTaxPrice;
	
	}
	
	//通常(特価以外)の場合
	function getHONTAIBRPrice() {
	
		var price = getRangePrice(lowKakk,highKakk,enFlg);
		var incTaxPrice = getRangePrice(incTaxLowKakk,incTaxHighKakk,enFlg);
	
		setTaxSymbolPC(uriShzKbn);
	
		retValue = incTaxPrice;
		
		//販売価格(本体価格)
		if(lowKakk != 0 || highKakk != 0) {
			if(taxFlg.valueOf()) {
				//外税の場合
				price = "<BR>(" + taxSymbol + price ;
			} else {
				//内税・非課税・免税の場合
				price = "(" + taxSymbol;
			}
			price = price + ")";
		}
	
		retValue = incTaxPrice + price;
	
	}
	
	//スマートフォンで特価の場合
	function getSpecialSmDispPrice(){
	
		uriShzKbnEditSM(enFlg);
		setTaxSymbolPC(uriShzKbn);
	
		retValue = "価格：<span class=\"price\">" + getRangePrice(incTaxLowKakk,incTaxHighKakk,enFlg) + "<span>（" + taxSymbol.replace("本体","税込") + "）</span></span>" ;
	

	}
	//スマートフォンで通常の場合
	function getSmDispPrice(){
	
		uriShzKbnEditSM(enFlg);
		setTaxSymbolPC(uriShzKbn);
	
		retValue = "価格：<span>" + getRangePrice(incTaxLowKakk,incTaxHighKakk,enFlg)  + "<span>（" + taxSymbol.replace("本体","税込") + "）</span></span>" ;
	
	}
	
	//PC用：表示価格の編集
	function uriShzKbnEditPC(enFlg){
	
		price = getRangePrice(lowKakk,highKakk,enFlg);
		incTaxPrice = getRangePrice(incTaxLowKakk,incTaxHighKakk,enFlg);
	
		setTaxSymbolPC(uriShzKbn);
	
		//販売価格(本体価格)
		if(lowKakk != 0 || highKakk != 0) {
			if(taxFlg.valueOf()) {
				//外税の場合
				price = "(" + taxSymbol + price ;
			} else {
				//内税・非課税・免税の場合
				price = "(" + taxSymbol;
			}
			price = price + ")";
		}
	}
	
	//SM用：表示価格の編集
	function uriShzKbnEditSM(enFlg){
	
		price = getRangePrice(lowKakk,highKakk,enFlg);
		incTaxPrice = getRangePrice(incTaxLowKakk,incTaxHighKakk,enFlg);
	
		setTaxSymbolSM(uriShzKbn);
	
		//販売価格(本体価格)
		if(lowKakk != 0 || highKakk != 0) {
			if(taxFlg.valueOf()) {
				//外税の場合
				price = "(" + taxSymbol ;
			} else {
				//内税・非課税・免税の場合
				price = "(" + taxSymbol;
			}
			price = price + ")";
		}
	}
	
	//価格範囲表示用
	function getRangePrice(minPrice,maxPrice,enFlg){
	
		var editMinPrice = num3Format(minPrice);
		var editMaxPrice = num3Format(maxPrice);
		
		if(enFlg.valueOf()){
			editMinPrice = addYenmark(editMinPrice);
			editMaxPrice = addYenmark(maxPrice);
		}
		if( maxPrice == minPrice) {
			return editMinPrice;
		}else{
			if(minPrice == "" || minPrice == "0"){
				return editMaxPrice;
			}else if(maxPrice == "" || maxPrice == "0"){
				return editMinPrice;
			}else{
				var ret = editMinPrice + "～" + editMaxPrice;
				return ret
			}
		}		
	}
	
	//カンマ編集
	function num3Format(str){
	
		var num = new String( str ).replace( /,/g, "" );
		while ( num != ( num = num.replace( /^(-?\d+)(\d{3})/, "$1,$2" ) ) );
		return num;
	
	}
	
	//円マーク追加（価格）
	function addYenmark(str){
	
		if (str==""){
			return "";
		} else {
			return "&yen;" + num3Format(str);
		}
	
	}
	
	//消費税区分を作成する(ＰＣ用)
	function setTaxSymbolPC(uriShzKbn){
	
		if(uriShzKbn == "1"){
			taxSymbol = "本体";
		}else if(uriShzKbn == "2"){
			taxSymbol = "税込";
		}else if(uriShzKbn == "3"){
			taxSymbol = "非課税";
		}else if(trim(uriShzKbn) == ""){
			taxSymbol = "免税";
		}
	
		//売り上げ消費税区分=外税の場合、税フラグをセット
		if(uriShzKbn != 1) {
			taxFlg = new Boolean(false);
		}
	}
	
	//消費税区分を作成する（スマホ用）
	//スマホ1:外税／2:内税／3:非課税／""(ブランク):免税
	function setTaxSymbolSM(uriShzKbn){
	
		if(uriShzKbn == "1"){
			taxSymbol = "税込";
		}else if(uriShzKbn == "2"){
			taxSymbol = "税込";
		}else if(uriShzKbn == "3"){
			taxSymbol = "非課税";
		}else if(uriShzKbn.trim() == ""){
			taxSymbol = "免税";
		}
		
		//売り上げ消費税区分=外税の場合、税フラグをセット
		if(uriShzKbn != 1) {
			taxFlg = new Boolean(false);
		}

	}

	// TRIMを行う
	function trim(text) {
		return (text || "").replace( /^\s+|\s+$/g, "" );
	}

	return retValue;

}
