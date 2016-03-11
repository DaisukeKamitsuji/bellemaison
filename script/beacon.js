// ----------------------------------------------------
// Webビーコン用ＵＲＬ取得処理
// ※EscapeSJIS関数を利用しているため、「encode.js」のロードが必要
//  @param nothing
// ----------------------------------------------------
function getBeaconUrl() {
    // 画像ファイルパス（固定）
    var imgFilePath = "http://www.bellemaison.jp/pc/for_app/img/contents_clear?";
    // ホスト名から最初のドットまでの文字列（URL区分）を抽出
    var urlHost = "";
    if (location.hostname != null) {
        var hashes = location.hostname.split('.');
        if (hashes != null && 0 < hashes.length) {
            urlHost = hashes[0];
        }
    }
    // ドメイン以降のURLを取得
    var urlPath = ""
    if (location.pathname != null) {
    	urlPath = location.pathname;
    }
    // パラメータを取得
    var param = "";
    if (location.href != null) {
        var hashes = location.href.split('?');
        if (hashes != null && hashes.length == 2) {
            param = "?" + hashes[1];
        }
    }
    // URLをエンコード(SJIS)
    urlPath = urlPath + param;
    urlPath = EscapeSJIS(urlPath);
    // スラッシュとアスタリスクのみ追加でエンコード
	urlPath = urlPath.replace(/\u002f/g, "%2F");
	urlPath = urlPath.replace(/\u002a/g, "%2A");

    // キャッシュ対応（ミリ秒をパラメータに追加）
    var tmpDate = new Date();
    var paramTime = '&CACHE_NOUSE_TIME=' + tmpDate.getTime();

    return imgFilePath + 'URL_HOST=' + urlHost + '&URL_PATH=' + urlPath + paramTime;
}
