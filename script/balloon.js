var targetTag        = "div";	// マウスオーバーでバルーンを表示するタグ名
var targetClass      = "img";	// マウスオーバーでバルーンを表示するクラス名
var targetClass2     = "itemResultPhoto";	// マウスオーバーでバルーンを表示するクラス名
var targetClass3     = "photo";	// マウスオーバーでバルーンを表示するクラス名
var targetCnt        = 0;
var isIE = 0;
var IMG_MAX = 4;
var IMG_LST_COL = 4;
var cnt = 0;
var loopcount = 0;

if ( navigator.appName.indexOf("Microsoft") >= 0 ) {
	isIE = 1;
}

// 修正 100115 TAM ここから
baloonFlag = 1;		//バルーン出すかどうかの判定
// 修正 100115 TAM ここまで


// マウスオーバーでバルーンを表示するエレメントを検索
balloon = function (pageNum)
{
/* 修正 131001brs1 TAM ココから */
	cnt=0;
/* 修正 131001brs1 TAM ココまで */
    targetCnt=0;
    
    var fzkjho = document.getElementsByName("FZK_JHO"+pageNum);
	if (fzkjho.length == 0) {
		return;
	}
    loopcount = fzkjho.length;
	
	var elements = document.getElementsByTagName(targetTag);
	if(elements) {
		for (var i = 0; i < elements.length; i ++) {
			var elClass = elements[i].className;
			if (elClass.match(targetClass+pageNum)) unitipize(elements[i], pageNum);
			if (elClass.match(targetClass2+pageNum)) unitipize(elements[i], pageNum);
			if (elClass.match(targetClass3+pageNum)) unitipize(elements[i], pageNum);
		}
	}
}

// マウスオーバーでバルーンを表示するエレメントに onmouseover を追加
unitipize = function (element, pageNum)
{
	targetCnt++; // 該当エレメントのカウント
    if (cnt == IMG_LST_COL) {
    	cnt = 0;
    }
	cnt++;

	var elClass = element.className;
	if (elClass.match(targetClass3+pageNum) || elClass.match(targetClass2+pageNum)) {
		IMG_LST_COL = 6;
	}
	var a = element;

	// 該当エレメントに position 追加
	var strStyle = "position:relative;z-index:1;";
	if ( isIE ) {
		a.style.cssText = strStyle;
	} else {
		a.setAttribute("style", "position:relative;z-index:1;");
	}
	
	// バルーン設定  ココの部分にバルーンの条件分岐を記入してください。
	var className;
	var dispHTML     = '';
	var sArray;
	var fzkjh;
	
	if (loopcount > (targetCnt-1)) {
		fzkjh = document.getElementsByName("FZK_JHO"+pageNum).item(targetCnt-1).value;
	} else {
		fzkjh = "";
	}
	
	if (fzkjh != null && fzkjh != "") {
		sArray = fzkjh.split(" ");
	} else {
		return;
	}
	if (sArray != null && sArray.length != 0) {
	    if (pageNum!='' && ((targetClass+pageNum).match(a.className) || (targetClass3+pageNum).match(a.className))) {  
			// バルーン内画像表示
			if (sArray.length > IMG_MAX) {
				if ( targetCnt % 2 ) {
					className = "balloon balloonrightcol rightetc";	// 奇数は右側に表示
				} else {
					className = "balloon balloonleftcol leftetc";	// 奇数は右側に表示
				}
			} else {
				if ( targetCnt % 2 ) {
					className = "balloon balloonrightcol";	// 奇数は右側に表示
				} else {
					className = "balloon balloonleftcol";	// 偶数は左側に表示
				}
			}
		} else {
			if (sArray.length > IMG_MAX) {
				if (cnt <= IMG_LST_COL/2) {
					className = "balloon balloonrightcol rightetc";
				} else {
					className = "balloon balloonleftcol leftetc";
				}
			} else {
				if (elClass.match(targetClass3+pageNum) || elClass.match(targetClass2+pageNum)) {
					if (cnt <= IMG_LST_COL/2) {
						className = "balloon balloonrightcol";
					} else {
						className = "balloon balloonleftcol";
					}
				} else {
					if ((cnt % 4 == 0) || (cnt % 4 == 3)) {
						className = "balloon balloonleftcol";
					} else {
						className = "balloon balloonrightcol";
					}
				}
			}
		}

		dispHTML = '<!--'	
		for (var i = 0; i < sArray.length; i++) {
			if (i == IMG_MAX) {
				break;
			}
			if (i==0) {
				dispHTML += '  --><img src="' + sArray[i] + '" class="color1st" width="55" height="55"><!--'
			} else {
				dispHTML += '  --><img src="'  + sArray[i] + '" class="color" width="55" height="55"><!--'
			}
		}
		dispHTML += '-->';
	}
	// バルーン設定  ココまで。

// 修正 100115 TAM ここから
	a.onmouseover = function() { if(baloonFlag == 1){build(a, className, dispHTML);} };
// 修正 100115 TAM ここまで
	a.onmouseout  = function() {balloonOff();};
}


balloonOff = function ()
{
	if ( document.getElementById("balloon") ) {
		var oldballoon = document.getElementById("balloon");
		var parent = oldballoon.parentNode;
		parent.removeChild(oldballoon);
	}
}

build = function (a, className, dispHTML)
{
	balloonOff();

	var divballoon = document.createElement("div");
	divballoon.setAttribute("id", "balloon");

	if ( isIE ) {
		divballoon.setAttribute("className", className);
/* 修正 130925brs1 TAM ココから */
		divballoon.setAttribute("class", className);
/* 修正 130925brs1 TAM ココまで */
	} else {
		divballoon.setAttribute("class", className);
	}

	divballoon.innerHTML = dispHTML;
	a.appendChild(divballoon);
}
