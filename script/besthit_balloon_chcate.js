var targetTag        = "div";	// �}�E�X�I�[�o�[�Ńo���[����\������^�O��
var targetClass      = "bestHitPhoto";	// �}�E�X�I�[�o�[�Ńo���[����\������N���X��
var targetCnt        = 0;
var isIE = 0;
var IMG_MAX = 4;
var RIGHT_BALLOON = 2;
var allrankcnt = 0;

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
			if (elClass.match(targetClass+pageNum)) {
				allrankcnt++;
				unitipize(elements[i], pageNum);
			}
		}
	}
}

// �}�E�X�I�[�o�[�Ńo���[����\������G�������g�� onmouseover ��ǉ�
unitipize = function (element, pageNum, rank_value)
{
	var a = element;
	targetCnt++; // �Y���G�������g�̃J�E���g


	// �o���[���ݒ�  �R�R�̕����Ƀo���[���̏���������L�����Ă��������B
	var className;
	var dispHTML     = '';
	var sArray;
	var fzkjh = document.getElementsByName("FZK_JHO"+pageNum).item(targetCnt-1).value;
	var obj = document.getElementsByName('rank');
	//�����L���O����
	var ranking = obj[allrankcnt-1].value;	
	
	
	if (fzkjh != null && fzkjh != "") {
		sArray = fzkjh.split(" ");
	} else {
		return;
	}
	if (sArray != null && sArray.length != 0) {
			//�w���IMG_MAX�l�𒴂����etc�����ǉ��̔w�i
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
	} else {
		divballoon.setAttribute("class", className);
	}

	divballoon.innerHTML = dispHTML;
	a.appendChild(divballoon);
}