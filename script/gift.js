var tb_pathToImage = "/pc/for_app/img/gift/loading.gif";

//��ʂ̃X�N���[��
function moveTo(intnum,gmnkbn){
	var gmnId = "";
	if(gmnkbn =="3"){
		gmnId = "okr_ns";
	}else if(gmnkbn =="2"){
		gmnId = "dkn_ctlg";
	}else if(gmnkbn =="1"){
		gmnId = "hs_group";
	}
	var targetOffset = $('#'+gmnId+intnum).offset().top;
	$('html,body').delay(1000).animate({scrollTop: targetOffset}, "slow");
}
// �ݒ�ł��Ȃ����͍��ڂ̒l���N���A���鏈��
function setDisableValues() {
	// �A�ԂȂ��ł̂��I���̃u���b�N���擾�ł����ꍇ��EPJB0077����̌Ăяo���Ɣ���A�ȍ~�͘A�ԂȂ��ŏ���
	var elementGftYtKbnBln = document.getElementById("GFT_YT_KBN_BLN");
	if (elementGftYtKbnBln != null) {
		// �C���f�b�N�X�w��Ȃ��ŏ���
		setDisableValuesByIndex("");
	}
	else {
		// �A�Ԃ̍ő�l�́A�w�̂��I���x�̕\���u���b�N�̐����g�p����
		var maxIdx = document.getElementsByName("GFT_YT_KBN_BLN").length;
		// �A�Ԃ̐��������[�v
		for (var idx = 0; idx < maxIdx; idx ++) {
			setDisableValuesByIndex(idx);
		}
	}
}
// �w��ʒu�̃M�t�g�ݒ������������
function setDisableValuesByIndex(idx) {
	// �̂��ݒ�
	var elementNoshiSetGif = document.getElementById("noshi-set-gft" + idx);
	if (elementNoshiSetGif !=null && elementNoshiSetGif.style.display == "none") {
		// �̂�����
		document.getElementById("NSGK_SELCF" + idx).value = "0";
		// �̂��\�������e
		document.getElementById("NS_HS_KNY_CD" + idx).value = "";
		// �̂��\������
		//   �l�E�A��
		document.getElementById("NSGK_KJ_VC" + idx).value = "";
		//   �v�w�Ƒ��A��(��)
		document.getElementById("KZK_RNM_SEI_KJ_VC" + idx).value = "";
		//   �v�w�Ƒ��A��(��)
		document.getElementById("KZK_RNM_MEI_KJ_VC" + idx).value = "";
		// ������
		document.getElementById("NS_SHR_KBN" + idx).value = "";
		// �̂��\����(����)
		document.getElementById("NS_CONTENTS_OTH" + idx).value = "";
	}
	
	// �����J�[�h
	var elementMeimeiCard = document.getElementById("meimei-card" + idx);
	if (elementMeimeiCard !=null && elementMeimeiCard.style.display == "none") {
		// �����J�[�h�䎆
		document.getElementById("MSCRD_SBT_MEMEI" + idx).value = "";
		// �����J�[�h(�����O)
		document.getElementById("MEMEI_CRD_KJ" + idx).value = "";
		// �����J�[�h(�ӂ肪��)
		document.getElementById("MEMEI_CRD_KN" + idx).value = "";
	}
	
	// �̂��ݒ�̐�����
	var elementMizSetting = document.getElementById("mizhiki" + idx);
	if (elementMizSetting !=null && elementMizSetting.style.display == "none") {
		// ������
		document.getElementById("NS_SHR_KBN" + idx).value = "";
	}
	
	// �̂��\����(����)
	var elementNoshiOther = document.getElementById("noshi-other" + idx);
	if (elementNoshiOther !=null && elementNoshiOther.style.display == "none") {
		// �̂��\����(����)
		document.getElementById("NS_CONTENTS_OTH" + idx).value = "";
	}
	
	// ���b�s���O
	var elementRapGftNoset = document.getElementById("rap-gft-noset" + idx);
	var elementRapGftSetting = document.getElementById("rap-gft-setting" + idx);
	if ((elementRapGftNoset !=null && elementRapGftNoset.style.display == "none") 
		&& (elementRapGftSetting !=null && elementRapGftSetting.style.display == "none")) {
		// ���b�s���O
		document.getElementById("SIN_RAP_KBN_RAP" + idx).value = "";
	}
	
	// ���
	var elementRapHsNoset = document.getElementById("rap-hs-noset" + idx);
	var elementRapHsSetting = document.getElementById("rap-hs-setting" + idx);
	if ((elementRapHsNoset !=null && elementRapHsNoset.style.display == "none") 
		&& (elementRapHsSetting !=null && elementRapHsSetting.style.display == "none")) {
		// �
		document.getElementById("SIN_RAP_KBN_HS" + idx).value = "";
	}

	// ���b�Z�[�W�J�[�h
	var elementMessageNone = document.getElementById("message-none" + idx);
	var elementMessageTeik = document.getElementById("message-teik" + idx);
	var elementMessageFree = document.getElementById("message-free" + idx);
	if (elementMessageNone != null && elementMessageTeik != null && elementMessageFree != null) {
		// ��^�J�[�h���I�΂�Ă��Ȃ��ꍇ
		if (elementMessageTeik != null && elementMessageTeik.style.display == "none") {
			document.getElementById("MSCRD_SBT_TEKEI" + idx).value = "";
		}
		// �t���[���b�Z�[�W���I�΂�Ă��Ȃ��ꍇ
		if (elementMessageFree != null && elementMessageFree.style.display == "none") {
			// ���b�Z�[�W�䎆
			document.getElementById("MSCRD_SBT_DAIS" + idx).value = "";
			// ���b�Z�[�W�ᕶ
			document.getElementById("MSG_RBN_BNRI_CD" + idx).value = "";
			// �t�H���g���
			document.getElementById("FNT_SBT" + idx).value = "";
			// ���b�Z�[�W�P�`�W
			document.getElementById("MSG1" + idx).value = "";
			document.getElementById("MSG2" + idx).value = "";
			document.getElementById("MSG3" + idx).value = "";
			document.getElementById("MSG4" + idx).value = "";
			document.getElementById("MSG5" + idx).value = "";
			document.getElementById("MSG6" + idx).value = "";
			document.getElementById("MSG7" + idx).value = "";
			document.getElementById("MSG8" + idx).value = "";
		}
		if (elementMessageNone.style.display == "none" && elementMessageTeik.style.display == "none" && elementMessageFree.style.display == "none") {
			document.getElementById("radio"+idx+"-011").checked = true;
			document.getElementById("radio"+idx+"-021").checked = false;
			document.getElementById("radio"+idx+"-031").checked = false;
			document.getElementById("MSCRD" + idx).value='1';
		}
	}
}

// ���C�g�{�b�N�X�������Ɍ��̃X�N���[���ʒu�ɖ߂����߁A���݂̃X�N���[���ʒu���擾
function getScroll(){
	var scroll = $(document).scrollTop();
    document.form01.SCROLL_TOP.value = scroll;
}
