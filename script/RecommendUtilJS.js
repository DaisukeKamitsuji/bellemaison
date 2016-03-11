// 環境別にレコメンドリクエストURLを取得
//   [引数]   szProtocol： プロトコル(RecommendUtilJS.ENV.PROTOCOL のいずれか)
//   [返り値] URL
RecommendUtilJS.getRecommendProdUrl = function(szProtocol)
{
	var szWork = "";
	switch(RecommendUtilJS.ENV.ENV)
	{
		case "":
			szWork = szProtocol + "//secure3.silveregg.net/service/cross";
			break;
		case "STAGING":
		case "ITB":
		case "ITA":
			szWork = szProtocol + "//rrtest.silveregg.net/service/cross";
			break;
		case "UT":
			szWork = szProtocol + "//localhost:9080/ep/srvlt/EPFB00/EPFB0087/dRecommendShow?KAT_NO=850109&amp;BELN_SHOP_KBN=100&amp;RECOM_FRM_KBN=";
			break;
		default:
			break;
	}
	return(szWork);
}


// 環境別にBrowseバグURLを取得
//   [引数]   szProtocol： プロトコル(RecommendUtilJS.ENV.PROTOCOL のいずれか)
//   [返り値] URL
RecommendUtilJS.getRecommendBrowseUrl = function(szProtocol)
{
	var szWork = "";
	switch(RecommendUtilJS.ENV.ENV)
	{
		case "":
			szWork = szProtocol + "//secure3.silveregg.net/service/browse";
			break;
		case "STAGING":
		case "ITB":
		case "ITA":
		case "UT":
			szWork = szProtocol + "//rrtest.silveregg.net/service/browse";
			break;
		default:
			break;
	}
	return(szWork);
}


// 環境別にPurchaseバグURLを取得
//   [引数]   szProtocol： プロトコル(RecommendUtilJS.ENV.PROTOCOL のいずれか)
//   [返り値] URL
RecommendUtilJS.getRecommendPurchaseUrl = function(szProtocol)
{
	var szWork = "";
	switch(RecommendUtilJS.ENV.ENV)
	{
		case "":
			szWork = szProtocol + "//secure3.silveregg.net/service/purchase";
			break;
		case "STAGING":
		case "ITB":
		case "ITA":
		case "UT":
			szWork = szProtocol + "//rrtest.silveregg.net/service/purchase";
			break;
		default:
			break;
	}
	return(szWork);
}


// 環境別にマーチャントコードを取得
//   [引数]   なし
//   [返り値] マーチャントコード
RecommendUtilJS.getMerch = function()
{
	var szWork = "";
	switch(RecommendUtilJS.ENV.ENV)
	{
		case "":
		case "STAGING":
			szWork = "bm";
			break;
		case "ITB":
		case "ITA":
		case "UT":
			szWork = "bmdev";
			break;
		default:
			break;
	}
	return(szWork);
}


// 環境別にdomainを取得
//   [引数]   なし
//   [返り値] URL
RecommendUtilJS.getRecommendDomain = function()
{
	var szWork = "";
	switch(RecommendUtilJS.ENV.ENV)
	{
		case "":
			szWork = "aigent2.silveregg.net";
			break;
		case "STAGING":
		case "ITB":
		case "ITA":
		case "UT":
			szWork = "aigenttest2.silveregg.net";
			break;
		default:
			break;
	}
	return(szWork);
}


// 環境別にプロトコルを取得
//   [引数]   szProtocol： プロトコル(RecommendUtilJS.ENV.PROTOCOL のいずれか)
//   [返り値] プロトコル
RecommendUtilJS.getRecommendProtocol = function(szProtocol)
{
	var szWork = "";
	switch(szProtocol)
	{
		case RecommendUtilJS.ENV.PROTOCOL.AUTO:
		case RecommendUtilJS.ENV.PROTOCOL.HTTP:
		case RecommendUtilJS.ENV.PROTOCOL.HTTPS:
		case RecommendUtilJS.ENV.PROTOCOL.NONE:
			szWork = szProtocol;
			break;
		default:
			szWork = RecommendUtilJS.ENV.PROTOCOL.AUTO;
			break;
	}
	return(szWork);
}
