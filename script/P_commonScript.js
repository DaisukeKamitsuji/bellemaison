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
	// ���L�擾���W�b�N���C�� 2009/9/8
	Reg=bnk_pagenum.match(/(.*)\/(\d{1,3})/);
	// ��L�擾���W�b�N���C�� 2009/9/8
	bnk = (RegExp.$1)
	pagenum = (RegExp.$2)
	// ���L�y�[�W�ԍ��⊮���W�b�N��ǉ� 2009/9/8
	cnt_kspg = pagenum.length;
	if( cnt_kspg == 1 ){
		pagenum = "00" + pagenum;
	}else if( cnt_kspg == 2 ){
		pagenum = "0" + pagenum;
	}
	// ��L�y�[�W�ԍ��⊮���W�b�N��ǉ� 2009/9/8
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
//��20130226 AMS �ǉ� start��
		case 7:
			width = "700";
			height = "660";
			break;
//��20130226 AMS �ǉ� end��
//��20130917 AMS �ǉ� start��
		case 8:
			width = "800";
			height = "560";
			break;
//��20130917 AMS �ǉ� end��
//��20141219 AMS �ǉ� start��
                case 9:
                        width = "750";
                        height = "560";
                        break;
//��20141219 AMS �ǉ� end��
//��20150126 AMS �ǉ� start��
		case 10:
			width = "820";
			height = "480";
			break;
//��20150126 AMS �ǉ� end��
/* �C�� 151130brs1 TAM �R�R���� */
		case 11:
			width = "940";
			height = "600";
			break;
/* �C�� 151130brs1 TAM �R�R�܂� */
	}
	
	if(width != 0 && height != 0){
		window.open(url, winname, "width=" + width + ", height=" + height + ", " + opt).focus();
	}
}
var proInfoList = new Array(8);
//��20120112 AMS �ύX start��
var belnShopKbnList = new Array(6);
var katBtgoList = new Array(6);
var nameList = new Array(6);
var kakkList = new Array(6);
var iPathList = new Array(6);
var giftImgList = new Array(6);
//��20110215 AMS �ǉ� start��
var mnzkdHknTnList = new Array(6);
var soKqList = new Array(6);
//��20110215 AMS �ǉ� end��
//��20120112 AMS �ύX end��
var KEY_1 = "..";
var KEY_2 = "__";
//��20130325 AMS �ǉ� start��
var KEY_3 = "_";
//��20130325 AMS �ǉ� end��
var DIV_FRAME_NAME = "iframeDisplay";
var DIV_NAME = "item";
var DIV_LINE_NAME = "line";
var DELETE_IDX = "1";
var IMG_WIDTH = "80";
var IMG_HEIGHT = "80";
var COOKIE_DATA_PRO = "90";
var COOKIE_DATA_RRK = "365";
//��20130212 AMS �ǉ� start��
var COOKIE_DATA_TT = "730";
//��20130212 AMS �ǉ� end��
var BLANK = "blank";
var PRO_URL = "/ep/srvlt/EPFB00/EPFB0005/dProdDtlShow";;
var PRO_URL_MC = "/ep/srvlt/EPFM00/EPFM0002/dProdDtlMcShow";
var MC_SHOP_KBN = "200";
var proUrlDomain = "";
var EPFB00_IMG_WIDTH = "100";
var EPFB00_IMG_HEIGHT = "100";
//��20130212 AMS �ǉ� start��
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
//��20130212 AMS �ǉ� end��
//��20110215 AMS �ύX start��
//function insertCookie(belnShopKbn,katBtgo,name,kakk,iPath,gift,imgPass) {
//��20110215 AMS �ύX replace��
//��20110215 AMS �ύX end��
//��20110930 AMS �ύX start��
//function insertCookie(belnShopKbn,katBtgo,name,kakk,iPath,gift,imgPass,mnzkdHknTn,soKq) {
//��20110930 AMS �ύX replace��
function insertCookie(belnShopKbn,katBtgo,name,kakk,iPath,gift,imgPass,mnzkdHknTn,soKq,domain) {
//��20110930 AMS �ύX end��
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
//��20130325 AMS �ύX start��
				mnzkdHknTnList = proInfoList[6].split(KEY_2);
				soKqList = proInfoList[7].split(KEY_2);
//��20130325 AMS �ύX end��
				//��20110215 AMS �ǉ� start��
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
				//��20110215 AMS �ǉ� end��
				//��20110215 AMS �ύX start��
				//setData(belnShopKbnList,katBtgoList,nameList,kakkList,iPathList,giftImgList,imgPass);
				//��20110215 AMS �ύX replace��
				//��20110215 AMS �ύX end��
				//��20110930 AMS �ύX start��
				//setData(belnShopKbnList,katBtgoList,nameList,kakkList,iPathList,giftImgList,imgPass,mnzkdHknTnList,soKqList);
				//��20110930 AMS �ύX replace��
				setData(belnShopKbnList,katBtgoList,nameList,kakkList,iPathList,giftImgList,imgPass,mnzkdHknTnList,soKqList,domain);
				//��20110930 AMS �ύX end��
			} else {
				frameDiv.innerHTML = "";
			}
		}
		//��20110215 AMS �ύX start��
		//setCookie("",belnShopKbn,katBtgo,name,kakk,iPath,gift);
		//��20110215 AMS �ύX replace��
		setCookie("",belnShopKbn,katBtgo,name,kakk,iPath,gift,mnzkdHknTn,soKq);
		//��20110215 AMS �ύX end��
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
//��20110215 AMS �ύX start��
//function setData(belnShopKbnList,katBtgoList,nameList,kakkList,iPathList,giftList,imgPass) {
//��20110215 AMS �ύX replace��
//��20110215 AMS �ύX end��
//��20110930 AMS �ύX start��
//function setData(belnShopKbnList,katBtgoList,nameList,kakkList,iPathList,giftList,imgPass,mnzkdHknTnList,soKqList) {
//��20110930 AMS �ύX replace��
function setData(belnShopKbnList,katBtgoList,nameList,kakkList,iPathList,giftList,imgPass,mnzkdHknTnList,soKqList,domain) {
//��20110930 AMS �ύX end��
	proCnt = katBtgoList.length;
	for (i=0;i < proCnt; i++ ) {
		//��20110302 AMS �ύX start��
		//var elemName = document.getElementById("name"+ i);
		//elemName.innerHTML = nameList[i] + "<br/>" + kakkList[i];
		//��20110302 AMS �ύX replace��
		var kakkDiv = document.getElementById("kakk"+ i);
		var elemName = document.getElementById("name"+ i);;
		if(kakkDiv == null){
			//��20111216 AMS �ύX start��
			//elemName.innerHTML = nameList[i] + "<br/>" + kakkList[i];
			//��20111216 AMS �ύX replace��
			//��20120112 AMS �ǉ� start��
			if(elemName != null){
			//��20120112 AMS �ǉ� end��
				if (belnShopKbnList[i] == MC_SHOP_KBN) {
					elemName.innerHTML = nameList[i] + "<br/>" + kakkList[i];
				} else {
					elemName.innerHTML = nameList[i] + "<br/>" + kakkList[i].replace(/\(�{��.*\)/,"(�ō�)");
				}
			}
		} else {
			elemName.innerHTML = nameList[i];
			//��20111216 AMS �ύX start��
			//kakkDiv.innerHTML = "<br/>" + kakkList[i];
			//��20111216 AMS �ύX replace��
			//��20120112 AMS �ǉ� start��
			if(elemName != null){
			//��20120112 AMS �ǉ� end��
				if (belnShopKbnList[i] == MC_SHOP_KBN) {
					kakkDiv.innerHTML = "<br/>" + kakkList[i];
				} else {
					kakkDiv.innerHTML = kakkList[i].replace(/\(�{��.*\)/,"(�ō�)");
				}
			}
		}
		//��20110302 AMS �ύX end��
		var image = document.images["img" + i];
		//��20110930 AMS �ύX start��
		//image.src = iPathList[i];
		//��20110930 AMS �ύX replace��
		//��20120112 AMS �ǉ� start��
		if(image != null){
		//��20120112 AMS �ǉ� end��
			image.src = domain + iPathList[i];
			//��20110930 AMS �ύX end��
			//��20120201 AMS �ύX start��
			if (belnShopKbnList[i] == MC_SHOP_KBN) {
				image.height = IMG_HEIGHT;
				image.width = IMG_WIDTH;
			} else {
				image.height = EPFB00_IMG_HEIGHT;
				image.width = EPFB00_IMG_WIDTH;
			}
			//��20120201 AMS �ύX end��
		}
		if (belnShopKbnList[i] == MC_SHOP_KBN) {
			PRO_URL = PRO_URL_MC;
			//��20110215 AMS �ǉ� start��
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
			//��20110215 AMS �ǉ� end��
		}
		//��20120112 AMS �ǉ� start��
		if(elemName != null){
		//��20120112 AMS �ǉ� end��
			elemName.href = proUrlDomain + PRO_URL + "?BELN_SHOP_KBN=" + belnShopKbnList[i] + "&KAT_BTGO=" + katBtgoList[i] + "&SHNCRTTKKRO_KBN=E1";
		}
		var link = document.getElementById("link" + i);
		//��20120112 AMS �ǉ� start��
		if(link != null){
		//��20120112 AMS �ǉ� end��
			link.href = proUrlDomain + PRO_URL + "?BELN_SHOP_KBN=" + belnShopKbnList[i] + "&KAT_BTGO=" + katBtgoList[i] + "&SHNCRTTKKRO_KBN=E1";
		}
		//��20110215 AMS �폜 start��
		//var giftMark = giftList[i];
		//if ( giftMark == BLANK ) {
		//	var giftDivName = document.getElementById("giftMarkDiv" + i);
		//	giftDivName.removeChild(giftDivName.firstChild);
		//} else {
		//	var giftImage = document.images["giftMark" + i];
		//	giftImage.src = imgPass + giftList[i];
		//}
		//��20110215 AMS �폜 end��
		//��20110215 AMS �ǉ� start��
		var mnzkdHknTnDiv = document.getElementById("mnzkdHknTnMarkDiv" + i);
		if (mnzkdHknTnDiv != null) {
//��20130325 AMS �폜 start��
//			if (belnShopKbnList[i] == MC_SHOP_KBN && soKqList[i] < 5) {
//
//				mnzkdHknTnDiv.removeChild(mnzkdHknTnDiv.firstChild);
//
//			} else {
//��20130325 AMS �폜 end��
				if(mnzkdHknTnList[i] != null && mnzkdHknTnList[i] != "" && soKqList[i] != null && soKqList[i] != "" && soKqList[i] > 0) {
					var strBuff = "<img src=\"" + imgPass + "star/star_icon_" + mnzkdHknTnList[i]*10 + ".gif" + "\" />";
					strBuff    += "&nbsp;(" + soKqList[i] + ")";
					strBuff    += "<br />";
					mnzkdHknTnDiv.innerHTML = strBuff;
				}
//��20130325 AMS �폜 start��
//			}
//��20130325 AMS �폜 end��
		}
		//��20110215 AMS �ǉ� end��
	}
	
	//��20120112 AMS �ǉ� start��
	if (belnShopKbnList[0] == MC_SHOP_KBN) {
		var Cnt = 5;
	} else {
		var Cnt = 6;
	}
	//��20120112 AMS �ǉ� end��
	
	for (i=0;i < Cnt; i++) {
		if (proCnt <= i || (katBtgoList[0] == null || katBtgoList[0] == "")) {
			var div = document.getElementById(DIV_NAME + i);
			while ( div.hasChildNodes() ) {
				div.removeChild(div.firstChild);
			}	
		}
		//��20120112 AMS �폜 start��
		//if (i != 4 && (proCnt-1 <= i || katBtgoList[0] == null || katBtgoList[0] == ""))  {
		//	var divline = document.getElementById(DIV_LINE_NAME + i);
		//	divline.removeChild(divline.firstChild);
		//}
		//��20120112 AMS �폜 end��
	}
}
//��20110215 AMS �ύX start��
//function setCookie(readRrkFlg,belnShopKbn,katBtgo,name,kakk,iPath,gift) {
//��20110215 AMS �ύX replace��
function setCookie(readRrkFlg,belnShopKbn,katBtgo,name,kakk,iPath,gift,mnzkdHknTn,soKq) {
//��20110215 AMS �ύX end��
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
	//��20110215 AMS �ǉ� start��
	tempMnzkdHknTn = mnzkdHknTn;
	tempSoKq = soKq;
	//��20110215 AMS �ǉ� end��
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
//��20130325 AMS �ύX start��
//			//��20110215 AMS �ǉ� start��
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
//			//��20110215 AMS �ǉ� end��
//��20130325 AMS �ύX end��
			cnt = katBtgoList.length;
			for ( i=0; i < cnt; i++ ) {
				if ( katBtgo == katBtgoList[i]) {
					proFlg = true;
					break;
				}
			}
			
			//��20120112 AMS �ǉ� start��
			if (belnShopKbn == MC_SHOP_KBN) {
				var max = 5;
			} else {
				var max = 6;
			}
			//��20120112 AMS �ǉ� start��
			
			if( proFlg == false ) {
				//��20120112 AMS �ύX start��
				if ( max <= cnt ) {
					for ( i=0; i < max-1; i++ ) {
				//��20120112 AMS �ύX end��
						tempBelnShopKbn = tempBelnShopKbn + KEY_2 + belnShopKbnList[i];
						tempKatBtgo = tempKatBtgo + KEY_2 + katBtgoList[i];
						tempName = tempName + KEY_2 + nameList[i];
						tempKakk = tempKakk + KEY_2 + kakkList[i];
						tempIPath = tempIPath + KEY_2 + iPathList[i];
						tempGift = tempGift + KEY_2 + giftList[i];
						//��20110215 AMS �ǉ� start��
						tempMnzkdHknTn = tempMnzkdHknTn + KEY_2 + mnzkdHknTnList[i];
						tempSoKq = tempSoKq + KEY_2 + soKqList[i];
						//��20110215 AMS �ǉ� end��
					}
				} else {
					for ( i=0; i < cnt; i++ ) {
						tempBelnShopKbn = tempBelnShopKbn + KEY_2 + belnShopKbnList[i];
						tempKatBtgo = tempKatBtgo + KEY_2 + katBtgoList[i];
						tempName = tempName + KEY_2 + nameList[i];
						tempKakk = tempKakk + KEY_2 + kakkList[i];
						tempIPath = tempIPath + KEY_2 + iPathList[i];
						tempGift = tempGift + KEY_2 + giftList[i];
						//��20110215 AMS �ǉ� start��
						tempMnzkdHknTn = tempMnzkdHknTn + KEY_2 + mnzkdHknTnList[i];
						tempSoKq = tempSoKq + KEY_2 + soKqList[i];
						//��20110215 AMS �ǉ� end��
					}
				}
			}
		}
		var proInfo = tempProInfo;
		if ( proFlg == false ) {
			//��20110215 AMS �ύX start��
			//proInfo = tempBelnShopKbn + KEY_1 + tempKatBtgo + KEY_1 + tempName + KEY_1 + tempKakk + KEY_1 + tempIPath + KEY_1 + tempGift;
			//��20110215 AMS �ύX replace��
			proInfo = tempBelnShopKbn + KEY_1 + tempKatBtgo + KEY_1 + tempName + KEY_1 + tempKakk + KEY_1 + tempIPath + KEY_1 + tempGift + KEY_1 + tempMnzkdHknTn + KEY_1 + tempSoKq;
			//��20110215 AMS �ύX end��
		}
		cookieWrite("RRKSGNFLG", readRrkFlg, COOKIE_DATA_RRK);	
	}
	if (belnShopKbn == MC_SHOP_KBN) {
		cookieWrite("RRKPROD_MC", proInfo, COOKIE_DATA_PRO);
	} else {
		cookieWrite("RRKPROD", proInfo, COOKIE_DATA_PRO);
	}
}
//��20130212 AMS �ǉ� start��
function setTtInfoCookie(ctgrId) {
	var ttInfoPer = cookieRead("TTINFOPER");
	var name = "lastseenitemcat"; //�L�[�l
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
//��20130212 AMS �ǉ� end��
//��20130418 AMS �ǉ� start��
function setTtInfoCookieSmlcat(shCtgrId) {
	if(shCtgrId != ""){
		var ttInfoPer = cookieRead("TTINFOPER");
		var name = "lastseensmlcat"; //�L�[�l
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
//��20130418 AMS �ǉ� end��
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
    //mac�̏ꍇ
    location.href = encodeutf8;
  }else{
    //mac�ȊO�̏ꍇ
   location.href = encodeShiftjis;
  }
}
// ----------------------------------------------------
// add 20091105
//  ���i�n�ŗ�����\������ۂ̏�������
//     �ԋp�l�FHTML
// ----------------------------------------------------
//��20110930 AMS �ύX start��
//function epfb00_initCookie(imgPass,belnShopKbn) {
//��20110930 AMS �ύX replace��
function epfb00_initCookie(imgPass,belnShopKbn,domain) {
//��20110930 AMS �ύX end��
	var readRrkFlg  = cookieRead("RRKSGNFLG");
	//��20111006 AMS �ǉ� start��
	if ( domain == undefined ) {
		domain = "";
	}
	//��20111006 AMS �ǉ� end��
	//��20111012 AMS �ǉ� start��
	if ( belnShopKbn == MC_SHOP_KBN ) {
		domain = "";
	}
	//��20111012 AMS �ǉ� end��
	if ( readRrkFlg == DELETE_IDX ) {
		var frameDiv = document.getElementById(DIV_FRAME_NAME);
		frameDiv.innerHTML = "";
		epfb00_imgCheck(DELETE_IDX,imgPass);
	} else {
		// ���i������\��
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
				//��20110215 AMS �ǉ� start��
//��20130325 AMS �ύX end��
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
//��20130325 AMS �ύX end��
				//��20110215 AMS �ǉ� end��
				//��20110215 AMS �ύX start��
				//epfb00_setData(belnShopKbnList,katBtgoList,nameList,kakkList,iPathList,giftImgList,imgPass);
				//��20110215 AMS �ύX replace��
				//��20110215 AMS �ύX end��
				//��20110930 AMS �ύX start��
				//epfb00_setData(belnShopKbnList,katBtgoList,nameList,kakkList,iPathList,giftImgList,imgPass,mnzkdHknTnList,soKqList);
				//��20110930 AMS �ύX replace��
				epfb00_setData(belnShopKbnList,katBtgoList,nameList,kakkList,iPathList,giftImgList,imgPass,mnzkdHknTnList,soKqList,domain);
				//��20110930 AMS �ύX end��
			} else {
				frameDiv.innerHTML = "";
			}
		}
		epfb00_imgCheck("",imgPass);
	}
}
// ----------------------------------------------------
// add 20091105
//  ���i�n�ŗ������w�c���x�{�^����������
//     �ԋp�l�FHTML
// ----------------------------------------------------
function epfb00_DisplayCookie(imgPass,belnShopKbn) {
	cookieWrite("RRKSGNFLG", "", COOKIE_DATA_RRK);
	epfb00_imgCheck("",imgPass);
}
// ----------------------------------------------------
// add 20091105
//  ���i�n�ŗ����́w�c���Ȃ��x�{�^����������
//     �ԋp�l�FHTML
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
//  ���i�n�ŗ����̉摜�`�F�b�N����
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
//  ���i�n�ŗ�����Cookie��ݒ菈��
// ----------------------------------------------------
//��20110215 AMS �ύX start��
//function epfb00_setData(belnShopKbnList,katBtgoList,nameList,kakkList,iPathList,giftList,imgPass) {
//��20110215 AMS �ύX replace��
//��20110215 AMS �ύX end��
//��20110930 AMS �ύX start��
//function epfb00_setData(belnShopKbnList,katBtgoList,nameList,kakkList,iPathList,giftList,imgPass,mnzkdHknTnList,soKqList) {
//��20110930 AMS �ύX replace��
//function epfb00_setData(belnShopKbnList,katBtgoList,nameList,kakkList,iPathList,giftList,imgPass,mnzkdHknTnList,soKqList,domain) {
//��20110930 AMS �ύX end��
//��20130325 AMS �ύX start��
function epfb00_setData(belnShopKbnList,katBtgoList,nameList,kakkList,iPathList,giftList,imgPass,mnzkdHknTnList,soKqList,domain,zkmflg) {
//��20130325 AMS �ύX end��
	proCnt = katBtgoList.length;
	
	//��20110118 AMS �ύX start��
	if(proCnt > 5){
		proCnt = 5;
	}
	//��20110118 AMS �ύX end��
	
	for (i=0;i < proCnt; i++ ) {
		//��20110302 AMS �ύX start��
		//var elemName = document.getElementById("name"+ i);
		//elemName.innerHTML = nameList[i] + "<br/>" + kakkList[i];
		//��20110302 AMS �ύX replace��
		var kakkDiv = document.getElementById("kakk"+ i);
		var elemName = document.getElementById("name"+ i);;
		if(kakkDiv == null){
			elemName.innerHTML = nameList[i] + "<br/>" + kakkList[i];
		} else {
			elemName.innerHTML = nameList[i];
//��20130325 AMS �ύX start��
			if (zkmflg == "1") {
				kakkList[i] = kakkList[i].replace("<BR>","");
				kakkDiv.innerHTML = kakkList[i].replace(/\(�{��.*\)/,"(�ō�)");
			} else {
				kakkDiv.innerHTML = kakkList[i];
			}
//��20130325 AMS �ύX end��
		}
		//��20110302 AMS �ύX end��
		var image = document.images["img" + i];
		//��20110930 AMS �ύX start��
		//image.src = iPathList[i];
		//��20110302 AMS �ύX replace��
		image.src = domain + iPathList[i];
		//��20110302 AMS �ύX end��
		image.height = EPFB00_IMG_HEIGHT;
		image.width = EPFB00_IMG_WIDTH;
		if (belnShopKbnList[i] == MC_SHOP_KBN) {
			PRO_URL = PRO_URL_MC;
		}
		elemName.href = proUrlDomain + PRO_URL + "?BELN_SHOP_KBN=" + belnShopKbnList[i] + "&KAT_BTGO=" + katBtgoList[i] + "&SHNCRTTKKRO_KBN=E1";
		var link = document.getElementById("link" + i);
		link.href = proUrlDomain + PRO_URL + "?BELN_SHOP_KBN=" + belnShopKbnList[i] + "&KAT_BTGO=" + katBtgoList[i] + "&SHNCRTTKKRO_KBN=E1";
		//��20110215 AMS �ύX start��
		var giftDivName = document.getElementById("giftMarkDiv" + i);
		if( giftDivName != null && giftDivName != "" ){
			giftDivName.removeChild(giftDivName.firstChild);
		}
		var mnzkdHknTnDiv = document.getElementById("mnzkdHknTnMarkDiv" + i);
		if (mnzkdHknTnDiv != null) {
//��20130325 AMS �폜 end��
//
//			if (belnShopKbnList[i] == MC_SHOP_KBN && soKqList[i] < 5) {
//
//				mnzkdHknTnDiv.removeChild(mnzkdHknTnDiv.firstChild);
//
//			} else {
//			
//��20130325 AMS �폜 end��
				if(mnzkdHknTnList[i] != null && mnzkdHknTnList[i] != "" && soKqList[i] != null && soKqList[i] != "" && soKqList[i] > 0) {
					var strBuff = "<img src=\"" + imgPass + "star/star_icon_" + mnzkdHknTnList[i]*10 + ".gif" + "\" />";
					strBuff    += "&nbsp;(" + soKqList[i] + ")";
					strBuff    += "<br />";
					mnzkdHknTnDiv.innerHTML = strBuff;
				}
//��20130325 AMS �폜 start��
//			}
//��20130325 AMS �폜 end��
		}
		//��20110215 AMS �ǉ� end��
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
// �t�q�k�ɕt������Ă���p�����[�^���擾
//   �߂�l�F�z��(KEY=�p�����[�^��,VALUE=�w�肳�ꂽ�l)
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
// ���i�J�[�g�ǉ��o�H�敪���p�����[�^���擾
// (�p�����[�^�ɑ��݂��Ȃ��ꍇ�́A�u�����Ȃ�)
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
// [�T�v]
// EPFB0050(���C�ɓ��胊�X�g)�ɑJ��
// URL�ɕ\�����Ă��鏤�i�J�[�g�ǉ��o�H�敪�̒l��ǉ�
// ----------------------------------------------------
function epfb00_ShnCrtKkroKbnOlstSni(url){
	// ���i�J�[�g�ǉ��o�H�敪��ǉ�
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
// ���i�ڍׂ́w�݌ɁE���i���`�F�b�N����x�{�^���̎���
// ----------------------------------------------------
function epfb00_shnshsOpenSubWinFocuShnCrtKkroKbn(url,windowId, ptn){
	// ���i�J�[�g�ǉ��o�H�敪��ǉ�
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
		/* AMS�I�[�_�[�����̓t���[���P add start 2016/02/25 */
		case 6:
			width = "940";
			height = "600";
			break;
		/* AMS�I�[�_�[�����̓t���[���P add end   2016/02/25 */
	}
	window.open(url, winname, "width=" + width + ", height=" + height + ", " + opt).focus();
}
// ----------------------------------------------------
// add 20130212
// initCookie2New�iMC�p�j
// ----------------------------------------------------
//��20130325 AMS �ύX start��
function initCookie2New(belnShopKbn,katBtgo,name,kakk,iPath,gift,imgPass,mnzkdHknTn,soKq,baseurl,nonSSLServletURL,ctgrId) {
//function initCookie2New(belnShopKbn,katBtgo,name,kakk,iPath,gift,imgPass,baseurl,nonSSLServletURL,ctgrId) {
//��20130325 AMS �ύX end��
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
//��20130325 AMS �ύX start��
		insertCookie(belnShopKbn,katBtgo,name,kakk,iPath,gift,imgPass,mnzkdHknTn,soKq,"");
		//insertCookie(belnShopKbn,katBtgo,name,kakk,iPath,gift,imgPass,"","","");
//��20130325 AMS �ύX end��
	}
	// �J�[�g�{�^���\������
	setCartBtnHtml(imgPass,belnShopKbn,nonSSLServletURL);
	setTtInfoCookie(ctgrId);
}
// ----------------------------------------------------
// add 20100415
// �J�[�g�{�^���\�������iMC�p�j
//     �ԋp�l�FHTML
// ----------------------------------------------------
function setCartBtnHtml(imgPass,belnShopKbn,nonSSLServletURL) {
    var cartBtnDiv = document.getElementById("cartBtnDiv");
    var grpMbrkbn = cookieRead("GRPMBRKBN");
    grpCartImgPass =imgPass + 'epfm_btn_cart_3.jpg' ;
    kjnCartImgPass =imgPass + 'epfm_btn_cart_4.jpg' ;
    cartImgPass =imgPass + 'epfm_btn_cart_2.jpg' ;
    kjnCartLink = "<a href= \"javascript:void(0)\" onclick=\"javascript:cartAddByShnDtl(\'" + belnShopKbn +"\',\'" + nonSSLServletURL + "/EPFM00/EPFM0002/dPrdDtlMcCrtAdd?\');return false;\">" ;
    if ( grpMbrkbn == null || grpMbrkbn != "" ) {
        cartBtnDiv.innerHTML="<table width='390' border='0' cellspacing='0' cellpadding='0'><tr><td width='120'>&nbsp;</td><td height='50' align='left' valign='middle'><input type='image' name='ACT_dPrdDtlGrpCrtAdd' src='" + grpCartImgPass + "' alt='�O���[�v�̃J�[�g�ɓ����' border='0'></td></tr></table><table width='390' border='0' cellspacing='0' cellpadding='0'><tr><td width='120'>&nbsp;</td><td height='50' align='left' valign='top'>" + kjnCartLink + "<img src='" + kjnCartImgPass + "' alt='�l�̃J�[�g�ɓ����' border='0'></a></td></tr></table>";
    } else {
        cartBtnDiv.innerHTML="<table width='390' border='0' cellspacing='0' cellpadding='0'><tr><td width='120'>&nbsp;</td><td height='50' align='left' valign='top'>" + kjnCartLink + "<img src='" + cartImgPass + "' alt='�J�[�g�ɓ����' border='0'></a></td></tr></table>";
    }
}
// ----------------------------------------------------
// add 20110224
//  ���J�e�ŗ�����\������ۂ̏�������
//     �ԋp�l�FHTML
// ----------------------------------------------------
//��20110930 AMS �ύX start��
//function epfb00_initCookie_ch_cate(imgPass,belnShopKbn) {
//��20130325 AMS �ύX start��
//��20110930 AMS �ύX replace��
//function epfb00_initCookie_ch_cate(imgPass,belnShopKbn,domain) {
function epfb00_initCookie_ch_cate(imgPass,belnShopKbn,domain,zkmflg) {
//��20110930 AMS �ύX end��
//��20130325 AMS �ύX end��
	var readRrkFlg  = cookieRead("RRKSGNFLG");
	
	if ( readRrkFlg == DELETE_IDX ) {
		var frameDiv = document.getElementById(DIV_FRAME_NAME);
		frameDiv.innerHTML = "";
		epfb00_imgCheck_ch_cate(DELETE_IDX,imgPass);
	} else {
		// ���i������\��
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
//��20130325 AMS �ύX start��
				mnzkdHknTnList = proInfoList[6].split(KEY_2);
				soKqList = proInfoList[7].split(KEY_2);
//				//��20110215 AMS �ǉ� start��
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
//				//��20110215 AMS �ǉ� end��
//��20130325 AMS �ύX start��
				//��20110215 AMS �ύX start��
				//epfb00_setData(belnShopKbnList,katBtgoList,nameList,kakkList,iPathList,giftImgList,imgPass);
				//��20110215 AMS �ύX replace��
				//��20110215 AMS �ύX end��
				//��20110930 AMS �ύX start��
				//epfb00_setData(belnShopKbnList,katBtgoList,nameList,kakkList,iPathList,giftImgList,imgPass,mnzkdHknTnList,soKqList);
				//��20110930 AMS �ύX replace��
//��20130325 AMS �ύX start��
//				epfb00_setData(belnShopKbnList,katBtgoList,nameList,kakkList,iPathList,giftImgList,imgPass,mnzkdHknTnList,soKqList,domain);
				epfb00_setData(belnShopKbnList,katBtgoList,nameList,kakkList,iPathList,giftImgList,imgPass,mnzkdHknTnList,soKqList,domain,zkmflg);
//��20130325 AMS �ύX end��
				//��20110930 AMS �ύX end��
			} else {
				frameDiv.innerHTML = "";
			}
		}
		epfb00_imgCheck_ch_cate("",imgPass);
	}
}
// ----------------------------------------------------
// add 20110224
//  ���J�e�ŗ������w�c���x�{�^����������
//     �ԋp�l�FHTML
// ----------------------------------------------------
function epfb00_DisplayCookie_ch_cate(imgPass,belnShopKbn) {
	cookieWrite("RRKSGNFLG", "", COOKIE_DATA_RRK);
	epfb00_imgCheck_ch_cate("",imgPass);
}
// ----------------------------------------------------
// add 20110224
//  ���J�e�ŗ����́w�c���Ȃ��x�{�^����������
//     �ԋp�l�FHTML
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
//  ���J�e�ŗ����̉摜�`�F�b�N����
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
//  ���J�e���i��������̂�������
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
//��20110302 AMS �ǉ� start��
// ----------------------------------------------------
// add 20110302
// [�T�v]
// �e��ʂ�(���C�ɓ��胊�X�g or ���i�ڍ�)�ɑJ��
// URL�ɕ\�����Ă��鏤�i�J�[�g�ǉ��o�H�敪�̒l��ǉ�
// ----------------------------------------------------
function epfb00_ShnCrtKkroKbnOlstSniToParent(url){
	// ���i�J�[�g�ǉ��o�H�敪��ǉ�
	var strShncrttkkroKbn=document.form01.SHNCRTTKKRO_KBN.value;
	url=url+"&SHNCRTTKKRO_KBN="
	if (strShncrttkkroKbn!='' && strShncrttkkroKbn!=null) {
		url=url+strShncrttkkroKbn;
	} else {
		url=url+"0H"
	}
	parent.location.href=url
}
//��20110302 AMS �ǉ� end��
//��20110311 AMS �ǉ� start��
function sbrkmSearch(name, sniSkUrl){
	var searchParam = "";
	var actId = "";
	if(name == "taisho"){
		var taishoCnt = document.taishoform.getElementsByTagName("li");
		// �Ώۏ��i
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
		// �f�ڃJ�^���O
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
		// �F
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
	//��20120316 AMS �ǉ� start��
	//�u�����h�p�ꖼ��"bland"�͊ԈႢ�̂ŁA���L��"brand"�𗘗p
	//��20120316 AMS �ǉ� end��
	} else if(name == "bland"){
		var blandCnt = document.blandform.getElementsByTagName("li");
		// �u�����h
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
	//��20120316 AMS �ǉ� start��
	} else if(name == "brand"){
		var brandCnt = document.brandform.getElementsByTagName("li");
		// �u�����h
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
	//��20120316 AMS �ǉ� end��
	} else if(name == "size"){
		var sizeCnt = document.sizeform.getElementsByTagName("li");
		// �T�C�Y
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
		//��20120323 AMS �ǉ� start��
	} else if(name == "kakk_hni"){
		actId = sniSkUrl;
		var kakk_hnist1 = document.kakkform.KAKK_HNIST1.value;
		var kakk_hnist2 = document.kakkform.KAKK_HNIST2.value;
		
		// ���i�����ݒ藓���u�����N�ł͂Ȃ��ꍇ�p�����[�^�ɕt�^
		if (kakk_hnist1 != '') {
			actId = actId + "&KAKK_HNIST1=" + kakk_hnist1;
		}
		// ���i����ݒ藓���u�����N�ł͂Ȃ��ꍇ�p�����[�^�ɕt�^
		if (kakk_hnist2 != '') {
			actId = actId + "&KAKK_HNIST2=" + kakk_hnist2;
		}
	}
		//��20120323 AMS �ǉ� end��
	location.href = actId;
}
//��20110311 AMS �ǉ� end��

//��20130611 AMS �ǉ� start��
function sbrkmSearchUk(name, sniSkUrl){
	var searchParam = "";
	var actId = "";

	if(name == "taisho"){
		var taishoCnt = document.taishoform.getElementsByTagName("li");
		// �Ώۏ��i
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
		// �f�ڃJ�^���O
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
		// �F
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
		// �u�����h
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
		// �T�C�Y
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
		
		// ���i�����ݒ藓���u�����N�ł͂Ȃ��ꍇ�p�����[�^�ɕt�^
		if (kakk_hnist1 != '') {
			actId = actId + "&PL=" + EscapeSJIS(kakk_hnist1);
		}
		// ���i����ݒ藓���u�����N�ł͂Ȃ��ꍇ�p�����[�^�ɕt�^
		if (kakk_hnist2 != '') {
			actId = actId + "&PH=" + EscapeSJIS(kakk_hnist2);
		}
	}
	location.href = actId;
}

// ----------------------------------------------------
// add 20130212
// initCookieSpMCNew�i�X�}�[�g�t�H��MC�p�j
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
// initCookieSpBMNew�i�X�}�[�g�t�H��BM�p�j
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
//��20110930 AMS �ύX start��
//function insertCookieSp(belnShopKbn,katBtgo,name,kakk,iPath,gift,imgPass) {
//��20110930 AMS �ύX replace��
function insertCookieSp(belnShopKbn,katBtgo,name,kakk,iPath,gift,imgPass,domain) {
//��20110930 AMS �ύX end��
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
				//��20110930 AMS �ύX start��
				//setDataSp(belnShopKbnList,katBtgoList,iPathList);
				//��20110930 AMS �ύX replace��
				setDataSp(belnShopKbnList,katBtgoList,iPathList,domain);
				//��20110930 AMS �ύX end��
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
//��20110930 AMS �ύX start��
//function setDataSp(belnShopKbnList,katBtgoList,iPathList) {
//��20110930 AMS �ύX replace��
function setDataSp(belnShopKbnList,katBtgoList,iPathList,domain) {
//��20110930 AMS �ύX end��
	proCnt = katBtgoList.length;
	//��20120112 AMS �ύX start��
	if (proCnt >= 5) {
	//��20120112 AMS �ύX end��
		proCnt = 4;
	}
	for (i=0;i < proCnt; i++ ) {
		var image = document.images["img" + i];
		//��20110930 AMS �ύX start��
		//image.src = iPathList[i];
		//��20110930 AMS �ύX replace��
		image.src = domain + iPathList[i];
		//��20110930 AMS �ύX end��
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
//��20110930 AMS �ύX end��
	var readRrkFlg  = cookieRead("RRKSGNFLG");
	
	if ( readRrkFlg == DELETE_IDX ) {
		var frameDiv = document.getElementById(DIV_FRAME_NAME);
		frameDiv.innerHTML = "";
		btnCheck(DELETE_IDX);
	} else {
		// ���i������\��
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
//��20130325 AMS �ύX start��
				mnzkdHknTnList = proInfoList[6].split(KEY_2);
				soKqList = proInfoList[7].split(KEY_2);
//				//��20110215 AMS �ǉ� start��
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
//��20130325 AMS �ύX end��
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
	//��20120112 AMS �ύX start��
	if (proCnt >= 5) {
	//��20120112 AMS �ύX end��
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
//��20130325 AMS �폜 start��
//			if (belnShopKbnList[i] == MC_SHOP_KBN && soKqList[i] < 5) {
//			
//				mnzkdHknTnDiv.removeChild(mnzkdHknTnDiv.firstChild);
//			
//			} else {
//��20130325 AMS �폜 end��
				if(mnzkdHknTnList[i] != null && mnzkdHknTnList[i] != "" && soKqList[i] != null && soKqList[i] != "" && soKqList[i] > 0) {
					var strBuff = "<img src=\"" + imgPass + "star/star_icon_" + mnzkdHknTnList[i]*10 + ".gif" + "\" />";
					strBuff    += "&nbsp;(" + soKqList[i] + ")";
					strBuff    += "<br />";
					mnzkdHknTnDiv.innerHTML = strBuff;
				}
//��20130325 AMS �폜 start��
//			}
//��20130325 AMS �폜 end��
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
//TOP��ʃ����L���O���Z�b�g
function getRankingInfo() {
	// cookie���猻�ݑI�𒆂̃J�e�S��ID���擾
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
	// �J�e�S���h�c����̏ꍇ�̓����L���O���̎擾���s��Ȃ�
	if (category_id != "") {
	
		// url�̐ݒ�
		var	home_url = "http://www.bellemaison.jp";
		// ���N�G�X�gURL�𐶐� 
		var url = home_url + '/100/rank/';
		//��20120124 AMS �ǉ� start��  
		url += category_id + '/';
		//��20120124 AMS �ǉ� end��
		url += category_id + '.xml';
			
		// �����L���O����HTML�𐶐�
		var rankingInfo = "";
		var count = 0;
	
		$.ajax({
			type: "GET",
			url: url,
			cache: false,
			dataType: "xml",
			success: function(data) {
			// �����L���O����HTML�𐶐�
				var reviewInfo = "";
				var item = $('CATEGORIES', data);
				$('CATEGORY', item).each(function() {
					count = count + 1;
					var RANKING_TTL = $('RANKING_TTL', this).text();		// �����L���O�^�C�g��
					
					rankingInfo += "<div id=\"ranking-list" + count + "\" >";
					rankingInfo += "<h3><span>";
					rankingInfo += RANKING_TTL;
					rankingInfo += "</span></h3>";
					rankingInfo += "<ul class=\"section-wrap\">";
					// �����L���O���׏��̎擾
					$('ITEM', this).each(function() {
						var RANK = $('RANK', this).text();					// �����L���O
						var KAT_MEI_PC = $('KAT_MEI_PC', this).text();		// ���i��
						var BRAND_NAME = $('BRAND_NAME', this).text();		// �u�����h��
						var RANK_IMAGE = $('RANK_IMAGE', this).text();		// �����L���O�摜
						var SHN_DTL_URL = $('SHN_DTL_URL', this).text();	// �ڍ׃p�X
						var SHN_IMG_URL = $('SHN_IMG_URL', this).text();	// ���i�C���[�W�摜
						var PRICE = $('PRICE', this).text();				// ���z
						var TOKKA_KBN = $('TOKKA_KBN', this).text();		// �����敪
						var OUTL_SHN_KBN = $('OUTL_SHN_KBN', this).text();	// �A�E�g���b�g�敪
						var RATING = $('RATING', this).text();				// �]��
						var COMMENT_SO_KQ = $('COMMENT_SO_KQ', this).text();	// �R�����g��
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
							rankingInfo += "<span>�]��</span>";
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
					rankingInfo += "<a href=\"#\" class=\"button btn-prev\">�O��</a>";
					rankingInfo += "<a href=\"#\" class=\"button btn-next\">����</a>";
					rankingInfo += "</div>";
					rankingInfo += "</div>";
					return false;
				});
				// �����L���O����ݒ�
				if (rankingInfo != "") {
					$("#ranking-list").html(rankingInfo);
						
					for( var i = 0 ; i < count ; i++ ) {
						var num = i + 1;
						smp_getRecommend("ranking-list" + num);
					}
				}
			},
			// �N�b�L�[�ɐݒ肳��Ă���J�e�S���h�c�̃����L���O�w�l�k��񂪂Ȃ��ꍇ
			error: function() {
				$("#ranking-list").css({ "display": "none" });
			}
		});
	} else {
		//�����L���O��񂪂Ȃ��ꍇ�̕s�v�ȃ^�O�폜
		$("#ranking-list").css({ "display": "none" });
	}
}
//��20121002 AMS �ǉ� start��
//TOP��ʃ����L���O���Z�b�g
function getRankingInfo2() {
	// cookie���猻�ݑI�𒆂̃J�e�S��ID���擾
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
	// �J�e�S���h�c����̏ꍇ�̓����L���O���̎擾���s��Ȃ�
	if (category_id != "") {
	
		// url�̐ݒ�
		var	home_url = "http://www.bellemaison.jp";
		// ���N�G�X�gURL�𐶐� 
		var url = home_url + '/100/rank/';
		//��20120124 AMS �ǉ� start��  
		url += category_id + '/';
		//��20120124 AMS �ǉ� end��
		url += category_id + '.xml';
			
		// �����L���O����HTML�𐶐�
		var rankingInfo = "";
		var count = 0;
		
		$.ajax({
			type: "GET",
			url: url,
			cache: false,
			dataType: "xml",			
			success: function(data) {
			// �����L���O����HTML�𐶐�
				var reviewInfo = "";
				var item = $('CATEGORIES', data);
				$('CATEGORY', item).each(function() {
					count = count + 1;
					var RANKING_TTL = $('RANKING_TTL', this).text();		// �����L���O�^�C�g��
					
					rankingInfo += "<div id=\"ranking" + count + "\" >";
					rankingInfo += "<h2>";
					rankingInfo += RANKING_TTL;
					rankingInfo += "</h2>";
					rankingInfo += "<ol>";
					// �����L���O���׏��̎擾
					$('ITEM', this).each(function() {
						var RANK = $('RANK', this).text();					// �����L���O
						var KAT_MEI_PC = $('KAT_MEI_PC', this).text();		// ���i��
						var BRAND_NAME = $('BRAND_NAME', this).text();		// �u�����h��
						var RANK_IMAGE = $('RANK_IMAGE', this).text();		// �����L���O�摜
						var SHN_DTL_URL = $('SHN_DTL_URL', this).text();	// �ڍ׃p�X
						var SHN_IMG_URL = $('SHN_IMG_URL', this).text();	// ���i�C���[�W�摜
						var PRICE = $('PRICE', this).text();				// ���z
						var TOKKA_KBN = $('TOKKA_KBN', this).text();		// �����敪
						var OUTL_SHN_KBN = $('OUTL_SHN_KBN', this).text();	// �A�E�g���b�g�敪
						var RATING = $('RATING', this).text();				// �]��
						var COMMENT_SO_KQ = $('COMMENT_SO_KQ', this).text();	// �R�����g��
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
						// FIXME �������������z��\������class�w��ύX���K�v���H�������@�����s�ł̓����w��class��"price-sp"
						if ( TOKKA_KBN == 1 || OUTL_SHN_KBN == 1 ) {
							rankingInfo += "<p class=\"item-spprice\">" + PRICE + "</p>";
						} else { 
							rankingInfo += "<p class=\"item-price\">" + PRICE + "</p>";
						}
						// �]��
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
				// �����L���O����ݒ�
				if (rankingInfo != "") {
					$("#ranking").html(rankingInfo);
						
					for( var i = 0 ; i < count ; i++ ) {
						var num = i + 1;
						smp_getRecommend2("ranking" + num);
					}
				}
			},
			// �N�b�L�[�ɐݒ肳��Ă���J�e�S���h�c�̃����L���O�w�l�k��񂪂Ȃ��ꍇ
			error: function() {
				$("#ranking").css({ "display": "none" });
			}
		});
	} else {
		//�����L���O��񂪂Ȃ��ꍇ�̕s�v�ȃ^�O�폜
		$("#ranking").css({ "display": "none" });
	}
}
//��20121002 AMS �ǉ� end��
//��20111206 AMS �ǉ� start��
movieSwitch = 0;
currentIdx = 0;
ImgConsecutiveNum = 0;
//���C���摜 �O�փ{�^����������
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
//���C���摜 ���փ{�^����������
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
//�}�E�X�J�[�\�����⑫�摜��ɂ���Ƃ��̉摜����
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
//�摜�N���b�N�����Ƃ��̉摜����
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
//�}�E�X�J�[�\�����⑫�摜���痣�ꂽ�Ƃ��̐���
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
//�}�E�X�J�[�\�����⑫�摜��ɂ���Ƃ��̐���
function change(num){
	if (movieSwitch == 1) {
		document.getElementById('divmovie').className='epfb0100item';
		return false;
	}
	
	// ������1��(���C���摜�����Ȃ�)�̂Ƃ��͏������Ȃ�
	if (kensu > 1) {
		idx=new Number(num);
		divCurrentIdx=new Number(replaceIdx(currentIdx));
		//�o�̓G���A
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
//�摜�N���b�N�����Ƃ��̉摜����
function change2(num){
	if (movieSwitch != 1) {
		ImgConsecutiveNum = num;
		return false;
	}
	
	ImgConsecutiveNum = num;
	
	// ������1��(���C���摜�����Ȃ�)�̂Ƃ��͏������Ȃ�
	if (kensu > 1) {
		idx=new Number(num);
		divCurrentIdx=new Number(replaceIdx(currentIdx));
		//�o�̓G���A
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
//��20111206 AMS �ǉ� end��
//��20111215 AMS �ǉ� start��
//�񓯊��J�[�g�ǉ�����
var AddCartFlg = false;
function AddCartHdk(uri,func){
	// �Q�x�����h�~
	if (AddCartFlg) {
		return;
	}
	
	// ���i���v�_���擾
	var shnTotalNum = hdrCartqtyStr();
	// �J�[�g���̌��݂̏��i���v�_����99�_�ȏ�̏ꍇ
	if (shnTotalNum != "" && 99 <= shnTotalNum) {
		alert("��x�ɂ��������������鏤�i�̍��v����99�_�܂łł��B");
		return false;
	}
	AddCartFlg = true;
	
	//�J�[�g�ǉ�����
	$.ajax({
		type: "GET",
		url: uri,
		cache: false,
		dataType: "xml",
		success: function(xml) {
			var status = $(xml).find("STATUS").text();
			if (status == '0') {
				AddCartFlg = false;
				alert("�J�[�g�ɓ���܂����B");
				success = true;
			/* AMS�I�[�_�[�����̓t���[���P add start 2016/02/25 */
				if (typeof func == "function") {
					func(xml, '0'); 
				}
			} else if (status == '3') {
				AddCartFlg = false;
				var chmnno = getUrlValue(uri, 'CHMN_NO');
				if( typeof func == "function"){
					func(chmnno, '1');
				}
			/* AMS�I�[�_�[�����̓t���[���P add end   2016/02/25 */
			} else {
				AddCartFlg = false;
				alert("���i���J�[�g�ɓ�����܂���ł����B\n���i������؂ꂽ�\�����������܂��̂�\n�݌ɏ󋵂����m�F���������B");
			}
		},
		complete: function (XHRoj, textStatus) {  
			// �w�b�_�[�̃J�[�g���X�V	
        	refreshHeaderCartInfo(1);
        }, 
		error: function() {
			AddCartFlg = false;
			alert("�������ɖ�肪�������܂����B\n���萔�����|�����܂����A������x��蒼���Ă��������B");
		}
	});
}
//��20111215 AMS �ǉ� end��
//��20120105 AMS �ǉ� start��
//�񓯊����C�ɓ���ǉ�����
var AddFavFlg = false;
function AddFavorLstHdk(uri){
		
	// �Q�x�����h�~
	if (AddFavFlg) {
		return;
	}
	AddFavFlg = true;
	
	//�ʐM��
	//�^�O�𒊏o
	var objTtl = document.getElementById("fav-ttl");
	var objCp = document.getElementById("fav-cp");
	var logonBtn = document.getElementById("logon-btn");
	var objBtn = document.getElementById("fav-win-btn");
	var closeBtn = document.getElementById("fav-close-btn");
	var ttl = "���C�ɓ��胊�X�g�ɒǉ����Ă��܂��B";
	var cp = "���΂炭���҂��������B";
	
	objTtl.innerHTML = ttl;
	objCp.innerHTML = cp;
	objBtn.style.display = "none";
	closeBtn.style.display = "none";
	$("#fav-ttl").css("text-align", "center");
	$("#fav-cp").css("text-align", "center"); 
	
	//�\�������̐ݒ�
	ttl = "���C�ɓ��胊�X�g�ɒǉ����܂���"
	cp = "���q�l�����g�̂��C�ɓ��胊�X�g�ɕۑ�����ɂ́A<br />�u���O�I���v���K�v�ł��B"
	var success = false;
	//�G���[���b�Z�[�W�Ɋ܂܂��br�^�O
	var br = "<BR>";
	
	//���C�ɓ���ɒǉ�����
		
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
				var status = String(result.STATUS);				// �X�e�[�^�X
				if(status == '1'){
					var err_msg = String(result.ERROR_MESSAGE[0]);		// �G���[���b�Z�[�W
				}
				
				if(status == '0'){ //����
					//���O�C����Ԃ𒲂ׂ�
					var appInfoses = cookieRead("APPINFOSES");
					var knoStr = cookieRead("KNO");
					var knoArr = knoStr.split("###");
					var kno = knoArr[0];
					var knoFlg = knoArr[2];
					var name = "logon"; //�L�[�l
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
					if (logonFlg) { //���O�C����
						objTtl.innerHTML = "<br /><br />" + ttl;
						objCp.innerHTML = "";
						logonBtn.style.display = "none";
						objBtn.style.display = "block";
						closeBtn.style.display = "block";
					} else { //�����O�I��
						objTtl.innerHTML = ttl;
						objCp.innerHTML = cp;
						logonBtn.style.display = "inline";
						objBtn.style.display = "block";
						closeBtn.style.display = "block";
					}
				} else if(status == '1'){ //���s
					if(err_msg.indexOf("br") != -1){
						objTtl.innerHTML = "<br />" + err_msg;
					} else {
						objTtl.innerHTML = "<br /><br />" + err_msg;
					}
					objCp.innerHTML = "";
					logonBtn.style.display = "none";
					objBtn.style.display = "block";
					closeBtn.style.display = "block";
				} else if(status == '2') { // �V�X�e���G���[
					objTtl.innerHTML = "���L���R���ɂ��A���̑���ɕK�v�ȏ�񂪎擾�ł��܂���ł����B<br />�������܂����ATOP��ʂ����߂đ�����s���Ă��������B";
					objCp.innerHTML = "�E�����URL�����w��<br />�E���w���URL�̗L�������؂�<br />�E�r���̉�ʂ��瑀��(Bookmark����URL�̈ꕔ������)";
					$("#fav-ttl").css("text-align", "left");
					$("#fav-cp").css("text-align", "left"); 
					objBtn.style.display = "none";
					closeBtn.style.display = "block";
				}
				success = true;
				
			},
			error: function() {
				objTtl.innerHTML = "�G���[���������܂����B<br /><br />�ڍׂɂ��Ă͂��萔�ł͂������܂����A<br />�T�C�g�̊Ǘ��҂܂ł����₭�������B";
				objCp.innerHTML = "";
				logonBtn.style.display = "none";
				objBtn.style.display = "block";
				closeBtn.style.display = "block";
			}
		});
		
	AddFavFlg = false;
}
//��20120105 AMS �ǉ� end��
//��20121009 AMS �ǉ� start��
//�񓯊����C�ɓ���ǉ�����(���b�Z�[�W�{�b�N�X)
var AddFavMsgBoxFlg = false;
function AddFavorLstMsgBoxHdk(uri){

	// �Q�x�����h�~
	if (AddFavMsgBoxFlg) {
		return;
	}
	AddFavMsgBoxFlg = true;
	//�ʐM��
	//���C�ɓ���ɒǉ�����
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
				var status = String(result.STATUS);				// �X�e�[�^�X
				if(status == '1'){
					var err_msg = String(result.ERROR_MESSAGE[0]);		// �G���[���b�Z�[�W
				}
				
				if(status == '0'){ //����
					//���O�C����Ԃ𒲂ׂ�
					var appInfoses = cookieRead("APPINFOSES");
					var knoStr = cookieRead("KNO");
					var knoArr = knoStr.split("###");
					var kno = knoArr[0];
					var knoFlg = knoArr[2];
					var name = "logon"; //�L�[�l
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
					if (logonFlg) { //���O�C����
						alert("���C�ɓ��胊�X�g�ɒǉ����܂����B");
					} else { //�����O�I��
						alert("���C�ɓ��胊�X�g�ɒǉ����܂����B\n���q�l�����g�̂��C�ɓ��胊�X�g�ɕۑ�����ɂ́u���O�I���v���K�v�ł��B");
					}
				} else if(status == '1'){ //���s
					err_msg = err_msg.replace(/<br>/g, "\n");
					alert(err_msg);
				} else if(status == '2') { // �V�X�e���G���[
					alert("���L���R���ɂ��A���̑���ɕK�v�ȏ�񂪎擾�ł��܂���ł����B\n�������܂����ATOP��ʂ����߂đ�����s���Ă��������B\n" +
						  "�E�����URL�����w��\n�E���w���URL�̗L�������؂�\n�E�r���̉�ʂ��瑀��(Bookmark����URL�̈ꕔ������");
				}
				AddFavMsgBoxFlg = false;
				success = true;
			}
		});
}
//��20121009 AMS �ǉ� end��
// ----------------------------------------------------
// add 20111213
// �݌ɏ���񓯊��擾
//   @param
//      baseurl:�x�[�XURL
//      brs_btn_url:�{�^���z�u�ꏊ
//      ss_url:�T�[�r�X�T�[�u���b�gURL
//      belnShopKbn:�x���l�V���b�v�敪
//      katBtgo:�^�}�N�G
//      ssls_url:SSL�T�[�u���b�gURL
//      nssls_url:NON_SSL�T�[�u���b�gURL
// ----------------------------------------------------
var ZaikoInfoHdkFlg = false;
function getZaikoInfoHdk(baseurl,brs_btn_url,ss_url,belnShopKbn,katBtgo,ssls_url,nssls_url) {
	// �Q�x�����h�~
	if (ZaikoInfoHdkFlg) {
		return;
	}
	ZaikoInfoHdkFlg = true;
	// AMS�I�[�_�[�����̓t���[���P delete start 2016/02/25
	// var crtAddObj = window.document.getElementById('cart-add');
	// if (crtAddObj != null && crtAddObj != undefined) {
	// 	var strCrtAddObj = "";
	// 	strCrtAddObj  = "<a href=\"javascript:void(0)\"";
	// 	strCrtAddObj += " onclick=\"cartAddByShnDtl('" + belnShopKbn + "','" + nssls_url + "/EPFB00/EPFB0005/dProdDtlCartAdd?');return false;\">";
	// 	strCrtAddObj += "<img src=\"" + baseurl + brs_btn_url + "btn_cart.jpg\" alt=\"�J�[�g�ɓ����\" width=\"222\" height=\"38\">";
	// 	strCrtAddObj += "</a>";
	// 	crtAddObj.innerHTML = strCrtAddObj;
	// }
	// AMS�I�[�_�[�����̓t���[���P delete end 2016/02/25
	// �v���_�E������t���O�i0�F�v���_�E���Ȃ��A1�F�v���_�E������(�I���Ȃ�)�A2�F�v���_�E������(�I������)�j
	var ClrPldwnHtiFlg = 0;
	var Sz1PldwnHtiFlg = 0;
	var Sz2PldwnHtiFlg = 0;
	var Sz3PldwnHtiFlg = 0;
	// ���i������
	var zkkakk = window.document.getElementById('zkkakk');
	if (zkkakk != undefined && zkkakk != "") {
		zkkakk.innerHTML = "";
	}
	
	// �݌ɏ󋵏�����
	var zkJky = window.document.getElementById('zkJky');
	if (zkJky != undefined && zkJky != "") {
		zkJky.innerHTML = "";
	}
	// ���N�G�X�gURL�𐶐�
	var uri = ss_url + '/EPFB00/EPFB0097/dProdStockProc?BELN_SHOP_KBN=' + belnShopKbn + '&KAT_BTGO=' + katBtgo;
	// �F
	var objColor = document.getElementsByName("IRO_SKBT_SEQ");
	if (objColor != null && objColor != undefined && objColor.length != 0) {
		ClrPldwnHtiFlg = 1;
		if (objColor[0].options[objColor[0].selectedIndex].value != 0) {
			uri += '&IRO_SKBT_SEQ=' + objColor[0].options[objColor[0].selectedIndex].value;
			ClrPldwnHtiFlg = 2;
		}
	}
	// �T�C�Y�P
	var objSize1 = document.getElementsByName("SIZE1_SKBT_SEQ");
	if (objSize1 != null && objSize1 != undefined && objSize1.length != 0) {
		Sz1PldwnHtiFlg = 1;
		if (objSize1[0].options[objSize1[0].selectedIndex].value != 0) {
			uri += '&SIZE1_SKBT_SEQ=' + objSize1[0].options[objSize1[0].selectedIndex].value;
			Sz1PldwnHtiFlg = 2;
		}
	}
	// �T�C�Y�Q
	objSize2 = document.getElementsByName("SIZE2_SKBT_SEQ");
	if (objSize2 != null && objSize2 != undefined && objSize2.length != 0) {
		Sz2PldwnHtiFlg = 1;
		if (objSize2[0].options[objSize2[0].selectedIndex].value != 0) {
			uri += '&SIZE2_SKBT_SEQ=' + objSize2[0].options[objSize2[0].selectedIndex].value;
			Sz2PldwnHtiFlg = 2;
		}
	}
	// �T�C�Y�R
	objSize3 = document.getElementsByName("SIZE3_SKBT_SEQ");
	if (objSize3 != null && objSize3 != undefined && objSize3.length != 0) {
		Sz3PldwnHtiFlg = 1;
		if (objSize3[0].options[objSize3[0].selectedIndex].value != 0) {
			uri += '&SIZE3_SKBT_SEQ=' + objSize3[0].options[objSize3[0].selectedIndex].value;
			Sz3PldwnHtiFlg = 2;
		}
	}
	// �v���_�E�����S�ĂȂ��A�܂��͑S�v���_�E�����ύX���ꂽ�ꍇ�ɍ݌ɏ����擾
	if (ClrPldwnHtiFlg != 1 && Sz1PldwnHtiFlg != 1 && Sz2PldwnHtiFlg != 1 && Sz3PldwnHtiFlg != 1) {
		//�������̓v���_�E����I��s�ɂ���
/* �C�� 130705brs1 TAM �R�R���� */
		if ($('form[name="form02"]').size()) {
	/* �C�� 130517brs2 TAM �R�R���� */
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
	/* �C�� 130517brs2 TAM �R�R�܂� */
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
		/* �C�� 130705brs1 TAM �R�R�܂� */
		
		uri = uri + "&TIMESTAMP=" + createTimeStamp();
		
		// �݌ɏ����擾
		
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
					var CHMN_NO = String(info.CHMN_NO);			// �����ԍ�
					var ZKQ = String(info.ZKQ);					// �݌ɐ�
					var JCH_KN_KBN = String(info.JCH_KN_KBN);		// �󒍉\�敪
					var TEIK = String(info.TEIK);					// �艿
					var ST_KO_TEIK = String(info.ST_KO_TEIK);		// �Œ�q�艿
					var SK_KO_TEIK = String(info.SK_KO_TEIK);		// �ō��q�艿
					var UR_SHZ_KBN = String(info.UR_SHZ_KBN);		// �������ŋ敪
					var SHZ_RT = String(info.SHZ_RT);				// ����ŗ�
					var TOKKA_KBN = String(info.TOKKA_KBN);		// �����敪
					var OUTL_SHN_KBN = String(info.OUTL_SHN_KBN);	// �A�E�g���b�g���i�敪
					var ZK_JKY = String(info.ZK_JKY);				// �݌ɏ�
					var HS_JKY_MSG = String(info.HS_JKY_MSG);		// �z���󋵃��b�Z�[�W
					var SNK_ANAI_FLG = String(info.SNK_ANAI_FLG);	// �ē��׈ē��\���t���O
					var CHMN_FK_MSG = String(info.CHMN_FK_MSG);    // �����s���b�Z�[�W
					// �����s���b�Z�[�W�̗L���𔻒�
					if (CHMN_FK_MSG.indexOf("undefined") == -1) {
						// �����ԍ������݂��Ă��Ȃ��ꍇ�A�����s���b�Z�[�W��\��
					    CHMN_FK_MSG = "<strong><span class='fc-red01'>" + CHMN_FK_MSG + "</span></strong>";
					    $("#zkJky").html(CHMN_FK_MSG);
					} else {
						// �����ԍ������݂��Ă���ꍇ�A�݌ɏ󋵂�\��
						// �݌ɏ󋵃t���O(1�F�݌ɂ���A2�F���ח\��A3�F����؂�)
						var zkJkyFlg = 0;
						// ���i���i�̐ݒ�
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
						// �ŕ\�L�̕ҏW
						var zeiHyk = "";
						if (UR_SHZ_KBN == "1" || UR_SHZ_KBN == "2") {
							// �u(�ō�)�v�\�L�i�O�� or ���Łj
							zeiHyk = "(�ō�)";
						} else if (UR_SHZ_KBN == "3") {
							// �u(��ې�)�v�\�L
							zeiHyk = "(��ې�)";
						} else {
							// �u(�Ɛ�)�v�\�L
							zeiHyk = "(�Ɛ�)";
						}
						// ���i�̕ҏW
						if (kakk != "") {
							if (TOKKA_KBN == "1" || OUTL_SHN_KBN == "1") {
								var kakkMngn = "����1������&nbsp;<span class=\"fc-red01\"><span class=\"text14l13\"><strong>" + kakk + "</strong></span>" + zeiHyk + "</span>";
							} else {
								var kakkMngn = "����1������&nbsp;<span class=\"text14l13\"><strong>" + kakk + "</strong></span>" + zeiHyk;
							}
						}
						$("#zkkakk").html(kakkMngn);
						// �݌ɏ󋵂̃^�O�ϊ�
						if (ZK_JKY.indexOf("wait") != -1) {
							// ���ח\��̏ꍇ
							ZK_JKY = ZK_JKY.replace(/stock-wait/g,"fc-orange01");
							zkJkyFlg = 2;
						} else if (ZK_JKY.indexOf("soldout") != -1) {
							// ����؂�̏ꍇ
							ZK_JKY = ZK_JKY.replace(/stock-soldout/g,"fc-red01");
							zkJkyFlg = 3;
						} else {
							// �݌ɂ���̏ꍇ
							ZK_JKY = ZK_JKY.replace(/ class="stock"/g,"");
							ZK_JKY = ZK_JKY.replace(/<span>/g,"");
							ZK_JKY = ZK_JKY.replace(/<\/span>/g,"");
							zkJkyFlg = 1;
						}
						if (nrShnKbn == "9") {
							ZK_JKY = ""
						}
						// �݌ɏ󋵂̐ݒ�
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
									ZK_JKY = ZK_JKY + " <a href=\"javascript:void(0)\" onClick=\"window.open('" + ssls_url + "/EPFB00/EPFB0018/dArrvlMlAddShow?BELN_SHOP_KBN=" + belnShopKbn + "&KAT_BTGO=" + katBtgo + "&CHMN_NO=" + CHMN_NO + "','subwindow0018', 'width=760,height=600,resizable=yes,scrollbars = yes');return false;\">�ē��ׂ����ꍇ���[���ł��m�点</a></strong>";
								} else {
									ZK_JKY = ZK_JKY + "</strong>";
								}
								break;
						}
						$("#zkJky").html(ZK_JKY);
					}
				}
				
				//�������I�������̂Ńv���_�E����I���\�ɂ���
/* �C�� 130705brs1 TAM �R�R���� */
				if ($('form[name="form02"]').size()) {
	/* �C�� 130517brs2 TAM �R�R���� */				
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
	/* �C�� 130517brs2 TAM �R�R�܂� */
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
/* �C�� 130705brs1 TAM �R�R�܂� */

			},
			error: function() {//�ʐM�G���[
				//�v���_�E����I���\�ɂ���
/* �C�� 130705brs1 TAM �R�R���� */
				if ($('form[name="form02"]').size()) {
	/* �C�� 130517brs2 TAM �R�R���� */
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
	/* �C�� 130517brs2 TAM �R�R�܂� */
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
/* �C�� 130705brs1 TAM �R�R�܂� */
			}
		});
	}
	ZaikoInfoHdkFlg = false;
}
//��20111213 AMS �ǉ� end��
//��20111222 AMS �ǉ� start��
var ReviewInfoFlg = false;
var nowPageNumber = 1;
var h_reviewInfo = new Array();
var so_kq = 0;
//��20130325 AMS �ǉ� start��
var defaultShcmSbrHyjyun = "n";
var defaultShcmSbtKbn = "";
var defaultShcmNnriKbn = "";
//��20130325 AMS �ǉ� end��
//��20131007 AMS �ǉ� start��
var defaultShcmCmtNmHyjkbn = "";
//��20131007 AMS �ǉ� end��
// ----------------------------------------------------
// add 20111222
// //�񓯊����i���r���[���擾
//   @param
//��20130325 AMS �ύX start��
//      pageNumber:�\������y�[�W�ԍ�
//      gmn_id:��ʂh�c
//      beln_shop_kbn:�x���l�V���b�v�敪
//      kat_btgo:�^�}�N�G
//      brs_img_url:�C���[�W�z�u�ꏊ
//      brs_img_btn_url:�{�^���C���[�W�z�u�ꏊ
//      ss_url:�T�[�r�X�T�[�u���b�gURL
//��20131007 AMS �ǉ� start��
//      nssls_url:NON_SSL�T�[�u���b�gURL
//      cmt_seq_shtk_kbn:�R�����g�A�Ԏ擾�敪
//��20131007 AMS �ǉ� end��
//��20130325 AMS �ύX end��
// ----------------------------------------------------
//��20130325 AMS �ύX start��
//��20131007 AMS �C�� start��
	function getReviewInfoHdk(pageNumber, gmn_id, beln_shop_kbn, kat_btgo, brs_img_url, brs_img_btn_url, ss_url, nssls_url, cmt_seq_shtk_kbn) {
//	function getReviewInfoHdk(pageNumber, gmn_id, beln_shop_kbn, kat_btgo, brs_img_url, brs_img_btn_url, ss_url) {
//��20131007 AMS �C�� end��
//	function getReviewInfoHdk(pageNumber, hyjkq, beln_shop_kbn, kat_btgo, ss_url) {
//��20130325 AMS �ύX end��
		// �Q�x�����h�~
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
//��20130325 AMS �폜 start��
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
//��20130325 AMS �폜 end��
		// ���N�G�X�gURL�𐶐�
		var uri = ss_url + '/EPFB00/EPFB0100/dProdReviewLstProc';
		uri += '?BELN_SHOP_KBN=' + beln_shop_kbn;
		uri += '&KAT_BTGO=' + kat_btgo;
		uri += '&PAGE_NUMBER=' + pageNumber;
//��20131007 AMS �ǉ� start��
		uri += '&CMT_SEQ_SHTK_KBN=' + cmt_seq_shtk_kbn;
//��20131007 AMS �ǉ� end��
//��20130325 AMS �ǉ� start��
        // ���ʋ敪
        uri += '&SHCM_SBR_SBT_KBN=';
        var shcm_sbr_sbt_kbn = "";
        var objSbtKbn = document.getElementsByName("SHCM_SBR_SBT_KBN");
        if (objSbtKbn != null && objSbtKbn != undefined && objSbtKbn.length != 0) {
        	objSbtKbn[0].disabled = true;
			uri += objSbtKbn[0].options[objSbtKbn[0].selectedIndex].value;
			shcm_sbr_sbt_kbn = objSbtKbn[0].options[objSbtKbn[0].selectedIndex].value;
        }
        // �N��敪
        uri += '&SHCM_SBR_NNRI_KBN=';
        var shcm_sbr_nnri_kbn = "";
        var objNnriKbn = document.getElementsByName("SHCM_SBR_NNRI_KBN");
        if (objNnriKbn != null && objNnriKbn != undefined && objNnriKbn.length != 0) {
        	objNnriKbn[0].disabled = true;
			uri += objNnriKbn[0].options[objNnriKbn[0].selectedIndex].value;
			shcm_sbr_nnri_kbn = objNnriKbn[0].options[objNnriKbn[0].selectedIndex].value;
        }
//��20131007 AMS �ǉ� start��
		// �R�����g�̂ݕ\���敪
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
//��20131007 AMS �ǉ� end��
        // �\����
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
		
		// ��ʂh�c
        uri += '&GMN_ID=' + gmn_id;
		var isSbrChange = false;
//��20131007 AMS �C�� start��
		//�i�肱�݂̓��e�ɕύX������
		if (defaultShcmSbtKbn!=shcm_sbr_sbt_kbn || defaultShcmNnriKbn!=shcm_sbr_nnri_kbn || defaultShcmCmtNmHyjkbn != shcm_sbr_cmt_nm_hyjkbn) {
			isSbrChange = true;
		}
//��20131007 AMS �C�� end��
//��20130325 AMS �ǉ� end��
		// ���i���r���[�����擾
//��20130325 AMS �ύX start��
			// ���i���r���[�����擾
		$.ajax({
			type: "GET",
			url: uri,
			cache: false,
			dataType: "jsonp",
			scriptCharset : 'UTF-8',
			jsonpCallback: "setReviewInfo",
			success: function(data) {
				// ���i���r���[����HTML�𐶐�
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
			        		
			        		var SHCM_KNY_SHN = String(items[i].SHCM_KNY_SHN);	 // �w�����i��
							var MNZKD = String(items[i].MNZKD);		     // �����x
							var STAR_IMG_MNZKD1 = String(items[i].STAR_IMG_MNZKD1);// �����x���摜�P
							var STAR_IMG_MNZKD2 = String(items[i].STAR_IMG_MNZKD2);// �����x���摜�Q
							var STAR_IMG_MNZKD3 = String(items[i].STAR_IMG_MNZKD3);// �����x���摜�R
							var STAR_IMG_MNZKD4 = String(items[i].STAR_IMG_MNZKD4);// �����x���摜�S
							var STAR_IMG_MNZKD5 = String(items[i].STAR_IMG_MNZKD5);// �����x���摜�T
							var PENNM = String(items[i].PENNM);		     // �y���l�[��
							var TOKO_NTJ = String(items[i].TOKO_NTJ);	 // ���e����
							var KN_MEI = String(items[i].KN_MEI);		 // ����
							var HONBUN = String(items[i].HONBUN);		 // �{��
							var HNSN = String(items[i].HNSN);		     // �ԐM
							var HNSN_NTJ = String(items[i].HNSN_NTJ);	 // �ԐM����
							var TKS_SBT = String(items[i].TKS_SBT);		 // ���e�Ґ���
							var TKS_NNR = String(items[i].TKS_NNR);		 // ���e�ҔN��
							var SHCM_STMN_KAIT_LIST_R = items[i].SHCM_STMN_KAIT_LIST_R;		// ���i�R�����g����񓚃��X�gR
							var SHCM_STMN_KAIT_LIST_PC = items[i].SHCM_STMN_KAIT_LIST_PC;	// ���i�R�����g����񓚃��X�gP��C
							var SHCM_SEQ = String(items[i].SHCM_SEQ);// ���i�R�����g�A��
							var SHCM_SNKO_KS = String(items[i].SHCM_SNKO_KS);// ���i�R�����g�Q�l��
							
							var honbun = HONBUN.replace(/\r\n/g, "<br/>");
							honbun = honbun.replace(/(\n|\r)/g, "<br/>");
							honbun = honbun.replace(/\\|\\/g, "&yen;");
							PENNM = PENNM.replace(/\\|\\/g, "&yen;");
							KN_MEI = KN_MEI.replace(/\\|\\/g, "&yen;");
							
							var hnsn = HNSN.replace(/\r\n/g, "<br/>");
							hnsn = hnsn.replace(/(\n|\r)/g, "<br/>");
							hnsn = hnsn.replace(/\\|\\/g, "&yen;");
			        		
							// �y���l�[��
							var penName = "";
							if (PENNM == ""){
								penName = "�w���҂���";
							} else {
								penName = PENNM + "����";
							}
							
							// �i���ʁE�N��j
							var seibetuAndNenrei = "";
							if (TKS_SBT != "" && TKS_NNR == "") {
							    seibetuAndNenrei = "�i" + TKS_SBT + "�j";
							} else if (TKS_SBT != "" && TKS_NNR != "") {
							    seibetuAndNenrei = "�i" + TKS_SBT + "�E" + TKS_NNR + "�j";
							} else if (TKS_SBT == "" && TKS_NNR != "") {
								seibetuAndNenrei = "�i" + TKS_NNR + "�j";
							}
							
							reviewInfo += "<div class=\"review-item\">";
							reviewInfo += "<table class=\"review-table02\">";
							reviewInfo += "<tr class=\"tr01\">";
							reviewInfo += "<td class=\"td01\">";
							reviewInfo += "<p class=\"name\"><img src=\"" + brs_img_url + "rev_icon_reviewer.gif\">"
//��20131007 AMS �C�� start��
							// �j�b�N�l�[����URL�𐶐�
							var ncnmUri = nssls_url + '/EPFB00/EPFB0126/dProdCmtByNicknmShow';
							ncnmUri += '?BELN_SHOP_KBN=100';
							ncnmUri += '&SHCM_SEQ=' + SHCM_SEQ;
							reviewInfo += "<span><a href=\"javascript:void(0)\" onclick=\"shnshsOpenSubWinFocus('" + ncnmUri + "', 'r2', 8);return false;\">" + penName + "</a></span>" + seibetuAndNenrei + "</p>";
//��20131007 AMS �C�� end��
							reviewInfo += "<p class=\"post\">���e���F" + TOKO_NTJ + "</p>";
							reviewInfo += "</td>";
							reviewInfo += "<td class=\"td02\">";
							reviewInfo += "<p class=\"ammount\">�]��&nbsp;";
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
								    reviewInfo += "<p>���w�����i�F&nbsp;" + SHCM_KNY_SHN + "</p>";
								}
							
								for (j in SHCM_STMN_KAIT_LIST_PC) {
									var SHCM_STMN_NY = String(SHCM_STMN_KAIT_LIST_PC[j].SHCM_STMN_NY);
									var SHCM_KAIT_NY = String(SHCM_STMN_KAIT_LIST_PC[j].SHCM_KAIT_NY);
									if (SHCM_KAIT_NY != "") {
										reviewInfo += "<p>��" + SHCM_STMN_NY + "�F&nbsp;" + SHCM_KAIT_NY + "</p>";
									} else {
									    reviewInfo += "<p>��" + SHCM_STMN_NY + "�F&nbsp;--</p>";
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
//��20131007 AMS �ǉ� start��
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
									reviewInfo += "<p class=\"comment_info\">" + HNSN_NTJ + "�@���� ���i�S����</p>";
									reviewInfo += "</div>";
								}
								reviewInfo += "</div></td></tr>";
								
								// �Q�l�ɂȂ���
								reviewInfo += "<tr class=\"tr03\">";
								reviewInfo += "<td class=\"td06\" colspan=\"2\">";
								var shcmSnkoKsHyjStyle = "display:none";
								if(SHCM_SNKO_KS>0){
									shcmSnkoKsHyjStyle = "display:block";
								}
								reviewInfo += "<p class=\"reference\" id=\"P_SHCM_SNKO_KS_" + SHCM_SEQ + "\" style=\"" + shcmSnkoKsHyjStyle + "\"><span>" + SHCM_SNKO_KS + "�l</span>���Q�l�ɂȂ�܂����B</p>";
								if(checkShcmSnkoKsBtnUnClicked(SHCM_SEQ)){
									reviewInfo += "<p class=\"btn\"><a id=\"A_SHCM_SEQ_" + SHCM_SEQ + "\" href=\"javascript:updShcmSnkoKsInfoHdk('" + beln_shop_kbn + "', '" + SHCM_SEQ + "', '" + brs_img_btn_url + "', '" + ss_url + "');\"><img id=\"IMG_SHCM_SEQ_" + SHCM_SEQ + "\" src=\"" + brs_img_btn_url + "review01.gif\" alt=\"�Q�l�ɂȂ���\"></a></p>";
								} else {
									reviewInfo += "<p class=\"btn\"><a id=\"A_SHCM_SEQ_" + SHCM_SEQ + "\"><img id=\"IMG_SHCM_SEQ_" + SHCM_SEQ + "\" src=\"" + brs_img_btn_url + "review02.gif\" alt=\"�Q�l�ɂȂ���\"></a></p>";
								}
								reviewInfo += "</td>";
							} else {
								reviewInfo += "<tr class=\"tr03\">";
								reviewInfo += "<td class=\"td05\" colspan=\"2\">";
								reviewInfo += "<div class=\"cell01\">";
								reviewInfo += "<p class=\"text\">���ӌ��E�����z�̓��e�͂������܂���B</p>";
								reviewInfo += "</div>";
								reviewInfo += "</td>";
							}
//��20131007 AMS �ǉ� end��
							reviewInfo += "</tr>";
							
							reviewInfo += "</table></div>";
			        	}
                        reviewInfo += "</div>";
                        
                        // ���i���r���[����ݒ�
						$("#reviewInfo").html(reviewInfo);
						h_reviewInfo[pageNumber] = reviewInfo;
						if (pageNumber>lastPageNumber) {
						    pageNumber = lastPageNumber;
						}
//��20131007 AMS �C�� start��
						pagingReview(pageNumber, so_kq, hyjkq, beln_shop_kbn, kat_btgo, brs_img_url, brs_img_btn_url, ss_url, gmn_id, nssls_url, cmt_seq_shtk_kbn);
//��20131007 AMS �C�� start��
						if(jumpFlg) {
							var positionTabPosTop = $("#position-tab").position().top;
							var positionTabHeight = $("#position-tab").height();
							var shcmSbrPosTop = $("#shcmSbr").position().top;
							var scrollTop = positionTabPosTop + positionTabHeight + shcmSbrPosTop;
							window.scrollTo(0, scrollTop);
						}
						document.getElementById("reviewInfo").style.display="";
						//��20130917 AMS �C�� start��
						document.getElementById("paging").style.display="";
						//��20130917 AMS �C�� end��
                        document.getElementById("shcmSbr").style.display="";
						
					} else {
						if (hyjkq>0) {
							reviewInfo += "<div class=\"cfx f-clear\">";
							if (isSbrChange) {
							    reviewInfo += "<p class=\"no-review\">���w��̍i�荞�ݏ����ɊY�����鏤�i���r���[�͂���܂���ł����B</p>";
							} else {
                                reviewInfo += "<p class=\"no-review\">���̏��i�ɂ͂܂����r���[�R�����g������܂���B</p>";
							}
							reviewInfo += "</div>";
							$("#reviewInfo").html(reviewInfo);
							document.getElementById("reviewInfo").style.display="";
        	                document.getElementById("shcmSbr").style.display="";
						}else{
							document.getElementById("reviewInfo").style.display="none";
                            document.getElementById("shcmSbr").style.display="none";
						}
						//��20130917 AMS �C�� start��
						document.getElementById("paging").style.display="none";
						//��20130917 AMS �C�� end��
					}
				}
				ReviewInfoFlg = false;
				error_flg = false;
				
				// ���ʋ敪
				objSbtKbn = document.getElementsByName("SHCM_SBR_SBT_KBN");
				if (objSbtKbn != null && objSbtKbn != undefined && objSbtKbn.length != 0) {
					objSbtKbn[0].disabled = false;
				}
				// �N��敪
				objNnriKbn = document.getElementsByName("SHCM_SBR_NNRI_KBN");
				if (objNnriKbn != null && objNnriKbn != undefined && objNnriKbn.length != 0) {
					objNnriKbn[0].disabled = false;
				}

//��20131007 AMS �ǉ� start��
				// �R�����g�̂ݕ\���敪
				objCmtNmKbn = document.getElementsByName("SHCM_SBR_CMT_NM_HYJKBN");
				if (objCmtNmKbn != null && objCmtNmKbn != undefined && objCmtNmKbn.length != 0) {
					objCmtNmKbn[0].disabled = false;
				}
//��20131007 AMS �ǉ� end��

				// �\����
				objHyjyun = document.getElementsByName("SHCM_SBR_HYJYUN");
				if (objHyjyun != null && objHyjyun != undefined && objHyjyun.length != 0) {
					objHyjyun[0].disabled = false;
				}
			}, 
			error: function() {
				// ���ʋ敪
				objSbtKbn = document.getElementsByName("SHCM_SBR_SBT_KBN");
				if (objSbtKbn != null && objSbtKbn != undefined && objSbtKbn.length != 0) {
					objSbtKbn[0].disabled = false;
				}
				// �N��敪
				objNnriKbn = document.getElementsByName("SHCM_SBR_NNRI_KBN");
				if (objNnriKbn != null && objNnriKbn != undefined && objNnriKbn.length != 0) {
					objNnriKbn[0].disabled = false;
				}
//��20131007 AMS �ǉ� start��
				// �R�����g�̂ݕ\���敪
				objCmtNmKbn = document.getElementsByName("SHCM_SBR_CMT_NM_HYJKBN");
				if (objCmtNmKbn != null && objCmtNmKbn != undefined && objCmtNmKbn.length != 0) {
					objCmtNmKbn[0].disabled = false;
				}
//��20131007 AMS �ǉ� end��
				// �\����
				objHyjyun = document.getElementsByName("SHCM_SBR_HYJYUN");
				if (objHyjyun != null && objHyjyun != undefined && objHyjyun.length != 0) {
					objHyjyun[0].disabled = false;
				}
				
				var error = "<div class=\"text12l16\">�\���󂲂����܂���A�������ɖ�肪�������܂����B<br>���萔�����|�����܂����A������x��蒼���Ă��������B</div>";
				$("#reviewInfo").html(error);
				error_flg = true;
				ReviewInfoFlg = false;
			}
		});
		nowPageNumber = pageNumber;
	}
//��20130325 AMS �ύX end��
	
//��20130325 AMS �ύX start��
	//�y�[�W���O���i���쐬����
//	function pagingReview(nowPageNum, so_kq, hyjkq, beln_shop_kbn, kat_btgo, ss_url){
//��20131007 AMS �C�� start��
//	function pagingReview(nowPageNum, so_kq, hyjkq, beln_shop_kbn, kat_btgo, brs_img_url, brs_img_btn_url, ss_url, gmn_id){
	function pagingReview(nowPageNum, so_kq, hyjkq, beln_shop_kbn, kat_btgo, brs_img_url, brs_img_btn_url, ss_url, gmn_id, nssls_url, cmt_seq_shtk_kbn){
//��20131007 AMS �C�� end��
//��20130325 AMS �ύX end��
		
		//�y�[�W���O���i�̃^�O���擾
//��20130917 AMS �폜 start��
//��20130325 AMS �ǉ� start��
		//var elemPagingTop = document.getElementById("pagingTop");
		//var elemPagingBottom = document.getElementById("pagingBottom");
		
//��20130325 AMS �ǉ� end��
//��20130917 AMS �폜 end��
//��20130917 AMS �ǉ� start��
		var elemPaging = document.getElementById("paging");
//��20130917 AMS �ǉ� end��

		//�ϐ�
		var startpage = (nowPageNum - 1) * hyjkq + 1; 
		var endpage = nowPageNum * hyjkq; //���`�����\���Ɏg�p
		if(endpage > so_kq){
			endpage = so_kq;
		}
		var startpaging = "";
		var endpaging = "";
		if ((nowPageNum % 10) == 0) {
			startpaging = (Math.floor(nowPageNum / 10) - 1) * 10 + 1;
			endpaging = Math.floor(nowPageNum / 10) * 10; //�y�[�W���O�ԍ��Ɏg�p
		} else {
			startpaging = Math.floor(nowPageNum / 10) * 10 + 1;
			endpaging = Math.floor(nowPageNum / 10) * 10 + 10; //�y�[�W���O�ԍ��Ɏg�p
		}
		var lastpage = Math.floor(so_kq / hyjkq); //�ŏI�y�[�W
		if((so_kq % hyjkq) != 0){
			lastpage += 1;
		}
		var nextpage = nowPageNum + 1;
		var prevpage = nowPageNum - 1;
		
		
		//���������`�����\�����쐬
//��20130325 AMS �C�� start��
		pagingInfo = "<p class=\"f-left text12 fc-gray03\">";
		pagingInfo += so_kq + "����" + startpage + "�`" + endpage + "���ڕ\��</p>";
		pagingInfo += "<ul class=\"pager01 pl10\">";
//��20130325 AMS �C�� end��
		//�O�́��������쐬
		if(nowPageNum != 1){
			pagingInfo += "<li><a href=\"javascript:void(0);\" onClick=\"";
//��20131007 AMS �C�� start��
			pagingInfo += "getReviewInfoHdk(" + prevpage + ",'" + gmn_id + "','" + beln_shop_kbn + "','" + kat_btgo + "','" + brs_img_url + "','" + brs_img_btn_url + "','" + ss_url + "','" + nssls_url + "','" + cmt_seq_shtk_kbn + "');return false;\">";
//��20131007 AMS �C�� end��
			pagingInfo += "<�O��" + hyjkq + "��</a></li>";
		}
		//�y�[�W�ԍ����쐬
		for(i = startpaging; i <= endpaging; i++){
			if (i == nowPageNum){
				pagingInfo += "<li class=\"current\">" + i + "</li>";
			} else {
				pagingInfo += "<li id=\"paging" + i + "\">";
				pagingInfo += "<a href=\"javascript:void(0);\"";
//��20131007 AMS �C�� start��
				pagingInfo += "onClick=\"getReviewInfoHdk(" + i + ",'" + gmn_id + "','" + beln_shop_kbn + "','" + kat_btgo + "','" + brs_img_url + "','" + brs_img_btn_url + "','" + ss_url + "','" + nssls_url + "','" + cmt_seq_shtk_kbn + "');return false;\">" + i + "</a></li>";
//��20131007 AMS �C�� end��
			}
			if(i == lastpage){
				break;
			}
		}
		//���́��������쐬
		if(nowPageNum == lastpage - 1){
			var lastpageNum = so_kq - (nowPageNum * hyjkq);
			pagingInfo += "<li><a href=\"javascript:void(0);\" onClick=\"";
//��20131007 AMS �C�� start��
			pagingInfo += "getReviewInfoHdk(" + nextpage + ",'" + gmn_id + "','" + beln_shop_kbn + "','" + kat_btgo + "','" + brs_img_url + "','" + brs_img_btn_url + "','" + ss_url + "','" + nssls_url + "','" + cmt_seq_shtk_kbn + "');return false;\">";
//��20131007 AMS �C�� end��
			pagingInfo += "����" + lastpageNum + "��></a></li>";
		}else if(nowPageNum != lastpage){
			pagingInfo += "<li><a href=\"javascript:void(0);\" onClick=\"";
//��20131007 AMS �C�� start��
			pagingInfo += "getReviewInfoHdk(" + nextpage + ",'" + gmn_id + "','" + beln_shop_kbn + "','" + kat_btgo + "','" + brs_img_url + "','" + brs_img_btn_url + "','" + ss_url + "','" + nssls_url + "','" + cmt_seq_shtk_kbn + "');return false;\">";
//��20131007 AMS �C�� end��
			
			pagingInfo += "����" + hyjkq + "��></a></li>";
		}
		
//��20130325 AMS �C�� start��
        pagingInfo += "</ul>";
//��20130917 AMS �C�� start��
			elemPaging.innerHTML = pagingInfo;
//��20130917 AMS �C�� end��

//��20130325 AMS �C�� end��
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
	
	
//��20111222 AMS �ǉ� end��
//��20131105 AMS �ǉ� start��
function initIncludeP1(pr_domain, beln_shop_kbn, dai_cate_id, chu_cate_id, sho_cate_id, epfb0107_uri){
    // PR�T�[�o�ւ̃��N�G�X�gURL�𐶐�
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
    
    // PR�T�[�o�Ƀ��N�G�X�g�𑗐M���APR�C���N���[�h�t�@�C�������擾
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
    // PR�C���N���[�h�t�@�C���������ƂɃC���N���[�hHTML���擾���A��ʂɖ��ߍ���
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
            // PR����u��
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
//��20131105 AMS �ǉ� end��
//��20120418 AMS �ǉ� start��
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
//��20120418 AMS �ǉ� end��

//��20130820 AMS �ǉ� start��
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
//��20130820 AMS �ǉ� end��

// ----------------------------------------------------
// �񓯊����i�R�����g�Q�l�񐔎擾
//   @param
//      beln_shop_kbn:�x���l�V���b�v�敪
//      shcm_snko_ks_select_flg:���i�R�����g�Q�l�񐔎擾�t���O�i1�F�擾����A�u�����N�F�擾���Ȃ��j
//      ss_url:�T�[�r�X�T�[�u���b�gURL
// ----------------------------------------------------
function selShcmSnkoKsInfoHdk(beln_shop_kbn, shcm_snko_ks_select_flg, ss_url) {
	
	if(shcm_snko_ks_select_flg == '1'){
		
		var objShcmSeqList = document.getElementsByName("SHCM_SEQ");
		
		if(objShcmSeqList != null && objShcmSeqList.length > 0){
		
			// ���N�G�X�gURL�𐶐�
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
//��20131007 AMS �C�� start��
						var shcmTagList = new Array('H_', 'L_', '');
						var items = info.SHCM_SNKO_KS_ITEM;
						for(var i in items){ 
							var shcmSeq = String(items[i].SHCM_SEQ); // ���i�R�����g�A��
							var shcmSnkoKs = String(items[i].SHCM_SNKO_KS); // ���i�R�����g�Q�l��
							for (i = 0; i < shcmTagList.length; i++) {
								// �Q�l��
								var objPShcmSnkoKs = document.getElementById("P_SHCM_SNKO_KS_" + shcmTagList[i] + shcmSeq);
								if(objPShcmSnkoKs != null){
									var htmlBuff = "<span>";
									htmlBuff += shcmSnkoKs;
									htmlBuff += "�l</span>���Q�l�ɂȂ�܂����B";
									objPShcmSnkoKs.innerHTML = htmlBuff;
									if(shcmSnkoKs > 0){
										objPShcmSnkoKs.style.display = "block";
									} else {
										objPShcmSnkoKs.style.display = "none";
									}
								}
							}
						}
//��20131007 AMS �C�� end��
					}
				}, 
				error: function() {
					// ���ɂ����Ȃ�
				}
			});
		}
	}
}
//��20130403 AMS �ǉ� end��
//��20130325 AMS �ǉ� start��
// ----------------------------------------------------
// �񓯊����i�R�����g�Q�l�񐔍X�V�E�\��
//   @param
//      beln_shop_kbn:�x���l�V���b�v�敪
//      shcm_seq:���i�R�����g�A��
//      brs_img_btn_url:�{�^���C���[�W�z�u�ꏊ
//      ss_url:�T�[�r�X�T�[�u���b�gURL
// ----------------------------------------------------
function updShcmSnkoKsInfoHdk(beln_shop_kbn, shcm_seq, brs_img_btn_url, ss_url) {
	// ���N�G�X�gURL�𐶐�
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
				var shcmSeq = String(info.SHCM_SEQ); // ���i�R�����g�A��
				var shcmSnkoKs = String(info.SHCM_SNKO_KS); // ���i�R�����g�Q�l��
//��20131007 AMS �C�� start��
				var shcmTagList = new Array('H_', 'L_', '');
				for (i = 0; i < shcmTagList.length; i++) {
					// �Q�l��
					var objPShcmSnkoKs = document.getElementById("P_SHCM_SNKO_KS_" + shcmTagList[i] + shcmSeq);
					//��20130403 AMS �ύX start��
					//if(objPShcmSnkoKs != null){
					//��20130403 AMS �ύX replace��
					if(objPShcmSnkoKs != null && shcmSnkoKs > 0){
					//��20130403 AMS �ύX end��
						var htmlBuff = "<span>";
						htmlBuff += shcmSnkoKs;
						htmlBuff += "�l</span>���Q�l�ɂȂ�܂����B";
						objPShcmSnkoKs.innerHTML = htmlBuff;
						objPShcmSnkoKs.style.display = "block";
					}
					
					// �Q�l�ɂȂ����{�^��
					var objAShcmSeq = document.getElementById("A_SHCM_SEQ_" + shcmTagList[i] + shcmSeq);
					var objIMGShcmSeq = document.getElementById("IMG_SHCM_SEQ_" + shcmTagList[i] + shcmSeq);
					if(objAShcmSeq != null && objIMGShcmSeq != null){
						objAShcmSeq.removeAttribute("href");
						var imgPath = brs_img_btn_url;
						imgPath += "review02.gif";
						objIMGShcmSeq.src = imgPath;
					}
				}
//��20131007 AMS �C�� end��
			}
		}, 
		error: function() {
			// ���ɂ����Ȃ�
		}
	});
}
// ----------------------------------------------------
// �񓯊����i�R�����g�Q�l�񐔃{�^����N���b�N�`�F�b�N
//   @param
//      shcm_seq:���i�R�����g�A��
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
//��20130325 AMS �ǉ� end��

// ----------------------------------------------------

//   �ÓI�ݒ�t�@�C���擾����
//    JSONP�`���̐ÓI�t�@�C�������擾����B

//   @param
//      ctlPattern: (1:"SNS�v���O�C��")

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

            // �������Ȃ�
    }).complete(function(xhr,status) {
        if (ctlPattern == "1") {
            // ��ʂ�SNS�\�����������s
            snsPluginDsp(snsHyjKbn);
        }
    });

    return ret;
}

// ----------------------------------------------------

//   �N�b�L�[���uTTINFOPER�v�̒l�擾����

//    �N�b�L�[���uTTINFOPER�v�̎w��L�[�̒l���擾����B

//   @param

//      keyName: �擾�Ώۂ̃L�[��

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

//   html��̎w��id�ɁuTTINFOPER�v�̒l�ݒ菈��

//    html��̎w��id�ɑ΂��āA�N�b�L�[���uTTINFOPER�v�̎w��L�[�̒l���擾����B

//   @param

//      ids: �擾�Ώۂ�id���̔z��

//      keyNames: �擾�Ώۂ́uTTINFOPER�v�L�[���̔z��

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

// URL�p�����[�^�z��
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

	// MC�̏ꍇ
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



//TOP��ʃ����L���O���Z�b�g
function getRankingInfoSpTop(nonssl_url) {
    // cookie���猻�ݑI�𒆂̃J�e�S��ID���擾
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
        //�����L���O��񂪂Ȃ��ꍇ�̕s�v�ȃ^�O�폜
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
            // �����L���O����HTML�𐶐�
                var INFO = data.CATEGORIES[0];
                var status = INFO.SRKEK_STAT;
                if (INFO.CATEGORY != null) {
                    for(var i = 0; i < INFO.CATEGORY.length; i++) {
                        count = count + 1;
                        var CATEGORY = INFO.CATEGORY[i];
                        var RANKING_TTL = CATEGORY.RANKING_TTL;                    // �����L���O�^�C�g��
                        rankingInfo += "<div id=\"ranking" + count + "\" >"
                        rankingInfo += "<h2>";
                        rankingInfo += RANKING_TTL;
                        rankingInfo += "</h2>";
                        rankingInfo += "<ol>";
                        for(var j = 0; j < CATEGORY.ITEM.length; j++) {
                            var ITEM = CATEGORY.ITEM[j];
                            var RANK = ITEM.RANK;                                // �����L���O
                            var KAT_MEI_PC = ITEM.KAT_MEI_PC;                    // ���i��
                            var BRAND_NAME = ITEM.BRAND_NAME;                    // �u�����h��
                            var RANK_IMAGE = ITEM.RANK_IMAGE;                    // �����L���O�摜
                            var SHN_DTL_URL = ITEM.SHN_DTL_URL;                  // �ڍ׃p�X
                            var SHN_IMG_URL = ITEM.SHN_IMG_URL;                  // ���i�C���[�W�摜
                            var PRICE = ITEM.PRICE;                              // ���z
                            var TOKKA_KBN = ITEM.TOKKA_KBN;                      // �����敪
                            var OUTL_SHN_KBN = ITEM>OUTL_SHN_KBN;                // �A�E�g���b�g�敪
                            var RATING = ITEM.RATING;                            // �]��
                            var COMMENT_SO_KQ = ITEM.COMMENT_SO_KQ;              // �R�����g��
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
                            // �]��
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
                // �����L���O����ݒ�
                if (rankingInfo != "") {
                    $("#ranking").html(rankingInfo);
                    for( var i = 0 ; i < count ; i++ ) {
                        var num = i + 1;
                        smp_getRecommend2("ranking" + num);
                    }
                }
            },
            // �N�b�L�[�ɐݒ肳��Ă���J�e�S���h�c�̃����L���O��񂪂Ȃ��ꍇ
            error: function() {
                $("#ranking-list").css({ "display": "none" });
            }
        });
    }
}

/* �C�� 150310brs1 TAM �R�R���� */
/* �C�� 150320brs1 TAM �R�R���� */

//�񓯊��J�[�g���i�\������
var CartObjFlg = false;
var cartInfo = "";
function CartObj(uri,SSLServletURL,belnShopKbn,imgPass){
	if ($('#cart-area .cart-area__slider').size() > 0) {
			$('#cart-area .cart-area__slider').html('<div class="loading"><img src="/pc/for_app/img/brs_img/loading01.gif"></div>');
	}
	CartObjFlg = true;
	//�J�[�g���i�\������
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
				//�J�[�g���i��HTML�^�O�Ɛ�������
				cartInfo = "";
				cartInfo += "<p class=\"cart-area__ttl\">�J�[�g�̒��̏��i</p>";
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
				cartInfo += "<img src=\"" +imgPass + "mypage/cart-area_btn01.png\" width=\"152\" height=\"30\" alt=\"�J�[�g������\"></a></div>";
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
				cartInfo += "<p class=\"cart-area__ttl\">�J�[�g�̒��̏��i</p>";
				cartInfo += "<p class=\"cart-area__none\">�J�[�g�ɏ��i������ꍇ�A���i��\���������܂��B</p>";
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
//�񓯊����C�ɓ��胊�X�g���i�\������
var FavoriteObjFlg = false;
var favoriteInfo = "";
function FavoriteObj(uri,SSLServletURL,belnShopKbn,imgPass){
	if ($('#favorite-area .favorite-area__slider').size() > 0) {
			$('#favorite-area .favorite-area__slider').html('<div class="loading"><img src="/pc/for_app/img/brs_img/loading01.gif"></div>');
	}
	FavoriteObjFlg = true;
	
	//���C�ɓ��胊�X�g���i�\������
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
				//���C�ɓ��胊�X�g���i��HTML�^�O�Ɛ�������
				favoriteInfo = '';
				favoriteInfo += "<p class=\"favorite-area__ttl\">���C�ɓ��胊�X�g</p>";
				favoriteInfo += "<div class=\"favorite-area__btn\">";
				favoriteInfo += "<a href=\"" + SSLServletURL + "/EPFB00/EPFB0050/dFavorLstShow?BELN_SHOP_KBN=" + belnShopKbn + "\">";
				favoriteInfo += "<img src=\"" +imgPass + "mypage/favorite-area_btn01.png\" width=\"152\" height=\"30\" alt=\"���C�ɓ��胊�X�g\"></a></div>";
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
				favoriteInfo += "<p class=\"favorite-area__ttl\">���C�ɓ��胊�X�g</p>";
				favoriteInfo += "<p class=\"favorite-area__none\">���C�ɓ��胊�X�g�ɏ��i������ꍇ�A���i��\���������܂��B</p>";
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

/* �C�� 150320brs1 TAM �R�R�܂� */
/* �C�� 150310brs1 TAM �R�R�܂� */

// AMS�I�[�_�[�����̓t���[���P add start 2016/02/25
// URL�p�����[�^�l�擾����
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
// AMS�I�[�_�[�����̓t���[���P add end   2016/02/25
