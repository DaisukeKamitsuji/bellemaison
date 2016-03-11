(function(win) {
    var EventGen = function(){
        var t = this;
        
        t.listeners = new Object();
        
        t.addListener = function(f){
            t.listeners[f.valueOf()] = f;
        }
        
        t.removeListener = function(f){
            delete t.listeners[f.valueOf()];
        }
        
        t.deliverEvents = function(e){
            for (var listener in t.listeners) {
                t.listeners[listener](e);
            }
        }
        
        t.getDataByJSON = function(jsonText){
            var data = new Object();
            if((typeof window.JSON != 'undefined') && (typeof window.JSON.parse != 'undefined')){
                data = JSON.parse(jsonText);
            } else {
                data = (new Function('return ' + jsonText))();
            }
            return data;
        }
        
        // 連相配列の要素数を取得
        t.getHashLength = function(arr){
            var cnt=0;
            for(var key in arr){
                cnt++;
            }
        return cnt;
        }
    };
    
    // 検索情報オブジェクト
    var SearchConditions = function(currentDomain){
        var t = this;
        t.currentDomain = currentDomain;
        t.base_url = currentDomain + '/ep/sa/';
        t.conditions = new Object();
        t.recentURL = document.referrer;
        t.ascSpKbn = false;
        t.TATEBO = EscapeSJIS('|');
        t.COMMA = EscapeSJIS(',');
        t.isChangedCategory = false;
        
        // json形式で書かれた文字列をJSON形式で商品情報として保持する
        t.loadConditionsByJSON = function(jsonText){
            t.isChangedCategory = false;
            if ($('#ascSpKbn').size() != 0) {
                t.ascSpKbn = true;
            } else {
                t.ascSpKbn = false;
            }
            t.conditions = t.getDataByJSON(jsonText);
            t.conditions.referrer = t.recentURL;
        }
        
        t.loadConditions = function(cond){
            t.isChangedCategory = false;
            t.conditions = cond;
        }
        
        // 共通で引継ぐドリルダウンの設定
        t.changeCommonParameter = function(key){
            // ページ番号以外のドリルダウンが変更された場合、ページ番号を1に戻す
            if (key != 'PAGE_NUMBER') {
                t.conditions['PAGE_NUMBER'] = '1';
            }
            
            // 通常スペラー状態の絞り込み検索の場合、SP=offを設定
            if (t.ascSpKbn) {
                t.conditions['SP'] = 'off';
            }
        }
        
        // OR検索可能なドリルダウンを変更
        t.changeSomeCondition = function(key, value, delimMj){
            // 区切り文字の設定
            var loDelimMj = delimMj;
            if (loDelimMj.length == 0) {
                loDelimMj = t.TATEBO;
            }
            if (value != '') {
                // 検索条件を一部追加・削除する場合
                var prevValues = t.conditions[key].split(loDelimMj);
                var nextValues = [];
                var existNum = $.inArray(value, prevValues);
                if (existNum != -1) {
                    // 検索情報に、選択された要素が存在している場合、既存の検索情報から削除
                    nextValues = prevValues.slice(0, existNum).concat(prevValues.slice(existNum + 1));
                } else {
                    // 検索情報に、選択された要素が存在しない場合、既存の検索情報に追加
                    if (prevValues[0] != '') {
                        nextValues = prevValues;
                    }
                    nextValues.push(value);
                }
                
                // 検索情報を更新
                var loValue = nextValues.join(loDelimMj);
                t.conditions[key] = loValue;
            } else {
                // 検索条件をすべて解除する場合
                t.conditions[key] = '';
            }
        }
        
        t.preserveCategoryChanged = function(key){
            if (key == 'C') {
                t.isChangedCategory = true;
            }
        }
        
        // 検索情報が変更された場合、非同期検索を実行（1つのパラメータに変更）
        t.setCondition = function(key, value){
            t.preserveCategoryChanged(key);
            var loEsValue = EscapeSJIS(value);
            if (key == 'T' || key == 'CL' || key == 'SZ' || key == 'B' || key == 'CT' || key == 'SB') {
                var loDelimMj = t.TATEBO;
                if (key == 'SB') {
                    loDelimMj = t.COMMA;
                }
                t.changeSomeCondition(key, loEsValue, loDelimMj);
            } else if (key == 'P' && loEsValue == '') {
                // 価格が解除された場合
                t.conditions['P'] = '';
                t.conditions['PL'] = '';
                t.conditions['PH'] = '';
            } else {
                // 価格の解除または、OR検索可能ドリルダウンではない場合
                t.prevValue = t.conditions[key];
                if (t.prevValue != loEsValue) {
                    // 検索情報に選択された要素が存在しない場合、検索情報を更新
                    t.conditions[key] = loEsValue;
                }
            }
            
            // 共通で引継ぐドリルダウンを設定
            t.changeCommonParameter(key);
            
            t.deliverEvents();
        }
        
        // 検索情報が変更された場合、非同期検索を実行（2つのパラメータを同時に変更）
        t.setConditionDouble = function(key1, value1, key2, value2){
            t.preserveCategoryChanged(key1);
            t.preserveCategoryChanged(key2);
            var prev1 = t.conditions[key1];
            var prev2 = t.conditions[key2];
            if (prev1 != value1 || prev2 != value2) {
                t.conditions[key1] = value1;
                t.conditions[key2] = value2;
                
                // 共通で引継ぐドリルダウンを設定
                t.changeCommonParameter(key1);
                t.deliverEvents();
            }
        }
        
        // 検索情報が変更された場合、非同期検索を実行（他情報をクリアして1つのパラメータのみ変更）
        t.setConditionOnlyThis = function(key1, value1, key2, value2){
            t.preserveCategoryChanged(key1);
            t.preserveCategoryChanged(key2);
            for (var i in t.conditions) {
                if (i != 'BELN_SHOP_KBN' && i != 'TSP' && i != 'GK') {
                    t.conditions[i] = '';
                }
            }
            if ($('#0hit').size() != 0) {
                t.conditions['TSP'] = '';
            }
            
            t.conditions[key1] = value1;
            if (typeof key2 != 'undefined') {
                t.conditions[key2] = value2;
            }
            t.deliverEvents();
        }
        
        // 検索情報を返却
        t.getCondition = function(){
            return t.conditions;
        }
        
        // 検索中のドメインを返却
        t.getCurrentDomain = function(){
            return t.currentDomain;
        }
        
        // リファラーをセット
        t.setRecentURL = function(url){
            t.recentURL = url;
        }
        
        // リファラーを返却
        t.getRecentURL = function(url){
            return t.recentURL;
        }
        
        // 検索情報から、リクエストURLを生成する処理
        t.getURL = function(){
           var params = '?';
           for (var key in t.conditions) {
               if ((t.conditions[key].length != 0 && key != 'referrer') || key == 'S') {
                   if (params != '?') {
                       params += '&';
                   }
                   params += key + '=' + t.conditions[key];
               }
           }
           var nextURL = t.base_url + params;
           return nextURL;
       }
    };
    SearchConditions.prototype = new EventGen();
    
    // リクエストマネージャ
    var RequestManager = function(searchCond){
        var t = this;
        t.conditions = searchCond;
        t.currentURL = location.href;
        t.requestMap = new Object();
        t.xhrMap = new Object();
        
        // 通信中のajax処理を中断する処理
        t.cancelRequest = function() {
            if (t.getHashLength(t.requestMap) == 0) {
                // 通信中のajax処理がない場合
                return;
            }
            for (var i in t.requestMap) {
                if (t.requestMap[i]) {
                    t.requestMap[i] = false;
                    t.xhrMap[i].abort();
                }
            }
        }
        
        t.searchConditionChanged = function(e){
            // リクエストURLを取得
            if (t.getHashLength(t.requestMap) == 0) {
                if (t.currentURL != '') {
                    t.conditions.setRecentURL(t.currentURL.replace('/sa/', '/s/'));
                }
            }
            t.currentURL = t.conditions.getURL();
            
            // IE7の場合、主遷移
            var userAgent = window.navigator.userAgent.toLowerCase();
            var appVersion = window.navigator.appVersion.toLowerCase();
            if (userAgent.indexOf('msie') != -1) {
                if (appVersion.indexOf('msie 7.') != -1) {
                    location.href = t.currentURL.replace('/sa/', '/s/');
                    return;
                }
            }
            
            // 連打リクエストの場合、以前までに送信したリクエストの送信区分値をfalseにする
            t.cancelRequest();
            t.requestMap[t.currentURL] = true;
            
            // 非同期処理中画面の呼び出し、PRサーバへのajax処理を中断
            var e = new Object();
            e.type = 'ajaxBefore';
            t.deliverEvents(e);
            
            t.xhrMap[t.currentURL] = $.ajax({
                type : 'GET',
                url : t.currentURL,
                dataType : 'html',
                timeout: 60000,
                success : function(html, status, xhr){
                    if (t.requestMap[this.url] != true){
                        // 最新のリクエストでない場合、処理を中止
                        return;
                    }
                    
                    var e = new Object();
                    e.type = 'ajaxSuccess';
                    e.html = html;
                    e.context = $(e.html);
                    
                    // 汎用エラー画面が返却された場合
                    if ($('#epwb0005', e.context).size() != 0) {
                        location.href = t.conditions.getCurrentDomain() + '/ep/srvlt/EPWB00/EPWB0005/dErrShow?BELN_SHOP_KBN=' + t.conditions.conditions.BELN_SHOP_KBN;
                        return;
                    }
                    
                    // リダイレクトURLを含むHTMLが返却された場合
                    if ($('#ascRedirectUrl', e.context).size() != 0) {
                        // アラートで表示するメッセージがある場合、表示
                        if ($('#ascErrMessage', e.context).html() != 0) {
                            e.msg = $('#ascErrMessage', e.context).html();
                            e.msg = e.msg.replace(/<\s*br\s*\/??>/gi, '\n');
                            alert(e.msg);
                        }
                        
                        // 指定されたリダイレクト先に遷移
                        e.redirectUrl = t.conditions.getCurrentDomain();
                        if (typeof $('#ascRedirectUrl', e.context).attr('value') != 'undefined') {
                            e.redirectUrl = $('#ascRedirectUrl', e.context).attr('value');
                        }
                        location.href = e.redirectUrl;
                        return;
                    }
/* 修正 150615brs1 TAM ココから */
					if ($('select[name="KNSK_CTGR_TI"]').size() > 0) {
					    var knsk_ctgr_ti_val = document.form_shn.elements["KNSK_CTGR_TI"].value;
					}
/* 修正 150615brs1 TAM ココまで */
                    var isChangedCategory = t.conditions.isChangedCategory;
                    // 検索情報の更新
                    t.conditions.loadConditionsByJSON($('#searchInfo', e.context).html());
                    t.conditions.conditions.referrer = t.conditions.getRecentURL();
                    
                    // 履歴情報として検索情報を保持
                    e.url = t.currentURL;
                    e.conditions = t.conditions.getCondition();
                    e.impressionInfo = t.getDataByJSON($('#implessionLogInfo', e.context).html());
                    
                    // 画面更新と、履歴情報の更新を実行
                    t.deliverEvents(e);
                    

/* 修正 150615brs1 TAM ココから */
					if ($('select[name="KNSK_CTGR_TI"]').size() > 0) {
					    $('select[name="KNSK_CTGR_TI"] option').each(function() {
					        if ($(this).attr('value') == knsk_ctgr_ti_val) {
					            $('select[name="KNSK_CTGR_TI"]').val($(this).attr('value'));
					        }
					    });
					}
/* 修正 150615brs1 TAM ココまで */
/* 修正 150522brs1 TAM ココから */
                    if ($('#headerArea .category').size() > 0) {
                        // ヘッダーのカテゴリの同期
                        var selectVal = $('#headerArea .category').val(); // セレクトボックスの選択値
                        var selectText; // 選択されているカテゴリ
                        var inputText = $('.search-text-inner').text(); // 表示されているカテゴリ

                        if (selectVal == 'all') {
                            selectText = 'すべてのカテゴリ';
                        } else if (selectVal == 'list') {
                            selectText = 'この一覧から絞り込む';
                        } else if (selectVal == 'rank') {
                            selectText = 'ランキング';
                        } else {
                            selectText = selectVal.split('_')[2];
                        }

                        if (selectText != inputText) {

                            $('#headerArea .category option').removeAttr('selected');

                            $('#headerArea .category option').each(function() {
                                if (inputText == 'すべてのカテゴリ') {
                                    if ($(this).attr('value') == 'all') {
                                        $('#headerArea .category').val($(this).attr('value'));
                                    }
                                } else if (inputText == 'この一覧から絞り込む') {
                                    if ($(this).attr('value') == 'list') {
                                        $('#headerArea .category').val($(this).attr('value'));
                                    }
                                } else if (inputText == 'ランキング') {
                                    if ($(this).attr('value') == 'rank') {
                                        $('#headerArea .category').val($(this).attr('value'));
                                    }
                                } else {
                                    if ($(this).attr('value').split('_')[2] == inputText) {
                                        $('#headerArea .category').val($(this).attr('value'));
                                    }
                                }
                            });

                        }
                    }
/* 修正 150522brs1 TAM ココまで */

                    // サーバとの通信が終了したら、強制的に画面スクロール位置の制御を行う
                    var offset = $('#asc_top').offset().top;
                    // PRパラメータが付いていない 且つ （カテゴリドリルダウン または パンくずのカテゴリを押下）且つPR部が表示されている、PR部にスクロールする
                    if (isChangedCategory && (typeof(t.conditions.getCondition()['PR']) === 'undefined' || t.conditions.getCondition()['PR'] == '') 
                         && $('#prHtml').css('display') != 'none') {
                        offset = $('#prHtml').offset().top;
                    }
                    window.scroll(0, offset);
                },
                error : function(xhr, status, error){
                    if (t.requestMap[this.url] != true){
                        // 最新のリクエストでない場合、処理を中止
                        return;
                    }
                    if ('timeout' != status) {
                        // タイムアウトではない場合、処理を中止
                        return;
                    }
                    
                    // 非同期通信が失敗した場合、ベルネトップ画面に遷移
                    alert('ネットワークエラーが発生しました。\nネットワークの接続状況をご確認ください。');
                    location.href = t.conditions.getCurrentDomain();
                },
                complete : function(){
                    delete t.requestMap[this.url];
                    delete t.xhrMap[this.url];
                }
            });
        }
        t.conditions.addListener(t.searchConditionChanged);
    };
    RequestManager.prototype = new EventGen();
    
    // UIマネージャ
    var UIManager = function(searchCond, requestMgr){
        var t = this;
        t.conditions = searchCond;
        t.rMgr = requestMgr;
        t.siblingsCount = 0;
        
        // リクエスト用IDかをチェックする定数
        t.RELEASE = 'RELEASE';
        t.CTGR_DD = 'IPT_CTGR_DD_RQT';
        t.TSH_SHN = 'IPT_TSH_SHN_RQT';
        t.WRBKRT = 'IPT_WRBKRT_RQT';
        t.COLOR = 'IPT_COLOR_RQT';
        t.SIZE = 'IPT_SIZE1_RQT';
        t.BLAND = 'IPT_BRAND_ALL_CTL_RQT';
        t.CTLG = 'IPT_KSI_CTLG_RQT';
        t.KAKK = 'IPT_PRICE_RQT';
        t.JIYUKAKK = 'kakkformButton';
        t.SBRJKN = 'IPT_SBRJKN_RQT';
        t.PNKZ = 'IPT_CTGR_PNKZ_RQT';
        t.SORT = 'SORT';
        t.KNS = 'KNS';
        t.PAGE = 'PAGE'
        
        // チェックボックスで親要素のidを取得する処理
        t.findInputId = function(element){
            if (typeof element.attr('id') == 'undefined') {
                var c = element.siblings(':checkbox');
                if (c != null && c.length != 0) {
                    return c.attr('id');
                } else {
                    t.siblingsCount ++;
                    if (t.siblingsCount > 3) {
                        return '';
                    }
                    return t.findInputId(element.parent());
                }
            } else {
                return element.attr('id');
            }
        }
        
        // 画面表示時、カテゴリリンクとパンくずリンクの作成処理
        t.createViewURL = function(idName, idSplitStr) {
        	
        	var linkArray = $('#' + idName + ' a');    // すべてリンクを取得する
            for (var i=0; i<linkArray.length; i++){
            	var e = $(linkArray[i]);
            	if (e.attr('href') == 'javascript:void(0);' && e.attr('id').indexOf(idSplitStr) != -1) {
            		var loCtgr = e.attr('id').split(idSplitStr)[1];    // カテゴリコードを取得する
            		var nextURL = t.conditions.base_url;
            		var params = '?';
            		var condList = t.conditions.conditions;
            		var setConditionOnlyFlg = false;    // 他条件を解除フラグ
            		if  (('asc_NON_CTGR_DD' == idName &&  $('#0hit').size() != 0) || 'asc_CTGR_PNKZ' == idName) {
            			setConditionOnlyFlg = true;
            		}
                	var addFlg = true;    // カテゴリ選択なし時、リンクにカテゴリ追加フラグ
                	
                    for (var key in condList) {
                    	if ((condList[key].length != 0 && key != 'referrer') || key == 'S') {
                    		if (setConditionOnlyFlg) {
                    			    // 条件を解除時、下記の条件を追加するだけです。
                    				if ('BELN_SHOP_KBN' == key) {
                    					params +=  '&' + key + '=' + condList[key];
                    					if ('' != loCtgr ) {
                    						params += '&C=' + loCtgr;	
                    					}
                    				}
                    				if ('S' == key) {
                    					params +=  '&' + key + '=' + '';
                    				}
                    				if ('TSP' == key && $('#0hit').size() == 0) {
                    						params +=  '&' + key + '=' + condList[key];
                    				}
                    				if ('GK' == key) {
                    					params +=  '&' + key + '=' + condList[key];
                    				}
                    		} else {
                    			// 下記の条件を追加するです。
                    			if ('C' == key) {
                        			if ('RELEASE' != loCtgr ) {
                        				params += '&' + key + '=' + loCtgr;
                        			}
                        		} else if ('SB' == key) {
                        			if ('UP' != e.attr('id').split('_')[0]) {
                        				params +=  '&' + key + '=' + condList[key];
                        			}
                        		} else  if  ('PAGE_NUMBER' == key  ) {
                    				params += '&' + key + '=' + '1';
                    		    } else if ('SP' == key) {
                    		    	if (t.conditions.ascSpKbn) {
                    		    		params += '&' + key + '=' + 'off';
                    		    	} else {
                    		    		params += '&' + key + '=' + condList[key];
                    		    	}
                    		    } else {
                    		    	params += '&' + key + '=' + condList[key];
                    		    	// カテゴリ選択なし時、リンクにカテゴリを追加
                    		    	if (addFlg && ('asc_NON_CTGR_DD' == idName &&  $('#0hit').size() == 0)) {
                    		    		params += '&C=' + loCtgr;	
                    		    		addFlg = false;
                    		    	}
                    		    }
                    		}
                    	}
                    }
                    nextURL = nextURL.replace('/sa/', '/s/') + params.replace('?&', '?');
            		e.attr('href', nextURL);
            	}
            }
        }
        
        // HTML内部に、クリック時のイベントリスナを設定する処理
        t.assignListeners = function(){
            // カテゴリドリルダウン（大カテゴリ）
            if ($('#asc_DAI_CTGR_DD').size() != 0) {
                $('#asc_DAI_CTGR_DD').bind('click', t, function(e){
                    var id = $(e.target).attr('id');
                    if (typeof id != 'undefined' && id.indexOf(t.CTGR_DD) != -1) {
                        var loCtgr = id.split(t.CTGR_DD)[1];
                        if (loCtgr == 'RELEASE') {
                            // 解除キーが設定されている場合
                            loCtgr = '';
                        }
                        if (id.split('_')[0] == 'UP') {
                            // 選択中のカテゴリよりも上位のカテゴリが押下された場合
                            t.conditions.setConditionDouble('C', loCtgr, 'SB', '');
                        } else {
                            // 選択中のカテゴリよりも下位のカテゴリが押下された場合
                            t.conditions.setCondition('C', loCtgr);
                        }
                        return false;
                    }
                });
                
                //リンクのhref内容を切り替えする
                t.createViewURL('asc_DAI_CTGR_DD', t.CTGR_DD);
            }
            
            // カテゴリドリルダウン（中カテゴリ）
            if ($('#asc_CHU_CTGR_DD').size() != 0) {
                $('#asc_CHU_CTGR_DD').bind('click', t, function(e){
                    var id = $(e.target).attr('id');
                    if (typeof id != 'undefined' && id.indexOf(t.CTGR_DD) != -1) {
                        var loCtgr = id.split(t.CTGR_DD)[1];
                        if (id.split('_')[0] == 'UP') {
                            // 選択中のカテゴリよりも上位のカテゴリが押下された場合
                            t.conditions.setConditionDouble('C', loCtgr, 'SB', '');
                        } else {
                            // 選択中のカテゴリよりも下位のカテゴリが押下された場合
                            t.conditions.setCondition('C', loCtgr);
                        }
                        return false;
                    }
                });
                
                //リンクのhref内容を切り替えする
                t.createViewURL('asc_CHU_CTGR_DD', t.CTGR_DD);
            }
            
            // カテゴリドリルダウン（小カテゴリ）
            if ($('#asc_SHO_CTGR_DD').size() != 0) {
                $('#asc_SHO_CTGR_DD').bind('click', t, function(e){
                    var id = $(e.target).attr('id');
                    if (typeof id != 'undefined' && id.indexOf(t.CTGR_DD) != -1) {
                        // クリックされた要素にidが設定されている場合、検索情報を更新（非同期検索を実行）
                        t.conditions.setCondition('C', id.split(t.CTGR_DD)[1]);
                        return false;
                    }
                });
                
                //リンクのhref内容を切り替えする
                t.createViewURL('asc_SHO_CTGR_DD',  t.CTGR_DD);
            }
            
            // カテゴリドリルダウン（カテゴリ選択なし）
            if ($('#asc_NON_CTGR_DD').size() != 0) {
                $('#asc_NON_CTGR_DD').bind('click', t, function(e){
                    var id = $(e.target).attr('id');
                    if (typeof id != 'undefined' && id.indexOf(t.CTGR_DD) != -1) {
                        // クリックされた要素にidが設定されている場合、検索情報を更新（非同期検索を実行）
                        if ($('#0hit').size() == 0) {
                            t.conditions.setCondition('C', id.split(t.CTGR_DD)[1]);
                        } else {
                            // 0件HIT時は、他条件を解除
                            t.conditions.setConditionOnlyThis('C', id.split(t.CTGR_DD)[1]);
                        }
                        return false;
                    }
                });
                
                //リンクのhref内容を切り替えする
                t.createViewURL('asc_NON_CTGR_DD', t.CTGR_DD);
            }
            
            // 対象商品
            if ($('#dd_tshShn').size() != 0) {
                $('#dd_tshShn').bind('click', t, function(e){
                    t.siblingsCount = 0;
                    var id = t.findInputId($(e.target));
                    if (typeof id != 'undefined' && id.indexOf(t.TSH_SHN) != -1) {
                        // クリックされた要素にidが設定されている場合、検索情報を更新（非同期検索を実行）
                        t.conditions.setCondition('T', id.split(t.TSH_SHN)[1]);
                    }
                });
            }
            
            // 割引率
            if ($('#dd_wrbkrt').size() != 0) {
                $('#dd_wrbkrt').bind('click', t, function(e){
                    var id = $(e.target).attr('id');
                    if (typeof id != 'undefined' && id.indexOf(t.WRBKRT) != -1) {
                        // クリックされた要素にidが設定されている場合、検索情報を更新（非同期検索を実行）
                        if (id.split(t.WRBKRT)[1] == t.RELEASE) {
                            t.conditions.setCondition('W', '');
                        } else {
                            t.conditions.setCondition('W', id.split(t.WRBKRT)[1]);
                        }
                    }
                });
            }
            
            // 色
            if ($('#colorform').size() != 0) {
                $('#colorform').bind('click', t, function(e){
                    t.siblingsCount = 0;
                    var id = t.findInputId($(e.target));
                    if (typeof id != 'undefined' && id.indexOf(t.COLOR) != -1) {
                        // クリックされた要素にidが設定されている場合、検索情報を更新（非同期検索を実行）
                        t.conditions.setCondition('CL', id.split(t.COLOR)[1]);
                    }
                });
            }
            
            // サイズ
            if ($('#dd_size').size() != 0) {
                $('#dd_size').bind('click', t, function(e){
                    t.siblingsCount = 0;
                    var id = t.findInputId($(e.target));
                    if (typeof id != 'undefined' && id.indexOf(t.SIZE) != -1) {
                        // クリックされた要素にidが設定されている場合、検索情報を更新（非同期検索を実行）
                        t.conditions.setCondition('SZ', id.split(t.SIZE)[1].replace('_', '^'));
                    }
                });
            }
            
            // ブランド
            if ($('#dd_bland').size() != 0) {
                $('#dd_bland').bind('click', t, function(e){
                    t.siblingsCount = 0;
                    var id = t.findInputId($(e.target));
                    if (typeof id != 'undefined' && id.indexOf(t.BLAND) != -1) {
                        // クリックされた要素にidが設定されている場合、検索情報を更新（非同期検索を実行）
                        t.conditions.setCondition('B', id.split(t.BLAND)[1]);
                    }
                });
            }
            
            // カタログ
            if ($('#dd_ksiCtlg').size() != 0) {
                $('#dd_ksiCtlg').bind('click', t, function(e){
                    t.siblingsCount = 0;
                    var id = t.findInputId($(e.target));
                    if (typeof id != 'undefined' && id.indexOf(t.CTLG) != -1) {
                        // クリックされた要素にidが設定されている場合、検索情報を更新（非同期検索を実行）
                        t.conditions.setCondition('CT', id.split(t.CTLG)[1]);
                    }
                });
            }
            
            // 固定価格
            if ($('#dd_price').size() != 0) {
                $('#dd_price').bind('click', t, function(e){
                    var id = $(e.target).attr('id');
                    if (typeof id != 'undefined' && id.indexOf(t.KAKK) != -1) {
                        // クリックされた要素にidが設定されている場合、検索情報を更新（非同期検索を実行）
                        if (id.split(t.KAKK)[1] == t.RELEASE) {
                            t.conditions.setCondition('P', '');
                        } else {
                            t.conditions.setCondition('P', id.split(t.KAKK)[1]);
                        }
                    }
                });
            }
            
            // 自由価格
            if ($('#kakkform').size() != 0) {
                // HTML内部に、イベントリスナを設定
                $('#kakkform').bind('click', t, function(e){
                    var id = $(e.target).attr('id');
                    if (typeof id != 'undefined' && id == t.JIYUKAKK) {
                        // 検索情報を更新（非同期検索を実行）
                        t.conditions.setConditionDouble('PL', EscapeSJIS($('#KAKK_HNIST1').attr('value')), 'PH', EscapeSJIS($('#KAKK_HNIST2').attr('value')));
                    }
                });
                $('#kakkform').bind('keydown', t, function(e){
                    if ((e.which && e.which === 13) || (e.keyCode && e.keyCode === 13)) {
                        // 検索情報を更新（非同期検索を実行）
                        t.conditions.setConditionDouble('PL', $('#KAKK_HNIST1').attr('value'), 'PH', $('#KAKK_HNIST2').attr('value'));
                    }
                });
            }
            
            // カテゴリ別絞り込み条件（上）
            if ($('#asc_SBRJKN1').size() != 0) {
                $('#asc_SBRJKN1').bind('click', t, function(e){
                    var value = $(e.target).attr('id');
                    if (typeof value != 'undefined' && value.indexOf(t.SBRJKN) != -1) {
                        // クリックされた要素にidが設定されている場合、検索情報を更新（非同期検索を実行）
                        if (value.split(t.SBRJKN)[1] == 'RELEASE') {
                            t.conditions.setCondition('SB', '');
                        } else {
                            t.conditions.setCondition('SB', value.split(t.SBRJKN)[1]);
                        }
                    }
                });
            }
            // カテゴリ別絞り込み条件（下）
            if ($('#asc_SBRJKN2').size() != 0) {
                $('#asc_SBRJKN2').bind('click', t, function(e){
                    var value = $(e.target).attr('id');
                    if (typeof value != 'undefined' && value.indexOf(t.SBRJKN) != -1) {
                        // クリックされた要素にidが設定されている場合、検索情報を更新（非同期検索を実行）
                        if (value.split(t.SBRJKN)[1] == 'RELEASE') {
                            t.conditions.setCondition('SB', '');
                        } else {
                            t.conditions.setCondition('SB', value.split(t.SBRJKN)[1]);
                        }
                    }
                });
            }
            
            // パンくずナビ
            if ($('#asc_CTGR_PNKZ').size() != 0) {
                $('#asc_CTGR_PNKZ').bind('click', t, function(e){
                    var id = $(e.target).attr('id');
                    if (typeof id != 'undefined' && id.indexOf(t.PNKZ) != -1) {
                        // クリックされた要素にidが設定されている場合、検索情報を更新（非同期検索を実行）
                        t.conditions.setConditionOnlyThis('C', id.split(t.PNKZ)[1]);
                        return false;
                    }
                });
                
                //リンクのhref内容を切り替えする
                t.createViewURL('asc_CTGR_PNKZ', t.PNKZ);
            }
            
            // 表示順、表示件数（上）
            if ($('#asc_SORT-KNS1').size() != 0) {
                $('#asc_SORT-KNS1').bind('click', t, function(e){
                    var id = $(e.target).attr('id');
                    if (typeof id != 'undefined') {
                        // クリックされた要素にidが設定されている場合
                        if (id.indexOf(t.SORT) == 0) {
                            // クリックされた要素が表示順である場合、検索情報を更新（非同期検索を実行）
                            t.conditions.setCondition('S', id.split(t.SORT)[1]);
                        } else if (id.indexOf(t.KNS) == 0) {
                            // クリックされた要素が表示件数である場合検索情報を更新（非同期検索を実行）
                            t.conditions.setCondition('KNS', id.split(t.KNS)[1]);
                        }
                    }
                });
            }
            // 表示順、表示件数（下）
            if ($('#asc_SORT-KNS2').size() != 0) {
                $('#asc_SORT-KNS2').bind('click', t, function(e){
                    var id = $(e.target).attr('id');
                    if (typeof id != 'undefined') {
                        // クリックされた要素にidが設定されている場合
                        if (id.indexOf(t.SORT) == 0) {
                            // クリックされた要素が表示順である場合、検索情報を更新（非同期検索を実行）
                            t.conditions.setCondition('S', id.split(t.SORT)[1]);
                        } else if (id.indexOf(t.KNS) == 0) {
                            // クリックされた要素が表示件数である場合検索情報を更新（非同期検索を実行）
                            t.conditions.setCondition('KNS', id.split(t.KNS)[1]);
                        }
                    }
                });
            }
            
            // ページング（上）
            if ($('#asc_PAGE1').size() != 0) {
                $('#asc_PAGE1').bind('click', t, function(e){
                    var id = $(e.target).attr('id');
                    if (typeof id != 'undefined' && id.indexOf(t.PAGE) != -1) {
                        // クリックされた要素にidが設定されている場合、検索情報を更新（非同期検索を実行）
                        t.conditions.setCondition('PAGE_NUMBER', id.split(t.PAGE)[1]);
                    }
                });
            }
            // ページング（下）
            if ($('#asc_PAGE2').size() != 0) {
                $('#asc_PAGE2').bind('click', t, function(e){
                    var id = $(e.target).attr('id');
                    if (typeof id != 'undefined' && id.indexOf(t.PAGE) != -1) {
                        // クリックされた要素にidが設定されている場合、検索情報を更新（非同期検索を実行）
                        t.conditions.setCondition('PAGE_NUMBER', id.split(t.PAGE)[1]);
                    }
                });
            }
        }
        
        // HTMLパーツ置換処理
        t.replaceHtml = function(e){
            if (typeof e.context == 'undefined') {
                e.context = $(e.html);
            }
            
            // 左側ナビゲーション
            nav = $('#searchNavigationSection', e.context);
            $('#searchNavigationSection').html(nav.html());
            
            // 右側コンテンツ部
            nav = $('.f-right', e.context);
            $('.f-right').html(nav.html());
            
            // <head>内を置換
            t.replaceHead(e);
            
            // レコメンドを置換
            t.replaceRecommend(e);
            
            // PR部を置換
            t.replacePrHtml($('#prUrl', e.context), $('#asc_lst_ttlbHtml', e.context));
            
            // クイックビュー用パラメータを置換
            nav = $('#epfb0095_list', e.context);
            $('#epfb0095_list').html(nav.html());
            
            //ランキングバナーの文字列入れ替え
            var sKeyWord = $('#rankReplacementStr', e.context).attr('value');
            $('div #rank_replacement').each(function(){$(this).text(sKeyWord)});

        }
        
        // 非同期処理中画面の設定
        t.setLoadingHtml = function(e){
            if (e.type == 'ajaxBefore') {
                if ($('#loading01').css('display') != 'none') {
                    // 処理中画像が表示されている場合（既に非同期処理中の場合）
                    return;
                }
                
                // 非同期処理中画像を表示
                if ($('#loading01').size() != 0) {
                    $('#loading01').show();
                    var offset = $('#loading01').offset();
                    var topPadding = 15;
                    t.setLoadingCSS(offset, topPadding);
                }
                
                // 上部吹き出し
                if ($('.list-comment').size() != 0) {
                    $('.list-comment').hide();
                }
                
                // キーフレーズ（上）
                if ($('.mt10', '.f-right').size() != 0) {
                    $('.mt10', '.f-right').hide();
                }
                // 表示順・表示件数、ページング、商品情報部、キーフレーズ（下）
                $('.mt20').hide();
                // 商品検索ボックス
                $("form[name*='form_shn']").hide();
                // 最近チェックした商品
                if ($('.check01').size() != 0) {
                    $('.check01').hide();
                }
                // 関連カテゴリ、並列カテゴリ
                if ($('.text12l15').size() != 0) {
                    $('.text12l15').hide();
                }
                
                // 最近チェックした商品からオススメ！
                if ($('#recommender_10').size() != 0) {
                    $('#recommender_10').hide();
                }
                
// 2015.07.10 add AMS start
                // 代わりにこちらの商品はいかがですか？
                if ($('#recommender_23').size() != 0) {
                    $('#recommender_23').hide();
                }
// 2015.07.10 add AMS end
                
                // ページの先頭に戻る
                $('.pb10').hide();
            }
        }
        
        // 非同期処理中画面の解除
        t.unsetLoadingHtml = function(){
            // スクロールイベントの解除
            if ($('#loading01').size() != 0) {
                $(window).unbind('scroll');
            }
            
            if ($('#loading01').css('display') == 'none') {
                // 処理中画像が表示されていない場合（既に非同期処理中ではない場合）
                return;
            }
            
            // 非同期処理中画像非表示
            if ($('#loading01').size() != 0) {
                $('#loading01').hide();
            }
            
            // 上部吹き出し
            if ($('.list-comment').size() != 0) {
                $('.list-comment').show();
            }
            
            // キーフレーズ（上）
            if ($('.mt10', '.f-right').size() != 0) {
                $('.mt10', '.f-right').show();
            }
            // 表示順・表示件数、ページング、商品情報部、キーフレーズ（下）
            $('.mt20').show();
            // 商品検索ボックス
            $("form[name*='form_shn']").show();
            // 最近チェックした商品
            if ($('.check01').size() != 0) {
                $('.check01').show();
            }
            // 関連カテゴリ、並列カテゴリ
            if ($('.text12l15').size() != 0) {
                $('.text12l15').show();
            }
            
            // 最近チェックした商品からオススメ！
            if ($('#recommender_10').size() != 0) {
                $('#recommender_10').show();
            }
            
// 2015.07.10 add AMS start
            // 代わりにこちらの商品はいかがですか？
            if ($('#recommender_23').size() != 0) {
                $('#recommender_23').show();
            }
// 2015.07.10 add AMS end
            
            // ページの先頭に戻る
            $('.pb10').show();
        }
        
        // PR部HTMLを取得して、置換する処理
        t.replacePrHtml = function(prUrlContext, prHtmlContext){
            var prHtml = '';
            
            // PRサーバへのリクエストURLを取得
            if (prUrlContext.size() == 0) {
                // PRサーバへのリクエストが取得できない場合
                
                // リストタイトル部HTMLがある場合
                var nav = prHtmlContext.attr('value');
                $('#prHtml').html('');
                $('#prHtml').append(nav);
                
                if ($('#prHtml').size() != 0) {
                    $('#prHtml').show();
                } else {
                    $('#prHtml').hide();
                }
                return;
            }
            var prUrl = prUrlContext.attr('value');
            
            // PR部のファイルパスを取得し、置換する
            t.getPrFilePass(prUrl);
        }
        
        // PR部用ファイルパス取得処理
        t.getPrFilePass = function(prUrl){
            var prHtmlPass = '';
            t.xhrPrServer = $.ajax({
                type : 'GET',
                url : prUrl,
                dataType : 'jsonp',
                jsonpCallback : 'update_pr_area',
                success : function(data, ajaxOptions, xhr){
                    if (typeof data == 'undefined'
                        || typeof data.response.err == 'undefined' || data.response.err.code != '100'
                        || typeof data.response.filename == 'undefined' || data.response.filename == '') {
                        return;
                    }
                    prHtmlPass = t.conditions.getCurrentDomain() + '/cpg/pc_common/common/template/base/GetIncFile.html?PARAM_INC_NAME=/cpg/pc_common/inc_html/product/list/' + data.response.filename;
                },
                error: function(xhr, ajaxOptions, thrownError){
                },
                complete : function(){
                    t.update_pr(prHtmlPass);
                }
            });
        }
        
        // 2013.12.02 for updating the mbox-PR and the uppper includes(left side of contents).
        t.updateMbox = function(id_dynamic, dynamic){
            if ( typeof id_dynamic  != 'undefined' && id_dynamic && typeof dynamic != 'undefined' && dynamic) {
                var _mbox_obj = mboxFactoryDefault.getMboxes();
                if (_mbox_obj) {

                    // 2015.02.19 fixed for new mbox.js start
                    var _version = "classic";
                    if ( typeof TNT != "undefined" && typeof TNT.getGlobalMboxName == "function" && "target-global-mbox" == TNT.getGlobalMboxName() ) {
                        var _version = "premium";
                    }
                    // 2015.02.19 fixed for new mbox.js end

                    var _mbox_objn = _mbox_obj.length();
                    for (var i=0; i<_mbox_objn; i++ ) {
                        // 2015.02.19 fixed for new mbox.js start
                        if ( _version == "premium" ) {
                            if ( typeof _mbox_obj.U != 'undefined' &&  typeof _mbox_obj.U[i] != 'undefined' && typeof _mbox_obj.U[i].w != 'undefined' && _mbox_obj.U[i].w == dynamic ) {
                                _mbox_obj.U.splice(i, 1);
                            }
                        } else if ( typeof _mbox_obj.F[i].g != 'undefined' && _mbox_obj.F[i].g == dynamic) {
                            _mbox_obj.F.splice(i, 1);
                            break;
                        }

                         // original
//                       if ( typeof _mbox_obj.F[i].g != 'undefined' && _mbox_obj.F[i].g == dynamic) {
//                            _mbox_obj.F.splice(i, 1);
//                            break;
//                        }
                        // 2015.02.19 fixed for new mbox.js end
                    }
                }
                mboxDefine(id_dynamic, dynamic);
                var prf = false;
                if ( typeof profarr !== 'undefined' ) {
                    prf = function(value) {
                        return value &&
                        typeof value === 'object' &&
                        typeof value.length === 'number' &&
                        typeof value.splice === 'function' &&
                      !(value.propertyIsEnumerable('length'));
                    }(profarr);
                }
                if ( prf ) {
                    mboxUpdate(dynamic,profarr);
                } else {
                    mboxUpdate(dynamic);
                }
            }
        }
        
        // PR部用インクルードファイル取得・置換処理
        t.update_pr = function(prHtmlPass){
            var includeHtml = '';
            if (prHtmlPass == '') {
                if ($('#prHtml').size() != 0) {
                    $('#prHtml').html(includeHtml);
                }
                if (includeHtml.length != 0) {
                    $('#prHtml').show();
                } else {
                    $('#prHtml').hide();
                }
                return;
            }
            t.xhrEpfb107 = $.ajax({
                type: 'GET',
                url : prHtmlPass,
                cache: false,
                dataType: 'text',
                success : function(data) {
                    if (typeof data != 'undefined' && typeof data != null && data.length != 0) {
                        includeHtml = data;
                    }
                },
                error: function() {
                },
                complete : function(){
                    // PR部を置換
                    if ($('#prHtml').size() != 0) {
                        $('#prHtml').html(includeHtml);
                    }
                    if (includeHtml.length != 0) {
                        $('#prHtml').show();
                    } else {
                        $('#prHtml').hide();
                    }
                    t.updateMbox(window.mbox_pr_id_dynamic, window.mbox_pr_dynamic);
                }
            });
        }
        
        // PRサーバへのajax処理を中断する処理
        t.cancellPrRequest = function(e){
            if (e.type == 'ajaxBefore') {
                if (typeof t.xhrPrServer != 'undefined' && t.xhrPrServer != null) {
                    t.xhrPrServer.abort();
                }
                if (typeof t.xhrEpfb107 != 'undefined' && t.xhrEpfb107 != null) {
                    t.xhrEpfb107.abort();
                }
                t.xhrPrServer = null;
                t.xhrEpfb107 = null;
            }
        }
        
        // <head>内を置換する処理
        t.replaceHead = function(e){
            // description
            var data = $('#asc_description', e.context).attr('value');
            $('#asc_meta_description').attr('content', data);
            
            // keywords
            data = $('#asc_keywords', e.context).attr('value');
            $('#asc_meta_keywords').attr('content', data);
            
            // alternate
            data = $('#asc_alternate', e.context).attr('value');
            $('#asc_link_alternate').attr('href', data);
            
            // canonical
            if ($('#asc_canonical', e.context).size() != 0) {
                // 非同期処理後画面でcanonicalタグが必要な場合
                data = $('#asc_canonical', e.context).attr('value');
                if ($('#asc_link_canonical').size() != 0) {
                    // 非同期処理前画面でcanonicalタグがある場合、変更
                    $('#asc_link_canonical').attr('href', data);
                }
            } 
            // 一旦metaタグのnoindexを削除
            if ($('head>meta[content="noindex"]').size != 0) {
                $('head>meta[content="noindex"]').remove();
            }
            // 1ページ目で無い場合(「検索結果なし=0ページ」含む)metaタグのnoindexを生成
            if (t.conditions.getCondition()['PAGE_NUMBER'] != 1) {
                if ($('head').length > 0) {
                    $('head').prepend('<meta name="robots" content="noindex">');
                }
                if ($('#asc_link_canonical').size() != 0) {
                    // linkのcanonicalタグがある場合、変更
                    $('#asc_link_canonical').attr('href', '');
                }
            }
        }
        
        // レコメンドを取得して、置換する処理
        t.replaceRecommend = function(e){

// 2015.07.10 replace AMS start
            if ($('#recommender_10', e.context).size() != 0) {
                if (typeof RecoPtrn_pc_EPFB0121_nsz1.execute != 'undefined') {
                    RecoPtrn_pc_EPFB0121_nsz1.execute();
                }
            }
            if ($('#recommender_23', e.context).size() != 0) {
                if (typeof RecoPtrn_pc_EPFB0121_nsz2.execute != 'undefined') {
                    RecoPtrn_pc_EPFB0121_nsz2.execute();
                }
            }
// 2015.07.10 replace AMS end

        }
        // 処理中画像ののcssを修正する処理
        t.setLoadingCSS = function(offset, topPadding){
            if ($(window).scrollTop() > offset.top) {
                $('#loading01').stop().css('margin-top', $(window).scrollTop() - offset.top + topPadding);
            } else {
                $('#loading01').stop().css('margin-top', 0);
            }
            $(window).bind('scroll', function(){
                if ($(window).scrollTop() > offset.top) {
                    $('#loading01').stop().css('margin-top', $(window).scrollTop() - offset.top + topPadding);
                } else {
                    $('#loading01').stop().css('margin-top', 0);
                }
            });
        }
        
        // 同期処理と同じJSを実行する処理
        t.doSyncJs = function(e){
            var _0hit = false;
            if ($('#0hit', e.context).size() != 0) {
                _0hit = true;
            }
            
            // ヘッダー
            initSet();
            
            // 商品リストの各商品
            ukClickLogTargets = $('#clickLogInfo', e.context).attr('value').split(',');
            for (var i = 0; i < ukClickLogTargets.length; i++) {
                ukClickLogTargets[i] = ukClickLogTargets[i].split('-');
                ukClickLogTargets[i][0] = ukClickLogTargets[i][0].split('|');
            }
            if (!_0hit) {
                // 0件HITでない場合のみクリックログをセット
                ukClickLogSetter();
                
                // 商品リストの価格の位置ぞろえ
                if (typeof heightLine != 'undefined') {
                    heightLine();
                }
            }
            
            // brs_uniq.js
            lnavi_init();
            keyword_init();
            detail_float_init();
            
            // 付属情報吹き出し
            if (!_0hit) {
                balloon(e.conditions.PAGE_NUMBER);
            }
            
            // 閲覧履歴用カテゴリ
            if ($('#epfb00_initCookie_ch_cate_Asc', e.context).size() != 0
                && $('#setTtInfoCookieSmlcat_Asc', e.context).size() != 0) {
                var cookie_ch_cate = $('#epfb00_initCookie_ch_cate_Asc', e.context).attr('value').split(',');
                epfb00_initCookie_ch_cate(cookie_ch_cate[0], cookie_ch_cate[1], cookie_ch_cate[2])
                setTtInfoCookieSmlcat($('#setTtInfoCookieSmlcat_Asc', e.context).attr('value'));
            }
            
            // mheaderのcssを修正
            if (typeof adjustUseframeStyle != 'undefined') {
                adjustUseframeStyle();
            }
            
            // いろいろな条件で絞り込むの「チェックを外す」ボタン
            if (!_0hit) {
                var vb01t = $('#various-table01').height() / 2 - 9;
                $("[id='various-btn01']").css('top', vb01t + 'px');
            }
        }
        
        // 画面切り替え処理
        t.update = function(e){
            if (typeof e.type != 'undefined' && (e.type == 'ajaxSuccess' || e.type == 'historyBack')) {
                // 画面を検索結果HTMLで置換
                t.replaceHtml(e);
                
                // 非同期処理中画面の解除
                t.unsetLoadingHtml();
                
                // 同期処理と同じJSを実行
                t.doSyncJs(e);
                
                // ドリルダウンにリスナを設定
                t.assignListeners();
                
                t.updateMbox(window.mbox_searchnav_id_dynamic, window.mbox_searchnav_dynamic);
            }
        }
        
        t.rMgr.addListener(t.update);
        t.rMgr.addListener(t.setLoadingHtml);
        t.rMgr.addListener(t.cancellPrRequest);
        t.assignListeners();
    };
    UIManager.prototype = new EventGen();
    
    // ヒストリバック制御処理
    var HistoryManager = function(cond, ui, sc, il, requestMgr){
        var t = this;
        t.history = window.history;
        t.conditions = cond;
        t.uiMgr = ui;
        t.scMgr = sc;
        t.ImpLogMgr = il;
        t.rMgr = requestMgr;
        t.historyMap = new Object();
        t.hasHistoryAPI = window.history && window.history.pushState;
        
        if (t.hasHistoryAPI) {
            // ヒストリAPIがある場合、ブラウザの戻る、進む実行時のイベントを設定
            $(window).bind('popstate', t, function(e){
                // 非同期処理中にもどるボタンが押された場合
                t.rMgr.cancelRequest();
                t.uiMgr.unsetLoadingHtml();
                
                var state = e.originalEvent.state;
                if(typeof state == 'undefined' || state == null){
                    return false;
                }
                document.title = state.title;
                t.conditions.loadConditions(state.conditions);
                state.type = 'historyBack';
                if (typeof state.context == 'undefined') {
                    state.context = $(state.html);
                }
                t.uiMgr.update(state);
                
                // インプレッションログを送信
                t.ImpLogMgr.update(state);
                
                return false;
            });
        } else {
            // ヒストリAPIがない場合
            
            // ハッシュ値に対応する履歴情報を取得する処理を定義
            t.historyMap = new Object();
            t.getEventByHash = function(hash){
                return t.historyMap[hash];
            }
            // 履歴情報を更新した場合に起こる処理を中止させるフラグを初期化
            t.isPushed = false;
            
            // アドレスバーのハッシュ変更時イベントを設定
            $(window).bind('hashchange', t, function(e){
                // 履歴情報を更新した場合に起こる処理を中止させる
                if (t.isPushed) {
                    t.isPushed = false;
                    return false;
                }
                // 非同期処理中にもどるボタンが押された場合
                t.rMgr.cancelRequest();
                t.uiMgr.unsetLoadingHtml();
                
                // アドレスバーからハッシュ値と、対応するHTMLを取得
                var hash = window.location.hash.split('#')[1];
                
                var e = new Object();
                if (typeof t.historyMap[hash] !='undefined' || typeof hash == 'undefined') {
                    if (typeof hash == 'undefined') {
                        // 初期画面に戻ってきた場合
                        e = t.historyMap['FIRST'];
                    } else {
                        e = t.historyMap[hash];
                    }
                    
                    if (typeof e.context == 'undefined') {
                        e.context = $(e.html);
                    }
                    t.conditions.loadConditions(e.conditions);
                    
                    // インプレッションログを送信
                    t.ImpLogMgr.update(e);
                    
                    // 履歴情報を元に非同期で画面切り替え処理を実行
                    e.type = 'historyBack';
                    t.uiMgr.update(e);
                } else {
                    // 履歴情報に値がない場合に、主遷移
                    location.href = t.conditions.getCurrentDomain() + '/ep/s/?' + window.location.hash.split('#')[1];
                }
            });
        }
        
        // 初期表示時の処理
        t.initialize = function(e){
            var f = new Object();
            f.html = $('body').html();
            f.conditions = e.conditions;
            f.impressionInfo = e.impressionInfo;
            f.title = document.title;
            f.url = location.href;
            if (t.hasHistoryAPI) {
                // ヒストリAPIがある場合、APIを使って履歴HTML、アドレスバーを更新
                t.history.replaceState(f, f.title, f.url);
            } else {
                t.historyMap['FIRST'] = $.extend(true, {}, f);
            }
        }
        
        // 履歴情報更新処理
        t.update = function(e){
            // 非同期通信成功時のみ実行
            if (typeof e.type == 'undefined' || e.type != 'ajaxSuccess') {
                return;
            }
            
            // ページタイトルの設定
            e.title = 'ベルメゾンネット'
            if ($('#ascTitle', e.context).size() != 0) {
                e.title = $('#ascTitle', e.context).attr('value');
            }
            
            var f = new Object();
            f.html = e.html;
            f.conditions = e.conditions;
            f.title = e.title;
            f.impressionInfo = e.impressionInfo;
            f.url = e.url.replace('/sa/', '/s/');
            
            // ページタイトルの更新
            document.title = f.title;
            
            // アドレスバーの更新
            if (t.hasHistoryAPI) {
                // ヒストリAPIがある場合、APIを使って履歴HTML、アドレスバーを更新
                t.history.pushState(f, f.title, f.url);
            } else {
                // ヒストリAPIがない場合
                
                // 検索条件をハッシュ値として保持
                var splitted = f.url.split('?');
                var hash = splitted[1];
                
                // 履歴情報を保持
                t.historyMap[hash] = $.extend(true, {}, f);
                
                // 履歴情報を更新した場合に起こる処理を中止させるフラグを立てる
                t.isPushed = true;
                
                // ハッシュ値としてアドレスバーのURLに付加
                location.hash = hash;
            }
            
            t.scMgr.update(e);
            t.ImpLogMgr.update(e);
        }
        
        t.rMgr.addListener(t.update);
    }
    HistoryManager.prototype = new EventGen();
    
    // サイトカタリストマネージャ
    var SiteCatalystManager = function(cond, requestMgr){
        var t = this;
        t.conditions = cond;
        t.rMgr = requestMgr;
        
        t.update = function(e){
            // サイトカタリスト情報がない場合、ログ送信処理を中止
            if ($('#siteCatalystInfo', e.context).size() == 0) {
                return;
            }
            
            // サイトカタリスト情報の読み込み
            var siteCatalystInfo = new Object();
            siteCatalystInfo = t.getDataByJSON($('#siteCatalystInfo', e.context).html());
            
            // サイトカタリスト送信用オブジェクトが存在しない場合に、処理を中止
            if (typeof s_sc == 'undefined' || typeof s_sc.t == 'undefined') {
                return;
            }
            
            // サイトカタリスト送信情報の設定
            var vars = new Object();
            s_sc.events = '';
            s_sc.eVar1 = '';
            vars.prop19 = siteCatalystInfo.summaryInfo;
            s_sc.pageName = siteCatalystInfo.pageName;
            
            // サイトカタリストタグを送信
            s_sc.t(vars);
        }
    }
    SiteCatalystManager.prototype = new EventGen();
    
    // インプレッションログマネージャ
    var ImpressionLogManager = function(cond, requestMgr){
        var t = this;
        t.conditions = cond;
        t.rMgr = requestMgr;
        
        // インプレッションログの送信
        t.update = function(e){
            // インプレッションログ情報がない場合、ログ送信処理を中止
            if (typeof e.impressionInfo != 'object') {
                return;
            }
            
            // リファラの設定
            var ref = document.referrer;
            if (typeof e.conditions != 'undefined' && typeof e.conditions.referrer != 'undefined') {
                ref = e.conditions.referrer;
            }
            
            // インプレッションログの送信
            sendImpLogToUk.apply(this, [
                e.impressionInfo._ukwhost,
                ['_setReferer', ref],
                ['_setDisplay', e.impressionInfo._setDisplay],
                ['_setSN', e.impressionInfo._setSN],
                ['_setQ', e.impressionInfo._setQ],
                ['_setCat', e.impressionInfo._setCat],
                ['_setSortOpt', e.impressionInfo._setSortOpt],
                ['_setNumHit', e.impressionInfo._setNumHit],
                ['_setPageNum', e.impressionInfo._setPageNum],
                ['_setSearchResult', e.impressionInfo._setSearchResult],
                ['_setSpellerQ', e.impressionInfo._setSpellerQ],
                ['_setSpellerT', e.impressionInfo._setSpellerT],
                ['_setFalloffQ', e.impressionInfo._setFalloffQ],
                ['_setFalloffCat', e.impressionInfo._setFalloffCat],
                ['_setFalloffT', e.impressionInfo._setFalloffT],
                ['_setUniqueID']
            ]);
        }
    }
    ImpressionLogManager.prototype = new EventGen();
    
    // 初期化処理
    var Initializer = function(){
        var t = this;
        t.currentURL = location.href;
        t.currentDomain = t.currentURL.split('/ep/')[0];
        
        // URLにハッシュタグが含まれている場合、リクエストを投げなおす
        if (t.currentURL.indexOf('#') != -1) {
            var searchParameter = t.currentURL.split('#')[1];
            location.href = t.currentDomain + '/ep/s/?' + searchParameter;
            return;
        }
        
        // オブジェクトの初期化
        t.sCond = new SearchConditions(t.currentDomain);
        t.rMgr = new RequestManager(t.sCond);
        t.uiMgr = new UIManager(t.sCond, t.rMgr);
        t.scMgr = new SiteCatalystManager(t.sCond, t.rMgr);
        t.ilMgr = new ImpressionLogManager(t.sCond, t.rMgr);
        t.hMgr = new HistoryManager(t.sCond, t.uiMgr, t.scMgr, t.ilMgr, t.rMgr);
        
        t.onload = function(){
            // 検索情報の読み込み
            if ($('#searchInfo').size() == 0) {
                return;
            }
            t.sCond.loadConditionsByJSON($('#searchInfo').html());
            
            // インプレッションログの送信
            var e = new Object();
            e.conditions = t.sCond.getCondition();
            e.impressionInfo = t.sCond.getDataByJSON($('#implessionLogInfo').html());
            t.ilMgr.update(e);
            
            // リスナの設定
            t.uiMgr.assignListeners();
            
            // PR情報を取得
            t.uiMgr.replacePrHtml($('#prUrl'), $('#asc_lst_ttlbHtml'));
            
            // 履歴情報の初期化
            t.hMgr.initialize(e);
        }
    }
    
    var ini = new Initializer();
    
    if (location.href.indexOf('#') == -1) {
        // URLにハッシュタグが含まれていない（リダイレクトしない）場合
        $(document).ready(ini.onload);
    }
})(window);
