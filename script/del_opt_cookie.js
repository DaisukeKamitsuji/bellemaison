// ----------------------------------------------------
//   Cookie削除共通JS
//   @param
//      ss_url:サービスサーブレットURL
// ----------------------------------------------------

function delOptCookies(ss_url) {
    
     var curCookie = document.cookie;        // 該当画面のCookie
     if (curCookie == null || curCookie.length == 0) {
         return;
     }
    
    // リクエストURLを生成
    var uri = ss_url + '/EPWB00/EPWB0015/dGetCookieExtCd';
    
    // Cookieの上限値を取得
    $.ajax({
    type: "GET",
    url: uri,
    cache: false,
    dataType: "jsonp",
    timeout: 60000,
    scriptCharset : 'UTF-8',
    jsonpCallback: "getExtCdInfo",
    success: function(data) {
    	
            var status = data.STATUS;
            // 正常終了の場合、下記の処理を行う
            if ("0" == status) {
                // Cookieの上限値を取得する
                var totalNum = "0";   // Cookieの数
                var totalSize = "0";     // Cookieのサイズ
                var tshgItems = new Object();       // 削除対象外項目
                
                for (var idx in data.ITEM) {
                    // データ区分が"0"の場合、各上限値を取得する
                    if ("0" == data.ITEM[idx].MS_ID1) {
                        totalNum = data.ITEM[idx].VALUE1;
                        totalSize = data.ITEM[idx].VALUE2;
                    } else {
                        // データ区分が"0"以外の場合、削除対象外項目を取得する
                    	tshgItems[data.ITEM[idx].VALUE1] = data.ITEM[idx].VALUE1;
                    }
                }

                var cookieArray = curCookie.split("; ");   // 該当画面のCookie数
                var cookieSize = curCookie.length;        // 該当画面のCookieサイズ
                
                // 上限値を超えていた場合、Cookieの削除処理を実施する
                if (cookieArray.length > totalNum || cookieSize > totalSize) {
                    for (var i = 0; i < cookieArray.length; i++) {
                        var item = cookieArray[i].split("=");
                        if (typeof(tshgItems[item[0]]) == "undefined") {
                        	var expires = new Date();
                        	expires.setTime(expires.getTime()-1000);
                        	document.cookie = item[0] + "=;expires="+ expires.toGMTString() +";domain=.bellemaison.jp; path=/"; // 削除処理を行う
                        }
                    }
                }
            }
        },
        error : function(xhr, status, error) {//通信エラー
        	 if ('timeout' == status) {
                 // タイムアウト場合、処理を中止
                 return;
             }
        }
    });
}