$(function(){
if(!document.URL.match(/DAI_CATEGORY_ID=22/)) {
	//�O���[�o���i�r�L��
	if($('#globalnavi').length){
		$('#globalnavi').after('<div class="limited_banner"></div>');
	} else {
		$('#headerArea').after('<div class="limited_banner"></div>');
	}

	$('.limited_banner').append('<a href="/pc/popup/help/word/epxbsa13.html" class="popup_newwin"><img src="/pc/for_app/img/brs_img/signup_campaign_950_45.jpg" alt="�x�����]���l�b�g�Łe�͂��߂āf�L�����y�[���@�V�K����o�^��1,000�~OFF�N�[�|���v���[���g�I" title="�x�����]���l�b�g�Łe�͂��߂āf�L�����y�[���@�V�K����o�^��1,000�~OFF�N�[�|���v���[���g�I"></a>');
	$('.limited_banner').css('padding', '10px 0');
	$('.limited_banner').css('text-align', 'center');
	$('.limited_banner .popup_newwin').click(function(){
        window.open(this.href,'WindowName', 'width=760,height=630,scrollbars=yes');
        return false;
    });

	//�w�����𔻒�
	var mboxcpf = cookieDecodeURIRd('mboxCPF');
	var historyck = 0;
	if (mboxcpf) {
		var mboxcpfArr = mboxcpf.split('|');
		for (var i = 0; i < mboxcpfArr.length; i++) {
			var str = mboxcpfArr[i].split('#');
			if (str[0] == "_numPurchased" && str[1] >= 1) {
				historyck = 1;
			}
		}
	}

	//���O�I������
	var ttinfo = cookieDecodeURIRd('TTINFOPER');
	var loginck = 0;
	if (ttinfo) {
		if (ttinfo.indexOf('logonsm=1') != -1) {
			loginck = 1;
		}
	}

	if (historyck == 0 && loginck == 0) {
		$('.limited_banner').show();
	} else {
		$('.limited_banner').hide();
	}
}
});
