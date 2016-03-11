// ----------------------------------------------------
// Web�r�[�R���p�t�q�k�擾����
// ��EscapeSJIS�֐��𗘗p���Ă��邽�߁A�uencode.js�v�̃��[�h���K�v
//  @param nothing
// ----------------------------------------------------
function getBeaconUrl() {
    // �摜�t�@�C���p�X�i�Œ�j
    var imgFilePath = "http://www.bellemaison.jp/pc/for_app/img/contents_clear?";
    // �z�X�g������ŏ��̃h�b�g�܂ł̕�����iURL�敪�j�𒊏o
    var urlHost = "";
    if (location.hostname != null) {
        var hashes = location.hostname.split('.');
        if (hashes != null && 0 < hashes.length) {
            urlHost = hashes[0];
        }
    }
    // �h���C���ȍ~��URL���擾
    var urlPath = ""
    if (location.pathname != null) {
    	urlPath = location.pathname;
    }
    // �p�����[�^���擾
    var param = "";
    if (location.href != null) {
        var hashes = location.href.split('?');
        if (hashes != null && hashes.length == 2) {
            param = "?" + hashes[1];
        }
    }
    // URL���G���R�[�h(SJIS)
    urlPath = urlPath + param;
    urlPath = EscapeSJIS(urlPath);
    // �X���b�V���ƃA�X�^���X�N�̂ݒǉ��ŃG���R�[�h
	urlPath = urlPath.replace(/\u002f/g, "%2F");
	urlPath = urlPath.replace(/\u002a/g, "%2A");

    // �L���b�V���Ή��i�~���b���p�����[�^�ɒǉ��j
    var tmpDate = new Date();
    var paramTime = '&CACHE_NOUSE_TIME=' + tmpDate.getTime();

    return imgFilePath + 'URL_HOST=' + urlHost + '&URL_PATH=' + urlPath + paramTime;
}
