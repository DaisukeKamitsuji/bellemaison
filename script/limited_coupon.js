// --------------------------------------------------
// �N�[�|���L�������J�E���g�_�E��
// --------------------------------------------------

// Cookie�`�F�b�N
var profarr = mboxGetPersistProfile("mboxCPF");
profarr = profarr.concat(getCookiesAsArray('TTINFOPER', ';'));
var ck_mbox = 0;
var ck_ttinfo = 0;
for (var i = 0; i < profarr.length; i++) {
	//���O�I���`�F�b�N
	if(profarr[i].indexOf('_isLogin=1') != -1) {
		ck_mbox = 1;
	}

	//�N�[�|���ێ��`�F�b�N
	if(profarr[i].indexOf('cmpno=K254') != -1) {
		ck_ttinfo = 1;
	}
	if(profarr[i].indexOf('cmpno=K644') != -1) {
		ck_ttinfo = 2;
	}
}

// �����̓��t
var toDay = new Date();

// ----------�yK254�z500�~OFF�i5,000�~�ȏ�j���ԁF3/15�`3/30
if(ck_mbox == 1 && ck_ttinfo == 1) {
	// �J�n����
	var beginDay = new Date(2016, 3-1, 15, 0, 0, 0);
	// �I������
	var endDay = new Date(2016, 3-1, 30, 23, 59, 59);

	if (toDay >= beginDay && toDay < endDay) {
		// �g�p�����v�Z
		var endDaysec = endDay.getTime()-toDay.getTime();
		var endDaynext = Math.floor(endDaysec/(1000*60*60*24));
		endDaynext = endDaynext + 1;

		// �N�[�|��html�쐬
		var coupon = '<div id="coupon">\n';
		coupon = coupon +'<p class="date"><img src="/pc/for_app/img/brs_img/0330coupon_pc_date.png" alt="3/30�i���j�܂ŁI" title="3/30�i���j�܂ŁI"></p>\n';
		coupon = coupon +'<dl>\n';
		coupon = coupon +'<dt>���q�l����</dt>\n';
		coupon = coupon +'<dd class="price"><span><em>500</em>�~OFF</span>�N�[�|��</dd>\n';
		coupon = coupon +'<dd class="countdown">�̊����܂ł���<em>'+ endDaynext +'</em>���ł��B</dd>\n';
		coupon = coupon +'<dd class="attention">1��̂�������5,000�~(�ŕ�)�ȏ�w���̍ۂɂ����p�ł��܂��B<br>�s���Ⴂ�Ŋ��ɃN�[�|���������p�ς݂̏ꍇ�͂��e�͂��������B</dd>\n';
		coupon = coupon +'</dl>\n';
		coupon = coupon +'<p class="number">�N�[�|���ԍ�<br><em>K254</em></p>\n';
		coupon = coupon +'</div>\n';

		$(function(){
			if(document.URL.match(/\/ep\/srvlt\/EPFB00\/EPFB0005\/dProdDtlShow\?/) && document.URL.match(/BELN_SHOP_KBN=100/)) {
				$('.hproduct').before(coupon);
			} else if(document.URL.match(/\/ep\/srvlt\/EPJB00\/EPJB0001\/dCartShow\?BELN_SHOP_KBN=100/)) {
				$('form[name="form01"]').before(coupon);
			}
		});
	}
}

// ----------�yK644�z500�~OFF�i5,000�~�ȏ�j���ԁF3/15�`3/31
if(ck_mbox == 1 && ck_ttinfo == 2) {
	// �J�n����
	var beginDay = new Date(2016, 3-1, 15, 0, 0, 0);
	// �I������
	var endDay = new Date(2016, 3-1, 31, 23, 59, 59);

	if (toDay >= beginDay && toDay < endDay) {
		// �g�p�����v�Z
		var endDaysec = endDay.getTime()-toDay.getTime();
		var endDaynext = Math.floor(endDaysec/(1000*60*60*24));
		endDaynext = endDaynext + 1;		
		
		// �N�[�|��html�쐬
		var coupon = '<div id="coupon">\n';
		coupon = coupon +'<p class="date"><img src="/pc/for_app/img/brs_img/0331coupon_pc_date.png" alt="3/31�i�؁j�܂ŁI" title="3/31�i�؁j�܂ŁI"></p>\n';
		coupon = coupon +'<dl>\n';
		coupon = coupon +'<dt>���q�l����</dt>\n';
		coupon = coupon +'<dd class="price"><span><em>500</em>�~OFF</span>�N�[�|��</dd>\n';
		coupon = coupon +'<dd class="countdown">�̊����܂ł���<em>'+ endDaynext +'</em>���ł��B</dd>\n';
		coupon = coupon +'<dd class="attention">1��̂�������5,000�~(�ŕ�)�ȏ�w���̍ۂɂ����p�ł��܂��B<br>�s���Ⴂ�Ŋ��ɃN�[�|���������p�ς݂̏ꍇ�͂��e�͂��������B</dd>\n';
		coupon = coupon +'</dl>\n';
		coupon = coupon +'<p class="number">�N�[�|���ԍ�<br><em>K644</em></p>\n';
		coupon = coupon +'</div>\n';

		$(function(){
			if(document.URL.match(/\/ep\/srvlt\/EPFB00\/EPFB0005\/dProdDtlShow\?/) && document.URL.match(/BELN_SHOP_KBN=100/)) {
				$('.hproduct').before(coupon);
			} else if(document.URL.match(/\/ep\/srvlt\/EPJB00\/EPJB0001\/dCartShow\?BELN_SHOP_KBN=100/)) {
				$('form[name="form01"]').before(coupon);
			}
		});
	}
}