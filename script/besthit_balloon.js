var targetTag        = "div";	// �}�E�X�I�[�o�[�Ńo���[����\������^�O��
var targetClass      = "bestHitPhoto";	// �}�E�X�I�[�o�[�Ńo���[����\������N���X��
var targetCnt        = 0;
var isIE = 0;
var IMG_MAX = 4;
var IMG_LST_COL = 6;
var IMG_LST_COL2 = 5;

var cnt = 0;
if ( navigator.appName.indexOf("Microsoft") >= 0 ) {
	isIE = 1;
}

// �}�E�X�I�[�o�[�Ńo���[����\������G�������g������
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
			if (elClass.match(targetClass+pageNum)) unitipize(elements[i], pageNum);
		}
	}
}

// �}�E�X�I�[�o�[�Ńo���[����\������G�������g�� onmouseover ��ǉ�
unitipize = function (element, pageNum)
{
	var a = element;
	targetCnt++; // �Y���G�������g�̃J�E���g
	if (cnt == IMG_LST_COL2) {
		cnt = 0;
	}
	cnt++;

	// �o���[���ݒ�  �R�R�̕����Ƀo���[���̏���������L�����Ă��������B
	var className;
	var dispHTML     = '';
	var sArray;
	var fzkjh = document.getElementsByName("FZK_JHO"+pageNum).item(targetCnt-1).value;

	if (fzkjh != null && fzkjh != "") {
		sArray = fzkjh.split(" ");
	} else {
		return;
	}
	if (sArray != null && sArray.length != 0) {
			if (sArray.length > IMG_MAX) {
				if (cnt <= IMG_LST_COL/2) {
					className = "balloon balloonrightcol rightetc";
				} else {
					className = "balloon balloonleftcol leftetc";
				}
			} else {
				if (cnt <= IMG_LST_COL/2) {
					className = "balloon balloonrightcol";
				} else {
					className = "balloon balloonleftcol";
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
	// �o���[���ݒ�  �R�R�܂ŁB
	a.onmouseover = function() {build(a, className, dispHTML);};
	a.onmouseout  = function() {balloonOff(a);};
}

balloonOff = function (a)
{
	// �Y���G�������g�� position �ǉ�
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
	
	// �Y���G�������g�� position �ǉ�
	var strStyle = "position:relative;z-index:200000;";
	if ( isIE ) {
		a.style.cssText = strStyle;
	} else {
		a.setAttribute("style", "position:relative;z-index:200000;");
	}

	if ( isIE ) {
		divballoon.setAttribute("className", className);
/* �ǋL 141216 EC �R�R���� */
		divballoon.setAttribute("class", className);
/* �ǋL 141216 EC TAM �R�R�܂� */
	} else {
		divballoon.setAttribute("class", className);
	}

	divballoon.innerHTML = dispHTML;
	a.appendChild(divballoon);
}