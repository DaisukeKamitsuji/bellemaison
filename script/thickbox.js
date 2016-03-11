/*
 * Thickbox 3.1 - One Box To Rule Them All.
 * By Cody Lindley (http://www.codylindley.com)
 * Copyright (c) 2007 cody lindley
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
*/
		  
//var tb_pathToImage = "images/loadingAnimation.gif";

/*!!!!!!!!!!!!!!!!! edit below this line at your own risk !!!!!!!!!!!!!!!!!!!!!!!*/
var tb_opened = false;
$(window).bind('beforeunload', function(){
	if (tb_opened == true){
		tb_opened = false;
		$('#TB_iframeContent').remove();
	}
});

//on page load call tb_init
jQuery(document).ready(function(){   

// [[[[[[[[[[[[[[[[[[[[ 商品一覧 ]]]]]]]]]]]]]]]]]]]]
	brstb_init('.enlargement a.thickbox');//pass where to apply thickbox
	imgLoader = new Image();// preload image

	//tb_init('a.thickbox, area.thickbox, input.thickbox');//pass where to apply thickbox
	// imgLoader = new Image();// preload image
	// imgLoader.src = tb_pathToImage;

});


// [[[[[[[[[[[[[[[[[[[[ 商品詳細 ]]]]]]]]]]]]]]]]]]]]


//add thickbox to href & area elements that have a class of .thickbox
//function tb_init(domChunk){
//	jQuery(domChunk).click(function(){
//	var t = this.title || this.name || null;
//	var a = this.href || this.alt;
//	if(a.match(/^javascript/)) {
//		a = a.substr(a.indexOf("\'")+1 , a.length - a.indexOf("\'") - 3);
//	}
//	if(a.match('^javascript:void(0)')){
//		a = "div_test.html?keepThis=true&popup=1&TB_iframe=true&height=500&width=750";
//	}
//
//	var g = this.rel || false;
//	tb_show(t,a,g);
//	this.blur();
//	return false;
//	});
//}

var thick_mywindow = this.window;

function tb_show(caption, url, imageGroup) {//function called when the user clicks on a thickbox link
	try {
		tb_opened = true;
		thick_mywindow = this.window;
		// 在庫からの遷移の場合
		if(url.indexOf('zaiko=1') != -1) {
			thick_mywindow = opener.window;
		}
		if (typeof document.body.style.maxHeight === "undefined") {//if IE 6
			thick_mywindow.jQuery("body","html").css({height: "100%", width: "100%"});
			// thick_mywindow.jQuery("html").css("overflow","hidden");
			if (document.getElementById("TB_HideSelect") === null) {//iframe to hide select elements in ie6
				thick_mywindow.jQuery("body").append("<iframe id='TB_HideSelect'></iframe><div id='TB_overlay'></div><div id='TB_window'></div>");
				thick_mywindow.jQuery("#TB_overlay").click(thick_mywindow.tb_remove);
			}
		}else{//all others;
			if(document.getElementById("TB_overlay") === null){
				thick_mywindow.jQuery("body").append("<div id='TB_overlay'></div><div id='TB_window'></div>");
				thick_mywindow.jQuery("#TB_overlay").click(thick_mywindow.tb_remove);
			}
		}
		if(thick_mywindow.tb_detectMacXFF()){
			thick_mywindow.jQuery("#TB_overlay").addClass("TB_overlayMacFFBGHack");//use png overlay so hide flash
		}else{
			thick_mywindow.jQuery("#TB_overlay").addClass("TB_overlayBG");//use background and opacity
		}
		
		if(caption===null){caption="";}
		// thick_mywindow.jQuery("body").append("<div id='TB_load'><img src='"+imgLoader.src+"' /></div>");//add loader to the page
		// thick_mywindow.jQuery('#TB_load').show();//show loader
		
		var thick_baseURL;
		if(url.indexOf("?")!==-1){ //ff there is a query string involved
			thick_baseURL = url.substr(0, url.indexOf("?"));
		}else{ 
			thick_baseURL = url;
		}

	   var urlString = /\.jpg$|\.jpeg$|\.png$|\.gif$|\.bmp$/;
	   var urlType = thick_baseURL.toLowerCase().match(urlString);
	   
		if(urlType == '.jpg' || urlType == '.jpeg' || urlType == '.png' || urlType == '.gif' || urlType == '.bmp'){//code to show images
				
			TB_PrevCaption = "";
			TB_PrevURL = "";
			TB_PrevHTML = "";
			TB_NextCaption = "";
			TB_NextURL = "";
			TB_NextHTML = "";
			TB_imageCount = "";
			TB_FoundURL = false;
			if(imageGroup){
				TB_TempArray = jQuery("a[@rel="+imageGroup+"]").get();
				for (TB_Counter = 0; ((TB_Counter < TB_TempArray.length) && (TB_NextHTML === "")); TB_Counter++) {
					var urlTypeTemp = TB_TempArray[TB_Counter].href.toLowerCase().match(urlString);
						if (!(TB_TempArray[TB_Counter].href == url)) {						
							if (TB_FoundURL) {
								TB_NextCaption = TB_TempArray[TB_Counter].title;
								TB_NextURL = TB_TempArray[TB_Counter].href;
								TB_NextHTML = "<span id='TB_next'>&nbsp;&nbsp;<a href='#'>Next &gt;</a></span>";
							} else {
								TB_PrevCaption = TB_TempArray[TB_Counter].title;
								TB_PrevURL = TB_TempArray[TB_Counter].href;
								TB_PrevHTML = "<span id='TB_prev'>&nbsp;&nbsp;<a href='#'>&lt; Prev</a></span>";
							}
						} else {
							TB_FoundURL = true;
							TB_imageCount = "Image " + (TB_Counter + 1) +" of "+ (TB_TempArray.length);											
						}
				}
			}

			imgPreloader = new Image();
			imgPreloader.onload = function(){		
			imgPreloader.onload = null;
				
			// Resizing large images - orginal by Christian Montoya edited by me.
			var pagesize = tb_getPageSize();
			var x = pagesize[0] - 150;
			var y = pagesize[1] - 150;
			var imageWidth = imgPreloader.width;
			var imageHeight = imgPreloader.height;
			if (imageWidth > x) {
				imageHeight = imageHeight * (x / imageWidth); 
				imageWidth = x; 
				if (imageHeight > y) { 
					imageWidth = imageWidth * (y / imageHeight); 
					imageHeight = y; 
				}
			} else if (imageHeight > y) { 
				imageWidth = imageWidth * (y / imageHeight); 
				imageHeight = y; 
				if (imageWidth > x) { 
					imageHeight = imageHeight * (x / imageWidth); 
					imageWidth = x;
				}
			}
			// End Resizing
			
			TB_WIDTH = imageWidth + 30;
			TB_HEIGHT = imageHeight + 60;
			jQuery("#TB_window").append("<a href='' id='TB_ImageOff' title='Close'><img id='TB_Image' src='"+url+"' width='"+imageWidth+"' height='"+imageHeight+"' alt='"+caption+"'/></a>" + "<div id='TB_caption'>"+caption+"<div id='TB_secondLine'>" + TB_imageCount + TB_PrevHTML + TB_NextHTML + "</div></div><div id='TB_closeWindow'><a href='#' id='TB_closeWindowButton' title='Close'>close</a> or Esc Key</div>"); 		
			
			jQuery("#TB_closeWindowButton").click(tb_remove);
			
			if (!(TB_PrevHTML === "")) {
				function goPrev(){
					if(jQuery(document).unbind("click",goPrev)){jQuery(document).unbind("click",goPrev);}
					jQuery("#TB_window").remove();
					jQuery("body").append("<div id='TB_window'></div>");
					tb_show(TB_PrevCaption, TB_PrevURL, imageGroup);
					return false;	
				}
				jQuery("#TB_prev").click(goPrev);
			}
			
			if (!(TB_NextHTML === "")) {		
				function goNext(){
					jQuery("#TB_window").remove();
					jQuery("body").append("<div id='TB_window'></div>");
					tb_show(TB_NextCaption, TB_NextURL, imageGroup);				
					return false;	
				}
				jQuery("#TB_next").click(goNext);
				
			}

			document.onkeydown = function(e){ 	
				if (e == null) { // ie
					keycode = event.keyCode;
				} else { // mozilla
					keycode = e.which;
				}
				if(keycode == 27){ // close
					tb_remove();
				} else if(keycode == 190){ // display previous image
					if(!(TB_NextHTML == "")){
						document.onkeydown = "";
						goNext();
					}
				} else if(keycode == 188){ // display next image
					if(!(TB_PrevHTML == "")){
						document.onkeydown = "";
						goPrev();
					}
				}	
			};
			
			tb_position();
			// jQuery("#TB_load").remove();
			jQuery("#TB_ImageOff").click(tb_remove);
			jQuery("#TB_window").css({display:"block"}); //for safari using css instead of show
			};
			
			imgPreloader.src = url;
		}else{//code to show html
			var queryString = url.replace(/^[^\?]+\??/,'');
			var params = thick_mywindow.tb_parseQuery( queryString );
			TB_WIDTH = (params['width']*1) + 30 || 630; //defaults to 630 if no paramaters were added to URL
			TB_HEIGHT = (params['height']*1) + 40 || 440; //defaults to 440 if no paramaters were added to URL
			ajaxContentW = TB_WIDTH - 30;
			ajaxContentH = TB_HEIGHT - 40;
			if(url.indexOf('TB_iframe') != -1){// either iframe or ajax window
					urlNoQuery = url.split('TB_');
					thick_mywindow.jQuery("#TB_iframeContent").remove();
					if(params['modal'] != "true"){//iframe no modal
						thick_mywindow.jQuery("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+caption+"</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton' title='Close'>close</a> or Esc Key</div></div><iframe frameborder='0' hspace='0' src='"+urlNoQuery[0]+"' id='TB_iframeContent' name='TB_iframeContent"+Math.round(Math.random()*1000)+"' onload='tb_showIframe()' style='width:"+(ajaxContentW + 29)+"px;height:"+(ajaxContentH + 17)+"px;' > </iframe>");
					}else{//iframe modal
						thick_mywindow.jQuery("#TB_overlay").unbind();
						thick_mywindow.jQuery("#TB_window").append("<iframe frameborder='0' hspace='0' src='"+urlNoQuery[0]+"' id='TB_iframeContent' name='TB_iframeContent"+Math.round(Math.random()*1000)+"' onload='tb_showIframe()' style='width:"+(ajaxContentW + 29)+"px;height:"+(ajaxContentH + 17)+"px;'> </iframe>");
					}
			}else{// not an iframe, ajax
					if(thick_mywindow.jQuery("#TB_window").css("display") != "block"){
						if(params['modal'] != "true"){//ajax no modal
							thick_mywindow.jQuery("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+caption+"</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton'>close</a> or Esc Key</div></div><div id='TB_ajaxContent' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px'></div>");
						}else{//ajax modal
							thick_mywindow.jQuery("#TB_overlay").unbind();
							thick_mywindow.jQuery("#TB_window").append("<div id='TB_ajaxContent' class='TB_modal' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px;'></div>");	
						}
					}else{//this means the window is already up, we are just loading new content via ajax
						thick_mywindow.jQuery("#TB_ajaxContent")[0].style.width = ajaxContentW +"px";
						thick_mywindow.jQuery("#TB_ajaxContent")[0].style.height = ajaxContentH +"px";
						thick_mywindow.jQuery("#TB_ajaxContent")[0].scrollTop = 0;
						thick_mywindow.jQuery("#TB_ajaxWindowTitle").html(caption);
					}
			}
			thick_mywindow.jQuery("#TB_closeWindowButton").click(thick_mywindow.tb_remove);
			
				if(url.indexOf('TB_inline') != -1){	
					thick_mywindow.jQuery("#TB_ajaxContent").append(thick_mywindow.jQuery('#' + params['inlineId']).children());
					thick_mywindow.jQuery("#TB_window").unload(function () {
						jQuery('#' + params['inlineId']).append( thick_mywindow.jQuery("#TB_ajaxContent").children() ); // move elements back when you're finished
					});
					tb_position();
					// thick_mywindow.jQuery("#TB_load").remove();
					thick_mywindow.jQuery("#TB_window").css({display:"block"}); 
				}else if(url.indexOf('TB_iframe') != -1){
					tb_position();
					if($.browser.safari){//safari needs help because it will not fire iframe onload
						// thick_mywindow.jQuery("#TB_load").remove();
						thick_mywindow.jQuery("#TB_window").css({display:"block"});
					}
				}else{
					thick_mywindow.jQuery("#TB_ajaxContent").load(url += "&random=" + (new Date().getTime()),function(){//to do a post change this load method
						tb_position();
						// thick_mywindow.jQuery("#TB_load").remove();
						tb_init("#TB_ajaxContent a.thickbox");
						thick_mywindow.jQuery("#TB_window").css({display:"block"});
					});
				}
				
				// サブウィンドウから表示された場合 windowをクローズ
				if(url.indexOf("zaiko=1") != -1) {
					this.window.close();
					thick_mywindow.focus();
				}
			
		}
		if(!params['modal']){
			document.onkeyup = function(e){ 	
				if (e == null) { // ie
					keycode = event.keyCode;
				} else { // mozilla
					keycode = e.which;
				}
				if(keycode == 27){ // close
					thick_mywindow.tb_remove();
				}	
			};
		}
		
	} catch(e) {
		//JavaScript例外が発生したときは、カート画面へ遷移（safari2以前の問題対応）
		if(url.indexOf('zaiko=1') == -1) {
			// 商品詳細
			if( url.indexOf('BELN_SHOP_KBN=100') == -1){
				document.form01._ActionID.value = "dPrdDtlMcCrtAdd";
			} else {
				document.form01._ActionID.value = "dProdDtlCartAdd";
			}
			document.form01.submit(); 
		} else {
			// 在庫表示
			// ライトボックス非表示に変換
			url = url.replace("&LIT_BOX_HYJKBN=1&GMN_KBN=2&TB_iframe=true&height=458&width=865&zaiko=1","");
			window.opener.focus();
			window.opener.location.href = url;
			window.close();
		}
	}
}

//helper functions below
function tb_showIframe(){
	// jQuery("#TB_load").remove();
	jQuery("#TB_window").css({display:"block"});
}

function tb_remove() {
	if( jQuery("#TB_window").css("display") == "block") {
	 	jQuery("#TB_imageOff").unbind("click");
		jQuery("#TB_closeWindowButton").unbind("click");
		jQuery("#TB_window").fadeOut("fast",function(){jQuery('#TB_window,#TB_overlay,#TB_HideSelect').trigger("unload").unbind().remove();});
		// jQuery("#TB_load").remove();
		if (typeof document.body.style.maxHeight == "undefined") {//if IE 6
			jQuery("body","html").css({height: "auto", width: "auto"});
			jQuery("html").css("overflow","");
		}
		document.onkeydown = "";
		document.onkeyup = "";
	}
	return false;
}

function tb_position() {
	thick_mywindow.jQuery("#TB_window").css({marginLeft: '-' + parseInt((TB_WIDTH / 2),10) + 'px', width: TB_WIDTH + 'px'});
}

function tb_parseQuery ( query ) {
   var Params = {};
   if ( ! query ) {return Params;}// return empty object
   var Pairs = query.split(/[;&]/);
   for ( var i = 0; i < Pairs.length; i++ ) {
	  var KeyVal = Pairs[i].split('=');
	  if ( ! KeyVal || KeyVal.length != 2 ) {continue;}
	  var key = unescape( KeyVal[0] );
	  var val = unescape( KeyVal[1] );
	  val = val.replace(/\+/g, ' ');
	  Params[key] = val;
   }
   jQuery("#TB_window").css({marginTop: + jQuery(window).scrollTop()+60 + 'px'  });
   jQuery("#TB_window").css({position: "absolute"});
   return Params;
}

function tb_getPageSize(){
	var de = document.documentElement;
	var w = window.innerWidth || self.innerWidth || (de&&de.clientWidth) || document.body.clientWidth;
	var h = window.innerHeight || self.innerHeight || (de&&de.clientHeight) || document.body.clientHeight;
	arrayPageSize = [w,h];
	return arrayPageSize;
}

function tb_detectMacXFF() {
  var userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.indexOf('mac') != -1 && userAgent.indexOf('firefox')!=-1) {
	return true;
  }
}


// マンスリーショップ区分
var THICK_BOX_MC_SHOP_KBN="200";

var cartAddByShnDtlFlg = false;

// 【関数】カート追加処理(商品詳細)
function cartAddByShnDtl(thick_belnShopKbn,thick_cartAddurl){
	// 1.MCの場合
	if(thick_belnShopKbn == THICK_BOX_MC_SHOP_KBN){
		// 1.ライトボックス表示チェック
		if(lightBoxDisplayCheck(thick_belnShopKbn,this.window) == false){
			document.form01._ActionID.value = "dPrdDtlMcCrtAdd";
			
			// 色
			var thick_iroObj =document.getElementsByName("IRO_SKBT_SEQ");
			if (thick_iroObj != null && thick_iroObj != undefined && thick_iroObj.length != 0) {
				thick_iroObj[0].disabled = false;
			}
			// サイズ１
			var thick_size1Obj =document.getElementsByName("SIZE1_SKBT_SEQ");
			if (thick_size1Obj != null && thick_size1Obj != undefined && thick_size1Obj.length != 0) {
				thick_size1Obj[0].disabled = false;
			} 
			// サイズ２
			var thick_size2Obj =document.getElementsByName("SIZE2_SKBT_SEQ");
			if (thick_size2Obj != null && thick_size2Obj != undefined && thick_size2Obj.length != 0) {
				thick_size2Obj[0].disabled = false;
			}
			// サイズ３
			var thick_size3Obj =document.getElementsByName("SIZE3_SKBT_SEQ");
			if (thick_size3Obj != null && thick_size3Obj != undefined && thick_size3Obj.length != 0) {
				thick_size3Obj[0].disabled = false;
			} 

			document.form01.submit(); 
			return false;
		}
		
		// 2.カートに追加した商品の情報をセット
		// 色サイズ情報
		var thick_existIroSize = false;
		var thick_iroSize = "(";
		var thick_iroSkbtSeq ="";
		var thick_size1SkbtSeq = "";
		var thick_size2SkbtSeq = "";
		var thick_size3SkbtSeq = "";
		
		// 色
		var thick_iroObj =document.getElementsByName("IRO_SKBT_SEQ");
		var thick_iroTitle = document.getElementById("iro_title").innerHTML;
		if (thick_iroObj != null && thick_iroObj != undefined && thick_iroObj.length != 0) {
			thick_iroSize += thick_iroTitle + "：" + thick_iroObj[0].options[thick_iroObj[0].selectedIndex].text;
			thick_iroSkbtSeq = thick_iroObj[0].options[thick_iroObj[0].selectedIndex].value;
			thick_existIroSize = true;
		}
		// サイズ１
		var thick_size1Obj =document.getElementsByName("SIZE1_SKBT_SEQ");
		var thick_size1Title = document.getElementById("size1_title").innerHTML;
		if (thick_size1Obj != null && thick_size1Obj != undefined && thick_size1Obj.length != 0) {
			if (thick_existIroSize == true) {
				thick_iroSize += "／";
			}
			thick_iroSize += thick_size1Title + "：" + thick_size1Obj[0].options[thick_size1Obj[0].selectedIndex].text;
			thick_size1SkbtSeq += thick_size1Obj[0].options[thick_size1Obj[0].selectedIndex].value;
			thick_existIroSize = true;
		}

		// サイズ２
		var thick_size2Obj =document.getElementsByName("SIZE2_SKBT_SEQ");
		var thick_size2Title = document.getElementById("size2_title").innerHTML;
		if (thick_size2Obj != null && thick_size2Obj != undefined && thick_size2Obj.length != 0) {
			if (thick_existIroSize == true) {
				thick_iroSize += "／";
			}
			thick_iroSize += thick_size2Title + "：" +  thick_size2Obj[0].options[thick_size2Obj[0].selectedIndex].text;
			thick_size2SkbtSeq += thick_size2Obj[0].options[thick_size2Obj[0].selectedIndex].value;
			thick_existIroSize = true;
		}
		// サイズ３
		var thick_size3Obj =document.getElementsByName("SIZE3_SKBT_SEQ");
		var thick_size3Title = document.getElementById("size3_title").innerHTML;
		if (thick_size3Obj != null && thick_size3Obj != undefined && thick_size3Obj.length != 0) {
			if (thick_existIroSize == true) {
				thick_iroSize += "／";
			}
			thick_iroSize += thick_size3Title + "：" + thick_size3Obj[0].options[thick_size3Obj[0].selectedIndex].text;
			thick_size3SkbtSeq += thick_size3Obj[0].options[thick_size3Obj[0].selectedIndex].value;
			thick_existIroSize = true;
		}
		if (thick_existIroSize == true) {
			thick_iroSize += ")";
		} else {
			thick_iroSize = "";
		}
		document.getElementById('iro_size').innerHTML = thick_iroSize;
		
		// 数量
		var thick_q = document.getElementsByName("Q")[0].value;
		document.getElementById('quantity').innerHTML = thick_q;
		
		//複数品番追加区分
		document.getElementById('fks_hbn_kbn').innerHTML = "0";

		// 3.カート追加のURL生成
		// 大カテゴリＩＤ
		var thick_daiCategoryId = "";
		var thick_daiCategoryIdObj = document.getElementsByName("DAI_CATEGORY_ID");
		if (thick_daiCategoryIdObj != null && thick_daiCategoryIdObj != undefined && thick_daiCategoryIdObj.length != 0 ){
			thick_daiCategoryId = thick_daiCategoryIdObj[0].value;
		}
		// 中カテゴリＩＤ
		var thick_chCategoryId = "";
		var thick_chCategoryIdObj = document.getElementsByName("CH_CATEGORY_ID");
		if (thick_chCategoryIdObj != null && thick_chCategoryIdObj != undefined && thick_chCategoryIdObj.length != 0 ){
			thick_chCategoryId = thick_chCategoryIdObj[0].value;
		}
		// 小カテゴリＩＤ
		var thick_shoctgrId = "";
		var thick_shoctgrIdObj = document.getElementsByName("SHOCTGR_ID");
		if (thick_shoctgrIdObj != null && thick_shoctgrIdObj != undefined && thick_shoctgrIdObj.length != 0 ){
			thick_shoctgrId = thick_shoctgrIdObj[0].value;
		}
		// 型媒年季
		var thick_katBtgoObj = document.getElementsByName("KAT_BTGO");
		var thick_katBtgo= thick_katBtgoObj[0].value;
		
		// 商品カート追加経路区分
		var thick_shncrttkkroKbn = "";
		var thick_shncrttkkroKbnObj = document.getElementsByName("SHNCRTTKKRO_KBN");
		if (thick_shncrttkkroKbnObj != null && thick_shncrttkkroKbnObj != undefined && thick_shncrttkkroKbnObj.length != 0 ){
			thick_shncrttkkroKbn = thick_shncrttkkroKbnObj[0].value;
		}
		// お気に入りリスト経由区分
		var thick_olstKyuKbn = "";
		var thick_olstKyuKbnObj = document.getElementsByName("OLST_KYU_KBN");
		if (thick_olstKyuKbnObj != null && thick_olstKyuKbnObj != undefined && thick_olstKyuKbnObj.length != 0 ){
			thick_olstKyuKbn = thick_olstKyuKbnObj[0].value;
		}
		// リンクシェア直接経由区分
		var thick_lsChsKyuKbn = "";
		var thick_lsChsKyuKbnObj = document.getElementsByName("LS_CHS_KYU_KBN");
		if (thick_lsChsKyuKbnObj != null && thick_lsChsKyuKbnObj != undefined && thick_lsChsKyuKbnObj.length != 0 ){
			thick_lsChsKyuKbn = thick_lsChsKyuKbnObj[0].value;
		}
		// メール直接経由区分
		var thick_mlChsKyuKbn = "";
		var thick_mlChsKyuKbnObj = document.getElementsByName("ML_CHS_KYU_KBN");
		if (thick_mlChsKyuKbnObj != null && thick_mlChsKyuKbnObj != undefined && thick_mlChsKyuKbnObj.length != 0 ){
			thick_mlChsKyuKbn = thick_mlChsKyuKbnObj[0].value;
		}
		// 動的画面区分
		var thick_dtkGmnKbn = "";
		var thick_dtkGmnKbnObj = document.getElementsByName("DTK_GMN_KBN");
		if (thick_dtkGmnKbnObj != null && thick_dtkGmnKbnObj != undefined && thick_dtkGmnKbnObj.length != 0 ){
			thick_dtkGmnKbn = thick_dtkGmnKbnObj[0].value;
		}
		// 関連商品パラメータ
		var thick_knrnShn = "";
		var thick_knrnShnObj = document.getElementsByName("XPROD_KAT_NO_PRM");
		if (thick_knrnShnObj != null && thick_knrnShnObj != undefined && thick_knrnShnObj.length != 0 ){
			thick_knrnShn = thick_knrnShnObj[0].value;
		}
		// catパラメータ
		var thick_catPrm = "";
		var thick_catPrmObj = document.getElementsByName("CAT_PRM");
		if (thick_catPrmObj != null && thick_catPrmObj != undefined && thick_catPrmObj.length != 0 ){
			thick_catPrm = thick_catPrmObj[0].value;
		}
		thick_cartAddurl += "BELN_SHOP_KBN=" + thick_belnShopKbn 
					+ "&DAI_CATEGORY_ID=" + thick_daiCategoryId
					+ "&CH_CATEGORY_ID=" + thick_chCategoryId
					+ "&SHOCTGR_ID=" + thick_shoctgrId
					+ "&KAT_BTGO=" + thick_katBtgo
					+ "&SHNCRTTKKRO_KBN=" + thick_shncrttkkroKbn
					+ "&OLST_KYU_KBN=" + thick_olstKyuKbn
					+ "&LS_CHS_KYU_KBN=" + thick_lsChsKyuKbn
					+ "&ML_CHS_KYU_KBN=" + thick_mlChsKyuKbn
					+ "&DTK_GMN_KBN=" + thick_dtkGmnKbn
					+ "&LIT_BOX_HYJKBN=1"
					+ "&GMN_KBN=1";
		// 関連商品パラメータ
		if(thick_knrnShn!=""){
			thick_cartAddurl += "&XPROD_KAT_NO_PRM=" + thick_knrnShn;
		}
		// catパラメータ
		if(thick_catPrm!=""){
			thick_cartAddurl += "&CAT_PRM=" + thick_catPrm;
		}
		// 色識別連番
		if(thick_iroSkbtSeq!=""){
			thick_cartAddurl += "&IRO_SKBT_SEQ=" + thick_iroSkbtSeq;
		}
		// サイズ１識別連番
		if(thick_size1SkbtSeq!=""){
			thick_cartAddurl += "&SIZE1_SKBT_SEQ=" + thick_size1SkbtSeq;
		}
		// サイズ２識別連番
		if(thick_size2SkbtSeq!=""){
			thick_cartAddurl += "&SIZE2_SKBT_SEQ=" + thick_size2SkbtSeq;
		}
		// サイズ３識別連番
		if(thick_size3SkbtSeq!=""){
			thick_cartAddurl += "&SIZE3_SKBT_SEQ=" + thick_size3SkbtSeq;
		}
		// 数量＆ライトボックス表示用パラメータ
		thick_cartAddurl += "&Q=" + thick_q
	/* 修正 110928 TAM ココから */
					+ "&TB_iframe=true&height=458&width=865";
	/* 修正 110928 TAM ココまで */

		// 4.iframe表示処理を呼び出す
		tb_show("この商品を購入された方へおすすめ",thick_cartAddurl,"");

	// 2.BMの場合
	} else {
		// ２度押し防止
		if (cartAddByShnDtlFlg) {
			return;
		}
		cartAddByShnDtlFlg = true;

		// 1.ライトボックス表示チェック
		var thick_litBoxHyjKbn;
		/* AMSオーダー情報入力フロー改善 add start 2016/02/25 */
		var lightBoxDisplayFlg = lightBoxDisplayCheck(thick_belnShopKbn,this.window);
		var odrIptSniKbn = getUrlValue(thick_cartAddurl, 'ORD_IPT_SNI_KBN');
		if (odrIptSniKbn == "1") {
			thick_litBoxHyjKbn = 5;
		} else if (lightBoxDisplayFlg == false) {
		/* AMSオーダー情報入力フロー改善 add end   2016/02/25 */
			thick_litBoxHyjKbn = 0;
		} else {
			thick_litBoxHyjKbn = 1;
		}

		// 非同期用URL取得
		var ss_url = thick_cartAddurl.substring(0, thick_cartAddurl.indexOf('srvlt') + 5);
		ss_url = ss_url.replace('srvlt', 'service');

		// 型媒年季
		var thick_katBtgoObj = document.getElementsByName("KAT_BTGO");
		var thick_katBtgo = thick_katBtgoObj[0].value;

		// リクエストURLを生成
		var uri = ss_url + '/EPFB00/EPFB0097/dProdStockCartAdd?BELN_SHOP_KBN=' + thick_belnShopKbn + '&KAT_BTGO=' + thick_katBtgo;

		// 色
		var thick_iroObj = document.getElementsByName("IRO_SKBT_SEQ");
		if (thick_iroObj != null && thick_iroObj != undefined && thick_iroObj.length != 0) {
			if (thick_iroObj[0].options[thick_iroObj[0].selectedIndex].value != 0) {
				uri += '&IRO_SKBT_SEQ=' + thick_iroObj[0].options[thick_iroObj[0].selectedIndex].value;
			}
		}
		// サイズ１
		var thick_size1Obj = document.getElementsByName("SIZE1_SKBT_SEQ");
		if (thick_size1Obj != null && thick_size1Obj != undefined && thick_size1Obj.length != 0) {
			if (thick_size1Obj[0].options[thick_size1Obj[0].selectedIndex].value != 0) {
				uri += '&SIZE1_SKBT_SEQ=' + thick_size1Obj[0].options[thick_size1Obj[0].selectedIndex].value;
			}
		}
		// サイズ２
		var thick_size2Obj = document.getElementsByName("SIZE2_SKBT_SEQ");
		if (thick_size2Obj != null && thick_size2Obj != undefined && thick_size2Obj.length != 0) {
			if (thick_size2Obj[0].options[thick_size2Obj[0].selectedIndex].value != 0) {
				uri += '&SIZE2_SKBT_SEQ=' + thick_size2Obj[0].options[thick_size2Obj[0].selectedIndex].value;
			}
		}
		// サイズ３
		var thick_size3Obj = document.getElementsByName("SIZE3_SKBT_SEQ");
		if (thick_size3Obj != null && thick_size3Obj != undefined && thick_size3Obj.length != 0) {
			if (thick_size3Obj[0].options[thick_size3Obj[0].selectedIndex].value != 0) {
				uri += '&SIZE3_SKBT_SEQ=' + thick_size3Obj[0].options[thick_size3Obj[0].selectedIndex].value;
			}
		}
		// 数量
		uri += '&Q=' + document.getElementsByName("Q")[0].value;
		// カート追加フラグ
		uri += '&CART_ADD_FLG=1';
		// 名入れ商品区分
		if (document.form01.NR_SHN_KBN != undefined) {
			var nrShnKbn = document.form01.NR_SHN_KBN.value;
			uri = uri + "&NR_SHN_KBN=" + nrShnKbn;
		}
		uri = uri + "&TIMESTAMP=" + createTimeStamp() + "&SHN_SHS_FRM_SNI_KBN=1";
		
		// 在庫状況
		var ZK_JKY = "";
		// 在庫状況区分
		var ZK_JKY_KBN = "";
		// 再入荷案内表示フラグ
		var SNK_ANAI_FLG = "";
		// 代替商品_型媒年季
		var DTSHN_KAT_BTGO = "";
		// 再引当区分
		var SAI_HKT_KBN = "";
		// 購入不可区分
		var KNY_FK_KBN = "";
		// 購入不可メッセージ
		var KNY_FK_MSG = "";

		// 在庫情報を取得
		$.ajax({
			type: "GET",
			url: uri,
			cache: false,
			dataType: "jsonp",
			jsonpCallback: "setInventoryInfoCartAdd",
			success: function(data) {
				var info = data.INVENTORY_INFO_CART_ADD[0];
				if (info) {
					ZK_JKY = String(info.ZK_JKY);					// 在庫状況
					SAI_HKT_KBN = String(info.SAI_HKT_KBN);			// 引当区分
					SNK_ANAI_FLG = String(info.SNK_ANAI_FLG);		// 再入荷案内表示フラグ
					DTSHN_KAT_BTGO = String(info.DTSHN_KAT_BTGO);	// 代替商品_型媒年季
					KNY_FK_KBN = String(info.KNY_FK_KBN);			// 購入不可区分
					KNY_FK_MSG = String(info.KNY_FK_MSG);			// 購入不可メッセージ

					// ライトボックス表示区分設定
					if (KNY_FK_KBN == "1") {
						thick_litBoxHyjKbn = 4;
					} else if (ZK_JKY.indexOf("soldout") != -1) {
						thick_litBoxHyjKbn = 2;
 					} else if (SAI_HKT_KBN == "C" ) {
						thick_litBoxHyjKbn = 3;
					}

					// 在庫状況のタグ変換
					if (ZK_JKY.indexOf("soldout") != -1) {
						// 売り切れの場合
						ZK_JKY = ZK_JKY.replace(/ class="stock-soldout"/g,"");
						ZK_JKY = ZK_JKY.replace(/<span>/g,"");
						ZK_JKY = ZK_JKY.replace(/<\/span>/g,"");
						ZK_JKY_KBN = 0;
					} else if (ZK_JKY.indexOf("wait") != -1) {
						// 入荷予定の場合
						ZK_JKY = ZK_JKY.replace(/ class="stock-wait"/g,"");
						ZK_JKY = ZK_JKY.replace(/<span>/g,"");
						ZK_JKY = ZK_JKY.replace(/<\/span>/g,"");
						ZK_JKY_KBN = 2;
					} else {
						// 在庫ありの場合
						ZK_JKY = ZK_JKY.replace(/ class="stock"/g,"");
						ZK_JKY = ZK_JKY.replace(/<span>/g,"");
						ZK_JKY = ZK_JKY.replace(/<\/span>/g,"");
						ZK_JKY_KBN = 1;
					}
				}
			},
			complete: function (XHRoj, textStatus) {
				if(thick_litBoxHyjKbn == 0){
					document.form01._ActionID.value = "dProdDtlCartAdd";

					// 色
					if (thick_iroObj != null && thick_iroObj != undefined && thick_iroObj.length != 0) {
						thick_iroObj[0].disabled = false;
					}
					// サイズ１
					if (thick_size1Obj != null && thick_size1Obj != undefined && thick_size1Obj.length != 0) {
						thick_size1Obj[0].disabled = false;
					} 
					// サイズ２
					if (thick_size2Obj != null && thick_size2Obj != undefined && thick_size2Obj.length != 0) {
						thick_size2Obj[0].disabled = false;
					}
					// サイズ３
					if (thick_size3Obj != null && thick_size3Obj != undefined && thick_size3Obj.length != 0) {
						thick_size3Obj[0].disabled = false;
					} 

					document.form01.submit(); 
					return false;
				}
				
				// 2.カートに追加した商品の情報をセット
				// 色サイズ情報
				var thick_existIroSize = false;
				var thick_iroSize = "(";
				var thick_iroSkbtSeq ="";
				var thick_size1SkbtSeq = "";
				var thick_size2SkbtSeq = "";
				var thick_size3SkbtSeq = "";
				
				// 色
				var thick_iroTitle = document.getElementById("iro_title").innerHTML;
				if (thick_iroObj != null && thick_iroObj != undefined && thick_iroObj.length != 0) {
					thick_iroSize += thick_iroTitle + "：" + thick_iroObj[0].options[thick_iroObj[0].selectedIndex].text;
					thick_iroSkbtSeq = thick_iroObj[0].options[thick_iroObj[0].selectedIndex].value;
					thick_existIroSize = true;
				}
				// サイズ１
				var thick_size1Title = document.getElementById("size1_title").innerHTML;
				if (thick_size1Obj != null && thick_size1Obj != undefined && thick_size1Obj.length != 0) {
					if (thick_existIroSize == true) {
						thick_iroSize += "／";
					}
					thick_iroSize += thick_size1Title + "：" + thick_size1Obj[0].options[thick_size1Obj[0].selectedIndex].text;
					thick_size1SkbtSeq += thick_size1Obj[0].options[thick_size1Obj[0].selectedIndex].value;
					thick_existIroSize = true;
				}

				// サイズ２
				var thick_size2Title = document.getElementById("size2_title").innerHTML;
				if (thick_size2Obj != null && thick_size2Obj != undefined && thick_size2Obj.length != 0) {
					if (thick_existIroSize == true) {
						thick_iroSize += "／";
					}
					thick_iroSize += thick_size2Title + "：" +  thick_size2Obj[0].options[thick_size2Obj[0].selectedIndex].text;
					thick_size2SkbtSeq += thick_size2Obj[0].options[thick_size2Obj[0].selectedIndex].value;
					thick_existIroSize = true;
				}
				// サイズ３
				var thick_size3Title = document.getElementById("size3_title").innerHTML;
				if (thick_size3Obj != null && thick_size3Obj != undefined && thick_size3Obj.length != 0) {
					if (thick_existIroSize == true) {
						thick_iroSize += "／";
					}
					thick_iroSize += thick_size3Title + "：" + thick_size3Obj[0].options[thick_size3Obj[0].selectedIndex].text;
					thick_size3SkbtSeq += thick_size3Obj[0].options[thick_size3Obj[0].selectedIndex].value;
					thick_existIroSize = true;
				}
				if (thick_existIroSize == true) {
					thick_iroSize += ")";
				} else {
					thick_iroSize = "";
				}
				document.getElementById('iro_size').innerHTML = thick_iroSize;
				
				// 購入不可メッセージ
				if (KNY_FK_MSG.indexOf("undefined") == -1) {
					var thick_knyFkMsg = document.getElementById('kny_fk_msg');
					if (thick_knyFkMsg != null && thick_knyFkMsg != undefined) {
						thick_knyFkMsg.innerHTML = KNY_FK_MSG;
					}
				}
				
				// 数量
				var thick_q = document.getElementsByName("Q")[0].value;
				document.getElementById('quantity').innerHTML = thick_q;
				
				//複数品番追加区分
				document.getElementById('fks_hbn_kbn').innerHTML = "0";

				// 3.カート追加のURL生成
				// 大カテゴリＩＤ
				var thick_daiCategoryId = "";
				var thick_daiCategoryIdObj = document.getElementsByName("DAI_CATEGORY_ID");
				if (thick_daiCategoryIdObj != null && thick_daiCategoryIdObj != undefined && thick_daiCategoryIdObj.length != 0 ){
					thick_daiCategoryId = thick_daiCategoryIdObj[0].value;
				}
				// 中カテゴリＩＤ
				var thick_chCategoryId = "";
				var thick_chCategoryIdObj = document.getElementsByName("CH_CATEGORY_ID");
				if (thick_chCategoryIdObj != null && thick_chCategoryIdObj != undefined && thick_chCategoryIdObj.length != 0 ){
					thick_chCategoryId = thick_chCategoryIdObj[0].value;
				}
				// 小カテゴリＩＤ
				var thick_shoctgrId = "";
				var thick_shoctgrIdObj = document.getElementsByName("SHOCTGR_ID");
				if (thick_shoctgrIdObj != null && thick_shoctgrIdObj != undefined && thick_shoctgrIdObj.length != 0 ){
					thick_shoctgrId = thick_shoctgrIdObj[0].value;
				}
				
				// 商品カート追加経路区分
				var thick_shncrttkkroKbn = "";
				var thick_shncrttkkroKbnObj = document.getElementsByName("SHNCRTTKKRO_KBN");
				if (thick_shncrttkkroKbnObj != null && thick_shncrttkkroKbnObj != undefined && thick_shncrttkkroKbnObj.length != 0 ){
					thick_shncrttkkroKbn = thick_shncrttkkroKbnObj[0].value;
				}
				// お気に入りリスト経由区分
				var thick_olstKyuKbn = "";
				var thick_olstKyuKbnObj = document.getElementsByName("OLST_KYU_KBN");
				if (thick_olstKyuKbnObj != null && thick_olstKyuKbnObj != undefined && thick_olstKyuKbnObj.length != 0 ){
					thick_olstKyuKbn = thick_olstKyuKbnObj[0].value;
				}
				// リンクシェア直接経由区分
				var thick_lsChsKyuKbn = "";
				var thick_lsChsKyuKbnObj = document.getElementsByName("LS_CHS_KYU_KBN");
				if (thick_lsChsKyuKbnObj != null && thick_lsChsKyuKbnObj != undefined && thick_lsChsKyuKbnObj.length != 0 ){
					thick_lsChsKyuKbn = thick_lsChsKyuKbnObj[0].value;
				}
				// メール直接経由区分
				var thick_mlChsKyuKbn = "";
				var thick_mlChsKyuKbnObj = document.getElementsByName("ML_CHS_KYU_KBN");
				if (thick_mlChsKyuKbnObj != null && thick_mlChsKyuKbnObj != undefined && thick_mlChsKyuKbnObj.length != 0 ){
					thick_mlChsKyuKbn = thick_mlChsKyuKbnObj[0].value;
				}
				// 動的画面区分
				var thick_dtkGmnKbn = "";
				var thick_dtkGmnKbnObj = document.getElementsByName("DTK_GMN_KBN");
				if (thick_dtkGmnKbnObj != null && thick_dtkGmnKbnObj != undefined && thick_dtkGmnKbnObj.length != 0 ){
					thick_dtkGmnKbn = thick_dtkGmnKbnObj[0].value;
				}
				// 関連商品パラメータ
				var thick_knrnShn = "";
				var thick_knrnShnObj = document.getElementsByName("XPROD_KAT_NO_PRM");
				if (thick_knrnShnObj != null && thick_knrnShnObj != undefined && thick_knrnShnObj.length != 0 ){
					thick_knrnShn = thick_knrnShnObj[0].value;
				}
				// catパラメータ
				var thick_catPrm = "";
				var thick_catPrmObj = document.getElementsByName("CAT_PRM");
				if (thick_catPrmObj != null && thick_catPrmObj != undefined && thick_catPrmObj.length != 0 ){
					thick_catPrm = thick_catPrmObj[0].value;
				}

				if (thick_litBoxHyjKbn == 2 || thick_litBoxHyjKbn == 3 || thick_litBoxHyjKbn == 4) {
					thick_cartAddurl += "BELN_SHOP_KBN=" + thick_belnShopKbn 
								+ "&DAI_CATEGORY_ID=" + thick_daiCategoryId
								+ "&CH_CATEGORY_ID=" + thick_chCategoryId
								+ "&SHOCTGR_ID=" + thick_shoctgrId
								+ "&KAT_BTGO=" + thick_katBtgo
								+ "&SHNCRTTKKRO_KBN=" + thick_shncrttkkroKbn
								+ "&OLST_KYU_KBN=" + thick_olstKyuKbn
								+ "&LS_CHS_KYU_KBN=" + thick_lsChsKyuKbn
								+ "&ML_CHS_KYU_KBN=" + thick_mlChsKyuKbn
								+ "&DTK_GMN_KBN=" + thick_dtkGmnKbn
								+ "&LIT_BOX_HYJKBN=" + thick_litBoxHyjKbn
								+ "&GMN_KBN=1"
								+ "&ZK_JKY=" + ZK_JKY
								+ "&ZK_JKY_KBN=" + ZK_JKY_KBN
								+ "&SNK_ANAI_FLG=" + SNK_ANAI_FLG
								+ "&DTSHN_KAT_BTGO=" + DTSHN_KAT_BTGO;
				} else {
					thick_cartAddurl += "BELN_SHOP_KBN=" + thick_belnShopKbn 
								+ "&DAI_CATEGORY_ID=" + thick_daiCategoryId
								+ "&CH_CATEGORY_ID=" + thick_chCategoryId
								+ "&SHOCTGR_ID=" + thick_shoctgrId
								+ "&KAT_BTGO=" + thick_katBtgo
								+ "&SHNCRTTKKRO_KBN=" + thick_shncrttkkroKbn
								+ "&OLST_KYU_KBN=" + thick_olstKyuKbn
								+ "&LS_CHS_KYU_KBN=" + thick_lsChsKyuKbn
								+ "&ML_CHS_KYU_KBN=" + thick_mlChsKyuKbn
								+ "&DTK_GMN_KBN=" + thick_dtkGmnKbn
								+ "&LIT_BOX_HYJKBN=" + thick_litBoxHyjKbn
								+ "&GMN_KBN=1";
				}

				// 関連商品パラメータ
				if(thick_knrnShn!=""){
					thick_cartAddurl += "&XPROD_KAT_NO_PRM=" + thick_knrnShn;
				}
				// catパラメータ
				if(thick_catPrm!=""){
					thick_cartAddurl += "&CAT_PRM=" + thick_catPrm;
				}
				// 色識別連番
				if(thick_iroSkbtSeq!=""){
					thick_cartAddurl += "&IRO_SKBT_SEQ=" + thick_iroSkbtSeq;
				}
				// サイズ１識別連番
				if(thick_size1SkbtSeq!=""){
					thick_cartAddurl += "&SIZE1_SKBT_SEQ=" + thick_size1SkbtSeq;
				}
				// サイズ２識別連番
				if(thick_size2SkbtSeq!=""){
					thick_cartAddurl += "&SIZE2_SKBT_SEQ=" + thick_size2SkbtSeq;
				}
				// サイズ３識別連番
				if(thick_size3SkbtSeq!=""){
					thick_cartAddurl += "&SIZE3_SKBT_SEQ=" + thick_size3SkbtSeq;
				}
				/* AMSオーダー情報入力フロー改善 update start 2016/02/25 */
				// 名入れ商品区分
				// (名入れ商品の場合、名入れ商品区分を設定済みなので、こちらに設定不要とする)
				if (odrIptSniKbn != "1" && document.form01.NR_SHN_KBN != undefined) {
					var nrShnKbn = document.form01.NR_SHN_KBN.value;
					thick_cartAddurl += "&NR_SHN_KBN=" + nrShnKbn;
				}
				//遷移先区分
				if (thick_litBoxHyjKbn == 5) {
					if(lightBoxDisplayFlg == false) {
						thick_cartAddurl += "&SNI_SK_KBN=0";
					} else {
						thick_cartAddurl += "&SNI_SK_KBN=1";
					}
				}
				
				if (thick_litBoxHyjKbn == 2 || thick_litBoxHyjKbn == 3 || thick_litBoxHyjKbn == 4) {
					// 数量＆ライトボックス表示用パラメータ
					thick_cartAddurl += "&Q=" + thick_q
								+ "&TB_iframe=true&height=458&width=700";
				} else if (thick_litBoxHyjKbn == 5) {
					// 数量＆ライトボックス表示用パラメータ
					thick_cartAddurl += "&Q=" + thick_q
								+ "&TB_iframe=true&height=500&width=830";
				} else {
					// 数量＆ライトボックス表示用パラメータ
					thick_cartAddurl += "&Q=" + thick_q
								+ "&TB_iframe=true&height=563&width=865";
				}
				
				// 4.iframe表示処理を呼び出す
				if (thick_litBoxHyjKbn == 5) {
					tb_show("",thick_cartAddurl,"");
				} else {
					tb_show("この商品を購入された方へおすすめ",thick_cartAddurl,"");
				}
				/* AMSオーダー情報入力フロー改善 update end   2016/02/25 */
				cartAddByShnDtlFlg = false;
			},
			error: function() {//通信エラー
				cartAddByShnDtlFlg = false;
			}
		});
	}
}
	
// 【関数】ライトボックス表示チェック
function lightBoxDisplayCheck(thick_belnShopKbn,thisWindow){
	if( thick_belnShopKbn == THICK_BOX_MC_SHOP_KBN){
		// MCの場合
		// 関連商品 
		// 20101008 014131_【ベルネ・ベルネ商品システム】関連商品表示・登録の改修 
		var thick_kanren = thisWindow.document.getElementById('carouselArea01Item');
		// おすすめ商品
		var thick_hikaku = thisWindow.document.getElementById('hikaku');
		// 関連商品及びおすすめ商品が表示されていない場合
		if((thick_kanren == null || thick_kanren == undefined ) && (thick_hikaku == null || thick_hikaku == undefined)){
			return false;
		}
	}else{
		// BMの場合
		// 関連商品 
		// 20101008 014131_【ベルネ・ベルネ商品システム】関連商品表示・登録の改修
		var thick_kanren = thisWindow.document.getElementById('carouselArea01Item');
		// レコメンド商品
		var thick_recomHyoji = false;
		try {
			var thick_recom_div = thisWindow.document.getElementById('recommender_1');
			var thick_recom_div_old = thisWindow.document.getElementById('recommender_bm_j1');
			if(thick_recom_div != null && thick_recom_div!=undefined){
				if(thick_recom_div.hasChildNodes() == true){
					// レコメンド商品がある場合のみ
					thick_recomHyoji = true;
				}
			} else if (thick_recom_div_old != null && thick_recom_div_old!=undefined){
				if(thick_recom_div_old.hasChildNodes() == true){
					// レコメンド商品がある場合のみ
					thick_recomHyoji = true;
				}
			} else {
				var thick_iframe = thisWindow.document.getElementsByTagName('iframe')[0];
				if(thick_iframe != null && thick_iframe!=undefined){
					var thick_recommend = thick_iframe.contentWindow.document.getElementById('iframeRecom');
					if(thick_recommend != null && thick_recommend!=undefined){
						thick_recomHyoji = true;
					}
				}
			}
		} catch(e) {
		}
		// 関連商品及びレコメンド商品が表示されていない場合
		if((thick_kanren == null || thick_kanren == undefined ) && (thick_recomHyoji==false)){
			return false;
		}
	}
}

// 【関数】カート追加処理(在庫一覧)
function cartAddByZaiko(thick_belnShopKbn,thick_cartAddurl,thick_indx,thick_select_indx,thick_ord_q){
	// 1.親画面チェック
	//  1.1親画面の存在チェック
	if( opener == null || opener == undefined || opener.closed == true){
		// お買い物を続けるボタン区分が設定されている場合削除
		if (thick_cartAddurl.indexOf("ZK_FRM_SNI_KBN") != -1) {
			var thick_zkFrmSniKbn = thick_cartAddurl.substring(thick_cartAddurl.indexOf("ZK_FRM_SNI_KBN"),thick_cartAddurl.length);
			if(thick_zkFrmSniKbn.indexOf("&") != -1) {
				thick_zkFrmSniKbn = thick_zkFrmSniKbn.substring(0,thick_zkFrmSniKbn.indexOf("&"));
			} 
			thick_cartAddurl = thick_cartAddurl.replace(thick_zkFrmSniKbn,"ZK_FRM_SNI_KBN=3");
		}
		var thick_newWin = window.open(thick_cartAddurl);
		window.close();
		return false;
	}
	//  1.2 親画面が商品詳細&型媒年季が同じかチェック
	var thick_lightboxSniFlg = false;

	try {
		var thick_shohinDtlKatBtgo = opener.window.document.getElementById('shohin_kat_btgo');
		if (thick_shohinDtlKatBtgo != null && thick_shohinDtlKatBtgo != undefined) {
			// 親画面が商品詳細画面の場合
			if (thick_shohinDtlKatBtgo.innerHTML == this.document.getElementById('shohin_kat_btgo').innerHTML){
				// 型媒年季が同じ場合
				thick_lightboxSniFlg = true;
			}
		}
	} catch (e){
		// ドメインが異なる場合(お気に入りリスト＆おすすめ商品)、ライトボックス非表示
		
	}

	// 2.ライトボックス表示チェック
	if(thick_lightboxSniFlg==false || lightBoxDisplayCheck(thick_belnShopKbn,opener.window) == false){
		// ライトボックスを表示しない場合
		//●20110309 AMS 変更 ●(opener⇒opener.parentに変更)
		window.opener.parent.focus();
		window.opener.parent.location.href = thick_cartAddurl;
		window.close();
		return false;
	}
	
	// 3.商品詳細へ値の埋め込み
	if (thick_indx > 1 ) {
		// 複数品番をカートヘ追加する場合
		opener.window.document.getElementById('iro_size').innerHTML = "";
		opener.window.document.getElementById('quantity').innerHTML = "";
		opener.window.document.getElementById('kakk').innerHTML = "";
		opener.window.document.getElementById('fks_hbn_kbn').innerHTML = "1";
	} else {
		// 単一品番をカートヘ追加する場合
		var thick_iroSize = "(";
		var thick_existIroSize = false;
		
		// 色
		var thick_iroMesObj = document.getElementById('iro_mes' + thick_select_indx );
		if(thick_iroMesObj != null && thick_iroMesObj != undefined){
			thick_iroSize += thick_iroMesObj.innerHTML;
			thick_existIroSize = true;
		}
		// サイズ１
		var thick_size1MesObj = document.getElementById('size1_mes' + thick_select_indx);
		if(thick_size1MesObj != null && thick_size1MesObj != undefined){
			if (thick_existIroSize == true) {
				thick_iroSize += "／";
			}
			thick_iroSize += thick_size1MesObj.innerHTML;
			thick_existIroSize = true;
		}
		// サイズ２
		var thick_size2MesObj = document.getElementById('size2_mes' + thick_select_indx);
		if(thick_size2MesObj != null && thick_size2MesObj != undefined){
			if (thick_existIroSize == true) {
				thick_iroSize += "／";
			}
			thick_iroSize += thick_size2MesObj.innerHTML;
			thick_existIroSize = true;
		}
		// サイズ３
		var thick_size3MesObj = document.getElementById('size3_mes' + thick_select_indx);
		if(thick_size3MesObj != null && thick_size3MesObj != undefined){
			if (thick_existIroSize == true) {
				thick_iroSize += "／";
			}
			thick_iroSize += thick_size3MesObj.innerHTML;
			thick_existIroSize = true;
		}
		
		if (thick_existIroSize == true) {
			thick_iroSize += ")";
		} else {
			thick_iroSize = "";
		}
		opener.window.document.getElementById('iro_size').innerHTML = thick_iroSize;
		opener.window.document.getElementById('quantity').innerHTML = thick_ord_q;
		var thick_kakk = document.getElementById('kakk' + thick_select_indx).innerHTML;
		// ベルメゾンで価格帯がある場合
		if (thick_belnShopKbn != THICK_BOX_MC_SHOP_KBN && thick_kakk.indexOf("～") != -1) {
			thick_kakk = thick_kakk.substring(thick_kakk.indexOf("～")+1,thick_kakk.length);
			// 本体価格が表示されている場合
			if(thick_kakk.indexOf("～") != -1) {
				thick_kakk = thick_kakk.replace("<BR>","");
				thick_kakk = thick_kakk.replace("<br>","");
				thick_kakk = thick_kakk.substring(0,thick_kakk.indexOf("本体")+2) +  thick_kakk.substring(thick_kakk.indexOf("～")+1,thick_kakk.length);
			}
		}
		opener.window.document.getElementById('kakk').innerHTML = thick_kakk;
		opener.window.document.getElementById('fks_hbn_kbn').innerHTML = "0";
	}
	// 4.親画面にライトボックスが表示されていた場合、ライトボックスを閉じる
	// 5.iframe表示処理を呼び出す
	// 関連商品パラメータ
	var thick_knrnShn = "";
	var thick_knrnShnObj = opener.window.document.getElementsByName("XPROD_KAT_NO_PRM");
	if (thick_knrnShnObj != null && thick_knrnShnObj != undefined && thick_knrnShnObj.length != 0 ){
		thick_knrnShn = thick_knrnShnObj[0].value;
	}
	// 関連商品パラメータ
	if(thick_knrnShn!=""){
		thick_cartAddurl += "&XPROD_KAT_NO_PRM=" + thick_knrnShn;
	}
	// catパラメータ
	var thick_catPrm = "";
	var thick_catPrmObj = opener.window.document.getElementsByName("CAT_PRM");
	if (thick_catPrmObj != null && thick_catPrmObj != undefined && thick_catPrmObj.length != 0 ){
		thick_catPrm = thick_catPrmObj[0].value;
	}
	// catパラメータ
	if(thick_catPrm!=""){
		thick_cartAddurl += "&CAT_PRM=" + thick_catPrm;
	}

	thick_cartAddurl += "&LIT_BOX_HYJKBN=1&GMN_KBN=2"
				+ "&TB_iframe=true&height=458&width=865&zaiko=1";
	if(window.opener.jQuery("#TB_window").css("display") == "block"){
		// ライトボックスを閉じる
		opener.window.jQuery("#TB_closeWindowButton").trigger("click");
		// ライトボックスを消してから時間を置かないとライトボックスが表示されないため、タイムアウトを設定
		setTimeout("tb_show('この商品を購入された方へおすすめ','" + thick_cartAddurl + "','')", 500);
	}else {
		// 7.iframe表示処理を呼び出す
		tb_show('この商品を購入された方へおすすめ',thick_cartAddurl,'');
	}
}






// [[[[[[[[[[[[[[[[[[[[ 商品一覧 ]]]]]]]]]]]]]]]]]]]]


//add thickbox to href & area elements that have a class of .thickbox
function brstb_init(domChunk){
	$(domChunk).live('click',function(){
	var t = this.title || this.name || null;
	var a = this.href || this.alt;
	var g = this.rel || false;
	brstb_show(t,a,g);
	this.blur();
	return false;
	});
}

function brstb_show(caption, url, imageGroup) {//function called when the user clicks on a thickbox link
	try {
		tb_opened = true;
		if (typeof document.body.style.maxHeight === "undefined") {//if IE 6
			$("body","html").css({height: "100%", width: "100%"});
			//$("html").css("overflow","hidden");
			if (document.getElementById("TB_HideSelect") === null) {//iframe to hide select elements in ie6
				$("body").append("<iframe id='TB_HideSelect'></iframe><div id='TB_overlay'></div><div id='TB_window'></div>");
				$("#TB_overlay").click(brstb_remove);
			}
		}else{//all others
			if(document.getElementById("TB_overlay") === null){
				$("body").append("<div id='TB_overlay'></div><div id='TB_window'></div>");
				$("#TB_overlay").click(brstb_remove);
			}
		}
		
		if(brstb_detectMacXFF()){
			$("#TB_overlay").addClass("TB_overlayMacFFBGHack");//use png overlay so hide flash
		}else{
			$("#TB_overlay").addClass("TB_overlayBG");//use background and opacity
		}
		
		if(caption===null){caption="";}
		//$("body").append("<div id='TB_load'><img src='"+imgLoader.src+"' /></div>");//add loader to the page
		//$('#TB_load').show();//show loader
		
		var baseURL;
	   if(url.indexOf("?")!==-1){ //ff there is a query string involved
			baseURL = url.substr(0, url.indexOf("?"));
	   }else{ 
	   		baseURL = url;
	   }
	   
	   var urlString = /\.jpg$|\.jpeg$|\.png$|\.gif$|\.bmp$/;
	   var urlType = baseURL.toLowerCase().match(urlString);

		if(urlType == '.jpg' || urlType == '.jpeg' || urlType == '.png' || urlType == '.gif' || urlType == '.bmp'){//code to show images
				
			TB_PrevCaption = "";
			TB_PrevURL = "";
			TB_PrevHTML = "";
			TB_NextCaption = "";
			TB_NextURL = "";
			TB_NextHTML = "";
			TB_imageCount = "";
			TB_FoundURL = false;
			if(imageGroup){
				TB_TempArray = $("a[@rel="+imageGroup+"]").get();
				for (TB_Counter = 0; ((TB_Counter < TB_TempArray.length) && (TB_NextHTML === "")); TB_Counter++) {
					var urlTypeTemp = TB_TempArray[TB_Counter].href.toLowerCase().match(urlString);
						if (!(TB_TempArray[TB_Counter].href == url)) {						
							if (TB_FoundURL) {
								TB_NextCaption = TB_TempArray[TB_Counter].title;
								TB_NextURL = TB_TempArray[TB_Counter].href;
								TB_NextHTML = "<span id='TB_next'>&nbsp;&nbsp;<a href='#'>Next &gt;</a></span>";
							} else {
								TB_PrevCaption = TB_TempArray[TB_Counter].title;
								TB_PrevURL = TB_TempArray[TB_Counter].href;
								TB_PrevHTML = "<span id='TB_prev'>&nbsp;&nbsp;<a href='#'>&lt; Prev</a></span>";
							}
						} else {
							TB_FoundURL = true;
							TB_imageCount = "Image " + (TB_Counter + 1) +" of "+ (TB_TempArray.length);											
						}
				}
			}

			imgPreloader = new Image();
			imgPreloader.onload = function(){		
			imgPreloader.onload = null;
				
			// Resizing large images - orginal by Christian Montoya edited by me.
			var pagesize = brstb_getPageSize();
			var x = pagesize[0] - 150;
			var y = pagesize[1] - 150;
			var imageWidth = imgPreloader.width;
			var imageHeight = imgPreloader.height;
			if (imageWidth > x) {
				imageHeight = imageHeight * (x / imageWidth); 
				imageWidth = x; 
				if (imageHeight > y) { 
					imageWidth = imageWidth * (y / imageHeight); 
					imageHeight = y; 
				}
			} else if (imageHeight > y) { 
				imageWidth = imageWidth * (y / imageHeight); 
				imageHeight = y; 
				if (imageWidth > x) { 
					imageHeight = imageHeight * (x / imageWidth); 
					imageWidth = x;
				}
			}
			// End Resizing
			
			TB_WIDTH = imageWidth + 30;
			TB_HEIGHT = imageHeight + 60;
			$("#TB_window").append("<a href='' id='TB_ImageOff' title='Close'><img id='TB_Image' src='"+url+"' width='"+imageWidth+"' height='"+imageHeight+"' alt='"+caption+"'/></a>" + "<div id='TB_caption'>"+caption+"<div id='TB_secondLine'>" + TB_imageCount + TB_PrevHTML + TB_NextHTML + "</div></div><div id='TB_closeWindow'><a href='#' id='TB_closeWindowButton' title='Close'>close</a> or Esc Key</div>"); 		
			
			$("#TB_closeWindowButton").click(brstb_remove);
			
			if (!(TB_PrevHTML === "")) {
				function goPrev(){
					if($(document).unbind("click",goPrev)){$(document).unbind("click",goPrev);}
					$("#TB_window").remove();
					$("body").append("<div id='TB_window'></div>");
					brstb_show(TB_PrevCaption, TB_PrevURL, imageGroup);
					return false;	
				}
				$("#TB_prev").click(goPrev);
			}
			
			if (!(TB_NextHTML === "")) {		
				function goNext(){
					$("#TB_window").remove();
					$("body").append("<div id='TB_window'></div>");
					brstb_show(TB_NextCaption, TB_NextURL, imageGroup);				
					return false;	
				}
				$("#TB_next").click(goNext);
				
			}

			document.onkeydown = function(e){ 	
				if (e == null) { // ie
					keycode = event.keyCode;
				} else { // mozilla
					keycode = e.which;
				}
				if(keycode == 27){ // close
					brstb_remove();
				} else if(keycode == 190){ // display previous image
					if(!(TB_NextHTML == "")){
						document.onkeydown = "";
						goNext();
					}
				} else if(keycode == 188){ // display next image
					if(!(TB_PrevHTML == "")){
						document.onkeydown = "";
						goPrev();
					}
				}	
			};
			
			brstb_position();
			$("#TB_load").remove();
			$("#TB_ImageOff").click(brstb_remove);
			$("#TB_window").css({display:"block"}); //for safari using css instead of show
			};
			
			imgPreloader.src = url;
		}else{//code to show html
			
			var queryString = url.replace(/^[^\?]+\??/,'');
			var params = brstb_parseQuery( queryString );

			TB_WIDTH = (params['width']*1) || 630; //defaults to 630 if no paramaters were added to URL
			TB_HEIGHT = (params['height']*1) || 440; //defaults to 440 if no paramaters were added to URL
			ajaxContentW = TB_WIDTH - 0;
			ajaxContentH = TB_HEIGHT - 0;
			
			if(url.indexOf('TB_iframe') != -1){// either iframe or ajax window		
					urlNoQuery = url.replace(/&TB_iframe=.*&width=\d+&height=\d+/, "");
					urlNoQuery = urlNoQuery.replace("m=", "RECOM_PRM_M=");
					urlNoQuery = urlNoQuery.replace("s=", "RECOM_PRM_S=");
					urlNoQuery = urlNoQuery.replace("i=", "RECOM_PRM_I=");
					urlNoQuery = urlNoQuery.replace("r=", "RECOM_PRM_R=");
					$("#TB_iframeContent").remove();
					if(params['modal'] != "true"){//iframe no modal
						$("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+caption+"</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton' title='Close'>close</a> or Esc Key</div></div><iframe frameborder='0' hspace='0' src='"+urlNoQuery+"' id='TB_iframeContent' name='TB_iframeContent"+Math.round(Math.random()*1000)+"' onload='brstb_showIframe()' style='width:"+(ajaxContentW + 0)+"px;height:"+(ajaxContentH + 0)+"px;' > </iframe>");
					}else{//iframe modal
					$("#TB_overlay").unbind();
						$("#TB_window").append("<iframe frameborder='0' hspace='0' src='"+urlNoQuery+"' id='TB_iframeContent' name='TB_iframeContent"+Math.round(Math.random()*1000)+"' onload='brstb_showIframe()' style='width:"+(ajaxContentW + 29)+"px;height:"+(ajaxContentH + 17)+"px;'> </iframe>");
					}
			}else{// not an iframe, ajax
					if($("#TB_window").css("display") != "block"){
						if(params['modal'] != "true"){//ajax no modal
						$("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+caption+"</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton'>close</a> or Esc Key</div></div><div id='TB_ajaxContent' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px'></div>");
						}else{//ajax modal
						$("#TB_overlay").unbind();
						$("#TB_window").append("<div id='TB_ajaxContent' class='TB_modal' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px;'></div>");	
						}
					}else{//this means the window is already up, we are just loading new content via ajax
						$("#TB_ajaxContent")[0].style.width = ajaxContentW +"px";
						$("#TB_ajaxContent")[0].style.height = ajaxContentH +"px";
						$("#TB_ajaxContent")[0].scrollTop = 0;
						$("#TB_ajaxWindowTitle").html(caption);
					}
			}
					
			$("#TB_closeWindowButton").click(brstb_remove);
			
				if(url.indexOf('TB_inline') != -1){	
					$("#TB_ajaxContent").append($('#' + params['inlineId']).children());
					$("#TB_window").unload(function () {
						$('#' + params['inlineId']).append( $("#TB_ajaxContent").children() ); // move elements back when you're finished
					});
					brstb_position();
					$("#TB_load").remove();
					$("#TB_window").css({display:"block"}); 
				}else if(url.indexOf('TB_iframe') != -1){
					brstb_position();
					if($.browser.safari){//safari needs help because it will not fire iframe onload
						$("#TB_load").remove();
						$("#TB_window").css({display:"block"});
					}
				}else{
					$("#TB_ajaxContent").load(url += "&random=" + (new Date().getTime()),function(){//to do a post change this load method
						brstb_position();
						$("#TB_load").remove();
						brstb_init("#TB_ajaxContent a.thickbox");
						$("#TB_window").css({display:"block"});
					});
				}
			
		}

		if(!params['modal']){
			document.onkeyup = function(e){ 	
				if (e == null) { // ie
					keycode = event.keyCode;
				} else { // mozilla
					keycode = e.which;
				}
				if(keycode == 27){ // close
					brstb_remove();
				}	
			};
		}
		
	} catch(e) {
		//nothing here
	}
}

//helper functions below
function brstb_showIframe(){
	$("#TB_load").remove();
	$("#TB_window").css({display:"block"});
	//$("#TB_window").css({left:"0"});
}

function brstb_remove() {
	if( $("#TB_window").css("display") == "block") {
 	$("#TB_imageOff").unbind("click");
	$("#TB_closeWindowButton").unbind("click");
	$("#TB_window").fadeOut("fast",function(){$('#TB_window,#TB_overlay,#TB_HideSelect').trigger("unload").unbind().remove();});
	$("#TB_load").remove();
	if (typeof document.body.style.maxHeight == "undefined") {//if IE 6
		$("body","html").css({height: "auto", width: "auto"});
		$("html").css("overflow","");
	}
	document.onkeydown = "";
	document.onkeyup = "";
	}
	return false;
}

function brstb_position() {
	$("#TB_window").css({marginLeft: '-' + parseInt((TB_WIDTH / 2),10) + 'px', width: TB_WIDTH + 'px'});
}

function brstb_parseQuery ( query ) {
   var Params = {};
   if ( ! query ) {return Params;}// return empty object
   var Pairs = query.split(/[;&]/);
   for ( var i = 0; i < Pairs.length; i++ ) {
      var KeyVal = Pairs[i].split('=');
      if ( ! KeyVal || KeyVal.length != 2 ) {continue;}
      var key = unescape( KeyVal[0] );
      var val = unescape( KeyVal[1] );
      val = val.replace(/\+/g, ' ');
      Params[key] = val;
   }
   $("#TB_window").css({marginTop: + $(window).scrollTop()+60 + 'px'  });
   $("#TB_window").css({position: "absolute"});
   return Params;
}

function brstb_getPageSize(){
	var de = document.documentElement;
	var w = window.innerWidth || self.innerWidth || (de&&de.clientWidth) || document.body.clientWidth;
	var h = window.innerHeight || self.innerHeight || (de&&de.clientHeight) || document.body.clientHeight;
	arrayPageSize = [w,h];
	return arrayPageSize;
}

function brstb_detectMacXFF() {
  var userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.indexOf('mac') != -1 && userAgent.indexOf('firefox')!=-1) {
    return true;
  }
}


// カート追加処理(クイックビュー型商品詳細)
// ----------------------------------------------------
function cartAddByQuickView(belnShopKbn, cartAddurl){
    // パラメータに値がセットされていないときは従来の動作(ライトボックスを表示しないでカートへ遷移)
    if (belnShopKbn == "" || cartAddurl == "") {
        document.form01._ActionID.value = "dProdDtlCartAdd";
        document.form01.submit();
    } else {
        cartAddByQuickViewDisplayLightBox(belnShopKbn, cartAddurl);
    }
}
var cartAddByQuickViewFlg = false;

// 【関数】カート追加とライトボックス表示処理(クイックビュー型商品詳細)
function cartAddByQuickViewDisplayLightBox(thick_belnShopKbn,thick_cartAddurl){

	// ２度押し防止
	if (cartAddByQuickViewFlg) {
		return;
	}
	cartAddByQuickViewFlg = true;
	
	// 非同期用URL取得
	var ss_url = thick_cartAddurl.substring(0, thick_cartAddurl.indexOf('srvlt') + 5);
	ss_url = ss_url.replace('srvlt', 'service');

	// 型媒年季
	var thick_katBtgoObj = document.getElementsByName("KAT_BTGO");
	var thick_katBtgo = thick_katBtgoObj[0].value;
	
	// リクエストURLを生成
	var uri = ss_url + '/EPFB00/EPFB0097/dProdStockCartAdd?BELN_SHOP_KBN=' + thick_belnShopKbn + '&KAT_BTGO=' + thick_katBtgo;
	
	// 色
	var thick_iroObj = document.getElementsByName("IRO_SKBT_SEQ");
	if (thick_iroObj != null && thick_iroObj != undefined && thick_iroObj.length != 0) {
		if (thick_iroObj[0].options[thick_iroObj[0].selectedIndex].value != 0) {
			uri += '&IRO_SKBT_SEQ=' + thick_iroObj[0].options[thick_iroObj[0].selectedIndex].value;
		}
	}
	// サイズ１
	var thick_size1Obj = document.getElementsByName("SIZE1_SKBT_SEQ");
	if (thick_size1Obj != null && thick_size1Obj != undefined && thick_size1Obj.length != 0) {
		if (thick_size1Obj[0].options[thick_size1Obj[0].selectedIndex].value != 0) {
			uri += '&SIZE1_SKBT_SEQ=' + thick_size1Obj[0].options[thick_size1Obj[0].selectedIndex].value;
		}
	}
	// サイズ２
	var thick_size2Obj = document.getElementsByName("SIZE2_SKBT_SEQ");
	if (thick_size2Obj != null && thick_size2Obj != undefined && thick_size2Obj.length != 0) {
		if (thick_size2Obj[0].options[thick_size2Obj[0].selectedIndex].value != 0) {
			uri += '&SIZE2_SKBT_SEQ=' + thick_size2Obj[0].options[thick_size2Obj[0].selectedIndex].value;
		}
	}
	// サイズ３
	var thick_size3Obj = document.getElementsByName("SIZE3_SKBT_SEQ");
	if (thick_size3Obj != null && thick_size3Obj != undefined && thick_size3Obj.length != 0) {
		if (thick_size3Obj[0].options[thick_size3Obj[0].selectedIndex].value != 0) {
			uri += '&SIZE3_SKBT_SEQ=' + thick_size3Obj[0].options[thick_size3Obj[0].selectedIndex].value;
		}
	}
	// 数量
	var thick_q = document.getElementsByName("Q")[0].value;
	uri += '&Q=' + thick_q;
	// カート追加フラグ
	uri += '&CART_ADD_FLG=1';
	// 名入れ商品区分
	if (document.form01.NR_SHN_KBN != undefined) {
		var nrShnKbn = document.form01.NR_SHN_KBN.value;
		uri = uri + "&NR_SHN_KBN=" + nrShnKbn;
	}
	uri = uri + "&TIMESTAMP=" + createTimeStamp() + "&SHN_SHS_FRM_SNI_KBN=1";
	
	// 在庫状況
	var ZK_JKY = "";
	// 在庫状況区分
	var ZK_JKY_KBN = "";
	// 再入荷案内表示フラグ
	var SNK_ANAI_FLG = "";
	// 代替商品_型媒年季
	var DTSHN_KAT_BTGO = "";
	// 再引当区分
	var SAI_HKT_KBN = "";
	// 購入不可区分
	var KNY_FK_KBN = "";
	// 購入不可メッセージ
	var KNY_FK_MSG = "";
	// ライトボックス表示区分
	var thick_litBoxHyjKbn = "1";
	/* AMSオーダー情報入力フロー改善 add start 2016/02/25 */
	var odrIptSniKbn = getUrlValue(thick_cartAddurl, 'ORD_IPT_SNI_KBN');
	if (odrIptSniKbn == "1") {
		thick_litBoxHyjKbn = "5";
	}
	/* AMSオーダー情報入力フロー改善 add end   2016/02/25 */

	// 在庫情報を取得
	$.ajax({
		type: "GET",
		url: uri,
		cache: false,
		dataType: "jsonp",
		jsonpCallback: "setInventoryInfoCartAdd",
		success: function(data) {
			var info = data.INVENTORY_INFO_CART_ADD[0];
			if (info) {
				ZK_JKY = String(info.ZK_JKY);					// 在庫状況
				SAI_HKT_KBN = String(info.SAI_HKT_KBN);			// 引当区分
				SNK_ANAI_FLG = String(info.SNK_ANAI_FLG);		// 再入荷案内表示フラグ
				DTSHN_KAT_BTGO = String(info.DTSHN_KAT_BTGO);	// 代替商品_型媒年季
				KNY_FK_KBN = String(info.KNY_FK_KBN);			// 購入不可区分
				KNY_FK_MSG = String(info.KNY_FK_MSG);			// 購入不可メッセージ

				// ライトボックス表示区分設定
				if (KNY_FK_KBN == "1") {
					thick_litBoxHyjKbn = 4;
				} else if (ZK_JKY.indexOf("soldout") != -1) {
					thick_litBoxHyjKbn = 2;
					} else if (SAI_HKT_KBN == "C" ) {
					thick_litBoxHyjKbn = 3;
				}

				// 在庫状況のタグ変換
				if (ZK_JKY.indexOf("soldout") != -1) {
					// 売り切れの場合
					ZK_JKY = ZK_JKY.replace(/ class="stock-soldout"/g,"");
					ZK_JKY = ZK_JKY.replace(/<span>/g,"");
					ZK_JKY = ZK_JKY.replace(/<\/span>/g,"");
					ZK_JKY_KBN = 0;
				} else if (ZK_JKY.indexOf("wait") != -1) {
					// 入荷予定の場合
					ZK_JKY = ZK_JKY.replace(/ class="stock-wait"/g,"");
					ZK_JKY = ZK_JKY.replace(/<span>/g,"");
					ZK_JKY = ZK_JKY.replace(/<\/span>/g,"");
					ZK_JKY_KBN = 2;
				} else {
					// 在庫ありの場合
					ZK_JKY = ZK_JKY.replace(/ class="stock"/g,"");
					ZK_JKY = ZK_JKY.replace(/<span>/g,"");
					ZK_JKY = ZK_JKY.replace(/<\/span>/g,"");
					ZK_JKY_KBN = 1;
				}
			}
		},
		complete: function (XHRoj, textStatus) {
			// カート追加のURL生成
			// 大カテゴリＩＤ
			var thick_daiCategoryId = "";
			var thick_daiCategoryIdObj = document.getElementsByName("DAI_CATEGORY_ID");
			if (thick_daiCategoryIdObj != null && thick_daiCategoryIdObj != undefined && thick_daiCategoryIdObj.length != 0 ){
				thick_daiCategoryId = thick_daiCategoryIdObj[0].value;
			}
			// 中カテゴリＩＤ
			var thick_chCategoryId = "";
			var thick_chCategoryIdObj = document.getElementsByName("CH_CATEGORY_ID");
			if (thick_chCategoryIdObj != null && thick_chCategoryIdObj != undefined && thick_chCategoryIdObj.length != 0 ){
				thick_chCategoryId = thick_chCategoryIdObj[0].value;
			}
			// 小カテゴリＩＤ
			var thick_shoctgrId = "";
			var thick_shoctgrIdObj = document.getElementsByName("SHOCTGR_ID");
			if (thick_shoctgrIdObj != null && thick_shoctgrIdObj != undefined && thick_shoctgrIdObj.length != 0 ){
				thick_shoctgrId = thick_shoctgrIdObj[0].value;
			}
			// 商品カート追加経路区分
			var thick_shncrttkkroKbn = "";
			var thick_shncrttkkroKbnObj = document.getElementsByName("SHNCRTTKKRO_KBN");
			if (thick_shncrttkkroKbnObj != null && thick_shncrttkkroKbnObj != undefined && thick_shncrttkkroKbnObj.length != 0 ){
				thick_shncrttkkroKbn = thick_shncrttkkroKbnObj[0].value;
			}
			// お気に入りリスト経由区分
			var thick_olstKyuKbn = "";
			var thick_olstKyuKbnObj = document.getElementsByName("OLST_KYU_KBN");
			if (thick_olstKyuKbnObj != null && thick_olstKyuKbnObj != undefined && thick_olstKyuKbnObj.length != 0 ){
				thick_olstKyuKbn = thick_olstKyuKbnObj[0].value;
			}
			// リンクシェア直接経由区分
			var thick_lsChsKyuKbn = "";
			var thick_lsChsKyuKbnObj = document.getElementsByName("LS_CHS_KYU_KBN");
			if (thick_lsChsKyuKbnObj != null && thick_lsChsKyuKbnObj != undefined && thick_lsChsKyuKbnObj.length != 0 ){
				thick_lsChsKyuKbn = thick_lsChsKyuKbnObj[0].value;
			}
			// メール直接経由区分
			var thick_mlChsKyuKbn = "";
			var thick_mlChsKyuKbnObj = document.getElementsByName("ML_CHS_KYU_KBN");
			if (thick_mlChsKyuKbnObj != null && thick_mlChsKyuKbnObj != undefined && thick_mlChsKyuKbnObj.length != 0 ){
				thick_mlChsKyuKbn = thick_mlChsKyuKbnObj[0].value;
			}
			// 動的画面区分
			var thick_dtkGmnKbn = "";
			var thick_dtkGmnKbnObj = document.getElementsByName("DTK_GMN_KBN");
			if (thick_dtkGmnKbnObj != null && thick_dtkGmnKbnObj != undefined && thick_dtkGmnKbnObj.length != 0 ){
				thick_dtkGmnKbn = thick_dtkGmnKbnObj[0].value;
			}
			// 関連商品パラメータ
			var thick_knrnShn = "";
			var thick_knrnShnObj = document.getElementsByName("XPROD_KAT_NO_PRM");
			if (thick_knrnShnObj != null && thick_knrnShnObj != undefined && thick_knrnShnObj.length != 0 ){
				thick_knrnShn = thick_knrnShnObj[0].value;
			}
			// catパラメータ
			var thick_catPrm = "";
			var thick_catPrmObj = document.getElementsByName("CAT_PRM");
			if (thick_catPrmObj != null && thick_catPrmObj != undefined && thick_catPrmObj.length != 0 ){
				thick_catPrm = thick_catPrmObj[0].value;
			}
			var thick_LitBoxHyjSbtObj = document.getElementsByName("LIT_BOX_HYJSBT");
			var thick_LitBoxHyjSbt = "";
			if (thick_LitBoxHyjSbtObj != null && thick_LitBoxHyjSbtObj != undefined && thick_LitBoxHyjSbtObj.length != 0 ) {
				thick_LitBoxHyjSbt = document.getElementsByName("LIT_BOX_HYJSBT")[0].value;
			}
			thick_cartAddurl += "BELN_SHOP_KBN=" + thick_belnShopKbn 
						+ "&DAI_CATEGORY_ID=" + thick_daiCategoryId
						+ "&CH_CATEGORY_ID=" + thick_chCategoryId
						+ "&SHOCTGR_ID=" + thick_shoctgrId
						+ "&KAT_BTGO=" + thick_katBtgo
						+ "&SHNCRTTKKRO_KBN=" + thick_shncrttkkroKbn
						+ "&OLST_KYU_KBN=" + thick_olstKyuKbn
						+ "&LS_CHS_KYU_KBN=" + thick_lsChsKyuKbn
						+ "&ML_CHS_KYU_KBN=" + thick_mlChsKyuKbn
						+ "&DTK_GMN_KBN=" + thick_dtkGmnKbn
						+ "&LIT_BOX_HYJKBN=" + thick_litBoxHyjKbn
						+ "&GMN_KBN=1"
						+ "&ZK_JKY=" + ZK_JKY
						+ "&ZK_JKY_KBN=" + ZK_JKY_KBN
						+ "&SNK_ANAI_FLG=" + SNK_ANAI_FLG
						+ "&DTSHN_KAT_BTGO=" + DTSHN_KAT_BTGO
						+ "&LIT_BOX_HYJSBT=" + thick_LitBoxHyjSbt
						+ "&KNY_FK_MSG=" + KNY_FK_MSG;
						
			var thick_iroSkbtSeq ="";
			var thick_size1SkbtSeq = "";
			var thick_size2SkbtSeq = "";
			var thick_size3SkbtSeq = "";
			// 色
			var thick_iroObj =document.getElementsByName("IRO_SKBT_SEQ");
			if (thick_iroObj != null && thick_iroObj != undefined && thick_iroObj.length != 0) {
				thick_iroSkbtSeq = thick_iroObj[0].options[thick_iroObj[0].selectedIndex].value;
			}
			// サイズ１
			var thick_size1Obj =document.getElementsByName("SIZE1_SKBT_SEQ");
			if (thick_size1Obj != null && thick_size1Obj != undefined && thick_size1Obj.length != 0) {
				thick_size1SkbtSeq += thick_size1Obj[0].options[thick_size1Obj[0].selectedIndex].value;
			}
			// サイズ２
			var thick_size2Obj =document.getElementsByName("SIZE2_SKBT_SEQ");
			if (thick_size2Obj != null && thick_size2Obj != undefined && thick_size2Obj.length != 0) {
				thick_size2SkbtSeq += thick_size2Obj[0].options[thick_size2Obj[0].selectedIndex].value;
			}
			// サイズ３
			var thick_size3Obj =document.getElementsByName("SIZE3_SKBT_SEQ");
			if (thick_size3Obj != null && thick_size3Obj != undefined && thick_size3Obj.length != 0) {
				thick_size3SkbtSeq += thick_size3Obj[0].options[thick_size3Obj[0].selectedIndex].value;
			}
			// 関連商品パラメータ
			if(thick_knrnShn!=""){
				thick_cartAddurl += "&XPROD_KAT_NO_PRM=" + thick_knrnShn;
			}
			// catパラメータ
			if(thick_catPrm!=""){
				thick_cartAddurl += "&CAT_PRM=" + thick_catPrm;
			}
			// 色識別連番
			if(thick_iroSkbtSeq!=""){
				thick_cartAddurl += "&IRO_SKBT_SEQ=" + thick_iroSkbtSeq;
			}
			// サイズ１識別連番
			if(thick_size1SkbtSeq!=""){
				thick_cartAddurl += "&SIZE1_SKBT_SEQ=" + thick_size1SkbtSeq;
			}
			// サイズ２識別連番
			if(thick_size2SkbtSeq!=""){
				thick_cartAddurl += "&SIZE2_SKBT_SEQ=" + thick_size2SkbtSeq;
			}
			// サイズ３識別連番
			if(thick_size3SkbtSeq!=""){
				thick_cartAddurl += "&SIZE3_SKBT_SEQ=" + thick_size3SkbtSeq;
			}
			/* AMSオーダー情報入力フロー改善 update start 2016/02/25 */
			// 名入れ商品区分
			// (名入れ商品の場合、名入れ商品区分を設定済みなので、こちらに設定不要とする)
			if (odrIptSniKbn != "1" && document.form01.NR_SHN_KBN != undefined) {
				var nrShnKbn = document.form01.NR_SHN_KBN.value;
				thick_cartAddurl += "&NR_SHN_KBN=" + nrShnKbn;
			}
			// 遷移先区分
			if (thick_litBoxHyjKbn == 5) {
				thick_cartAddurl += "&SNI_SK_KBN=2";
			}
			// ウィンドウサイズをエラー時と分ける
			if (thick_litBoxHyjKbn == 2 || thick_litBoxHyjKbn == 3 || thick_litBoxHyjKbn == 4) {
				// 数量＆ライトボックス表示用パラメータ
				thick_cartAddurl += "&Q=" + thick_q
							+ "&TB_iframe=true&height=458&width=700";
			} else if (thick_litBoxHyjKbn == 5) {
				// 数量＆ライトボックス表示用パラメータ
				thick_cartAddurl += "&Q=" + thick_q
							+ "&TB_iframe=true&height=500&width=830";
			} else {
				// 数量＆ライトボックス表示用パラメータ
				thick_cartAddurl += "&Q=" + thick_q
							+ "&TB_iframe=true&height=563&width=865";
			}
			
			// 4.iframe表示処理を呼び出す
			if (thick_litBoxHyjKbn == 5) {
				parent.tb_show('', thick_cartAddurl ,'');
			} else {
				parent.tb_show('この商品を購入された方へおすすめ', thick_cartAddurl ,'');
			}
			/* AMSオーダー情報入力フロー改善 update end   2016/02/25 */
			cartAddByQuickViewFlg = false;
		},
		error: function() {//通信エラー
			cartAddByShnDtlFlg = false;
		}
	});
}
