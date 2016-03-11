// ----------------------------------------------------
// add 20130731
// //非同期商品レビュー可能一覧取得
//   @param
//      pageNumber:表示するページ番号
//      beln_shop_kbn:ベルネショップ区分
//      sbrkm_jkn:絞込条件
//      brs_img_url:イメージ配置場所
//      brs_img_btn_url:ボタンイメージ配置場所
//      ss_url:サービスサーブレットURL
//      ssl_url:SSLサーブレットURL
//      non_ssl_url:非SSLサーブレットURL
//      jumpFlg:スクロールフラグ
// ----------------------------------------------------
	function getReviewKnInfoHdk(pageNumber, beln_shop_kbn, sbrkm_jkn, brs_img_url, brs_img_btn_url, ss_url, ssl_url, non_ssl_url, jumpFlg) {
		// ２度押し防止
		if (ReviewInfoFlgKn) {
			return;
		}
		
		var error_flg = false;
		ReviewInfoFlgKn = true;
		
		if (pageNumber == 0) {
			jumpFlg = false;
			pageNumber = nowPageNumberKn;
		}
		
		if(sbrkm_jkn == ""){
			sbrkm_jkn = "0";
		}
		
		var objSelectSbrkm = document.getElementById('selectSbrkm');
		for(i = 0; i < objSelectSbrkm.length; i++){
			if(objSelectSbrkm.options[i].value == sbrkm_jkn){
				objSelectSbrkm.options[i].selected = true;
				break;
			}
		}
		// 表示する期間プルダウンをdisable
		objSelectSbrkm.disabled = true;
		
		// リクエストURLを生成
		var uri = ss_url + '/EPZB00/EPZB0035/dCmtKnProc';
		uri += '?BELN_SHOP_KBN=' + beln_shop_kbn;
		uri += '&SBRKM_JKN=' + sbrkm_jkn;
		uri += '&PAGE_NUMBER=' + pageNumber;
		uri += '&callback=setReviewInfoKn';
		
		// 商品レビュー可能情報を取得
		$.ajax({
			type: "GET",
			url: uri,
			cache: false,
			dataType: "jsonp",
		scriptCharset:"UTF-8",
			jsonpCallback: "setReviewInfoKn",
			success: function(data) {
				// 商品レビュー可能情報のHTMLを生成
				var reviewInfo = "";
				var info = data.REVIEW_INFO[0];
				var hyjkq = 0;
				var rowcount = 1;
				var columncount = 1;
				var lastPageNumber = 0;
				var hiHyjDtUmkbnKn = "";
				var currentPageDataCount = 0;
				if (info) {
					so_kqKn = info.SO_KQ;
					hyjkq = info.HYJKQ;
					lastPageNumber = info.LAST_PAGE_NUMBER;
					hiHyjDtUmkbnKn = info.HI_HYJ_DT_UMKBN;
					currentPageDataCount = info.CURRENT_PAGE_DATA_COUNT;
					if (so_kqKn > 0) {
						var items = info.REVIEW_ITEMS;
						var lastRow = Math.ceil(currentPageDataCount / 3);
						for(var i in items) {
							// 商品レビュー登録画面の表示に必要な内容
							var CHMN_NO = String(items[i].CHMN_NO);			// 注文番号
							var OY_CHMN_NO = String(items[i].OY_CHMN_NO);	// 親注文番号 
							var SKY_NO = String(items[i].SKY_NO);			// 請求番号
							var SR_NO = String(items[i].SR_NO);				// 処理番号
							var KYKMT_DNKBN = String(items[i].KYKMT_DNKBN);	// 顧客元帳伝票区分
							var JCH_MNO = String(items[i].KYKMT_SEQ);		// 顧客元帳連番(受注明細番号)
							var SHCM_IRQ = String(items[i].SHCM_IRQ);		// 商品コメント依頼数
							
							// 一覧表示に必要な内容
							var CHMNBI = String(items[i].CHMNBI);			// 注文日
							var SHN_HYJ_MEI = String(items[i].SHN_HYJ_MEI);	// 購入商品名
							var KAT_BTGO = String(items[i].KAT_BTGO);		// 型媒年季
							
							// リンク表示に必要な内容
							var SHN_IMAGE = String(items[i].SHN_IMAGE);		// 商品画像
							
							var ITEM_DISP_LINK_URL = String(items[i].ITEM_DISP_LINK_URL);		// 投稿可能の商品名に設定するリンクURL
							var PRODUCT_COMMENT_ENTRY_URL = String(items[i].PRODUCT_COMMENT_ENTRY_URL);		// 商品コメント入力ボタンに設定するリンクURL
							
							// 列ごとに出力
							if (columncount == 1) {
								// 行の最初に出力
								if (rowcount == 1 && rowcount == lastRow) {
									reviewInfo += "<div class=\"add_review01_line mt20 add_review01_line_end cfx\">";
								} else if (rowcount == lastRow) {
									reviewInfo += "<div class=\"add_review01_line add_review01_line_end cfx\">";
								} else if (rowcount == 1) {
									reviewInfo += "<div class=\"add_review01_line mt20 cfx\">";
								} else  {
									reviewInfo += "<div class=\"add_review01_line cfx\">";
								}
								reviewInfo += "<div class=\"add_review01_item add_review01_item_l\">";
							} else if (columncount == 2) {
								reviewInfo += "<div class=\"add_review01_item add_review01_item_c\">";
							} else if (columncount == 3) {
								reviewInfo += "<div class=\"add_review01_item add_review01_item_r\">";
							}
							// 商品画像と商品名のリンク
							// リクエストURLを生成
							var uri = "JavaScript:openwindow('" + non_ssl_url + ITEM_DISP_LINK_URL + "')";
							
							reviewInfo += "<div class=\"add_review_img\">";
							// 商品名に設定するリンクURLが△の場合はリンクをしない
							if (ITEM_DISP_LINK_URL == ""){
								// 画像のアドレス
								reviewInfo += "<img src=\"" + SHN_IMAGE + "\">";
							} else {
								// 画像のリンク
								reviewInfo += "<a href=\"" + uri + "\">";
								// 画像のアドレス
								reviewInfo += "<img src=\"" + SHN_IMAGE + "\"></a>";
							}
							reviewInfo += "</div>";
							// 詳細表示
							reviewInfo += "<div class=\"add_review_detail\">";
							
							// 商品コメント依頼数 > 0 のときはレビュー依頼のバルーンを表示
							// 4桁以上の場合は,区切りなので比較時は,を除いて数値変換して比較
							if (Number(SHCM_IRQ.replace(/,/g, "")) > 0) {
								reviewInfo += "<div class=\"add_review_balloon\"><p><span>" + SHCM_IRQ + "人</span>のユーザーがこの商品のレビューを望んでいます。</p></div>";
							}
							// 商品レビューを書くボタン
							// リンク先：EPFB00/EPFB0013/dProdCmtEntryShow?BELN_SHOP_KBN=ベルネショップ区分
							// &CHMN_NO=注文番号(n)&OYA_CHMN_NO=親注文番号(n)&SKY_NO=請求番号(n)&KYKMT_DNKBN=顧客元帳伝票区分(n)&JCH_MNO=受注伝票明細番号(n)
							reviewInfo += "<div class=\"add_review_btn\">";
							reviewInfo += "<a href=\"javascript:void(0)\" onclick=\"window.open('" + ssl_url + PRODUCT_COMMENT_ENTRY_URL + "','reviewWindow', 'width=800,height=560,resizable=yes,scrollbars=yes');return false;\">";
							reviewInfo += "<img src=\""+ brs_img_url + "review03.gif\" alt=\"商品レビューを書く\">"
							reviewInfo += "</a>";
							reviewInfo += "</div>";
							// 注文日
							reviewInfo += "<p class=\"add_review_order\">ご注文日：" + CHMNBI + "</p>";
							
							// 商品名に設定するリンクURLが△の場合はリンクをしない
							if (ITEM_DISP_LINK_URL == ""){
								reviewInfo += "<p class=\"add_review_name\">" + SHN_HYJ_MEI + "</p>";
							} else {
								reviewInfo += "<p class=\"add_review_name\"><a href=\"" + uri + "\">" + SHN_HYJ_MEI + "</a></p>";
							}
							
							reviewInfo += "</div></div>";
							
							if (columncount == 3) {
								reviewInfo += "</div>";
								columncount = 1;
								rowcount ++;
								if (rowcount == lastRow) {
									reviewInfo += "</div>";
								}
							} else {
								columncount ++;
							}
						}
						reviewInfo += "</div>";
						// 商品レビュー情報を設定
						$("#reviewInfoKn").html(reviewInfo);
						h_reviewInfoKn[pageNumber] = reviewInfo;
						if (pageNumber>lastPageNumber) {
							pageNumber = lastPageNumber;
						}
						// ページング部品を設定
						pagingReviewKn(pageNumber, so_kqKn, hyjkq, beln_shop_kbn, sbrkm_jkn, brs_img_url, brs_img_btn_url, ss_url, ssl_url, non_ssl_url);
					} else {
						reviewInfo += "\r\n";
						reviewInfo += "\r\n";
						reviewInfo += "<div class=\"message01 ml75r75 mt20\">";
						reviewInfo += "<div class=\"box-bottom\">";
						reviewInfo += "<p class=\"text01a a-center\"><strong>現在、投稿可能な商品はございません。</strong></p>";
						reviewInfo += "</div>";
						reviewInfo += "</div>";
						// 商品レビュー情報を設定
						$("#reviewInfoKn").html(reviewInfo);
						$("#pagingKn").html("");
						$("#PageNumberKn").val("1");
					}
					// 非表示データが存在し、かつ総件数が0のときにメッセージをセット
					var msgInfo = "";
					if(hiHyjDtUmkbnKn == "1" && so_kqKn == 0) {
						msgInfo += "<p class=\"circle-gray01 text12l15\">現在、レビュー投稿可能な商品をご確認することはできません。</p>";
					}
					$("#msgInfoKn").html(msgInfo);
					if(jumpFlg) {
						window.scrollTo(0, $("#add_review01").position().top);
					}
				}
				// 表示する期間プルダウンをenable
				objSelectSbrkm.disabled = false;
				ReviewInfoFlgKn = false;
				error_flg = false;
			}, 
			error: function() {
				// クッキーからOSMの情報があるかどうかチェック
				var osm = cookieRead("OSMTICKET");
				var error = "";
				if (osm == "") {
					var logon_url = ssl_url + '/EPZB00/EPZB0033/dProdCmtMyPgShow';
					logon_url += '?BELN_SHOP_KBN=' + beln_shop_kbn;
					error = "<div class=\"message01 ml75r75 mt20\">";
					error += "<div class=\"box-bottom\">";
					error += "<p class=\"text01a a-center\"><strong>タイムアウトとなりましたので、大変申し訳ございませんが再度ログオンをしてください。<br><a href=\"" + logon_url + "\">ログオンはこちら</a></strong></p>";
					error += "</div>"
					error += "</div>"
				} else {
					error = "<div class=\"text12l16\">申し訳ございません、処理中に問題が発生しました。<br>お手数をお掛けしますが、もう一度やり直してください。</div>";
				}
				$("#reviewInfoKn").html(error);
				error_flg = true;
				ReviewInfoFlgKn = false;
				// 表示する期間プルダウンをenable
				objSelectSbrkm.disabled = false;
				// ページングを非表示に
				$("#pagingKn").html("");
				$("#PageNumberKn").val("1");
			}
		});
		
		nowPageNumberKn = pageNumber;
		$("#PageNumberKn").val(nowPageNumberKn);
		$("#SBRKM").val(sbrkm_jkn);
	}

// ----------------------------------------------------
// add 20130731
// //非同期商品レビュー一覧取得
//   @param
//      pageNumber:表示するページ番号
//      beln_shop_kbn:ベルネショップ区分
//      brs_img_url:イメージ配置場所
//      brs_img_btn_url:ボタンイメージ配置場所
//      pc_common:PC_COMMONのパス
//      ss_url:サービスサーブレットURL
//      ssl_url:SSLサーブレットURL
//      non_ssl_url:非SSLサーブレットURL
//      jumpFlg:スクロールフラグ
// ----------------------------------------------------
	function getReviewZmInfoHdk(pageNumber, beln_shop_kbn, brs_img_url, brs_img_btn_url, pc_common, ss_url, ssl_url, non_ssl_url, jumpFlg) {
		// ２度押し防止
		if (ReviewInfoFlgZm) {
			return;
		}
		
		var error_flg = false;
		ReviewInfoFlgZm = true;
		
		if (pageNumber == 0) {
			jumpFlg = false;
			pageNumber = nowPageNumberZm;
		}
		
		// リクエストURLを生成
		var uri = ss_url + '/EPZB00/EPZB0034/dCmtZmProc';
		uri += '?BELN_SHOP_KBN=' + beln_shop_kbn;
		uri += '&PAGE_NUMBER=' + pageNumber;
		uri += '&callback=setReviewInfoZm';
		
		// 商品レビュー情報を取得
		$.ajax({
			type: "GET",
			url: uri,
			cache: false,
			dataType: "jsonp",
		scriptCharset:"UTF-8",
			jsonpCallback: "setReviewInfoZm",
			success: function(data) {
				// 商品レビュー情報のHTMLを生成
				var reviewInfo = "";
				var reviewInfoMsg = "";
				var reviewInfoGuide = "";
				var info = data.REVIEW_INFO[0];
				var hyjkq = 0;
				var lastPageNumber = 0;
				var hiHyjDtUmkbnZm = "";
				if (info) {
					so_kqZm = info.SO_KQ;
					hyjkq = info.HYJKQ;
					lastPageNumber = info.LAST_PAGE_NUMBER;
					hiHyjDtUmkbnZm = info.HI_HYJ_DT_UMKBN;
					if (so_kqZm > 0) {
						reviewInfoMsg = "<p class=\"circle-gray01 text12l15\">本サイトとして不適切な表現が含まれる場合掲載をお断りする場合や、掲載されたコメントを削除させていただく場合がございます。</p>";
						reviewInfoGuide = "<p class=\"pos-abs text12l15\" style=\"top: 0; right: 0;\"><a href=\"javascript:void(0)\" onClick=\"window.open('" + pc_common + "guide/bm_usability.html#p03', 'subwindow', 'width=700, height=660, resizable=yes, scrollbars=yes');return false;\"><img src=\"" + brs_img_url + "/question01.gif\" width=\"18\" height=\"18\" alt=\"［？］\" align=\"absmiddle\">商品レビューについて</a></p>";
					
						var items = info.REVIEW_ITEM;
						for(var i in items){ 
							
							var SHCM_KNY_SHN = String(items[i].SHCM_KNY_SHN);	// 購入商品名
							var SHN = String(items[i].SHN);		// 商品名
							var PRODUCT_DETAIL_LINK_URL = String(items[i].PRODUCT_DETAIL_LINK_URL);	// 商品詳細表示リンク用URL
							var MNZKD = String(items[i].MNZKD);					// 満足度
							var STAR_IMG_MNZKD1 = String(items[i].STAR_IMG_MNZKD1);	// 満足度星画像１
							var STAR_IMG_MNZKD2 = String(items[i].STAR_IMG_MNZKD2);	// 満足度星画像２
							var STAR_IMG_MNZKD3 = String(items[i].STAR_IMG_MNZKD3);	// 満足度星画像３
							var STAR_IMG_MNZKD4 = String(items[i].STAR_IMG_MNZKD4);	// 満足度星画像４
							var STAR_IMG_MNZKD5 = String(items[i].STAR_IMG_MNZKD5);	// 満足度星画像５
							var PENNM = String(items[i].PENNM);			// ペンネーム
							var TOKO_NTJ = String(items[i].TOKO_NTJ);	// 投稿日時
							var KN_MEI = String(items[i].KN_MEI);		// 件名
							var HONBUN = String(items[i].HONBUN);		// 本文
							var HNSN = String(items[i].SHCM_HNSN);		// 返信
							var HNSN_NTJ = String(items[i].SHCM_HNSN_NTJ);	 // 返信日時
							var TKS_SBT = String(items[i].TKS_SBT);		 // 投稿者性別
							var TKS_NNR = String(items[i].TKS_NNR);		 // 投稿者年齢
							var SHCM_STMN_KAIT_LIST_R = items[i].SHCM_STMN_KAIT_LIST_R;		// 商品コメント質問回答リストR
							var SHCM_STMN_KAIT_LIST_PC = items[i].SHCM_STMN_KAIT_LIST_PC;	// 商品コメント質問回答リストPとC
							var SHCM_SEQ = String(items[i].SHCM_SEQ);			// 商品コメント連番
							var SHCM_SNKO_KS = String(items[i].SHCM_SNKO_KS);	// 商品コメント参考回数
							var KEIS_KYK_KBN = String(items[i].KEIS_KYK_KBN);	// 掲載許可区分
							var SHCM_IMG = String(items[i].SHCM_IMG);			// 商品画像フルパス
							var SHCM_MDF_LINK_URL = String(items[i].SHCM_MDF_LINK_URL);     //コメント編集リンク用URL
							
							var honbun = HONBUN.replace(/\r\n/g, "<br/>");
							honbun = honbun.replace(/(\n|\r)/g, "<br/>");
							honbun = honbun.replace(/\\|\\/g, "&yen;");
							PENNM = PENNM.replace(/\\|\\/g, "&yen;");
							KN_MEI = KN_MEI.replace(/\\|\\/g, "&yen;");
							
							var hnsn = HNSN.replace(/\r\n/g, "<br/>");
							hnsn = hnsn.replace(/(\n|\r)/g, "<br/>");
							hnsn = hnsn.replace(/\\|\\/g, "&yen;");
							
							// ペンネーム
							var penName = "";
							if (PENNM == ""){
								penName = "購入者さん";
							} else {
								penName = PENNM + "さん";
							}
							
							// （性別・年齢）
							var seibetuAndNenrei = "";
							if (TKS_SBT != "" && TKS_NNR == "") {
								seibetuAndNenrei = "（" + TKS_SBT + "）";
							} else if (TKS_SBT != "" && TKS_NNR != "") {
								seibetuAndNenrei = "（" + TKS_SBT + "・" + TKS_NNR + "）";
							} else if (TKS_SBT == "" && TKS_NNR != "") {
								seibetuAndNenrei = "（" + TKS_NNR + "）";
							}
							
							// 商品画像と商品名のリンク
							// リクエストURLを生成
							var uri = non_ssl_url + PRODUCT_DETAIL_LINK_URL;
							reviewInfo += "<div class=\"add_review02_item\">";
							// 商品詳細表示リンク用URLが△の場合はリンク表示しない
							if (PRODUCT_DETAIL_LINK_URL == ""){
								reviewInfo += "<div class=\"add_review_img2\"><img src=\"" + SHCM_IMG + "\"></div>";
							} else {
								reviewInfo += "<div class=\"add_review_img2\"><a href=\"" + uri + "\"><img src=\"" + SHCM_IMG + "\"></a></div>";
							}
							reviewInfo += "<div class=\"add_review_detail2\">";
							reviewInfo += "<div class=\"review-ttl cfx\">";
							// 掲載許可区分に対応した画像を表示
							if (KEIS_KYK_KBN == "0") {
								// 掲載無許可
								reviewInfo += "<div class=\"review-permission\"><img src=\"" + brs_img_url + "ic_permission_ng.gif\" alt=\"掲載指定：無許可\"></div>";
							} else {
								// 掲載許可
								reviewInfo += "<div class=\"review-permission\"><img src=\"" + brs_img_url + "ic_permission_ok.gif\" alt=\"掲載指定：許可\"></div>";
							}
							// 商品詳細表示リンク用URLが△の場合はリンク表示しない
							if (PRODUCT_DETAIL_LINK_URL == ""){
								reviewInfo += "<p class=\"review-name02\">" + SHN + "</p>";
							} else {
								reviewInfo += "<p class=\"review-name02\"><a href=\"" + uri + "\">" + SHN + "</a></p>";
							}

							//コメント編集リンク用URLがあるの場合はリンク表示する
							if (SHCM_MDF_LINK_URL !=""){
							    reviewInfo += "<div class=\"review-edit\">";
							    reviewInfo += "<a href=\"javascript:void(0)\" onclick=\"window.open('" + ssl_url + SHCM_MDF_LINK_URL + "','reviewWindow', 'width=800,height=560,resizable=yes,scrollbars=yes');return false;\">";
							    reviewInfo += "<img src=\""+ brs_img_url + "review01.gif\" alt=\"商品レビューを編集\">"
							    reviewInfo += "</a>";
							    reviewInfo += "</div>";
							} else {
							    reviewInfo += "<div class=\"review-edit\">";
							    reviewInfo += "<img src=\""+ brs_img_url + "review02.gif\" alt=\"処理中\">"
							    reviewInfo += "</div>";
							}
							
							reviewInfo += "</div>";
							reviewInfo += "<div class=\"review-item\">";
							reviewInfo += "<table class=\"review-table02\">";
							reviewInfo += "<tr class=\"tr01\">";
							reviewInfo += "<td class=\"td01\"><p class=\"name\"><img src=\"" + brs_img_url + "rev_icon_reviewer.gif\"><span>" + penName + "</span>" + seibetuAndNenrei + "</p>";
							reviewInfo += "<p class=\"post\">投稿日：" + TOKO_NTJ + "</p></td>";
							reviewInfo += "<td class=\"td02\"><p class=\"ammount\">評価&nbsp;";
							reviewInfo += "<img src=\""+ brs_img_url + STAR_IMG_MNZKD1 + "\" alt=\"\" width=\"13\">";
							reviewInfo += "<img src=\""+ brs_img_url + STAR_IMG_MNZKD2 + "\" alt=\"\" width=\"13\">";
							reviewInfo += "<img src=\""+ brs_img_url + STAR_IMG_MNZKD3 + "\" alt=\"\" width=\"13\">";
							reviewInfo += "<img src=\""+ brs_img_url + STAR_IMG_MNZKD4 + "\" alt=\"\" width=\"13\">";
							reviewInfo += "<img src=\""+ brs_img_url + STAR_IMG_MNZKD5 + "\" alt=\"\" width=\"13\">";
							reviewInfo += "&nbsp;<span>" + MNZKD +".0</span></p></td>";
							reviewInfo += "</tr>";
							
							var SHCM_KAIT_NY_size = SHCM_STMN_KAIT_LIST_PC.length;
							var SHCM_KAIT_NY_R_size = SHCM_STMN_KAIT_LIST_R.length;
							if (SHCM_KNY_SHN != "" || SHCM_KAIT_NY_size>0||SHCM_KAIT_NY_R_size>0) {
								reviewInfo += "<tr class=\"tr02\">";
								reviewInfo += "<td class=\"td03\">";
								reviewInfo += "<div class=\"cell01\">";
								
								if (SHCM_KNY_SHN != "") {
									reviewInfo += "<p>購入商品：&nbsp;" + SHCM_KNY_SHN + "</p>";
								}
								
								for (j in SHCM_STMN_KAIT_LIST_PC) {
									var SHCM_STMN_NY = String(SHCM_STMN_KAIT_LIST_PC[j].SHCM_STMN_NY);
									var SHCM_KAIT_NY = String(SHCM_STMN_KAIT_LIST_PC[j].SHCM_KAIT_NY);
									if (SHCM_KAIT_NY != "") {
										reviewInfo += "<p>" + SHCM_STMN_NY + "：&nbsp;" + SHCM_KAIT_NY + "</p>";
									} else {
										reviewInfo += "<p>" + SHCM_STMN_NY + "：&nbsp;--</p>";
									}
								}
								reviewInfo += "</div></td>";
								
								reviewInfo += "<td class=\"td04\"><div class=\"cell01\">";
								for (j in SHCM_STMN_KAIT_LIST_R) {
									var SHCM_STMN_NY = String(SHCM_STMN_KAIT_LIST_R[j].SHCM_STMN_NY);
									var SHCM_KAIT_NY = String(SHCM_STMN_KAIT_LIST_R[j].SHCM_KAIT_NY);
									var SHCM_KAIT_NY_STAR1 = String(SHCM_STMN_KAIT_LIST_R[j].SHCM_KAIT_NY_STAR1);
									var SHCM_KAIT_NY_STAR2 = String(SHCM_STMN_KAIT_LIST_R[j].SHCM_KAIT_NY_STAR2);
									var SHCM_KAIT_NY_STAR3 = String(SHCM_STMN_KAIT_LIST_R[j].SHCM_KAIT_NY_STAR3);
									var SHCM_KAIT_NY_STAR4 = String(SHCM_STMN_KAIT_LIST_R[j].SHCM_KAIT_NY_STAR4);
									var SHCM_KAIT_NY_STAR5 = String(SHCM_STMN_KAIT_LIST_R[j].SHCM_KAIT_NY_STAR5);
									
									if (SHCM_KAIT_NY != "") {
										reviewInfo += "<p>" + SHCM_STMN_NY + "&nbsp;<span class=\"ib01\">";
										reviewInfo += "<img src=\"" + brs_img_url + SHCM_KAIT_NY_STAR1 + "\" alt=\"\" width=\"13\">";
										reviewInfo += "<img src=\"" + brs_img_url + SHCM_KAIT_NY_STAR2 + "\" alt=\"\" width=\"13\">";
										reviewInfo += "<img src=\"" + brs_img_url + SHCM_KAIT_NY_STAR3 + "\" alt=\"\" width=\"13\">";
										reviewInfo += "<img src=\"" + brs_img_url + SHCM_KAIT_NY_STAR4 + "\" alt=\"\" width=\"13\">";
										reviewInfo += "<img src=\"" + brs_img_url + SHCM_KAIT_NY_STAR5 + "\" alt=\"\" width=\"13\"></span>";
										reviewInfo += "<span class=\"ib02\">&nbsp;" + SHCM_KAIT_NY + ".0</span></p>";
									} else {
										reviewInfo += "<p>" + SHCM_STMN_NY + "&nbsp;<span class=\"ib01\">--</span><span class=\"ib02\"></span></p>";
									}
								}
								reviewInfo += "</div></td></tr>";
							}
							if (KN_MEI != "" || honbun != "") {
								if(SHCM_SNKO_KS > 0){
									reviewInfo += "<tr class=\"tr02\"><td class=\"td05\" colspan=\"2\"><div class=\"cell01\">";
								} else {
									reviewInfo += "<tr class=\"tr03\"><td class=\"td05\" colspan=\"2\"><div class=\"cell01\">";
								}
								if (KN_MEI != "") {
									reviewInfo += "<p class=\"ttl\">" + KN_MEI + "</p>";
								}
								if (honbun != "") {
									reviewInfo += "<p class=\"text\">" + honbun + "</p>";
								}
								if (hnsn != "") {
									reviewInfo += "<div class=\"comment\">";
									reviewInfo += "<p class=\"comment_text\">" + hnsn + "</p>";
									reviewInfo += "<p class=\"comment_info\">" + HNSN_NTJ + "　千趣会 商品担当者</p>";
									reviewInfo += "</div>";
								}
							} else {
								if(SHCM_SNKO_KS > 0){
									reviewInfo += "<tr class=\"tr02\">";
								} else {
									reviewInfo += "<tr class=\"tr03\">";
								}
								reviewInfo += "<td class=\"td05\" colspan=\"2\"><div class=\"cell01\">";
								reviewInfo += "<p class=\"text\">ご意見・ご感想の投稿はございません</p>";
							}
							
							reviewInfo += "</div></td></tr>";
							
							// 参考になった
							// 4桁以上の場合は,区切りなので比較時は,を除いて数値変換して比較
							if (Number(SHCM_SNKO_KS.replace(/,/g, "")) >0){
								reviewInfo += "<tr class=\"tr03\">";
								reviewInfo += "<td class=\"td06\" colspan=\"2\">";
								reviewInfo += "<p class=\"reference\" id=\"P_SHCM_SNKO_KS_" + SHCM_SEQ + "\" style=\"" + "display:block" + "\"><span>" + SHCM_SNKO_KS + "人</span>が参考になりました。</p>";
								reviewInfo += "</td>";
								reviewInfo += "</tr>";
							}
							reviewInfo += "</table></div>";
							reviewInfo += "</div>";
							reviewInfo += "</div>";
						}
						// 商品レビュー情報を設定
						$("#reviewInfoZm").html(reviewInfo);
						h_reviewInfoZm[pageNumber] = reviewInfo;
						if (pageNumber>lastPageNumber) {
							pageNumber = lastPageNumber;
						}
						$("#reviewInfoMsg").html(reviewInfoMsg);
						$("#reviewInfoGuide").html(reviewInfoGuide);
						pagingReviewZm(pageNumber, so_kqZm, hyjkq, beln_shop_kbn, brs_img_url, brs_img_btn_url, pc_common, ss_url, ssl_url, non_ssl_url);
					} else {
						reviewInfo += "\r\n";
						reviewInfo += "\r\n";
						reviewInfo += "<div class=\"message01 ml75r75 mt20\">";
						reviewInfo += "<div class=\"box-bottom\">";
						reviewInfo += "<p class=\"text01a a-center\"><strong>過去投稿した商品レビューはございません。</strong></p>";
						reviewInfo += "</div>";
						reviewInfo += "</div>";
						$("#reviewInfoZm").html(reviewInfo);
						$("#pagingZm").html("");
						$("#PageNumberZm").val("1");
					}
					// 非表示データが存在するときはメッセージをセット
					var msgInfo = "";
					if(hiHyjDtUmkbnZm == "1"){
						msgInfo += "<p class=\"circle-gray01 text12l15\">現在、過去にレビュー投稿した商品をご確認することはできません。</p>";
					}
					$("#msgInfoZm").html(msgInfo);
					if(jumpFlg) {
						window.scrollTo(0, $("#add_review02").position().top);
					}
				}
				ReviewInfoFlgZm = false;
				error_flg = false;
			}, 
			error: function() {
				var osm = cookieRead("OSMTICKET");
				var error = "";
				if (osm == "") {
					error = "<div class=\"text12l16\">ログオンしてください。</div>";
					var logon_url = ssl_url + '/EPZB00/EPZB0033/dProdCmtMyPgShow';
					logon_url += '?BELN_SHOP_KBN=' + beln_shop_kbn;
					error = "<div class=\"message01 ml75r75 mt20\">";
					error += "<div class=\"box-bottom\">";
					error += "<p class=\"text01a a-center\"><strong>タイムアウトとなりましたので、大変申し訳ございませんが再度ログオンをしてください。<br><a href=\"" + logon_url + "\">ログオンはこちら</a></strong></p>";
					error += "</div>";
					error += "</div>";
				} else {
					error = "<div class=\"text12l16\">申し訳ございません、処理中に問題が発生しました。<br>お手数をお掛けしますが、もう一度やり直してください。</div>";
				}
				$("#reviewInfoZm").html(error);
				error_flg = true;
				ReviewInfoFlgZm = false;
				// ページングを非表示に
				$("#pagingZm").html("");
				$("#PageNumberZm").val("1");
			}
		});
		
		nowPageNumberZm = pageNumber;
	}

//レビュー可能一覧のページング部品を作成する
//   @param
//      nowPageNum:現在ページ番号
//      so_kq:総件数
//      hyjkq:1ページに表示する件数
//      beln_shop_kbn:ベルネショップ区分
//      sbrkm_jkn:絞込条件
//      brs_img_url:イメージ配置場所
//      brs_img_btn_url:ボタンイメージ配置場所
//      ss_url:サービスサーブレットURL
//      ssl_url:SSLサーブレットURL
//      non_ss_url:非サーブレットURL
	function pagingReviewKn(nowPageNum, so_kq, hyjkq, beln_shop_kbn, sbrkm_jkn, brs_img_url, brs_img_btn_url, ss_url, ssl_url, non_ssl_url){
		
		//ページング部品のタグを取得
		var elemPaging = document.getElementById("pagingKn");
		
		//変数
		var startpage = (nowPageNum - 1) * hyjkq + 1; 
		var endpage = nowPageNum * hyjkq; //○～○件表示に使用
		if(endpage > so_kq){
			endpage = so_kq;
		}
		var startpaging = "";
		var endpaging = "";
		if ((nowPageNum % 10) == 0) {
			startpaging = (Math.floor(nowPageNum / 10) - 1) * 10 + 1;
			endpaging = Math.floor(nowPageNum / 10) * 10; //ページング番号に使用
		} else {
			startpaging = Math.floor(nowPageNum / 10) * 10 + 1;
			endpaging = Math.floor(nowPageNum / 10) * 10 + 10; //ページング番号に使用
		}
		var lastpage = Math.floor(so_kq / hyjkq); //最終ページ
		if((so_kq % hyjkq) != 0){
			lastpage += 1;
		}
		var nextpage = nowPageNum + 1;
		var prevpage = nowPageNum - 1;
		
		//○件中○～○件表示を作成
		var pagingInfo = "<p class=\"f-left text12 fc-gray03\">";
		pagingInfo += so_kq + "件中" + startpage + "～" + endpage + "件目表示</p>";
		pagingInfo += "<ul class=\"pager01 pl10\">";
		
		//前の○○件を作成
		if(nowPageNum != 1){
			pagingInfo += "<li><a href=\"javascript:void(0);\" onClick=\"";
			pagingInfo += "getReviewKnInfoHdk(" + prevpage + ",'" + beln_shop_kbn + "','" + sbrkm_jkn + "','" + brs_img_url + "','" + brs_img_btn_url + "','" + ss_url + "','" + ssl_url + "','" + non_ssl_url + "', true);return false;\">";
			pagingInfo += "<前の" + hyjkq + "件</a></li>";
		}
		//ページ番号を作成
		for(i = startpaging; i <= endpaging; i++){
			if (i == nowPageNum){
				pagingInfo += "<li class=\"current\">" + i + "</li>";
			} else {
				pagingInfo += "<li id=\"paging" + i + "\">";
				pagingInfo += "<a href=\"javascript:void(0);\"";
				pagingInfo += "onClick=\"getReviewKnInfoHdk(" + i + ",'" + beln_shop_kbn + "','" + sbrkm_jkn + "','" + brs_img_url + "','" + brs_img_btn_url + "','" + ss_url + "','" + ssl_url + "','" + non_ssl_url + "', true);return false;\">" + i + "</a></li>";
			}
			if(i == lastpage){
				break;
			}
		}
		//次の○○件を作成
		if(nowPageNum == lastpage - 1){
			var lastpageNum = so_kq - (nowPageNum * hyjkq);
			pagingInfo += "<li><a href=\"javascript:void(0);\" onClick=\"";
			pagingInfo += "getReviewKnInfoHdk(" + nextpage + ",'" + beln_shop_kbn + "','" + sbrkm_jkn + "','" + brs_img_url + "','" + brs_img_btn_url + "','" + ss_url + "','" + ssl_url + "','" + non_ssl_url + "', true);return false;\">";
			pagingInfo += "次の" + lastpageNum + "件></a></li>";
		}else if(nowPageNum != lastpage){
			pagingInfo += "<li><a href=\"javascript:void(0);\" onClick=\"";
			pagingInfo += "getReviewKnInfoHdk(" + nextpage + ",'" + beln_shop_kbn + "','" + sbrkm_jkn + "','" + brs_img_url + "','" + brs_img_btn_url + "','" + ss_url + "','" + ssl_url + "','" + non_ssl_url + "', true);return false;\">";
			pagingInfo += "次の" + hyjkq + "件></a></li>";
		}
		
		pagingInfo += "</ul>";
		elemPaging.innerHTML = pagingInfo;
		$("#PageNumberKn").val(nowPageNum);
	}

//レビュー済み一覧のページング部品を作成する
//   @param
//      nowPageNum:現在ページ番号
//      so_kq:総件数
//      hyjkq:1ページに表示する件数
//      beln_shop_kbn:ベルネショップ区分
//      brs_img_url:イメージ配置場所
//      brs_img_btn_url:ボタンイメージ配置場所
//      pc_common:PC_COMMONのパス
//      ss_url:サービスサーブレットURL
//      ssl_url:SSLサーブレットURL
//      non_ss_url:非SSLサーブレットURL
	function pagingReviewZm(nowPageNum, so_kq, hyjkq, beln_shop_kbn, brs_img_url, brs_img_btn_url, pc_common, ss_url, ssl_url, non_ssl_url){
		
		//ページング部品のタグを取得
		var elemPaging = document.getElementById("pagingZm");
		
		//変数
		var startpage = (nowPageNum - 1) * hyjkq + 1; 
		var endpage = nowPageNum * hyjkq; //○～○件表示に使用
		if(endpage > so_kq){
			endpage = so_kq;
		}
		var startpaging = "";
		var endpaging = "";
		if ((nowPageNum % 10) == 0) {
			startpaging = (Math.floor(nowPageNum / 10) - 1) * 10 + 1;
			endpaging = Math.floor(nowPageNum / 10) * 10; //ページング番号に使用
		} else {
			startpaging = Math.floor(nowPageNum / 10) * 10 + 1;
			endpaging = Math.floor(nowPageNum / 10) * 10 + 10; //ページング番号に使用
		}
		var lastpage = Math.floor(so_kq / hyjkq); //最終ページ
		if((so_kq % hyjkq) != 0){
			lastpage += 1;
		}
		var nextpage = nowPageNum + 1;
		var prevpage = nowPageNum - 1;
		
		//○件中○～○件表示を作成
		var pagingInfo = "<p class=\"f-left text12 fc-gray03\">";
		pagingInfo += so_kq + "件中" + startpage + "～" + endpage + "件目表示</p>";
		pagingInfo += "<ul class=\"pager01 pl10\">";
		
		//前の○○件を作成
		if(nowPageNum != 1){
			pagingInfo += "<li><a href=\"javascript:void(0);\" onClick=\"";
			pagingInfo += "getReviewZmInfoHdk(" + prevpage + ",'" + beln_shop_kbn + "','" + brs_img_url + "','" + brs_img_btn_url + "','" + pc_common + "','" + ss_url + "','" + ssl_url + "','" + non_ssl_url + "', true);return false;\">";
			pagingInfo += "<前の" + hyjkq + "件</a></li>";
		}
		//ページ番号を作成
		for(i = startpaging; i <= endpaging; i++){
			if (i == nowPageNum){
				pagingInfo += "<li class=\"current\">" + i + "</li>";
			} else {
				pagingInfo += "<li id=\"paging" + i + "\">";
				pagingInfo += "<a href=\"javascript:void(0);\"";
				pagingInfo += "onClick=\"getReviewZmInfoHdk(" + i + ",'" + beln_shop_kbn + "','" + brs_img_url + "','" + brs_img_btn_url + "','" + pc_common + "','" + ss_url + "','" + ssl_url + "','" + non_ssl_url + "', true);return false;\">" + i + "</a></li>";
			}
			if(i == lastpage){
				break;
			}
		}
		//次の○○件を作成
		if(nowPageNum == lastpage - 1){
			var lastpageNum = so_kq - (nowPageNum * hyjkq);
			pagingInfo += "<li><a href=\"javascript:void(0);\" onClick=\"";
			pagingInfo += "getReviewZmInfoHdk(" + nextpage + ",'" + beln_shop_kbn + "','" + brs_img_url + "','" + brs_img_btn_url + "','" + pc_common + "','" + ss_url + "','" + ssl_url + "','" + non_ssl_url + "', true);return false;\">";
			pagingInfo += "次の" + lastpageNum + "件></a></li>";
		}else if(nowPageNum != lastpage){
			pagingInfo += "<li><a href=\"javascript:void(0);\" onClick=\"";
			pagingInfo += "getReviewZmInfoHdk(" + nextpage + ",'" + beln_shop_kbn + "','" + brs_img_url + "','" + brs_img_btn_url + "','" + pc_common + "','" + ss_url + "','" + ssl_url + "','" + non_ssl_url + "', true);return false;\">";
			pagingInfo += "次の" + hyjkq + "件></a></li>";
		}
		
		pagingInfo += "</ul>";
		elemPaging.innerHTML = pagingInfo;
		$("#PageNumberZm").val(nowPageNum);
	}

