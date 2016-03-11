var DispPattern = function() {

	//�ʏ�p�^�[���ݒ�敪
	this.NOBR_PRICE  = 1;
	this.BR_PRICE  = 2;
	this.NOBR_ONLY_INCTAX_PRICE  = 3;
	this.NOBR_PRICE_NOHONTAI  = 5;
	this.BR_PRICE_HONTAI  = 6;
	this.NODISP_PRICE_HONTAI = 7;
	this.SMARTPHONE_NORMAL_PRICE = 8;
	
	//�����p�^�[���ݒ�敪
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
	
	//�~�}�[�N�ݒ�敪
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
		//�����敪���ӎ����Ȃ��ꍇ
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

		//���i������0�̏ꍇ�͏I��
		if(lowKakk == 0 && highKakk == 0){
			return retValue;
		}

		//�t�H���g�̃T�C�Y�̎w�肪3�ȉ��̏ꍇ�A�t�H���g�T�C�Y2��
		//�w��t�H���g�T�C�Y�ɍ��킹��B
		if(fontSize < 3){
			fontSize2 = fontSize;
		}

		//�~�}�[�N�ݒ�
		if(enMartSet == dispPattern.YEN_MARK_ON){
			var enFlg = new Boolean(true);
		}else{
			var enFlg = new Boolean(false);
		}

		//����ł������ɕϊ�
		taxRate = Number(taxRate)/100;

		//����Ōv�Z
		if(uriShzKbn == 1){
			//���i�̏���Ōv�Z
			
			taxHighKakk = Math.floor(Number(highKakk)*Number(taxRate));
			incTaxHighKakk = Math.floor(Number(highKakk) + Number(taxHighKakk));
			
			taxLowKakk = Math.floor(Number(lowKakk)*Number(taxRate));
			incTaxLowKakk = Math.floor(Number(lowKakk) + Number(taxLowKakk));
			
		}else{
		
			incTaxHighKakk = highKakk;
			incTaxLowKakk = lowKakk;
		
		}

		//�^�O�t�����z�\���p��������擾����
		if(tokkaKbn == "1" || outlShnKbn == "1") {
	
			/** �����̐ō����i���s����*/
			if(tokkaPattern == dispPattern.SPECIAL_BR_PRICE ){

				getSpecialPrice(Boolean(true));
	
	    	/** �����͈͉��i�̏ꍇ�̂ݐō����i���s����*/
		  	}else if(tokkaPattern == dispPattern.SPECIAL_NOBR_PRICE ){
	
				getSpecialPrice(Boolean(false));
				
			/** �����̒ʏ�̔����i�\���Ȃ��E�ō����i���s����*/
		    }else if(tokkaPattern == dispPattern.SPECIAL_NO_SNKPRICE ){
	
		    	getSpecialPrice(Boolean(true));
	
			/** �����̒ʏ�̔����i�\������͈͉��i�̏ꍇ�̂ݐō����i���s����*/
			}else if(tokkaPattern == dispPattern.SPECIAL_NOBR_ONLY_INCTAX_PRICE ){
		    
		    	getSpecialBROnlyRangePrice();
		    
		    /** �����̒ʏ�̔����i�\���Ȃ��͈͉��i�̏ꍇ�̂ݐō����i���s����*/
		  	}else if(tokkaPattern == dispPattern.SPECIAL_NO_SNKPRICE_NOBR_ONLY_INCTAX_PRICE ){
		  	
		    	getSpecialBROnlyRangePrice();
	
			/** �����̒ʏ�̔����i�\������͈͉��i�̏ꍇ�̂ݐō����i���s����(���i�ڍחp) */
		  	}else if(tokkaPattern == dispPattern.SPECIAL_NOBR_PRODUCT_DETAIL_INCTAX_PRICE ){
		  	
		    	getSpecialBROnlyRangePrice();
	
			/** �����̒ʏ�̔����i�\������(���i�̈ꗗ�n) */
			}else if(tokkaPattern == dispPattern.SPECIAL_PRODUCT_LIST_INCTAX_PRICE ) {
			
				getSpecialProductListPrice();
			
			/** �����̒ʏ�̔����i�\������(���i�̃x�X�g�q�b�g�n) */
			}else if(tokkaPattern == dispPattern.SPECIAL_PRODUCT_BEST_HIT_INCTAX_PRICE ) {
			
				getSpecialProductBestHitPrice();
			
			/** �X�}�[�g�t�H���p���i�\��(���i�ڍ׍݌ɉ��i�񓯊��ʐM��) */
			}else if(tokkaPattern == dispPattern.SMARTPHONE_SPECIAL_PRICE) {
			
				getSpecialSmDispPrice();
			
			/** �����̏ꍇ�ō����i���s�Ȃ� */
			}else if(tokkaPattern == dispPattern.SPECIAL_NOBR_PRICE_NOHONTAI) {
			
				getNoBRPriceNohontai();
			
			}
			
		}else{
		
			/** �ʏ�̐ō����i���s�Ȃ�*/
			if(pattern == dispPattern.NOBR_PRICE ){
	
				getBRPrice(Boolean(false));
	
	    	/** �ʏ�̐ō����i���s����*/
		  	}else if(pattern == dispPattern.BR_PRICE ){
	
				getBRPrice(Boolean(true));
	
			/** �ʏ�͈͉��i�̏ꍇ�̂ݐō����i���s����*/
		    }else if(pattern == dispPattern.NOBR_ONLY_INCTAX_PRICE ){
	
		    	getBROnlyRangePrice();
	
			/** �ʏ�̐ō����i���s�Ȃ��B�{�̉��i�̕\���Ȃ�*/
			}else if(pattern == dispPattern.NOBR_PRICE_NOHONTAI ){
	
		    	getBRPriceNohontai();
	
		    /** �ʏ�̐ō����i�A�{�̉��i�̏ꍇ�̂݉��s����*/
		  	}else if(pattern == dispPattern.BR_PRICE_HONTAI ){
	
		    	getHONTAIBRPrice();
			
			/** �X�}�[�g�t�H���p���i�\��(���i�ڍ׍݌ɉ��i�񓯊��ʐM��) */
		  	}else if(pattern == dispPattern.SMARTPHONE_NORMAL_PRICE){
	
		    	getSmDispPrice();
	
		  	}
	
		}
	
	}catch(e){
	
		retValue = "";
	
	}
	
	//�����̏ꍇ
	function getSpecialPrice(brFlg){
	
		uriShzKbnEditPC(enFlg);
	
		retValue = "<FONT color=\"red\"" + " size=\"" + fontSize + "\"" + "><B>" + incTaxPrice  + "</B></FONT>&nbsp;" ;
	
		if(taxFlg.valueOf()) {
			//�O�ł̏ꍇ 
			if(brFlg.valueOf()) {
				retValue = retValue + "<BR>";
			}
		}		
		//�̔����i(�{�̉��i)
		retValue = retValue + "<FONT color=\"red\"" + "size=\"" + fontSize2 + "\"" + ">" + price + "</FONT>";
	}
	
	//�����̏ꍇ(�͈͉��i�̏ꍇ�̂݉��s)
	function getSpecialBROnlyRangePrice(){
	
		uriShzKbnEditPC(enFlg);
	
		//���ʉ��i(�ō�)
		retValue = "<FONT color=\"red\"" + " size=\"" + fontSize + "\"" + "><B>" + incTaxPrice  + "</B></FONT>&nbsp;" ; 
	
		if(taxFlg.valueOf()) {
		//�O�ł̏ꍇ
			if(retValue.indexOf("�`") != -1) {
			//�͈͉��i�̏ꍇ�A�ō����z�����s
				retValue = retValue + "<BR>";
			}
		}
		//���ʉ��i(�{�̉��i)
		retValue = retValue + "<FONT color=\"red\""  + "size=\"" + fontSize2 + "\"" + ">" + price + "</FONT>";
	
	}
	
	//�����̏ꍇ(�͈͉��i�̏ꍇ�̂݉��s)(���i�ڍ�)
	function getSpecialProductDiteilPrice() {
	
		uriShzKbnEditPC(enFlg);
	
		//���ʉ��i(�ō�)
		retValue = "<FONT color=\"red\"" + " size=\"" + fontSize + "\"" + "><B>" + incTaxPrice  + "</B></FONT>&nbsp;" ; 
	
		if(taxFlg.valueOf()) {
		//�O�ł̏ꍇ
			if(retValue.indexOf("�`") != -1) {
			//�͈͉��i�̏ꍇ�A�ō����z�����s
				retValue = retValue + "<BR>";
			}
		}
		//���ʉ��i(�{�̉��i)
		retValue = retValue + "<FONT color=\"red\"" + "size=\"" + fontSize2 + "\"" + ">" + price + "</FONT>";
	
	}
	
	//�����̏ꍇ(�͈͉��i�̏ꍇ�̂݉��s)(���i�̈ꗗ�n)
	function getSpecialProductListPrice() {
	
		uriShzKbnEditPC(enFlg);
	
		retValue = "<FONT color=\"red\"" + " size=\"" + fontSize + "\"" + "><B>" + incTaxPrice  + "</B></FONT>&nbsp;" ;
	
		if(taxFlg.valueOf()) {
			//�O�ł̏ꍇ 
			retValue = retValue + "<BR>";
		}		
		//�̔����i(�{�̉��i)
		retValue = retValue + "<FONT color=\"red\""  + "size=\"" + fontSize2 + "\"" + ">" + price + "</FONT>";
	
	}
	
	// �����̏ꍇ(���i�̃x�X�g�q�b�g(�Z���N�V����)�n)
	function getSpecialProductBestHitPrice() {
	
		uriShzKbnEditPC(enFlg);
	
		retValue = "<FONT color=\"#FF0000\"" + " size=\"" + fontSize + "\"" + "><B>" + incTaxPrice  + "</B></FONT>&nbsp;" ;
	
		if(taxFlg.valueOf()) {
			//�O�ł̏ꍇ 
			retValue = retValue + "<BR>";
		}
		//�̔����i(�{�̉��i)
		retValue = retValue + "<FONT color=\"#FF0000\"" + "size=\"" + fontSize2 + "\"" + ">" + price + "</FONT>";
	
	}
	
	//�����̏ꍇ(�{�̉��i�̕\���Ȃ�)
	function getNoBRPriceNohontai() {
	
		var incTaxPrice = getRangePrice(incTaxLowKakk,incTaxHighKakk,enFlg);
				
		setTaxSymbolPC(uriShzKbn);
	
		retValue = incTaxPrice;
	
	}
	
	//�ʏ�(�����ȊO)�̏ꍇ
	function getBRPrice(brFlg){
	
		uriShzKbnEditPC(enFlg);
	
		retValue = incTaxPrice;
	
		if(brFlg.valueOf()) {
			retValue = retValue + "<BR>";
		}
	
		retValue = retValue + price;
	
	}
	
	//�ʏ�(�����ȊO)�̏ꍇ(�͈͉��i�̏ꍇ�̂݉��s)
	function getBROnlyRangePrice() {
	
		uriShzKbnEditPC(enFlg);
		
		retValue = incTaxPrice;
		
		if(taxFlg.valueOf()) {
			if(retValue.indexOf("�`") != -1) {
				//�͈͉��i�̏ꍇ�A�ō����z�����s
				retValue = retValue + "<BR>";
			}
		}
	
		retValue = retValue + price;
	
	}
	
	//�ʏ�A�{�̉��i�̕\���Ȃ��̏ꍇ
	function getBRPriceNohontai() {
	
		var incTaxPrice = getRangePrice(incTaxLowKakk,incTaxHighKakk,enFlg);
				
		setTaxSymbolPC(uriShzKbn);
	
		retValue = incTaxPrice;
	
	}
	
	//�ʏ�(�����ȊO)�̏ꍇ
	function getHONTAIBRPrice() {
	
		var price = getRangePrice(lowKakk,highKakk,enFlg);
		var incTaxPrice = getRangePrice(incTaxLowKakk,incTaxHighKakk,enFlg);
	
		setTaxSymbolPC(uriShzKbn);
	
		retValue = incTaxPrice;
		
		//�̔����i(�{�̉��i)
		if(lowKakk != 0 || highKakk != 0) {
			if(taxFlg.valueOf()) {
				//�O�ł̏ꍇ
				price = "<BR>(" + taxSymbol + price ;
			} else {
				//���ŁE��ېŁE�Ɛł̏ꍇ
				price = "(" + taxSymbol;
			}
			price = price + ")";
		}
	
		retValue = incTaxPrice + price;
	
	}
	
	//�X�}�[�g�t�H���œ����̏ꍇ
	function getSpecialSmDispPrice(){
	
		uriShzKbnEditSM(enFlg);
		setTaxSymbolPC(uriShzKbn);
	
		retValue = "���i�F<span class=\"price\">" + getRangePrice(incTaxLowKakk,incTaxHighKakk,enFlg) + "<span>�i" + taxSymbol.replace("�{��","�ō�") + "�j</span></span>" ;
	

	}
	//�X�}�[�g�t�H���Œʏ�̏ꍇ
	function getSmDispPrice(){
	
		uriShzKbnEditSM(enFlg);
		setTaxSymbolPC(uriShzKbn);
	
		retValue = "���i�F<span>" + getRangePrice(incTaxLowKakk,incTaxHighKakk,enFlg)  + "<span>�i" + taxSymbol.replace("�{��","�ō�") + "�j</span></span>" ;
	
	}
	
	//PC�p�F�\�����i�̕ҏW
	function uriShzKbnEditPC(enFlg){
	
		price = getRangePrice(lowKakk,highKakk,enFlg);
		incTaxPrice = getRangePrice(incTaxLowKakk,incTaxHighKakk,enFlg);
	
		setTaxSymbolPC(uriShzKbn);
	
		//�̔����i(�{�̉��i)
		if(lowKakk != 0 || highKakk != 0) {
			if(taxFlg.valueOf()) {
				//�O�ł̏ꍇ
				price = "(" + taxSymbol + price ;
			} else {
				//���ŁE��ېŁE�Ɛł̏ꍇ
				price = "(" + taxSymbol;
			}
			price = price + ")";
		}
	}
	
	//SM�p�F�\�����i�̕ҏW
	function uriShzKbnEditSM(enFlg){
	
		price = getRangePrice(lowKakk,highKakk,enFlg);
		incTaxPrice = getRangePrice(incTaxLowKakk,incTaxHighKakk,enFlg);
	
		setTaxSymbolSM(uriShzKbn);
	
		//�̔����i(�{�̉��i)
		if(lowKakk != 0 || highKakk != 0) {
			if(taxFlg.valueOf()) {
				//�O�ł̏ꍇ
				price = "(" + taxSymbol ;
			} else {
				//���ŁE��ېŁE�Ɛł̏ꍇ
				price = "(" + taxSymbol;
			}
			price = price + ")";
		}
	}
	
	//���i�͈͕\���p
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
				var ret = editMinPrice + "�`" + editMaxPrice;
				return ret
			}
		}		
	}
	
	//�J���}�ҏW
	function num3Format(str){
	
		var num = new String( str ).replace( /,/g, "" );
		while ( num != ( num = num.replace( /^(-?\d+)(\d{3})/, "$1,$2" ) ) );
		return num;
	
	}
	
	//�~�}�[�N�ǉ��i���i�j
	function addYenmark(str){
	
		if (str==""){
			return "";
		} else {
			return "&yen;" + num3Format(str);
		}
	
	}
	
	//����ŋ敪���쐬����(�o�b�p)
	function setTaxSymbolPC(uriShzKbn){
	
		if(uriShzKbn == "1"){
			taxSymbol = "�{��";
		}else if(uriShzKbn == "2"){
			taxSymbol = "�ō�";
		}else if(uriShzKbn == "3"){
			taxSymbol = "��ې�";
		}else if(trim(uriShzKbn) == ""){
			taxSymbol = "�Ɛ�";
		}
	
		//����グ����ŋ敪=�O�ł̏ꍇ�A�Ńt���O���Z�b�g
		if(uriShzKbn != 1) {
			taxFlg = new Boolean(false);
		}
	}
	
	//����ŋ敪���쐬����i�X�}�z�p�j
	//�X�}�z1:�O�Ł^2:���Ł^3:��ېŁ^""(�u�����N):�Ɛ�
	function setTaxSymbolSM(uriShzKbn){
	
		if(uriShzKbn == "1"){
			taxSymbol = "�ō�";
		}else if(uriShzKbn == "2"){
			taxSymbol = "�ō�";
		}else if(uriShzKbn == "3"){
			taxSymbol = "��ې�";
		}else if(uriShzKbn.trim() == ""){
			taxSymbol = "�Ɛ�";
		}
		
		//����グ����ŋ敪=�O�ł̏ꍇ�A�Ńt���O���Z�b�g
		if(uriShzKbn != 1) {
			taxFlg = new Boolean(false);
		}

	}

	// TRIM���s��
	function trim(text) {
		return (text || "").replace( /^\s+|\s+$/g, "" );
	}

	return retValue;

}
