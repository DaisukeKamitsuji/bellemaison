// ----------------------------------------------------
// add 20130731
// //�񓯊����i���r���[�\�ꗗ�擾
//   @param
//      pageNumber:�\������y�[�W�ԍ�
//      beln_shop_kbn:�x���l�V���b�v�敪
//      sbrkm_jkn:�i������
//      brs_img_url:�C���[�W�z�u�ꏊ
//      brs_img_btn_url:�{�^���C���[�W�z�u�ꏊ
//      ss_url:�T�[�r�X�T�[�u���b�gURL
//      ssl_url:SSL�T�[�u���b�gURL
//      non_ssl_url:��SSL�T�[�u���b�gURL
//      jumpFlg:�X�N���[���t���O
// ----------------------------------------------------
	function getReviewKnInfoHdk(pageNumber, beln_shop_kbn, sbrkm_jkn, brs_img_url, brs_img_btn_url, ss_url, ssl_url, non_ssl_url, jumpFlg) {
		// �Q�x�����h�~
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
		// �\��������ԃv���_�E����disable
		objSelectSbrkm.disabled = true;
		
		// ���N�G�X�gURL�𐶐�
		var uri = ss_url + '/EPZB00/EPZB0035/dCmtKnProc';
		uri += '?BELN_SHOP_KBN=' + beln_shop_kbn;
		uri += '&SBRKM_JKN=' + sbrkm_jkn;
		uri += '&PAGE_NUMBER=' + pageNumber;
		uri += '&callback=setReviewInfoKn';
		
		// ���i���r���[�\�����擾
		$.ajax({
			type: "GET",
			url: uri,
			cache: false,
			dataType: "jsonp",
		scriptCharset:"UTF-8",
			jsonpCallback: "setReviewInfoKn",
			success: function(data) {
				// ���i���r���[�\����HTML�𐶐�
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
							// ���i���r���[�o�^��ʂ̕\���ɕK�v�ȓ��e
							var CHMN_NO = String(items[i].CHMN_NO);			// �����ԍ�
							var OY_CHMN_NO = String(items[i].OY_CHMN_NO);	// �e�����ԍ� 
							var SKY_NO = String(items[i].SKY_NO);			// �����ԍ�
							var SR_NO = String(items[i].SR_NO);				// �����ԍ�
							var KYKMT_DNKBN = String(items[i].KYKMT_DNKBN);	// �ڋq�����`�[�敪
							var JCH_MNO = String(items[i].KYKMT_SEQ);		// �ڋq�����A��(�󒍖��הԍ�)
							var SHCM_IRQ = String(items[i].SHCM_IRQ);		// ���i�R�����g�˗���
							
							// �ꗗ�\���ɕK�v�ȓ��e
							var CHMNBI = String(items[i].CHMNBI);			// ������
							var SHN_HYJ_MEI = String(items[i].SHN_HYJ_MEI);	// �w�����i��
							var KAT_BTGO = String(items[i].KAT_BTGO);		// �^�}�N�G
							
							// �����N�\���ɕK�v�ȓ��e
							var SHN_IMAGE = String(items[i].SHN_IMAGE);		// ���i�摜
							
							var ITEM_DISP_LINK_URL = String(items[i].ITEM_DISP_LINK_URL);		// ���e�\�̏��i���ɐݒ肷�郊���NURL
							var PRODUCT_COMMENT_ENTRY_URL = String(items[i].PRODUCT_COMMENT_ENTRY_URL);		// ���i�R�����g���̓{�^���ɐݒ肷�郊���NURL
							
							// �񂲂Ƃɏo��
							if (columncount == 1) {
								// �s�̍ŏ��ɏo��
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
							// ���i�摜�Ə��i���̃����N
							// ���N�G�X�gURL�𐶐�
							var uri = "JavaScript:openwindow('" + non_ssl_url + ITEM_DISP_LINK_URL + "')";
							
							reviewInfo += "<div class=\"add_review_img\">";
							// ���i���ɐݒ肷�郊���NURL�����̏ꍇ�̓����N�����Ȃ�
							if (ITEM_DISP_LINK_URL == ""){
								// �摜�̃A�h���X
								reviewInfo += "<img src=\"" + SHN_IMAGE + "\">";
							} else {
								// �摜�̃����N
								reviewInfo += "<a href=\"" + uri + "\">";
								// �摜�̃A�h���X
								reviewInfo += "<img src=\"" + SHN_IMAGE + "\"></a>";
							}
							reviewInfo += "</div>";
							// �ڍו\��
							reviewInfo += "<div class=\"add_review_detail\">";
							
							// ���i�R�����g�˗��� > 0 �̂Ƃ��̓��r���[�˗��̃o���[����\��
							// 4���ȏ�̏ꍇ��,��؂�Ȃ̂Ŕ�r����,�������Đ��l�ϊ����Ĕ�r
							if (Number(SHCM_IRQ.replace(/,/g, "")) > 0) {
								reviewInfo += "<div class=\"add_review_balloon\"><p><span>" + SHCM_IRQ + "�l</span>�̃��[�U�[�����̏��i�̃��r���[��]��ł��܂��B</p></div>";
							}
							// ���i���r���[�������{�^��
							// �����N��FEPFB00/EPFB0013/dProdCmtEntryShow?BELN_SHOP_KBN=�x���l�V���b�v�敪
							// &CHMN_NO=�����ԍ�(n)&OYA_CHMN_NO=�e�����ԍ�(n)&SKY_NO=�����ԍ�(n)&KYKMT_DNKBN=�ڋq�����`�[�敪(n)&JCH_MNO=�󒍓`�[���הԍ�(n)
							reviewInfo += "<div class=\"add_review_btn\">";
							reviewInfo += "<a href=\"javascript:void(0)\" onclick=\"window.open('" + ssl_url + PRODUCT_COMMENT_ENTRY_URL + "','reviewWindow', 'width=800,height=560,resizable=yes,scrollbars=yes');return false;\">";
							reviewInfo += "<img src=\""+ brs_img_url + "review03.gif\" alt=\"���i���r���[������\">"
							reviewInfo += "</a>";
							reviewInfo += "</div>";
							// ������
							reviewInfo += "<p class=\"add_review_order\">���������F" + CHMNBI + "</p>";
							
							// ���i���ɐݒ肷�郊���NURL�����̏ꍇ�̓����N�����Ȃ�
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
						// ���i���r���[����ݒ�
						$("#reviewInfoKn").html(reviewInfo);
						h_reviewInfoKn[pageNumber] = reviewInfo;
						if (pageNumber>lastPageNumber) {
							pageNumber = lastPageNumber;
						}
						// �y�[�W���O���i��ݒ�
						pagingReviewKn(pageNumber, so_kqKn, hyjkq, beln_shop_kbn, sbrkm_jkn, brs_img_url, brs_img_btn_url, ss_url, ssl_url, non_ssl_url);
					} else {
						reviewInfo += "\r\n";
						reviewInfo += "\r\n";
						reviewInfo += "<div class=\"message01 ml75r75 mt20\">";
						reviewInfo += "<div class=\"box-bottom\">";
						reviewInfo += "<p class=\"text01a a-center\"><strong>���݁A���e�\�ȏ��i�͂������܂���B</strong></p>";
						reviewInfo += "</div>";
						reviewInfo += "</div>";
						// ���i���r���[����ݒ�
						$("#reviewInfoKn").html(reviewInfo);
						$("#pagingKn").html("");
						$("#PageNumberKn").val("1");
					}
					// ��\���f�[�^�����݂��A����������0�̂Ƃ��Ƀ��b�Z�[�W���Z�b�g
					var msgInfo = "";
					if(hiHyjDtUmkbnKn == "1" && so_kqKn == 0) {
						msgInfo += "<p class=\"circle-gray01 text12l15\">���݁A���r���[���e�\�ȏ��i�����m�F���邱�Ƃ͂ł��܂���B</p>";
					}
					$("#msgInfoKn").html(msgInfo);
					if(jumpFlg) {
						window.scrollTo(0, $("#add_review01").position().top);
					}
				}
				// �\��������ԃv���_�E����enable
				objSelectSbrkm.disabled = false;
				ReviewInfoFlgKn = false;
				error_flg = false;
			}, 
			error: function() {
				// �N�b�L�[����OSM�̏�񂪂��邩�ǂ����`�F�b�N
				var osm = cookieRead("OSMTICKET");
				var error = "";
				if (osm == "") {
					var logon_url = ssl_url + '/EPZB00/EPZB0033/dProdCmtMyPgShow';
					logon_url += '?BELN_SHOP_KBN=' + beln_shop_kbn;
					error = "<div class=\"message01 ml75r75 mt20\">";
					error += "<div class=\"box-bottom\">";
					error += "<p class=\"text01a a-center\"><strong>�^�C���A�E�g�ƂȂ�܂����̂ŁA��ϐ\���󂲂����܂��񂪍ēx���O�I�������Ă��������B<br><a href=\"" + logon_url + "\">���O�I���͂�����</a></strong></p>";
					error += "</div>"
					error += "</div>"
				} else {
					error = "<div class=\"text12l16\">�\���󂲂����܂���A�������ɖ�肪�������܂����B<br>���萔�����|�����܂����A������x��蒼���Ă��������B</div>";
				}
				$("#reviewInfoKn").html(error);
				error_flg = true;
				ReviewInfoFlgKn = false;
				// �\��������ԃv���_�E����enable
				objSelectSbrkm.disabled = false;
				// �y�[�W���O���\����
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
// //�񓯊����i���r���[�ꗗ�擾
//   @param
//      pageNumber:�\������y�[�W�ԍ�
//      beln_shop_kbn:�x���l�V���b�v�敪
//      brs_img_url:�C���[�W�z�u�ꏊ
//      brs_img_btn_url:�{�^���C���[�W�z�u�ꏊ
//      pc_common:PC_COMMON�̃p�X
//      ss_url:�T�[�r�X�T�[�u���b�gURL
//      ssl_url:SSL�T�[�u���b�gURL
//      non_ssl_url:��SSL�T�[�u���b�gURL
//      jumpFlg:�X�N���[���t���O
// ----------------------------------------------------
	function getReviewZmInfoHdk(pageNumber, beln_shop_kbn, brs_img_url, brs_img_btn_url, pc_common, ss_url, ssl_url, non_ssl_url, jumpFlg) {
		// �Q�x�����h�~
		if (ReviewInfoFlgZm) {
			return;
		}
		
		var error_flg = false;
		ReviewInfoFlgZm = true;
		
		if (pageNumber == 0) {
			jumpFlg = false;
			pageNumber = nowPageNumberZm;
		}
		
		// ���N�G�X�gURL�𐶐�
		var uri = ss_url + '/EPZB00/EPZB0034/dCmtZmProc';
		uri += '?BELN_SHOP_KBN=' + beln_shop_kbn;
		uri += '&PAGE_NUMBER=' + pageNumber;
		uri += '&callback=setReviewInfoZm';
		
		// ���i���r���[�����擾
		$.ajax({
			type: "GET",
			url: uri,
			cache: false,
			dataType: "jsonp",
		scriptCharset:"UTF-8",
			jsonpCallback: "setReviewInfoZm",
			success: function(data) {
				// ���i���r���[����HTML�𐶐�
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
						reviewInfoMsg = "<p class=\"circle-gray01 text12l15\">�{�T�C�g�Ƃ��ĕs�K�؂ȕ\�����܂܂��ꍇ�f�ڂ����f�肷��ꍇ��A�f�ڂ��ꂽ�R�����g���폜�����Ă��������ꍇ���������܂��B</p>";
						reviewInfoGuide = "<p class=\"pos-abs text12l15\" style=\"top: 0; right: 0;\"><a href=\"javascript:void(0)\" onClick=\"window.open('" + pc_common + "guide/bm_usability.html#p03', 'subwindow', 'width=700, height=660, resizable=yes, scrollbars=yes');return false;\"><img src=\"" + brs_img_url + "/question01.gif\" width=\"18\" height=\"18\" alt=\"�m�H�n\" align=\"absmiddle\">���i���r���[�ɂ���</a></p>";
					
						var items = info.REVIEW_ITEM;
						for(var i in items){ 
							
							var SHCM_KNY_SHN = String(items[i].SHCM_KNY_SHN);	// �w�����i��
							var SHN = String(items[i].SHN);		// ���i��
							var PRODUCT_DETAIL_LINK_URL = String(items[i].PRODUCT_DETAIL_LINK_URL);	// ���i�ڍו\�������N�pURL
							var MNZKD = String(items[i].MNZKD);					// �����x
							var STAR_IMG_MNZKD1 = String(items[i].STAR_IMG_MNZKD1);	// �����x���摜�P
							var STAR_IMG_MNZKD2 = String(items[i].STAR_IMG_MNZKD2);	// �����x���摜�Q
							var STAR_IMG_MNZKD3 = String(items[i].STAR_IMG_MNZKD3);	// �����x���摜�R
							var STAR_IMG_MNZKD4 = String(items[i].STAR_IMG_MNZKD4);	// �����x���摜�S
							var STAR_IMG_MNZKD5 = String(items[i].STAR_IMG_MNZKD5);	// �����x���摜�T
							var PENNM = String(items[i].PENNM);			// �y���l�[��
							var TOKO_NTJ = String(items[i].TOKO_NTJ);	// ���e����
							var KN_MEI = String(items[i].KN_MEI);		// ����
							var HONBUN = String(items[i].HONBUN);		// �{��
							var HNSN = String(items[i].SHCM_HNSN);		// �ԐM
							var HNSN_NTJ = String(items[i].SHCM_HNSN_NTJ);	 // �ԐM����
							var TKS_SBT = String(items[i].TKS_SBT);		 // ���e�Ґ���
							var TKS_NNR = String(items[i].TKS_NNR);		 // ���e�ҔN��
							var SHCM_STMN_KAIT_LIST_R = items[i].SHCM_STMN_KAIT_LIST_R;		// ���i�R�����g����񓚃��X�gR
							var SHCM_STMN_KAIT_LIST_PC = items[i].SHCM_STMN_KAIT_LIST_PC;	// ���i�R�����g����񓚃��X�gP��C
							var SHCM_SEQ = String(items[i].SHCM_SEQ);			// ���i�R�����g�A��
							var SHCM_SNKO_KS = String(items[i].SHCM_SNKO_KS);	// ���i�R�����g�Q�l��
							var KEIS_KYK_KBN = String(items[i].KEIS_KYK_KBN);	// �f�ڋ��敪
							var SHCM_IMG = String(items[i].SHCM_IMG);			// ���i�摜�t���p�X
							var SHCM_MDF_LINK_URL = String(items[i].SHCM_MDF_LINK_URL);     //�R�����g�ҏW�����N�pURL
							
							var honbun = HONBUN.replace(/\r\n/g, "<br/>");
							honbun = honbun.replace(/(\n|\r)/g, "<br/>");
							honbun = honbun.replace(/\\|\\/g, "&yen;");
							PENNM = PENNM.replace(/\\|\\/g, "&yen;");
							KN_MEI = KN_MEI.replace(/\\|\\/g, "&yen;");
							
							var hnsn = HNSN.replace(/\r\n/g, "<br/>");
							hnsn = hnsn.replace(/(\n|\r)/g, "<br/>");
							hnsn = hnsn.replace(/\\|\\/g, "&yen;");
							
							// �y���l�[��
							var penName = "";
							if (PENNM == ""){
								penName = "�w���҂���";
							} else {
								penName = PENNM + "����";
							}
							
							// �i���ʁE�N��j
							var seibetuAndNenrei = "";
							if (TKS_SBT != "" && TKS_NNR == "") {
								seibetuAndNenrei = "�i" + TKS_SBT + "�j";
							} else if (TKS_SBT != "" && TKS_NNR != "") {
								seibetuAndNenrei = "�i" + TKS_SBT + "�E" + TKS_NNR + "�j";
							} else if (TKS_SBT == "" && TKS_NNR != "") {
								seibetuAndNenrei = "�i" + TKS_NNR + "�j";
							}
							
							// ���i�摜�Ə��i���̃����N
							// ���N�G�X�gURL�𐶐�
							var uri = non_ssl_url + PRODUCT_DETAIL_LINK_URL;
							reviewInfo += "<div class=\"add_review02_item\">";
							// ���i�ڍו\�������N�pURL�����̏ꍇ�̓����N�\�����Ȃ�
							if (PRODUCT_DETAIL_LINK_URL == ""){
								reviewInfo += "<div class=\"add_review_img2\"><img src=\"" + SHCM_IMG + "\"></div>";
							} else {
								reviewInfo += "<div class=\"add_review_img2\"><a href=\"" + uri + "\"><img src=\"" + SHCM_IMG + "\"></a></div>";
							}
							reviewInfo += "<div class=\"add_review_detail2\">";
							reviewInfo += "<div class=\"review-ttl cfx\">";
							// �f�ڋ��敪�ɑΉ������摜��\��
							if (KEIS_KYK_KBN == "0") {
								// �f�ږ�����
								reviewInfo += "<div class=\"review-permission\"><img src=\"" + brs_img_url + "ic_permission_ng.gif\" alt=\"�f�ڎw��F������\"></div>";
							} else {
								// �f�ڋ���
								reviewInfo += "<div class=\"review-permission\"><img src=\"" + brs_img_url + "ic_permission_ok.gif\" alt=\"�f�ڎw��F����\"></div>";
							}
							// ���i�ڍו\�������N�pURL�����̏ꍇ�̓����N�\�����Ȃ�
							if (PRODUCT_DETAIL_LINK_URL == ""){
								reviewInfo += "<p class=\"review-name02\">" + SHN + "</p>";
							} else {
								reviewInfo += "<p class=\"review-name02\"><a href=\"" + uri + "\">" + SHN + "</a></p>";
							}

							//�R�����g�ҏW�����N�pURL������̏ꍇ�̓����N�\������
							if (SHCM_MDF_LINK_URL !=""){
							    reviewInfo += "<div class=\"review-edit\">";
							    reviewInfo += "<a href=\"javascript:void(0)\" onclick=\"window.open('" + ssl_url + SHCM_MDF_LINK_URL + "','reviewWindow', 'width=800,height=560,resizable=yes,scrollbars=yes');return false;\">";
							    reviewInfo += "<img src=\""+ brs_img_url + "review01.gif\" alt=\"���i���r���[��ҏW\">"
							    reviewInfo += "</a>";
							    reviewInfo += "</div>";
							} else {
							    reviewInfo += "<div class=\"review-edit\">";
							    reviewInfo += "<img src=\""+ brs_img_url + "review02.gif\" alt=\"������\">"
							    reviewInfo += "</div>";
							}
							
							reviewInfo += "</div>";
							reviewInfo += "<div class=\"review-item\">";
							reviewInfo += "<table class=\"review-table02\">";
							reviewInfo += "<tr class=\"tr01\">";
							reviewInfo += "<td class=\"td01\"><p class=\"name\"><img src=\"" + brs_img_url + "rev_icon_reviewer.gif\"><span>" + penName + "</span>" + seibetuAndNenrei + "</p>";
							reviewInfo += "<p class=\"post\">���e���F" + TOKO_NTJ + "</p></td>";
							reviewInfo += "<td class=\"td02\"><p class=\"ammount\">�]��&nbsp;";
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
									reviewInfo += "<p>�w�����i�F&nbsp;" + SHCM_KNY_SHN + "</p>";
								}
								
								for (j in SHCM_STMN_KAIT_LIST_PC) {
									var SHCM_STMN_NY = String(SHCM_STMN_KAIT_LIST_PC[j].SHCM_STMN_NY);
									var SHCM_KAIT_NY = String(SHCM_STMN_KAIT_LIST_PC[j].SHCM_KAIT_NY);
									if (SHCM_KAIT_NY != "") {
										reviewInfo += "<p>" + SHCM_STMN_NY + "�F&nbsp;" + SHCM_KAIT_NY + "</p>";
									} else {
										reviewInfo += "<p>" + SHCM_STMN_NY + "�F&nbsp;--</p>";
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
									reviewInfo += "<p class=\"comment_info\">" + HNSN_NTJ + "�@���� ���i�S����</p>";
									reviewInfo += "</div>";
								}
							} else {
								if(SHCM_SNKO_KS > 0){
									reviewInfo += "<tr class=\"tr02\">";
								} else {
									reviewInfo += "<tr class=\"tr03\">";
								}
								reviewInfo += "<td class=\"td05\" colspan=\"2\"><div class=\"cell01\">";
								reviewInfo += "<p class=\"text\">���ӌ��E�����z�̓��e�͂������܂���</p>";
							}
							
							reviewInfo += "</div></td></tr>";
							
							// �Q�l�ɂȂ���
							// 4���ȏ�̏ꍇ��,��؂�Ȃ̂Ŕ�r����,�������Đ��l�ϊ����Ĕ�r
							if (Number(SHCM_SNKO_KS.replace(/,/g, "")) >0){
								reviewInfo += "<tr class=\"tr03\">";
								reviewInfo += "<td class=\"td06\" colspan=\"2\">";
								reviewInfo += "<p class=\"reference\" id=\"P_SHCM_SNKO_KS_" + SHCM_SEQ + "\" style=\"" + "display:block" + "\"><span>" + SHCM_SNKO_KS + "�l</span>���Q�l�ɂȂ�܂����B</p>";
								reviewInfo += "</td>";
								reviewInfo += "</tr>";
							}
							reviewInfo += "</table></div>";
							reviewInfo += "</div>";
							reviewInfo += "</div>";
						}
						// ���i���r���[����ݒ�
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
						reviewInfo += "<p class=\"text01a a-center\"><strong>�ߋ����e�������i���r���[�͂������܂���B</strong></p>";
						reviewInfo += "</div>";
						reviewInfo += "</div>";
						$("#reviewInfoZm").html(reviewInfo);
						$("#pagingZm").html("");
						$("#PageNumberZm").val("1");
					}
					// ��\���f�[�^�����݂���Ƃ��̓��b�Z�[�W���Z�b�g
					var msgInfo = "";
					if(hiHyjDtUmkbnZm == "1"){
						msgInfo += "<p class=\"circle-gray01 text12l15\">���݁A�ߋ��Ƀ��r���[���e�������i�����m�F���邱�Ƃ͂ł��܂���B</p>";
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
					error = "<div class=\"text12l16\">���O�I�����Ă��������B</div>";
					var logon_url = ssl_url + '/EPZB00/EPZB0033/dProdCmtMyPgShow';
					logon_url += '?BELN_SHOP_KBN=' + beln_shop_kbn;
					error = "<div class=\"message01 ml75r75 mt20\">";
					error += "<div class=\"box-bottom\">";
					error += "<p class=\"text01a a-center\"><strong>�^�C���A�E�g�ƂȂ�܂����̂ŁA��ϐ\���󂲂����܂��񂪍ēx���O�I�������Ă��������B<br><a href=\"" + logon_url + "\">���O�I���͂�����</a></strong></p>";
					error += "</div>";
					error += "</div>";
				} else {
					error = "<div class=\"text12l16\">�\���󂲂����܂���A�������ɖ�肪�������܂����B<br>���萔�����|�����܂����A������x��蒼���Ă��������B</div>";
				}
				$("#reviewInfoZm").html(error);
				error_flg = true;
				ReviewInfoFlgZm = false;
				// �y�[�W���O���\����
				$("#pagingZm").html("");
				$("#PageNumberZm").val("1");
			}
		});
		
		nowPageNumberZm = pageNumber;
	}

//���r���[�\�ꗗ�̃y�[�W���O���i���쐬����
//   @param
//      nowPageNum:���݃y�[�W�ԍ�
//      so_kq:������
//      hyjkq:1�y�[�W�ɕ\�����錏��
//      beln_shop_kbn:�x���l�V���b�v�敪
//      sbrkm_jkn:�i������
//      brs_img_url:�C���[�W�z�u�ꏊ
//      brs_img_btn_url:�{�^���C���[�W�z�u�ꏊ
//      ss_url:�T�[�r�X�T�[�u���b�gURL
//      ssl_url:SSL�T�[�u���b�gURL
//      non_ss_url:��T�[�u���b�gURL
	function pagingReviewKn(nowPageNum, so_kq, hyjkq, beln_shop_kbn, sbrkm_jkn, brs_img_url, brs_img_btn_url, ss_url, ssl_url, non_ssl_url){
		
		//�y�[�W���O���i�̃^�O���擾
		var elemPaging = document.getElementById("pagingKn");
		
		//�ϐ�
		var startpage = (nowPageNum - 1) * hyjkq + 1; 
		var endpage = nowPageNum * hyjkq; //���`�����\���Ɏg�p
		if(endpage > so_kq){
			endpage = so_kq;
		}
		var startpaging = "";
		var endpaging = "";
		if ((nowPageNum % 10) == 0) {
			startpaging = (Math.floor(nowPageNum / 10) - 1) * 10 + 1;
			endpaging = Math.floor(nowPageNum / 10) * 10; //�y�[�W���O�ԍ��Ɏg�p
		} else {
			startpaging = Math.floor(nowPageNum / 10) * 10 + 1;
			endpaging = Math.floor(nowPageNum / 10) * 10 + 10; //�y�[�W���O�ԍ��Ɏg�p
		}
		var lastpage = Math.floor(so_kq / hyjkq); //�ŏI�y�[�W
		if((so_kq % hyjkq) != 0){
			lastpage += 1;
		}
		var nextpage = nowPageNum + 1;
		var prevpage = nowPageNum - 1;
		
		//���������`�����\�����쐬
		var pagingInfo = "<p class=\"f-left text12 fc-gray03\">";
		pagingInfo += so_kq + "����" + startpage + "�`" + endpage + "���ڕ\��</p>";
		pagingInfo += "<ul class=\"pager01 pl10\">";
		
		//�O�́��������쐬
		if(nowPageNum != 1){
			pagingInfo += "<li><a href=\"javascript:void(0);\" onClick=\"";
			pagingInfo += "getReviewKnInfoHdk(" + prevpage + ",'" + beln_shop_kbn + "','" + sbrkm_jkn + "','" + brs_img_url + "','" + brs_img_btn_url + "','" + ss_url + "','" + ssl_url + "','" + non_ssl_url + "', true);return false;\">";
			pagingInfo += "<�O��" + hyjkq + "��</a></li>";
		}
		//�y�[�W�ԍ����쐬
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
		//���́��������쐬
		if(nowPageNum == lastpage - 1){
			var lastpageNum = so_kq - (nowPageNum * hyjkq);
			pagingInfo += "<li><a href=\"javascript:void(0);\" onClick=\"";
			pagingInfo += "getReviewKnInfoHdk(" + nextpage + ",'" + beln_shop_kbn + "','" + sbrkm_jkn + "','" + brs_img_url + "','" + brs_img_btn_url + "','" + ss_url + "','" + ssl_url + "','" + non_ssl_url + "', true);return false;\">";
			pagingInfo += "����" + lastpageNum + "��></a></li>";
		}else if(nowPageNum != lastpage){
			pagingInfo += "<li><a href=\"javascript:void(0);\" onClick=\"";
			pagingInfo += "getReviewKnInfoHdk(" + nextpage + ",'" + beln_shop_kbn + "','" + sbrkm_jkn + "','" + brs_img_url + "','" + brs_img_btn_url + "','" + ss_url + "','" + ssl_url + "','" + non_ssl_url + "', true);return false;\">";
			pagingInfo += "����" + hyjkq + "��></a></li>";
		}
		
		pagingInfo += "</ul>";
		elemPaging.innerHTML = pagingInfo;
		$("#PageNumberKn").val(nowPageNum);
	}

//���r���[�ς݈ꗗ�̃y�[�W���O���i���쐬����
//   @param
//      nowPageNum:���݃y�[�W�ԍ�
//      so_kq:������
//      hyjkq:1�y�[�W�ɕ\�����錏��
//      beln_shop_kbn:�x���l�V���b�v�敪
//      brs_img_url:�C���[�W�z�u�ꏊ
//      brs_img_btn_url:�{�^���C���[�W�z�u�ꏊ
//      pc_common:PC_COMMON�̃p�X
//      ss_url:�T�[�r�X�T�[�u���b�gURL
//      ssl_url:SSL�T�[�u���b�gURL
//      non_ss_url:��SSL�T�[�u���b�gURL
	function pagingReviewZm(nowPageNum, so_kq, hyjkq, beln_shop_kbn, brs_img_url, brs_img_btn_url, pc_common, ss_url, ssl_url, non_ssl_url){
		
		//�y�[�W���O���i�̃^�O���擾
		var elemPaging = document.getElementById("pagingZm");
		
		//�ϐ�
		var startpage = (nowPageNum - 1) * hyjkq + 1; 
		var endpage = nowPageNum * hyjkq; //���`�����\���Ɏg�p
		if(endpage > so_kq){
			endpage = so_kq;
		}
		var startpaging = "";
		var endpaging = "";
		if ((nowPageNum % 10) == 0) {
			startpaging = (Math.floor(nowPageNum / 10) - 1) * 10 + 1;
			endpaging = Math.floor(nowPageNum / 10) * 10; //�y�[�W���O�ԍ��Ɏg�p
		} else {
			startpaging = Math.floor(nowPageNum / 10) * 10 + 1;
			endpaging = Math.floor(nowPageNum / 10) * 10 + 10; //�y�[�W���O�ԍ��Ɏg�p
		}
		var lastpage = Math.floor(so_kq / hyjkq); //�ŏI�y�[�W
		if((so_kq % hyjkq) != 0){
			lastpage += 1;
		}
		var nextpage = nowPageNum + 1;
		var prevpage = nowPageNum - 1;
		
		//���������`�����\�����쐬
		var pagingInfo = "<p class=\"f-left text12 fc-gray03\">";
		pagingInfo += so_kq + "����" + startpage + "�`" + endpage + "���ڕ\��</p>";
		pagingInfo += "<ul class=\"pager01 pl10\">";
		
		//�O�́��������쐬
		if(nowPageNum != 1){
			pagingInfo += "<li><a href=\"javascript:void(0);\" onClick=\"";
			pagingInfo += "getReviewZmInfoHdk(" + prevpage + ",'" + beln_shop_kbn + "','" + brs_img_url + "','" + brs_img_btn_url + "','" + pc_common + "','" + ss_url + "','" + ssl_url + "','" + non_ssl_url + "', true);return false;\">";
			pagingInfo += "<�O��" + hyjkq + "��</a></li>";
		}
		//�y�[�W�ԍ����쐬
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
		//���́��������쐬
		if(nowPageNum == lastpage - 1){
			var lastpageNum = so_kq - (nowPageNum * hyjkq);
			pagingInfo += "<li><a href=\"javascript:void(0);\" onClick=\"";
			pagingInfo += "getReviewZmInfoHdk(" + nextpage + ",'" + beln_shop_kbn + "','" + brs_img_url + "','" + brs_img_btn_url + "','" + pc_common + "','" + ss_url + "','" + ssl_url + "','" + non_ssl_url + "', true);return false;\">";
			pagingInfo += "����" + lastpageNum + "��></a></li>";
		}else if(nowPageNum != lastpage){
			pagingInfo += "<li><a href=\"javascript:void(0);\" onClick=\"";
			pagingInfo += "getReviewZmInfoHdk(" + nextpage + ",'" + beln_shop_kbn + "','" + brs_img_url + "','" + brs_img_btn_url + "','" + pc_common + "','" + ss_url + "','" + ssl_url + "','" + non_ssl_url + "', true);return false;\">";
			pagingInfo += "����" + hyjkq + "��></a></li>";
		}
		
		pagingInfo += "</ul>";
		elemPaging.innerHTML = pagingInfo;
		$("#PageNumberZm").val(nowPageNum);
	}

