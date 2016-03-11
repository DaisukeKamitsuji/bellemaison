function subwindowEPXB0009(url,pattern) {
    if (pattern == "friend") {
        var ybno = document.form01.YBNO1.value + document.form01.YBNO2.value;
        
        var jshField = "FRIEND_JSH_";
        
        var jshKnField = "FRIEND_JSH_KN_";
        
        var jshJdShtkYbno = "JSH_JD_SHTK_YBNO";
        
    } else {
        var ybno = document.form01.YBNO1.value + document.form01.YBNO2.value;
        
        var jshField = "JSH";
        
        var jshKnField = "JSH_KN";
        
        var jshJdShtkYbno = "JSH_JD_SHTK_YBNO";
        
   }
   
   if(pattern == "popup") {
   		var subwindowName = "subwindow2";
   } else {
   		var subwindowName = "subwindow";   
   }
   
   
    window.open(url + "&YBNO=" + ybno 
    	            + "&JSH_FLD_MEI=" + jshField 
    	            + "&JSH_KN_FLD_MEI=" + jshKnField 
    	            + "&JSH_JD_SHTK_YBNO_FLD_MEI=" + jshJdShtkYbno
    	            ,subwindowName, "width=540,height=480,scrollbars=yes,resizable=yes");  
}
function windowOpenDigicata(djtrCtlgUrl,bnk){
	window.open(djtrCtlgUrl+'dc/'+bnk+'_/index.html','digicata_flash','width=1006,height=650,toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=yes').focus();
}
function windowOpenDigicataPage(djtrCtlgUrl,bnk_pagenum,srchrank){
	// 下記取得ロジックを修正 2009/9/8
	Reg=bnk_pagenum.match(/(.*)\/(\d{1,3})/);
	// 上記取得ロジックを修正 2009/9/8
	bnk = (RegExp.$1)
	pagenum = (RegExp.$2)
	// 下記ページ番号補完ロジックを追加 2009/9/8
	cnt_kspg = pagenum.length;
	if( cnt_kspg == 1 ){
		pagenum = "00" + pagenum;
	}else if( cnt_kspg == 2 ){
		pagenum = "0" + pagenum;
	}
	// 上記ページ番号補完ロジックを追加 2009/9/8
		if (srchrank==null) {
			window.open(djtrCtlgUrl+'dc/'+bnk+'_/index.html?directPage='+pagenum,'digicata_flash','width=1006,height=650,toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=yes').focus();
			}
		else {
			window.open(djtrCtlgUrl+'dc/'+bnk+'_/index.html?directPage='+pagenum+'&dcken'+srchrank,'digicata_flash','toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=yes').focus();
			}
}
function windowOpenDigicataHelp(dcserver){
  window.open(dcserver+'dc/help/index.html','digicatahelp','width=740,height=500,scrollbars=yes,resizable=1').focus();
}
function shnshsExpand(URI,SUB,EXP){
  if(document.getElementById) {
    if(document.getElementById(SUB).style.display) {
      if(URI != 0) {
        document.getElementById(SUB).style.display = "block";
        document.getElementById(EXP).style.display = "none";
      } else {
        document.getElementById(SUB).style.display = "none";
        document.getElementById(EXP).style.display = "block";
      }
    } else {
      location.href = URI;
      return true;
    }
  } else {
    location.href = URI;
    return true;
  }
}
function shnshsOpenSubWinFocus(url, windowId, ptn){
	var width = 0;
	var height = 0;
	var winname = "";
	var opt = "scrollbars=yes, resizable=yes";
	
	winname = "subwindow";
	if(windowId != 0){
		winname = winname + windowId;
	}
	switch(ptn){
		case 1:
			width = "700";
			height = "650";
			break;
		case 2:
			width = "740";
			height = "480";
			break;
		case 3:
			width = "550";
			height = "620";
			break;
		case 4:
			width = "600";
			height = "540";
			break;
		case 5:
			width = "360";
			height = "330";
			break;
		case 6:
			width = "1";
			height = "1";
			break;
//●20130226 AMS 追加 start●
		case 7:
			width = "700";
			height = "660";
			break;
//●20130226 AMS 追加 end●
//●20130917 AMS 追加 start●
		case 8:
			width = "800";
			height = "560";
			break;
//●20130917 AMS 追加 end●
//●20141219 AMS 追加 start●
                case 9:
                        width = "750";
                        height = "560";
                        break;
//●20141219 AMS 追加 end●
//●20150126 AMS 追加 start●
		case 10:
			width = "820";
			height = "480";
			break;
//●20150126 AMS 追加 end●
/* 修正 151130brs1 TAM ココから */
		case 11:
			width = "940";
			height = "600";
			break;
/* 修正 151130brs1 TAM ココまで */
	}
	
	if(width != 0 && height != 0){
		window.open(url, winname, "width=" + width + ", height=" + height + ", " + opt).focus();
	}
}
var proInfoList = new Array(8);
//●20120112 AMS 変更 start●
var belnShopKbnList = new Array(6);
var katBtgoList = new Array(6);
var nameList = new Array(6);
var kakkList = new Array(6);
var iPathList = new Array(6);
var giftImgList = new Array(6);
//●20110215 AMS 追加 start●
var mnzkdHknTnList = new Array(6);
var soKqList = new Array(6);
//●20110215 AMS 追加 end●
//●20120112 AMS 変更 end●
var KEY_1 = "..";
var KEY_2 = "__";
//●20130325 AMS 追加 start●
var KEY_3 = "_";
//●20130325 AMS 追加 end●
var DIV_FRAME_NAME = "iframeDisplay";
var DIV_NAME = "item";
var DIV_LINE_NAME = "line";
var DELETE_IDX = "1";
var IMG_WIDTH = "80";
var IMG_HEIGHT = "80";
var COOKIE_DATA_PRO = "90";
var COOKIE_DATA_RRK = "365";
//●20130212 AMS 追加 start●
var COOKIE_DATA_TT = "730";
//●20130212 AMS 追加 end●
var BLANK = "blank";
var PRO_URL = "/ep/srvlt/EPFB00/EPFB0005/dProdDtlShow";;
var PRO_URL_MC = "/ep/srvlt/EPFM00/EPFM0002/dProdDtlMcShow";
var MC_SHOP_KBN = "200";
var proUrlDomain = "";
var EPFB00_IMG_WIDTH = "100";
var EPFB00_IMG_HEIGHT = "100";
//●20130212 AMS 追加 start●
function initCookieNew(belnShopKbn,katBtgo,name,kakk,iPath,gift,imgPass,mnzkdHknTn,soKq,baseurl,domain,ctgrId) {
	if(baseurl != undefined) {
		proUrlDomain = baseurl;
	}
	var readRrkFlg = cookieRead("RRKSGNFLG");
	if ( readRrkFlg == DELETE_IDX ) {
		var frameDiv = document.getElementById(DIV_FRAME_NAME);
		frameDiv.innerHTML = "";
		if(belnShopKbn == MC_SHOP_KBN){
			imgCheck(DELETE_IDX,imgPass);
		} else {
			epfb00_imgCheck_ch_cate(DELETE_IDX,imgPass);
		}
	} else {
		cookieWrite("RRKSGNFLG", "2", COOKIE_DATA_RRK);
		insertCookie(belnShopKbn,katBtgo,name,kakk,iPath,gift,imgPass,mnzkdHknTn,soKq,domain);
	}
	setTtInfoCookie(ctgrId);
}
//●20130212 AMS 追加 end●
//●20110215 AMS 変更 start●
//function insertCookie(belnShopKbn,katBtgo,name,kakk,iPath,gift,imgPass) {
//○20110215 AMS 変更 replace○
//●20110215 AMS 変更 end●
//●20110930 AMS 変更 start●
//function insertCookie(belnShopKbn,katBtgo,name,kakk,iPath,gift,imgPass,mnzkdHknTn,soKq) {
//○20110930 AMS 変更 replace○
function insertCookie(belnShopKbn,katBtgo,name,kakk,iPath,gift,imgPass,mnzkdHknTn,soKq,domain) {
//●20110930 AMS 変更 end●
	var readRrkFlg = cookieRead("RRKSGNFLG");
	if ( readRrkFlg == DELETE_IDX || readRrkFlg == "2") {
		var frameDiv = document.getElementById(DIV_FRAME_NAME);
		if (frameDiv.innerHTML != "") {
			if (belnShopKbn == MC_SHOP_KBN) {
				var tempProInfo = cookieRead("RRKPROD_MC");
			} else {
				var tempProInfo = cookieRead("RRKPROD");
			}
			proInfoList = tempProInfo.split(KEY_1);
			if ( proInfoList[0] != "" && proInfoList[0] != null ) {
				belnShopKbnList = proInfoList[0].split(KEY_2);
				katBtgoList = proInfoList[1].split(KEY_2);
				nameList = proInfoList[2].split(KEY_2);
				kakkList = proInfoList[3].split(KEY_2);
				iPathList = proInfoList[4].split(KEY_2);
				giftImgList = proInfoList[5].split(KEY_2);
//●20130325 AMS 変更 start●
				mnzkdHknTnList = proInfoList[6].split(KEY_2);
				soKqList = proInfoList[7].split(KEY_2);
//●20130325 AMS 変更 end●
				//●20110215 AMS 追加 start●
//				if ( proInfoList[6] != "" && proInfoList[6] != null ) {
//
//					mnzkdHknTnList = proInfoList[6].split(KEY_2);
//
//				}
//
//				if ( proInfoList[7] != "" && proInfoList[7] != null ) {
//
//					soKqList = proInfoList[7].split(KEY_2);
//
//				}
				//●20110215 AMS 追加 end●
				//●20110215 AMS 変更 start●
				//setData(belnShopKbnList,katBtgoList,nameList,kakkList,iPathList,giftImgList,imgPass);
				//○20110215 AMS 変更 replace○
				//●20110215 AMS 変更 end●
				//●20110930 AMS 変更 start●
				//setData(belnShopKbnList,katBtgoList,nameList,kakkList,iPathList,giftImgList,imgPass,mnzkdHknTnList,soKqList);
				//○20110930 AMS 変更 replace○
				setData(belnShopKbnList,katBtgoList,nameList,kakkList,iPathList,giftImgList,imgPass,mnzkdHknTnList,soKqList,domain);
				//●20110930 AMS 変更 end●
			} else {
				frameDiv.innerHTML = "";
			}
		}
		//●20110215 AMS 変更 start●
		//setCookie("",belnShopKbn,katBtgo,name,kakk,iPath,gift);
		//○20110215 AMS 変更 replace○
		setCookie("",belnShopKbn,katBtgo,name,kakk,iPath,gift,mnzkdHknTn,soKq);
		//●20110215 AMS 変更 end●
		if(belnShopKbn == MC_SHOP_KBN){
			imgCheck("",imgPass);
		} else {
			epfb00_imgCheck_ch_cate("",imgPass);
		}
	}
}
function deleteCookie(imgPass){
	var frameDiv = document.getElementById(DIV_FRAME_NAME);
	frameDiv.innerHTML = "";
	cookieDel("RRKPROD");
	cookieDel("RRKPROD_MC");
	cookieWrite("RRKSGNFLG", DELETE_IDX, COOKIE_DATA_RRK);
	imgCheck(DELETE_IDX,imgPass);
}
function imgCheck(readRrkFlg,imgPass) {
	if ( readRrkFlg == null || readRrkFlg == "" ) {
		document.images["onCheck"].src = imgPass + "side_check_btn1on.jpg";
		document.images["offCheck"].src = imgPass + "side_check_btn2off.jpg";
	} else {
		document.images["onCheck"].src = imgPass + "side_check_btn1off.jpg";
		document.images["offCheck"].src = imgPass + "side_check_btn2on.jpg";
	}
}
//●20110215 AMS 変更 start●
//function setData(belnShopKbnList,katBtgoList,nameList,kakkList,iPathList,giftList,imgPass) {
//○20110215 AMS 変更 replace○
//●20110215 AMS 変更 end●
//●20110930 AMS 変更 start●
//function setData(belnShopKbnList,katBtgoList,nameList,kakkList,iPathList,giftList,imgPass,mnzkdHknTnList,soKqList) {
//○20110930 AMS 変更 replace○
function setData(belnShopKbnList,katBtgoList,nameList,kakkList,iPathList,giftList,imgPass,mnzkdHknTnList,soKqList,domain) {
//●20110930 AMS 変更 end●
	proCnt = katBtgoList.length;
	for (i=0;i < proCnt; i++ ) {
		//●20110302 AMS 変更 start●
		//var elemName = document.getElementById("name"+ i);
		//elemName.innerHTML = nameList[i] + "<br/>" + kakkList[i];
		//○20110302 AMS 変更 replace○
		var kakkDiv = document.getElementById("kakk"+ i);
		var elemName = document.getElementById("name"+ i);;
		if(kakkDiv == null){
			//●20111216 AMS 変更 start●
			//elemName.innerHTML = nameList[i] + "<br/>" + kakkList[i];
			//○20111216 AMS 変更 replace○
			//●20120112 AMS 追加 start●
			if(elemName != null){
			//●20120112 AMS 追加 end●
				if (belnShopKbnList[i] == MC_SHOP_KBN) {
					elemName.innerHTML = nameList[i] + "<br/>" + kakkList[i];
				} else {
					elemName.innerHTML = nameList[i] + "<br/>" + kakkList[i].replace(/\(本体.*\)/,"(税込)");
				}
			}
		} else {
			elemName.innerHTML = nameList[i];
			//●20111216 AMS 変更 start●
			//kakkDiv.innerHTML = "<br/>" + kakkList[i];
			//○20111216 AMS 変更 replace○
			//●20120112 AMS 追加 start●
			if(elemName != null){
			//●20120112 AMS 追加 end●
				if (belnShopKbnList[i] == MC_SHOP_KBN) {
					kakkDiv.innerHTML = "<br/>" + kakkList[i];
				} else {
					kakkDiv.innerHTML = kakkList[i].replace(/\(本体.*\)/,"(税込)");
				}
			}
		}
		//●20110302 AMS 変更 end●
		var image = document.images["img" + i];
		//●20110930 AMS 変更 start●
		//image.src = iPathList[i];
		//○20110930 AMS 変更 replace○
		//●20120112 AMS 追加 start●
		if(image != null){
		//●20120112 AMS 追加 end●
			image.src = domain + iPathList[i];
			//●20110930 AMS 変更 end●
			//●20120201 AMS 変更 start●
			if (belnShopKbnList[i] == MC_SHOP_KBN) {
				image.height = IMG_HEIGHT;
				image.width = IMG_WIDTH;
			} else {
				image.height = EPFB00_IMG_HEIGHT;
				image.width = EPFB00_IMG_WIDTH;
			}
			//●20120201 AMS 変更 end●
		}
		if (belnShopKbnList[i] == MC_SHOP_KBN) {
			PRO_URL = PRO_URL_MC;
			//●20110215 AMS 追加 start●
			var giftMark = giftList[i];
			if ( giftMark == BLANK ) {
				var giftDivName = document.getElementById("giftMarkDiv" + i);
				if (giftDivName != null) {
					giftDivName.removeChild(giftDivName.firstChild);
				}
			} else {
				var giftImage = document.images["giftMark" + i];
				if (giftImage != null) {
					giftImage.src = imgPass + giftList[i];
				}
			}
			//●20110215 AMS 追加 end●
		}
		//●20120112 AMS 追加 start●
		if(elemName != null){
		//●20120112 AMS 追加 end●
			elemName.href = proUrlDomain + PRO_URL + "?BELN_SHOP_KBN=" + belnShopKbnList[i] + "&KAT_BTGO=" + katBtgoList[i] + "&SHNCRTTKKRO_KBN=E1";
		}
		var link = document.getElementById("link" + i);
		//●20120112 AMS 追加 start●
		if(link != null){
		//●20120112 AMS 追加 end●
			link.href = proUrlDomain + PRO_URL + "?BELN_SHOP_KBN=" + belnShopKbnList[i] + "&KAT_BTGO=" + katBtgoList[i] + "&SHNCRTTKKRO_KBN=E1";
		}
		//●20110215 AMS 削除 start●
		//var giftMark = giftList[i];
		//if ( giftMark == BLANK ) {
		//	var giftDivName = document.getElementById("giftMarkDiv" + i);
		//	giftDivName.removeChild(giftDivName.firstChild);
		//} else {
		//	var giftImage = document.images["giftMark" + i];
		//	giftImage.src = imgPass + giftList[i];
		//}
		//●20110215 AMS 削除 end●
		//●20110215 AMS 追加 start●
		var mnzkdHknTnDiv = document.getElementById("mnzkdHknTnMarkDiv" + i);
		if (mnzkdHknTnDiv != null) {
//●20130325 AMS 削除 start●
//			if (belnShopKbnList[i] == MC_SHOP_KBN && soKqList[i] < 5) {
//
//				mnzkdHknTnDiv.removeChild(mnzkdHknTnDiv.firstChild);
//
//			} else {
//●20130325 AMS 削除 end●
				if(mnzkdHknTnList[i] != null && mnzkdHknTnList[i] != "" && soKqList[i] != null && soKqList[i] != "" && soKqList[i] > 0) {
					var strBuff = "<img src=\"" + imgPass + "star/star_icon_" + mnzkdHknTnList[i]*10 + ".gif" + "\" />";
					strBuff    += "&nbsp;(" + soKqList[i] + ")";
					strBuff    += "<br />";
					mnzkdHknTnDiv.innerHTML = strBuff;
				}
//●20130325 AMS 削除 start●
//			}
//●20130325 AMS 削除 end●
		}
		//●20110215 AMS 追加 end●
	}
	
	//●20120112 AMS 追加 start●
	if (belnShopKbnList[0] == MC_SHOP_KBN) {
		var Cnt = 5;
	} else {
		var Cnt = 6;
	}
	//●20120112 AMS 追加 end●
	
	for (i=0;i < Cnt; i++) {
		if (proCnt <= i || (katBtgoList[0] == null || katBtgoList[0] == "")) {
			var div = document.getElementById(DIV_NAME + i);
			while ( div.hasChildNodes() ) {
				div.removeChild(div.firstChild);
			}	
		}
		//●20120112 AMS 削除 start●
		//if (i != 4 && (proCnt-1 <= i || katBtgoList[0] == null || katBtgoList[0] == ""))  {
		//	var divline = document.getElementById(DIV_LINE_NAME + i);
		//	divline.removeChild(divline.firstChild);
		//}
		//●20120112 AMS 削除 end●
	}
}
//●20110215 AMS 変更 start●
//function setCookie(readRrkFlg,belnShopKbn,katBtgo,name,kakk,iPath,gift) {
//○20110215 AMS 変更 replace○
function setCookie(readRrkFlg,belnShopKbn,katBtgo,name,kakk,iPath,gift,mnzkdHknTn,soKq) {
//●20110215 AMS 変更 end●
	tempBelnShopKbn = belnShopKbn;
	tempKatBtgo = katBtgo;
	tempName = name;
	tempKakk = kakk;
	tempIPath = iPath;
	var giftHn = gift;
	if (gift == null || gift == "") {
		giftHn = BLANK;
	}
	tempGift = giftHn;
	//●20110215 AMS 追加 start●
	tempMnzkdHknTn = mnzkdHknTn;
	tempSoKq = soKq;
	//●20110215 AMS 追加 end●
	if (belnShopKbn == MC_SHOP_KBN) {
		var tempProInfo = cookieRead("RRKPROD_MC");
	} else {
		var tempProInfo = cookieRead("RRKPROD");
	}
	proFlg = false;
	if (readRrkFlg == null || readRrkFlg == "") {
		proInfoList = tempProInfo.split(KEY_1);
		if ( proInfoList[0] != "" && proInfoList[0] != null ) {
			belnShopKbnList = proInfoList[0].split(KEY_2);
			katBtgoList = proInfoList[1].split(KEY_2);
			nameList = proInfoList[2].split(KEY_2);
			kakkList = proInfoList[3].split(KEY_2);
			iPathList = proInfoList[4].split(KEY_2);
			giftList = proInfoList[5].split(KEY_2);
			mnzkdHknTnList = proInfoList[6].split(KEY_2);
			soKqList = proInfoList[7].split(KEY_2);
//●20130325 AMS 変更 start●
//			//●20110215 AMS 追加 start●
//
//			if ( proInfoList[6] != "" && proInfoList[6] != null ) {
//
//				mnzkdHknTnList = proInfoList[6].split(KEY_2);
//
//			}
//
//			if ( proInfoList[7] != "" && proInfoList[7] != null ) {	
//
//				soKqList = proInfoList[7].split(KEY_2);
//
//			}
//
//			//●20110215 AMS 追加 end●
//●20130325 AMS 変更 end●
			cnt = katBtgoList.length;
			for ( i=0; i < cnt; i++ ) {
				if ( katBtgo == katBtgoList[i]) {
					proFlg = true;
					break;
				}
			}
			
			//●20120112 AMS 追加 start●
			if (belnShopKbn == MC_SHOP_KBN) {
				var max = 5;
			} else {
				var max = 6;
			}
			//●20120112 AMS 追加 start●
			
			if( proFlg == false ) {
				//●20120112 AMS 変更 start●
				if ( max <= cnt ) {
					for ( i=0; i < max-1; i++ ) {
				//●20120112 AMS 変更 end●
						tempBelnShopKbn = tempBelnShopKbn + KEY_2 + belnShopKbnList[i];
						tempKatBtgo = tempKatBtgo + KEY_2 + katBtgoList[i];
						tempName = tempName + KEY_2 + nameList[i];
						tempKakk = tempKakk + KEY_2 + kakkList[i];
						tempIPath = tempIPath + KEY_2 + iPathList[i];
						tempGift = tempGift + KEY_2 + giftList[i];
						//●20110215 AMS 追加 start●
						tempMnzkdHknTn = tempMnzkdHknTn + KEY_2 + mnzkdHknTnList[i];
						tempSoKq = tempSoKq + KEY_2 + soKqList[i];
						//●20110215 AMS 追加 end●
					}
				} else {
					for ( i=0; i < cnt; i++ ) {
						tempBelnShopKbn = tempBelnShopKbn + KEY_2 + belnShopKbnList[i];
						tempKatBtgo = tempKatBtgo + KEY_2 + katBtgoList[i];
						tempName = tempName + KEY_2 + nameList[i];
						tempKakk = tempKakk + KEY_2 + kakkList[i];
						tempIPath = tempIPath + KEY_2 + iPathList[i];
						tempGift = tempGift + KEY_2 + giftList[i];
						//●20110215 AMS 追加 start●
						tempMnzkdHknTn = tempMnzkdHknTn + KEY_2 + mnzkdHknTnList[i];
						tempSoKq = tempSoKq + KEY_2 + soKqList[i];
						//●20110215 AMS 追加 end●
					}
				}
			}
		}
		var proInfo = tempProInfo;
		if ( proFlg == false ) {
			//●20110215 AMS 変更 start●
			//proInfo = tempBelnShopKbn + KEY_1 + tempKatBtgo + KEY_1 + tempName + KEY_1 + tempKakk + KEY_1 + tempIPath + KEY_1 + tempGift;
			//○20110215 AMS 変更 replace○
			proInfo = tempBelnShopKbn + KEY_1 + tempKatBtgo + KEY_1 + tempName + KEY_1 + tempKakk + KEY_1 + tempIPath + KEY_1 + tempGift + KEY_1 + tempMnzkdHknTn + KEY_1 + tempSoKq;
			//●20110215 AMS 変更 end●
		}
		cookieWrite("RRKSGNFLG", readRrkFlg, COOKIE_DATA_RRK);	
	}
	if (belnShopKbn == MC_SHOP_KBN) {
		cookieWrite("RRKPROD_MC", proInfo, COOKIE_DATA_PRO);
	} else {
		cookieWrite("RRKPROD", proInfo, COOKIE_DATA_PRO);
	}
}
//●20130212 AMS 追加 start●
function setTtInfoCookie(ctgrId) {
	var ttInfoPer = cookieRead("TTINFOPER");
	var name = "lastseenitemcat"; //キー値
	var tempTtInfo = "";
	if (document.cookie) {
		var ttInfoList = ttInfoPer.split(";");
		for (var i = 0; i < ttInfoList.length; i++) {
			var str = ttInfoList[i].split("=");
			if(str[0] != "" && str[0] != name){
				tempTtInfo = tempTtInfo + str[0] + "=" + str[1] + ";";
			}
		}
		tempTtInfo = tempTtInfo + name + "=" + escape(ctgrId) + ";";
	}
	cookieWrite("TTINFOPER", tempTtInfo, COOKIE_DATA_TT);
}
//●20130212 AMS 追加 end●
//●20130418 AMS 追加 start●
function setTtInfoCookieSmlcat(shCtgrId) {
	if(shCtgrId != ""){
		var ttInfoPer = cookieRead("TTINFOPER");
		var name = "lastseensmlcat"; //キー値
		var tempTtInfo = "";
		if (document.cookie) {
			var ttInfoList = ttInfoPer.split(";");
			for (var i = 0; i < ttInfoList.length; i++) {
				var str = ttInfoList[i].split("=");
				if(str[0] != "" && str[0] != name){
					tempTtInfo = tempTtInfo + str[0] + "=" + str[1] + ";";
				}
			}
			tempTtInfo = tempTtInfo + name + "=" + escape(shCtgrId) + ";";
		}
		cookieWrite("TTINFOPER", tempTtInfo, COOKIE_DATA_TT);
	}
}
//●20130418 AMS 追加 end●
function cookieWrite(kword, kdata, kday) {
  sday = new Date();
  sday.setTime(sday.getTime() + (kday * 1000 * 60 * 60 * 24));
  s2day = sday.toGMTString();
  document.cookie = kword + "=" + escape(kdata) + ";expires=" + s2day + ";domain=.bellemaison.jp" + "; path=/";
}
function cookieRead(kword) {
  if(typeof(kword) == "undefined") {
    return "";
  }
  kword = kword + "=";
  kdata = "";
  scookie = document.cookie + ";";
  start = scookie.indexOf(kword);
  if (start != -1){
    end = scookie.indexOf(";", start);
    kdata = unescape(scookie.substring(start + kword.length, end));
  }
  return kdata;
}
function cookieDel(kword) {
  document.cookie = kword + "=;expires=Thu,01-Jan-70 00:00:01 GMT;domain=.bellemaison.jp" + "; path=/";
}
function MM_swapImage() { //v3.0
  var i,j=0,
      x,a=MM_swapImage.arguments; 
      document.MM_sr=new Array; 
  for(i=0;i<(a.length-2);i+=3)
    if ((x=MM_findObj(a[i]))!=null){
      document.MM_sr[j++]=x; 
      if(!x.oSrc) x.oSrc=x.src;
      x.src=a[i+2];
     }
}
function MM_findObj(n, d) { //v4.01
  var p,i,x;  
  if(!d) d=document; 
  if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document;
     n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n];
  for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n);
  return x;
}

function startMailerPc2Mb(encodeutf8) {
    location.href = encodeutf8;
}

function startMailer(encodeShiftjis,encodeutf8) {
  if (navigator.userAgent.indexOf("Macintosh") != -1) {
    //macの場合
    location.href = encodeutf8;
  }else{
    //mac以外の場合
   location.href = encodeShiftjis;
  }
}
// ----------------------------------------------------
// add 20091105
//  商品系で履歴を表示する際の初期処理
//     返却値：HTML
// ----------------------------------------------------
//●20110930 AMS 変更 start●
//function epfb00_initCookie(imgPass,belnShopKbn) {
//○20110930 AMS 変更 replace○
function epfb00_initCookie(imgPass,belnShopKbn,domain) {
//●20110930 AMS 変更 end●
	var readRrkFlg  = cookieRead("RRKSGNFLG");
	//●20111006 AMS 追加 start●
	if ( domain == undefined ) {
		domain = "";
	}
	//●20111006 AMS 追加 end●
	//●20111012 AMS 追加 start●
	if ( belnShopKbn == MC_SHOP_KBN ) {
		domain = "";
	}
	//●20111012 AMS 追加 end●
	if ( readRrkFlg == DELETE_IDX ) {
		var frameDiv = document.getElementById(DIV_FRAME_NAME);
		frameDiv.innerHTML = "";
		epfb00_imgCheck(DELETE_IDX,imgPass);
	} else {
		// 商品履歴を表示
		var frameDiv = document.getElementById(DIV_FRAME_NAME);
		if (frameDiv.innerHTML != "") {
			if (belnShopKbn == MC_SHOP_KBN) {
				var tempProInfo = cookieRead("RRKPROD_MC");
			} else {
				var tempProInfo = cookieRead("RRKPROD");
			}
			proInfoList = tempProInfo.split(KEY_1);
			if ( proInfoList[0] != "" && proInfoList[0] != null ) {
				belnShopKbnList = proInfoList[0].split(KEY_2);
				katBtgoList = proInfoList[1].split(KEY_2);
				nameList = proInfoList[2].split(KEY_2);
				kakkList = proInfoList[3].split(KEY_2);
				iPathList = proInfoList[4].split(KEY_2);
				giftImgList = proInfoList[5].split(KEY_2);
				//●20110215 AMS 追加 start●
//●20130325 AMS 変更 end●
				mnzkdHknTnList = proInfoList[6].split(KEY_2);
				soKqList = proInfoList[7].split(KEY_2);
//
//				if ( proInfoList[6] != "" && proInfoList[6] != null ) {
//
//					mnzkdHknTnList = proInfoList[6].split(KEY_2);
//
//				}
//
//				if ( proInfoList[7] != "" && proInfoList[7] != null ) {
//
//					soKqList = proInfoList[7].split(KEY_2);
//
//				}
//●20130325 AMS 変更 end●
				//●20110215 AMS 追加 end●
				//●20110215 AMS 変更 start●
				//epfb00_setData(belnShopKbnList,katBtgoList,nameList,kakkList,iPathList,giftImgList,imgPass);
				//○20110215 AMS 変更 replace○
				//●20110215 AMS 変更 end●
				//●20110930 AMS 変更 start●
				//epfb00_setData(belnShopKbnList,katBtgoList,nameList,kakkList,iPathList,giftImgList,imgPass,mnzkdHknTnList,soKqList);
				//○20110930 AMS 変更 replace○
				epfb00_setData(belnShopKbnList,katBtgoList,nameList,kakkList,iPathList,giftImgList,imgPass,mnzkdHknTnList,soKqList,domain);
				//●20110930 AMS 変更 end●
			} else {
				frameDiv.innerHTML = "";
			}
		}
		epfb00_imgCheck("",imgPass);
	}
}
// ----------------------------------------------------
// add 20091105
//  商品系で履歴を『残す』ボタン押下処理
//     返却値：HTML
// ----------------------------------------------------
function epfb00_DisplayCookie(imgPass,belnShopKbn) {
	cookieWrite("RRKSGNFLG", "", COOKIE_DATA_RRK);
	epfb00_imgCheck("",imgPass);
}
// ----------------------------------------------------
// add 20091105
//  商品系で履歴の『残さない』ボタン押下処理
//     返却値：HTML
// ----------------------------------------------------
function epfb00_deleteCookie(imgPass){
	var frameDiv = document.getElementById(DIV_FRAME_NAME);
	frameDiv.innerHTML = "";
	cookieDel("RRKPROD");
	cookieDel("RRKPROD_MC");
	cookieWrite("RRKSGNFLG", DELETE_IDX, COOKIE_DATA_RRK);
	epfb00_imgCheck(DELETE_IDX,imgPass);
}
// ----------------------------------------------------
// add 20091105
//  商品系で履歴の画像チェック処理
// ----------------------------------------------------
function epfb00_imgCheck(readRrkFlg,imgPass) {
	if ( readRrkFlg == null || readRrkFlg == "" ) {
		document.images["onCheck"].src = imgPass + "epfb0005_check04a.gif";
		document.images["offCheck"].src = imgPass + "epfb0005_check05b.gif";
	} else {
		document.images["onCheck"].src = imgPass + "epfb0005_check04b.gif";
		document.images["offCheck"].src = imgPass + "epfb0005_check05a.gif";
	}
}
// ----------------------------------------------------
// add 20091105
//  商品系で履歴のCookieを設定処理
// ----------------------------------------------------
//●20110215 AMS 変更 start●
//function epfb00_setData(belnShopKbnList,katBtgoList,nameList,kakkList,iPathList,giftList,imgPass) {
//○20110215 AMS 変更 replace○
//●20110215 AMS 変更 end●
//●20110930 AMS 変更 start●
//function epfb00_setData(belnShopKbnList,katBtgoList,nameList,kakkList,iPathList,giftList,imgPass,mnzkdHknTnList,soKqList) {
//○20110930 AMS 変更 replace○
//function epfb00_setData(belnShopKbnList,katBtgoList,nameList,kakkList,iPathList,giftList,imgPass,mnzkdHknTnList,soKqList,domain) {
//●20110930 AMS 変更 end●
//●20130325 AMS 変更 start●
function epfb00_setData(belnShopKbnList,katBtgoList,nameList,kakkList,iPathList,giftList,imgPass,mnzkdHknTnList,soKqList,domain,zkmflg) {
//●20130325 AMS 変更 end●
	proCnt = katBtgoList.length;
	
	//●20110118 AMS 変更 start●
	if(proCnt > 5){
		proCnt = 5;
	}
	//●20110118 AMS 変更 end●
	
	for (i=0;i < proCnt; i++ ) {
		//●20110302 AMS 変更 start●
		//var elemName = document.getElementById("name"+ i);
		//elemName.innerHTML = nameList[i] + "<br/>" + kakkList[i];
		//○20110302 AMS 変更 replace○
		var kakkDiv = document.getElementById("kakk"+ i);
		var elemName = document.getElementById("name"+ i);;
		if(kakkDiv == null){
			elemName.innerHTML = nameList[i] + "<br/>" + kakkList[i];
		} else {
			elemName.innerHTML = nameList[i];
//●20130325 AMS 変更 start●
			if (zkmflg == "1") {
				kakkList[i] = kakkList[i].replace("<BR>","");
				kakkDiv.innerHTML = kakkList[i].replace(/\(本体.*\)/,"(税込)");
			} else {
				kakkDiv.innerHTML = kakkList[i];
			}
//●20130325 AMS 変更 end●
		}
		//●20110302 AMS 変更 end●
		var image = document.images["img" + i];
		//●20110930 AMS 変更 start●
		//image.src = iPathList[i];
		//○20110302 AMS 変更 replace○
		image.src = domain + iPathList[i];
		//●20110302 AMS 変更 end●
		image.height = EPFB00_IMG_HEIGHT;
		image.width = EPFB00_IMG_WIDTH;
		if (belnShopKbnList[i] == MC_SHOP_KBN) {
			PRO_URL = PRO_URL_MC;
		}
		elemName.href = proUrlDomain + PRO_URL + "?BELN_SHOP_KBN=" + belnShopKbnList[i] + "&KAT_BTGO=" + katBtgoList[i] + "&SHNCRTTKKRO_KBN=E1";
		var link = document.getElementById("link" + i);
		link.href = proUrlDomain + PRO_URL + "?BELN_SHOP_KBN=" + belnShopKbnList[i] + "&KAT_BTGO=" + katBtgoList[i] + "&SHNCRTTKKRO_KBN=E1";
		//●20110215 AMS 変更 start●
		var giftDivName = document.getElementById("giftMarkDiv" + i);
		if( giftDivName != null && giftDivName != "" ){
			giftDivName.removeChild(giftDivName.firstChild);
		}
		var mnzkdHknTnDiv = document.getElementById("mnzkdHknTnMarkDiv" + i);
		if (mnzkdHknTnDiv != null) {
//●20130325 AMS 削除 end●
//
//			if (belnShopKbnList[i] == MC_SHOP_KBN && soKqList[i] < 5) {
//
//				mnzkdHknTnDiv.removeChild(mnzkdHknTnDiv.firstChild);
//
//			} else {
//			
//●20130325 AMS 削除 end●
				if(mnzkdHknTnList[i] != null && mnzkdHknTnList[i] != "" && soKqList[i] != null && soKqList[i] != "" && soKqList[i] > 0) {
					var strBuff = "<img src=\"" + imgPass + "star/star_icon_" + mnzkdHknTnList[i]*10 + ".gif" + "\" />";
					strBuff    += "&nbsp;(" + soKqList[i] + ")";
					strBuff    += "<br />";
					mnzkdHknTnDiv.innerHTML = strBuff;
				}
//●20130325 AMS 削除 start●
//			}
//●20130325 AMS 削除 end●
		}
		//●20110215 AMS 追加 end●
	}
	for (i=0;i < 5; i++) {
		if (proCnt <= i || (katBtgoList[0] == null || katBtgoList[0] == "")) {
			var div = document.getElementById(DIV_NAME + i);
			div.innerHTML = "";
		}
	}
}
// ----------------------------------------------------
// add 20100225
// ＵＲＬに付属されているパラメータを取得
//   戻り値：配列(KEY=パラメータ名,VALUE=指定された値)
// ----------------------------------------------------
function epfb00_getParseParam(){
    var hash = new Array();
    var param;
    if(param = location.search){
        var parray = param.replace("?","").split("&");
        for(var i=0;i<parray.length;i++){
            var n = parray[i].split("=");
            hash[n[0]] = n[1];
        }
    }else{
        return false;
    }
    return hash;
}
// ----------------------------------------------------
// add 20100225
// 商品カート追加経路区分をパラメータより取得
// (パラメータに存在しない場合は、置換しない)
// ----------------------------------------------------
function epfb00_shnCrtKkroKbnSetParam(){
	var productDetailArray;
	if(productDetailArray = epfb00_getParseParam()){
		var strShncrttkkroKbn = productDetailArray['SHNCRTTKKRO_KBN'];
		if (typeof(strShncrttkkroKbn) != "undefined" && strShncrttkkroKbn != "") {
			document.form01.SHNCRTTKKRO_KBN.value = strShncrttkkroKbn;
		}
	}
	// debug
//	alert(document.form01.SHNCRTTKKRO_KBN.value);
}
// ----------------------------------------------------
// add 20100225
// [概要]
// EPFB0050(お気に入りリスト)に遷移
// URLに表示している商品カート追加経路区分の値を追加
// ----------------------------------------------------
function epfb00_ShnCrtKkroKbnOlstSni(url){
	// 商品カート追加経路区分を追加
	var strShncrttkkroKbn=document.form01.SHNCRTTKKRO_KBN.value;
	url=url+"&SHNCRTTKKRO_KBN="
	if (strShncrttkkroKbn!='' && strShncrttkkroKbn!=null) {
		url=url+strShncrttkkroKbn;
	} else {
		url=url+"0H"
	}
	location.href=url
}
// ----------------------------------------------------
// add 20100225
// 商品詳細の『在庫・価格をチェックする』ボタンの実装
// ----------------------------------------------------
function epfb00_shnshsOpenSubWinFocuShnCrtKkroKbn(url,windowId, ptn){
	// 商品カート追加経路区分を追加
	url=url+"&SHNCRTTKKRO_KBN=";
	var strShncrttkkroKbn=document.form01.SHNCRTTKKRO_KBN.value;
	if (strShncrttkkroKbn!='' && strShncrttkkroKbn!=null) {
		url=url+strShncrttkkroKbn;
	} else {
		url=url+"0H"
	}
	var width = 0;
	var height = 0;
	var winname = "";
	var opt = "scrollbars=yes, resizable=yes";
	
	winname = "subwindow";
	if(windowId != 0){
		winname = winname + windowId;
	}
	switch(ptn){
		case 1:
			width = "700";
			height = "650";
			break;
		case 2:
			width = "740";
			height = "480";
			break;
		case 3:
			width = "550";
			height = "620";
			break;
		case 4:
			width = "600";
			height = "540";
			break;
		case 5:
			width = "360";
			height = "330";
			break;
		/* AMSオーダー情報入力フロー改善 add start 2016/02/25 */
		case 6:
			width = "940";
			height = "600";
			break;
		/* AMSオーダー情報入力フロー改善 add end   2016/02/25 */
	}
	window.open(url, winname, "width=" + width + ", height=" + height + ", " + opt).focus();
}
// ----------------------------------------------------
// add 20130212
// initCookie2New（MC用）
// ----------------------------------------------------
//●20130325 AMS 変更 start●
function initCookie2New(belnShopKbn,katBtgo,name,kakk,iPath,gift,imgPass,mnzkdHknTn,soKq,baseurl,nonSSLServletURL,ctgrId) {
//function initCookie2New(belnShopKbn,katBtgo,name,kakk,iPath,gift,imgPass,baseurl,nonSSLServletURL,ctgrId) {
//●20130325 AMS 変更 end●
	if(baseurl != undefined) {
		proUrlDomain = baseurl;
	}
	var readRrkFlg = cookieRead("RRKSGNFLG");
	if ( readRrkFlg == DELETE_IDX ) {
		var frameDiv = document.getElementById(DIV_FRAME_NAME);
		frameDiv.innerHTML = "";
		imgCheck(DELETE_IDX,imgPass);
	} else {
		cookieWrite("RRKSGNFLG", "2", COOKIE_DATA_RRK);
//●20130325 AMS 変更 start●
		insertCookie(belnShopKbn,katBtgo,name,kakk,iPath,gift,imgPass,mnzkdHknTn,soKq,"");
		//insertCookie(belnShopKbn,katBtgo,name,kakk,iPath,gift,imgPass,"","","");
//●20130325 AMS 変更 end●
	}
	// カートボタン表示処理
	setCartBtnHtml(imgPass,belnShopKbn,nonSSLServletURL);
	setTtInfoCookie(ctgrId);
}
// ----------------------------------------------------
// add 20100415
// カートボタン表示処理（MC用）
//     返却値：HTML
// ----------------------------------------------------
function setCartBtnHtml(imgPass,belnShopKbn,nonSSLServletURL) {
    var cartBtnDiv = document.getElementById("cartBtnDiv");
    var grpMbrkbn = cookieRead("GRPMBRKBN");
    grpCartImgPass =imgPass + 'epfm_btn_cart_3.jpg' ;
    kjnCartImgPass =imgPass + 'epfm_btn_cart_4.jpg' ;
    cartImgPass =imgPass + 'epfm_btn_cart_2.jpg' ;
    kjnCartLink = "<a href= \"javascript:void(0)\" onclick=\"javascript:cartAddByShnDtl(\'" + belnShopKbn +"\',\'" + nonSSLServletURL + "/EPFM00/EPFM0002/dPrdDtlMcCrtAdd?\');return false;\">" ;
    if ( grpMbrkbn == null || grpMbrkbn != "" ) {
        cartBtnDiv.innerHTML="<table width='390' border='0' cellspacing='0' cellpadding='0'><tr><td width='120'>&nbsp;</td><td height='50' align='left' valign='middle'><input type='image' name='ACT_dPrdDtlGrpCrtAdd' src='" + grpCartImgPass + "' alt='グループのカートに入れる' border='0'></td></tr></table><table width='390' border='0' cellspacing='0' cellpadding='0'><tr><td width='120'>&nbsp;</td><td height='50' align='left' valign='top'>" + kjnCartLink + "<img src='" + kjnCartImgPass + "' alt='個人のカートに入れる' border='0'></a></td></tr></table>";
    } else {
        cartBtnDiv.innerHTML="<table width='390' border='0' cellspacing='0' cellpadding='0'><tr><td width='120'>&nbsp;</td><td height='50' align='left' valign='top'>" + kjnCartLink + "<img src='" + cartImgPass + "' alt='カートに入れる' border='0'></a></td></tr></table>";
    }
}
// ----------------------------------------------------
// add 20110224
//  中カテで履歴を表示する際の初期処理
//     返却値：HTML
// ----------------------------------------------------
//●20110930 AMS 変更 start●
//function epfb00_initCookie_ch_cate(imgPass,belnShopKbn) {
//●20130325 AMS 変更 start●
//○20110930 AMS 変更 replace○
//function epfb00_initCookie_ch_cate(imgPass,belnShopKbn,domain) {
function epfb00_initCookie_ch_cate(imgPass,belnShopKbn,domain,zkmflg) {
//●20110930 AMS 変更 end●
//●20130325 AMS 変更 end●
	var readRrkFlg  = cookieRead("RRKSGNFLG");
	
	if ( readRrkFlg == DELETE_IDX ) {
		var frameDiv = document.getElementById(DIV_FRAME_NAME);
		frameDiv.innerHTML = "";
		epfb00_imgCheck_ch_cate(DELETE_IDX,imgPass);
	} else {
		// 商品履歴を表示
		var frameDiv = document.getElementById(DIV_FRAME_NAME);
		if (frameDiv.innerHTML != "") {
			if (belnShopKbn == MC_SHOP_KBN) {
				var tempProInfo = cookieRead("RRKPROD_MC");
			} else {
				var tempProInfo = cookieRead("RRKPROD");
			}
			proInfoList = tempProInfo.split(KEY_1);
			if ( proInfoList[0] != "" && proInfoList[0] != null ) {
				belnShopKbnList = proInfoList[0].split(KEY_2);
				katBtgoList = proInfoList[1].split(KEY_2);
				nameList = proInfoList[2].split(KEY_2);
				kakkList = proInfoList[3].split(KEY_2);
				iPathList = proInfoList[4].split(KEY_2);
				giftImgList = proInfoList[5].split(KEY_2);
//●20130325 AMS 変更 start●
				mnzkdHknTnList = proInfoList[6].split(KEY_2);
				soKqList = proInfoList[7].split(KEY_2);
//				//●20110215 AMS 追加 start●
//
//				if ( proInfoList[6] != "" && proInfoList[6] != null ) {
//
//					mnzkdHknTnList = proInfoList[6].split(KEY_2);
//
//				}
//
//				if ( proInfoList[7] != "" && proInfoList[7] != null ) {
//
//					soKqList = proInfoList[7].split(KEY_2);
//
//				}
//
//				//●20110215 AMS 追加 end●
//●20130325 AMS 変更 start●
				//●20110215 AMS 変更 start●
				//epfb00_setData(belnShopKbnList,katBtgoList,nameList,kakkList,iPathList,giftImgList,imgPass);
				//○20110215 AMS 変更 replace○
				//●20110215 AMS 変更 end●
				//●20110930 AMS 変更 start●
				//epfb00_setData(belnShopKbnList,katBtgoList,nameList,kakkList,iPathList,giftImgList,imgPass,mnzkdHknTnList,soKqList);
				//○20110930 AMS 変更 replace○
//●20130325 AMS 変更 start●
//				epfb00_setData(belnShopKbnList,katBtgoList,nameList,kakkList,iPathList,giftImgList,imgPass,mnzkdHknTnList,soKqList,domain);
				epfb00_setData(belnShopKbnList,katBtgoList,nameList,kakkList,iPathList,giftImgList,imgPass,mnzkdHknTnList,soKqList,domain,zkmflg);
//●20130325 AMS 変更 end●
				//●20110930 AMS 変更 end●
			} else {
				frameDiv.innerHTML = "";
			}
		}
		epfb00_imgCheck_ch_cate("",imgPass);
	}
}
// ----------------------------------------------------
// add 20110224
//  中カテで履歴を『残す』ボタン押下処理
//     返却値：HTML
// ----------------------------------------------------
function epfb00_DisplayCookie_ch_cate(imgPass,belnShopKbn) {
	cookieWrite("RRKSGNFLG", "", COOKIE_DATA_RRK);
	epfb00_imgCheck_ch_cate("",imgPass);
}
// ----------------------------------------------------
// add 20110224
//  中カテで履歴の『残さない』ボタン押下処理
//     返却値：HTML
// ----------------------------------------------------
function epfb00_deleteCookie_ch_cate(imgPass){
	var frameDiv = document.getElementById(DIV_FRAME_NAME);
	frameDiv.innerHTML = "";
	cookieDel("RRKPROD");
	cookieDel("RRKPROD_MC");
	cookieWrite("RRKSGNFLG", DELETE_IDX, COOKIE_DATA_RRK);
	epfb00_imgCheck_ch_cate(DELETE_IDX,imgPass);
}
// ----------------------------------------------------
// add 20110224
//  中カテで履歴の画像チェック処理
// ----------------------------------------------------
function epfb00_imgCheck_ch_cate(readRrkFlg,imgPass) {
	if ( readRrkFlg == null || readRrkFlg == "" ) {
		document.images["onCheck"].src = "http://www.bellemaison.jp/index_images/epfb0005_check04a.gif";
		document.images["offCheck"].src = "http://www.bellemaison.jp/index_images/epfb0005_check05b.gif";
	} else {
		document.images["onCheck"].src = "http://www.bellemaison.jp/index_images/epfb0005_check04b.gif";
		document.images["offCheck"].src = "http://www.bellemaison.jp/index_images/epfb0005_check05a.gif";
	}
}
// ----------------------------------------------------
// add 20110224
//  中カテ商品履歴からのおすすめ
// ----------------------------------------------------
function recommender_initCookie(prk) {
 var recommenderKatArray;
 var recommenderKatText;
 var tempProInfo = prk;
 var proInfoList = new Array();
 
 proInfoList = tempProInfo.split(RRKKEY_1);
 if (proInfoList[0] != "" && proInfoList[0] != null) {
  recommenderKatArray = proInfoList[1].split(RRKKEY_2).slice(0,3);
  for (var i in recommenderKatArray) {
   recommenderKatArray[i] = recommenderKatArray[i].slice(0,6);
  }
  recommenderKatText = "[" + recommenderKatArray.join(",") + "]";
 } else {
  recommenderKatText = "[]";
 }
 return recommenderKatArray;
}
//●20110302 AMS 追加 start●
// ----------------------------------------------------
// add 20110302
// [概要]
// 親画面を(お気に入りリスト or 商品詳細)に遷移
// URLに表示している商品カート追加経路区分の値を追加
// ----------------------------------------------------
function epfb00_ShnCrtKkroKbnOlstSniToParent(url){
	// 商品カート追加経路区分を追加
	var strShncrttkkroKbn=document.form01.SHNCRTTKKRO_KBN.value;
	url=url+"&SHNCRTTKKRO_KBN="
	if (strShncrttkkroKbn!='' && strShncrttkkroKbn!=null) {
		url=url+strShncrttkkroKbn;
	} else {
		url=url+"0H"
	}
	parent.location.href=url
}
//●20110302 AMS 追加 end●
//●20110311 AMS 追加 start●
function sbrkmSearch(name, sniSkUrl){
	var searchParam = "";
	var actId = "";
	if(name == "taisho"){
		var taishoCnt = document.taishoform.getElementsByTagName("li");
		// 対象商品
		if(taishoCnt.length == 1){
			if(document.taishoform.IPT_TSH_SHN_RQT0.checked){
				searchParam = document.taishoform.IPT_TSH_SHN_RQT0.value;
			}
		} else {
			for(var i=0; i<document.taishoform.IPT_TSH_SHN_RQT.length; i++){
				if(document.taishoform.IPT_TSH_SHN_RQT[i].checked){
					if(searchParam == ""){
						searchParam = document.taishoform.IPT_TSH_SHN_RQT[i].value;
					} else {
						searchParam = searchParam + ',' + document.taishoform.IPT_TSH_SHN_RQT[i].value;
					}
				}
			}
		}
		actId = sniSkUrl + "&IPT_TSH_SHN_RQT=" + searchParam;
	} else if(name == "ctlg"){
		var ctlgCnt = document.ksictlgform.getElementsByTagName("li");
		// 掲載カタログ
		if(ctlgCnt.length == 1){
			if(document.ksictlgform.IPT_KSI_CTLG_RQT0.checked){
				searchParam = document.ksictlgform.IPT_KSI_CTLG_RQT0.value;
			}
		} else {
			for(var i=0; i<document.ksictlgform.IPT_KSI_CTLG_RQT.length; i++){
				if(document.ksictlgform.IPT_KSI_CTLG_RQT[i].checked){
					if(searchParam == ""){
						searchParam = document.ksictlgform.IPT_KSI_CTLG_RQT[i].value;
					} else {
						searchParam = searchParam + ',' + document.ksictlgform.IPT_KSI_CTLG_RQT[i].value;
					}
				}
			}
		}
		actId = sniSkUrl + "&IPT_KSI_CTLG_RQT=" + searchParam;
	} else if(name == "color"){
		var colorCnt = document.colorform.getElementsByTagName("li");
		// 色
		if(colorCnt.length == 1){
			if(document.colorform.IPT_COLOR_RQT0.checked){
				searchParam = document.colorform.IPT_COLOR_RQT0.value;
			}
		} else {
			for(var i=0; i<document.colorform.IPT_COLOR_RQT.length; i++){
				if(document.colorform.IPT_COLOR_RQT[i].checked){
					if(searchParam == ""){
						searchParam = document.colorform.IPT_COLOR_RQT[i].value;
					} else {
						searchParam = searchParam + ',' + document.colorform.IPT_COLOR_RQT[i].value;
					}
				}
			}
		}
		actId = sniSkUrl + "&IPT_COLOR_RQT=" + searchParam;
	//●20120316 AMS 追加 start●
	//ブランド英語名称"bland"は間違いので、下記の"brand"を利用
	//●20120316 AMS 追加 end●
	} else if(name == "bland"){
		var blandCnt = document.blandform.getElementsByTagName("li");
		// ブランド
		if(blandCnt.length == 1){
			if(document.blandform.IPT_BRAND_ALL_CTL_RQT0.checked){
				searchParam = document.blandform.IPT_BRAND_ALL_CTL_RQT0.value;
			}
		} else {
			for(var i=0; i<document.blandform.IPT_BRAND_ALL_CTL_RQT.length; i++){
				if(document.blandform.IPT_BRAND_ALL_CTL_RQT[i].checked){
					if(searchParam == ""){
						searchParam = document.blandform.IPT_BRAND_ALL_CTL_RQT[i].value;
					} else {
						searchParam = searchParam + ',' + document.blandform.IPT_BRAND_ALL_CTL_RQT[i].value;
					}
				}
			}
		}
		actId = sniSkUrl + "&IPT_BRAND_ALL_CTL_RQT=" + searchParam;
	//●20120316 AMS 追加 start●
	} else if(name == "brand"){
		var brandCnt = document.brandform.getElementsByTagName("li");
		// ブランド
		if(brandCnt.length == 1){
			if(document.brandform.IPT_BRAND_ALL_CTL_RQT0.checked){
				searchParam = document.brandform.IPT_BRAND_ALL_CTL_RQT0.value;
			}
		} else {
			for(var i=0; i<document.brandform.IPT_BRAND_ALL_CTL_RQT.length; i++){
				if(document.brandform.IPT_BRAND_ALL_CTL_RQT[i].checked){
					if(searchParam == ""){
						searchParam = document.brandform.IPT_BRAND_ALL_CTL_RQT[i].value;
					} else {
						searchParam = searchParam + ',' + document.brandform.IPT_BRAND_ALL_CTL_RQT[i].value;
					}
				}
			}
		}
		actId = sniSkUrl + "&IPT_BRAND_ALL_CTL_RQT=" + searchParam;
	//●20120316 AMS 追加 end●
	} else if(name == "size"){
		var sizeCnt = document.sizeform.getElementsByTagName("li");
		// サイズ
		if(sizeCnt.length == 1){
			if(document.sizeform.IPT_SIZE1_RQT0.checked){
				searchParam = document.sizeform.IPT_SIZE1_RQT0.value;
			}
		} else {
			for(var i=0; i<document.sizeform.IPT_SIZE1_RQT.length; i++){
				if(document.sizeform.IPT_SIZE1_RQT[i].checked){
					if(searchParam == ""){
						searchParam = document.sizeform.IPT_SIZE1_RQT[i].value;
					} else {
						searchParam = searchParam + ',' + document.sizeform.IPT_SIZE1_RQT[i].value;
					}
				}
			}
		}
		actId = sniSkUrl + "&IPT_SIZE1_RQT=" + searchParam;
		//●20120323 AMS 追加 start●
	} else if(name == "kakk_hni"){
		actId = sniSkUrl;
		var kakk_hnist1 = document.kakkform.KAKK_HNIST1.value;
		var kakk_hnist2 = document.kakkform.KAKK_HNIST2.value;
		
		// 価格下限設定欄がブランクではない場合パラメータに付与
		if (kakk_hnist1 != '') {
			actId = actId + "&KAKK_HNIST1=" + kakk_hnist1;
		}
		// 価格上限設定欄がブランクではない場合パラメータに付与
		if (kakk_hnist2 != '') {
			actId = actId + "&KAKK_HNIST2=" + kakk_hnist2;
		}
	}
		//●20120323 AMS 追加 end●
	location.href = actId;
}
//●20110311 AMS 追加 end●

//●20130611 AMS 追加 start●
function sbrkmSearchUk(name, sniSkUrl){
	var searchParam = "";
	var actId = "";

	if(name == "taisho"){
		var taishoCnt = document.taishoform.getElementsByTagName("li");
		// 対象商品
		if(taishoCnt.length == 1){
			if(document.taishoform.IPT_TSH_SHN_RQT0.checked){
				searchParam = document.taishoform.IPT_TSH_SHN_RQT0.value;
			}
		} else {
			for(var i=0; i<document.taishoform.IPT_TSH_SHN_RQT.length; i++){
				if(document.taishoform.IPT_TSH_SHN_RQT[i].checked){
					if(searchParam == ""){
						searchParam = document.taishoform.IPT_TSH_SHN_RQT[i].value;
					} else {
						searchParam = searchParam + '|' + document.taishoform.IPT_TSH_SHN_RQT[i].value;
					}
				}
			}
		}
		actId = sniSkUrl + "&T=" + searchParam;
	} else if(name == "ctlg"){
		var ctlgCnt = document.ksictlgform.getElementsByTagName("li");
		// 掲載カタログ
		if(ctlgCnt.length == 1){
			if(document.ksictlgform.IPT_KSI_CTLG_RQT0.checked){
				searchParam = document.ksictlgform.IPT_KSI_CTLG_RQT0.value;
			}
		} else {
			for(var i=0; i<document.ksictlgform.IPT_KSI_CTLG_RQT.length; i++){
				if(document.ksictlgform.IPT_KSI_CTLG_RQT[i].checked){
					if(searchParam == ""){
						searchParam = document.ksictlgform.IPT_KSI_CTLG_RQT[i].value;
					} else {
						searchParam = searchParam + '|' + document.ksictlgform.IPT_KSI_CTLG_RQT[i].value;
					}
				}
			}
		}
		actId = sniSkUrl + "&CT=" + searchParam;
	} else if(name == "color"){
		var colorCnt = document.colorform.getElementsByTagName("li");
		// 色
		if(colorCnt.length == 1){
			if(document.colorform.IPT_COLOR_RQT0.checked){
				searchParam = document.colorform.IPT_COLOR_RQT0.value;
			}
		} else {
			for(var i=0; i<document.colorform.IPT_COLOR_RQT.length; i++){
				if(document.colorform.IPT_COLOR_RQT[i].checked){
					if(searchParam == ""){
						searchParam = document.colorform.IPT_COLOR_RQT[i].value;
					} else {
						searchParam = searchParam + '|' + document.colorform.IPT_COLOR_RQT[i].value;
					}
				}
			}
		}
		actId = sniSkUrl + "&CL=" + searchParam;
	} else if(name == "brand"){
		var brandCnt = document.blandform.getElementsByTagName("li");
		// ブランド
		if(brandCnt.length == 1){
			if(document.blandform.IPT_BRAND_ALL_CTL_RQT0.checked){
				searchParam = document.blandform.IPT_BRAND_ALL_CTL_RQT0.value;
			}
		} else {
			for(var i=0; i<document.blandform.IPT_BRAND_ALL_CTL_RQT.length; i++){
				if(document.blandform.IPT_BRAND_ALL_CTL_RQT[i].checked){
					if(searchParam == ""){
						searchParam = document.blandform.IPT_BRAND_ALL_CTL_RQT[i].value;
					} else {
						searchParam = searchParam + '|' + document.blandform.IPT_BRAND_ALL_CTL_RQT[i].value;
					}
				}
			}
		}
		actId = sniSkUrl + "&B=" + searchParam;
	} else if(name == "size"){
		var sizeCnt = document.sizeform.getElementsByTagName("li");
		// サイズ
		if(sizeCnt.length == 1){
			if(document.sizeform.IPT_SIZE1_RQT0.checked){
				searchParam = document.sizeform.IPT_SIZE1_RQT0.value;
			}
		} else {
			for(var i=0; i<document.sizeform.IPT_SIZE1_RQT.length; i++){
				if(document.sizeform.IPT_SIZE1_RQT[i].checked){
					if(searchParam == ""){
						searchParam = document.sizeform.IPT_SIZE1_RQT[i].value;
					} else {
						searchParam = searchParam + '|' + document.sizeform.IPT_SIZE1_RQT[i].value;
					}
				}
			}
		}
		actId = sniSkUrl + "&SZ=" + searchParam;
	} else if(name == "kakk_hni"){
		actId = sniSkUrl;
		var kakk_hnist1 = document.kakkform.KAKK_HNIST1.value;
		var kakk_hnist2 = document.kakkform.KAKK_HNIST2.value;
		
		// 価格下限設定欄がブランクではない場合パラメータに付与
		if (kakk_hnist1 != '') {
			actId = actId + "&PL=" + EscapeSJIS(kakk_hnist1);
		}
		// 価格上限設定欄がブランクではない場合パラメータに付与
		if (kakk_hnist2 != '') {
			actId = actId + "&PH=" + EscapeSJIS(kakk_hnist2);
		}
	}
	location.href = actId;
}

// ----------------------------------------------------
// add 20130212
// initCookieSpMCNew（スマートフォンMC用）
// ----------------------------------------------------
function initCookieSpMCNew(belnShopKbn,katBtgo,name,kakk,iPath,gift,imgPass,baseurl,nonSSLServletURL,ctgrId) {
	if(baseurl != undefined) {
		proUrlDomain = baseurl;
	}
	var readRrkFlg = cookieRead("RRKSGNFLG");
	if ( readRrkFlg == DELETE_IDX ) {
		var frameDiv = document.getElementById(DIV_FRAME_NAME);
		frameDiv.innerHTML = "";
		btnCheck(DELETE_IDX);
	} else {
		cookieWrite("RRKSGNFLG", "2", COOKIE_DATA_RRK);
		insertCookieSp(belnShopKbn,katBtgo,name,kakk,iPath,gift,imgPass,"");
	}
	setTtInfoCookie(ctgrId);
}
// ----------------------------------------------------
// add 20130212
// initCookieSpBMNew（スマートフォンBM用）
// ----------------------------------------------------
function initCookieSpBMNew(belnShopKbn,katBtgo,name,kakk,iPath,gift,imgPass,baseurl,nonSSLServletURL,domain,ctgrId) {
	if(baseurl != undefined) {
		proUrlDomain = baseurl;
	}
	var readRrkFlg = cookieRead("RRKSGNFLG");
	if ( readRrkFlg == DELETE_IDX ) {
		var frameDiv = document.getElementById(DIV_FRAME_NAME);
		frameDiv.innerHTML = "";
		btnCheck(DELETE_IDX);
	} else {
		cookieWrite("RRKSGNFLG", "2", COOKIE_DATA_RRK);
		insertCookieSp(belnShopKbn,katBtgo,name,kakk,iPath,gift,imgPass,domain);
	}
	setTtInfoCookie(ctgrId);
}
//●20110930 AMS 変更 start●
//function insertCookieSp(belnShopKbn,katBtgo,name,kakk,iPath,gift,imgPass) {
//○20110930 AMS 変更 replace○
function insertCookieSp(belnShopKbn,katBtgo,name,kakk,iPath,gift,imgPass,domain) {
//●20110930 AMS 変更 end●
	var readRrkFlg = cookieRead("RRKSGNFLG");
	if ( readRrkFlg == DELETE_IDX || readRrkFlg == "2") {
		var frameDiv = document.getElementById(DIV_FRAME_NAME);
		if (frameDiv.innerHTML != "") {
			if (belnShopKbn == MC_SHOP_KBN) {
				var tempProInfo = cookieRead("RRKPROD_MC");
			} else {
				var tempProInfo = cookieRead("RRKPROD");
			}
			proInfoList = tempProInfo.split(KEY_1);
			if ( proInfoList[0] != "" && proInfoList[0] != null ) {
				belnShopKbnList = proInfoList[0].split(KEY_2);
				katBtgoList = proInfoList[1].split(KEY_2);
				iPathList = proInfoList[4].split(KEY_2);
				//●20110930 AMS 変更 start●
				//setDataSp(belnShopKbnList,katBtgoList,iPathList);
				//○20110930 AMS 変更 replace○
				setDataSp(belnShopKbnList,katBtgoList,iPathList,domain);
				//●20110930 AMS 変更 end●
			} else {
				frameDiv.innerHTML = "";
			}
		}
		setCookie("",belnShopKbn,katBtgo,name,kakk,iPath,gift,'','');
		btnCheck('');
	}
}
function btnCheck(readRrkFlg) {
	if ( readRrkFlg == null || readRrkFlg == "" ) {
		document.getElementById('btn-keep').className = 'on';
		document.getElementById('btn-nonkeep').className = '';
	} else {
		document.getElementById('btn-keep').className = '';
		document.getElementById('btn-nonkeep').className = 'on';
	}
}
//●20110930 AMS 変更 start●
//function setDataSp(belnShopKbnList,katBtgoList,iPathList) {
//○20110930 AMS 変更 replace○
function setDataSp(belnShopKbnList,katBtgoList,iPathList,domain) {
//●20110930 AMS 変更 end●
	proCnt = katBtgoList.length;
	//●20120112 AMS 変更 start●
	if (proCnt >= 5) {
	//●20120112 AMS 変更 end●
		proCnt = 4;
	}
	for (i=0;i < proCnt; i++ ) {
		var image = document.images["img" + i];
		//●20110930 AMS 変更 start●
		//image.src = iPathList[i];
		//○20110930 AMS 変更 replace○
		image.src = domain + iPathList[i];
		//●20110930 AMS 変更 end●
		image.height = IMG_HEIGHT;
		image.width = IMG_WIDTH;
		if (belnShopKbnList[i] == MC_SHOP_KBN) {
			PRO_URL = PRO_URL_MC;
		}
		var link = document.getElementById("link" + i);
		link.href = proUrlDomain + PRO_URL + "?BELN_SHOP_KBN=" + belnShopKbnList[i] + "&KAT_BTGO=" + katBtgoList[i] + "&SHNCRTTKKRO_KBN=E1";
	}
	for (i=0;i < 4; i++) {
		if (proCnt <= i || (katBtgoList[0] == null || katBtgoList[0] == "")) {
			var div = document.getElementById(DIV_NAME + i);
			while ( div.hasChildNodes() ) {
				div.removeChild(div.firstChild);
			}	
		}
	}
}
function deleteCookieSp(){
	var frameDiv = document.getElementById(DIV_FRAME_NAME);
	frameDiv.innerHTML = "";
	cookieDel("RRKPROD");
	cookieDel("RRKPROD_MC");
	cookieWrite("RRKSGNFLG", DELETE_IDX, COOKIE_DATA_RRK);
	btnCheck(DELETE_IDX);
}
function epfb00_initCookie_ch_cateSp(imgPass,belnShopKbn,domain) {
//●20110930 AMS 変更 end●
	var readRrkFlg  = cookieRead("RRKSGNFLG");
	
	if ( readRrkFlg == DELETE_IDX ) {
		var frameDiv = document.getElementById(DIV_FRAME_NAME);
		frameDiv.innerHTML = "";
		btnCheck(DELETE_IDX);
	} else {
		// 商品履歴を表示
		var frameDiv = document.getElementById(DIV_FRAME_NAME);
		if (frameDiv.innerHTML != "") {
			if (belnShopKbn == MC_SHOP_KBN) {
				var tempProInfo = cookieRead("RRKPROD_MC");
			} else {
				var tempProInfo = cookieRead("RRKPROD");
			}
			proInfoList = tempProInfo.split(KEY_1);
			if ( proInfoList[0] != "" && proInfoList[0] != null ) {
				belnShopKbnList = proInfoList[0].split(KEY_2);
				katBtgoList = proInfoList[1].split(KEY_2);
				iPathList = proInfoList[4].split(KEY_2);
				giftImgList = proInfoList[5].split(KEY_2);
//●20130325 AMS 変更 start●
				mnzkdHknTnList = proInfoList[6].split(KEY_2);
				soKqList = proInfoList[7].split(KEY_2);
//				//●20110215 AMS 追加 start●
//
//				if ( proInfoList[6] != "" && proInfoList[6] != null ) {
//
//					mnzkdHknTnList = proInfoList[6].split(KEY_2);
//
//				}
//
//				if ( proInfoList[7] != "" && proInfoList[7] != null ) {
//
//					soKqList = proInfoList[7].split(KEY_2);
//
//				}
//●20130325 AMS 変更 end●
				epfb00_setDataSp(belnShopKbnList,katBtgoList,iPathList,giftImgList,imgPass,mnzkdHknTnList,soKqList,domain);
			} else {
				frameDiv.innerHTML = "";
			}
		}
		btnCheck('');
	}
}
function epfb00_setDataSp(belnShopKbnList,katBtgoList,iPathList,giftList,imgPass,mnzkdHknTnList,soKqList,domain) {
	proCnt = katBtgoList.length;
	//●20120112 AMS 変更 start●
	if (proCnt >= 5) {
	//●20120112 AMS 変更 end●
		proCnt = 4;
	}
	for (i=0;i < proCnt; i++ ) {
		var image = document.images["img" + i];
		image.src = domain + iPathList[i];
		image.height = EPFB00_IMG_HEIGHT;
		image.width = EPFB00_IMG_WIDTH;
		if (belnShopKbnList[i] == MC_SHOP_KBN) {
			PRO_URL = PRO_URL_MC;
		}
		var link = document.getElementById("link" + i);
		link.href = proUrlDomain + PRO_URL + "?BELN_SHOP_KBN=" + belnShopKbnList[i] + "&KAT_BTGO=" + katBtgoList[i] + "&SHNCRTTKKRO_KBN=E1";
		var giftDivName = document.getElementById("giftMarkDiv" + i);
		if( giftDivName != null && giftDivName != "" ){
			giftDivName.removeChild(giftDivName.firstChild);
		}
		var mnzkdHknTnDiv = document.getElementById("mnzkdHknTnMarkDiv" + i);
		if (mnzkdHknTnDiv != null) {
//●20130325 AMS 削除 start●
//			if (belnShopKbnList[i] == MC_SHOP_KBN && soKqList[i] < 5) {
//			
//				mnzkdHknTnDiv.removeChild(mnzkdHknTnDiv.firstChild);
//			
//			} else {
//●20130325 AMS 削除 end●
				if(mnzkdHknTnList[i] != null && mnzkdHknTnList[i] != "" && soKqList[i] != null && soKqList[i] != "" && soKqList[i] > 0) {
					var strBuff = "<img src=\"" + imgPass + "star/star_icon_" + mnzkdHknTnList[i]*10 + ".gif" + "\" />";
					strBuff    += "&nbsp;(" + soKqList[i] + ")";
					strBuff    += "<br />";
					mnzkdHknTnDiv.innerHTML = strBuff;
				}
//●20130325 AMS 削除 start●
//			}
//●20130325 AMS 削除 end●
		}
	}
	for (i=0;i < 4; i++) {
		if (proCnt <= i || (katBtgoList[0] == null || katBtgoList[0] == "")) {
			var div = document.getElementById(DIV_NAME + i);
			div.innerHTML = "";
		}
	}
}
function epfb00_DisplayCookie_ch_cateSp(imgPass,belnShopKbn) {
	cookieWrite("RRKSGNFLG", "", COOKIE_DATA_RRK);
	btnCheck('');
}
//TOP画面ランキング情報セット
function getRankingInfo() {
	// cookieから現在選択中のカテゴリIDを取得
	var cokname = "RANK_CATEGORY_ID";
	var coktxt = document.cookie+";"; 
	var stano = coktxt.indexOf(cokname); 
	var endno = "";
	var cokValue1 = "";
	var cokValue2 = "";
	var category_id = "";
	var belnShopKbn = "";
	var priceTag = "";
	var url = "";
	
	if (stano != -1) { 
		endno = coktxt.indexOf(";",stano); 
		cokValue1 = unescape(coktxt.substring(stano+cokname.length+1,endno)); 
		cokValue2 = cokValue1.split("_");
		belnShopKbn = cokValue2[0];
		category_id = cokValue2[1];
	}
	// カテゴリＩＤが空の場合はランキング情報の取得を行わない
	if (category_id != "") {
	
		// urlの設定
		var	home_url = "http://www.bellemaison.jp";
		// リクエストURLを生成 
		var url = home_url + '/100/rank/';
		//●20120124 AMS 追加 start●  
		url += category_id + '/';
		//●20120124 AMS 追加 end●
		url += category_id + '.xml';
			
		// ランキング情報のHTMLを生成
		var rankingInfo = "";
		var count = 0;
	
		$.ajax({
			type: "GET",
			url: url,
			cache: false,
			dataType: "xml",
			success: function(data) {
			// ランキング情報のHTMLを生成
				var reviewInfo = "";
				var item = $('CATEGORIES', data);
				$('CATEGORY', item).each(function() {
					count = count + 1;
					var RANKING_TTL = $('RANKING_TTL', this).text();		// ランキングタイトル
					
					rankingInfo += "<div id=\"ranking-list" + count + "\" >";
					rankingInfo += "<h3><span>";
					rankingInfo += RANKING_TTL;
					rankingInfo += "</span></h3>";
					rankingInfo += "<ul class=\"section-wrap\">";
					// ランキング明細情報の取得
					$('ITEM', this).each(function() {
						var RANK = $('RANK', this).text();					// ランキング
						var KAT_MEI_PC = $('KAT_MEI_PC', this).text();		// 商品名
						var BRAND_NAME = $('BRAND_NAME', this).text();		// ブランド名
						var RANK_IMAGE = $('RANK_IMAGE', this).text();		// ランキング画像
						var SHN_DTL_URL = $('SHN_DTL_URL', this).text();	// 詳細パス
						var SHN_IMG_URL = $('SHN_IMG_URL', this).text();	// 商品イメージ画像
						var PRICE = $('PRICE', this).text();				// 金額
						var TOKKA_KBN = $('TOKKA_KBN', this).text();		// 特価区分
						var OUTL_SHN_KBN = $('OUTL_SHN_KBN', this).text();	// アウトレット区分
						var RATING = $('RATING', this).text();				// 評価
						var COMMENT_SO_KQ = $('COMMENT_SO_KQ', this).text();	// コメント数
						RATING = RATING * 10;
						var hyouka1 = Math.floor(RATING / 10);
						var hyouka2 = RATING - (hyouka1 * 10);
						rankingInfo += "<li data-rank=\"" + RANK + "\">";
						rankingInfo += "<a href=\"" + SHN_DTL_URL + "\">";
						rankingInfo += "<div class=\"thumbnail\">";
						rankingInfo += "<div class=\"figure\">";
						rankingInfo += "<p>";
						rankingInfo += "<img src=\"" + SHN_IMG_URL + "\" />";
						rankingInfo += "</p>";
						rankingInfo += "</div>";
						rankingInfo += KAT_MEI_PC;
						if(BRAND_NAME != ""){
							rankingInfo += "(" + BRAND_NAME + ")";
						}
						if ( TOKKA_KBN == 1 || OUTL_SHN_KBN == 1 ) {
							rankingInfo += "<p class=\"price-sp\">" + PRICE + "</p>";
						} else { 
							rankingInfo += "<p class=\"price\">" + PRICE + "</p>";
						}
						if (RATING != "") {
							rankingInfo += "<div class=\"valuation-rate\">";
							rankingInfo += "<span>評価</span>";
							rankingInfo += "<p>";
							for (var i = 0 ; i < hyouka1 ; i++) {
								rankingInfo += "<span class=\"full\"></span>";
							}
							if (hyouka2 != 0) {
								rankingInfo += "<span class=\"rate" + hyouka2 + "\"></span>";
							}
							rankingInfo += "</p>";
							rankingInfo += "<span class=\"count\"> (" + COMMENT_SO_KQ + ")</span>";
							rankingInfo += "</div>";
						}
						rankingInfo += "</div>";
						rankingInfo += "</a>";
						rankingInfo += "</li>";
						
					});
					rankingInfo += "</ul>";
					rankingInfo += "<div class=\"button-wrap\">";
					rankingInfo += "<a href=\"#\" class=\"button btn-prev\">前へ</a>";
					rankingInfo += "<a href=\"#\" class=\"button btn-next\">次へ</a>";
					rankingInfo += "</div>";
					rankingInfo += "</div>";
					return false;
				});
				// ランキング情報を設定
				if (rankingInfo != "") {
					$("#ranking-list").html(rankingInfo);
						
					for( var i = 0 ; i < count ; i++ ) {
						var num = i + 1;
						smp_getRecommend("ranking-list" + num);
					}
				}
			},
			// クッキーに設定されているカテゴリＩＤのランキングＸＭＬ情報がない場合
			error: function() {
				$("#ranking-list").css({ "display": "none" });
			}
		});
	} else {
		//ランキング情報がない場合の不要なタグ削除
		$("#ranking-list").css({ "display": "none" });
	}
}
//●20121002 AMS 追加 start●
//TOP画面ランキング情報セット
function getRankingInfo2() {
	// cookieから現在選択中のカテゴリIDを取得
	var cokname = "RANK_CATEGORY_ID";
	var coktxt = document.cookie+";"; 
	var stano = coktxt.indexOf(cokname); 
	var endno = "";
	var cokValue1 = "";
	var cokValue2 = "";
	var category_id = "";
	var belnShopKbn = "";
	var priceTag = "";
	var url = "";
	
	if (stano != -1) { 
		endno = coktxt.indexOf(";",stano); 
		cokValue1 = unescape(coktxt.substring(stano+cokname.length+1,endno)); 
		cokValue2 = cokValue1.split("_");
		belnShopKbn = cokValue2[0];
		category_id = cokValue2[1];
	}	
	// カテゴリＩＤが空の場合はランキング情報の取得を行わない
	if (category_id != "") {
	
		// urlの設定
		var	home_url = "http://www.bellemaison.jp";
		// リクエストURLを生成 
		var url = home_url + '/100/rank/';
		//●20120124 AMS 追加 start●  
		url += category_id + '/';
		//●20120124 AMS 追加 end●
		url += category_id + '.xml';
			
		// ランキング情報のHTMLを生成
		var rankingInfo = "";
		var count = 0;
		
		$.ajax({
			type: "GET",
			url: url,
			cache: false,
			dataType: "xml",			
			success: function(data) {
			// ランキング情報のHTMLを生成
				var reviewInfo = "";
				var item = $('CATEGORIES', data);
				$('CATEGORY', item).each(function() {
					count = count + 1;
					var RANKING_TTL = $('RANKING_TTL', this).text();		// ランキングタイトル
					
					rankingInfo += "<div id=\"ranking" + count + "\" >";
					rankingInfo += "<h2>";
					rankingInfo += RANKING_TTL;
					rankingInfo += "</h2>";
					rankingInfo += "<ol>";
					// ランキング明細情報の取得
					$('ITEM', this).each(function() {
						var RANK = $('RANK', this).text();					// ランキング
						var KAT_MEI_PC = $('KAT_MEI_PC', this).text();		// 商品名
						var BRAND_NAME = $('BRAND_NAME', this).text();		// ブランド名
						var RANK_IMAGE = $('RANK_IMAGE', this).text();		// ランキング画像
						var SHN_DTL_URL = $('SHN_DTL_URL', this).text();	// 詳細パス
						var SHN_IMG_URL = $('SHN_IMG_URL', this).text();	// 商品イメージ画像
						var PRICE = $('PRICE', this).text();				// 金額
						var TOKKA_KBN = $('TOKKA_KBN', this).text();		// 特価区分
						var OUTL_SHN_KBN = $('OUTL_SHN_KBN', this).text();	// アウトレット区分
						var RATING = $('RATING', this).text();				// 評価
						var COMMENT_SO_KQ = $('COMMENT_SO_KQ', this).text();	// コメント数
						RATING = RATING * 10;						
						rankingInfo += "<li>";
						rankingInfo += "<p class=\"rank\"><span class=\"rank_crown rank" + RANK + "\"></span></p>";
						rankingInfo += "<div class=\"item-img\">";
						rankingInfo += "<a href=\"" + SHN_DTL_URL + "\">";
						rankingInfo += "<img src=\"" + SHN_IMG_URL + "\" width=\"95\" height=\"95\" alt=\"\" />";
						rankingInfo += "</a></div>";
						rankingInfo += "<p class=\"item-name\">";
						rankingInfo += "<a href=\"" + SHN_DTL_URL + "\">";
						rankingInfo += KAT_MEI_PC;
						if(BRAND_NAME != ""){
							rankingInfo += "(" + BRAND_NAME + ")";
						}
						rankingInfo += "</a></p>";
						// FIXME ●●●特価金額を表示時のclass指定変更が必要か？●●●　※現行での特価指定classは"price-sp"
						if ( TOKKA_KBN == 1 || OUTL_SHN_KBN == 1 ) {
							rankingInfo += "<p class=\"item-spprice\">" + PRICE + "</p>";
						} else { 
							rankingInfo += "<p class=\"item-price\">" + PRICE + "</p>";
						}
						// 評価
						if (RATING != "") {
							rankingInfo += "<p class=\"star\">";
							if(RATING < 10){
								RATING = "0" + RATING;
							}
							rankingInfo += "<img src=\"index_images/star/star_icon_" + RATING + ".gif\" width=\"54\" height=\"11\" alt=\"\" />";
							rankingInfo += "<span class=\"popcount\"> (" + COMMENT_SO_KQ + ")</span>";
							rankingInfo += "</p>";
						}
						rankingInfo += "</li>";
						
					});
					rankingInfo += "</ol>";
					rankingInfo += "<div class=\"button-wrap\">";
					rankingInfo += "<a href=\"#\" class=\"button btn-prev\"><img src=\"index_images/btn_prev.png\" width=\"97\" height=\"26\" alt=\"\" /></a>";
					rankingInfo += "<a href=\"#\" class=\"button btn-next\"><img src=\"index_images/btn_next.png\" width=\"97\" height=\"26\" alt=\"\" /></a>";
					rankingInfo += "</div>";
					rankingInfo += "</div>";
					return false;
				});
				// ランキング情報を設定
				if (rankingInfo != "") {
					$("#ranking").html(rankingInfo);
						
					for( var i = 0 ; i < count ; i++ ) {
						var num = i + 1;
						smp_getRecommend2("ranking" + num);
					}
				}
			},
			// クッキーに設定されているカテゴリＩＤのランキングＸＭＬ情報がない場合
			error: function() {
				$("#ranking").css({ "display": "none" });
			}
		});
	} else {
		//ランキング情報がない場合の不要なタグ削除
		$("#ranking").css({ "display": "none" });
	}
}
//●20121002 AMS 追加 end●
//●20111206 AMS 追加 start●
movieSwitch = 0;
currentIdx = 0;
ImgConsecutiveNum = 0;
//メイン画像 前へボタン処理制御
function changeImgPrev(){
	ImgConsecutiveNum = ImgConsecutiveNum - 1;
	if (ImgConsecutiveNum < 0) {
		ImgConsecutiveNum = kensu - 1;
	}
	idx = currentIdx - 1;
	change(ImgConsecutiveNum);
	document.getElementById("dtl-movie").style.display = "none";
	$("#image-viewer-epfb0006_zoom .page").css("display", "block");
	$("#image-viewer-epfb0006_zoom .text").css("display", "block");
	return false;
}
//メイン画像 次へボタン処理制御
function changeImgNext(){
	ImgConsecutiveNum = ImgConsecutiveNum + 1;
	if (ImgConsecutiveNum == kensu) {
		ImgConsecutiveNum = 0;
	}
	idx = currentIdx + 1;
	change(ImgConsecutiveNum);
	document.getElementById("dtl-movie").style.display = "none";
	$("#image-viewer-epfb0006_zoom .page").css("display", "block");
	$("#image-viewer-epfb0006_zoom .text").css("display", "block");
   return false;
}
//マウスカーソルが補足画像上にあるときの画像制御
function zoom_img_change(num) {
	if (movieSwitch == 1) {
		return false;
	}
	jQuery().snaprec("show","epfb0006_zoom",num);
	document.getElementById("dtl-movie").style.display = "none";
	$(".text2").css("display", "none");
	$("#image-viewer-epfb0006_zoom .page").css("display", "block");
	$("#image-viewer-epfb0006_zoom .text").css("display", "block");
}
//画像クリックしたときの画像制御
function zoom_img_change2(num) {
	if (movieSwitch != 1) {
		return false;
	}
	movieSwitch = 0;
	jQuery().snaprec("show","epfb0006_zoom",num);
	document.getElementById("dtl-movie").style.display = "none";
	$(".text2").css("display", "none");
	$("#image-viewer-epfb0006_zoom .page").css("display", "block");
	$("#image-viewer-epfb0006_zoom .text").css("display", "block");
}
//マウスカーソルが補足画像から離れたときの制御
function changeSumImgDefault() {
   	if (movieSwitch == 1) {
  		document.getElementById('divmovie').className='epfb0100item current';
		for (var i = 0; i<kensu; i++) {
			document.getElementById('div' + i).className='epfb0100item';
		}
		document.getElementById("dtl-movie").style.display = "block";
		$(".text2").css("display", "block");
		$("#image-viewer-epfb0006_zoom .page").css("display", "none");
		$("#image-viewer-epfb0006_zoom .text").css("display", "none");
		return false;
	}
	change(ImgConsecutiveNum);
	zoom_img_change(ImgConsecutiveNum + 1);
}
//マウスカーソルが補足画像上にあるときの制御
function change(num){
	if (movieSwitch == 1) {
		document.getElementById('divmovie').className='epfb0100item';
		return false;
	}
	
	// 件数が1件(メイン画像しかない)のときは処理しない
	if (kensu > 1) {
		idx=new Number(num);
		divCurrentIdx=new Number(replaceIdx(currentIdx));
		//出力エリア
		if(kensu <= idx) {
			idx = 0;
		}
		if(idx < 0) {
			idx = kensu-1;
		}
		var idx_temp = idx-3;
		if(idx_temp <0) {
			idx_temp = 0;
		}
		document.getElementById('div' + divCurrentIdx).className='epfb0100item';
		document.getElementById('div' + idx).className='epfb0100item current';
		currentIdx = idx;
	}
}
//画像クリックしたときの画像制御
function change2(num){
	if (movieSwitch != 1) {
		ImgConsecutiveNum = num;
		return false;
	}
	
	ImgConsecutiveNum = num;
	
	// 件数が1件(メイン画像しかない)のときは処理しない
	if (kensu > 1) {
		idx=new Number(num);
		divCurrentIdx=new Number(replaceIdx(currentIdx));
		//出力エリア
		if(kensu <= idx) {
			idx = 0;
		}
		if(idx < 0) {
			idx = kensu-1;
		}
		var idx_temp = idx-3;
		if(idx_temp <0) {
			idx_temp = 0;
		}
		document.getElementById('div' + divCurrentIdx).className='epfb0100item';
		document.getElementById('div' + idx).className='epfb0100item current';
		currentIdx = idx;
	}
}
function replaceIdx(num){
	var idx=0;
	for (i=0;i < kensu; i++ ) {
		if ( document.getElementById('div' + i).className == 'epfb0100item current' ) {
			idx = i;
			break;
		}
	}
	return idx;
}
//●20111206 AMS 追加 end●
//●20111215 AMS 追加 start●
//非同期カート追加処理
var AddCartFlg = false;
function AddCartHdk(uri,func){
	// ２度押し防止
	if (AddCartFlg) {
		return;
	}
	
	// 商品合計点数取得
	var shnTotalNum = hdrCartqtyStr();
	// カート内の現在の商品合計点数が99点以上の場合
	if (shnTotalNum != "" && 99 <= shnTotalNum) {
		alert("一度にご注文いただける商品の合計数は99点までです。");
		return false;
	}
	AddCartFlg = true;
	
	//カート追加処理
	$.ajax({
		type: "GET",
		url: uri,
		cache: false,
		dataType: "xml",
		success: function(xml) {
			var status = $(xml).find("STATUS").text();
			if (status == '0') {
				AddCartFlg = false;
				alert("カートに入りました。");
				success = true;
			/* AMSオーダー情報入力フロー改善 add start 2016/02/25 */
				if (typeof func == "function") {
					func(xml, '0'); 
				}
			} else if (status == '3') {
				AddCartFlg = false;
				var chmnno = getUrlValue(uri, 'CHMN_NO');
				if( typeof func == "function"){
					func(chmnno, '1');
				}
			/* AMSオーダー情報入力フロー改善 add end   2016/02/25 */
			} else {
				AddCartFlg = false;
				alert("商品をカートに入れられませんでした。\n商品が売り切れた可能性がございますので\n在庫状況をご確認ください。");
			}
		},
		complete: function (XHRoj, textStatus) {  
			// ヘッダーのカート情報更新	
        	refreshHeaderCartInfo(1);
        }, 
		error: function() {
			AddCartFlg = false;
			alert("処理中に問題が発生しました。\nお手数をお掛けしますが、もう一度やり直してください。");
		}
	});
}
//●20111215 AMS 追加 end●
//●20120105 AMS 追加 start●
//非同期お気に入り追加処理
var AddFavFlg = false;
function AddFavorLstHdk(uri){
		
	// ２度押し防止
	if (AddFavFlg) {
		return;
	}
	AddFavFlg = true;
	
	//通信中
	//タグを抽出
	var objTtl = document.getElementById("fav-ttl");
	var objCp = document.getElementById("fav-cp");
	var logonBtn = document.getElementById("logon-btn");
	var objBtn = document.getElementById("fav-win-btn");
	var closeBtn = document.getElementById("fav-close-btn");
	var ttl = "お気に入りリストに追加しています。";
	var cp = "しばらくお待ち下さい。";
	
	objTtl.innerHTML = ttl;
	objCp.innerHTML = cp;
	objBtn.style.display = "none";
	closeBtn.style.display = "none";
	$("#fav-ttl").css("text-align", "center");
	$("#fav-cp").css("text-align", "center"); 
	
	//表示文言の設定
	ttl = "お気に入りリストに追加しました"
	cp = "お客様ご自身のお気に入りリストに保存するには、<br />「ログオン」が必要です。"
	var success = false;
	//エラーメッセージに含まれるbrタグ
	var br = "<BR>";
	
	//お気に入りに追加処理
		
		$.ajax({
		type: "GET",
		url: uri,
		cache: false,
		dataType: "jsonp",
		scriptCharset : 'UTF-8',
		jsonpCallback: "setFavListAddStat",
		success: function(data) {
				var err_msg;
				var result = data.RESULT[0];
				var status = String(result.STATUS);				// ステータス
				if(status == '1'){
					var err_msg = String(result.ERROR_MESSAGE[0]);		// エラーメッセージ
				}
				
				if(status == '0'){ //正常
					//ログイン状態を調べる
					var appInfoses = cookieRead("APPINFOSES");
					var knoStr = cookieRead("KNO");
					var knoArr = knoStr.split("###");
					var kno = knoArr[0];
					var knoFlg = knoArr[2];
					var name = "logon"; //キー値
					var logonFlg = false;
					
					if (document.cookie) {
						if (kno != "" && knoFlg != "0") {
							logonFlg = true;
						} else {
							var appInfoList = appInfoses.split(";");
							for (var i = 0; i < appInfoList.length; i++) {
								var str = appInfoList[i].split("=");
								if (str[0] == name) {
									var value = unescape(str[1]);
									if (value == '1'){
										logonFlg = true;
									}
								}
							}
						}
					}
					if (logonFlg) { //ログイン済
						objTtl.innerHTML = "<br /><br />" + ttl;
						objCp.innerHTML = "";
						logonBtn.style.display = "none";
						objBtn.style.display = "block";
						closeBtn.style.display = "block";
					} else { //未ログオン
						objTtl.innerHTML = ttl;
						objCp.innerHTML = cp;
						logonBtn.style.display = "inline";
						objBtn.style.display = "block";
						closeBtn.style.display = "block";
					}
				} else if(status == '1'){ //失敗
					if(err_msg.indexOf("br") != -1){
						objTtl.innerHTML = "<br />" + err_msg;
					} else {
						objTtl.innerHTML = "<br /><br />" + err_msg;
					}
					objCp.innerHTML = "";
					logonBtn.style.display = "none";
					objBtn.style.display = "block";
					closeBtn.style.display = "block";
				} else if(status == '2') { // システムエラー
					objTtl.innerHTML = "下記理由等により、次の操作に必要な情報が取得できませんでした。<br />恐れ入りますが、TOP画面より改めて操作を行ってください。";
					objCp.innerHTML = "・誤ったURLをご指定<br />・ご指定のURLの有効期限切れ<br />・途中の画面から操作(Bookmark時にURLの一部が欠落)";
					$("#fav-ttl").css("text-align", "left");
					$("#fav-cp").css("text-align", "left"); 
					objBtn.style.display = "none";
					closeBtn.style.display = "block";
				}
				success = true;
				
			},
			error: function() {
				objTtl.innerHTML = "エラーが発生しました。<br /><br />詳細についてはお手数ではございますが、<br />サイトの管理者までご質問ください。";
				objCp.innerHTML = "";
				logonBtn.style.display = "none";
				objBtn.style.display = "block";
				closeBtn.style.display = "block";
			}
		});
		
	AddFavFlg = false;
}
//●20120105 AMS 追加 end●
//●20121009 AMS 追加 start●
//非同期お気に入り追加処理(メッセージボックス)
var AddFavMsgBoxFlg = false;
function AddFavorLstMsgBoxHdk(uri){

	// ２度押し防止
	if (AddFavMsgBoxFlg) {
		return;
	}
	AddFavMsgBoxFlg = true;
	//通信中
	//お気に入りに追加処理
	var success = false;
		
		$.ajax({
		type: "GET",
		url: uri,
		cache: false,
		dataType: "jsonp",
		scriptCharset : 'UTF-8',
		jsonpCallback: "setFavListAddStat",
		success: function(data) {
				var err_msg;
				var result = data.RESULT[0];
				var status = String(result.STATUS);				// ステータス
				if(status == '1'){
					var err_msg = String(result.ERROR_MESSAGE[0]);		// エラーメッセージ
				}
				
				if(status == '0'){ //正常
					//ログイン状態を調べる
					var appInfoses = cookieRead("APPINFOSES");
					var knoStr = cookieRead("KNO");
					var knoArr = knoStr.split("###");
					var kno = knoArr[0];
					var knoFlg = knoArr[2];
					var name = "logon"; //キー値
					var logonFlg = false;
					
					if (document.cookie) {
						if (kno != "" && knoFlg != "0") {
							logonFlg = true;
						} else {
							var appInfoList = appInfoses.split(";");
							for (var i = 0; i < appInfoList.length; i++) {
								var str = appInfoList[i].split("=");
								if (str[0] == name) {
									var value = unescape(str[1]);
									if (value == '1'){
										logonFlg = true;
									}
								}
							}
						}
					}
					if (logonFlg) { //ログイン済
						alert("お気に入りリストに追加しました。");
					} else { //未ログオン
						alert("お気に入りリストに追加しました。\nお客様ご自身のお気に入りリストに保存するには「ログオン」が必要です。");
					}
				} else if(status == '1'){ //失敗
					err_msg = err_msg.replace(/<br>/g, "\n");
					alert(err_msg);
				} else if(status == '2') { // システムエラー
					alert("下記理由等により、次の操作に必要な情報が取得できませんでした。\n恐れ入りますが、TOP画面より改めて操作を行ってください。\n" +
						  "・誤ったURLをご指定\n・ご指定のURLの有効期限切れ\n・途中の画面から操作(Bookmark時にURLの一部が欠落");
				}
				AddFavMsgBoxFlg = false;
				success = true;
			}
		});
}
//●20121009 AMS 追加 end●
// ----------------------------------------------------
// add 20111213
// 在庫情報を非同期取得
//   @param
//      baseurl:ベースURL
//      brs_btn_url:ボタン配置場所
//      ss_url:サービスサーブレットURL
//      belnShopKbn:ベルネショップ区分
//      katBtgo:型媒年季
//      ssls_url:SSLサーブレットURL
//      nssls_url:NON_SSLサーブレットURL
// ----------------------------------------------------
var ZaikoInfoHdkFlg = false;
function getZaikoInfoHdk(baseurl,brs_btn_url,ss_url,belnShopKbn,katBtgo,ssls_url,nssls_url) {
	// ２度押し防止
	if (ZaikoInfoHdkFlg) {
		return;
	}
	ZaikoInfoHdkFlg = true;
	// AMSオーダー情報入力フロー改善 delete start 2016/02/25
	// var crtAddObj = window.document.getElementById('cart-add');
	// if (crtAddObj != null && crtAddObj != undefined) {
	// 	var strCrtAddObj = "";
	// 	strCrtAddObj  = "<a href=\"javascript:void(0)\"";
	// 	strCrtAddObj += " onclick=\"cartAddByShnDtl('" + belnShopKbn + "','" + nssls_url + "/EPFB00/EPFB0005/dProdDtlCartAdd?');return false;\">";
	// 	strCrtAddObj += "<img src=\"" + baseurl + brs_btn_url + "btn_cart.jpg\" alt=\"カートに入れる\" width=\"222\" height=\"38\">";
	// 	strCrtAddObj += "</a>";
	// 	crtAddObj.innerHTML = strCrtAddObj;
	// }
	// AMSオーダー情報入力フロー改善 delete end 2016/02/25
	// プルダウン判定フラグ（0：プルダウンなし、1：プルダウンあり(選択なし)、2：プルダウンあり(選択あり)）
	var ClrPldwnHtiFlg = 0;
	var Sz1PldwnHtiFlg = 0;
	var Sz2PldwnHtiFlg = 0;
	var Sz3PldwnHtiFlg = 0;
	// 価格初期化
	var zkkakk = window.document.getElementById('zkkakk');
	if (zkkakk != undefined && zkkakk != "") {
		zkkakk.innerHTML = "";
	}
	
	// 在庫状況初期化
	var zkJky = window.document.getElementById('zkJky');
	if (zkJky != undefined && zkJky != "") {
		zkJky.innerHTML = "";
	}
	// リクエストURLを生成
	var uri = ss_url + '/EPFB00/EPFB0097/dProdStockProc?BELN_SHOP_KBN=' + belnShopKbn + '&KAT_BTGO=' + katBtgo;
	// 色
	var objColor = document.getElementsByName("IRO_SKBT_SEQ");
	if (objColor != null && objColor != undefined && objColor.length != 0) {
		ClrPldwnHtiFlg = 1;
		if (objColor[0].options[objColor[0].selectedIndex].value != 0) {
			uri += '&IRO_SKBT_SEQ=' + objColor[0].options[objColor[0].selectedIndex].value;
			ClrPldwnHtiFlg = 2;
		}
	}
	// サイズ１
	var objSize1 = document.getElementsByName("SIZE1_SKBT_SEQ");
	if (objSize1 != null && objSize1 != undefined && objSize1.length != 0) {
		Sz1PldwnHtiFlg = 1;
		if (objSize1[0].options[objSize1[0].selectedIndex].value != 0) {
			uri += '&SIZE1_SKBT_SEQ=' + objSize1[0].options[objSize1[0].selectedIndex].value;
			Sz1PldwnHtiFlg = 2;
		}
	}
	// サイズ２
	objSize2 = document.getElementsByName("SIZE2_SKBT_SEQ");
	if (objSize2 != null && objSize2 != undefined && objSize2.length != 0) {
		Sz2PldwnHtiFlg = 1;
		if (objSize2[0].options[objSize2[0].selectedIndex].value != 0) {
			uri += '&SIZE2_SKBT_SEQ=' + objSize2[0].options[objSize2[0].selectedIndex].value;
			Sz2PldwnHtiFlg = 2;
		}
	}
	// サイズ３
	objSize3 = document.getElementsByName("SIZE3_SKBT_SEQ");
	if (objSize3 != null && objSize3 != undefined && objSize3.length != 0) {
		Sz3PldwnHtiFlg = 1;
		if (objSize3[0].options[objSize3[0].selectedIndex].value != 0) {
			uri += '&SIZE3_SKBT_SEQ=' + objSize3[0].options[objSize3[0].selectedIndex].value;
			Sz3PldwnHtiFlg = 2;
		}
	}
	// プルダウンが全てない、または全プルダウンが変更された場合に在庫情報を取得
	if (ClrPldwnHtiFlg != 1 && Sz1PldwnHtiFlg != 1 && Sz2PldwnHtiFlg != 1 && Sz3PldwnHtiFlg != 1) {
		//処理中はプルダウンを選択不可にする
/* 修正 130705brs1 TAM ココから */
		if ($('form[name="form02"]').size()) {
	/* 修正 130517brs2 TAM ココから */
			if (objColor != null && objColor != undefined && objColor.length != 0) {
				document.form01.IRO_SKBT_SEQ.disabled=true;
				document.form02.IRO_SKBT_SEQ.disabled=true;
			}
			if (objSize1 != null && objSize1 != undefined && objSize1.length != 0) {
				document.form01.SIZE1_SKBT_SEQ.disabled=true;
				document.form02.SIZE1_SKBT_SEQ.disabled=true;
			}
			if (objSize2 != null && objSize2 != undefined && objSize2.length != 0) {
				document.form01.SIZE2_SKBT_SEQ.disabled=true;
				document.form02.SIZE2_SKBT_SEQ.disabled=true;
			}
			if (objSize3 != null && objSize3 != undefined && objSize3.length != 0) {
				document.form01.SIZE3_SKBT_SEQ.disabled=true;
				document.form02.SIZE3_SKBT_SEQ.disabled=true;
			}
	/* 修正 130517brs2 TAM ココまで */
		} else {
			if (objColor != null && objColor != undefined && objColor.length != 0) {
				document.form01.IRO_SKBT_SEQ.disabled=true;
			}
			if (objSize1 != null && objSize1 != undefined && objSize1.length != 0) {
				document.form01.SIZE1_SKBT_SEQ.disabled=true;
			}
			if (objSize2 != null && objSize2 != undefined && objSize2.length != 0) {
				document.form01.SIZE2_SKBT_SEQ.disabled=true;
			}
			if (objSize3 != null && objSize3 != undefined && objSize3.length != 0) {
				document.form01.SIZE3_SKBT_SEQ.disabled=true;
			}
		}
		var nrShnKbn = "";
		if (document.form01 != undefined && document.form01.NR_SHN_KBN != undefined) {
			nrShnKbn = document.form01.NR_SHN_KBN.value;
			uri = uri + "&NR_SHN_KBN=" + nrShnKbn;
		}
		/* 修正 130705brs1 TAM ココまで */
		
		uri = uri + "&TIMESTAMP=" + createTimeStamp();
		
		// 在庫情報を取得
		
		$.ajax({
		type: "GET",
		url: uri,
		cache: false,
		dataType: "jsonp",
		scriptCharset : 'UTF-8',
		jsonpCallback: "setInventoryInfo",
		success: function(data) {
				var info = data.INVENTORY_INFO[0];
				if (info) {
					var CHMN_NO = String(info.CHMN_NO);			// 注文番号
					var ZKQ = String(info.ZKQ);					// 在庫数
					var JCH_KN_KBN = String(info.JCH_KN_KBN);		// 受注可能区分
					var TEIK = String(info.TEIK);					// 定価
					var ST_KO_TEIK = String(info.ST_KO_TEIK);		// 最低子定価
					var SK_KO_TEIK = String(info.SK_KO_TEIK);		// 最高子定価
					var UR_SHZ_KBN = String(info.UR_SHZ_KBN);		// 売上消費税区分
					var SHZ_RT = String(info.SHZ_RT);				// 消費税率
					var TOKKA_KBN = String(info.TOKKA_KBN);		// 特価区分
					var OUTL_SHN_KBN = String(info.OUTL_SHN_KBN);	// アウトレット商品区分
					var ZK_JKY = String(info.ZK_JKY);				// 在庫状況
					var HS_JKY_MSG = String(info.HS_JKY_MSG);		// 配送状況メッセージ
					var SNK_ANAI_FLG = String(info.SNK_ANAI_FLG);	// 再入荷案内表示フラグ
					var CHMN_FK_MSG = String(info.CHMN_FK_MSG);    // 注文不可メッセージ
					// 注文不可メッセージの有無を判定
					if (CHMN_FK_MSG.indexOf("undefined") == -1) {
						// 注文番号が存在していない場合、注文不可メッセージを表示
					    CHMN_FK_MSG = "<strong><span class='fc-red01'>" + CHMN_FK_MSG + "</span></strong>";
					    $("#zkJky").html(CHMN_FK_MSG);
					} else {
						// 注文番号が存在している場合、在庫状況を表示
						// 在庫状況フラグ(1：在庫あり、2：入荷予定、3：売り切れ)
						var zkJkyFlg = 0;
						// 商品価格の設定
						var dispPattern = new DispPattern();
						var kakk = PriceDisplay(SHZ_RT,
										UR_SHZ_KBN,
										TOKKA_KBN,
										OUTL_SHN_KBN,
										ST_KO_TEIK,
										SK_KO_TEIK,
										dispPattern.NOBR_PRICE_NOHONTAI,
										dispPattern.SPECIAL_NOBR_PRICE_NOHONTAI,
										dispPattern.YEN_MARK_ON,
										'');
						// 税表記の編集
						var zeiHyk = "";
						if (UR_SHZ_KBN == "1" || UR_SHZ_KBN == "2") {
							// 「(税込)」表記（外税 or 内税）
							zeiHyk = "(税込)";
						} else if (UR_SHZ_KBN == "3") {
							// 「(非課税)」表記
							zeiHyk = "(非課税)";
						} else {
							// 「(免税)」表記
							zeiHyk = "(免税)";
						}
						// 価格の編集
						if (kakk != "") {
							if (TOKKA_KBN == "1" || OUTL_SHN_KBN == "1") {
								var kakkMngn = "数量1つあたり&nbsp;<span class=\"fc-red01\"><span class=\"text14l13\"><strong>" + kakk + "</strong></span>" + zeiHyk + "</span>";
							} else {
								var kakkMngn = "数量1つあたり&nbsp;<span class=\"text14l13\"><strong>" + kakk + "</strong></span>" + zeiHyk;
							}
						}
						$("#zkkakk").html(kakkMngn);
						// 在庫状況のタグ変換
						if (ZK_JKY.indexOf("wait") != -1) {
							// 入荷予定の場合
							ZK_JKY = ZK_JKY.replace(/stock-wait/g,"fc-orange01");
							zkJkyFlg = 2;
						} else if (ZK_JKY.indexOf("soldout") != -1) {
							// 売り切れの場合
							ZK_JKY = ZK_JKY.replace(/stock-soldout/g,"fc-red01");
							zkJkyFlg = 3;
						} else {
							// 在庫ありの場合
							ZK_JKY = ZK_JKY.replace(/ class="stock"/g,"");
							ZK_JKY = ZK_JKY.replace(/<span>/g,"");
							ZK_JKY = ZK_JKY.replace(/<\/span>/g,"");
							zkJkyFlg = 1;
						}
						if (nrShnKbn == "9") {
							ZK_JKY = ""
						}
						// 在庫状況の設定
						ZK_JKY = "<strong>" + ZK_JKY;
						switch (zkJkyFlg) {
							case 1:
							case 2:
								if (HS_JKY_MSG == "") {
									ZK_JKY = ZK_JKY + "</strong>";
								} else {
									ZK_JKY = ZK_JKY +  "&nbsp;" + HS_JKY_MSG + "</strong>";
								}
								break;
							case 3:
								if (SNK_ANAI_FLG == "1") {
									ZK_JKY = ZK_JKY + " <a href=\"javascript:void(0)\" onClick=\"window.open('" + ssls_url + "/EPFB00/EPFB0018/dArrvlMlAddShow?BELN_SHOP_KBN=" + belnShopKbn + "&KAT_BTGO=" + katBtgo + "&CHMN_NO=" + CHMN_NO + "','subwindow0018', 'width=760,height=600,resizable=yes,scrollbars = yes');return false;\">再入荷した場合メールでお知らせ</a></strong>";
								} else {
									ZK_JKY = ZK_JKY + "</strong>";
								}
								break;
						}
						$("#zkJky").html(ZK_JKY);
					}
				}
				
				//処理が終了したのでプルダウンを選択可能にする
/* 修正 130705brs1 TAM ココから */
				if ($('form[name="form02"]').size()) {
	/* 修正 130517brs2 TAM ココから */				
					if (objColor != null && objColor != undefined && objColor.length != 0) {
						document.form01.IRO_SKBT_SEQ.disabled=false;
						document.form02.IRO_SKBT_SEQ.disabled=false;
					}
					if (objSize1 != null && objSize1 != undefined && objSize1.length != 0) {
						document.form01.SIZE1_SKBT_SEQ.disabled=false;
						document.form02.SIZE1_SKBT_SEQ.disabled=false;
					}
					if (objSize2 != null && objSize2 != undefined && objSize2.length != 0) {
						document.form01.SIZE2_SKBT_SEQ.disabled=false;
						document.form02.SIZE2_SKBT_SEQ.disabled=false;
					}
					if (objSize3 != null && objSize3 != undefined && objSize3.length != 0) {
						document.form01.SIZE3_SKBT_SEQ.disabled=false;
						document.form02.SIZE3_SKBT_SEQ.disabled=false;
					}
	/* 修正 130517brs2 TAM ココまで */
				} else {
					if (objColor != null && objColor != undefined && objColor.length != 0) {
						document.form01.IRO_SKBT_SEQ.disabled=false;
					}
					if (objSize1 != null && objSize1 != undefined && objSize1.length != 0) {
						document.form01.SIZE1_SKBT_SEQ.disabled=false;
					}
					if (objSize2 != null && objSize2 != undefined && objSize2.length != 0) {
						document.form01.SIZE2_SKBT_SEQ.disabled=false;
					}
					if (objSize3 != null && objSize3 != undefined && objSize3.length != 0) {
						document.form01.SIZE3_SKBT_SEQ.disabled=false;
					}
				}
/* 修正 130705brs1 TAM ココまで */

			},
			error: function() {//通信エラー
				//プルダウンを選択可能にする
/* 修正 130705brs1 TAM ココから */
				if ($('form[name="form02"]').size()) {
	/* 修正 130517brs2 TAM ココから */
					if (objColor != null && objColor != undefined && objColor.length != 0) {
						document.form01.IRO_SKBT_SEQ.disabled=false;
						document.form02.IRO_SKBT_SEQ.disabled=false;
					}
					if (objSize1 != null && objSize1 != undefined && objSize1.length != 0) {
						document.form01.SIZE1_SKBT_SEQ.disabled=false;
						document.form02.SIZE1_SKBT_SEQ.disabled=false;
					}
					if (objSize2 != null && objSize2 != undefined && objSize2.length != 0) {
						document.form01.SIZE2_SKBT_SEQ.disabled=false;
						document.form02.SIZE2_SKBT_SEQ.disabled=false;
					}
					if (objSize3 != null && objSize3 != undefined && objSize3.length != 0) {
						document.form01.SIZE3_SKBT_SEQ.disabled=false;
						document.form02.SIZE3_SKBT_SEQ.disabled=false;
					}
	/* 修正 130517brs2 TAM ココまで */
				} else {
					if (objColor != null && objColor != undefined && objColor.length != 0) {
						document.form01.IRO_SKBT_SEQ.disabled=false;
					}
					if (objSize1 != null && objSize1 != undefined && objSize1.length != 0) {
						document.form01.SIZE1_SKBT_SEQ.disabled=false;
					}
					if (objSize2 != null && objSize2 != undefined && objSize2.length != 0) {
						document.form01.SIZE2_SKBT_SEQ.disabled=false;
					}
					if (objSize3 != null && objSize3 != undefined && objSize3.length != 0) {
						document.form01.SIZE3_SKBT_SEQ.disabled=false;
					}
				}
/* 修正 130705brs1 TAM ココまで */
			}
		});
	}
	ZaikoInfoHdkFlg = false;
}
//●20111213 AMS 追加 end●
//●20111222 AMS 追加 start●
var ReviewInfoFlg = false;
var nowPageNumber = 1;
var h_reviewInfo = new Array();
var so_kq = 0;
//●20130325 AMS 追加 start●
var defaultShcmSbrHyjyun = "n";
var defaultShcmSbtKbn = "";
var defaultShcmNnriKbn = "";
//●20130325 AMS 追加 end●
//●20131007 AMS 追加 start●
var defaultShcmCmtNmHyjkbn = "";
//●20131007 AMS 追加 end●
// ----------------------------------------------------
// add 20111222
// //非同期商品レビュー情報取得
//   @param
//●20130325 AMS 変更 start●
//      pageNumber:表示するページ番号
//      gmn_id:画面ＩＤ
//      beln_shop_kbn:ベルネショップ区分
//      kat_btgo:型媒年季
//      brs_img_url:イメージ配置場所
//      brs_img_btn_url:ボタンイメージ配置場所
//      ss_url:サービスサーブレットURL
//●20131007 AMS 追加 start●
//      nssls_url:NON_SSLサーブレットURL
//      cmt_seq_shtk_kbn:コメント連番取得区分
//●20131007 AMS 追加 end●
//●20130325 AMS 変更 end●
// ----------------------------------------------------
//●20130325 AMS 変更 start●
//●20131007 AMS 修正 start●
	function getReviewInfoHdk(pageNumber, gmn_id, beln_shop_kbn, kat_btgo, brs_img_url, brs_img_btn_url, ss_url, nssls_url, cmt_seq_shtk_kbn) {
//	function getReviewInfoHdk(pageNumber, gmn_id, beln_shop_kbn, kat_btgo, brs_img_url, brs_img_btn_url, ss_url) {
//●20131007 AMS 修正 end●
//	function getReviewInfoHdk(pageNumber, hyjkq, beln_shop_kbn, kat_btgo, ss_url) {
//●20130325 AMS 変更 end●
		// ２度押し防止
		if (ReviewInfoFlg) {
			return;
		}
		
		var error_flg = false;
		ReviewInfoFlg = true;
		
		var jumpFlg = true;
		if (pageNumber == 0) {
			jumpFlg = false;
			pageNumber = nowPageNumber;
		}
//●20130325 AMS 削除 start●
//
//
//		if(pageNumber in h_reviewInfo && !(error_flg)){
//
//			$("#reviewInfo").html(h_reviewInfo[pageNumber]);
//
//			pagingReview(pageNumber, so_kq, hyjkq, beln_shop_kbn, kat_btgo, ss_url);
//
//			if(jumpFlg){
//
//				window.scrollTo(0, $("#position-tab").position().top);
//
//			}
//
//			ReviewInfoFlg = false;
//
//		}else{
//●20130325 AMS 削除 end●
		// リクエストURLを生成
		var uri = ss_url + '/EPFB00/EPFB0100/dProdReviewLstProc';
		uri += '?BELN_SHOP_KBN=' + beln_shop_kbn;
		uri += '&KAT_BTGO=' + kat_btgo;
		uri += '&PAGE_NUMBER=' + pageNumber;
//●20131007 AMS 追加 start●
		uri += '&CMT_SEQ_SHTK_KBN=' + cmt_seq_shtk_kbn;
//●20131007 AMS 追加 end●
//●20130325 AMS 追加 start●
        // 性別区分
        uri += '&SHCM_SBR_SBT_KBN=';
        var shcm_sbr_sbt_kbn = "";
        var objSbtKbn = document.getElementsByName("SHCM_SBR_SBT_KBN");
        if (objSbtKbn != null && objSbtKbn != undefined && objSbtKbn.length != 0) {
        	objSbtKbn[0].disabled = true;
			uri += objSbtKbn[0].options[objSbtKbn[0].selectedIndex].value;
			shcm_sbr_sbt_kbn = objSbtKbn[0].options[objSbtKbn[0].selectedIndex].value;
        }
        // 年齢区分
        uri += '&SHCM_SBR_NNRI_KBN=';
        var shcm_sbr_nnri_kbn = "";
        var objNnriKbn = document.getElementsByName("SHCM_SBR_NNRI_KBN");
        if (objNnriKbn != null && objNnriKbn != undefined && objNnriKbn.length != 0) {
        	objNnriKbn[0].disabled = true;
			uri += objNnriKbn[0].options[objNnriKbn[0].selectedIndex].value;
			shcm_sbr_nnri_kbn = objNnriKbn[0].options[objNnriKbn[0].selectedIndex].value;
        }
//●20131007 AMS 追加 start●
		// コメントのみ表示区分
		uri += '&SHCM_SBR_CMT_NM_HYJKBN=';
		var shcm_sbr_cmt_nm_hyjkbn = "";
		var objCmtNmKbn = document.getElementsByName("SHCM_SBR_CMT_NM_HYJKBN");
		if (objCmtNmKbn != null && objCmtNmKbn != undefined && objCmtNmKbn.length != 0) {
			objCmtNmKbn[0].disabled = true;
			if (objCmtNmKbn[0].checked){
				uri += '1';
			}
			shcm_sbr_cmt_nm_hyjkbn = objCmtNmKbn[0].checked;
		}
//●20131007 AMS 追加 end●
        // 表示順
        uri += '&SHCM_SBR_HYJYUN=';
        var shcm_sbr_hyjyun = "n";
        var objHyjyun = document.getElementsByName("SHCM_SBR_HYJYUN");
        if (objHyjyun != null && objHyjyun != undefined && objHyjyun.length != 0) {
        	objHyjyun[0].disabled = true;
			uri += objHyjyun[0].options[objHyjyun[0].selectedIndex].value;
			shcm_sbr_hyjyun = objHyjyun[0].options[objHyjyun[0].selectedIndex].value;
        } else {
        	uri += defaultShcmSbrHyjyun;
        }
		
		// 画面ＩＤ
        uri += '&GMN_ID=' + gmn_id;
		var isSbrChange = false;
//●20131007 AMS 修正 start●
		//絞りこみの内容に変更がある
		if (defaultShcmSbtKbn!=shcm_sbr_sbt_kbn || defaultShcmNnriKbn!=shcm_sbr_nnri_kbn || defaultShcmCmtNmHyjkbn != shcm_sbr_cmt_nm_hyjkbn) {
			isSbrChange = true;
		}
//●20131007 AMS 修正 end●
//●20130325 AMS 追加 end●
		// 商品レビュー情報を取得
//●20130325 AMS 変更 start●
			// 商品レビュー情報を取得
		$.ajax({
			type: "GET",
			url: uri,
			cache: false,
			dataType: "jsonp",
			scriptCharset : 'UTF-8',
			jsonpCallback: "setReviewInfo",
			success: function(data) {
				// 商品レビュー情報のHTMLを生成
				var reviewInfo = "";
				var info = data.REVIEW_INFO[0];
				var hyjkq = 0;
				var lastPageNumber = 0;
				if (info) {
					so_kq = info.SO_KQ;
					hyjkq = info.HYJKQ;
					lastPageNumber = info.LAST_PAGE_NUMBER;
					if (so_kq > 0) {
						var items = info.REVIEW_ITEM;
						reviewInfo += "<div class=\"review-item-group\">";
						for(var i in items){ 
			        		
			        		var SHCM_KNY_SHN = String(items[i].SHCM_KNY_SHN);	 // 購入商品名
							var MNZKD = String(items[i].MNZKD);		     // 満足度
							var STAR_IMG_MNZKD1 = String(items[i].STAR_IMG_MNZKD1);// 満足度星画像１
							var STAR_IMG_MNZKD2 = String(items[i].STAR_IMG_MNZKD2);// 満足度星画像２
							var STAR_IMG_MNZKD3 = String(items[i].STAR_IMG_MNZKD3);// 満足度星画像３
							var STAR_IMG_MNZKD4 = String(items[i].STAR_IMG_MNZKD4);// 満足度星画像４
							var STAR_IMG_MNZKD5 = String(items[i].STAR_IMG_MNZKD5);// 満足度星画像５
							var PENNM = String(items[i].PENNM);		     // ペンネーム
							var TOKO_NTJ = String(items[i].TOKO_NTJ);	 // 投稿日時
							var KN_MEI = String(items[i].KN_MEI);		 // 件名
							var HONBUN = String(items[i].HONBUN);		 // 本文
							var HNSN = String(items[i].HNSN);		     // 返信
							var HNSN_NTJ = String(items[i].HNSN_NTJ);	 // 返信日時
							var TKS_SBT = String(items[i].TKS_SBT);		 // 投稿者性別
							var TKS_NNR = String(items[i].TKS_NNR);		 // 投稿者年齢
							var SHCM_STMN_KAIT_LIST_R = items[i].SHCM_STMN_KAIT_LIST_R;		// 商品コメント質問回答リストR
							var SHCM_STMN_KAIT_LIST_PC = items[i].SHCM_STMN_KAIT_LIST_PC;	// 商品コメント質問回答リストPとC
							var SHCM_SEQ = String(items[i].SHCM_SEQ);// 商品コメント連番
							var SHCM_SNKO_KS = String(items[i].SHCM_SNKO_KS);// 商品コメント参考回数
							
							var honbun = HONBUN.replace(/\r\n/g, "<br/>");
							honbun = honbun.replace(/(\n|\r)/g, "<br/>");
							honbun = honbun.replace(/\\|\\/g, "&yen;");
							PENNM = PENNM.replace(/\\|\\/g, "&yen;");
							KN_MEI = KN_MEI.replace(/\\|\\/g, "&yen;");
							
							var hnsn = HNSN.replace(/\r\n/g, "<br/>");
							hnsn = hnsn.replace(/(\n|\r)/g, "<br/>");
							hnsn = hnsn.replace(/\\|\\/g, "&yen;");
			        		
							// ペンネーム
							var penName = "";
							if (PENNM == ""){
								penName = "購入者さん";
							} else {
								penName = PENNM + "さん";
							}
							
							// （性別・年齢）
							var seibetuAndNenrei = "";
							if (TKS_SBT != "" && TKS_NNR == "") {
							    seibetuAndNenrei = "（" + TKS_SBT + "）";
							} else if (TKS_SBT != "" && TKS_NNR != "") {
							    seibetuAndNenrei = "（" + TKS_SBT + "・" + TKS_NNR + "）";
							} else if (TKS_SBT == "" && TKS_NNR != "") {
								seibetuAndNenrei = "（" + TKS_NNR + "）";
							}
							
							reviewInfo += "<div class=\"review-item\">";
							reviewInfo += "<table class=\"review-table02\">";
							reviewInfo += "<tr class=\"tr01\">";
							reviewInfo += "<td class=\"td01\">";
							reviewInfo += "<p class=\"name\"><img src=\"" + brs_img_url + "rev_icon_reviewer.gif\">"
//●20131007 AMS 修正 start●
							// ニックネーム別URLを生成
							var ncnmUri = nssls_url + '/EPFB00/EPFB0126/dProdCmtByNicknmShow';
							ncnmUri += '?BELN_SHOP_KBN=100';
							ncnmUri += '&SHCM_SEQ=' + SHCM_SEQ;
							reviewInfo += "<span><a href=\"javascript:void(0)\" onclick=\"shnshsOpenSubWinFocus('" + ncnmUri + "', 'r2', 8);return false;\">" + penName + "</a></span>" + seibetuAndNenrei + "</p>";
//●20131007 AMS 修正 end●
							reviewInfo += "<p class=\"post\">投稿日：" + TOKO_NTJ + "</p>";
							reviewInfo += "</td>";
							reviewInfo += "<td class=\"td02\">";
							reviewInfo += "<p class=\"ammount\">評価&nbsp;";
							reviewInfo += "<img src=\""+ brs_img_url + STAR_IMG_MNZKD1 + "\" alt=\"\" width=\"13\">";
							reviewInfo += "<img src=\""+ brs_img_url + STAR_IMG_MNZKD2 + "\" alt=\"\" width=\"13\">";
							reviewInfo += "<img src=\""+ brs_img_url + STAR_IMG_MNZKD3 + "\" alt=\"\" width=\"13\">";
							reviewInfo += "<img src=\""+ brs_img_url + STAR_IMG_MNZKD4 + "\" alt=\"\" width=\"13\">";
							reviewInfo += "<img src=\""+ brs_img_url + STAR_IMG_MNZKD5 + "\" alt=\"\" width=\"13\">";
							reviewInfo += "&nbsp;<span>" + MNZKD +".0</span></p>";
							reviewInfo += "</td></tr>";
							var SHCM_KAIT_NY_size = SHCM_STMN_KAIT_LIST_PC.length;
							var SHCM_KAIT_NY_R_size = SHCM_STMN_KAIT_LIST_R.length;
							if (SHCM_KNY_SHN != "" || SHCM_KAIT_NY_size>0||SHCM_KAIT_NY_R_size>0) {
								reviewInfo += "<tr class=\"tr02\">";
								reviewInfo += "<td class=\"td03\">";
								reviewInfo += "<div class=\"cell01\">";
							
								if (SHCM_KNY_SHN != "") {
								    reviewInfo += "<p>■購入商品：&nbsp;" + SHCM_KNY_SHN + "</p>";
								}
							
								for (j in SHCM_STMN_KAIT_LIST_PC) {
									var SHCM_STMN_NY = String(SHCM_STMN_KAIT_LIST_PC[j].SHCM_STMN_NY);
									var SHCM_KAIT_NY = String(SHCM_STMN_KAIT_LIST_PC[j].SHCM_KAIT_NY);
									if (SHCM_KAIT_NY != "") {
										reviewInfo += "<p>■" + SHCM_STMN_NY + "：&nbsp;" + SHCM_KAIT_NY + "</p>";
									} else {
									    reviewInfo += "<p>■" + SHCM_STMN_NY + "：&nbsp;--</p>";
									}
								}
								reviewInfo += "</div></td>";
								
								reviewInfo += "<td class=\"td04\"><div class=\"cell01\">";
								for (j in SHCM_STMN_KAIT_LIST_R) {
									var SHCM_STMN_NY = String(SHCM_STMN_KAIT_LIST_R[j].SHCM_STMN_NY);
									var SHCM_KAIT_NY = String(SHCM_STMN_KAIT_LIST_R[j].SHCM_KAIT_NY);
									var SHCM_KAIT_NY_STAR1 = String(SHCM_STMN_KAIT_LIST_R[j].SHCM_KAIT_NY_STAR1);
									var SHCM_KAIT_NY_STAR2 = String(SHCM_STMN_KAIT_LIST_R[j].SHCM_KAIT_NY_STAR2);
									var SHCM_KAIT_NY_STAR3 = String(SHCM_STMN_KAIT_LIST_R[j].SHCM_KAIT_NY_STAR3);
									var SHCM_KAIT_NY_STAR4 = String(SHCM_STMN_KAIT_LIST_R[j].SHCM_KAIT_NY_STAR4);
									var SHCM_KAIT_NY_STAR5 = String(SHCM_STMN_KAIT_LIST_R[j].SHCM_KAIT_NY_STAR5);
																
									if (SHCM_KAIT_NY != "") {
										reviewInfo += "<p>" + SHCM_STMN_NY + "&nbsp;<span class=\"ib01\">";
										reviewInfo += "<img src=\"" + brs_img_url + SHCM_KAIT_NY_STAR1 + "\" alt=\"\" width=\"13\">";
										reviewInfo += "<img src=\"" + brs_img_url + SHCM_KAIT_NY_STAR2 + "\" alt=\"\" width=\"13\">";
										reviewInfo += "<img src=\"" + brs_img_url + SHCM_KAIT_NY_STAR3 + "\" alt=\"\" width=\"13\">";
										reviewInfo += "<img src=\"" + brs_img_url + SHCM_KAIT_NY_STAR4 + "\" alt=\"\" width=\"13\">";
										reviewInfo += "<img src=\"" + brs_img_url + SHCM_KAIT_NY_STAR5 + "\" alt=\"\" width=\"13\"></span>";
										reviewInfo += "<span class=\"ib02\">&nbsp;" + SHCM_KAIT_NY + ".0</span></p>";
									} else {
										reviewInfo += "<p>" + SHCM_STMN_NY + "&nbsp;<span class=\"ib01\">--</span><span class=\"ib02\"></span></p>";
									}
								}
								reviewInfo += "</div></td></tr>";
							}
//●20131007 AMS 追加 start●
							if (KN_MEI != "" || honbun != "") {
								reviewInfo += "<tr class=\"tr02\"><td class=\"td05\" colspan=\"2\"><div class=\"cell01\">";
								if (KN_MEI != "") {
									reviewInfo += "<p class=\"ttl\">" + KN_MEI + "</p>";
								}
								if (honbun != "") {
									reviewInfo += "<p class=\"text\">" + honbun + "</p>";
								}
								if (hnsn != "") {
									reviewInfo += "<div class=\"comment\">";
									reviewInfo += "<p class=\"comment_text\">" + hnsn + "</p>";
									reviewInfo += "<p class=\"comment_info\">" + HNSN_NTJ + "　千趣会 商品担当者</p>";
									reviewInfo += "</div>";
								}
								reviewInfo += "</div></td></tr>";
								
								// 参考になった
								reviewInfo += "<tr class=\"tr03\">";
								reviewInfo += "<td class=\"td06\" colspan=\"2\">";
								var shcmSnkoKsHyjStyle = "display:none";
								if(SHCM_SNKO_KS>0){
									shcmSnkoKsHyjStyle = "display:block";
								}
								reviewInfo += "<p class=\"reference\" id=\"P_SHCM_SNKO_KS_" + SHCM_SEQ + "\" style=\"" + shcmSnkoKsHyjStyle + "\"><span>" + SHCM_SNKO_KS + "人</span>が参考になりました。</p>";
								if(checkShcmSnkoKsBtnUnClicked(SHCM_SEQ)){
									reviewInfo += "<p class=\"btn\"><a id=\"A_SHCM_SEQ_" + SHCM_SEQ + "\" href=\"javascript:updShcmSnkoKsInfoHdk('" + beln_shop_kbn + "', '" + SHCM_SEQ + "', '" + brs_img_btn_url + "', '" + ss_url + "');\"><img id=\"IMG_SHCM_SEQ_" + SHCM_SEQ + "\" src=\"" + brs_img_btn_url + "review01.gif\" alt=\"参考になった\"></a></p>";
								} else {
									reviewInfo += "<p class=\"btn\"><a id=\"A_SHCM_SEQ_" + SHCM_SEQ + "\"><img id=\"IMG_SHCM_SEQ_" + SHCM_SEQ + "\" src=\"" + brs_img_btn_url + "review02.gif\" alt=\"参考になった\"></a></p>";
								}
								reviewInfo += "</td>";
							} else {
								reviewInfo += "<tr class=\"tr03\">";
								reviewInfo += "<td class=\"td05\" colspan=\"2\">";
								reviewInfo += "<div class=\"cell01\">";
								reviewInfo += "<p class=\"text\">ご意見・ご感想の投稿はございません。</p>";
								reviewInfo += "</div>";
								reviewInfo += "</td>";
							}
//●20131007 AMS 追加 end●
							reviewInfo += "</tr>";
							
							reviewInfo += "</table></div>";
			        	}
                        reviewInfo += "</div>";
                        
                        // 商品レビュー情報を設定
						$("#reviewInfo").html(reviewInfo);
						h_reviewInfo[pageNumber] = reviewInfo;
						if (pageNumber>lastPageNumber) {
						    pageNumber = lastPageNumber;
						}
//●20131007 AMS 修正 start●
						pagingReview(pageNumber, so_kq, hyjkq, beln_shop_kbn, kat_btgo, brs_img_url, brs_img_btn_url, ss_url, gmn_id, nssls_url, cmt_seq_shtk_kbn);
//●20131007 AMS 修正 start●
						if(jumpFlg) {
							var positionTabPosTop = $("#position-tab").position().top;
							var positionTabHeight = $("#position-tab").height();
							var shcmSbrPosTop = $("#shcmSbr").position().top;
							var scrollTop = positionTabPosTop + positionTabHeight + shcmSbrPosTop;
							window.scrollTo(0, scrollTop);
						}
						document.getElementById("reviewInfo").style.display="";
						//●20130917 AMS 修正 start●
						document.getElementById("paging").style.display="";
						//●20130917 AMS 修正 end●
                        document.getElementById("shcmSbr").style.display="";
						
					} else {
						if (hyjkq>0) {
							reviewInfo += "<div class=\"cfx f-clear\">";
							if (isSbrChange) {
							    reviewInfo += "<p class=\"no-review\">ご指定の絞り込み条件に該当する商品レビューはありませんでした。</p>";
							} else {
                                reviewInfo += "<p class=\"no-review\">この商品にはまだレビューコメントがありません。</p>";
							}
							reviewInfo += "</div>";
							$("#reviewInfo").html(reviewInfo);
							document.getElementById("reviewInfo").style.display="";
        	                document.getElementById("shcmSbr").style.display="";
						}else{
							document.getElementById("reviewInfo").style.display="none";
                            document.getElementById("shcmSbr").style.display="none";
						}
						//●20130917 AMS 修正 start●
						document.getElementById("paging").style.display="none";
						//●20130917 AMS 修正 end●
					}
				}
				ReviewInfoFlg = false;
				error_flg = false;
				
				// 性別区分
				objSbtKbn = document.getElementsByName("SHCM_SBR_SBT_KBN");
				if (objSbtKbn != null && objSbtKbn != undefined && objSbtKbn.length != 0) {
					objSbtKbn[0].disabled = false;
				}
				// 年齢区分
				objNnriKbn = document.getElementsByName("SHCM_SBR_NNRI_KBN");
				if (objNnriKbn != null && objNnriKbn != undefined && objNnriKbn.length != 0) {
					objNnriKbn[0].disabled = false;
				}

//●20131007 AMS 追加 start●
				// コメントのみ表示区分
				objCmtNmKbn = document.getElementsByName("SHCM_SBR_CMT_NM_HYJKBN");
				if (objCmtNmKbn != null && objCmtNmKbn != undefined && objCmtNmKbn.length != 0) {
					objCmtNmKbn[0].disabled = false;
				}
//●20131007 AMS 追加 end●

				// 表示順
				objHyjyun = document.getElementsByName("SHCM_SBR_HYJYUN");
				if (objHyjyun != null && objHyjyun != undefined && objHyjyun.length != 0) {
					objHyjyun[0].disabled = false;
				}
			}, 
			error: function() {
				// 性別区分
				objSbtKbn = document.getElementsByName("SHCM_SBR_SBT_KBN");
				if (objSbtKbn != null && objSbtKbn != undefined && objSbtKbn.length != 0) {
					objSbtKbn[0].disabled = false;
				}
				// 年齢区分
				objNnriKbn = document.getElementsByName("SHCM_SBR_NNRI_KBN");
				if (objNnriKbn != null && objNnriKbn != undefined && objNnriKbn.length != 0) {
					objNnriKbn[0].disabled = false;
				}
//●20131007 AMS 追加 start●
				// コメントのみ表示区分
				objCmtNmKbn = document.getElementsByName("SHCM_SBR_CMT_NM_HYJKBN");
				if (objCmtNmKbn != null && objCmtNmKbn != undefined && objCmtNmKbn.length != 0) {
					objCmtNmKbn[0].disabled = false;
				}
//●20131007 AMS 追加 end●
				// 表示順
				objHyjyun = document.getElementsByName("SHCM_SBR_HYJYUN");
				if (objHyjyun != null && objHyjyun != undefined && objHyjyun.length != 0) {
					objHyjyun[0].disabled = false;
				}
				
				var error = "<div class=\"text12l16\">申し訳ございません、処理中に問題が発生しました。<br>お手数をお掛けしますが、もう一度やり直してください。</div>";
				$("#reviewInfo").html(error);
				error_flg = true;
				ReviewInfoFlg = false;
			}
		});
		nowPageNumber = pageNumber;
	}
//●20130325 AMS 変更 end●
	
//●20130325 AMS 変更 start●
	//ページング部品を作成する
//	function pagingReview(nowPageNum, so_kq, hyjkq, beln_shop_kbn, kat_btgo, ss_url){
//●20131007 AMS 修正 start●
//	function pagingReview(nowPageNum, so_kq, hyjkq, beln_shop_kbn, kat_btgo, brs_img_url, brs_img_btn_url, ss_url, gmn_id){
	function pagingReview(nowPageNum, so_kq, hyjkq, beln_shop_kbn, kat_btgo, brs_img_url, brs_img_btn_url, ss_url, gmn_id, nssls_url, cmt_seq_shtk_kbn){
//●20131007 AMS 修正 end●
//●20130325 AMS 変更 end●
		
		//ページング部品のタグを取得
//●20130917 AMS 削除 start●
//●20130325 AMS 追加 start●
		//var elemPagingTop = document.getElementById("pagingTop");
		//var elemPagingBottom = document.getElementById("pagingBottom");
		
//●20130325 AMS 追加 end●
//●20130917 AMS 削除 end●
//●20130917 AMS 追加 start●
		var elemPaging = document.getElementById("paging");
//●20130917 AMS 追加 end●

		//変数
		var startpage = (nowPageNum - 1) * hyjkq + 1; 
		var endpage = nowPageNum * hyjkq; //○～○件表示に使用
		if(endpage > so_kq){
			endpage = so_kq;
		}
		var startpaging = "";
		var endpaging = "";
		if ((nowPageNum % 10) == 0) {
			startpaging = (Math.floor(nowPageNum / 10) - 1) * 10 + 1;
			endpaging = Math.floor(nowPageNum / 10) * 10; //ページング番号に使用
		} else {
			startpaging = Math.floor(nowPageNum / 10) * 10 + 1;
			endpaging = Math.floor(nowPageNum / 10) * 10 + 10; //ページング番号に使用
		}
		var lastpage = Math.floor(so_kq / hyjkq); //最終ページ
		if((so_kq % hyjkq) != 0){
			lastpage += 1;
		}
		var nextpage = nowPageNum + 1;
		var prevpage = nowPageNum - 1;
		
		
		//○件中○～○件表示を作成
//●20130325 AMS 修正 start●
		pagingInfo = "<p class=\"f-left text12 fc-gray03\">";
		pagingInfo += so_kq + "件中" + startpage + "～" + endpage + "件目表示</p>";
		pagingInfo += "<ul class=\"pager01 pl10\">";
//●20130325 AMS 修正 end●
		//前の○○件を作成
		if(nowPageNum != 1){
			pagingInfo += "<li><a href=\"javascript:void(0);\" onClick=\"";
//●20131007 AMS 修正 start●
			pagingInfo += "getReviewInfoHdk(" + prevpage + ",'" + gmn_id + "','" + beln_shop_kbn + "','" + kat_btgo + "','" + brs_img_url + "','" + brs_img_btn_url + "','" + ss_url + "','" + nssls_url + "','" + cmt_seq_shtk_kbn + "');return false;\">";
//●20131007 AMS 修正 end●
			pagingInfo += "<前の" + hyjkq + "件</a></li>";
		}
		//ページ番号を作成
		for(i = startpaging; i <= endpaging; i++){
			if (i == nowPageNum){
				pagingInfo += "<li class=\"current\">" + i + "</li>";
			} else {
				pagingInfo += "<li id=\"paging" + i + "\">";
				pagingInfo += "<a href=\"javascript:void(0);\"";
//●20131007 AMS 修正 start●
				pagingInfo += "onClick=\"getReviewInfoHdk(" + i + ",'" + gmn_id + "','" + beln_shop_kbn + "','" + kat_btgo + "','" + brs_img_url + "','" + brs_img_btn_url + "','" + ss_url + "','" + nssls_url + "','" + cmt_seq_shtk_kbn + "');return false;\">" + i + "</a></li>";
//●20131007 AMS 修正 end●
			}
			if(i == lastpage){
				break;
			}
		}
		//次の○○件を作成
		if(nowPageNum == lastpage - 1){
			var lastpageNum = so_kq - (nowPageNum * hyjkq);
			pagingInfo += "<li><a href=\"javascript:void(0);\" onClick=\"";
//●20131007 AMS 修正 start●
			pagingInfo += "getReviewInfoHdk(" + nextpage + ",'" + gmn_id + "','" + beln_shop_kbn + "','" + kat_btgo + "','" + brs_img_url + "','" + brs_img_btn_url + "','" + ss_url + "','" + nssls_url + "','" + cmt_seq_shtk_kbn + "');return false;\">";
//●20131007 AMS 修正 end●
			pagingInfo += "次の" + lastpageNum + "件></a></li>";
		}else if(nowPageNum != lastpage){
			pagingInfo += "<li><a href=\"javascript:void(0);\" onClick=\"";
//●20131007 AMS 修正 start●
			pagingInfo += "getReviewInfoHdk(" + nextpage + ",'" + gmn_id + "','" + beln_shop_kbn + "','" + kat_btgo + "','" + brs_img_url + "','" + brs_img_btn_url + "','" + ss_url + "','" + nssls_url + "','" + cmt_seq_shtk_kbn + "');return false;\">";
//●20131007 AMS 修正 end●
			
			pagingInfo += "次の" + hyjkq + "件></a></li>";
		}
		
//●20130325 AMS 修正 start●
        pagingInfo += "</ul>";
//●20130917 AMS 修正 start●
			elemPaging.innerHTML = pagingInfo;
//●20130917 AMS 修正 end●

//●20130325 AMS 修正 end●
	}
	
	function createTimeStamp(){
	
		var d = new Date();
		var ye = d.getUTCFullYear();
		var mo = ("0" + d.getUTCMonth() + 1).slice(-2);
		var da = ("0" + d.getUTCDate()).slice(-2);
		var ho = ("0" + d.getUTCHours()).slice(-2);
		var mi = ("0" + d.getUTCMinutes()).slice(-2);
		var se = ("0" + d.getUTCSeconds()).slice(-2);
		var timeStamp = ye + mo + da + ho + mi + se;
		
		return timeStamp;
	
	}
	
	
//●20111222 AMS 追加 end●
//●20131105 AMS 追加 start●
function initIncludeP1(pr_domain, beln_shop_kbn, dai_cate_id, chu_cate_id, sho_cate_id, epfb0107_uri){
    // PRサーバへのリクエストURLを生成
    var urlParames = getUrlParames();
    var pr_inc_html = '';

    var byteCount = getByteCount(decodeURI(urlParames['PARAM_INC_NAME']));
    
    if (urlParames['PARAM_INC_NAME'] && urlParames['PARAM_INC_NAME'].indexOf("/") == -1 && byteCount <= 250) {
        pr_inc_html = urlParames['PARAM_INC_NAME'];
    }
    if (typeof pr_domain == undefined) {
        pr_domain = '';
    }
    if (typeof beln_shop_kbn == undefined) {
        beln_shop_kbn = '';
    }
    if (typeof dai_cate_id == undefined) {
        dai_cate_id = '';
    }
    if (typeof chu_cate_id == undefined) {
        chu_cate_id = '';
    }
    if (typeof sho_cate_id == undefined) {
        sho_cate_id = '';
    }
    if (typeof epfb0107_uri == undefined) {
        epfb0107_uri = '';
    }
    var prUrl = pr_domain + '/pr/?key=&param=' + pr_inc_html + '&sd=' + beln_shop_kbn + '&bc=' + dai_cate_id + '&mc=' + chu_cate_id + '&sc=' + sho_cate_id + '&sdf=&out=jsonp';
    
    // PRサーバにリクエストを送信し、PRインクルードファイル名を取得
    var prFileName = '';
    $.ajax({
        type : 'GET',
        url : prUrl,
        dataType : 'jsonp',
        jsonpCallback : 'update_pr_area',
        success : function(data, ajaxOptions, xhr){
            if (typeof data == 'undefined'
                || typeof data.response.err == 'undefined' || data.response.err.code != '100'
                || typeof data.response.filename == 'undefined' || data.response.filename == '') {
                selectInclude();
                return;
            }
            prFileName = data.response.filename.replace(/\.html?/, '');
            
            if (prFileName != '') {
                setPrIncHtml(prFileName, epfb0107_uri);
            } else {
                selectInclude();
            }
        },
        error: function(xhr, ajaxOptions, thrownError){},
        complete : function(){}
    });
}
function setPrIncHtml(filename, epfb0107_uri){
    // PRインクルードファイル名をもとにインクルードHTMLを取得し、画面に埋め込む
    var prHtmlPass = epfb0107_uri + '?PARAM_INC_NAME=' + filename + '&PC_INCLUDE_KBN=1';
    var includeHtml = '';
    $.ajax({
        type: 'GET',
        url : prHtmlPass,
        cache: false,
        dataType: 'jsonp',
        scriptCharset : 'UTF-8',
        jsonpCallback : 'setIncInfo',
        success : function(data) {
            if (typeof data.INFO != 'undefined' && typeof data.INFO != null && data.INFO.length != 0) {
                includeHtml = data.INFO;
            }
            // PR部を置換
            if ($('#include2').size() != 0) {
                $('#include2').html(includeHtml);
            }
        },
        error: function() {},
        complete : function(xhr, status){
            selectInclude();
        }
    });
}
//●20131105 AMS 追加 end●
//●20120418 AMS 追加 start●
function initInclude(uri, tokushu_idx){
    var urlParames = getUrlParames();
    var byteCount = getByteCount(decodeURI(urlParames['PARAM_INC_NAME']));
    
    if (urlParames['PARAM_INC_NAME'] && urlParames['PARAM_INC_NAME'].indexOf("/") == -1 && byteCount <= 250) {
        uri += '?PARAM_INC_NAME=' + urlParames['PARAM_INC_NAME'];
        
        $.ajax({
            type: "GET",
            url: uri,
            cache: false,
            dataType: "jsonp",
            scriptCharset:"UTF-8",
            jsonpCallback: "setIncInfo",
            success: function(data) {
                var info = data.INFO;
                window.document.getElementById("include" + tokushu_idx).innerHTML = info;
                selectInclude();
            },
            error: function() {
                window.document.getElementById("include" + tokushu_idx).innerHTML = "";
                selectInclude();
            }
        });
    } else {
        window.document.getElementById("include" + tokushu_idx).innerHTML = "";
        selectInclude();
    }
}
function selectInclude(){
    objReg = new RegExp("");
    objReg.compile("^include[0-9]+$");
    var divElements = window.document.getElementsByTagName("div");
    for (i=0; i < divElements.length; i++) {
        if (divElements[i].id.match(objReg)) {
            var divid = divElements[i].id;
            var includeDiv = window.document.getElementById(divid);
            if (includeDiv.innerHTML != "" && includeDiv.innerHTML.match("[\\S]+")) {
                window.document.getElementById(divid).style.display = 'block';
                break;
            }
        }
    }
}
function setParamName(){
    var urlParames = getUrlParames();
    var addParamElements = window.document.getElementsByName("add_param");
    
    for (i=0; i < addParamElements.length; i++) {
        if (urlParames['PARAM_INC_NAME']) {
            addParamElements[i].href = 
                      addParamElements[i].href.replace("PARAM_INC_NAME=", "PARAM_INC_NAME=" + urlParames['PARAM_INC_NAME']);
        } else {
            addParamElements[i].href =
                      addParamElements[i].href.replace("?PARAM_INC_NAME=", "");
        }
    }
}
function getUrlParames(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    
    return vars;
}
function getByteCount(value) {
    var strCode = "";
    var count = 0;
    
    for (var i=0;i < value.length; i++) {
		strCode = value.charAt(i);
		strCode = escape(strCode);
		
		if (strCode.length < 4) {
			count = count + 1;
		} else {
    		count = count + 2;
	    }
   }
   
   return count;
}
//●20120418 AMS 追加 end●

//●20130820 AMS 追加 start●
function setParamNameP1(){

    var urlParames = getUrlParames();
    var addParamElements = window.document.getElementsByName("add_param");
    
    for (i=0; i < addParamElements.length; i++) {
        if (urlParames['PARAM_INC_NAME']) {
            addParamElements[i].href = 
                      addParamElements[i].href.replace("PARAM_INC_NAME=", "PARAM_INC_NAME=" + urlParames['PARAM_INC_NAME']);
            addParamElements[i].href = 
                      addParamElements[i].href.replace("PR=", "PR=" + urlParames['PARAM_INC_NAME']);
        } else {
            addParamElements[i].href =
                      addParamElements[i].href.replace("?PARAM_INC_NAME=", "");
            addParamElements[i].href =
                      addParamElements[i].href.replace("&PR=", "");
        }
    }
}
//●20130820 AMS 追加 end●

// ----------------------------------------------------
// 非同期商品コメント参考回数取得
//   @param
//      beln_shop_kbn:ベルネショップ区分
//      shcm_snko_ks_select_flg:商品コメント参考回数取得フラグ（1：取得する、ブランク：取得しない）
//      ss_url:サービスサーブレットURL
// ----------------------------------------------------
function selShcmSnkoKsInfoHdk(beln_shop_kbn, shcm_snko_ks_select_flg, ss_url) {
	
	if(shcm_snko_ks_select_flg == '1'){
		
		var objShcmSeqList = document.getElementsByName("SHCM_SEQ");
		
		if(objShcmSeqList != null && objShcmSeqList.length > 0){
		
			// リクエストURLを生成
			var uri = ss_url + '/EPFB00/EPFB0120/aShnCmtSnkoKsSel';
			uri += '?BELN_SHOP_KBN=' + beln_shop_kbn;
			
			$.ajax({
				type: "GET",
				url: uri,
				cache: false,
				data: $("#ShcmSnkoKsForm").serialize(),
				dataType: "jsonp",
				jsonpCallback: "setShcmSnkoKsInfo",
				success: function(data) {
					var info = data.SHCM_SNKO_KS_INFO[0];
					if (info) {
//●20131007 AMS 修正 start●
						var shcmTagList = new Array('H_', 'L_', '');
						var items = info.SHCM_SNKO_KS_ITEM;
						for(var i in items){ 
							var shcmSeq = String(items[i].SHCM_SEQ); // 商品コメント連番
							var shcmSnkoKs = String(items[i].SHCM_SNKO_KS); // 商品コメント参考回数
							for (i = 0; i < shcmTagList.length; i++) {
								// 参考回数
								var objPShcmSnkoKs = document.getElementById("P_SHCM_SNKO_KS_" + shcmTagList[i] + shcmSeq);
								if(objPShcmSnkoKs != null){
									var htmlBuff = "<span>";
									htmlBuff += shcmSnkoKs;
									htmlBuff += "人</span>が参考になりました。";
									objPShcmSnkoKs.innerHTML = htmlBuff;
									if(shcmSnkoKs > 0){
										objPShcmSnkoKs.style.display = "block";
									} else {
										objPShcmSnkoKs.style.display = "none";
									}
								}
							}
						}
//●20131007 AMS 修正 end●
					}
				}, 
				error: function() {
					// 何にもしない
				}
			});
		}
	}
}
//●20130403 AMS 追加 end●
//●20130325 AMS 追加 start●
// ----------------------------------------------------
// 非同期商品コメント参考回数更新・表示
//   @param
//      beln_shop_kbn:ベルネショップ区分
//      shcm_seq:商品コメント連番
//      brs_img_btn_url:ボタンイメージ配置場所
//      ss_url:サービスサーブレットURL
// ----------------------------------------------------
function updShcmSnkoKsInfoHdk(beln_shop_kbn, shcm_seq, brs_img_btn_url, ss_url) {
	// リクエストURLを生成
	var uri = ss_url + '/EPFB00/EPFB0119/aShnCmtSnkoKsUpd';
	uri += '?BELN_SHOP_KBN=' + beln_shop_kbn;
	uri += '&SHCM_SEQ=' + shcm_seq;
	
	$.ajax({
		type: "GET",
		url: uri,
		cache: false,
		dataType: "jsonp",
		jsonpCallback: "setShcmSnkoKsInfo",
		success: function(data) {
			var shcmSnkoKsInfo = "";
			var info = data.SHCM_SNKO_KS_INFO[0];
			if (info) {
				var shcmSeq = String(info.SHCM_SEQ); // 商品コメント連番
				var shcmSnkoKs = String(info.SHCM_SNKO_KS); // 商品コメント参考回数
//●20131007 AMS 修正 start●
				var shcmTagList = new Array('H_', 'L_', '');
				for (i = 0; i < shcmTagList.length; i++) {
					// 参考回数
					var objPShcmSnkoKs = document.getElementById("P_SHCM_SNKO_KS_" + shcmTagList[i] + shcmSeq);
					//●20130403 AMS 変更 start●
					//if(objPShcmSnkoKs != null){
					//○20130403 AMS 変更 replace○
					if(objPShcmSnkoKs != null && shcmSnkoKs > 0){
					//●20130403 AMS 変更 end●
						var htmlBuff = "<span>";
						htmlBuff += shcmSnkoKs;
						htmlBuff += "人</span>が参考になりました。";
						objPShcmSnkoKs.innerHTML = htmlBuff;
						objPShcmSnkoKs.style.display = "block";
					}
					
					// 参考になったボタン
					var objAShcmSeq = document.getElementById("A_SHCM_SEQ_" + shcmTagList[i] + shcmSeq);
					var objIMGShcmSeq = document.getElementById("IMG_SHCM_SEQ_" + shcmTagList[i] + shcmSeq);
					if(objAShcmSeq != null && objIMGShcmSeq != null){
						objAShcmSeq.removeAttribute("href");
						var imgPath = brs_img_btn_url;
						imgPath += "review02.gif";
						objIMGShcmSeq.src = imgPath;
					}
				}
//●20131007 AMS 修正 end●
			}
		}, 
		error: function() {
			// 何にもしない
		}
	});
}
// ----------------------------------------------------
// 非同期商品コメント参考回数ボタン非クリックチェック
//   @param
//      shcm_seq:商品コメント連番
// ----------------------------------------------------
function checkShcmSnkoKsBtnUnClicked(shcm_seq) {
	var tempShcmSnkoKsInfo = cookieRead("PRODRVW");
	var ShcmSeqList = tempShcmSnkoKsInfo.split(KEY_3);
	for (var i in ShcmSeqList) {
		var shcmSeqOfCookie = ShcmSeqList[i];
		if(shcmSeqOfCookie == shcm_seq){
			return false;
		}
	}
	return true;
}
//●20130325 AMS 追加 end●

// ----------------------------------------------------

//   静的設定ファイル取得処理
//    JSONP形式の静的ファイル情報を取得する。

//   @param
//      ctlPattern: (1:"SNSプラグイン")

// ----------------------------------------------------

function getStaticProperties(ctlPattern) {
    var uri = window.location.protocol + "//www.bellemaison.jp/_system/js/staticCommonProperties.js";
    var ret = "";
    var snsHyjKbn = "";
    $.ajax({

        type: "GET",
        cache: false,

        url: uri,

        async: false,

        dataType: "jsonp",

        jsonpCallback: "setStaticProperties"
    }).success(function(data) {
        ret = eval(data);
        snsHyjKbn = data.SNS_ENTRY_HIHYJ_KBN;
    }).error(function(xhr, ajaxOptions, thrownError) {

            // 何もしない
    }).complete(function(xhr,status) {
        if (ctlPattern == "1") {
            // 画面のSNS表示処理を実行
            snsPluginDsp(snsHyjKbn);
        }
    });

    return ret;
}

// ----------------------------------------------------

//   クッキー情報「TTINFOPER」の値取得処理

//    クッキー情報「TTINFOPER」の指定キーの値を取得する。

//   @param

//      keyName: 取得対象のキー名

// ----------------------------------------------------

function getTtInfoCookieValue(keyName) {

	if(keyName != ""){

		var ttInfoPer = cookieRead("TTINFOPER");

		var tempTtInfo = "";

		if (document.cookie && ttInfoPer != "") {

			var ttInfoList = ttInfoPer.split(";");

			for (var i = 0; i < ttInfoList.length; i++) {

				var str = ttInfoList[i].split("=");

				if(str[0] == keyName){

					return unescape(str[1]);

				}

			}

		}

	}

	return "";

}



// ----------------------------------------------------

//   html上の指定idに「TTINFOPER」の値設定処理

//    html上の指定idに対して、クッキー情報「TTINFOPER」の指定キーの値を取得する。

//   @param

//      ids: 取得対象のid名の配列

//      keyNames: 取得対象の「TTINFOPER」キー名の配列

// ----------------------------------------------------

function setRecOpts(ids, keyNames) {

	if (document.getElementById) {

		if (ids instanceof Array && keyNames instanceof Array) {

			for (var i = 0; i < ids.length; i++) {

				if (ids[i] != "") {

					var objId = document.getElementById(ids[i]);

					if(objId != null) {

						document.getElementById(ids[i]).innerHTML = getTtInfoCookieValue(keyNames[i]);

					}

				}

			}

		}

	}

}

// URLパラメータ配列
var bellneParamArray = [];

function initBellneProcess(belnShopKbn, topPage) {

	var urlParam = "";
	var hashes = window.location.href.split('?');
	if (hashes.length == 2) {
		urlParam = hashes[1];
	}

	var params = urlParam.split("&");
	for ( i = 0; i < params.length; i++ ) {
		param = params[i].split("=");
		
		if (param.length >= 2) {
			bellneParamArray.push(param[0]);
			
			var loEscapeValue = param[1];
            var loHashValue = loEscapeValue.split("#");
            if (loHashValue.length >= 2) {
                loEscapeValue = loHashValue[0];
            }
			loEscapeValue = $('<div />').text(loEscapeValue).html();
			loEscapeValue = loEscapeValue.replace(/"/g,"&quot;");
			loEscapeValue = loEscapeValue.replace(/'/g,"&#039;");
			bellneParamArray[param[0]] = loEscapeValue;
		}
	}

	document.form01.SHNCRTTKKRO_KBN.value = getBellneUrlParamValue("SHNCRTTKKRO_KBN");
	document.form01.OLST_KYU_KBN.value = getBellneUrlParamValue("OLST_KYU_KBN");
	document.form01.LS_CHS_KYU_KBN.value = getBellneUrlParamValue("LS_CHS_KYU_KBN");
	document.form01.ML_CHS_KYU_KBN.value = getBellneUrlParamValue("ML_CHS_KYU_KBN");

	// MCの場合
	if (belnShopKbn == MC_SHOP_KBN) {
		if (getBellneUrlParamValue("LS_CHS_KYU_KBN") != "1" && getBellneUrlParamValue("ML_CHS_KYU_KBN") != "1") {
			if (getBellneUrlParamValue("SHN_SHS_FRM_SNI_KBN") == "1") {
				$("#back-button").attr("href",topPage);
			} else {
				$("#back-button").attr("href","javascript:window.history.back();");
			}
		} else {
			$("#back-button").remove();
		}
	} else {
		if (getBellneUrlParamValue("LS_CHS_KYU_KBN") == "1" || getBellneUrlParamValue("ML_CHS_KYU_KBN") == "1") {
			$("#back-button").remove();
		} else {
			if (getBellneUrlParamValue("SHN_SHS_FRM_SNI_KBN") == "1") {
				$("#back-button").attr("href",topPage);
			} else {
				$("#back-button").attr("href","javascript:window.history.back();");
			}
		}
	}
}

function getBellneUrlParamValue(key) {
	if($.inArray(key, bellneParamArray) == -1) {
		return "";
	}

	return bellneParamArray[key];
}



//TOP画面ランキング情報セット
function getRankingInfoSpTop(nonssl_url) {
    // cookieから現在選択中のカテゴリIDを取得
    var cokname = "RANK_CATEGORY_ID";
    var coktxt = document.cookie+";"; 
    var stano = coktxt.indexOf(cokname); 
    var endno = "";
    var cokValue1 = "";
    var cokValue2 = "";
    var category_id = "";
    var belnShopKbn = "";
    var url = "";

    if (stano != -1) { 
        endno = coktxt.indexOf(";",stano); 
        cokValue1 = unescape(coktxt.substring(stano+cokname.length+1,endno)); 
        cokValue2 = cokValue1.split("_");
        belnShopKbn = cokValue2[0];
        category_id = cokValue2[1];
    }

    if (belnShopKbn == "" || category_id == "") {
        //ランキング情報がない場合の不要なタグ削除
        $("#ranking").css({ "display": "none" });
    } else {
        url = nonssl_url + "/ep/service/EPFB00/EPFB0132/aGetRankingInfo?BELN_SHOP_KBN=" + belnShopKbn + "&C=" + category_id;
        var rankingInfo = "";
        var count = 0;
        $.ajax({
            type: "GET",
            url: url,
            cache: false,
            dataType: "jsonp",
            scriptCharset : 'UTF-8',
            jsonpCallback: "getRankingInfoTop",
            success: function(data) {
            // ランキング情報のHTMLを生成
                var INFO = data.CATEGORIES[0];
                var status = INFO.SRKEK_STAT;
                if (INFO.CATEGORY != null) {
                    for(var i = 0; i < INFO.CATEGORY.length; i++) {
                        count = count + 1;
                        var CATEGORY = INFO.CATEGORY[i];
                        var RANKING_TTL = CATEGORY.RANKING_TTL;                    // ランキングタイトル
                        rankingInfo += "<div id=\"ranking" + count + "\" >"
                        rankingInfo += "<h2>";
                        rankingInfo += RANKING_TTL;
                        rankingInfo += "</h2>";
                        rankingInfo += "<ol>";
                        for(var j = 0; j < CATEGORY.ITEM.length; j++) {
                            var ITEM = CATEGORY.ITEM[j];
                            var RANK = ITEM.RANK;                                // ランキング
                            var KAT_MEI_PC = ITEM.KAT_MEI_PC;                    // 商品名
                            var BRAND_NAME = ITEM.BRAND_NAME;                    // ブランド名
                            var RANK_IMAGE = ITEM.RANK_IMAGE;                    // ランキング画像
                            var SHN_DTL_URL = ITEM.SHN_DTL_URL;                  // 詳細パス
                            var SHN_IMG_URL = ITEM.SHN_IMG_URL;                  // 商品イメージ画像
                            var PRICE = ITEM.PRICE;                              // 金額
                            var TOKKA_KBN = ITEM.TOKKA_KBN;                      // 特価区分
                            var OUTL_SHN_KBN = ITEM>OUTL_SHN_KBN;                // アウトレット区分
                            var RATING = ITEM.RATING;                            // 評価
                            var COMMENT_SO_KQ = ITEM.COMMENT_SO_KQ;              // コメント数
                            rankingInfo += "<li>";
                            rankingInfo += "<p class=\"rank\"><span class=\"rank_crown rank" + RANK + "\"></span></p>";
                            rankingInfo += "<div class=\"item-img\">";
                            rankingInfo += "<a href=\"" + SHN_DTL_URL + "\">";
                            rankingInfo += "<img src=\"" + SHN_IMG_URL + "\" width=\"95\" height=\"95\" alt=\"\" />";
                            rankingInfo += "</a></div>";
                            rankingInfo += "<p class=\"item-name\">";
                            rankingInfo += "<a href=\"" + SHN_DTL_URL + "\">";
                            rankingInfo += KAT_MEI_PC;
                            if(BRAND_NAME != ""){
                                rankingInfo += "(" + BRAND_NAME + ")";
                            }
                            rankingInfo += "</a></p>";
                            if ( TOKKA_KBN == 1 || OUTL_SHN_KBN == 1 ) {
                                rankingInfo += "<p class=\"item-spprice\">" + PRICE + "</p>";
                            } else { 
                                rankingInfo += "<p class=\"item-price\">" + PRICE + "</p>";
                            }
                            // 評価
                            if (RATING != "" || COMMENT_SO_KQ != "") {
                                if (COMMENT_SO_KQ >= 5) {
                                    RATING = RATING * 10;
                                    rankingInfo += "<p class=\"star\">";
                                    if (RATING < 10) {
                                        RATING = "0" + RATING;
                                    }
                                    rankingInfo += "<img src=\"index_images/star/star_icon_" + RATING + ".gif\" width=\"54\" height=\"11\" alt=\"\" />";
                                    rankingInfo += "<span class=\"popcount\"> (" + COMMENT_SO_KQ + ")</span>";
                                    rankingInfo += "</p>";
                                }
                            }
                            rankingInfo += "</li>";
                        }
                    }
                    rankingInfo += "</ol>";
                    rankingInfo += "<div class=\"button-wrap\">";
                    rankingInfo += "<a href=\"#\" class=\"button btn-prev\"><img src=\"index_images/btn_prev.png\" width=\"97\" height=\"26\" alt=\"\" /></a>";
                    rankingInfo += "<a href=\"#\" class=\"button btn-next\"><img src=\"index_images/btn_next.png\" width=\"97\" height=\"26\" alt=\"\" /></a>";
                    rankingInfo += "</div>";
                    rankingInfo += "</div>";
                }
                // ランキング情報を設定
                if (rankingInfo != "") {
                    $("#ranking").html(rankingInfo);
                    for( var i = 0 ; i < count ; i++ ) {
                        var num = i + 1;
                        smp_getRecommend2("ranking" + num);
                    }
                }
            },
            // クッキーに設定されているカテゴリＩＤのランキング情報がない場合
            error: function() {
                $("#ranking-list").css({ "display": "none" });
            }
        });
    }
}

/* 修正 150310brs1 TAM ココから */
/* 修正 150320brs1 TAM ココから */

//非同期カート商品表示処理
var CartObjFlg = false;
var cartInfo = "";
function CartObj(uri,SSLServletURL,belnShopKbn,imgPass){
	if ($('#cart-area .cart-area__slider').size() > 0) {
			$('#cart-area .cart-area__slider').html('<div class="loading"><img src="/pc/for_app/img/brs_img/loading01.gif"></div>');
	}
	CartObjFlg = true;
	//カート商品表示処理
	$.ajax({
		type: "GET",
		url: uri,
		cache: false,
		dataType: "xml",
		success: function(data) {
		
			var status = $(data).find("SR_KEK_STAT").text();
			var prev = $(data).find("PREV_PAGE_HYJKBN").text();
			var next = $(data).find("NEXT_PAGE_HYJKBN").text();
			if (status == '0') {
				CartObjFlg = false;
				//カート商品をHTMLタグと整合する
				cartInfo = "";
				cartInfo += "<p class=\"cart-area__ttl\">カートの中の商品</p>";
				cartInfo += "<div class=\"cart-area__btn\">";
				if(belnShopKbn == 100){
					cartInfo += "<a href=\"" + SSLServletURL + "/EPJB00/EPJB0001/dCartShow?BELN_SHOP_KBN=" + belnShopKbn + "\">";
				}else if (belnShopKbn == 101){
					cartInfo += "<a href=\"" + SSLServletURL + "/EPJB00/EPJB0001/dCartShow?BELN_SHOP_KBN=" + belnShopKbn + "\">";
				}else if (belnShopKbn == 102){
					cartInfo += "<a href=\"" + SSLServletURL + "/EPJB00/EPJB0001/dCartShow?BELN_SHOP_KBN=" + belnShopKbn + "\">";
				}else if (belnShopKbn == 150){
					cartInfo += "<a href=\"" + SSLServletURL + "/EPJB00/EPJB0001/dCartShow?BELN_SHOP_KBN=" + belnShopKbn + "\">";
				}else if (belnShopKbn == 151){
					cartInfo += "<a href=\"" + SSLServletURL + "/EPJB00/EPJB0001/dCartShow?BELN_SHOP_KBN=" + belnShopKbn + "\">";
				} else if(belnShopKbn == 200) {
					cartInfo += "<a href=\"" + SSLServletURL + "/EPJM00/EPJM0001/dCartShow?BELN_SHOP_KBN=" + belnShopKbn + "\">";
				}
//				if(belnShopKbn == 100){
//					cartInfo += "<a href=\"" + SSLServletURL + "/EPJB00/EPJB0001/dCartShow?BELN_SHOP_KBN=" + belnShopKbn + "\">";
//				} else if(belnShopKbn == 200) {
//					cartInfo += "<a href=\"" + SSLServletURL + "/EPJM00/EPJM0001/dCartShow?BELN_SHOP_KBN=" + belnShopKbn + "\">";
//				}
				cartInfo += "<img src=\"" +imgPass + "mypage/cart-area_btn01.png\" width=\"152\" height=\"30\" alt=\"カートを見る\"></a></div>";
				cartInfo += "<div class=\"cart-area__wrap\" id=\"cart-area__wrap\">";
				cartInfo += "<div class=\"cart-area__slider\" id=\"cart-area__slider\">";
				cartInfo += "<ul class=\"clearfix\">";
				
				var i =1;
				$(data).find("CART_ITEM").each(function(){
					var shn_img_url = $(this).find("SHN_IMG_M_URL").text();
					var sh_link_url = $(this).find("SH_LINK_URL").text();
					var shnnm = $(this).find("SHNNM").text().replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
					var kakk = $(this).find("KAKK").text();
					cartInfo += "<li class=\"item item" + i +"\">";
					if (sh_link_url.length > 0){
						cartInfo += "<div class=\"img\"><a href=\"" + sh_link_url + "\"><img src=\"" + shn_img_url + "\" width=\"140\" height=\"140\"  alt=\"\"></a></div>";
						cartInfo += "<p class=\"name\"><a href=\"" + sh_link_url + "\">" + shnnm + "</a></p>";
					} else {
						cartInfo += "<div class=\"img\"><img src=\"" + shn_img_url + "\" width=\"140\" height=\"140\"  alt=\"\"></div>";
						cartInfo += "<p class=\"name\">" + shnnm + "</p>";
					}
					cartInfo += "<p class=\"price\">" + kakk + "</p>";
					cartInfo += "</li>";
					i++;
				});
				cartInfo += "</ul>";
				if (prev == "1") {
					cartInfo += "<div class=\"btn-prev\"><a href=\"javascript:void(0);\" onclick=\"cartPageNum--;CartObjload(" + belnShopKbn +", 4, cartPageNum);\">";
					cartInfo += "<img src=\"" +imgPass + "mypage/send_prev.png\" width=\"30\" height=\"30\" alt=\"<\"></a></div>";
				} else {
					cartInfo += "<div class=\"btn-prev2\"><img src=\"" +imgPass + "mypage/send_prev2.png\" width=\"30\" height=\"30\" alt=\"<\"></div>";
				}
				if (next == "1") {
					cartInfo += "<div class=\"btn-next\"><a href=\"javascript:void(0);\" onclick=\"cartPageNum++;CartObjload(" + belnShopKbn +", 4, cartPageNum);\">";
					cartInfo += "<img src=\"" +imgPass + "mypage/send_next.png\" width=\"30\" height=\"30\" alt=\">\"></a></div>";
				} else {
					cartInfo += "<div class=\"btn-next2\"><img src=\"" +imgPass + "mypage/send_next2.png\" width=\"30\" height=\"30\" alt=\">\"></div>";
				}
				cartInfo += "</div>";
				cartInfo += "</div>";

				if (cartInfo != "") {
					$("#cart-area").empty();
					$("#cart-area").html(cartInfo);
				}
				success = true;
			} else {
				cartInfo = "";
				cartInfo += "<p class=\"cart-area__ttl\">カートの中の商品</p>";
				cartInfo += "<p class=\"cart-area__none\">カートに商品がある場合、商品を表示いたします。</p>";
				if (cartInfo != "") {
					$("#cart-area").html(cartInfo);
				}
				CartObjFlg = false;
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			CartObjFlg = false;
		}
	});
}
//非同期お気に入りリスト商品表示処理
var FavoriteObjFlg = false;
var favoriteInfo = "";
function FavoriteObj(uri,SSLServletURL,belnShopKbn,imgPass){
	if ($('#favorite-area .favorite-area__slider').size() > 0) {
			$('#favorite-area .favorite-area__slider').html('<div class="loading"><img src="/pc/for_app/img/brs_img/loading01.gif"></div>');
	}
	FavoriteObjFlg = true;
	
	//お気に入りリスト商品表示処理
	$.ajax({
		type: "GET",
		url: uri,
		cache: false,
		dataType: "xml",
		success: function(data) {
			var status = $(data).find("SR_KEK_STAT").text();
			var prev = $(data).find("PREV_PAGE_HYJKBN").text();
			var next = $(data).find("NEXT_PAGE_HYJKBN").text();
			if (status == '0') {
				FavoriteObjFlg = false;
				//お気に入りリスト商品をHTMLタグと整合する
				favoriteInfo = '';
				favoriteInfo += "<p class=\"favorite-area__ttl\">お気に入りリスト</p>";
				favoriteInfo += "<div class=\"favorite-area__btn\">";
				favoriteInfo += "<a href=\"" + SSLServletURL + "/EPFB00/EPFB0050/dFavorLstShow?BELN_SHOP_KBN=" + belnShopKbn + "\">";
				favoriteInfo += "<img src=\"" +imgPass + "mypage/favorite-area_btn01.png\" width=\"152\" height=\"30\" alt=\"お気に入りリスト\"></a></div>";
				favoriteInfo += "<div class=\"favorite-area__wrap\" id=\"favorite-area__wrap\">";
				favoriteInfo += "<div class=\"favorite-area__slider\" id=\"favorite-area__slider\">";
				favoriteInfo += "<ul class=\"clearfix\">";
				
				var i =1;
				$(data).find("FAVORITE_LIST_ITEM").each(function(){
					var shn_img_url = $(this).find("SHN_IMG_M_URL").text();
					var sh_link_url = $(this).find("SH_LINK_URL").text();
					var shnnm = $(this).find("SHNNM").text().replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
					var kakk = $(this).find("KAKK").text();
					favoriteInfo += "<li class=\"item item" + i +"\">";
					if (sh_link_url.length > 0){
						favoriteInfo += "<div class=\"img\"><a href=\"" + sh_link_url + "\"><img src=\"" + shn_img_url + "\" width=\"140\" height=\"140\"  alt=\"\"></a></div>";
						favoriteInfo += "<p class=\"name\"><a href=\"" + sh_link_url + "\">" + shnnm + "</a></p>";
					} else {
						favoriteInfo += "<div class=\"img\"><img src=\"" + shn_img_url + "\" width=\"140\" height=\"140\"  alt=\"\"></div>";
						favoriteInfo += "<p class=\"name\">" + shnnm + "</p>";
					}
					favoriteInfo += "<p class=\"price\">" + kakk + "</p>";
					favoriteInfo += "</li>";
					i++;
				});
				favoriteInfo += "</ul>";
				if (prev == "1") {
					favoriteInfo += "<div class=\"btn-prev\"><a href=\"javascript:void(0);\" onclick=\"favoritePageNum--;FavoriteObjload(" + belnShopKbn +", 4, favoritePageNum);\">";
					favoriteInfo += "<img src=\"" +imgPass + "mypage/send_prev.png\" width=\"30\" height=\"30\" alt=\"<\"></a></div>";
				} else {
					favoriteInfo += "<div class=\"btn-prev2\"><img src=\"" +imgPass + "mypage/send_prev2.png\" width=\"30\" height=\"30\" alt=\"<\"></div>";
				}
				if (next == "1") {
					favoriteInfo += "<div class=\"btn-next\"><a href=\"javascript:void(0);\" onclick=\"favoritePageNum++;FavoriteObjload(" + belnShopKbn +", 4, favoritePageNum);\">";
					favoriteInfo += "<img src=\"" +imgPass + "mypage/send_next.png\" width=\"30\" height=\"30\" alt=\">\"></a></div>";
				} else {
					favoriteInfo += "<div class=\"btn-next2\"><img src=\"" +imgPass + "mypage/send_next2.png\" width=\"30\" height=\"30\" alt=\">\"></div>";
				}
				favoriteInfo += "</div>";
				favoriteInfo += "</div>";
				if (favoriteInfo != "") {
					$("#favorite-area").empty();
					$("#favorite-area").html(favoriteInfo);
				}
				success = true;
			} else {
				favoriteInfo = '';
				favoriteInfo += "<p class=\"favorite-area__ttl\">お気に入りリスト</p>";
				favoriteInfo += "<p class=\"favorite-area__none\">お気に入りリストに商品がある場合、商品を表示いたします。</p>";
				if (favoriteInfo != "") {
					 $("#favorite-area").html(favoriteInfo);
				}
				FavoriteObjFlg = false;
			}
		},
		error: function() {
			FavoriteObjFlg = false;
		}
	});
}

/* 修正 150320brs1 TAM ココまで */
/* 修正 150310brs1 TAM ココまで */

// AMSオーダー情報入力フロー改善 add start 2016/02/25
// URLパラメータ値取得処理
function getUrlValue(url, param) {
    var value = '';
    if (url.indexOf(param) != -1) {
	    var hashes = url.slice(url.indexOf('?') + 1).split('&');
	    for (var i = 0; i < hashes.length; i++) {
	        hash = hashes[i].split('=');
	        if (param == hash[0]) {
	        	value = hash[1];
	        	break;
	        }
	    }
	}
    return value;
}
// AMSオーダー情報入力フロー改善 add end   2016/02/25
