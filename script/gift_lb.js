/* 
 * org.thickbox.order.js�̓��C�u���������Ƃ��Ă��邽�߁A��{�I�ɂ͕ύX���s���Ȃ��B
 * ���̂��߁Aorg.thickbox.order.js�Ɋ֘A����@�\�̒ǉ����͂��̃t�@�C���ɋL�q����B
 * jsp�ł�org.thickbox.order.js�Ɠ��t�@�C���ւ̎Q�Ƃ�ǉ����Ďg�p����B
 */
// ���C�g�{�b�N�X�܂��̓|�b�v�A�b�v�\�������E�B���h�E�����
function winClose(){
	if (parent.document.getElementById("TB_window") != null) {
		var linkObj = parent.document.getElementsByTagName('Select');
		for (var i=0; i<linkObj.length; i++) {
			linkObj[i].disabled = false;
		}
		var iframe = parent.document.getElementById("TB_window");
		iframe.style.position = "";
		parent.scrollTo(0,parent.document.form01.SCROLL_TOP.value);
	}
	tb_GenericClose();
}

//���C�g�{�b�N�X�̉�ʃT�C�Y�ύX����ѕ\���ʒu���Έʒu�Ɏw��
function resizeIframe() {
	if (parent.document.getElementById("TB_window") != null) {
		//�X�N���[�����܂މ�ʂ̍������擾
		var height = document.body.scrollHeight;
		//�\�����Ă��郉�C�g�{�b�N�X�̍������擾
		var iframeContent = parent.document.getElementById("TB_iframeContent");
		var iframHeight = iframeContent.style.height;
		var iframe = parent.document.getElementById("TB_window");
		if(iframHeight.length>2){ 
			//���C�g�{�b�N�X�̍��������i���C�g�{�b�N�X���́j��ʂ̍����̕����傫���ꍇ
			if(height>iframHeight.slice(0, -2)){
				iframeContent.style.height = height+'px';
			}
			if (parent.document.form01.MARGIN_TOP.value == "") {
				var scrollTopValue = parent.document.form01.SCROLL_TOP.value;
				var marginTopValue = iframe.style.marginTop;
				if(marginTopValue.length>2){
					marginTopValue = parseInt(marginTopValue.slice(0, -2),10);
					scrollTopValue = parseInt(scrollTopValue,10);
					//���C�g�{�b�N�X�̕\���ʒu���w��
					var mTop = scrollTopValue+marginTopValue+60;
					iframe.style.marginTop = mTop+'px';
					parent.document.form01.MARGIN_TOP.value = mTop;
				}
			}
			//���C�g�{�b�N�X�̕\���ʒu���Œ�
			iframe.style.position = "absolute";
		}
	}
}