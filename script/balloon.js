var targetTag        = "div";	// �}�E�X�I�[�o�[�Ńo���[����\������^�O��
var targetClass      = "img";	// �}�E�X�I�[�o�[�Ńo���[����\������N���X��
var targetClass2     = "itemResultPhoto";	// �}�E�X�I�[�o�[�Ńo���[����\������N���X��
var targetClass3     = "photo";	// �}�E�X�I�[�o�[�Ńo���[����\������N���X��
var targetCnt        = 0;
var isIE = 0;
var IMG_MAX = 4;
var IMG_LST_COL = 4;
var cnt = 0;
var loopcount = 0;

if ( navigator.appName.indexOf("Microsoft") >= 0 ) {
	isIE = 1;
}

// �C�� 100115 TAM ��������
baloonFlag = 1;		//�o���[���o�����ǂ����̔���
// �C�� 100115 TAM �����܂�


// �}�E�X�I�[�o�[�Ńo���[����\������G�������g������
balloon = function (pageNum)
{
/* �C�� 131001brs1 TAM �R�R���� */
	cnt=0;
/* �C�� 131001brs1 TAM �R�R�܂� */
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

// �}�E�X�I�[�o�[�Ńo���[����\������G�������g�� onmouseover ��ǉ�
unitipize = function (element, pageNum)
{
	targetCnt++; // �Y���G�������g�̃J�E���g
    if (cnt == IMG_LST_COL) {
    	cnt = 0;
    }
	cnt++;

	var elClass = element.className;
	if (elClass.match(targetClass3+pageNum) || elClass.match(targetClass2+pageNum)) {
		IMG_LST_COL = 6;
	}
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
			// �o���[�����摜�\��
			if (sArray.length > IMG_MAX) {
				if ( targetCnt % 2 ) {
					className = "balloon balloonrightcol rightetc";	// ��͉E���ɕ\��
				} else {
					className = "balloon balloonleftcol leftetc";	// ��͉E���ɕ\��
				}
			} else {
				if ( targetCnt % 2 ) {
					className = "balloon balloonrightcol";	// ��͉E���ɕ\��
				} else {
					className = "balloon balloonleftcol";	// �����͍����ɕ\��
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
	// �o���[���ݒ�  �R�R�܂ŁB

// �C�� 100115 TAM ��������
	a.onmouseover = function() { if(baloonFlag == 1){build(a, className, dispHTML);} };
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
/* �C�� 130925brs1 TAM �R�R���� */
		divballoon.setAttribute("class", className);
/* �C�� 130925brs1 TAM �R�R�܂� */
	} else {
		divballoon.setAttribute("class", className);
	}

	divballoon.innerHTML = dispHTML;
	a.appendChild(divballoon);
}
