$(function(){
if(!document.URL.match(/cpg\/days/)) {
	if(document.URL.match(/EPFB0002/)){
		if($('[alt="�y�[�W�̐擪�֖߂�"]','div.a-right a').length){
			$('[alt="�y�[�W�̐擪�֖߂�"]','div.a-right a').parent().parent().before('<div class="limited_footer"></div>');
		} else {
			$('.footer-bnav-r').before('<div class="limited_footer"></div>');
			$('.limited_footer').css('padding-top', '15px');
		}
	} else {
		if(document.URL.match(/\/ep\/s\//)) {
			$('.footer-bnav-r').before('<div class="limited_footer"></div>');
			$('.limited_footer').css('padding-top', '15px');
		} else {
			if($('#bnr-footarea').length){
				$('#bnr-footarea').before('<div class="limited_footer"></div>');
			} else if($('#footer-bnav').length){
				$('#footer-bnav').before('<div class="limited_footer"></div>');
			} else {
				$('.footer-bnav-r').before('<div class="limited_footer"></div>');
				$('.limited_footer').css('padding-top', '15px');
			}
		}
	}

	$('.limited_footer').append('<a href="/cpg/interior/towel/towel_index.html"><img src="/pc/for_app/img/brs_img/01_towel_960_100.jpg" alt="�y�e���rCM�Љ�i�z�����ӂ���^�I�� ��499�` 2�����l�ȏ�ɓ�����I�Ђ݂̃^�I���L�����y�[�����{��" title="�y�e���rCM�Љ�i�z�����ӂ���^�I�� ��499�` 2�����l�ȏ�ɓ�����I�Ђ݂̃^�I���L�����y�[�����{��"></a>');
	$('.limited_footer').css('text-align', 'center');
	$('.limited_footer').css('margin', '0');
	$('.limited_footer').css('padding-bottom', '15px');
}
});