// ----------------------------------------------------
//   Cookie�폜����JS
//   @param
//      ss_url:�T�[�r�X�T�[�u���b�gURL
// ----------------------------------------------------

function delOptCookies(ss_url) {
    
     var curCookie = document.cookie;        // �Y����ʂ�Cookie
     if (curCookie == null || curCookie.length == 0) {
         return;
     }
    
    // ���N�G�X�gURL�𐶐�
    var uri = ss_url + '/EPWB00/EPWB0015/dGetCookieExtCd';
    
    // Cookie�̏���l���擾
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
            // ����I���̏ꍇ�A���L�̏������s��
            if ("0" == status) {
                // Cookie�̏���l���擾����
                var totalNum = "0";   // Cookie�̐�
                var totalSize = "0";     // Cookie�̃T�C�Y
                var tshgItems = new Object();       // �폜�ΏۊO����
                
                for (var idx in data.ITEM) {
                    // �f�[�^�敪��"0"�̏ꍇ�A�e����l���擾����
                    if ("0" == data.ITEM[idx].MS_ID1) {
                        totalNum = data.ITEM[idx].VALUE1;
                        totalSize = data.ITEM[idx].VALUE2;
                    } else {
                        // �f�[�^�敪��"0"�ȊO�̏ꍇ�A�폜�ΏۊO���ڂ��擾����
                    	tshgItems[data.ITEM[idx].VALUE1] = data.ITEM[idx].VALUE1;
                    }
                }

                var cookieArray = curCookie.split("; ");   // �Y����ʂ�Cookie��
                var cookieSize = curCookie.length;        // �Y����ʂ�Cookie�T�C�Y
                
                // ����l�𒴂��Ă����ꍇ�ACookie�̍폜���������{����
                if (cookieArray.length > totalNum || cookieSize > totalSize) {
                    for (var i = 0; i < cookieArray.length; i++) {
                        var item = cookieArray[i].split("=");
                        if (typeof(tshgItems[item[0]]) == "undefined") {
                        	var expires = new Date();
                        	expires.setTime(expires.getTime()-1000);
                        	document.cookie = item[0] + "=;expires="+ expires.toGMTString() +";domain=.bellemaison.jp; path=/"; // �폜�������s��
                        }
                    }
                }
            }
        },
        error : function(xhr, status, error) {//�ʐM�G���[
        	 if ('timeout' == status) {
                 // �^�C���A�E�g�ꍇ�A�����𒆎~
                 return;
             }
        }
    });
}