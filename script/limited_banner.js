$(function(){
if(!document.URL.match(/DAI_CATEGORY_ID=22/)) {
	//グローバルナビ有無
	if($('#globalnavi').length){
		$('#globalnavi').after('<div class="limited_banner"></div>');
	} else {
		$('#headerArea').after('<div class="limited_banner"></div>');
	}

	$('.limited_banner').append('<a href="/pc/popup/help/word/epxbsa13.html" class="popup_newwin"><img src="/pc/for_app/img/brs_img/signup_campaign_950_45.jpg" alt="ベルメゾンネットで‘はじめて’キャンペーン　新規会員登録で1,000円OFFクーポンプレゼント！" title="ベルメゾンネットで‘はじめて’キャンペーン　新規会員登録で1,000円OFFクーポンプレゼント！"></a>');
	$('.limited_banner').css('padding', '10px 0');
	$('.limited_banner').css('text-align', 'center');
	$('.limited_banner .popup_newwin').click(function(){
        window.open(this.href,'WindowName', 'width=760,height=630,scrollbars=yes');
        return false;
    });

	//購入履歴判定
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

	//ログオン判定
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
