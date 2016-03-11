// レコメンド環境別定義(RecommendUtil.javaより可能な限り移植)
// 文字コード：UTF-8
// 改行コード：LF


// 名前空間の定義
var RecommendUtilJS = function(){};

// 環境の別の定義
RecommendUtilJS.ENV = function(){};
RecommendUtilJS.ENV.ENV = "";				// 本番
//RecommendUtilJS.ENV.ENV = "STAGING";	// ステージング
//RecommendUtilJS.ENV.ENV = "ITB";		// ITB
//RecommendUtilJS.ENV.ENV = "ITA";		// ITA
//RecommendUtilJS.ENV.ENV = "UT";			// 単体

// プロトコル名の定義
RecommendUtilJS.ENV.PROTOCOL = function(){};
RecommendUtilJS.ENV.PROTOCOL.AUTO = document.location.protocol;
RecommendUtilJS.ENV.PROTOCOL.HTTP = "http:";
RecommendUtilJS.ENV.PROTOCOL.HTTPS = "https:";
RecommendUtilJS.ENV.PROTOCOL.NONE = "";