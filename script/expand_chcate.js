function expandchcate(tgt,bt,firstline) {
	var tgtul=document.getElementById(tgt);
	var tgtli = tgtul.getElementsByTagName("li");
	var tgtdiv=document.getElementById(bt);
	if(tgtul!=null&&tgtli!=null&&tgtdiv!=null){
		for(var i=firstline; i < tgtli.length;i++){
			if(tgtli.item(i).style.display == "none"){
				tgtli.item(i).style.display = "block";
				tgtdiv.getElementsByTagName("a").item(0).style.display="none";
				tgtdiv.getElementsByTagName("a").item(1).style.display="block";
			} else {
				tgtli.item(i).style.display = "none";
				tgtdiv.getElementsByTagName("a").item(0).style.display="block";
				tgtdiv.getElementsByTagName("a").item(1).style.display="none";
			}
		}
	}
}

function init(mode, pageNum) {
	var elements = document.getElementsByName("ch_showcount");
	
	var ch_showcount = 0;
	var ch_no  = "";
	var kk = 0;

	//���J�e�S���̐����[�v����
	for(var k=0 ; k<elements.length ; k++){
		ch_showcount = document.getElementsByName("ch_showcount")[k].value;
		
		ch_no = document.getElementsByName("ch_no")[k].value;
		
		// �\���w�萔��0�̏ꍇ���J�e�S���̂݌������
		kk = k + 1;
		
		if(ch_showcount == 0) {
			disp("expand1"+ kk,"init1"+ kk);
		}
		
		// �h�����_�E���\��������
		// ���J�e�S���\��������  explst ���J�e���
	    var tgtul=document.getElementById("explst"+ pageNum+kk);
	    
		if(tgtul!=null){
			var tgtli=tgtul.getElementsByTagName("li");
			//�ǂ������\���ɂ��邩
			
			for(var j=ch_showcount;j<tgtli.length;j++){
				tgtli[j].style.display = "none";
			}
		}
	}
}


function disp(hide,disp) {
	var divhide=document.getElementById(hide);
	if(divhide!=null) divhide.style.display="none";
	var divdisp=document.getElementById(disp);
	if(divdisp!=null) divdisp.style.display="block";
}


// ���J�e�S���O���\���̏ꍇ�g�p�@�S���\��
function dispall(hide,disp,ch_no) {
	var divhide=document.getElementById(hide);
	if(divhide!=null) divhide.style.display="none";
	var divdisp=document.getElementById(disp);
	if(divdisp!=null) {
		divdisp.style.display="block";
		
		
	    var tgtul=document.getElementById("explst1"+ ch_no);
	    
		if(tgtul!=null){
			var tgtli=tgtul.getElementsByTagName("li");
			//���ׂĕ\��
			for(var j=0 ; j<tgtli.length; j++){
			
				tgtli[j].style.display = "block";
				
			}
		}
	}
}

	//��20120406 AMS �ǉ� start��
//���i�ю��R���͗��G���^�[�L�[��������
function sbrkmKeyPress_chcate(event,name,sniSkUrl){
	if(event.keyCode != 0){
		onkey = event.keyCode;
	} else {
		onkey = event.charCode;
	}
	if(event.keyCode==13){
		sbrkmSearch_chcate(name,sniSkUrl);
	}
}
	//��20120406 AMS �ǉ� end��
	
//TshPrm �Ȃǂ� link�ɂ���


function sbrkmSearch_chcate(name,link){
	var searchParam = "";
	var actId = "";

	if(name == "taisho"){
		// �Ώۏ��i
		for(var i=0; i<document.taishoform.IPT_TSH_SHN_RQT.length; i++){
			if(document.taishoform.IPT_TSH_SHN_RQT[i].checked){
				if(searchParam == ""){
					searchParam = document.taishoform.IPT_TSH_SHN_RQT[i].value;
				} else {
					searchParam = searchParam + ',' + document.taishoform.IPT_TSH_SHN_RQT[i].value;
				}
			}
		}
		actId = link + "&IPT_TSH_SHN_RQT=" + searchParam;
		document.taishoform.action = actId;
	} else if(name == "ctlg"){
		// �f�ڃJ�^���O
		for(var i=0; i<document.ksictlgform.IPT_KSI_CTLG_RQT.length; i++){
			if(document.ksictlgform.IPT_KSI_CTLG_RQT[i].checked){
				if(searchParam == ""){
					searchParam = document.ksictlgform.IPT_KSI_CTLG_RQT[i].value;
				} else {
					searchParam = searchParam + ',' + document.ksictlgform.IPT_KSI_CTLG_RQT[i].value;
				}
			}
		}
		actId = link + "&IPT_KSI_CTLG_RQT=" + searchParam;
		document.ksictlgform.action = actId;
	} else if(name == "color"){
		// �F
		for(var i=0; i<document.colorform.IPT_COLOR_RQT.length; i++){
			if(document.colorform.IPT_COLOR_RQT[i].checked){
				if(searchParam == ""){
					searchParam = document.colorform.IPT_COLOR_RQT[i].value;
				} else {
					searchParam = searchParam + ',' + document.colorform.IPT_COLOR_RQT[i].value;
				}
			}
		}
		actId = link + "&IPT_COLOR_RQT=" + searchParam;
		document.colorform.action = actId;
	} else if(name == "brand"){
		// �u�����h
		for(var i=0; i<document.brandform.IPT_BRAND_ALL_CTL_RQT.length; i++){
			if(document.brandform.IPT_BRAND_ALL_CTL_RQT[i].checked){
				if(searchParam == ""){
					searchParam = document.brandform.IPT_BRAND_ALL_CTL_RQT[i].value;
				} else {
					searchParam = searchParam + ',' + document.brandform.IPT_BRAND_ALL_CTL_RQT[i].value;
				}
			}
		}
		actId = link + "&IPT_BRAND_ALL_CTL_RQT=" + searchParam;
		document.brandform.action = actId;
	} else if(name == "size"){
		var sizeCnt = document.sizeform.getElementsByTagName("li");
		// �T�C�Y
		if(sizeCnt.length == 1){
			if(document.sizeform.IPT_SIZE1_RQT0.checked){
				searchParam = document.sizeform.IPT_SIZE1_RQT0.value;
			}
		} else {
			for(var i=0; i<document.sizeform.IPT_SIZE1_RQT.length; i++){
				if(document.sizeform.IPT_SIZE1_RQT[i].checked){
					if(searchParam == ""){
						searchParam = document.sizeform.IPT_SIZE1_RQT[i].value;
					} else {
						searchParam = searchParam + ',' + document.sizeform.IPT_SIZE1_RQT[i].value;
					}
				}
			}
		}
		actId = link + "&IPT_SIZE1_RQT=" + searchParam;
	//��20120323 AMS �ǉ� start��
	//���i�ь���
	} else if(name == "kakk_hni"){
		actId = link;
		var kakk_hnist1 = document.kakkform.KAKK_HNIST1.value;
		var kakk_hnist2 = document.kakkform.KAKK_HNIST2.value;
		
		// ���i�����ݒ藓���u�����N�ł͂Ȃ��ꍇ�p�����[�^�ɕt�^
		if (kakk_hnist1 != '') {
			actId = actId + "&KAKK_HNIST1=" + kakk_hnist1;
		}
		// ���i����ݒ藓���u�����N�ł͂Ȃ��ꍇ�p�����[�^�ɕt�^
		if (kakk_hnist2 != '') {
			actId = actId + "&KAKK_HNIST2=" + kakk_hnist2;
		}
	}
	//��20120323 AMS �ǉ� end��

	location.href = actId;
}

function sbrkmSearch_chcateP1(name,link){
	var searchParam = "";
	var actId = "";

	if(name == "taisho"){
		// �Ώۏ��i
		for(var i=0; i<document.taishoform.IPT_TSH_SHN_RQT.length; i++){
			if(document.taishoform.IPT_TSH_SHN_RQT[i].checked){
				if(searchParam == ""){
					searchParam = document.taishoform.IPT_TSH_SHN_RQT[i].value;
				} else {
					searchParam = searchParam + '|' + document.taishoform.IPT_TSH_SHN_RQT[i].value;
				}
			}
		}
		actId = link + "&T=" + searchParam;
		document.taishoform.action = actId;
	} else if(name == "ctlg"){
		// �f�ڃJ�^���O
		for(var i=0; i<document.ksictlgform.IPT_KSI_CTLG_RQT.length; i++){
			if(document.ksictlgform.IPT_KSI_CTLG_RQT[i].checked){
				if(searchParam == ""){
					searchParam = document.ksictlgform.IPT_KSI_CTLG_RQT[i].value;
				} else {
					searchParam = searchParam + '|' + document.ksictlgform.IPT_KSI_CTLG_RQT[i].value;
				}
			}
		}
		actId = link + "&CT=" + searchParam;
		document.ksictlgform.action = actId;
	} else if(name == "color"){
		// �F
		for(var i=0; i<document.colorform.IPT_COLOR_RQT.length; i++){
			if(document.colorform.IPT_COLOR_RQT[i].checked){
				if(searchParam == ""){
					searchParam = document.colorform.IPT_COLOR_RQT[i].value;
				} else {
					searchParam = searchParam + '|' + document.colorform.IPT_COLOR_RQT[i].value;
				}
			}
		}
		actId = link + "&CL=" + searchParam;
		document.colorform.action = actId;
	} else if(name == "brand"){
		// �u�����h
		for(var i=0; i<document.blandform.IPT_BRAND_ALL_CTL_RQT.length; i++){
			if(document.blandform.IPT_BRAND_ALL_CTL_RQT[i].checked){
				if(searchParam == ""){
					searchParam = document.blandform.IPT_BRAND_ALL_CTL_RQT[i].value;
				} else {
					searchParam = searchParam + '|' + document.blandform.IPT_BRAND_ALL_CTL_RQT[i].value;
				}
			}
		}
		actId = link + "&B=" + searchParam;
		document.blandform.action = actId;
	} else if(name == "size"){
		var sizeCnt = document.sizeform.getElementsByTagName("li");
		// �T�C�Y
		for(var i=0; i<document.sizeform.IPT_SIZE1_RQT.length; i++){
			if(document.sizeform.IPT_SIZE1_RQT[i].checked){
				if(searchParam == ""){
					searchParam = document.sizeform.IPT_SIZE1_RQT[i].value;
				} else {
					searchParam = searchParam + '|' + document.sizeform.IPT_SIZE1_RQT[i].value;
				}
			}
		}
		actId = link + "&SZ=" + searchParam;
		document.sizeform.action = actId;
	//��20120323 AMS �ǉ� start��
	//���i�ь���
	} else if(name == "kakk_hni"){
		actId = link;
		var kakk_hnist1 = document.kakkform.KAKK_HNIST1.value;
		var kakk_hnist2 = document.kakkform.KAKK_HNIST2.value;
		
		// ���i�����ݒ藓���u�����N�ł͂Ȃ��ꍇ�p�����[�^�ɕt�^
		if (kakk_hnist1 != '') {
			actId = actId + "&PL=" + EscapeSJIS(kakk_hnist1);
		}
		// ���i����ݒ藓���u�����N�ł͂Ȃ��ꍇ�p�����[�^�ɕt�^
		if (kakk_hnist2 != '') {
			actId = actId + "&PH=" + EscapeSJIS(kakk_hnist2);
		}
		document.kakkform.action = actId;
	}
	//��20120323 AMS �ǉ� end��

	location.href = actId;
}

