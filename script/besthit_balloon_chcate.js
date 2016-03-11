var targetTag        = "div";	// マウスオーバーでバルーンを表示するタグ名
var targetClass      = "bestHitPhoto";	// マウスオーバーでバルーンを表示するクラス名
var targetCnt        = 0;
var isIE = 0;
var IMG_MAX = 4;
var RIGHT_BALLOON = 2;
var allrankcnt = 0;

if ( navigator.appName.indexOf("Microsoft") >= 0 ) {
	isIE = 1;
}

// マウスオーバーでバルーンを表示するエレメントを検索
balloon = function (pageNum)
{
    targetCnt=0;
    var fzkjho = document.getElementsByName("FZK_JHO"+pageNum);
	if (fzkjho.length == 0) {
		return;
	}

	var elements = document.getElementsByTagName(targetTag);
	if(elements) {
		for (var i = 0; i < elements.length; i ++) {
			var elClass = elements[i].className;
			if (elClass.match(targetClass+pageNum)) {
				allrankcnt++;
				unitipize(elements[i], pageNum);
			}
		}
	}
}

// マウスオーバーでバルーンを表示するエレメントに onmouseover を追加
unitipize = function (element, pageNum, rank_value)
{
	var a = element;
	targetCnt++; // 該当エレメントのカウント


	// バルーン設定  ココの部分にバルーンの条件分岐を記入してください。
	var className;
	var dispHTML     = '';
	var sArray;
	var fzkjh = document.getElementsByName("FZK_JHO"+pageNum).item(targetCnt-1).value;
	var obj = document.getElementsByName('rank');
	//ランキング順位
	var ranking = obj[allrankcnt-1].value;	
	
	
	if (fzkjh != null && fzkjh != "") {
		sArray = fzkjh.split(" ");
	} else {
		return;
	}
	if (sArray != null && sArray.length != 0) {
			//指定のIMG_MAX値を超えるとetc文字追加の背景
			if (sArray.length > IMG_MAX) {
				if (ranking <= RIGHT_BALLOON) {
					className = "balloon balloonrightcolchcate rightetc";
				} else {
					className = "balloon balloonleftcolchcate leftetc";
				}
			} else {
				if (ranking <= RIGHT_BALLOON) {
					className = "balloon balloonrightcolchcate";
				} else {
					className = "balloon balloonleftcolchcate";
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
	a.onmouseover = function() {build(a, className, dispHTML);};
	a.onmouseout  = function() {balloonOff(a);};	
}

balloonOff = function (a)
{
	// 該当エレメントに position 追加
	var strStyle = "position:relative;z-index:1;";
	if ( isIE ) {
		a.style.cssText = strStyle;
	} else {
		a.setAttribute("style", "position:relative;z-index:1;");
	}

	if ( document.getElementById("balloon") ) {
		var oldballoon = document.getElementById("balloon");
		var parent = oldballoon.parentNode;
		parent.removeChild(oldballoon);
	}

}

build = function (a, className, dispHTML)
{
	balloonOff(a);

	var divballoon = document.createElement("div");
	divballoon.setAttribute("id", "balloon");
	
	// 該当エレメントに position 追加
	var strStyle = "position:relative;z-index:200000;";
	if ( isIE ) {
		a.style.cssText = strStyle;
	} else {
		a.setAttribute("style", "position:relative;z-index:200000;");
	}

	if ( isIE ) {
		divballoon.setAttribute("className", className);
	} else {
		divballoon.setAttribute("class", className);
	}

	divballoon.innerHTML = dispHTML;
	a.appendChild(divballoon);
}