/* 
 * org.thickbox.order.js�̓��C�u���������Ƃ��Ă��邽�߁A��{�I�ɂ͕ύX���s���Ȃ��B
 * ���̂��߁Aorg.thickbox.order.js�Ɋ֘A����@�\�̒ǉ����͂��̃t�@�C���ɋL�q����B
 * jsp�ł�org.thickbox.order.js�Ɠ��t�@�C���ւ̎Q�Ƃ�ǉ����Ďg�p����B
 */
// ���C�g�{�b�N�X�܂��̓|�b�v�A�b�v�\�������E�B���h�E�����
function tb_GenericClose(){
	if (parent.document.getElementById("TB_window") != null) {
		parent.tb_remove();
	} else {
		close();
	}
}
