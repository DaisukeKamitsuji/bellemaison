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
        
        // �A���z��̗v�f�����擾
        t.getHashLength = function(arr){
            var cnt=0;
            for(var key in arr){
                cnt++;
            }
        return cnt;
        }
    };
    
    // �������I�u�W�F�N�g
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
        
        // json�`���ŏ����ꂽ�������JSON�`���ŏ��i���Ƃ��ĕێ�����
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
        
        // ���ʂň��p���h�����_�E���̐ݒ�
        t.changeCommonParameter = function(key){
            // �y�[�W�ԍ��ȊO�̃h�����_�E�����ύX���ꂽ�ꍇ�A�y�[�W�ԍ���1�ɖ߂�
            if (key != 'PAGE_NUMBER') {
                t.conditions['PAGE_NUMBER'] = '1';
            }
            
            // �ʏ�X�y���[��Ԃ̍i�荞�݌����̏ꍇ�ASP=off��ݒ�
            if (t.ascSpKbn) {
                t.conditions['SP'] = 'off';
            }
        }
        
        // OR�����\�ȃh�����_�E����ύX
        t.changeSomeCondition = function(key, value, delimMj){
            // ��؂蕶���̐ݒ�
            var loDelimMj = delimMj;
            if (loDelimMj.length == 0) {
                loDelimMj = t.TATEBO;
            }
            if (value != '') {
                // �����������ꕔ�ǉ��E�폜����ꍇ
                var prevValues = t.conditions[key].split(loDelimMj);
                var nextValues = [];
                var existNum = $.inArray(value, prevValues);
                if (existNum != -1) {
                    // �������ɁA�I�����ꂽ�v�f�����݂��Ă���ꍇ�A�����̌�����񂩂�폜
                    nextValues = prevValues.slice(0, existNum).concat(prevValues.slice(existNum + 1));
                } else {
                    // �������ɁA�I�����ꂽ�v�f�����݂��Ȃ��ꍇ�A�����̌������ɒǉ�
                    if (prevValues[0] != '') {
                        nextValues = prevValues;
                    }
                    nextValues.push(value);
                }
                
                // ���������X�V
                var loValue = nextValues.join(loDelimMj);
                t.conditions[key] = loValue;
            } else {
                // �������������ׂĉ�������ꍇ
                t.conditions[key] = '';
            }
        }
        
        t.preserveCategoryChanged = function(key){
            if (key == 'C') {
                t.isChangedCategory = true;
            }
        }
        
        // ������񂪕ύX���ꂽ�ꍇ�A�񓯊����������s�i1�̃p�����[�^�ɕύX�j
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
                // ���i���������ꂽ�ꍇ
                t.conditions['P'] = '';
                t.conditions['PL'] = '';
                t.conditions['PH'] = '';
            } else {
                // ���i�̉����܂��́AOR�����\�h�����_�E���ł͂Ȃ��ꍇ
                t.prevValue = t.conditions[key];
                if (t.prevValue != loEsValue) {
                    // �������ɑI�����ꂽ�v�f�����݂��Ȃ��ꍇ�A���������X�V
                    t.conditions[key] = loEsValue;
                }
            }
            
            // ���ʂň��p���h�����_�E����ݒ�
            t.changeCommonParameter(key);
            
            t.deliverEvents();
        }
        
        // ������񂪕ύX���ꂽ�ꍇ�A�񓯊����������s�i2�̃p�����[�^�𓯎��ɕύX�j
        t.setConditionDouble = function(key1, value1, key2, value2){
            t.preserveCategoryChanged(key1);
            t.preserveCategoryChanged(key2);
            var prev1 = t.conditions[key1];
            var prev2 = t.conditions[key2];
            if (prev1 != value1 || prev2 != value2) {
                t.conditions[key1] = value1;
                t.conditions[key2] = value2;
                
                // ���ʂň��p���h�����_�E����ݒ�
                t.changeCommonParameter(key1);
                t.deliverEvents();
            }
        }
        
        // ������񂪕ύX���ꂽ�ꍇ�A�񓯊����������s�i�������N���A����1�̃p�����[�^�̂ݕύX�j
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
        
        // ��������ԋp
        t.getCondition = function(){
            return t.conditions;
        }
        
        // �������̃h���C����ԋp
        t.getCurrentDomain = function(){
            return t.currentDomain;
        }
        
        // ���t�@���[���Z�b�g
        t.setRecentURL = function(url){
            t.recentURL = url;
        }
        
        // ���t�@���[��ԋp
        t.getRecentURL = function(url){
            return t.recentURL;
        }
        
        // ������񂩂�A���N�G�X�gURL�𐶐����鏈��
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
    
    // ���N�G�X�g�}�l�[�W��
    var RequestManager = function(searchCond){
        var t = this;
        t.conditions = searchCond;
        t.currentURL = location.href;
        t.requestMap = new Object();
        t.xhrMap = new Object();
        
        // �ʐM����ajax�����𒆒f���鏈��
        t.cancelRequest = function() {
            if (t.getHashLength(t.requestMap) == 0) {
                // �ʐM����ajax�������Ȃ��ꍇ
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
            // ���N�G�X�gURL���擾
            if (t.getHashLength(t.requestMap) == 0) {
                if (t.currentURL != '') {
                    t.conditions.setRecentURL(t.currentURL.replace('/sa/', '/s/'));
                }
            }
            t.currentURL = t.conditions.getURL();
            
            // IE7�̏ꍇ�A��J��
            var userAgent = window.navigator.userAgent.toLowerCase();
            var appVersion = window.navigator.appVersion.toLowerCase();
            if (userAgent.indexOf('msie') != -1) {
                if (appVersion.indexOf('msie 7.') != -1) {
                    location.href = t.currentURL.replace('/sa/', '/s/');
                    return;
                }
            }
            
            // �A�Ń��N�G�X�g�̏ꍇ�A�ȑO�܂łɑ��M�������N�G�X�g�̑��M�敪�l��false�ɂ���
            t.cancelRequest();
            t.requestMap[t.currentURL] = true;
            
            // �񓯊���������ʂ̌Ăяo���APR�T�[�o�ւ�ajax�����𒆒f
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
                        // �ŐV�̃��N�G�X�g�łȂ��ꍇ�A�����𒆎~
                        return;
                    }
                    
                    var e = new Object();
                    e.type = 'ajaxSuccess';
                    e.html = html;
                    e.context = $(e.html);
                    
                    // �ėp�G���[��ʂ��ԋp���ꂽ�ꍇ
                    if ($('#epwb0005', e.context).size() != 0) {
                        location.href = t.conditions.getCurrentDomain() + '/ep/srvlt/EPWB00/EPWB0005/dErrShow?BELN_SHOP_KBN=' + t.conditions.conditions.BELN_SHOP_KBN;
                        return;
                    }
                    
                    // ���_�C���N�gURL���܂�HTML���ԋp���ꂽ�ꍇ
                    if ($('#ascRedirectUrl', e.context).size() != 0) {
                        // �A���[�g�ŕ\�����郁�b�Z�[�W������ꍇ�A�\��
                        if ($('#ascErrMessage', e.context).html() != 0) {
                            e.msg = $('#ascErrMessage', e.context).html();
                            e.msg = e.msg.replace(/<\s*br\s*\/??>/gi, '\n');
                            alert(e.msg);
                        }
                        
                        // �w�肳�ꂽ���_�C���N�g��ɑJ��
                        e.redirectUrl = t.conditions.getCurrentDomain();
                        if (typeof $('#ascRedirectUrl', e.context).attr('value') != 'undefined') {
                            e.redirectUrl = $('#ascRedirectUrl', e.context).attr('value');
                        }
                        location.href = e.redirectUrl;
                        return;
                    }
/* �C�� 150615brs1 TAM �R�R���� */
					if ($('select[name="KNSK_CTGR_TI"]').size() > 0) {
					    var knsk_ctgr_ti_val = document.form_shn.elements["KNSK_CTGR_TI"].value;
					}
/* �C�� 150615brs1 TAM �R�R�܂� */
                    var isChangedCategory = t.conditions.isChangedCategory;
                    // �������̍X�V
                    t.conditions.loadConditionsByJSON($('#searchInfo', e.context).html());
                    t.conditions.conditions.referrer = t.conditions.getRecentURL();
                    
                    // �������Ƃ��Č�������ێ�
                    e.url = t.currentURL;
                    e.conditions = t.conditions.getCondition();
                    e.impressionInfo = t.getDataByJSON($('#implessionLogInfo', e.context).html());
                    
                    // ��ʍX�V�ƁA�������̍X�V�����s
                    t.deliverEvents(e);
                    

/* �C�� 150615brs1 TAM �R�R���� */
					if ($('select[name="KNSK_CTGR_TI"]').size() > 0) {
					    $('select[name="KNSK_CTGR_TI"] option').each(function() {
					        if ($(this).attr('value') == knsk_ctgr_ti_val) {
					            $('select[name="KNSK_CTGR_TI"]').val($(this).attr('value'));
					        }
					    });
					}
/* �C�� 150615brs1 TAM �R�R�܂� */
/* �C�� 150522brs1 TAM �R�R���� */
                    if ($('#headerArea .category').size() > 0) {
                        // �w�b�_�[�̃J�e�S���̓���
                        var selectVal = $('#headerArea .category').val(); // �Z���N�g�{�b�N�X�̑I��l
                        var selectText; // �I������Ă���J�e�S��
                        var inputText = $('.search-text-inner').text(); // �\������Ă���J�e�S��

                        if (selectVal == 'all') {
                            selectText = '���ׂẴJ�e�S��';
                        } else if (selectVal == 'list') {
                            selectText = '���̈ꗗ����i�荞��';
                        } else if (selectVal == 'rank') {
                            selectText = '�����L���O';
                        } else {
                            selectText = selectVal.split('_')[2];
                        }

                        if (selectText != inputText) {

                            $('#headerArea .category option').removeAttr('selected');

                            $('#headerArea .category option').each(function() {
                                if (inputText == '���ׂẴJ�e�S��') {
                                    if ($(this).attr('value') == 'all') {
                                        $('#headerArea .category').val($(this).attr('value'));
                                    }
                                } else if (inputText == '���̈ꗗ����i�荞��') {
                                    if ($(this).attr('value') == 'list') {
                                        $('#headerArea .category').val($(this).attr('value'));
                                    }
                                } else if (inputText == '�����L���O') {
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
/* �C�� 150522brs1 TAM �R�R�܂� */

                    // �T�[�o�Ƃ̒ʐM���I��������A�����I�ɉ�ʃX�N���[���ʒu�̐�����s��
                    var offset = $('#asc_top').offset().top;
                    // PR�p�����[�^���t���Ă��Ȃ� ���� �i�J�e�S���h�����_�E�� �܂��� �p�������̃J�e�S���������j����PR�����\������Ă���APR���ɃX�N���[������
                    if (isChangedCategory && (typeof(t.conditions.getCondition()['PR']) === 'undefined' || t.conditions.getCondition()['PR'] == '') 
                         && $('#prHtml').css('display') != 'none') {
                        offset = $('#prHtml').offset().top;
                    }
                    window.scroll(0, offset);
                },
                error : function(xhr, status, error){
                    if (t.requestMap[this.url] != true){
                        // �ŐV�̃��N�G�X�g�łȂ��ꍇ�A�����𒆎~
                        return;
                    }
                    if ('timeout' != status) {
                        // �^�C���A�E�g�ł͂Ȃ��ꍇ�A�����𒆎~
                        return;
                    }
                    
                    // �񓯊��ʐM�����s�����ꍇ�A�x���l�g�b�v��ʂɑJ��
                    alert('�l�b�g���[�N�G���[���������܂����B\n�l�b�g���[�N�̐ڑ��󋵂����m�F���������B');
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
    
    // UI�}�l�[�W��
    var UIManager = function(searchCond, requestMgr){
        var t = this;
        t.conditions = searchCond;
        t.rMgr = requestMgr;
        t.siblingsCount = 0;
        
        // ���N�G�X�g�pID�����`�F�b�N����萔
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
        
        // �`�F�b�N�{�b�N�X�Őe�v�f��id���擾���鏈��
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
        
        // ��ʕ\�����A�J�e�S�������N�ƃp�����������N�̍쐬����
        t.createViewURL = function(idName, idSplitStr) {
        	
        	var linkArray = $('#' + idName + ' a');    // ���ׂă����N���擾����
            for (var i=0; i<linkArray.length; i++){
            	var e = $(linkArray[i]);
            	if (e.attr('href') == 'javascript:void(0);' && e.attr('id').indexOf(idSplitStr) != -1) {
            		var loCtgr = e.attr('id').split(idSplitStr)[1];    // �J�e�S���R�[�h���擾����
            		var nextURL = t.conditions.base_url;
            		var params = '?';
            		var condList = t.conditions.conditions;
            		var setConditionOnlyFlg = false;    // �������������t���O
            		if  (('asc_NON_CTGR_DD' == idName &&  $('#0hit').size() != 0) || 'asc_CTGR_PNKZ' == idName) {
            			setConditionOnlyFlg = true;
            		}
                	var addFlg = true;    // �J�e�S���I���Ȃ����A�����N�ɃJ�e�S���ǉ��t���O
                	
                    for (var key in condList) {
                    	if ((condList[key].length != 0 && key != 'referrer') || key == 'S') {
                    		if (setConditionOnlyFlg) {
                    			    // �������������A���L�̏�����ǉ����邾���ł��B
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
                    			// ���L�̏�����ǉ�����ł��B
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
                    		    	// �J�e�S���I���Ȃ����A�����N�ɃJ�e�S����ǉ�
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
        
        // HTML�����ɁA�N���b�N���̃C�x���g���X�i��ݒ肷�鏈��
        t.assignListeners = function(){
            // �J�e�S���h�����_�E���i��J�e�S���j
            if ($('#asc_DAI_CTGR_DD').size() != 0) {
                $('#asc_DAI_CTGR_DD').bind('click', t, function(e){
                    var id = $(e.target).attr('id');
                    if (typeof id != 'undefined' && id.indexOf(t.CTGR_DD) != -1) {
                        var loCtgr = id.split(t.CTGR_DD)[1];
                        if (loCtgr == 'RELEASE') {
                            // �����L�[���ݒ肳��Ă���ꍇ
                            loCtgr = '';
                        }
                        if (id.split('_')[0] == 'UP') {
                            // �I�𒆂̃J�e�S��������ʂ̃J�e�S�����������ꂽ�ꍇ
                            t.conditions.setConditionDouble('C', loCtgr, 'SB', '');
                        } else {
                            // �I�𒆂̃J�e�S���������ʂ̃J�e�S�����������ꂽ�ꍇ
                            t.conditions.setCondition('C', loCtgr);
                        }
                        return false;
                    }
                });
                
                //�����N��href���e��؂�ւ�����
                t.createViewURL('asc_DAI_CTGR_DD', t.CTGR_DD);
            }
            
            // �J�e�S���h�����_�E���i���J�e�S���j
            if ($('#asc_CHU_CTGR_DD').size() != 0) {
                $('#asc_CHU_CTGR_DD').bind('click', t, function(e){
                    var id = $(e.target).attr('id');
                    if (typeof id != 'undefined' && id.indexOf(t.CTGR_DD) != -1) {
                        var loCtgr = id.split(t.CTGR_DD)[1];
                        if (id.split('_')[0] == 'UP') {
                            // �I�𒆂̃J�e�S��������ʂ̃J�e�S�����������ꂽ�ꍇ
                            t.conditions.setConditionDouble('C', loCtgr, 'SB', '');
                        } else {
                            // �I�𒆂̃J�e�S���������ʂ̃J�e�S�����������ꂽ�ꍇ
                            t.conditions.setCondition('C', loCtgr);
                        }
                        return false;
                    }
                });
                
                //�����N��href���e��؂�ւ�����
                t.createViewURL('asc_CHU_CTGR_DD', t.CTGR_DD);
            }
            
            // �J�e�S���h�����_�E���i���J�e�S���j
            if ($('#asc_SHO_CTGR_DD').size() != 0) {
                $('#asc_SHO_CTGR_DD').bind('click', t, function(e){
                    var id = $(e.target).attr('id');
                    if (typeof id != 'undefined' && id.indexOf(t.CTGR_DD) != -1) {
                        // �N���b�N���ꂽ�v�f��id���ݒ肳��Ă���ꍇ�A���������X�V�i�񓯊����������s�j
                        t.conditions.setCondition('C', id.split(t.CTGR_DD)[1]);
                        return false;
                    }
                });
                
                //�����N��href���e��؂�ւ�����
                t.createViewURL('asc_SHO_CTGR_DD',  t.CTGR_DD);
            }
            
            // �J�e�S���h�����_�E���i�J�e�S���I���Ȃ��j
            if ($('#asc_NON_CTGR_DD').size() != 0) {
                $('#asc_NON_CTGR_DD').bind('click', t, function(e){
                    var id = $(e.target).attr('id');
                    if (typeof id != 'undefined' && id.indexOf(t.CTGR_DD) != -1) {
                        // �N���b�N���ꂽ�v�f��id���ݒ肳��Ă���ꍇ�A���������X�V�i�񓯊����������s�j
                        if ($('#0hit').size() == 0) {
                            t.conditions.setCondition('C', id.split(t.CTGR_DD)[1]);
                        } else {
                            // 0��HIT���́A������������
                            t.conditions.setConditionOnlyThis('C', id.split(t.CTGR_DD)[1]);
                        }
                        return false;
                    }
                });
                
                //�����N��href���e��؂�ւ�����
                t.createViewURL('asc_NON_CTGR_DD', t.CTGR_DD);
            }
            
            // �Ώۏ��i
            if ($('#dd_tshShn').size() != 0) {
                $('#dd_tshShn').bind('click', t, function(e){
                    t.siblingsCount = 0;
                    var id = t.findInputId($(e.target));
                    if (typeof id != 'undefined' && id.indexOf(t.TSH_SHN) != -1) {
                        // �N���b�N���ꂽ�v�f��id���ݒ肳��Ă���ꍇ�A���������X�V�i�񓯊����������s�j
                        t.conditions.setCondition('T', id.split(t.TSH_SHN)[1]);
                    }
                });
            }
            
            // ������
            if ($('#dd_wrbkrt').size() != 0) {
                $('#dd_wrbkrt').bind('click', t, function(e){
                    var id = $(e.target).attr('id');
                    if (typeof id != 'undefined' && id.indexOf(t.WRBKRT) != -1) {
                        // �N���b�N���ꂽ�v�f��id���ݒ肳��Ă���ꍇ�A���������X�V�i�񓯊����������s�j
                        if (id.split(t.WRBKRT)[1] == t.RELEASE) {
                            t.conditions.setCondition('W', '');
                        } else {
                            t.conditions.setCondition('W', id.split(t.WRBKRT)[1]);
                        }
                    }
                });
            }
            
            // �F
            if ($('#colorform').size() != 0) {
                $('#colorform').bind('click', t, function(e){
                    t.siblingsCount = 0;
                    var id = t.findInputId($(e.target));
                    if (typeof id != 'undefined' && id.indexOf(t.COLOR) != -1) {
                        // �N���b�N���ꂽ�v�f��id���ݒ肳��Ă���ꍇ�A���������X�V�i�񓯊����������s�j
                        t.conditions.setCondition('CL', id.split(t.COLOR)[1]);
                    }
                });
            }
            
            // �T�C�Y
            if ($('#dd_size').size() != 0) {
                $('#dd_size').bind('click', t, function(e){
                    t.siblingsCount = 0;
                    var id = t.findInputId($(e.target));
                    if (typeof id != 'undefined' && id.indexOf(t.SIZE) != -1) {
                        // �N���b�N���ꂽ�v�f��id���ݒ肳��Ă���ꍇ�A���������X�V�i�񓯊����������s�j
                        t.conditions.setCondition('SZ', id.split(t.SIZE)[1].replace('_', '^'));
                    }
                });
            }
            
            // �u�����h
            if ($('#dd_bland').size() != 0) {
                $('#dd_bland').bind('click', t, function(e){
                    t.siblingsCount = 0;
                    var id = t.findInputId($(e.target));
                    if (typeof id != 'undefined' && id.indexOf(t.BLAND) != -1) {
                        // �N���b�N���ꂽ�v�f��id���ݒ肳��Ă���ꍇ�A���������X�V�i�񓯊����������s�j
                        t.conditions.setCondition('B', id.split(t.BLAND)[1]);
                    }
                });
            }
            
            // �J�^���O
            if ($('#dd_ksiCtlg').size() != 0) {
                $('#dd_ksiCtlg').bind('click', t, function(e){
                    t.siblingsCount = 0;
                    var id = t.findInputId($(e.target));
                    if (typeof id != 'undefined' && id.indexOf(t.CTLG) != -1) {
                        // �N���b�N���ꂽ�v�f��id���ݒ肳��Ă���ꍇ�A���������X�V�i�񓯊����������s�j
                        t.conditions.setCondition('CT', id.split(t.CTLG)[1]);
                    }
                });
            }
            
            // �Œ艿�i
            if ($('#dd_price').size() != 0) {
                $('#dd_price').bind('click', t, function(e){
                    var id = $(e.target).attr('id');
                    if (typeof id != 'undefined' && id.indexOf(t.KAKK) != -1) {
                        // �N���b�N���ꂽ�v�f��id���ݒ肳��Ă���ꍇ�A���������X�V�i�񓯊����������s�j
                        if (id.split(t.KAKK)[1] == t.RELEASE) {
                            t.conditions.setCondition('P', '');
                        } else {
                            t.conditions.setCondition('P', id.split(t.KAKK)[1]);
                        }
                    }
                });
            }
            
            // ���R���i
            if ($('#kakkform').size() != 0) {
                // HTML�����ɁA�C�x���g���X�i��ݒ�
                $('#kakkform').bind('click', t, function(e){
                    var id = $(e.target).attr('id');
                    if (typeof id != 'undefined' && id == t.JIYUKAKK) {
                        // ���������X�V�i�񓯊����������s�j
                        t.conditions.setConditionDouble('PL', EscapeSJIS($('#KAKK_HNIST1').attr('value')), 'PH', EscapeSJIS($('#KAKK_HNIST2').attr('value')));
                    }
                });
                $('#kakkform').bind('keydown', t, function(e){
                    if ((e.which && e.which === 13) || (e.keyCode && e.keyCode === 13)) {
                        // ���������X�V�i�񓯊����������s�j
                        t.conditions.setConditionDouble('PL', $('#KAKK_HNIST1').attr('value'), 'PH', $('#KAKK_HNIST2').attr('value'));
                    }
                });
            }
            
            // �J�e�S���ʍi�荞�ݏ����i��j
            if ($('#asc_SBRJKN1').size() != 0) {
                $('#asc_SBRJKN1').bind('click', t, function(e){
                    var value = $(e.target).attr('id');
                    if (typeof value != 'undefined' && value.indexOf(t.SBRJKN) != -1) {
                        // �N���b�N���ꂽ�v�f��id���ݒ肳��Ă���ꍇ�A���������X�V�i�񓯊����������s�j
                        if (value.split(t.SBRJKN)[1] == 'RELEASE') {
                            t.conditions.setCondition('SB', '');
                        } else {
                            t.conditions.setCondition('SB', value.split(t.SBRJKN)[1]);
                        }
                    }
                });
            }
            // �J�e�S���ʍi�荞�ݏ����i���j
            if ($('#asc_SBRJKN2').size() != 0) {
                $('#asc_SBRJKN2').bind('click', t, function(e){
                    var value = $(e.target).attr('id');
                    if (typeof value != 'undefined' && value.indexOf(t.SBRJKN) != -1) {
                        // �N���b�N���ꂽ�v�f��id���ݒ肳��Ă���ꍇ�A���������X�V�i�񓯊����������s�j
                        if (value.split(t.SBRJKN)[1] == 'RELEASE') {
                            t.conditions.setCondition('SB', '');
                        } else {
                            t.conditions.setCondition('SB', value.split(t.SBRJKN)[1]);
                        }
                    }
                });
            }
            
            // �p�������i�r
            if ($('#asc_CTGR_PNKZ').size() != 0) {
                $('#asc_CTGR_PNKZ').bind('click', t, function(e){
                    var id = $(e.target).attr('id');
                    if (typeof id != 'undefined' && id.indexOf(t.PNKZ) != -1) {
                        // �N���b�N���ꂽ�v�f��id���ݒ肳��Ă���ꍇ�A���������X�V�i�񓯊����������s�j
                        t.conditions.setConditionOnlyThis('C', id.split(t.PNKZ)[1]);
                        return false;
                    }
                });
                
                //�����N��href���e��؂�ւ�����
                t.createViewURL('asc_CTGR_PNKZ', t.PNKZ);
            }
            
            // �\�����A�\�������i��j
            if ($('#asc_SORT-KNS1').size() != 0) {
                $('#asc_SORT-KNS1').bind('click', t, function(e){
                    var id = $(e.target).attr('id');
                    if (typeof id != 'undefined') {
                        // �N���b�N���ꂽ�v�f��id���ݒ肳��Ă���ꍇ
                        if (id.indexOf(t.SORT) == 0) {
                            // �N���b�N���ꂽ�v�f���\�����ł���ꍇ�A���������X�V�i�񓯊����������s�j
                            t.conditions.setCondition('S', id.split(t.SORT)[1]);
                        } else if (id.indexOf(t.KNS) == 0) {
                            // �N���b�N���ꂽ�v�f���\�������ł���ꍇ���������X�V�i�񓯊����������s�j
                            t.conditions.setCondition('KNS', id.split(t.KNS)[1]);
                        }
                    }
                });
            }
            // �\�����A�\�������i���j
            if ($('#asc_SORT-KNS2').size() != 0) {
                $('#asc_SORT-KNS2').bind('click', t, function(e){
                    var id = $(e.target).attr('id');
                    if (typeof id != 'undefined') {
                        // �N���b�N���ꂽ�v�f��id���ݒ肳��Ă���ꍇ
                        if (id.indexOf(t.SORT) == 0) {
                            // �N���b�N���ꂽ�v�f���\�����ł���ꍇ�A���������X�V�i�񓯊����������s�j
                            t.conditions.setCondition('S', id.split(t.SORT)[1]);
                        } else if (id.indexOf(t.KNS) == 0) {
                            // �N���b�N���ꂽ�v�f���\�������ł���ꍇ���������X�V�i�񓯊����������s�j
                            t.conditions.setCondition('KNS', id.split(t.KNS)[1]);
                        }
                    }
                });
            }
            
            // �y�[�W���O�i��j
            if ($('#asc_PAGE1').size() != 0) {
                $('#asc_PAGE1').bind('click', t, function(e){
                    var id = $(e.target).attr('id');
                    if (typeof id != 'undefined' && id.indexOf(t.PAGE) != -1) {
                        // �N���b�N���ꂽ�v�f��id���ݒ肳��Ă���ꍇ�A���������X�V�i�񓯊����������s�j
                        t.conditions.setCondition('PAGE_NUMBER', id.split(t.PAGE)[1]);
                    }
                });
            }
            // �y�[�W���O�i���j
            if ($('#asc_PAGE2').size() != 0) {
                $('#asc_PAGE2').bind('click', t, function(e){
                    var id = $(e.target).attr('id');
                    if (typeof id != 'undefined' && id.indexOf(t.PAGE) != -1) {
                        // �N���b�N���ꂽ�v�f��id���ݒ肳��Ă���ꍇ�A���������X�V�i�񓯊����������s�j
                        t.conditions.setCondition('PAGE_NUMBER', id.split(t.PAGE)[1]);
                    }
                });
            }
        }
        
        // HTML�p�[�c�u������
        t.replaceHtml = function(e){
            if (typeof e.context == 'undefined') {
                e.context = $(e.html);
            }
            
            // �����i�r�Q�[�V����
            nav = $('#searchNavigationSection', e.context);
            $('#searchNavigationSection').html(nav.html());
            
            // �E���R���e���c��
            nav = $('.f-right', e.context);
            $('.f-right').html(nav.html());
            
            // <head>����u��
            t.replaceHead(e);
            
            // ���R�����h��u��
            t.replaceRecommend(e);
            
            // PR����u��
            t.replacePrHtml($('#prUrl', e.context), $('#asc_lst_ttlbHtml', e.context));
            
            // �N�C�b�N�r���[�p�p�����[�^��u��
            nav = $('#epfb0095_list', e.context);
            $('#epfb0095_list').html(nav.html());
            
            //�����L���O�o�i�[�̕��������ւ�
            var sKeyWord = $('#rankReplacementStr', e.context).attr('value');
            $('div #rank_replacement').each(function(){$(this).text(sKeyWord)});

        }
        
        // �񓯊���������ʂ̐ݒ�
        t.setLoadingHtml = function(e){
            if (e.type == 'ajaxBefore') {
                if ($('#loading01').css('display') != 'none') {
                    // �������摜���\������Ă���ꍇ�i���ɔ񓯊��������̏ꍇ�j
                    return;
                }
                
                // �񓯊��������摜��\��
                if ($('#loading01').size() != 0) {
                    $('#loading01').show();
                    var offset = $('#loading01').offset();
                    var topPadding = 15;
                    t.setLoadingCSS(offset, topPadding);
                }
                
                // �㕔�����o��
                if ($('.list-comment').size() != 0) {
                    $('.list-comment').hide();
                }
                
                // �L�[�t���[�Y�i��j
                if ($('.mt10', '.f-right').size() != 0) {
                    $('.mt10', '.f-right').hide();
                }
                // �\�����E�\�������A�y�[�W���O�A���i��񕔁A�L�[�t���[�Y�i���j
                $('.mt20').hide();
                // ���i�����{�b�N�X
                $("form[name*='form_shn']").hide();
                // �ŋ߃`�F�b�N�������i
                if ($('.check01').size() != 0) {
                    $('.check01').hide();
                }
                // �֘A�J�e�S���A����J�e�S��
                if ($('.text12l15').size() != 0) {
                    $('.text12l15').hide();
                }
                
                // �ŋ߃`�F�b�N�������i����I�X�X���I
                if ($('#recommender_10').size() != 0) {
                    $('#recommender_10').hide();
                }
                
// 2015.07.10 add AMS start
                // ����ɂ�����̏��i�͂������ł����H
                if ($('#recommender_23').size() != 0) {
                    $('#recommender_23').hide();
                }
// 2015.07.10 add AMS end
                
                // �y�[�W�̐擪�ɖ߂�
                $('.pb10').hide();
            }
        }
        
        // �񓯊���������ʂ̉���
        t.unsetLoadingHtml = function(){
            // �X�N���[���C�x���g�̉���
            if ($('#loading01').size() != 0) {
                $(window).unbind('scroll');
            }
            
            if ($('#loading01').css('display') == 'none') {
                // �������摜���\������Ă��Ȃ��ꍇ�i���ɔ񓯊��������ł͂Ȃ��ꍇ�j
                return;
            }
            
            // �񓯊��������摜��\��
            if ($('#loading01').size() != 0) {
                $('#loading01').hide();
            }
            
            // �㕔�����o��
            if ($('.list-comment').size() != 0) {
                $('.list-comment').show();
            }
            
            // �L�[�t���[�Y�i��j
            if ($('.mt10', '.f-right').size() != 0) {
                $('.mt10', '.f-right').show();
            }
            // �\�����E�\�������A�y�[�W���O�A���i��񕔁A�L�[�t���[�Y�i���j
            $('.mt20').show();
            // ���i�����{�b�N�X
            $("form[name*='form_shn']").show();
            // �ŋ߃`�F�b�N�������i
            if ($('.check01').size() != 0) {
                $('.check01').show();
            }
            // �֘A�J�e�S���A����J�e�S��
            if ($('.text12l15').size() != 0) {
                $('.text12l15').show();
            }
            
            // �ŋ߃`�F�b�N�������i����I�X�X���I
            if ($('#recommender_10').size() != 0) {
                $('#recommender_10').show();
            }
            
// 2015.07.10 add AMS start
            // ����ɂ�����̏��i�͂������ł����H
            if ($('#recommender_23').size() != 0) {
                $('#recommender_23').show();
            }
// 2015.07.10 add AMS end
            
            // �y�[�W�̐擪�ɖ߂�
            $('.pb10').show();
        }
        
        // PR��HTML���擾���āA�u�����鏈��
        t.replacePrHtml = function(prUrlContext, prHtmlContext){
            var prHtml = '';
            
            // PR�T�[�o�ւ̃��N�G�X�gURL���擾
            if (prUrlContext.size() == 0) {
                // PR�T�[�o�ւ̃��N�G�X�g���擾�ł��Ȃ��ꍇ
                
                // ���X�g�^�C�g����HTML������ꍇ
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
            
            // PR���̃t�@�C���p�X���擾���A�u������
            t.getPrFilePass(prUrl);
        }
        
        // PR���p�t�@�C���p�X�擾����
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
        
        // PR���p�C���N���[�h�t�@�C���擾�E�u������
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
                    // PR����u��
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
        
        // PR�T�[�o�ւ�ajax�����𒆒f���鏈��
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
        
        // <head>����u�����鏈��
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
                // �񓯊��������ʂ�canonical�^�O���K�v�ȏꍇ
                data = $('#asc_canonical', e.context).attr('value');
                if ($('#asc_link_canonical').size() != 0) {
                    // �񓯊������O��ʂ�canonical�^�O������ꍇ�A�ύX
                    $('#asc_link_canonical').attr('href', data);
                }
            } 
            // ��Umeta�^�O��noindex���폜
            if ($('head>meta[content="noindex"]').size != 0) {
                $('head>meta[content="noindex"]').remove();
            }
            // 1�y�[�W�ڂŖ����ꍇ(�u�������ʂȂ�=0�y�[�W�v�܂�)meta�^�O��noindex�𐶐�
            if (t.conditions.getCondition()['PAGE_NUMBER'] != 1) {
                if ($('head').length > 0) {
                    $('head').prepend('<meta name="robots" content="noindex">');
                }
                if ($('#asc_link_canonical').size() != 0) {
                    // link��canonical�^�O������ꍇ�A�ύX
                    $('#asc_link_canonical').attr('href', '');
                }
            }
        }
        
        // ���R�����h���擾���āA�u�����鏈��
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
        // �������摜�̂�css���C�����鏈��
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
        
        // ���������Ɠ���JS�����s���鏈��
        t.doSyncJs = function(e){
            var _0hit = false;
            if ($('#0hit', e.context).size() != 0) {
                _0hit = true;
            }
            
            // �w�b�_�[
            initSet();
            
            // ���i���X�g�̊e���i
            ukClickLogTargets = $('#clickLogInfo', e.context).attr('value').split(',');
            for (var i = 0; i < ukClickLogTargets.length; i++) {
                ukClickLogTargets[i] = ukClickLogTargets[i].split('-');
                ukClickLogTargets[i][0] = ukClickLogTargets[i][0].split('|');
            }
            if (!_0hit) {
                // 0��HIT�łȂ��ꍇ�̂݃N���b�N���O���Z�b�g
                ukClickLogSetter();
                
                // ���i���X�g�̉��i�̈ʒu���낦
                if (typeof heightLine != 'undefined') {
                    heightLine();
                }
            }
            
            // brs_uniq.js
            lnavi_init();
            keyword_init();
            detail_float_init();
            
            // �t����񐁂��o��
            if (!_0hit) {
                balloon(e.conditions.PAGE_NUMBER);
            }
            
            // �{������p�J�e�S��
            if ($('#epfb00_initCookie_ch_cate_Asc', e.context).size() != 0
                && $('#setTtInfoCookieSmlcat_Asc', e.context).size() != 0) {
                var cookie_ch_cate = $('#epfb00_initCookie_ch_cate_Asc', e.context).attr('value').split(',');
                epfb00_initCookie_ch_cate(cookie_ch_cate[0], cookie_ch_cate[1], cookie_ch_cate[2])
                setTtInfoCookieSmlcat($('#setTtInfoCookieSmlcat_Asc', e.context).attr('value'));
            }
            
            // mheader��css���C��
            if (typeof adjustUseframeStyle != 'undefined') {
                adjustUseframeStyle();
            }
            
            // ���낢��ȏ����ōi�荞�ނ́u�`�F�b�N���O���v�{�^��
            if (!_0hit) {
                var vb01t = $('#various-table01').height() / 2 - 9;
                $("[id='various-btn01']").css('top', vb01t + 'px');
            }
        }
        
        // ��ʐ؂�ւ�����
        t.update = function(e){
            if (typeof e.type != 'undefined' && (e.type == 'ajaxSuccess' || e.type == 'historyBack')) {
                // ��ʂ���������HTML�Œu��
                t.replaceHtml(e);
                
                // �񓯊���������ʂ̉���
                t.unsetLoadingHtml();
                
                // ���������Ɠ���JS�����s
                t.doSyncJs(e);
                
                // �h�����_�E���Ƀ��X�i��ݒ�
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
    
    // �q�X�g���o�b�N���䏈��
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
            // �q�X�g��API������ꍇ�A�u���E�U�̖߂�A�i�ގ��s���̃C�x���g��ݒ�
            $(window).bind('popstate', t, function(e){
                // �񓯊��������ɂ��ǂ�{�^���������ꂽ�ꍇ
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
                
                // �C���v���b�V�������O�𑗐M
                t.ImpLogMgr.update(state);
                
                return false;
            });
        } else {
            // �q�X�g��API���Ȃ��ꍇ
            
            // �n�b�V���l�ɑΉ����闚�������擾���鏈�����`
            t.historyMap = new Object();
            t.getEventByHash = function(hash){
                return t.historyMap[hash];
            }
            // ���������X�V�����ꍇ�ɋN���鏈���𒆎~������t���O��������
            t.isPushed = false;
            
            // �A�h���X�o�[�̃n�b�V���ύX���C�x���g��ݒ�
            $(window).bind('hashchange', t, function(e){
                // ���������X�V�����ꍇ�ɋN���鏈���𒆎~������
                if (t.isPushed) {
                    t.isPushed = false;
                    return false;
                }
                // �񓯊��������ɂ��ǂ�{�^���������ꂽ�ꍇ
                t.rMgr.cancelRequest();
                t.uiMgr.unsetLoadingHtml();
                
                // �A�h���X�o�[����n�b�V���l�ƁA�Ή�����HTML���擾
                var hash = window.location.hash.split('#')[1];
                
                var e = new Object();
                if (typeof t.historyMap[hash] !='undefined' || typeof hash == 'undefined') {
                    if (typeof hash == 'undefined') {
                        // ������ʂɖ߂��Ă����ꍇ
                        e = t.historyMap['FIRST'];
                    } else {
                        e = t.historyMap[hash];
                    }
                    
                    if (typeof e.context == 'undefined') {
                        e.context = $(e.html);
                    }
                    t.conditions.loadConditions(e.conditions);
                    
                    // �C���v���b�V�������O�𑗐M
                    t.ImpLogMgr.update(e);
                    
                    // �����������ɔ񓯊��ŉ�ʐ؂�ւ����������s
                    e.type = 'historyBack';
                    t.uiMgr.update(e);
                } else {
                    // �������ɒl���Ȃ��ꍇ�ɁA��J��
                    location.href = t.conditions.getCurrentDomain() + '/ep/s/?' + window.location.hash.split('#')[1];
                }
            });
        }
        
        // �����\�����̏���
        t.initialize = function(e){
            var f = new Object();
            f.html = $('body').html();
            f.conditions = e.conditions;
            f.impressionInfo = e.impressionInfo;
            f.title = document.title;
            f.url = location.href;
            if (t.hasHistoryAPI) {
                // �q�X�g��API������ꍇ�AAPI���g���ė���HTML�A�A�h���X�o�[���X�V
                t.history.replaceState(f, f.title, f.url);
            } else {
                t.historyMap['FIRST'] = $.extend(true, {}, f);
            }
        }
        
        // �������X�V����
        t.update = function(e){
            // �񓯊��ʐM�������̂ݎ��s
            if (typeof e.type == 'undefined' || e.type != 'ajaxSuccess') {
                return;
            }
            
            // �y�[�W�^�C�g���̐ݒ�
            e.title = '�x�����]���l�b�g'
            if ($('#ascTitle', e.context).size() != 0) {
                e.title = $('#ascTitle', e.context).attr('value');
            }
            
            var f = new Object();
            f.html = e.html;
            f.conditions = e.conditions;
            f.title = e.title;
            f.impressionInfo = e.impressionInfo;
            f.url = e.url.replace('/sa/', '/s/');
            
            // �y�[�W�^�C�g���̍X�V
            document.title = f.title;
            
            // �A�h���X�o�[�̍X�V
            if (t.hasHistoryAPI) {
                // �q�X�g��API������ꍇ�AAPI���g���ė���HTML�A�A�h���X�o�[���X�V
                t.history.pushState(f, f.title, f.url);
            } else {
                // �q�X�g��API���Ȃ��ꍇ
                
                // �����������n�b�V���l�Ƃ��ĕێ�
                var splitted = f.url.split('?');
                var hash = splitted[1];
                
                // ��������ێ�
                t.historyMap[hash] = $.extend(true, {}, f);
                
                // ���������X�V�����ꍇ�ɋN���鏈���𒆎~������t���O�𗧂Ă�
                t.isPushed = true;
                
                // �n�b�V���l�Ƃ��ăA�h���X�o�[��URL�ɕt��
                location.hash = hash;
            }
            
            t.scMgr.update(e);
            t.ImpLogMgr.update(e);
        }
        
        t.rMgr.addListener(t.update);
    }
    HistoryManager.prototype = new EventGen();
    
    // �T�C�g�J�^���X�g�}�l�[�W��
    var SiteCatalystManager = function(cond, requestMgr){
        var t = this;
        t.conditions = cond;
        t.rMgr = requestMgr;
        
        t.update = function(e){
            // �T�C�g�J�^���X�g��񂪂Ȃ��ꍇ�A���O���M�����𒆎~
            if ($('#siteCatalystInfo', e.context).size() == 0) {
                return;
            }
            
            // �T�C�g�J�^���X�g���̓ǂݍ���
            var siteCatalystInfo = new Object();
            siteCatalystInfo = t.getDataByJSON($('#siteCatalystInfo', e.context).html());
            
            // �T�C�g�J�^���X�g���M�p�I�u�W�F�N�g�����݂��Ȃ��ꍇ�ɁA�����𒆎~
            if (typeof s_sc == 'undefined' || typeof s_sc.t == 'undefined') {
                return;
            }
            
            // �T�C�g�J�^���X�g���M���̐ݒ�
            var vars = new Object();
            s_sc.events = '';
            s_sc.eVar1 = '';
            vars.prop19 = siteCatalystInfo.summaryInfo;
            s_sc.pageName = siteCatalystInfo.pageName;
            
            // �T�C�g�J�^���X�g�^�O�𑗐M
            s_sc.t(vars);
        }
    }
    SiteCatalystManager.prototype = new EventGen();
    
    // �C���v���b�V�������O�}�l�[�W��
    var ImpressionLogManager = function(cond, requestMgr){
        var t = this;
        t.conditions = cond;
        t.rMgr = requestMgr;
        
        // �C���v���b�V�������O�̑��M
        t.update = function(e){
            // �C���v���b�V�������O��񂪂Ȃ��ꍇ�A���O���M�����𒆎~
            if (typeof e.impressionInfo != 'object') {
                return;
            }
            
            // ���t�@���̐ݒ�
            var ref = document.referrer;
            if (typeof e.conditions != 'undefined' && typeof e.conditions.referrer != 'undefined') {
                ref = e.conditions.referrer;
            }
            
            // �C���v���b�V�������O�̑��M
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
    
    // ����������
    var Initializer = function(){
        var t = this;
        t.currentURL = location.href;
        t.currentDomain = t.currentURL.split('/ep/')[0];
        
        // URL�Ƀn�b�V���^�O���܂܂�Ă���ꍇ�A���N�G�X�g�𓊂��Ȃ���
        if (t.currentURL.indexOf('#') != -1) {
            var searchParameter = t.currentURL.split('#')[1];
            location.href = t.currentDomain + '/ep/s/?' + searchParameter;
            return;
        }
        
        // �I�u�W�F�N�g�̏�����
        t.sCond = new SearchConditions(t.currentDomain);
        t.rMgr = new RequestManager(t.sCond);
        t.uiMgr = new UIManager(t.sCond, t.rMgr);
        t.scMgr = new SiteCatalystManager(t.sCond, t.rMgr);
        t.ilMgr = new ImpressionLogManager(t.sCond, t.rMgr);
        t.hMgr = new HistoryManager(t.sCond, t.uiMgr, t.scMgr, t.ilMgr, t.rMgr);
        
        t.onload = function(){
            // �������̓ǂݍ���
            if ($('#searchInfo').size() == 0) {
                return;
            }
            t.sCond.loadConditionsByJSON($('#searchInfo').html());
            
            // �C���v���b�V�������O�̑��M
            var e = new Object();
            e.conditions = t.sCond.getCondition();
            e.impressionInfo = t.sCond.getDataByJSON($('#implessionLogInfo').html());
            t.ilMgr.update(e);
            
            // ���X�i�̐ݒ�
            t.uiMgr.assignListeners();
            
            // PR�����擾
            t.uiMgr.replacePrHtml($('#prUrl'), $('#asc_lst_ttlbHtml'));
            
            // �������̏�����
            t.hMgr.initialize(e);
        }
    }
    
    var ini = new Initializer();
    
    if (location.href.indexOf('#') == -1) {
        // URL�Ƀn�b�V���^�O���܂܂�Ă��Ȃ��i���_�C���N�g���Ȃ��j�ꍇ
        $(document).ready(ini.onload);
    }
})(window);
