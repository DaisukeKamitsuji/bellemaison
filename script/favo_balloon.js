var targetTag        = "div";	// �}�E�X�I�[�o�[�Ńo���[����\������^�O��
var targetClass      = "photo";	// �}�E�X�I�[�o�[�Ńo���[����\������N���X��
var targetCnt        = 0;
var isIE = 0;
var IMG_MAX = 4;
var IMG_LST_COL = 5;
var cnt = 0;
if ( navigator.appName.indexOf("Microsoft") >= 0 ) {
	isIE = 1;
}

// �C�� 100115 TAM ��������
baloonFlag = 1;		//�o���[���o�����ǂ����̔���
// �C�� 100115 TAM �����܂�


// �}�E�X�I�[�o�[�Ńo���[����\������G�������g������
balloon = function ()
{
    targetCnt=0;
    var fzkjho = document.getElementsByName("FZK_JHO");
	if (fzkjho.length == 0) {
		return;
	}

	var elements = document.getElementsByTagName(targetTag);
	if(elements) {
		for (var i = 0; i < elements.length; i ++) {
			var elClass = elements[i].className;
			if (elClass.match(targetClass)) unitipize(elements[i]);
		}
	}
}

// �}�E�X�I�[�o�[�Ńo���[����\������G�������g�� onmouseover ��ǉ�
unitipize = function (element)
{
	targetCnt++; // �Y���G�������g�̃J�E���g
    if (cnt == IMG_LST_COL) {
    	cnt = 0;
    }
	cnt++;
	var a = element;

	// �Y���G�������g�� position �ǉ�
	var strStyle = "position:relative;z-index:1;";
	if ( isIE ) {
		a.style.cssText = strStyle;
	} else {
		a.setAttribute("style", "position:relative;z-index:1;");
	}
	// �o���[���ݒ�  �R�R�̕����Ƀo���[���̏���������L�����Ă��������B
	var className;
	var dispHTML     = '';
	var sArray;
	var fzkjh = document.getElementsByName("FZK_JHO").item(targetCnt-1).value;

	if (fzkjh != null && fzkjh != "") {
		sArray = fzkjh.split(" ");
	} else {
		return;
	}
	if (sArray != null && sArray.length != 0) {
		if (targetClass.match(a.className)) {  

			if (sArray.length > IMG_MAX) {
				if (cnt <= IMG_LST_COL/2 + 1) {
					className = "balloon balloonrightcol rightetc";
				} else {
					className = "balloon balloonleftcol leftetc";
				}
			} else {
				if (cnt <= IMG_LST_COL/2 + 1) {
					className = "balloon balloonrightcol";
				} else {
					className = "balloon balloonleftcol";
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
	// �o���[���ݒ�  �R�R�܂ŁB

// �C�� 100115 TAM ��������
	a.onmouseover = function() { 
		var elements = document.getElementsByTagName(targetTag);
		if(elements) {
			var cnt = 0;
			for (var i = 0; i < elements.length; i ++) {
				var elClass = elements[i].className;
				if (elClass.match(targetClass)){
					if(elements[i].id != cnt){
						elements[i].setAttribute("id", cnt);
					}
					cnt++;
				}
				
			}
		}

		
		if (sArray.length > IMG_MAX) {
			if (a.id  % IMG_LST_COL < 3) {
				className = "balloon balloonrightcol rightetc";
			} else {
				className = "balloon balloonleftcol leftetc";
			}
		} else {
			if (a.id  % IMG_LST_COL < 3) {
				className = "balloon balloonrightcol";
			} else {
				className = "balloon balloonleftcol";
			}
		}

		if(baloonFlag == 1){build(a, className, dispHTML);}

	};
// �C�� 100115 TAM �����܂�
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
/* �C�� 130422brs1 TAM �R�R���� */
		divballoon.setAttribute("class", className);
/* �C�� 130422brs1 TAM �R�R�܂� */
	} else {
		divballoon.setAttribute("class", className);
	}

	divballoon.innerHTML = dispHTML;
	a.appendChild(divballoon);
}
