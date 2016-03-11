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

// [[[[[[[[[[[[[[[[[[[[ ���i�ꗗ ]]]]]]]]]]]]]]]]]]]]
	brstb_init('.enlargement a.thickbox');//pass where to apply thickbox
	imgLoader = new Image();// preload image

	//tb_init('a.thickbox, area.thickbox, input.thickbox');//pass where to apply thickbox
	// imgLoader = new Image();// preload image
	// imgLoader.src = tb_pathToImage;

});


// [[[[[[[[[[[[[[[[[[[[ ���i�ڍ� ]]]]]]]]]]]]]]]]]]]]


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
		// �݌ɂ���̑J�ڂ̏ꍇ
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
				
				// �T�u�E�B���h�E����\�����ꂽ�ꍇ window���N���[�Y
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
		//JavaScript��O�����������Ƃ��́A�J�[�g��ʂ֑J�ځisafari2�ȑO�̖��Ή��j
		if(url.indexOf('zaiko=1') == -1) {
			// ���i�ڍ�
			if( url.indexOf('BELN_SHOP_KBN=100') == -1){
				document.form01._ActionID.value = "dPrdDtlMcCrtAdd";
			} else {
				document.form01._ActionID.value = "dProdDtlCartAdd";
			}
			document.form01.submit(); 
		} else {
			// �݌ɕ\��
			// ���C�g�{�b�N�X��\���ɕϊ�
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


// �}���X���[�V���b�v�敪
var THICK_BOX_MC_SHOP_KBN="200";

var cartAddByShnDtlFlg = false;

// �y�֐��z�J�[�g�ǉ�����(���i�ڍ�)
function cartAddByShnDtl(thick_belnShopKbn,thick_cartAddurl){
	// 1.MC�̏ꍇ
	if(thick_belnShopKbn == THICK_BOX_MC_SHOP_KBN){
		// 1.���C�g�{�b�N�X�\���`�F�b�N
		if(lightBoxDisplayCheck(thick_belnShopKbn,this.window) == false){
			document.form01._ActionID.value = "dPrdDtlMcCrtAdd";
			
			// �F
			var thick_iroObj =document.getElementsByName("IRO_SKBT_SEQ");
			if (thick_iroObj != null && thick_iroObj != undefined && thick_iroObj.length != 0) {
				thick_iroObj[0].disabled = false;
			}
			// �T�C�Y�P
			var thick_size1Obj =document.getElementsByName("SIZE1_SKBT_SEQ");
			if (thick_size1Obj != null && thick_size1Obj != undefined && thick_size1Obj.length != 0) {
				thick_size1Obj[0].disabled = false;
			} 
			// �T�C�Y�Q
			var thick_size2Obj =document.getElementsByName("SIZE2_SKBT_SEQ");
			if (thick_size2Obj != null && thick_size2Obj != undefined && thick_size2Obj.length != 0) {
				thick_size2Obj[0].disabled = false;
			}
			// �T�C�Y�R
			var thick_size3Obj =document.getElementsByName("SIZE3_SKBT_SEQ");
			if (thick_size3Obj != null && thick_size3Obj != undefined && thick_size3Obj.length != 0) {
				thick_size3Obj[0].disabled = false;
			} 

			document.form01.submit(); 
			return false;
		}
		
		// 2.�J�[�g�ɒǉ��������i�̏����Z�b�g
		// �F�T�C�Y���
		var thick_existIroSize = false;
		var thick_iroSize = "(";
		var thick_iroSkbtSeq ="";
		var thick_size1SkbtSeq = "";
		var thick_size2SkbtSeq = "";
		var thick_size3SkbtSeq = "";
		
		// �F
		var thick_iroObj =document.getElementsByName("IRO_SKBT_SEQ");
		var thick_iroTitle = document.getElementById("iro_title").innerHTML;
		if (thick_iroObj != null && thick_iroObj != undefined && thick_iroObj.length != 0) {
			thick_iroSize += thick_iroTitle + "�F" + thick_iroObj[0].options[thick_iroObj[0].selectedIndex].text;
			thick_iroSkbtSeq = thick_iroObj[0].options[thick_iroObj[0].selectedIndex].value;
			thick_existIroSize = true;
		}
		// �T�C�Y�P
		var thick_size1Obj =document.getElementsByName("SIZE1_SKBT_SEQ");
		var thick_size1Title = document.getElementById("size1_title").innerHTML;
		if (thick_size1Obj != null && thick_size1Obj != undefined && thick_size1Obj.length != 0) {
			if (thick_existIroSize == true) {
				thick_iroSize += "�^";
			}
			thick_iroSize += thick_size1Title + "�F" + thick_size1Obj[0].options[thick_size1Obj[0].selectedIndex].text;
			thick_size1SkbtSeq += thick_size1Obj[0].options[thick_size1Obj[0].selectedIndex].value;
			thick_existIroSize = true;
		}

		// �T�C�Y�Q
		var thick_size2Obj =document.getElementsByName("SIZE2_SKBT_SEQ");
		var thick_size2Title = document.getElementById("size2_title").innerHTML;
		if (thick_size2Obj != null && thick_size2Obj != undefined && thick_size2Obj.length != 0) {
			if (thick_existIroSize == true) {
				thick_iroSize += "�^";
			}
			thick_iroSize += thick_size2Title + "�F" +  thick_size2Obj[0].options[thick_size2Obj[0].selectedIndex].text;
			thick_size2SkbtSeq += thick_size2Obj[0].options[thick_size2Obj[0].selectedIndex].value;
			thick_existIroSize = true;
		}
		// �T�C�Y�R
		var thick_size3Obj =document.getElementsByName("SIZE3_SKBT_SEQ");
		var thick_size3Title = document.getElementById("size3_title").innerHTML;
		if (thick_size3Obj != null && thick_size3Obj != undefined && thick_size3Obj.length != 0) {
			if (thick_existIroSize == true) {
				thick_iroSize += "�^";
			}
			thick_iroSize += thick_size3Title + "�F" + thick_size3Obj[0].options[thick_size3Obj[0].selectedIndex].text;
			thick_size3SkbtSeq += thick_size3Obj[0].options[thick_size3Obj[0].selectedIndex].value;
			thick_existIroSize = true;
		}
		if (thick_existIroSize == true) {
			thick_iroSize += ")";
		} else {
			thick_iroSize = "";
		}
		document.getElementById('iro_size').innerHTML = thick_iroSize;
		
		// ����
		var thick_q = document.getElementsByName("Q")[0].value;
		document.getElementById('quantity').innerHTML = thick_q;
		
		//�����i�Ԓǉ��敪
		document.getElementById('fks_hbn_kbn').innerHTML = "0";

		// 3.�J�[�g�ǉ���URL����
		// ��J�e�S���h�c
		var thick_daiCategoryId = "";
		var thick_daiCategoryIdObj = document.getElementsByName("DAI_CATEGORY_ID");
		if (thick_daiCategoryIdObj != null && thick_daiCategoryIdObj != undefined && thick_daiCategoryIdObj.length != 0 ){
			thick_daiCategoryId = thick_daiCategoryIdObj[0].value;
		}
		// ���J�e�S���h�c
		var thick_chCategoryId = "";
		var thick_chCategoryIdObj = document.getElementsByName("CH_CATEGORY_ID");
		if (thick_chCategoryIdObj != null && thick_chCategoryIdObj != undefined && thick_chCategoryIdObj.length != 0 ){
			thick_chCategoryId = thick_chCategoryIdObj[0].value;
		}
		// ���J�e�S���h�c
		var thick_shoctgrId = "";
		var thick_shoctgrIdObj = document.getElementsByName("SHOCTGR_ID");
		if (thick_shoctgrIdObj != null && thick_shoctgrIdObj != undefined && thick_shoctgrIdObj.length != 0 ){
			thick_shoctgrId = thick_shoctgrIdObj[0].value;
		}
		// �^�}�N�G
		var thick_katBtgoObj = document.getElementsByName("KAT_BTGO");
		var thick_katBtgo= thick_katBtgoObj[0].value;
		
		// ���i�J�[�g�ǉ��o�H�敪
		var thick_shncrttkkroKbn = "";
		var thick_shncrttkkroKbnObj = document.getElementsByName("SHNCRTTKKRO_KBN");
		if (thick_shncrttkkroKbnObj != null && thick_shncrttkkroKbnObj != undefined && thick_shncrttkkroKbnObj.length != 0 ){
			thick_shncrttkkroKbn = thick_shncrttkkroKbnObj[0].value;
		}
		// ���C�ɓ��胊�X�g�o�R�敪
		var thick_olstKyuKbn = "";
		var thick_olstKyuKbnObj = document.getElementsByName("OLST_KYU_KBN");
		if (thick_olstKyuKbnObj != null && thick_olstKyuKbnObj != undefined && thick_olstKyuKbnObj.length != 0 ){
			thick_olstKyuKbn = thick_olstKyuKbnObj[0].value;
		}
		// �����N�V�F�A���ڌo�R�敪
		var thick_lsChsKyuKbn = "";
		var thick_lsChsKyuKbnObj = document.getElementsByName("LS_CHS_KYU_KBN");
		if (thick_lsChsKyuKbnObj != null && thick_lsChsKyuKbnObj != undefined && thick_lsChsKyuKbnObj.length != 0 ){
			thick_lsChsKyuKbn = thick_lsChsKyuKbnObj[0].value;
		}
		// ���[�����ڌo�R�敪
		var thick_mlChsKyuKbn = "";
		var thick_mlChsKyuKbnObj = document.getElementsByName("ML_CHS_KYU_KBN");
		if (thick_mlChsKyuKbnObj != null && thick_mlChsKyuKbnObj != undefined && thick_mlChsKyuKbnObj.length != 0 ){
			thick_mlChsKyuKbn = thick_mlChsKyuKbnObj[0].value;
		}
		// ���I��ʋ敪
		var thick_dtkGmnKbn = "";
		var thick_dtkGmnKbnObj = document.getElementsByName("DTK_GMN_KBN");
		if (thick_dtkGmnKbnObj != null && thick_dtkGmnKbnObj != undefined && thick_dtkGmnKbnObj.length != 0 ){
			thick_dtkGmnKbn = thick_dtkGmnKbnObj[0].value;
		}
		// �֘A���i�p�����[�^
		var thick_knrnShn = "";
		var thick_knrnShnObj = document.getElementsByName("XPROD_KAT_NO_PRM");
		if (thick_knrnShnObj != null && thick_knrnShnObj != undefined && thick_knrnShnObj.length != 0 ){
			thick_knrnShn = thick_knrnShnObj[0].value;
		}
		// cat�p�����[�^
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
		// �֘A���i�p�����[�^
		if(thick_knrnShn!=""){
			thick_cartAddurl += "&XPROD_KAT_NO_PRM=" + thick_knrnShn;
		}
		// cat�p�����[�^
		if(thick_catPrm!=""){
			thick_cartAddurl += "&CAT_PRM=" + thick_catPrm;
		}
		// �F���ʘA��
		if(thick_iroSkbtSeq!=""){
			thick_cartAddurl += "&IRO_SKBT_SEQ=" + thick_iroSkbtSeq;
		}
		// �T�C�Y�P���ʘA��
		if(thick_size1SkbtSeq!=""){
			thick_cartAddurl += "&SIZE1_SKBT_SEQ=" + thick_size1SkbtSeq;
		}
		// �T�C�Y�Q���ʘA��
		if(thick_size2SkbtSeq!=""){
			thick_cartAddurl += "&SIZE2_SKBT_SEQ=" + thick_size2SkbtSeq;
		}
		// �T�C�Y�R���ʘA��
		if(thick_size3SkbtSeq!=""){
			thick_cartAddurl += "&SIZE3_SKBT_SEQ=" + thick_size3SkbtSeq;
		}
		// ���ʁ����C�g�{�b�N�X�\���p�p�����[�^
		thick_cartAddurl += "&Q=" + thick_q
	/* �C�� 110928 TAM �R�R���� */
					+ "&TB_iframe=true&height=458&width=865";
	/* �C�� 110928 TAM �R�R�܂� */

		// 4.iframe�\���������Ăяo��
		tb_show("���̏��i���w�����ꂽ���ւ�������",thick_cartAddurl,"");

	// 2.BM�̏ꍇ
	} else {
		// �Q�x�����h�~
		if (cartAddByShnDtlFlg) {
			return;
		}
		cartAddByShnDtlFlg = true;

		// 1.���C�g�{�b�N�X�\���`�F�b�N
		var thick_litBoxHyjKbn;
		/* AMS�I�[�_�[�����̓t���[���P add start 2016/02/25 */
		var lightBoxDisplayFlg = lightBoxDisplayCheck(thick_belnShopKbn,this.window);
		var odrIptSniKbn = getUrlValue(thick_cartAddurl, 'ORD_IPT_SNI_KBN');
		if (odrIptSniKbn == "1") {
			thick_litBoxHyjKbn = 5;
		} else if (lightBoxDisplayFlg == false) {
		/* AMS�I�[�_�[�����̓t���[���P add end   2016/02/25 */
			thick_litBoxHyjKbn = 0;
		} else {
			thick_litBoxHyjKbn = 1;
		}

		// �񓯊��pURL�擾
		var ss_url = thick_cartAddurl.substring(0, thick_cartAddurl.indexOf('srvlt') + 5);
		ss_url = ss_url.replace('srvlt', 'service');

		// �^�}�N�G
		var thick_katBtgoObj = document.getElementsByName("KAT_BTGO");
		var thick_katBtgo = thick_katBtgoObj[0].value;

		// ���N�G�X�gURL�𐶐�
		var uri = ss_url + '/EPFB00/EPFB0097/dProdStockCartAdd?BELN_SHOP_KBN=' + thick_belnShopKbn + '&KAT_BTGO=' + thick_katBtgo;

		// �F
		var thick_iroObj = document.getElementsByName("IRO_SKBT_SEQ");
		if (thick_iroObj != null && thick_iroObj != undefined && thick_iroObj.length != 0) {
			if (thick_iroObj[0].options[thick_iroObj[0].selectedIndex].value != 0) {
				uri += '&IRO_SKBT_SEQ=' + thick_iroObj[0].options[thick_iroObj[0].selectedIndex].value;
			}
		}
		// �T�C�Y�P
		var thick_size1Obj = document.getElementsByName("SIZE1_SKBT_SEQ");
		if (thick_size1Obj != null && thick_size1Obj != undefined && thick_size1Obj.length != 0) {
			if (thick_size1Obj[0].options[thick_size1Obj[0].selectedIndex].value != 0) {
				uri += '&SIZE1_SKBT_SEQ=' + thick_size1Obj[0].options[thick_size1Obj[0].selectedIndex].value;
			}
		}
		// �T�C�Y�Q
		var thick_size2Obj = document.getElementsByName("SIZE2_SKBT_SEQ");
		if (thick_size2Obj != null && thick_size2Obj != undefined && thick_size2Obj.length != 0) {
			if (thick_size2Obj[0].options[thick_size2Obj[0].selectedIndex].value != 0) {
				uri += '&SIZE2_SKBT_SEQ=' + thick_size2Obj[0].options[thick_size2Obj[0].selectedIndex].value;
			}
		}
		// �T�C�Y�R
		var thick_size3Obj = document.getElementsByName("SIZE3_SKBT_SEQ");
		if (thick_size3Obj != null && thick_size3Obj != undefined && thick_size3Obj.length != 0) {
			if (thick_size3Obj[0].options[thick_size3Obj[0].selectedIndex].value != 0) {
				uri += '&SIZE3_SKBT_SEQ=' + thick_size3Obj[0].options[thick_size3Obj[0].selectedIndex].value;
			}
		}
		// ����
		uri += '&Q=' + document.getElementsByName("Q")[0].value;
		// �J�[�g�ǉ��t���O
		uri += '&CART_ADD_FLG=1';
		// �����ꏤ�i�敪
		if (document.form01.NR_SHN_KBN != undefined) {
			var nrShnKbn = document.form01.NR_SHN_KBN.value;
			uri = uri + "&NR_SHN_KBN=" + nrShnKbn;
		}
		uri = uri + "&TIMESTAMP=" + createTimeStamp() + "&SHN_SHS_FRM_SNI_KBN=1";
		
		// �݌ɏ�
		var ZK_JKY = "";
		// �݌ɏ󋵋敪
		var ZK_JKY_KBN = "";
		// �ē��׈ē��\���t���O
		var SNK_ANAI_FLG = "";
		// ��֏��i_�^�}�N�G
		var DTSHN_KAT_BTGO = "";
		// �Ĉ����敪
		var SAI_HKT_KBN = "";
		// �w���s�敪
		var KNY_FK_KBN = "";
		// �w���s���b�Z�[�W
		var KNY_FK_MSG = "";

		// �݌ɏ����擾
		$.ajax({
			type: "GET",
			url: uri,
			cache: false,
			dataType: "jsonp",
			jsonpCallback: "setInventoryInfoCartAdd",
			success: function(data) {
				var info = data.INVENTORY_INFO_CART_ADD[0];
				if (info) {
					ZK_JKY = String(info.ZK_JKY);					// �݌ɏ�
					SAI_HKT_KBN = String(info.SAI_HKT_KBN);			// �����敪
					SNK_ANAI_FLG = String(info.SNK_ANAI_FLG);		// �ē��׈ē��\���t���O
					DTSHN_KAT_BTGO = String(info.DTSHN_KAT_BTGO);	// ��֏��i_�^�}�N�G
					KNY_FK_KBN = String(info.KNY_FK_KBN);			// �w���s�敪
					KNY_FK_MSG = String(info.KNY_FK_MSG);			// �w���s���b�Z�[�W

					// ���C�g�{�b�N�X�\���敪�ݒ�
					if (KNY_FK_KBN == "1") {
						thick_litBoxHyjKbn = 4;
					} else if (ZK_JKY.indexOf("soldout") != -1) {
						thick_litBoxHyjKbn = 2;
 					} else if (SAI_HKT_KBN == "C" ) {
						thick_litBoxHyjKbn = 3;
					}

					// �݌ɏ󋵂̃^�O�ϊ�
					if (ZK_JKY.indexOf("soldout") != -1) {
						// ����؂�̏ꍇ
						ZK_JKY = ZK_JKY.replace(/ class="stock-soldout"/g,"");
						ZK_JKY = ZK_JKY.replace(/<span>/g,"");
						ZK_JKY = ZK_JKY.replace(/<\/span>/g,"");
						ZK_JKY_KBN = 0;
					} else if (ZK_JKY.indexOf("wait") != -1) {
						// ���ח\��̏ꍇ
						ZK_JKY = ZK_JKY.replace(/ class="stock-wait"/g,"");
						ZK_JKY = ZK_JKY.replace(/<span>/g,"");
						ZK_JKY = ZK_JKY.replace(/<\/span>/g,"");
						ZK_JKY_KBN = 2;
					} else {
						// �݌ɂ���̏ꍇ
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

					// �F
					if (thick_iroObj != null && thick_iroObj != undefined && thick_iroObj.length != 0) {
						thick_iroObj[0].disabled = false;
					}
					// �T�C�Y�P
					if (thick_size1Obj != null && thick_size1Obj != undefined && thick_size1Obj.length != 0) {
						thick_size1Obj[0].disabled = false;
					} 
					// �T�C�Y�Q
					if (thick_size2Obj != null && thick_size2Obj != undefined && thick_size2Obj.length != 0) {
						thick_size2Obj[0].disabled = false;
					}
					// �T�C�Y�R
					if (thick_size3Obj != null && thick_size3Obj != undefined && thick_size3Obj.length != 0) {
						thick_size3Obj[0].disabled = false;
					} 

					document.form01.submit(); 
					return false;
				}
				
				// 2.�J�[�g�ɒǉ��������i�̏����Z�b�g
				// �F�T�C�Y���
				var thick_existIroSize = false;
				var thick_iroSize = "(";
				var thick_iroSkbtSeq ="";
				var thick_size1SkbtSeq = "";
				var thick_size2SkbtSeq = "";
				var thick_size3SkbtSeq = "";
				
				// �F
				var thick_iroTitle = document.getElementById("iro_title").innerHTML;
				if (thick_iroObj != null && thick_iroObj != undefined && thick_iroObj.length != 0) {
					thick_iroSize += thick_iroTitle + "�F" + thick_iroObj[0].options[thick_iroObj[0].selectedIndex].text;
					thick_iroSkbtSeq = thick_iroObj[0].options[thick_iroObj[0].selectedIndex].value;
					thick_existIroSize = true;
				}
				// �T�C�Y�P
				var thick_size1Title = document.getElementById("size1_title").innerHTML;
				if (thick_size1Obj != null && thick_size1Obj != undefined && thick_size1Obj.length != 0) {
					if (thick_existIroSize == true) {
						thick_iroSize += "�^";
					}
					thick_iroSize += thick_size1Title + "�F" + thick_size1Obj[0].options[thick_size1Obj[0].selectedIndex].text;
					thick_size1SkbtSeq += thick_size1Obj[0].options[thick_size1Obj[0].selectedIndex].value;
					thick_existIroSize = true;
				}

				// �T�C�Y�Q
				var thick_size2Title = document.getElementById("size2_title").innerHTML;
				if (thick_size2Obj != null && thick_size2Obj != undefined && thick_size2Obj.length != 0) {
					if (thick_existIroSize == true) {
						thick_iroSize += "�^";
					}
					thick_iroSize += thick_size2Title + "�F" +  thick_size2Obj[0].options[thick_size2Obj[0].selectedIndex].text;
					thick_size2SkbtSeq += thick_size2Obj[0].options[thick_size2Obj[0].selectedIndex].value;
					thick_existIroSize = true;
				}
				// �T�C�Y�R
				var thick_size3Title = document.getElementById("size3_title").innerHTML;
				if (thick_size3Obj != null && thick_size3Obj != undefined && thick_size3Obj.length != 0) {
					if (thick_existIroSize == true) {
						thick_iroSize += "�^";
					}
					thick_iroSize += thick_size3Title + "�F" + thick_size3Obj[0].options[thick_size3Obj[0].selectedIndex].text;
					thick_size3SkbtSeq += thick_size3Obj[0].options[thick_size3Obj[0].selectedIndex].value;
					thick_existIroSize = true;
				}
				if (thick_existIroSize == true) {
					thick_iroSize += ")";
				} else {
					thick_iroSize = "";
				}
				document.getElementById('iro_size').innerHTML = thick_iroSize;
				
				// �w���s���b�Z�[�W
				if (KNY_FK_MSG.indexOf("undefined") == -1) {
					var thick_knyFkMsg = document.getElementById('kny_fk_msg');
					if (thick_knyFkMsg != null && thick_knyFkMsg != undefined) {
						thick_knyFkMsg.innerHTML = KNY_FK_MSG;
					}
				}
				
				// ����
				var thick_q = document.getElementsByName("Q")[0].value;
				document.getElementById('quantity').innerHTML = thick_q;
				
				//�����i�Ԓǉ��敪
				document.getElementById('fks_hbn_kbn').innerHTML = "0";

				// 3.�J�[�g�ǉ���URL����
				// ��J�e�S���h�c
				var thick_daiCategoryId = "";
				var thick_daiCategoryIdObj = document.getElementsByName("DAI_CATEGORY_ID");
				if (thick_daiCategoryIdObj != null && thick_daiCategoryIdObj != undefined && thick_daiCategoryIdObj.length != 0 ){
					thick_daiCategoryId = thick_daiCategoryIdObj[0].value;
				}
				// ���J�e�S���h�c
				var thick_chCategoryId = "";
				var thick_chCategoryIdObj = document.getElementsByName("CH_CATEGORY_ID");
				if (thick_chCategoryIdObj != null && thick_chCategoryIdObj != undefined && thick_chCategoryIdObj.length != 0 ){
					thick_chCategoryId = thick_chCategoryIdObj[0].value;
				}
				// ���J�e�S���h�c
				var thick_shoctgrId = "";
				var thick_shoctgrIdObj = document.getElementsByName("SHOCTGR_ID");
				if (thick_shoctgrIdObj != null && thick_shoctgrIdObj != undefined && thick_shoctgrIdObj.length != 0 ){
					thick_shoctgrId = thick_shoctgrIdObj[0].value;
				}
				
				// ���i�J�[�g�ǉ��o�H�敪
				var thick_shncrttkkroKbn = "";
				var thick_shncrttkkroKbnObj = document.getElementsByName("SHNCRTTKKRO_KBN");
				if (thick_shncrttkkroKbnObj != null && thick_shncrttkkroKbnObj != undefined && thick_shncrttkkroKbnObj.length != 0 ){
					thick_shncrttkkroKbn = thick_shncrttkkroKbnObj[0].value;
				}
				// ���C�ɓ��胊�X�g�o�R�敪
				var thick_olstKyuKbn = "";
				var thick_olstKyuKbnObj = document.getElementsByName("OLST_KYU_KBN");
				if (thick_olstKyuKbnObj != null && thick_olstKyuKbnObj != undefined && thick_olstKyuKbnObj.length != 0 ){
					thick_olstKyuKbn = thick_olstKyuKbnObj[0].value;
				}
				// �����N�V�F�A���ڌo�R�敪
				var thick_lsChsKyuKbn = "";
				var thick_lsChsKyuKbnObj = document.getElementsByName("LS_CHS_KYU_KBN");
				if (thick_lsChsKyuKbnObj != null && thick_lsChsKyuKbnObj != undefined && thick_lsChsKyuKbnObj.length != 0 ){
					thick_lsChsKyuKbn = thick_lsChsKyuKbnObj[0].value;
				}
				// ���[�����ڌo�R�敪
				var thick_mlChsKyuKbn = "";
				var thick_mlChsKyuKbnObj = document.getElementsByName("ML_CHS_KYU_KBN");
				if (thick_mlChsKyuKbnObj != null && thick_mlChsKyuKbnObj != undefined && thick_mlChsKyuKbnObj.length != 0 ){
					thick_mlChsKyuKbn = thick_mlChsKyuKbnObj[0].value;
				}
				// ���I��ʋ敪
				var thick_dtkGmnKbn = "";
				var thick_dtkGmnKbnObj = document.getElementsByName("DTK_GMN_KBN");
				if (thick_dtkGmnKbnObj != null && thick_dtkGmnKbnObj != undefined && thick_dtkGmnKbnObj.length != 0 ){
					thick_dtkGmnKbn = thick_dtkGmnKbnObj[0].value;
				}
				// �֘A���i�p�����[�^
				var thick_knrnShn = "";
				var thick_knrnShnObj = document.getElementsByName("XPROD_KAT_NO_PRM");
				if (thick_knrnShnObj != null && thick_knrnShnObj != undefined && thick_knrnShnObj.length != 0 ){
					thick_knrnShn = thick_knrnShnObj[0].value;
				}
				// cat�p�����[�^
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

				// �֘A���i�p�����[�^
				if(thick_knrnShn!=""){
					thick_cartAddurl += "&XPROD_KAT_NO_PRM=" + thick_knrnShn;
				}
				// cat�p�����[�^
				if(thick_catPrm!=""){
					thick_cartAddurl += "&CAT_PRM=" + thick_catPrm;
				}
				// �F���ʘA��
				if(thick_iroSkbtSeq!=""){
					thick_cartAddurl += "&IRO_SKBT_SEQ=" + thick_iroSkbtSeq;
				}
				// �T�C�Y�P���ʘA��
				if(thick_size1SkbtSeq!=""){
					thick_cartAddurl += "&SIZE1_SKBT_SEQ=" + thick_size1SkbtSeq;
				}
				// �T�C�Y�Q���ʘA��
				if(thick_size2SkbtSeq!=""){
					thick_cartAddurl += "&SIZE2_SKBT_SEQ=" + thick_size2SkbtSeq;
				}
				// �T�C�Y�R���ʘA��
				if(thick_size3SkbtSeq!=""){
					thick_cartAddurl += "&SIZE3_SKBT_SEQ=" + thick_size3SkbtSeq;
				}
				/* AMS�I�[�_�[�����̓t���[���P update start 2016/02/25 */
				// �����ꏤ�i�敪
				// (�����ꏤ�i�̏ꍇ�A�����ꏤ�i�敪��ݒ�ς݂Ȃ̂ŁA������ɐݒ�s�v�Ƃ���)
				if (odrIptSniKbn != "1" && document.form01.NR_SHN_KBN != undefined) {
					var nrShnKbn = document.form01.NR_SHN_KBN.value;
					thick_cartAddurl += "&NR_SHN_KBN=" + nrShnKbn;
				}
				//�J�ڐ�敪
				if (thick_litBoxHyjKbn == 5) {
					if(lightBoxDisplayFlg == false) {
						thick_cartAddurl += "&SNI_SK_KBN=0";
					} else {
						thick_cartAddurl += "&SNI_SK_KBN=1";
					}
				}
				
				if (thick_litBoxHyjKbn == 2 || thick_litBoxHyjKbn == 3 || thick_litBoxHyjKbn == 4) {
					// ���ʁ����C�g�{�b�N�X�\���p�p�����[�^
					thick_cartAddurl += "&Q=" + thick_q
								+ "&TB_iframe=true&height=458&width=700";
				} else if (thick_litBoxHyjKbn == 5) {
					// ���ʁ����C�g�{�b�N�X�\���p�p�����[�^
					thick_cartAddurl += "&Q=" + thick_q
								+ "&TB_iframe=true&height=500&width=830";
				} else {
					// ���ʁ����C�g�{�b�N�X�\���p�p�����[�^
					thick_cartAddurl += "&Q=" + thick_q
								+ "&TB_iframe=true&height=563&width=865";
				}
				
				// 4.iframe�\���������Ăяo��
				if (thick_litBoxHyjKbn == 5) {
					tb_show("",thick_cartAddurl,"");
				} else {
					tb_show("���̏��i���w�����ꂽ���ւ�������",thick_cartAddurl,"");
				}
				/* AMS�I�[�_�[�����̓t���[���P update end   2016/02/25 */
				cartAddByShnDtlFlg = false;
			},
			error: function() {//�ʐM�G���[
				cartAddByShnDtlFlg = false;
			}
		});
	}
}
	
// �y�֐��z���C�g�{�b�N�X�\���`�F�b�N
function lightBoxDisplayCheck(thick_belnShopKbn,thisWindow){
	if( thick_belnShopKbn == THICK_BOX_MC_SHOP_KBN){
		// MC�̏ꍇ
		// �֘A���i 
		// 20101008 014131_�y�x���l�E�x���l���i�V�X�e���z�֘A���i�\���E�o�^�̉��C 
		var thick_kanren = thisWindow.document.getElementById('carouselArea01Item');
		// �������ߏ��i
		var thick_hikaku = thisWindow.document.getElementById('hikaku');
		// �֘A���i�y�т������ߏ��i���\������Ă��Ȃ��ꍇ
		if((thick_kanren == null || thick_kanren == undefined ) && (thick_hikaku == null || thick_hikaku == undefined)){
			return false;
		}
	}else{
		// BM�̏ꍇ
		// �֘A���i 
		// 20101008 014131_�y�x���l�E�x���l���i�V�X�e���z�֘A���i�\���E�o�^�̉��C
		var thick_kanren = thisWindow.document.getElementById('carouselArea01Item');
		// ���R�����h���i
		var thick_recomHyoji = false;
		try {
			var thick_recom_div = thisWindow.document.getElementById('recommender_1');
			var thick_recom_div_old = thisWindow.document.getElementById('recommender_bm_j1');
			if(thick_recom_div != null && thick_recom_div!=undefined){
				if(thick_recom_div.hasChildNodes() == true){
					// ���R�����h���i������ꍇ�̂�
					thick_recomHyoji = true;
				}
			} else if (thick_recom_div_old != null && thick_recom_div_old!=undefined){
				if(thick_recom_div_old.hasChildNodes() == true){
					// ���R�����h���i������ꍇ�̂�
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
		// �֘A���i�y�у��R�����h���i���\������Ă��Ȃ��ꍇ
		if((thick_kanren == null || thick_kanren == undefined ) && (thick_recomHyoji==false)){
			return false;
		}
	}
}

// �y�֐��z�J�[�g�ǉ�����(�݌Ɉꗗ)
function cartAddByZaiko(thick_belnShopKbn,thick_cartAddurl,thick_indx,thick_select_indx,thick_ord_q){
	// 1.�e��ʃ`�F�b�N
	//  1.1�e��ʂ̑��݃`�F�b�N
	if( opener == null || opener == undefined || opener.closed == true){
		// ���������𑱂���{�^���敪���ݒ肳��Ă���ꍇ�폜
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
	//  1.2 �e��ʂ����i�ڍ�&�^�}�N�G���������`�F�b�N
	var thick_lightboxSniFlg = false;

	try {
		var thick_shohinDtlKatBtgo = opener.window.document.getElementById('shohin_kat_btgo');
		if (thick_shohinDtlKatBtgo != null && thick_shohinDtlKatBtgo != undefined) {
			// �e��ʂ����i�ڍ׉�ʂ̏ꍇ
			if (thick_shohinDtlKatBtgo.innerHTML == this.document.getElementById('shohin_kat_btgo').innerHTML){
				// �^�}�N�G�������ꍇ
				thick_lightboxSniFlg = true;
			}
		}
	} catch (e){
		// �h���C�����قȂ�ꍇ(���C�ɓ��胊�X�g���������ߏ��i)�A���C�g�{�b�N�X��\��
		
	}

	// 2.���C�g�{�b�N�X�\���`�F�b�N
	if(thick_lightboxSniFlg==false || lightBoxDisplayCheck(thick_belnShopKbn,opener.window) == false){
		// ���C�g�{�b�N�X��\�����Ȃ��ꍇ
		//��20110309 AMS �ύX ��(opener��opener.parent�ɕύX)
		window.opener.parent.focus();
		window.opener.parent.location.href = thick_cartAddurl;
		window.close();
		return false;
	}
	
	// 3.���i�ڍׂ֒l�̖��ߍ���
	if (thick_indx > 1 ) {
		// �����i�Ԃ��J�[�g�w�ǉ�����ꍇ
		opener.window.document.getElementById('iro_size').innerHTML = "";
		opener.window.document.getElementById('quantity').innerHTML = "";
		opener.window.document.getElementById('kakk').innerHTML = "";
		opener.window.document.getElementById('fks_hbn_kbn').innerHTML = "1";
	} else {
		// �P��i�Ԃ��J�[�g�w�ǉ�����ꍇ
		var thick_iroSize = "(";
		var thick_existIroSize = false;
		
		// �F
		var thick_iroMesObj = document.getElementById('iro_mes' + thick_select_indx );
		if(thick_iroMesObj != null && thick_iroMesObj != undefined){
			thick_iroSize += thick_iroMesObj.innerHTML;
			thick_existIroSize = true;
		}
		// �T�C�Y�P
		var thick_size1MesObj = document.getElementById('size1_mes' + thick_select_indx);
		if(thick_size1MesObj != null && thick_size1MesObj != undefined){
			if (thick_existIroSize == true) {
				thick_iroSize += "�^";
			}
			thick_iroSize += thick_size1MesObj.innerHTML;
			thick_existIroSize = true;
		}
		// �T�C�Y�Q
		var thick_size2MesObj = document.getElementById('size2_mes' + thick_select_indx);
		if(thick_size2MesObj != null && thick_size2MesObj != undefined){
			if (thick_existIroSize == true) {
				thick_iroSize += "�^";
			}
			thick_iroSize += thick_size2MesObj.innerHTML;
			thick_existIroSize = true;
		}
		// �T�C�Y�R
		var thick_size3MesObj = document.getElementById('size3_mes' + thick_select_indx);
		if(thick_size3MesObj != null && thick_size3MesObj != undefined){
			if (thick_existIroSize == true) {
				thick_iroSize += "�^";
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
		// �x�����]���ŉ��i�т�����ꍇ
		if (thick_belnShopKbn != THICK_BOX_MC_SHOP_KBN && thick_kakk.indexOf("�`") != -1) {
			thick_kakk = thick_kakk.substring(thick_kakk.indexOf("�`")+1,thick_kakk.length);
			// �{�̉��i���\������Ă���ꍇ
			if(thick_kakk.indexOf("�`") != -1) {
				thick_kakk = thick_kakk.replace("<BR>","");
				thick_kakk = thick_kakk.replace("<br>","");
				thick_kakk = thick_kakk.substring(0,thick_kakk.indexOf("�{��")+2) +  thick_kakk.substring(thick_kakk.indexOf("�`")+1,thick_kakk.length);
			}
		}
		opener.window.document.getElementById('kakk').innerHTML = thick_kakk;
		opener.window.document.getElementById('fks_hbn_kbn').innerHTML = "0";
	}
	// 4.�e��ʂɃ��C�g�{�b�N�X���\������Ă����ꍇ�A���C�g�{�b�N�X�����
	// 5.iframe�\���������Ăяo��
	// �֘A���i�p�����[�^
	var thick_knrnShn = "";
	var thick_knrnShnObj = opener.window.document.getElementsByName("XPROD_KAT_NO_PRM");
	if (thick_knrnShnObj != null && thick_knrnShnObj != undefined && thick_knrnShnObj.length != 0 ){
		thick_knrnShn = thick_knrnShnObj[0].value;
	}
	// �֘A���i�p�����[�^
	if(thick_knrnShn!=""){
		thick_cartAddurl += "&XPROD_KAT_NO_PRM=" + thick_knrnShn;
	}
	// cat�p�����[�^
	var thick_catPrm = "";
	var thick_catPrmObj = opener.window.document.getElementsByName("CAT_PRM");
	if (thick_catPrmObj != null && thick_catPrmObj != undefined && thick_catPrmObj.length != 0 ){
		thick_catPrm = thick_catPrmObj[0].value;
	}
	// cat�p�����[�^
	if(thick_catPrm!=""){
		thick_cartAddurl += "&CAT_PRM=" + thick_catPrm;
	}

	thick_cartAddurl += "&LIT_BOX_HYJKBN=1&GMN_KBN=2"
				+ "&TB_iframe=true&height=458&width=865&zaiko=1";
	if(window.opener.jQuery("#TB_window").css("display") == "block"){
		// ���C�g�{�b�N�X�����
		opener.window.jQuery("#TB_closeWindowButton").trigger("click");
		// ���C�g�{�b�N�X�������Ă��玞�Ԃ�u���Ȃ��ƃ��C�g�{�b�N�X���\������Ȃ����߁A�^�C���A�E�g��ݒ�
		setTimeout("tb_show('���̏��i���w�����ꂽ���ւ�������','" + thick_cartAddurl + "','')", 500);
	}else {
		// 7.iframe�\���������Ăяo��
		tb_show('���̏��i���w�����ꂽ���ւ�������',thick_cartAddurl,'');
	}
}






// [[[[[[[[[[[[[[[[[[[[ ���i�ꗗ ]]]]]]]]]]]]]]]]]]]]


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


// �J�[�g�ǉ�����(�N�C�b�N�r���[�^���i�ڍ�)
// ----------------------------------------------------
function cartAddByQuickView(belnShopKbn, cartAddurl){
    // �p�����[�^�ɒl���Z�b�g����Ă��Ȃ��Ƃ��͏]���̓���(���C�g�{�b�N�X��\�����Ȃ��ŃJ�[�g�֑J��)
    if (belnShopKbn == "" || cartAddurl == "") {
        document.form01._ActionID.value = "dProdDtlCartAdd";
        document.form01.submit();
    } else {
        cartAddByQuickViewDisplayLightBox(belnShopKbn, cartAddurl);
    }
}
var cartAddByQuickViewFlg = false;

// �y�֐��z�J�[�g�ǉ��ƃ��C�g�{�b�N�X�\������(�N�C�b�N�r���[�^���i�ڍ�)
function cartAddByQuickViewDisplayLightBox(thick_belnShopKbn,thick_cartAddurl){

	// �Q�x�����h�~
	if (cartAddByQuickViewFlg) {
		return;
	}
	cartAddByQuickViewFlg = true;
	
	// �񓯊��pURL�擾
	var ss_url = thick_cartAddurl.substring(0, thick_cartAddurl.indexOf('srvlt') + 5);
	ss_url = ss_url.replace('srvlt', 'service');

	// �^�}�N�G
	var thick_katBtgoObj = document.getElementsByName("KAT_BTGO");
	var thick_katBtgo = thick_katBtgoObj[0].value;
	
	// ���N�G�X�gURL�𐶐�
	var uri = ss_url + '/EPFB00/EPFB0097/dProdStockCartAdd?BELN_SHOP_KBN=' + thick_belnShopKbn + '&KAT_BTGO=' + thick_katBtgo;
	
	// �F
	var thick_iroObj = document.getElementsByName("IRO_SKBT_SEQ");
	if (thick_iroObj != null && thick_iroObj != undefined && thick_iroObj.length != 0) {
		if (thick_iroObj[0].options[thick_iroObj[0].selectedIndex].value != 0) {
			uri += '&IRO_SKBT_SEQ=' + thick_iroObj[0].options[thick_iroObj[0].selectedIndex].value;
		}
	}
	// �T�C�Y�P
	var thick_size1Obj = document.getElementsByName("SIZE1_SKBT_SEQ");
	if (thick_size1Obj != null && thick_size1Obj != undefined && thick_size1Obj.length != 0) {
		if (thick_size1Obj[0].options[thick_size1Obj[0].selectedIndex].value != 0) {
			uri += '&SIZE1_SKBT_SEQ=' + thick_size1Obj[0].options[thick_size1Obj[0].selectedIndex].value;
		}
	}
	// �T�C�Y�Q
	var thick_size2Obj = document.getElementsByName("SIZE2_SKBT_SEQ");
	if (thick_size2Obj != null && thick_size2Obj != undefined && thick_size2Obj.length != 0) {
		if (thick_size2Obj[0].options[thick_size2Obj[0].selectedIndex].value != 0) {
			uri += '&SIZE2_SKBT_SEQ=' + thick_size2Obj[0].options[thick_size2Obj[0].selectedIndex].value;
		}
	}
	// �T�C�Y�R
	var thick_size3Obj = document.getElementsByName("SIZE3_SKBT_SEQ");
	if (thick_size3Obj != null && thick_size3Obj != undefined && thick_size3Obj.length != 0) {
		if (thick_size3Obj[0].options[thick_size3Obj[0].selectedIndex].value != 0) {
			uri += '&SIZE3_SKBT_SEQ=' + thick_size3Obj[0].options[thick_size3Obj[0].selectedIndex].value;
		}
	}
	// ����
	var thick_q = document.getElementsByName("Q")[0].value;
	uri += '&Q=' + thick_q;
	// �J�[�g�ǉ��t���O
	uri += '&CART_ADD_FLG=1';
	// �����ꏤ�i�敪
	if (document.form01.NR_SHN_KBN != undefined) {
		var nrShnKbn = document.form01.NR_SHN_KBN.value;
		uri = uri + "&NR_SHN_KBN=" + nrShnKbn;
	}
	uri = uri + "&TIMESTAMP=" + createTimeStamp() + "&SHN_SHS_FRM_SNI_KBN=1";
	
	// �݌ɏ�
	var ZK_JKY = "";
	// �݌ɏ󋵋敪
	var ZK_JKY_KBN = "";
	// �ē��׈ē��\���t���O
	var SNK_ANAI_FLG = "";
	// ��֏��i_�^�}�N�G
	var DTSHN_KAT_BTGO = "";
	// �Ĉ����敪
	var SAI_HKT_KBN = "";
	// �w���s�敪
	var KNY_FK_KBN = "";
	// �w���s���b�Z�[�W
	var KNY_FK_MSG = "";
	// ���C�g�{�b�N�X�\���敪
	var thick_litBoxHyjKbn = "1";
	/* AMS�I�[�_�[�����̓t���[���P add start 2016/02/25 */
	var odrIptSniKbn = getUrlValue(thick_cartAddurl, 'ORD_IPT_SNI_KBN');
	if (odrIptSniKbn == "1") {
		thick_litBoxHyjKbn = "5";
	}
	/* AMS�I�[�_�[�����̓t���[���P add end   2016/02/25 */

	// �݌ɏ����擾
	$.ajax({
		type: "GET",
		url: uri,
		cache: false,
		dataType: "jsonp",
		jsonpCallback: "setInventoryInfoCartAdd",
		success: function(data) {
			var info = data.INVENTORY_INFO_CART_ADD[0];
			if (info) {
				ZK_JKY = String(info.ZK_JKY);					// �݌ɏ�
				SAI_HKT_KBN = String(info.SAI_HKT_KBN);			// �����敪
				SNK_ANAI_FLG = String(info.SNK_ANAI_FLG);		// �ē��׈ē��\���t���O
				DTSHN_KAT_BTGO = String(info.DTSHN_KAT_BTGO);	// ��֏��i_�^�}�N�G
				KNY_FK_KBN = String(info.KNY_FK_KBN);			// �w���s�敪
				KNY_FK_MSG = String(info.KNY_FK_MSG);			// �w���s���b�Z�[�W

				// ���C�g�{�b�N�X�\���敪�ݒ�
				if (KNY_FK_KBN == "1") {
					thick_litBoxHyjKbn = 4;
				} else if (ZK_JKY.indexOf("soldout") != -1) {
					thick_litBoxHyjKbn = 2;
					} else if (SAI_HKT_KBN == "C" ) {
					thick_litBoxHyjKbn = 3;
				}

				// �݌ɏ󋵂̃^�O�ϊ�
				if (ZK_JKY.indexOf("soldout") != -1) {
					// ����؂�̏ꍇ
					ZK_JKY = ZK_JKY.replace(/ class="stock-soldout"/g,"");
					ZK_JKY = ZK_JKY.replace(/<span>/g,"");
					ZK_JKY = ZK_JKY.replace(/<\/span>/g,"");
					ZK_JKY_KBN = 0;
				} else if (ZK_JKY.indexOf("wait") != -1) {
					// ���ח\��̏ꍇ
					ZK_JKY = ZK_JKY.replace(/ class="stock-wait"/g,"");
					ZK_JKY = ZK_JKY.replace(/<span>/g,"");
					ZK_JKY = ZK_JKY.replace(/<\/span>/g,"");
					ZK_JKY_KBN = 2;
				} else {
					// �݌ɂ���̏ꍇ
					ZK_JKY = ZK_JKY.replace(/ class="stock"/g,"");
					ZK_JKY = ZK_JKY.replace(/<span>/g,"");
					ZK_JKY = ZK_JKY.replace(/<\/span>/g,"");
					ZK_JKY_KBN = 1;
				}
			}
		},
		complete: function (XHRoj, textStatus) {
			// �J�[�g�ǉ���URL����
			// ��J�e�S���h�c
			var thick_daiCategoryId = "";
			var thick_daiCategoryIdObj = document.getElementsByName("DAI_CATEGORY_ID");
			if (thick_daiCategoryIdObj != null && thick_daiCategoryIdObj != undefined && thick_daiCategoryIdObj.length != 0 ){
				thick_daiCategoryId = thick_daiCategoryIdObj[0].value;
			}
			// ���J�e�S���h�c
			var thick_chCategoryId = "";
			var thick_chCategoryIdObj = document.getElementsByName("CH_CATEGORY_ID");
			if (thick_chCategoryIdObj != null && thick_chCategoryIdObj != undefined && thick_chCategoryIdObj.length != 0 ){
				thick_chCategoryId = thick_chCategoryIdObj[0].value;
			}
			// ���J�e�S���h�c
			var thick_shoctgrId = "";
			var thick_shoctgrIdObj = document.getElementsByName("SHOCTGR_ID");
			if (thick_shoctgrIdObj != null && thick_shoctgrIdObj != undefined && thick_shoctgrIdObj.length != 0 ){
				thick_shoctgrId = thick_shoctgrIdObj[0].value;
			}
			// ���i�J�[�g�ǉ��o�H�敪
			var thick_shncrttkkroKbn = "";
			var thick_shncrttkkroKbnObj = document.getElementsByName("SHNCRTTKKRO_KBN");
			if (thick_shncrttkkroKbnObj != null && thick_shncrttkkroKbnObj != undefined && thick_shncrttkkroKbnObj.length != 0 ){
				thick_shncrttkkroKbn = thick_shncrttkkroKbnObj[0].value;
			}
			// ���C�ɓ��胊�X�g�o�R�敪
			var thick_olstKyuKbn = "";
			var thick_olstKyuKbnObj = document.getElementsByName("OLST_KYU_KBN");
			if (thick_olstKyuKbnObj != null && thick_olstKyuKbnObj != undefined && thick_olstKyuKbnObj.length != 0 ){
				thick_olstKyuKbn = thick_olstKyuKbnObj[0].value;
			}
			// �����N�V�F�A���ڌo�R�敪
			var thick_lsChsKyuKbn = "";
			var thick_lsChsKyuKbnObj = document.getElementsByName("LS_CHS_KYU_KBN");
			if (thick_lsChsKyuKbnObj != null && thick_lsChsKyuKbnObj != undefined && thick_lsChsKyuKbnObj.length != 0 ){
				thick_lsChsKyuKbn = thick_lsChsKyuKbnObj[0].value;
			}
			// ���[�����ڌo�R�敪
			var thick_mlChsKyuKbn = "";
			var thick_mlChsKyuKbnObj = document.getElementsByName("ML_CHS_KYU_KBN");
			if (thick_mlChsKyuKbnObj != null && thick_mlChsKyuKbnObj != undefined && thick_mlChsKyuKbnObj.length != 0 ){
				thick_mlChsKyuKbn = thick_mlChsKyuKbnObj[0].value;
			}
			// ���I��ʋ敪
			var thick_dtkGmnKbn = "";
			var thick_dtkGmnKbnObj = document.getElementsByName("DTK_GMN_KBN");
			if (thick_dtkGmnKbnObj != null && thick_dtkGmnKbnObj != undefined && thick_dtkGmnKbnObj.length != 0 ){
				thick_dtkGmnKbn = thick_dtkGmnKbnObj[0].value;
			}
			// �֘A���i�p�����[�^
			var thick_knrnShn = "";
			var thick_knrnShnObj = document.getElementsByName("XPROD_KAT_NO_PRM");
			if (thick_knrnShnObj != null && thick_knrnShnObj != undefined && thick_knrnShnObj.length != 0 ){
				thick_knrnShn = thick_knrnShnObj[0].value;
			}
			// cat�p�����[�^
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
			// �F
			var thick_iroObj =document.getElementsByName("IRO_SKBT_SEQ");
			if (thick_iroObj != null && thick_iroObj != undefined && thick_iroObj.length != 0) {
				thick_iroSkbtSeq = thick_iroObj[0].options[thick_iroObj[0].selectedIndex].value;
			}
			// �T�C�Y�P
			var thick_size1Obj =document.getElementsByName("SIZE1_SKBT_SEQ");
			if (thick_size1Obj != null && thick_size1Obj != undefined && thick_size1Obj.length != 0) {
				thick_size1SkbtSeq += thick_size1Obj[0].options[thick_size1Obj[0].selectedIndex].value;
			}
			// �T�C�Y�Q
			var thick_size2Obj =document.getElementsByName("SIZE2_SKBT_SEQ");
			if (thick_size2Obj != null && thick_size2Obj != undefined && thick_size2Obj.length != 0) {
				thick_size2SkbtSeq += thick_size2Obj[0].options[thick_size2Obj[0].selectedIndex].value;
			}
			// �T�C�Y�R
			var thick_size3Obj =document.getElementsByName("SIZE3_SKBT_SEQ");
			if (thick_size3Obj != null && thick_size3Obj != undefined && thick_size3Obj.length != 0) {
				thick_size3SkbtSeq += thick_size3Obj[0].options[thick_size3Obj[0].selectedIndex].value;
			}
			// �֘A���i�p�����[�^
			if(thick_knrnShn!=""){
				thick_cartAddurl += "&XPROD_KAT_NO_PRM=" + thick_knrnShn;
			}
			// cat�p�����[�^
			if(thick_catPrm!=""){
				thick_cartAddurl += "&CAT_PRM=" + thick_catPrm;
			}
			// �F���ʘA��
			if(thick_iroSkbtSeq!=""){
				thick_cartAddurl += "&IRO_SKBT_SEQ=" + thick_iroSkbtSeq;
			}
			// �T�C�Y�P���ʘA��
			if(thick_size1SkbtSeq!=""){
				thick_cartAddurl += "&SIZE1_SKBT_SEQ=" + thick_size1SkbtSeq;
			}
			// �T�C�Y�Q���ʘA��
			if(thick_size2SkbtSeq!=""){
				thick_cartAddurl += "&SIZE2_SKBT_SEQ=" + thick_size2SkbtSeq;
			}
			// �T�C�Y�R���ʘA��
			if(thick_size3SkbtSeq!=""){
				thick_cartAddurl += "&SIZE3_SKBT_SEQ=" + thick_size3SkbtSeq;
			}
			/* AMS�I�[�_�[�����̓t���[���P update start 2016/02/25 */
			// �����ꏤ�i�敪
			// (�����ꏤ�i�̏ꍇ�A�����ꏤ�i�敪��ݒ�ς݂Ȃ̂ŁA������ɐݒ�s�v�Ƃ���)
			if (odrIptSniKbn != "1" && document.form01.NR_SHN_KBN != undefined) {
				var nrShnKbn = document.form01.NR_SHN_KBN.value;
				thick_cartAddurl += "&NR_SHN_KBN=" + nrShnKbn;
			}
			// �J�ڐ�敪
			if (thick_litBoxHyjKbn == 5) {
				thick_cartAddurl += "&SNI_SK_KBN=2";
			}
			// �E�B���h�E�T�C�Y���G���[���ƕ�����
			if (thick_litBoxHyjKbn == 2 || thick_litBoxHyjKbn == 3 || thick_litBoxHyjKbn == 4) {
				// ���ʁ����C�g�{�b�N�X�\���p�p�����[�^
				thick_cartAddurl += "&Q=" + thick_q
							+ "&TB_iframe=true&height=458&width=700";
			} else if (thick_litBoxHyjKbn == 5) {
				// ���ʁ����C�g�{�b�N�X�\���p�p�����[�^
				thick_cartAddurl += "&Q=" + thick_q
							+ "&TB_iframe=true&height=500&width=830";
			} else {
				// ���ʁ����C�g�{�b�N�X�\���p�p�����[�^
				thick_cartAddurl += "&Q=" + thick_q
							+ "&TB_iframe=true&height=563&width=865";
			}
			
			// 4.iframe�\���������Ăяo��
			if (thick_litBoxHyjKbn == 5) {
				parent.tb_show('', thick_cartAddurl ,'');
			} else {
				parent.tb_show('���̏��i���w�����ꂽ���ւ�������', thick_cartAddurl ,'');
			}
			/* AMS�I�[�_�[�����̓t���[���P update end   2016/02/25 */
			cartAddByQuickViewFlg = false;
		},
		error: function() {//�ʐM�G���[
			cartAddByShnDtlFlg = false;
		}
	});
}
