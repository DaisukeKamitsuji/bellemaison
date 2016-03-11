function GetQueryString() {
	if (1 < document.location.search.length) {
		var query = document.location.search.substring(1);
		var parameters = query.split('&');
		var result = new Object();
		for (var i = 0; i < parameters.length; i++) {
			var element = parameters[i].split('=');
			var paramName = decodeURIComponent(element[0]);
			var paramValue = encodeURI(element[1]);
			result[paramName] = decodeURIComponent(paramValue);
		}
		return result;
	}
	return null;
}

var side_timer_cnt = 0;
var side_timer = setInterval('side_timer_func()',1000);
function side_timer_func() {
if ($('.add_sidenavi').length == 0) {

//パラメータ取得
param = GetQueryString();

//ベッド・マットレス
if(param["C"] == "902") {
	var $add_link = $('.sn-sc01 a.item[href*="C=130204"]').parent();
	$($add_link).after('<li class="add_sidenavi"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90101" class="item"><span class="name">ソファーベッド</span></a></li>');
}

//ベッド・すのこベッド
if(param["C"] == "1302") {
	var $add_link = $('.sn-sc01 a.item[href*="C=130204"]').parent();
	$($add_link).after('<li class="add_sidenavi"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90101" class="item"><span class="name">ソファーベッド</span></a></li>');
}

}
side_timer_cnt ++;
if ( side_timer_cnt > 99 ) {
	clearInterval(side_timer);
	side_timer_cnt = 0;
	side_timer = setInterval('side_timer_func()',1000);
}
}