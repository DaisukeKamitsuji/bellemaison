(function ($) {

	//mem_chkblock
	function mem_chkblock() {

//		$('#LOGON_ID_KBN01').attr('checked', 'checked');
//		$('#SMTPN_ML_KBN,#KDM_JHO_TRK_KBN').attr('checked', false);
//		$('#LOGON_ID1').val('');

		/* 修正 130322 注釈フェードバグ修正 ココから */
		$('input.clickAlert').each(function (i) {
			var chkBox = 'div.alertArea',
				$chkBox = $(chkBox).eq(i);
			$(this).focus(function () {
				$chkBox.stop(true, true).fadeIn();
			}).blur(function () {
				$chkBox.stop(true, true).fadeOut('fast');
			});
		});
		/* 修正 130322 注釈フェードバグ修正 ココまで */


		/* 修正 130418 お子様情報チェック解除で情報を削除 ココから */
		$('#KDM_JHO_TRK_KBN').change(function () {
			var chkBox2 = '#SHSN_YTBI';
			$('#SHSN_YTBI label').show();
			if ($(this).is(':checked')) {
				$(chkBox2).fadeIn();
			} else {
				$(chkBox2).fadeOut();
				$(chkBox2).find('input,select').each(function () {
					switch ($(this).attr('type')) {
						case 'radio':
							return $(this).attr("checked", false);
						default:
							return $(this).val('');
					}
				});
			}
		}).change();
		/* 修正 130418 お子様情報チェック解除で情報を削除 ココまで */

		$("input[name=LOGON_ID_KBN]").change(function () {
			var val = $(this).val();
			if (val == 1) {
				$('#logonIdBlock').fadeIn();
			} else {
				$('#logonIdBlock').fadeOut();
			}
		});
		//IE label
		if ($.browser.msie) {
			$("label").click(function (e) {
				e.preventDefault();
				$("#" + $(this).attr("for")).click().change();
			});
		}

	}


	//mem_placeholder
	function mem_placeholder() {
		$('div.tableBlock :text,div.tableBlock :password').each(function () {
			if (!$(this).attr('title')) return;
			var inputW = $(this),
				span = $('<span/>').text(inputW.attr('title')),
				label = $('<label class="placeholder" />').css({
					left: -inputW.outerWidth()
				}).attr('for', this.id).append(span).insertAfter(inputW);
			inputW.focus(function () {
				label.hide();
			}).blur(function () {
				if (this.value === '') {
					label.show();
				}
				else {
					label.hide();
				}
			});
			if ($(this).val()) {
				label.hide();
			}
		});
	}
	//mem_dupWidth
	function mem_dupWidth() {
		var w = $(window).width();
		$('#duplicationArea').css({
			width: w
		});
	}

	$(function () {

		var loadInit = true;
		$(window).resize(function () {
			mem_dupWidth();
		});
	
		mem_dupWidth();
		
		
		mem_chkblock();
		mem_placeholder();

		var stepPattern = {
				a: '完了',
				b: '購入手続き',
				c: 'カタログ請求手続き',
				d: '入力応募'
			},
			/* 修正 130902 どの会員登録フローでの離脱かを計測する ココから */
			stepAnalyzeId = {
				a: 'mem',
				b: 'purch',
				c: 'catalog',
				d: 'quest'
			},
			/* 修正 130902 どの会員登録フローでの離脱かを計測する ココまで */
			step = $('input[name=step_pattern]').val(),
			/* 修正 130902 システムエラー時の離脱かを計測する ココから */
			isSysError = $('.errorMassageBlock p').text().length > 0;
			/* 修正 130902 システムエラー時の離脱かを計測する ココまで */
		if(step == 'b' || step == 'c' || step == 'd') {
			var $stepImage = $('#flowBlock').find('.lastchild img'),
				stepStr = $stepImage.attr('src'),
				ftype = stepStr.substring(stepStr.lastIndexOf('.'), stepStr.length),
				stepStr2 = stepStr.replace(ftype, '_' + step + ftype);
			$stepImage
				.attr('src', stepStr2)
				.attr('alt', stepPattern[step]);
		}

		/* 修正 130328 ページを離れる際にアラートを表示 ココから */
		var _lastFormElement = null;
		$('input,select,textarea').each(function() {
			$(this).bind('focus', function() {
				/* 修正 130516 変更前の値を保持しblur時に値を比較し、値が異なったらonchangeイベントの期待動作相当と見なす ココから */
				$.data(this, 'lastValue', $(this).val());
				/* 修正 130516 変更前の値を保持しblur時に値を比較し、値が異なったらonchangeイベントの期待動作相当と見なす ココまで */
				_lastFormElement = $(this).attr('name');
			});
		});
		var _submit = false;
		var _onBeforeUnload = function (e) {
//			$(window).unbind('beforeunload').bind('beforeunload', _onBeforeUnload);
			if (_lastFormElement != null) {
				e.returnValue = 'Closing.';
				return 'ページから移動すると、入力したデータは保存されません。';
			}
		};
		$(window).bind('beforeunload', _onBeforeUnload);
		$('form[name=form01]').submit(function () {
			_submit = true;
			$(window).unbind('beforeunload');
			return true;
		});
		/* 修正 130531 会員重複エラーのリンクを離脱から排除 ココから */
		$('#duplicationArea li a').click(function() {
			/* 修正 130902 会員重複エラーのリンクがクリックされた数を計測する ココから */
			if(window.s_sc != undefined) {
				var index = $('#duplicationArea li a').index(this);
				var msgIDs = ['KnNoRef', 'PwdIdntty', 'Logon'];
				window.s_sc.linkTrackVars = 'prop15';
				window.s_sc.prop15 = 'pc:CLICK:' + msgIDs[index];
				window.s_sc.tl(true, 'o', '照会リンククリック');
			}
			/* 修正 130902 会員重複エラーのリンクがクリックされた数を計測する ココまで */
			_submit = true;
			$(window).unbind('beforeunload');
			return true;
		});
		/* 修正 130531 会員重複エラーのリンクを離脱から排除 ココまで */
		$(window).bind('unload', function(){
			if(!_submit) {
				if(window.s_sc != undefined) {
					window.s_sc.linkTrackVars = 'prop16';
					/* 修正 130902 どの会員登録フローで、システムエラー時の離脱かを計測する ココから */
					var sysError = isSysError ? ':sysErr' : '';
					window.s_sc.prop16 = stepAnalyzeId[step] + sysError + ':pc:form01*'+_lastFormElement;
					/* 修正 130902 どの会員登録フローで、システムエラー時の離脱かを計測する ココまで */
					window.s_sc.tl(true, 'o', '会員登録フォーム離脱');
				}
			}
		});
		/* 修正 130328 ページを離れる際にアラートを表示 ココまで */

		//duplicationArea close
		$('#duplicationClose a').click(function (e) {
			e.preventDefault();
			if ($.browser.msie) {
				$('#duplicationArea').hide();
			} else {
				$('#duplicationArea').slideUp(800);
			}

		});


		// Ajax check -----------------------------------------

		var $loadingImg = $('<img src="/pc/for_app/img/brs_img/mem_loading.gif" width="16" height="16">'),

			$knSei     = $('input[name=ONM_KN_SEI]'),
			$knMei     = $('input[name=ONM_KN_MEI]'),
			$tel1      = $('input[name=TEL1]'),
			$tel2      = $('input[name=TEL2]'),
			$tel3      = $('input[name=TEL3]'),
			$ktaiTel1  = $('input[name=KTAI_TEL1]'),
			$ktaiTel2  = $('input[name=KTAI_TEL2]'),
			$ktaiTel3  = $('input[name=KTAI_TEL3]'),

			$logonInput   = $('#logonInput'),
			$logonIdKbn1  = $('#LOGON_ID_KBN01'),
			$logonIdKbn2  = $('#LOGON_ID_KBN02'),
			$logonId      = $('input#LOGON_ID'),
			$logonIdMail  = $('#logonIdMail'),
			$logonIdBlock = $('#logonIdBlock'),
			$logonTrue    = $('#logonTrue'),
			$logonFalse   = $('#logonFalse'),
			$logonLoading = $('<p class="mt10"></p>').append($loadingImg.clone()).appendTo($logonInput.parent()).hide(),

			$pcMlAddr = $('input[name=PC_ML_ADDR]'),
			$hyjFlg   = $('input[name=LOGONID_HYJ_FLG]'),

			$ybno = $('input[name=YBNO]'),
			$zipcodeFalse = $('#zipcodeFalse'),
			$zipcodeLoading = $('<span class="ml10"></span>').append($loadingImg.clone()).appendTo($ybno.parent()).hide();

			var $jsh = [],
				$jshKn = [];
			$jsh[0] = $('input[name=JSH1]');
			$jsh[1] = $('input[name=JSH2]');
			$jsh[2] = $('input[name=JSH3]');
			$jshKn[0] = $('input[name=JSH_KN1]');
			$jshKn[1] = $('input[name=JSH_KN2]');
			$jshKn[2] = $('input[name=JSH_KN3]');
			var $jshJdShtkYbno = $('input[name=JSH_JD_SHTK_YBNO]');



		// check duplicate members
		var checkMember = new REGCheckDuplicateMember({
			url: API_CH_DUP_MEMBER,
			success: function() {
				$('#duplicationArea').slideUp();
				return true;
			},
/* 修正 130404 ログオンID出し分け ココから */
			error: function(xml) {
				var $duplicationArea = $('#duplicationArea');
				$duplicationArea.find('.message').html($(xml).find('msg').text());
				$('#form02 [name=ONM_KN_SEI]').val($(xml).find('chfkKnKnSei').text());
				$('#form02 [name=ONM_KN_MEI]').val($(xml).find('chfkKnKnMei').text());
				$('#form02 [name=TEL]').val($(xml).find('chfkTel').text());
				$duplicationArea.slideDown(500);
			}
/* 修正 130404 ログオンID出し分け ココまで */
		});
		$.each([$knSei,$knMei,$tel1,$tel2,$tel3,$ktaiTel1,$ktaiTel2,$ktaiTel3], function() {
			$(this).blur(function() {

				/* 修正 130611 フォームアシストの半角変換機能で実行された場合は無視する ココから */
				var c = arguments.callee;
	            while(c = c.caller){
	                if(c.toString().indexOf("FormAssist") >= 0){
	                     return;
	                }
	            }
	            /* 修正 130611 フォームアシストの半角変換機能で実行された場合は無視する ココまで */
			
				/* 修正 130516 変更前の値を保持しblur時に値を比較し、値が異なったらonchangeイベントの期待動作相当と見なす ココから */
				if($.data(this, 'lastValue') == $(this).val()) { return; }
				/* 修正 130516 変更前の値を保持しblur時に値を比較し、値が異なったらonchangeイベントの期待動作相当と見なす ココまで */
				var postdata = {},
					isValid = false;
				/* 修正 130516 非同期処理実行条件 ココから */
				if(!$.validate.isEmpty($knSei) && !$.validate.isEmpty($knMei)) {
					postdata['ONM_KN_SEI'] = $knSei.val();
					postdata['ONM_KN_MEI'] = $knMei.val();
					if(!$.validate.isEmpty($tel1) && !$.validate.isEmpty($tel2) && !$.validate.isEmpty($tel3)) {
						postdata['TEL1'] = $tel1.val();
						postdata['TEL2'] = $tel2.val();
						postdata['TEL3'] = $tel3.val();
						isValid = true;
					}
					if(!$.validate.isEmpty($ktaiTel1) && !$.validate.isEmpty($ktaiTel2) && !$.validate.isEmpty($ktaiTel3)) {
						postdata['KTAI_TEL1'] = $ktaiTel1.val()
						postdata['KTAI_TEL2'] = $ktaiTel2.val();
						postdata['KTAI_TEL3'] = $ktaiTel3.val();
						isValid = true;
					}
					if(isValid) {
						checkMember.load(postdata);
					}
					/* 修正 130516 非同期処理実行条件 ココまで */
				}
			});
		});

/* 修正 130404 ログオンID出し分け ココから */
		// check duplicate mailaddress
		var checkMailAddress = new REGCheckDuplicateMailAddress({
			url: API_CH_DUP_MAILADDRESS,
/* 修正 130418 name=LOGON_ID2からLOGON_IDに ココから */
			success: function(xml) {
				$logonIdMail.text($pcMlAddr.val());
				$logonInput.children().show();
				$logonIdBlock.hide();
				if(!$.validate.isEmpty($logonId)) {
					$logonIdKbn2
						.attr('checked','checked')
						.change();
				}
				else {
					$logonIdKbn1
						.attr('checked','checked')
						.change();
				}
//				$logonId.attr('name', 'LOGON_ID1');
/* 追加 130506 メールアドレス重複フラグを追加 ココから */
				$hyjFlg.val('1');
/* 追加 130506 メールアドレス重複フラグを追加 ココまで */
			},
			error: function(xml) {
				$logonInput.children(':not(#logonIdBlock)').hide();
/* 修正 130611 ラジオボタンのイベントトリガを追加 ココから */
				$logonIdKbn2.attr('checked','checked').change();
/* 修正 130611 ラジオボタンのイベントトリガを追加 ココまで */
				$logonIdBlock.show();
//				$logonId.attr('name', 'LOGON_ID2');
/* 追加 130506 メールアドレス重複フラグを追加 ココから */
				$hyjFlg.val('0');
/* 追加 130506 メールアドレス重複フラグを追加 ココまで */
			}
/* 修正 130418 name=LOGON_ID2からLOGON_IDに ココまで */
		});
		$pcMlAddr.blur(function() {
			/* 修正 130611 フォームアシストの半角変換機能で実行された場合は無視する ココから */
		    var c = arguments.callee;
            while(c = c.caller){
                if(c.toString().indexOf("FormAssist") >= 0){
                    return;
                }
            } 
            /* 修正 130611 フォームアシストの半角変換機能で実行された場合は無視する ココまで */
		
			/* 修正 130516 変更前の値を保持しblur時に値を比較し、値が異なったらonchangeイベントの期待動作相当と見なす ココから */
			if($.data(this, 'lastValue') == $(this).val()) { return; }
			/* 修正 130516 変更前の値を保持しblur時に値を比較し、値が異なったらonchangeイベントの期待動作相当と見なす ココまで */
			if($.validate.isEmpty($pcMlAddr)) { return; }
			checkMailAddress.load({
				PC_ML_ADDR: $pcMlAddr.val()
			});
		});
/* 追加 130506 メールアドレス重複フラグを追加 ココから */
		if($hyjFlg.val() == '1') {
			$logonIdMail.text($pcMlAddr.val());
			$logonInput.children().show();
			$logonIdBlock.hide();
			$("input[name=LOGON_ID_KBN]").change();
		}
/* 追加 130506 メールアドレス重複フラグを追加 ココまで */

		// check duplicate logon id
//		var checkLogonID1 = new REGCheckDuplicateLogonID({ url: API_CH_DUP_LOGONID });
//		$logonId.blur(function() {
//			$logonTrue.hide();
//			$logonFalse.hide();
//			var len = $(this).val().length;
//			/* 修正 130516 非同期処理実行条件 ココから */
//			// if(!$.validate.isAlphaNumeric($(this)) || !(len >= 4 && len <= 100)) { return; }
//			if(!$.validate.isEmpty($(this))) { return; }
//			/* 修正 130516 非同期処理実行条件 ココまで */
//			checkLogonID1.load({
//				LOGON_ID1: $(this).val()
//			},
//			{
//				/* 修正 130409 エラーメッセージをAPIから出力 ココから */
//				success: function(xml) {
//					$logonTrue.html($(xml).find('msg').text()).show();
//					$logonFalse.html('').hide();
//				},
//				error: function(xml) {
//					$logonTrue.html('').hide();
//					$logonFalse.html($(xml).find('msg').text()).show();
//				},
//				/* 修正 130409 エラーメッセージをAPIから出力 ココまで */
//				loadStart: function() {
//					$logonLoading.show();
//				},
//				loadComplete: function() {
//					$logonLoading.hide();
//				}
//			});
//		}).change(function() {
//			$logonIdKbn2
//				.attr('checked','checked')
//				.change();
//		});
/* 修正 130404 ログオンID出し分け ココまで */

		// zipcode to address
		var zipcode2Address = new REGGetZipcode2Address({
			url: API_CH_ZIP_TO_ADDRESS,
			success: function(xml) {
				$zipcodeFalse.hide();
				var $list = $(xml).find('list'),
					zipcode = $(xml).find('zipcode').text();
				$jshJdShtkYbno.val(zipcode);
				if($list.length == 1) {
					var $addresses = $list.find('address');
					$addresses.each(function() {
						var n = $(this).attr('no');
						if($jsh[n-1]) $jsh[n-1].val($(this).find('rb').text()).trigger('blur');
						if($jshKn[n-1]) $jshKn[n-1].val($(this).find('rt').text()).trigger('blur');
					});
				}
				else if($list.length > 1) {
					var list = [];
					$list.each(function() {
						var $addresses = $(this).find('address'),
							address = [],
							addressKn = [];
						$addresses.each(function() {
							var n = $(this).attr('no');
							address[n-1] = $(this).find('rb').text();
							addressKn[n-1] = $(this).find('rt').text();
						});
						list.push([
							'〒' + zipcode + ' ' + address.join(''),
							zipcode,
							address[0],
							address[1],
							address[2],
							addressKn[0],
							addressKn[1],
							addressKn[2]
						]);
					});
					// show suggest
					$ybno.simpleSuggest(list, {
						onItemSelect: function(li) {
							var extra = li.extra;
							if(extra) {
								$jshJdShtkYbno.val(extra[0]);
								$jsh[0].val(extra[1]).trigger('blur');
								$jsh[1].val(extra[2]).trigger('blur');
								$jsh[2].val(extra[3]).trigger('blur');
								$jshKn[0].val(extra[4]);
								$jshKn[1].val(extra[5]);
								$jshKn[2].val(extra[6]);
							}
						}
					});
				}
			},
			error: function(xml) {
				/* 修正 130409 エラーメッセージをAPIから出力 ココから */
				$zipcodeFalse
					.html($(xml).find('msg').text())
					.show();
				/* 修正 130409 エラーメッセージをAPIから出力 ココまで */
			},
			loadStart: function() {
				$zipcodeLoading.show();
			},
			loadComplete: function() {
				$zipcodeLoading.hide();
			}
		});
		var zipcodeTimeID;
		/* 修正 130531 ココから */
		var prevVal = $ybno.val();
		/* 修正 130531 ココまで */
		/* 修正 130516 郵便番号非同期トリガーのタイミング ココから */
		$ybno
			.blur(function() {
				/* 修正 130611 フォームアシストの半角変換機能で実行された場合は無視する ココから */
				var c = arguments.callee;
            	while(c = c.caller){
            	   	if(c.toString().indexOf("FormAssist") >= 0){
            	   		return;
                	}
                }
            	/* 修正 130611 フォームアシストの半角変換機能で実行された場合は無視する ココまで */
            
				/* 修正 130516 変更前の値を保持しblur時に値を比較し、値が異なったらonchangeイベントの期待動作相当と見なす ココから */
				if($.data(this, 'lastValue') == $(this).val()) { return; }
				/* 修正 130516 変更前の値を保持しblur時に値を比較し、値が異なったらonchangeイベントの期待動作相当と見なす ココまで */
				var val = $ybno.val();
				/* 修正 130531 ココから */
				/* if(val != prevVal) { */
				/* 修正 130531 ココまで */
					$ybno.hideSimpleSuggest();
					/* // with hyphen
					if(val.length >= 7 && $.validate.isNumericHyphen($ybno)) {
						var zipm = val.match(/^(\d{3})-?(\d{4,5})$/);
						if(zipm) {
							$ybno1.val(zipm[1]);
							$ybno2.val(zipm[2]);
							zipcode2Address.load({
								YBNO: zipm[1] + zipm[2]
							});
						}
					}
					*/
					/* 修正 130516 非同期処理実行条件 ココから */
					if(!$.validate.isEmpty($ybno) && val.length == 7) {
					/* 修正 130516 非同期処理実行条件 ココまで */
						zipcode2Address.load({
							YBNO: val
						});
					}
				/* 修正 130531 ココから */
				/* } */
				/* 修正 130531 ココまで */
			});
		/* 修正 130516 郵便番号非同期トリガーのタイミング ココまで */

		loadInit = false;

	});


	// Simple suggest -----------------------------------------

	$.SimpleSuggest = function(input, data, options) {
		var defaults = {};
		defaults.resultsClass = "suggestResults";
		defaults.resultOverClass = "suggestOver";
		defaults.width = 0;
		defaults.onItemSelect = null;

		options = $.extend({}, defaults, options);

		var $input = $(input).attr("autocomplete", "off").focus();

		// Create results
		var results = document.createElement("div");
		// Create jQuery object for results
		var $results = $(results);
		$results.hide().addClass(options.resultsClass).css("position", "absolute");
		if( options.width > 0 ) $results.css("width", options.width);

		// Add to body element
		$("body").append(results);

//		input.autocompleter = me;

		var timeout = null;
		var active = -1;
		var prev = "";

		function moveSelect(step) {
			var lis = $("li", results);
			if (!lis) return;
			active += step;

			if (active < 0) {
				active = 0;
			} else if (active >= lis.size()) {
				active = lis.size() - 1;
			}

			lis.removeClass(options.resultOverClass);
			$(lis[active]).addClass(options.resultOverClass);

			// Weird behaviour in IE
			// if (lis[active] && lis[active].scrollIntoView) {
			// 	lis[active].scrollIntoView(false);
			// }

		}

		function selectCurrent() {
			var li = $("li." + options.resultOverClass, results)[0];
			if (li) {
				selectItem(li);
				return true;
			} else {
				return false;
			}
		}

		function selectItem(li) {
			if (!li) {
				li = document.createElement("li");
				li.extra = [];
				li.selectValue = "";
			}
			var v = $.trim(li.selectValue ? li.selectValue : li.innerHTML);
			prev = v;
			$results.html("");
//			$input.val(v);
			hideResultsNow();
			if (options.onItemSelect) setTimeout(function() { options.onItemSelect(li) }, 1);
		}

		function setData(data) {
			if (data) {
				results.innerHTML = "";
				// if the field no longer has focus or if there are no matches, do not display the drop down
				if( data.length == 0 ) return hideResultsNow();

				if ($.browser.msie) {
					// we put a styled iframe behind the calendar so HTML SELECT elements don't show through
					$results.append(document.createElement('iframe'));
				}
				results.appendChild(dataToDom(data));
				showResults();
				return true;
			} else {
				hideResultsNow();
				return false;
			}
		}


		function __onKeydown(e) {
			// track last key pressed
			lastKeyPressCode = e.keyCode;
			switch(e.keyCode) {
				case 38: // up
					e.preventDefault();
					moveSelect(-1);
					break;
				case 40: // down
					e.preventDefault();
					moveSelect(1);
					break;
				case 9:  // tab
				case 13: // return
					if( selectCurrent() ){
						// make sure to blur off the current field
						$input.get(0).blur();
						e.preventDefault();
					}
					break;
				default:
					break;
			}
		}

		function __onBlur(e) {
			// track whether the field has focus
			hasFocus = false;
			hideResults();
		}

		function showResults() {
			$input
				.keydown(__onKeydown)
				.blur(__onBlur);

			// get the position of the input field right now (in case the DOM is shifted)
			var pos = findPos(input);
			// either use the specified width, or autocalculate based on form element
//			var iWidth = (options.width > 0) ? options.width : $input.width();
			// reposition
			$results.css({
//				width: parseInt(iWidth) + "px",
				top: (pos.y + input.offsetHeight) + "px",
				left: pos.x + "px"
			}).show();
		}

		function hideResults() {
			if (timeout) clearTimeout(timeout);
			timeout = setTimeout(hideResultsNow, 200);
		}

		function hideResultsNow() {
			if ($results.is(":visible")) {
				$results.hide();
			}
			$input
				.unbind('keydown', __onKeydown)
				.unbind('blur', __onBlur);
		}

		function dataToDom(data) {
			var ul = document.createElement("ul");
			var num = data.length;

			// limited results to a max number
//			if( (options.maxItemsToShow > 0) && (options.maxItemsToShow < num) ) num = options.maxItemsToShow;

			for (var i=0; i < num; i++) {
				var row = data[i];
				if (!row) continue;
				var li = document.createElement("li");
				li.innerHTML = row[0];
				li.selectValue = row[0];
				var extra = null;
				if (row.length > 1) {
					extra = [];
					for (var j=1; j < row.length; j++) {
						extra[extra.length] = row[j];
					}
				}
				li.extra = extra;
				ul.appendChild(li);
				$(li).hover(
					function() { $("li", ul).removeClass(options.resultOverClass); $(this).addClass(options.resultOverClass); active = $("li", ul).index($(this).get(0)); },
					function() { $(this).removeClass(options.resultOverClass); }
				).click(function(e) { e.preventDefault(); e.stopPropagation(); selectItem(this) });
			}
			return ul;
		}

		function findPos(obj) {
			var curleft = obj.offsetLeft || 0;
			var curtop = obj.offsetTop || 0;
			while (obj = obj.offsetParent) {
				curleft += obj.offsetLeft
				curtop += obj.offsetTop
			}
			return {x:curleft,y:curtop};
		}

		this.show = function(data) {
			setData(data);
		};
		this.hide = function() {
			hideResultsNow();
		};

		if(data) {
			setData(data);
		}
	};
	$.fn.simpleSuggest = function(data, options) {
		this.each(function() {
			var input = this;
			var s = $.data(input, 'suggest');
			if(s) {
				s.show(data);
			}
			else {
				s = new $.SimpleSuggest(input, data, options);
				$.data(input, 'suggest', s);
			}
		});
	};
	$.fn.hideSimpleSuggest = function() {
		this.each(function() {
			var input = this;
			var s = $.data(input, 'suggest');
			if(s) {
				s.hide();
			}
		});
	}

})(jQuery);