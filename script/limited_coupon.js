// --------------------------------------------------
// クーポン有効期限カウントダウン
// --------------------------------------------------

// Cookieチェック
var profarr = mboxGetPersistProfile("mboxCPF");
profarr = profarr.concat(getCookiesAsArray('TTINFOPER', ';'));
var ck_mbox = 0;
var ck_ttinfo = 0;
for (var i = 0; i < profarr.length; i++) {
	//ログオンチェック
	if(profarr[i].indexOf('_isLogin=1') != -1) {
		ck_mbox = 1;
	}

	//クーポン保持チェック
	if(profarr[i].indexOf('cmpno=K254') != -1) {
		ck_ttinfo = 1;
	}
	if(profarr[i].indexOf('cmpno=K644') != -1) {
		ck_ttinfo = 2;
	}
}

// 今日の日付
var toDay = new Date();

// ----------【K254】500円OFF（5,000円以上）期間：3/15～3/30
if(ck_mbox == 1 && ck_ttinfo == 1) {
	// 開始日時
	var beginDay = new Date(2016, 3-1, 15, 0, 0, 0);
	// 終了日時
	var endDay = new Date(2016, 3-1, 30, 23, 59, 59);

	if (toDay >= beginDay && toDay < endDay) {
		// 使用期限計算
		var endDaysec = endDay.getTime()-toDay.getTime();
		var endDaynext = Math.floor(endDaysec/(1000*60*60*24));
		endDaynext = endDaynext + 1;

		// クーポンhtml作成
		var coupon = '<div id="coupon">\n';
		coupon = coupon +'<p class="date"><img src="/pc/for_app/img/brs_img/0330coupon_pc_date.png" alt="3/30（水）まで！" title="3/30（水）まで！"></p>\n';
		coupon = coupon +'<dl>\n';
		coupon = coupon +'<dt>お客様限定</dt>\n';
		coupon = coupon +'<dd class="price"><span><em>500</em>円OFF</span>クーポン</dd>\n';
		coupon = coupon +'<dd class="countdown">の期限まであと<em>'+ endDaynext +'</em>日です。</dd>\n';
		coupon = coupon +'<dd class="attention">1回のご注文で5,000円(税別)以上購入の際にご利用できます。<br>行き違いで既にクーポンをご利用済みの場合はご容赦ください。</dd>\n';
		coupon = coupon +'</dl>\n';
		coupon = coupon +'<p class="number">クーポン番号<br><em>K254</em></p>\n';
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

// ----------【K644】500円OFF（5,000円以上）期間：3/15～3/31
if(ck_mbox == 1 && ck_ttinfo == 2) {
	// 開始日時
	var beginDay = new Date(2016, 3-1, 15, 0, 0, 0);
	// 終了日時
	var endDay = new Date(2016, 3-1, 31, 23, 59, 59);

	if (toDay >= beginDay && toDay < endDay) {
		// 使用期限計算
		var endDaysec = endDay.getTime()-toDay.getTime();
		var endDaynext = Math.floor(endDaysec/(1000*60*60*24));
		endDaynext = endDaynext + 1;		
		
		// クーポンhtml作成
		var coupon = '<div id="coupon">\n';
		coupon = coupon +'<p class="date"><img src="/pc/for_app/img/brs_img/0331coupon_pc_date.png" alt="3/31（木）まで！" title="3/31（木）まで！"></p>\n';
		coupon = coupon +'<dl>\n';
		coupon = coupon +'<dt>お客様限定</dt>\n';
		coupon = coupon +'<dd class="price"><span><em>500</em>円OFF</span>クーポン</dd>\n';
		coupon = coupon +'<dd class="countdown">の期限まであと<em>'+ endDaynext +'</em>日です。</dd>\n';
		coupon = coupon +'<dd class="attention">1回のご注文で5,000円(税別)以上購入の際にご利用できます。<br>行き違いで既にクーポンをご利用済みの場合はご容赦ください。</dd>\n';
		coupon = coupon +'</dl>\n';
		coupon = coupon +'<p class="number">クーポン番号<br><em>K644</em></p>\n';
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