function GetQueryString() {
	if (1 < document.location.search.length) {
		var query = document.location.search.substring(1);
		var parameters = query.split('&');
		var result = new Object();
		for (var i = 0; i < parameters.length; i++) {
			var element = parameters[i].split('=');
			var paramName = decodeURIComponent(element[0]);
			var paramValue = encodeURI(element[1]);
			result[paramName] = decodeURIComponent(paramValue);
		}
		return result;
	}
	return null;
}

var days_timer_cnt = 0;
var days_timer = setInterval('days_timer_func()',1000);
function days_timer_func() {
if ($('.sn_lc99').length == 0 && $('.sn_mc99').length == 0 && $('.sn_sc99').length == 0 && $('.ft_days99').length == 0) {

//�p�����[�^�擾
param = GetQueryString();

//DAYS����
if(param["B"] == "1278") {

//-------------------------����J�e
//���f�B�[�X�t�@�b�V����
if(param["C"] == "1") {
	$('.bgcheck01').before('<div class="sn_lc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00193">�x�����]���Ŕ̔����̂��ׂẴ��f�B�[�X�t�@�b�V����</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00202">�x�����]���Ŕ̔����̂��ׂẴ��f�B�[�X�t�@�b�V�����͂�����</a></div>');
}

//����������C���i�[��p�W���}
if(param["C"] == "2") {
	$('.bgcheck01').before('<div class="sn_lc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=2&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00194">�x�����]���Ŕ̔����̂��ׂĂ̏���������C���i�[��p�W���}</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=2&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00203">�x�����]���Ŕ̔����̂��ׂĂ̏���������C���i�[��p�W���}�͂�����</a></div>');
}

//�C��o�b�O��A�N�Z�T���[
if(param["C"] == "3") {
	$('.bgcheck01').before('<div class="sn_lc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=3&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00195">�x�����]���Ŕ̔����̂��ׂĂ̌C��o�b�O��A�N�Z�T���[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=3&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00204">�x�����]���Ŕ̔����̂��ׂĂ̌C��o�b�O��A�N�Z�T���[�͂�����</a></div>');
}

//�Ƌ漏��[
if(param["C"] == "9") {
	$('.bgcheck01').before('<div class="sn_lc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=9&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00196">�x�����]���Ŕ̔����̂��ׂẲƋ漏��[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=9&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00205">�x�����]���Ŕ̔����̂��ׂẲƋ漏��[�͂�����</a></div>');
}

//�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "12") {
	$('.bgcheck01').before('<div class="sn_lc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=12&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00197">�x�����]���Ŕ̔����̂��ׂẴJ�[�e������O��\�t�@�[�J�o�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=12&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00206">�x�����]���Ŕ̔����̂��ׂẴJ�[�e������O��\�t�@�[�J�o�[�͂�����</a></div>');
}

//�Q�凌z�c��x�b�h
if(param["C"] == "13") {
	$('.bgcheck01').before('<div class="sn_lc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=13&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00198">�x�����]���Ŕ̔����̂��ׂĂ̐Q�凌z�c��x�b�h</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=13&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00207">�x�����]���Ŕ̔����̂��ׂĂ̐Q�凌z�c��x�b�h�͂�����</a></div>');
}

//�L�b�`���p�i��������
if(param["C"] == "15") {
	$('.bgcheck01').before('<div class="sn_lc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=15&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00199">�x�����]���Ŕ̔����̂��ׂẴL�b�`���p�i��������</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=15&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00208">�x�����]���Ŕ̔����̂��ׂẴL�b�`���p�i��������͂�����</a></div>');
}

//�o�X��g�C����|������^�I��
if(param["C"] == "18") {
	$('.bgcheck01').before('<div class="sn_lc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=18&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00200">�x�����]���Ŕ̔����̂��ׂẴo�X��g�C����|������^�I��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=18&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00209">�x�����]���Ŕ̔����̂��ׂẴo�X��g�C����|������^�I���͂�����</a></div>');
}

//�C���e���A�G�ݥ�X���b�p
if(param["C"] == "10") {
	$('.bgcheck01').before('<div class="sn_lc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00201">�x�����]���Ŕ̔����̂��ׂẴC���e���A�G�ݥ�X���b�p</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00210">�x�����]���Ŕ̔����̂��ׂẴC���e���A�G�ݥ�X���b�p�͂�����</a></div>');
}


//-------------------------�����J�e
//�R�[�g�^���f�B�[�X�t�@�b�V����
if(param["C"] == "100") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00211">�x�����]���Ŕ̔����̂��ׂẴR�[�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00307">�x�����]���Ŕ̔����̂��ׂẴR�[�g�͂�����</a></div>');
}

//�W���P�b�g��u���]���^���f�B�[�X�t�@�b�V����
if(param["C"] == "101") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=101&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00212">�x�����]���Ŕ̔����̂��ׂẴW���P�b�g��u���]��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=101&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00308">�x�����]���Ŕ̔����̂��ׂẴW���P�b�g��u���]���͂�����</a></div>');
}

//�`���j�b�N������s�[�X�^���f�B�[�X�t�@�b�V����
if(param["C"] == "102") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=102&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00213">�x�����]���Ŕ̔����̂��ׂẴ`���j�b�N������s�[�X</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=102&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00309">�x�����]���Ŕ̔����̂��ׂẴ`���j�b�N������s�[�X�͂�����</a></div>');
}

//�J�[�f�B�K����{������x�X�g�^���f�B�[�X�t�@�b�V����
if(param["C"] == "109") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=109&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00214">�x�����]���Ŕ̔����̂��ׂẴJ�[�f�B�K����{������x�X�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=109&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00310">�x�����]���Ŕ̔����̂��ׂẴJ�[�f�B�K����{������x�X�g�͂�����</a></div>');
}

//�V���c��u���E�X�^���f�B�[�X�t�@�b�V����
if(param["C"] == "104") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=104&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00215">�x�����]���Ŕ̔����̂��ׂẴV���c��u���E�X</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=104&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00311">�x�����]���Ŕ̔����̂��ׂẴV���c��u���E�X�͂�����</a></div>');
}

//�j�b�g�^���f�B�[�X�t�@�b�V����
if(param["C"] == "105") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=105&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00216">�x�����]���Ŕ̔����̂��ׂẴj�b�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=105&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00312">�x�����]���Ŕ̔����̂��ׂẴj�b�g�͂�����</a></div>');
}

//�J�b�g�\�[�T�V���c�^���f�B�[�X�t�@�b�V����
if(param["C"] == "106") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=106&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00217">�x�����]���Ŕ̔����̂��ׂẴJ�b�g�\�[�T�V���c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=106&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00313">�x�����]���Ŕ̔����̂��ׂẴJ�b�g�\�[�T�V���c�͂�����</a></div>');
}

//�A���T���u����Z�b�g���i�^���f�B�[�X�t�@�b�V����
if(param["C"] == "107") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=107&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00218">�x�����]���Ŕ̔����̂��ׂẴA���T���u����Z�b�g���i</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=107&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00314">�x�����]���Ŕ̔����̂��ׂẴA���T���u����Z�b�g���i�͂�����</a></div>');
}

//�p�[�J��g���[�i�[�^���f�B�[�X�t�@�b�V����
if(param["C"] == "110") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=110&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00219">�x�����]���Ŕ̔����̂��ׂẴp�[�J��g���[�i�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=110&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00315">�x�����]���Ŕ̔����̂��ׂẴp�[�J��g���[�i�[�͂�����</a></div>');
}

//�p���c�^���f�B�[�X�t�@�b�V����
if(param["C"] == "112") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=112&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00220">�x�����]���Ŕ̔����̂��ׂẴp���c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=112&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00316">�x�����]���Ŕ̔����̂��ׂẴp���c�͂�����</a></div>');
}

//�X�J�[�g�^���f�B�[�X�t�@�b�V����
if(param["C"] == "111") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=111&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00221">�x�����]���Ŕ̔����̂��ׂẴX�J�[�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=111&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00317">�x�����]���Ŕ̔����̂��ׂẴX�J�[�g�͂�����</a></div>');
}

//���f�B�[�X�X�[�c�^���f�B�[�X�t�@�b�V����
if(param["C"] == "103") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=103&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00222">�x�����]���Ŕ̔����̂��ׂẴ��f�B�[�X�X�[�c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=103&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00318">�x�����]���Ŕ̔����̂��ׂẴ��f�B�[�X�X�[�c�͂�����</a></div>');
}

//�t�H�[�}���E�F�A�^���f�B�[�X�t�@�b�V����
if(param["C"] == "114") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=114&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00223">�x�����]���Ŕ̔����̂��ׂẴt�H�[�}���E�F�A</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=114&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00319">�x�����]���Ŕ̔����̂��ׂẴt�H�[�}���E�F�A�͂�����</a></div>');
}

//���ߥ�����^���f�B�[�X�t�@�b�V����
if(param["C"] == "113") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=113&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00224">�x�����]���Ŕ̔����̂��ׂĂ̗��ߥ����</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=113&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00320">�x�����]���Ŕ̔����̂��ׂĂ̗��ߥ�����͂�����</a></div>');
}

//�u���W���[�^����������C���i�[��p�W���}
if(param["C"] == "200") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=200&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00225">�x�����]���Ŕ̔����̂��ׂẴu���W���[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=200&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00321">�x�����]���Ŕ̔����̂��ׂẴu���W���[�͂�����</a></div>');
}

//�u���W���[���V���[�c�Z�b�g�^����������C���i�[��p�W���}
if(param["C"] == "201") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=201&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00226">�x�����]���Ŕ̔����̂��ׂẴu���W���[���V���[�c�Z�b�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=201&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00322">�x�����]���Ŕ̔����̂��ׂẴu���W���[���V���[�c�Z�b�g�͂�����</a></div>');
}

//�V���[�c�^����������C���i�[��p�W���}
if(param["C"] == "202") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=202&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00227">�x�����]���Ŕ̔����̂��ׂẴV���[�c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=202&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00323">�x�����]���Ŕ̔����̂��ׂẴV���[�c�͂�����</a></div>');
}

//�C���i�[�����������^����������C���i�[��p�W���}
if(param["C"] == "203") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=203&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00228">�x�����]���Ŕ̔����̂��ׂẴC���i�[����������</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=203&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00324">�x�����]���Ŕ̔����̂��ׂẴC���i�[�����������͂�����</a></div>');
}

//�����W�F���[�^����������C���i�[��p�W���}
if(param["C"] == "204") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=204&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00229">�x�����]���Ŕ̔����̂��ׂẴ����W�F���[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=204&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00325">�x�����]���Ŕ̔����̂��ׂẴ����W�F���[�͂�����</a></div>');
}

//�K�[�h����␳��������ՃC���i�[�^����������C���i�[��p�W���}
if(param["C"] == "205") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=205&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00230">�x�����]���Ŕ̔����̂��ׂẴK�[�h����␳��������ՃC���i�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=205&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00326">�x�����]���Ŕ̔����̂��ׂẴK�[�h����␳��������ՃC���i�[�͂�����</a></div>');
}

//�C����^�C�c��X�g�b�L���O�^����������C���i�[��p�W���}
if(param["C"] == "206") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=206&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00231">�x�����]���Ŕ̔����̂��ׂĂ̌C����^�C�c��X�g�b�L���O</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=206&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00327">�x�����]���Ŕ̔����̂��ׂĂ̌C����^�C�c��X�g�b�L���O�͂�����</a></div>');
}

//���M���X��X�p�b�c�^����������C���i�[��p�W���}
if(param["C"] == "209") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=209&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00232">�x�����]���Ŕ̔����̂��ׂẴ��M���X��X�p�b�c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=209&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00328">�x�����]���Ŕ̔����̂��ׂẴ��M���X��X�p�b�c�͂�����</a></div>');
}

//���[���E�F�A��p�W���}�^����������C���i�[��p�W���}
if(param["C"] == "207") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=207&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00233">�x�����]���Ŕ̔����̂��ׂẴ��[���E�F�A��p�W���}</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=207&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00329">�x�����]���Ŕ̔����̂��ׂẴ��[���E�F�A��p�W���}�͂�����</a></div>');
}

//�p���v�X����[�t�@�[�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "301") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=301&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00234">�x�����]���Ŕ̔����̂��ׂẴp���v�X����[�t�@�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=301&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00330">�x�����]���Ŕ̔����̂��ׂẴp���v�X����[�t�@�[�͂�����</a></div>');
}

//�t���b�g�V���[�Y��o���G�V���[�Y�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "302") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=302&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00235">�x�����]���Ŕ̔����̂��ׂẴt���b�g�V���[�Y��o���G�V���[�Y</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=302&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00331">�x�����]���Ŕ̔����̂��ׂẴt���b�g�V���[�Y��o���G�V���[�Y�͂�����</a></div>');
}

//�u�[�c�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "300") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=300&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00236">�x�����]���Ŕ̔����̂��ׂẴu�[�c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=300&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00332">�x�����]���Ŕ̔����̂��ׂẴu�[�c�͂�����</a></div>');
}

//�T���_����~���[���^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "303") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=303&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00237">�x�����]���Ŕ̔����̂��ׂẴT���_����~���[��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=303&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00333">�x�����]���Ŕ̔����̂��ׂẴT���_����~���[���͂�����</a></div>');
}

//���C���u�[�c����C���V���[�Y�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "304") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=304&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00238">�x�����]���Ŕ̔����̂��ׂẴ��C���u�[�c����C���V���[�Y</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=304&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00334">�x�����]���Ŕ̔����̂��ׂẴ��C���u�[�c����C���V���[�Y�͂�����</a></div>');
}

//�X�j�[�J�[��T�{��J�W���A���V���[�Y�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "305") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=305&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00239">�x�����]���Ŕ̔����̂��ׂẴX�j�[�J�[��T�{��J�W���A���V���[�Y</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=305&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00335">�x�����]���Ŕ̔����̂��ׂẴX�j�[�J�[��T�{��J�W���A���V���[�Y�͂�����</a></div>');
}

//���e����N��G�N�T�T�C�Y�V���[�Y�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "316") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=316&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00240">�x�����]���Ŕ̔����̂��ׂĂ̔��e����N��G�N�T�T�C�Y�V���[�Y</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=316&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00336">�x�����]���Ŕ̔����̂��ׂĂ̔��e����N��G�N�T�T�C�Y�V���[�Y�͂�����</a></div>');
}

//�C�̒��~����������O�b�Y�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "306") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=306&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00241">�x�����]���Ŕ̔����̂��ׂĂ̌C�̒��~����������O�b�Y</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=306&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00337">�x�����]���Ŕ̔����̂��ׂĂ̌C�̒��~����������O�b�Y�͂�����</a></div>');
}

//�o�b�O(��)�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "307") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=307&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00242">�x�����]���Ŕ̔����̂��ׂẴo�b�O(��)</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=307&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00338">�x�����]���Ŕ̔����̂��ׂẴo�b�O(��)�͂�����</a></div>');
}

//���z��J�[�h�P�[�X��L�[�z���_�[�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "310") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=310&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00243">�x�����]���Ŕ̔����̂��ׂĂ̍��z��J�[�h�P�[�X��L�[�z���_�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=310&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00339">�x�����]���Ŕ̔����̂��ׂĂ̍��z��J�[�h�P�[�X��L�[�z���_�[�͂�����</a></div>');
}

//�|�[�`��o�b�O�C���o�b�O�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "308") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=308&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00244">�x�����]���Ŕ̔����̂��ׂẴ|�[�`��o�b�O�C���o�b�O</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=308&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00340">�x�����]���Ŕ̔����̂��ׂẴ|�[�`��o�b�O�C���o�b�O�͂�����</a></div>');
}

//�A�N�Z�T���[��W���G���[�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "309") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=309&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00245">�x�����]���Ŕ̔����̂��ׂẴA�N�Z�T���[��W���G���[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=309&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00341">�x�����]���Ŕ̔����̂��ׂẴA�N�Z�T���[��W���G���[�͂�����</a></div>');
}

//�w�A�A�N�Z�T���[�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "317") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=317&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00246">�x�����]���Ŕ̔����̂��ׂẴw�A�A�N�Z�T���[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=317&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00342">�x�����]���Ŕ̔����̂��ׂẴw�A�A�N�Z�T���[�͂�����</a></div>');
}

//�r���v�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "311") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=311&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00247">�x�����]���Ŕ̔����̂��ׂĂ̘r���v</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=311&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00343">�x�����]���Ŕ̔����̂��ׂĂ̘r���v�͂�����</a></div>');
}

//�x���g�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "312") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=312&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00248">�x�����]���Ŕ̔����̂��ׂẴx���g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=312&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00344">�x�����]���Ŕ̔����̂��ׂẴx���g�͂�����</a></div>');
}

//�X�J�[�t��X�g�[����}�t���[�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "313") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=313&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00249">�x�����]���Ŕ̔����̂��ׂẴX�J�[�t��X�g�[����}�t���[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=313&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00345">�x�����]���Ŕ̔����̂��ׂẴX�J�[�t��X�g�[����}�t���[�͂�����</a></div>');
}

//�X�q�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "314") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=314&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00250">�x�����]���Ŕ̔����̂��ׂĂ̖X�q</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=314&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00346">�x�����]���Ŕ̔����̂��ׂĂ̖X�q�͂�����</a></div>');
}

//�P����C���O�b�Y�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "319") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=319&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00251">�x�����]���Ŕ̔����̂��ׂĂ̎P����C���O�b�Y</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=319&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00347">�x�����]���Ŕ̔����̂��ׂĂ̎P����C���O�b�Y�͂�����</a></div>');
}

//�������Տ����^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "318") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=318&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00252">�x�����]���Ŕ̔����̂��ׂĂ̊������Տ���</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=318&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00348">�x�����]���Ŕ̔����̂��ׂĂ̊������Տ����͂�����</a></div>');
}

//�t�@�b�V�����G�݁^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "315") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=315&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00253">�x�����]���Ŕ̔����̂��ׂẴt�@�b�V�����G��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=315&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00349">�x�����]���Ŕ̔����̂��ׂẴt�@�b�V�����G�݂͂�����</a></div>');
}

//�i�[�X�T���_����i�[�X�V���[�Y�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "320") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=320&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00254">�x�����]���Ŕ̔����̂��ׂẴi�[�X�T���_����i�[�X�V���[�Y</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=320&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00350">�x�����]���Ŕ̔����̂��ׂẴi�[�X�T���_����i�[�X�V���[�Y�͂�����</a></div>');
}

//�e�[�u����f�X�N������^�Ƌ漏��[
if(param["C"] == "900") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=900&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00255">�x�����]���Ŕ̔����̂��ׂẴe�[�u����f�X�N�������</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=900&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00351">�x�����]���Ŕ̔����̂��ׂẴe�[�u����f�X�N������͂�����</a></div>');
}

//�`�F�A��֎q��X�c�[���^�Ƌ漏��[
if(param["C"] == "910") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=910&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00256">�x�����]���Ŕ̔����̂��ׂẴ`�F�A��֎q��X�c�[��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=910&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00352">�x�����]���Ŕ̔����̂��ׂẴ`�F�A��֎q��X�c�[���͂�����</a></div>');
}

//�\�t�@�[��\�t�@�[�x�b�h����֎q�^�Ƌ漏��[
if(param["C"] == "901") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=901&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00257">�x�����]���Ŕ̔����̂��ׂẴ\�t�@�[��\�t�@�[�x�b�h����֎q</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=901&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00353">�x�����]���Ŕ̔����̂��ׂẴ\�t�@�[��\�t�@�[�x�b�h����֎q�͂�����</a></div>');
}

//�x�b�h��}�b�g���X�^�Ƌ漏��[
if(param["C"] == "902") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=902&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00258">�x�����]���Ŕ̔����̂��ׂẴx�b�h��}�b�g���X</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=902&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00354">�x�����]���Ŕ̔����̂��ׂẴx�b�h��}�b�g���X�͂�����</a></div>');
}

//�~���[����䥃p�[�e�[�V�����^�Ƌ漏��[
if(param["C"] == "912") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=912&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00259">�x�����]���Ŕ̔����̂��ׂẴ~���[����䥃p�[�e�[�V����</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=912&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00355">�x�����]���Ŕ̔����̂��ׂẴ~���[����䥃p�[�e�[�V�����͂�����</a></div>');
}

//�����W�䥃L�b�`�����[�^�Ƌ漏��[
if(param["C"] == "905") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=905&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00260">�x�����]���Ŕ̔����̂��ׂẴ����W�䥃L�b�`�����[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=905&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00356">�x�����]���Ŕ̔����̂��ׂẴ����W�䥃L�b�`�����[�͂�����</a></div>');
}

//�e���r�䥃��r���O���[�^�Ƌ漏��[
if(param["C"] == "903") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=903&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00261">�x�����]���Ŕ̔����̂��ׂẴe���r�䥃��r���O���[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=903&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00357">�x�����]���Ŕ̔����̂��ׂẴe���r�䥃��r���O���[�͂�����</a></div>');
}

//�{�I����b�N��ǖʎ��[�^�Ƌ漏��[
if(param["C"] == "906") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=906&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00262">�x�����]���Ŕ̔����̂��ׂĂ̖{�I����b�N��ǖʎ��[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=906&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00358">�x�����]���Ŕ̔����̂��ׂĂ̖{�I����b�N��ǖʎ��[�͂�����</a></div>');
}

//�^���X��`�F�X�g��ߗގ��[�^�Ƌ漏��[
if(param["C"] == "907") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=907&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00263">�x�����]���Ŕ̔����̂��ׂẴ^���X��`�F�X�g��ߗގ��[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=907&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00359">�x�����]���Ŕ̔����̂��ׂẴ^���X��`�F�X�g��ߗގ��[�͂�����</a></div>');
}

//�����ꥃN���[�[�b�g���[�^�Ƌ漏��[
if(param["C"] == "913") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=913&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00264">�x�����]���Ŕ̔����̂��ׂẲ����ꥃN���[�[�b�g���[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=913&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00360">�x�����]���Ŕ̔����̂��ׂẲ����ꥃN���[�[�b�g���[�͂�����</a></div>');
}

//�t���[�{�b�N�X��������[�^�Ƌ漏��[
if(param["C"] == "914") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=914&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00265">�x�����]���Ŕ̔����̂��ׂẴt���[�{�b�N�X��������[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=914&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00361">�x�����]���Ŕ̔����̂��ׂẴt���[�{�b�N�X��������[�͂�����</a></div>');
}

//���ʏ�������h���[��g�C�����[�^�Ƌ漏��[
if(param["C"] == "909") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=909&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00266">�x�����]���Ŕ̔����̂��ׂĂ̐��ʏ�������h���[��g�C�����[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=909&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00362">�x�����]���Ŕ̔����̂��ׂĂ̐��ʏ�������h���[��g�C�����[�͂�����</a></div>');
}

//���ʔ�����֥���O���[�^�Ƌ漏��[
if(param["C"] == "908") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=908&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00267">�x�����]���Ŕ̔����̂��ׂẲ��ʔ�����֥���O���[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=908&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00363">�x�����]���Ŕ̔����̂��ׂẲ��ʔ�����֥���O���[�͂�����</a></div>');
}

//�w�K����L�b�Y���[�^�Ƌ漏��[
if(param["C"] == "915") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=915&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00268">�x�����]���Ŕ̔����̂��ׂĂ̊w�K����L�b�Y���[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=915&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00364">�x�����]���Ŕ̔����̂��ׂĂ̊w�K����L�b�Y���[�͂�����</a></div>');
}

//�J�[�e����u���C���h�^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "1200") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1200&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00269">�x�����]���Ŕ̔����̂��ׂẴJ�[�e����u���C���h</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1200&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00365">�x�����]���Ŕ̔����̂��ׂẴJ�[�e����u���C���h�͂�����</a></div>');
}

//���O��J�[�y�b�g�^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "1201") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1201&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00270">�x�����]���Ŕ̔����̂��ׂẴ��O��J�[�y�b�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1201&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00366">�x�����]���Ŕ̔����̂��ׂẴ��O��J�[�y�b�g�͂�����</a></div>');
}

//���փ}�b�g��}�b�g�^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "1207") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1207&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00271">�x�����]���Ŕ̔����̂��ׂĂ̌��փ}�b�g��}�b�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1207&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00367">�x�����]���Ŕ̔����̂��ׂĂ̌��փ}�b�g��}�b�g�͂�����</a></div>');
}

//�\�t�@�[�J�o�[��N�b�V�����^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "1204") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1204&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00272">�x�����]���Ŕ̔����̂��ׂẴ\�t�@�[�J�o�[��N�b�V����</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1204&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00368">�x�����]���Ŕ̔����̂��ׂẴ\�t�@�[�J�o�[��N�b�V�����͂�����</a></div>');
}

//�����z�c�^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "1203") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1203&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00273">�x�����]���Ŕ̔����̂��ׂĂ̂����z�c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1203&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00369">�x�����]���Ŕ̔����̂��ׂĂ̂����z�c�͂�����</a></div>');
}

//�t�@�u���b�N�����^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "1208") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1208&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00274">�x�����]���Ŕ̔����̂��ׂẴt�@�u���b�N����</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1208&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00370">�x�����]���Ŕ̔����̂��ׂẴt�@�u���b�N�����͂�����</a></div>');
}

//�z�c�����ѕz��P�b�g�^�Q�凌z�c��x�b�h
if(param["C"] == "1300") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1300&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00275">�x�����]���Ŕ̔����̂��ׂĂ̕z�c�����ѕz��P�b�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1300&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00371">�x�����]���Ŕ̔����̂��ׂĂ̕z�c�����ѕz��P�b�g�͂�����</a></div>');
}

//�z�c�J�o�[��V�[�c�^�Q�凌z�c��x�b�h
if(param["C"] == "1301") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1301&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00276">�x�����]���Ŕ̔����̂��ׂĂ̕z�c�J�o�[��V�[�c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1301&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00372">�x�����]���Ŕ̔����̂��ׂĂ̕z�c�J�o�[��V�[�c�͂�����</a></div>');
}

//�x�b�h����̂��x�b�h�^�Q�凌z�c��x�b�h
if(param["C"] == "1302") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1302&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00277">�x�����]���Ŕ̔����̂��ׂẴx�b�h����̂��x�b�h</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1302&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00373">�x�����]���Ŕ̔����̂��ׂẴx�b�h����̂��x�b�h�͂�����</a></div>');
}

//�}�b�g���X��z�c�}�b�g�^�Q�凌z�c��x�b�h
if(param["C"] == "1303") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1303&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00278">�x�����]���Ŕ̔����̂��ׂẴ}�b�g���X��z�c�}�b�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1303&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00374">�x�����]���Ŕ̔����̂��ׂẴ}�b�g���X��z�c�}�b�g�͂�����</a></div>');
}

//�p�W���}�^�Q�凌z�c��x�b�h
if(param["C"] == "1304") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1304&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00279">�x�����]���Ŕ̔����̂��ׂẴp�W���}</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1304&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00375">�x�����]���Ŕ̔����̂��ׂẴp�W���}�͂�����</a></div>');
}

//�祃t���C�p����������^�L�b�`���p�i��������
if(param["C"] == "1500") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1500&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00280">�x�����]���Ŕ̔����̂��ׂĂ̓祃t���C�p����������</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1500&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00376">�x�����]���Ŕ̔����̂��ׂĂ̓祃t���C�p����������͂�����</a></div>');
}

//���L�b�`���c�[���^�L�b�`���p�i��������
if(param["C"] == "1504") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1504&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00281">�x�����]���Ŕ̔����̂��ׂĂ̕��L�b�`���c�[��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1504&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00377">�x�����]���Ŕ̔����̂��ׂĂ̕��L�b�`���c�[���͂�����</a></div>');
}

//���؂肩������b�N��L�b�`���������[�p�i�^�L�b�`���p�i��������
if(param["C"] == "1502") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1502&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00282">�x�����]���Ŕ̔����̂��ׂĂ̐��؂肩������b�N��L�b�`���������[�p�i</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1502&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00378">�x�����]���Ŕ̔����̂��ׂĂ̐��؂肩������b�N��L�b�`���������[�p�i�͂�����</a></div>');
}

//���َq��襂��ٓ��p�i������^�L�b�`���p�i��������
if(param["C"] == "1505") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1505&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00283">�x�����]���Ŕ̔����̂��ׂĂ̂��َq��襂��ٓ��p�i�����</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1505&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00379">�x�����]���Ŕ̔����̂��ׂĂ̂��َq��襂��ٓ��p�i������͂�����</a></div>');
}

//�H��J�g�����[�^�L�b�`���p�i��������
if(param["C"] == "1501") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1501&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00284">�x�����]���Ŕ̔����̂��ׂĂ̐H��J�g�����[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1501&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00380">�x�����]���Ŕ̔����̂��ׂĂ̐H��J�g�����[�͂�����</a></div>');
}

//�H�i�ۑ���I�C���|�b�g�^�L�b�`���p�i��������
if(param["C"] == "1506") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1506&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00285">�x�����]���Ŕ̔����̂��ׂĂ̐H�i�ۑ���I�C���|�b�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1506&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00381">�x�����]���Ŕ̔����̂��ׂĂ̐H�i�ۑ���I�C���|�b�g�͂�����</a></div>');
}

//�L�b�`���}�b�g��t�@�u���b�N�^�L�b�`���p�i��������
if(param["C"] == "1503") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1503&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00286">�x�����]���Ŕ̔����̂��ׂẴL�b�`���}�b�g��t�@�u���b�N</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1503&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00382">�x�����]���Ŕ̔����̂��ׂẴL�b�`���}�b�g��t�@�u���b�N�͂�����</a></div>');
}

//�L�b�`���S�~����|���p�i�^�L�b�`���p�i��������
if(param["C"] == "1507") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1507&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00287">�x�����]���Ŕ̔����̂��ׂẴL�b�`���S�~����|���p�i</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1507&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00383">�x�����]���Ŕ̔����̂��ׂẴL�b�`���S�~����|���p�i�͂�����</a></div>');
}

//�o�X�p�i��o�X�}�b�g����ʏ����^�o�X��g�C����|������^�I��
if(param["C"] == "1800") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1800&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00288">�x�����]���Ŕ̔����̂��ׂẴo�X�p�i��o�X�}�b�g����ʏ���</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1800&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00384">�x�����]���Ŕ̔����̂��ׂẴo�X�p�i��o�X�}�b�g����ʏ����͂�����</a></div>');
}

//�g�C���p�i��g�C���}�b�g��J�o�[�^�o�X��g�C����|������^�I��
if(param["C"] == "1801") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1801&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00289">�x�����]���Ŕ̔����̂��ׂẴg�C���p�i��g�C���}�b�g��J�o�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1801&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00385">�x�����]���Ŕ̔����̂��ׂẴg�C���p�i��g�C���}�b�g��J�o�[�͂�����</a></div>');
}

//����p�i���������A�C������^�o�X��g�C����|������^�I��
if(param["C"] == "1803") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1803&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00290">�x�����]���Ŕ̔����̂��ׂĂ̐���p�i���������A�C������</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1803&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00386">�x�����]���Ŕ̔����̂��ׂĂ̐���p�i���������A�C������͂�����</a></div>');
}

//�|���p�i��X�e�b�v�X�c�[���^�o�X��g�C����|������^�I��
if(param["C"] == "1804") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1804&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00291">�x�����]���Ŕ̔����̂��ׂĂ̑|���p�i��X�e�b�v�X�c�[��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1804&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00387">�x�����]���Ŕ̔����̂��ׂĂ̑|���p�i��X�e�b�v�X�c�[���͂�����</a></div>');
}

//����h�~�p�i�^�o�X��g�C����|������^�I��
if(param["C"] == "1806") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1806&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00292">�x�����]���Ŕ̔����̂��ׂẲ���h�~�p�i</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1806&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00388">�x�����]���Ŕ̔����̂��ׂẲ���h�~�p�i�͂�����</a></div>');
}

//�S�~������ʃS�~���^�o�X��g�C����|������^�I��
if(param["C"] == "1805") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1805&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00293">�x�����]���Ŕ̔����̂��ׂẴS�~������ʃS�~��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1805&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00389">�x�����]���Ŕ̔����̂��ׂẴS�~������ʃS�~���͂�����</a></div>');
}

//�^�I���^�o�X��g�C����|������^�I��
if(param["C"] == "1802") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1802&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00294">�x�����]���Ŕ̔����̂��ׂẴ^�I��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1802&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00390">�x�����]���Ŕ̔����̂��ׂẴ^�I���͂�����</a></div>');
}

//�h�ƃO�b�Y��h�ЃO�b�Y�^�o�X��g�C����|������^�I��
if(param["C"] == "1807") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1807&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00295">�x�����]���Ŕ̔����̂��ׂĂ̖h�ƃO�b�Y��h�ЃO�b�Y</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1807&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00391">�x�����]���Ŕ̔����̂��ׂĂ̖h�ƃO�b�Y��h�ЃO�b�Y�͂�����</a></div>');
}

//�ߗރn���K�[��ߗގ��[�ܥ���k�܁^�o�X��g�C����|������^�I��
if(param["C"] == "1808") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1808&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00296">�x�����]���Ŕ̔����̂��ׂĂ̈ߗރn���K�[��ߗގ��[�ܥ���k��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1808&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00392">�x�����]���Ŕ̔����̂��ׂĂ̈ߗރn���K�[��ߗގ��[�ܥ���k�܂͂�����</a></div>');
}

//���C��J�r����I��j�I�C�΍�^�o�X��g�C����|������^�I��
if(param["C"] == "1809") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1809&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00297">�x�����]���Ŕ̔����̂��ׂĂ̎��C��J�r����I��j�I�C�΍�</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1809&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00393">�x�����]���Ŕ̔����̂��ׂĂ̎��C��J�r����I��j�I�C�΍�͂�����</a></div>');
}

//�ԕ�����O����ߓd�ȂǕ�炵�̂��Y�ݑ΍�^�o�X��g�C����|������^�I��
if(param["C"] == "1810") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1810&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00298">�x�����]���Ŕ̔����̂��ׂẲԕ�����O����ߓd�ȂǕ�炵�̂��Y�ݑ΍�</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1810&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00394">�x�����]���Ŕ̔����̂��ׂẲԕ�����O����ߓd�ȂǕ�炵�̂��Y�ݑ΍�͂�����</a></div>');
}

//�y�b�g�p�i�^�o�X��g�C����|������^�I��
if(param["C"] == "1811") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1811&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00299">�x�����]���Ŕ̔����̂��ׂẴy�b�g�p�i</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1811&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00395">�x�����]���Ŕ̔����̂��ׂẴy�b�g�p�i�͂�����</a></div>');
}

//���v��Ɩ����^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "1012") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1012&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00300">�x�����]���Ŕ̔����̂��ׂĂ̎��v��Ɩ����</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1012&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00396">�x�����]���Ŕ̔����̂��ׂĂ̎��v��Ɩ����͂�����</a></div>');
}

//�t�F�C�N�O���[����t�F�C�N�t�����[�^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "1013") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1013&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00301">�x�����]���Ŕ̔����̂��ׂẴt�F�C�N�O���[����t�F�C�N�t�����[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1013&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00397">�x�����]���Ŕ̔����̂��ׂẴt�F�C�N�O���[����t�F�C�N�t�����[�͂�����</a></div>');
}

//�C���e���A�G�ݥ�����^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "1000") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1000&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00302">�x�����]���Ŕ̔����̂��ׂẴC���e���A�G�ݥ����</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1000&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00398">�x�����]���Ŕ̔����̂��ׂẴC���e���A�G�ݥ�����͂�����</a></div>');
}

//��ӥ�A���o����X�e�[�V���i���[�^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "1002") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1002&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00303">�x�����]���Ŕ̔����̂��ׂĂ̈�ӥ�A���o����X�e�[�V���i���[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1002&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00399">�x�����]���Ŕ̔����̂��ׂĂ̈�ӥ�A���o����X�e�[�V���i���[�͂�����</a></div>');
}

//�X���b�p����[���V���[�Y�^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "1003") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1003&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00304">�x�����]���Ŕ̔����̂��ׂẴX���b�p����[���V���[�Y</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1003&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00400">�x�����]���Ŕ̔����̂��ׂẴX���b�p����[���V���[�Y�͂�����</a></div>');
}

//�K�[�f�j���O��G���g�����X�p�i�^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "1009") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1009&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00305">�x�����]���Ŕ̔����̂��ׂẴK�[�f�j���O��G���g�����X�p�i</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1009&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00401">�x�����]���Ŕ̔����̂��ׂẴK�[�f�j���O��G���g�����X�p�i�͂�����</a></div>');
}

//�~�V����\�[�C���O���p�i�^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "1001") {
	$('.bgcheck01').before('<div class="sn_mc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1001&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00306">�x�����]���Ŕ̔����̂��ׂẴ~�V����\�[�C���O���p�i</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=1001&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00402">�x�����]���Ŕ̔����̂��ׂẴ~�V����\�[�C���O���p�i�͂�����</a></div>');
}


//-------------------------�����J�e
//�g�����`�R�[�g�^�R�[�g�^���f�B�[�X�t�@�b�V����
if(param["C"] == "10000") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10000&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00403">�x�����]���Ŕ̔����̂��ׂẴg�����`�R�[�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10000&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00904">�x�����]���Ŕ̔����̂��ׂẴg�����`�R�[�g�͂�����</a></div>');
}

//�X�e���J���[�R�[�g�^�R�[�g�^���f�B�[�X�t�@�b�V����
if(param["C"] == "10001") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10001&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00404">�x�����]���Ŕ̔����̂��ׂẴX�e���J���[�R�[�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10001&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00905">�x�����]���Ŕ̔����̂��ׂẴX�e���J���[�R�[�g�͂�����</a></div>');
}

//�m�[�J���[��X�^���h�J���[�R�[�g�^�R�[�g�^���f�B�[�X�t�@�b�V����
if(param["C"] == "10002") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10002&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00405">�x�����]���Ŕ̔����̂��ׂẴm�[�J���[��X�^���h�J���[�R�[�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10002&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00906">�x�����]���Ŕ̔����̂��ׂẴm�[�J���[��X�^���h�J���[�R�[�g�͂�����</a></div>');
}

//P�R�[�g(�s�[�R�[�g)�^�R�[�g�^���f�B�[�X�t�@�b�V����
if(param["C"] == "10003") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10003&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00406">�x�����]���Ŕ̔����̂��ׂĂ�P�R�[�g(�s�[�R�[�g)</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10003&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00907">�x�����]���Ŕ̔����̂��ׂĂ�P�R�[�g(�s�[�R�[�g)�͂�����</a></div>');
}

//�_�b�t���R�[�g�^�R�[�g�^���f�B�[�X�t�@�b�V����
if(param["C"] == "10004") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10004&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00407">�x�����]���Ŕ̔����̂��ׂẴ_�b�t���R�[�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10004&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00908">�x�����]���Ŕ̔����̂��ׂẴ_�b�t���R�[�g�͂�����</a></div>');
}

//���b�Y�R�[�g��~���^���[�R�[�g�^�R�[�g�^���f�B�[�X�t�@�b�V����
if(param["C"] == "10005") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10005&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00408">�x�����]���Ŕ̔����̂��ׂẴ��b�Y�R�[�g��~���^���[�R�[�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10005&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00909">�x�����]���Ŕ̔����̂��ׂẴ��b�Y�R�[�g��~���^���[�R�[�g�͂�����</a></div>');
}

//�L���e�B���O�R�[�g����킽�R�[�g�^�R�[�g�^���f�B�[�X�t�@�b�V����
if(param["C"] == "10006") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10006&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00409">�x�����]���Ŕ̔����̂��ׂẴL���e�B���O�R�[�g����킽�R�[�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10006&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00910">�x�����]���Ŕ̔����̂��ׂẴL���e�B���O�R�[�g����킽�R�[�g�͂�����</a></div>');
}

//�_�E���W���P�b�g��_�E���R�[�g�^�R�[�g�^���f�B�[�X�t�@�b�V����
if(param["C"] == "10007") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10007&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00410">�x�����]���Ŕ̔����̂��ׂẴ_�E���W���P�b�g��_�E���R�[�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10007&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00911">�x�����]���Ŕ̔����̂��ׂẴ_�E���W���P�b�g��_�E���R�[�g�͂�����</a></div>');
}

//���̑��̃R�[�g���i�ꗗ�^�R�[�g�^���f�B�[�X�t�@�b�V����
if(param["C"] == "10099") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10099&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00411">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃R�[�g���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10099&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00912">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃R�[�g���i�ꗗ�͂�����</a></div>');
}

//�e�[���[�h�W���P�b�g�^�W���P�b�g��u���]���^���f�B�[�X�t�@�b�V����
if(param["C"] == "10100") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10100&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00412">�x�����]���Ŕ̔����̂��ׂẴe�[���[�h�W���P�b�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10100&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00913">�x�����]���Ŕ̔����̂��ׂẴe�[���[�h�W���P�b�g�͂�����</a></div>');
}

//�m�[�J���[��X�^���h�J���[�W���P�b�g�^�W���P�b�g��u���]���^���f�B�[�X�t�@�b�V����
if(param["C"] == "10101") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10101&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00413">�x�����]���Ŕ̔����̂��ׂẴm�[�J���[��X�^���h�J���[�W���P�b�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10101&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00914">�x�����]���Ŕ̔����̂��ׂẴm�[�J���[��X�^���h�J���[�W���P�b�g�͂�����</a></div>');
}

//G�W������f�j���W���P�b�g�^�W���P�b�g��u���]���^���f�B�[�X�t�@�b�V����
if(param["C"] == "10102") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10102&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00414">�x�����]���Ŕ̔����̂��ׂĂ�G�W������f�j���W���P�b�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10102&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00915">�x�����]���Ŕ̔����̂��ׂĂ�G�W������f�j���W���P�b�g�͂�����</a></div>');
}

//���C�_�[�X�W���P�b�g�^�W���P�b�g��u���]���^���f�B�[�X�t�@�b�V����
if(param["C"] == "10103") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10103&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00415">�x�����]���Ŕ̔����̂��ׂẴ��C�_�[�X�W���P�b�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10103&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00916">�x�����]���Ŕ̔����̂��ׂẴ��C�_�[�X�W���P�b�g�͂�����</a></div>');
}

//���[�N��~���^���[�W���P�b�g �^�W���P�b�g��u���]���^���f�B�[�X�t�@�b�V����
if(param["C"] == "10104") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10104&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00416">�x�����]���Ŕ̔����̂��ׂẴ��[�N��~���^���[�W���P�b�g </a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10104&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00917">�x�����]���Ŕ̔����̂��ׂẴ��[�N��~���^���[�W���P�b�g �͂�����</a></div>');
}

//�X�|�[�c��A�E�g�h�A�W���P�b�g �^�W���P�b�g��u���]���^���f�B�[�X�t�@�b�V����
if(param["C"] == "10105") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10105&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00417">�x�����]���Ŕ̔����̂��ׂẴX�|�[�c��A�E�g�h�A�W���P�b�g </a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10105&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00918">�x�����]���Ŕ̔����̂��ׂẴX�|�[�c��A�E�g�h�A�W���P�b�g �͂�����</a></div>');
}

//���̑��̃W���P�b�g��u���]�����i�ꗗ�^�W���P�b�g��u���]���^���f�B�[�X�t�@�b�V����
if(param["C"] == "10199") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10199&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00418">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃W���P�b�g��u���]�����i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10199&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00919">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃W���P�b�g��u���]�����i�ꗗ�͂�����</a></div>');
}

//�`���j�b�N�^�`���j�b�N������s�[�X�^���f�B�[�X�t�@�b�V����
if(param["C"] == "10200") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10200&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00419">�x�����]���Ŕ̔����̂��ׂẴ`���j�b�N</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10200&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00920">�x�����]���Ŕ̔����̂��ׂẴ`���j�b�N�͂�����</a></div>');
}

//�~�j��Ђ��䃏���s�[�X�^�`���j�b�N������s�[�X�^���f�B�[�X�t�@�b�V����
if(param["C"] == "10201") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10201&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00420">�x�����]���Ŕ̔����̂��ׂẴ~�j��Ђ��䃏���s�[�X</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10201&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00921">�x�����]���Ŕ̔����̂��ׂẴ~�j��Ђ��䃏���s�[�X�͂�����</a></div>');
}

//�����O��}�L�V�䃏���s�[�X�^�`���j�b�N������s�[�X�^���f�B�[�X�t�@�b�V����
if(param["C"] == "10202") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10202&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00421">�x�����]���Ŕ̔����̂��ׂẴ����O��}�L�V�䃏���s�[�X</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10202&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00922">�x�����]���Ŕ̔����̂��ׂẴ����O��}�L�V�䃏���s�[�X�͂�����</a></div>');
}

//���̑��̃`���j�b�N������s�[�X���i�ꗗ�^�`���j�b�N������s�[�X�^���f�B�[�X�t�@�b�V����
if(param["C"] == "10299") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10299&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00422">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃`���j�b�N������s�[�X���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10299&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00923">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃`���j�b�N������s�[�X���i�ꗗ�͂�����</a></div>');
}

//�j�b�g�J�[�f�B�K���^�J�[�f�B�K����{������x�X�g�^���f�B�[�X�t�@�b�V����
if(param["C"] == "10902") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10902&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00423">�x�����]���Ŕ̔����̂��ׂẴj�b�g�J�[�f�B�K��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10902&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00924">�x�����]���Ŕ̔����̂��ׂẴj�b�g�J�[�f�B�K���͂�����</a></div>');
}

//�J�b�g�\�[�J�[�f�B�K���^�J�[�f�B�K����{������x�X�g�^���f�B�[�X�t�@�b�V����
if(param["C"] == "10903") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10903&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00424">�x�����]���Ŕ̔����̂��ׂẴJ�b�g�\�[�J�[�f�B�K��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10903&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00925">�x�����]���Ŕ̔����̂��ׂẴJ�b�g�\�[�J�[�f�B�K���͂�����</a></div>');
}

//�x�X�g��W���^�J�[�f�B�K����{������x�X�g�^���f�B�[�X�t�@�b�V����
if(param["C"] == "10901") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10901&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00425">�x�����]���Ŕ̔����̂��ׂẴx�X�g��W��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10901&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00926">�x�����]���Ŕ̔����̂��ׂẴx�X�g��W���͂�����</a></div>');
}

//�|���`����P�[�v��{�����^�J�[�f�B�K����{������x�X�g�^���f�B�[�X�t�@�b�V����
if(param["C"] == "10900") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10900&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00426">�x�����]���Ŕ̔����̂��ׂẴ|���`����P�[�v��{����</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10900&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00927">�x�����]���Ŕ̔����̂��ׂẴ|���`����P�[�v��{�����͂�����</a></div>');
}

//���̑��̃J�[�f�B�K����{������x�X�g���i�ꗗ�^�J�[�f�B�K����{������x�X�g�^���f�B�[�X�t�@�b�V����
if(param["C"] == "10999") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10999&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00427">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃J�[�f�B�K����{������x�X�g���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10999&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00928">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃J�[�f�B�K����{������x�X�g���i�ꗗ�͂�����</a></div>');
}

//�V���c�^�V���c��u���E�X�^���f�B�[�X�t�@�b�V����
if(param["C"] == "10400") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10400&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00428">�x�����]���Ŕ̔����̂��ׂẴV���c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10400&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00929">�x�����]���Ŕ̔����̂��ׂẴV���c�͂�����</a></div>');
}

//�u���E�X�^�V���c��u���E�X�^���f�B�[�X�t�@�b�V����
if(param["C"] == "10401") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10401&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00429">�x�����]���Ŕ̔����̂��ׂẴu���E�X</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10401&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00930">�x�����]���Ŕ̔����̂��ׂẴu���E�X�͂�����</a></div>');
}

//���̑��̃V���c��u���E�X���i�ꗗ�^�V���c��u���E�X�^���f�B�[�X�t�@�b�V����
if(param["C"] == "10499") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10499&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00430">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃V���c��u���E�X���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10499&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00931">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃V���c��u���E�X���i�ꗗ�͂�����</a></div>');
}

//�j�b�g��Z�[�^�[�^�j�b�g�^���f�B�[�X�t�@�b�V����
if(param["C"] == "10500") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10500&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00431">�x�����]���Ŕ̔����̂��ׂẴj�b�g��Z�[�^�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10500&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00932">�x�����]���Ŕ̔����̂��ׂẴj�b�g��Z�[�^�[�͂�����</a></div>');
}

//�j�b�g�|���`����P�[�v��{�����^�j�b�g�^���f�B�[�X�t�@�b�V����
if(param["C"] == "10502") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10502&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00432">�x�����]���Ŕ̔����̂��ׂẴj�b�g�|���`����P�[�v��{����</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10502&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00933">�x�����]���Ŕ̔����̂��ׂẴj�b�g�|���`����P�[�v��{�����͂�����</a></div>');
}

//�j�b�g�x�X�g��W���^�j�b�g�^���f�B�[�X�t�@�b�V����
if(param["C"] == "10503") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10503&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00433">�x�����]���Ŕ̔����̂��ׂẴj�b�g�x�X�g��W��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10503&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00934">�x�����]���Ŕ̔����̂��ׂẴj�b�g�x�X�g��W���͂�����</a></div>');
}

//���̑��̃j�b�g���i�ꗗ�^�j�b�g�^���f�B�[�X�t�@�b�V����
if(param["C"] == "10599") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10599&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00434">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃j�b�g���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10599&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00935">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃j�b�g���i�ꗗ�͂�����</a></div>');
}

//�s�V���c�^�J�b�g�\�[�T�V���c�^���f�B�[�X�t�@�b�V����
if(param["C"] == "10600") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10600&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00435">�x�����]���Ŕ̔����̂��ׂĂ̂s�V���c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10600&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00936">�x�����]���Ŕ̔����̂��ׂĂ̂s�V���c�͂�����</a></div>');
}

//�f�U�C���J�b�g�\�[�^�J�b�g�\�[�T�V���c�^���f�B�[�X�t�@�b�V����
if(param["C"] == "10602") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10602&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00436">�x�����]���Ŕ̔����̂��ׂẴf�U�C���J�b�g�\�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10602&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00937">�x�����]���Ŕ̔����̂��ׂẴf�U�C���J�b�g�\�[�͂�����</a></div>');
}

//�L���~�\�[����^���N�g�b�v�^�J�b�g�\�[�T�V���c�^���f�B�[�X�t�@�b�V����
if(param["C"] == "10605") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10605&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00437">�x�����]���Ŕ̔����̂��ׂẴL���~�\�[����^���N�g�b�v</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10605&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00938">�x�����]���Ŕ̔����̂��ׂẴL���~�\�[����^���N�g�b�v�͂�����</a></div>');
}

//���̑��̃J�b�g�\�[�T�V���c���i�ꗗ�^�J�b�g�\�[�T�V���c�^���f�B�[�X�t�@�b�V����
if(param["C"] == "10699") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10699&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00438">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃J�b�g�\�[�T�V���c���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10699&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00939">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃J�b�g�\�[�T�V���c���i�ꗗ�͂�����</a></div>');
}

//�j�b�g�A���T���u����c�C���j�b�g�^�A���T���u����Z�b�g���i�^���f�B�[�X�t�@�b�V����
if(param["C"] == "10701") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10701&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00439">�x�����]���Ŕ̔����̂��ׂẴj�b�g�A���T���u����c�C���j�b�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10701&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00940">�x�����]���Ŕ̔����̂��ׂẴj�b�g�A���T���u����c�C���j�b�g�͂�����</a></div>');
}

//�J�b�g�\�[�A���T���u���^�A���T���u����Z�b�g���i�^���f�B�[�X�t�@�b�V����
if(param["C"] == "10702") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10702&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00440">�x�����]���Ŕ̔����̂��ׂẴJ�b�g�\�[�A���T���u��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10702&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00941">�x�����]���Ŕ̔����̂��ׂẴJ�b�g�\�[�A���T���u���͂�����</a></div>');
}

//���̑��̃A���T���u����Z�b�g���i���i�ꗗ�^�A���T���u����Z�b�g���i�^���f�B�[�X�t�@�b�V����
if(param["C"] == "10799") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10799&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00441">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃A���T���u����Z�b�g���i���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10799&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00942">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃A���T���u����Z�b�g���i���i�ꗗ�͂�����</a></div>');
}

//�v���I�[�o�[�^�p�[�J��g���[�i�[�^���f�B�[�X�t�@�b�V����
if(param["C"] == "11000") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11000&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00442">�x�����]���Ŕ̔����̂��ׂẴv���I�[�o�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11000&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00943">�x�����]���Ŕ̔����̂��ׂẴv���I�[�o�[�͂�����</a></div>');
}

//�W�b�v�A�b�v�^�p�[�J��g���[�i�[�^���f�B�[�X�t�@�b�V����
if(param["C"] == "11001") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11001&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00443">�x�����]���Ŕ̔����̂��ׂẴW�b�v�A�b�v</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11001&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00944">�x�����]���Ŕ̔����̂��ׂẴW�b�v�A�b�v�͂�����</a></div>');
}

//���̑��̃p�[�J��g���[�i�[���i�ꗗ�^�p�[�J��g���[�i�[�^���f�B�[�X�t�@�b�V����
if(param["C"] == "11099") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11099&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00444">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃p�[�J��g���[�i�[���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11099&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00945">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃p�[�J��g���[�i�[���i�ꗗ�͂�����</a></div>');
}

//�V���[�g�p���c�^�p���c�^���f�B�[�X�t�@�b�V����
if(param["C"] == "11206") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11206&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00445">�x�����]���Ŕ̔����̂��ׂẴV���[�g�p���c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11206&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00946">�x�����]���Ŕ̔����̂��ׂẴV���[�g�p���c�͂�����</a></div>');
}

//�n�[�t�p���c�^�p���c�^���f�B�[�X�t�@�b�V����
if(param["C"] == "11207") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11207&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00446">�x�����]���Ŕ̔����̂��ׂẴn�[�t�p���c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11207&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00947">�x�����]���Ŕ̔����̂��ׂẴn�[�t�p���c�͂�����</a></div>');
}

//�N���b�v�h�p���c����[��p���c�^�p���c�^���f�B�[�X�t�@�b�V����
if(param["C"] == "11208") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11208&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00447">�x�����]���Ŕ̔����̂��ׂẴN���b�v�h�p���c����[��p���c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11208&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00948">�x�����]���Ŕ̔����̂��ׂẴN���b�v�h�p���c����[��p���c�͂�����</a></div>');
}

//�X�����p���c��^�C�g�p���c�^�p���c�^���f�B�[�X�t�@�b�V����
if(param["C"] == "11200") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11200&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00448">�x�����]���Ŕ̔����̂��ׂẴX�����p���c��^�C�g�p���c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11200&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00949">�x�����]���Ŕ̔����̂��ׂẴX�����p���c��^�C�g�p���c�͂�����</a></div>');
}

//�X�g���[�g�p���c�^�p���c�^���f�B�[�X�t�@�b�V����
if(param["C"] == "11203") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11203&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00449">�x�����]���Ŕ̔����̂��ׂẴX�g���[�g�p���c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11203&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00950">�x�����]���Ŕ̔����̂��ׂẴX�g���[�g�p���c�͂�����</a></div>');
}

//�u�[�c�J�b�g�p���c�^�p���c�^���f�B�[�X�t�@�b�V����
if(param["C"] == "11202") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11202&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00450">�x�����]���Ŕ̔����̂��ׂẴu�[�c�J�b�g�p���c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11202&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00951">�x�����]���Ŕ̔����̂��ׂẴu�[�c�J�b�g�p���c�͂�����</a></div>');
}

//���C�h�p���c����[�Y�p���c�^�p���c�^���f�B�[�X�t�@�b�V����
if(param["C"] == "11201") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11201&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00451">�x�����]���Ŕ̔����̂��ׂẴ��C�h�p���c����[�Y�p���c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11201&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00952">�x�����]���Ŕ̔����̂��ׂẴ��C�h�p���c����[�Y�p���c�͂�����</a></div>');
}

//�W�[���Y��f�j���p���c�^�p���c�^���f�B�[�X�t�@�b�V����
if(param["C"] == "11204") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11204&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00452">�x�����]���Ŕ̔����̂��ׂẴW�[���Y��f�j���p���c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11204&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00953">�x�����]���Ŕ̔����̂��ׂẴW�[���Y��f�j���p���c�͂�����</a></div>');
}

//���M�p����p�M���X�^�p���c�^���f�B�[�X�t�@�b�V����
if(param["C"] == "11205") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11205&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00453">�x�����]���Ŕ̔����̂��ׂẴ��M�p����p�M���X</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11205&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00954">�x�����]���Ŕ̔����̂��ׂẴ��M�p����p�M���X�͂�����</a></div>');
}

//�T���y�b�g��I�[���C�������^�p���c�^���f�B�[�X�t�@�b�V����
if(param["C"] == "11209") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11209&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00454">�x�����]���Ŕ̔����̂��ׂẴT���y�b�g��I�[���C������</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11209&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00955">�x�����]���Ŕ̔����̂��ׂẴT���y�b�g��I�[���C�������͂�����</a></div>');
}

//���̑��̃p���c���i�ꗗ�^�p���c�^���f�B�[�X�t�@�b�V����
if(param["C"] == "11299") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11299&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00455">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃p���c���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11299&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00956">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃p���c���i�ꗗ�͂�����</a></div>');
}

//�~�j�X�J�[�g�^�X�J�[�g�^���f�B�[�X�t�@�b�V����
if(param["C"] == "11100") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11100&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00456">�x�����]���Ŕ̔����̂��ׂẴ~�j�X�J�[�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11100&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00957">�x�����]���Ŕ̔����̂��ׂẴ~�j�X�J�[�g�͂�����</a></div>');
}

//�Ђ���X�J�[�g�^�X�J�[�g�^���f�B�[�X�t�@�b�V����
if(param["C"] == "11101") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11101&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00457">�x�����]���Ŕ̔����̂��ׂĂ̂Ђ���X�J�[�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11101&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00958">�x�����]���Ŕ̔����̂��ׂĂ̂Ђ���X�J�[�g�͂�����</a></div>');
}

//�����O��}�L�V��X�J�[�g�^�X�J�[�g�^���f�B�[�X�t�@�b�V����
if(param["C"] == "11102") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11102&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00458">�x�����]���Ŕ̔����̂��ׂẴ����O��}�L�V��X�J�[�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11102&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00959">�x�����]���Ŕ̔����̂��ׂẴ����O��}�L�V��X�J�[�g�͂�����</a></div>');
}

//���̑��̃X�J�[�g���i�ꗗ�^�X�J�[�g�^���f�B�[�X�t�@�b�V����
if(param["C"] == "11199") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11199&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00459">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃X�J�[�g���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11199&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00960">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃X�J�[�g���i�ꗗ�͂�����</a></div>');
}

//�X�[�c�Z�b�g�^���f�B�[�X�X�[�c�^���f�B�[�X�t�@�b�V����
if(param["C"] == "10300") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10300&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00460">�x�����]���Ŕ̔����̂��ׂẴX�[�c�Z�b�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10300&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00961">�x�����]���Ŕ̔����̂��ׂẴX�[�c�Z�b�g�͂�����</a></div>');
}

//�Z�b�g�A�b�v�X�[�c�^���f�B�[�X�X�[�c�^���f�B�[�X�t�@�b�V����
if(param["C"] == "10301") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10301&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00461">�x�����]���Ŕ̔����̂��ׂẴZ�b�g�A�b�v�X�[�c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10301&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00962">�x�����]���Ŕ̔����̂��ׂẴZ�b�g�A�b�v�X�[�c�͂�����</a></div>');
}

//���̑��̃��f�B�[�X�X�[�c���i�ꗗ�^���f�B�[�X�X�[�c�^���f�B�[�X�t�@�b�V����
if(param["C"] == "10399") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10399&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00462">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃��f�B�[�X�X�[�c���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=10399&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00963">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃��f�B�[�X�X�[�c���i�ꗗ�͂�����</a></div>');
}

//�J���[�t�H�[�}���X�[�c�^�t�H�[�}���E�F�A�^���f�B�[�X�t�@�b�V����
if(param["C"] == "11401") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11401&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00463">�x�����]���Ŕ̔����̂��ׂẴJ���[�t�H�[�}���X�[�c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11401&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00964">�x�����]���Ŕ̔����̂��ׂẴJ���[�t�H�[�}���X�[�c�͂�����</a></div>');
}

//�p�[�e�B�[�h���X������s�[�X�^�t�H�[�}���E�F�A�^���f�B�[�X�t�@�b�V����
if(param["C"] == "11402") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11402&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00464">�x�����]���Ŕ̔����̂��ׂẴp�[�e�B�[�h���X������s�[�X</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11402&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00965">�x�����]���Ŕ̔����̂��ׂẴp�[�e�B�[�h���X������s�[�X�͂�����</a></div>');
}

//�t�H�[�}���{�����^�t�H�[�}���E�F�A�^���f�B�[�X�t�@�b�V����
if(param["C"] == "11403") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11403&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00465">�x�����]���Ŕ̔����̂��ׂẴt�H�[�}���{����</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11403&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00966">�x�����]���Ŕ̔����̂��ׂẴt�H�[�}���{�����͂�����</a></div>');
}

//�r����畞��u���b�N�t�H�[�}���X�[�c�^�t�H�[�}���E�F�A�^���f�B�[�X�t�@�b�V����
if(param["C"] == "11400") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11400&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00466">�x�����]���Ŕ̔����̂��ׂĂ̑r����畞��u���b�N�t�H�[�}���X�[�c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11400&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00967">�x�����]���Ŕ̔����̂��ׂĂ̑r����畞��u���b�N�t�H�[�}���X�[�c�͂�����</a></div>');
}

//���̑��̃t�H�[�}���E�F�A���i�ꗗ�^�t�H�[�}���E�F�A�^���f�B�[�X�t�@�b�V����
if(param["C"] == "11499") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11499&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00467">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃t�H�[�}���E�F�A���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11499&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00968">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃t�H�[�}���E�F�A���i�ꗗ�͂�����</a></div>');
}

//���ߥ�����^���ߥ�����^���f�B�[�X�t�@�b�V����
if(param["C"] == "11300") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11300&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00468">�x�����]���Ŕ̔����̂��ׂĂ̗��ߥ����</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11300&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00969">�x�����]���Ŕ̔����̂��ׂĂ̗��ߥ�����͂�����</a></div>');
}

//���̑��̗��ߥ�������i�ꗗ�^���ߥ�����^���f�B�[�X�t�@�b�V����
if(param["C"] == "11399") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11399&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00469">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̗��ߥ�������i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=11399&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00970">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̗��ߥ�������i�ꗗ�͂�����</a></div>');
}

//�t���J�b�v�u���^�u���W���[�^����������C���i�[��p�W���}
if(param["C"] == "20000") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20000&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00470">�x�����]���Ŕ̔����̂��ׂẴt���J�b�v�u��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20000&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00971">�x�����]���Ŕ̔����̂��ׂẴt���J�b�v�u���͂�����</a></div>');
}

//3/4�J�b�v�u���^�u���W���[�^����������C���i�[��p�W���}
if(param["C"] == "20001") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20001&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00471">�x�����]���Ŕ̔����̂��ׂĂ�3/4�J�b�v�u��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20001&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00972">�x�����]���Ŕ̔����̂��ׂĂ�3/4�J�b�v�u���͂�����</a></div>');
}

//�n�[�t�J�b�v�u���^�u���W���[�^����������C���i�[��p�W���}
if(param["C"] == "20002") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20002&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00472">�x�����]���Ŕ̔����̂��ׂẴn�[�t�J�b�v�u��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20002&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00973">�x�����]���Ŕ̔����̂��ׂẴn�[�t�J�b�v�u���͂�����</a></div>');
}

//���[���h�J�b�v�u���^�u���W���[�^����������C���i�[��p�W���}
if(param["C"] == "20003") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20003&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00473">�x�����]���Ŕ̔����̂��ׂẴ��[���h�J�b�v�u��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20003&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00974">�x�����]���Ŕ̔����̂��ׂẴ��[���h�J�b�v�u���͂�����</a></div>');
}

//�m�����C���[�u����\�t�g�u���^�u���W���[�^����������C���i�[��p�W���}
if(param["C"] == "20004") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20004&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00474">�x�����]���Ŕ̔����̂��ׂẴm�����C���[�u����\�t�g�u��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20004&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00975">�x�����]���Ŕ̔����̂��ׂẴm�����C���[�u����\�t�g�u���͂�����</a></div>');
}

//�X�|�[�c�u���^�u���W���[�^����������C���i�[��p�W���}
if(param["C"] == "20005") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20005&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00475">�x�����]���Ŕ̔����̂��ׂẴX�|�[�c�u��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20005&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00976">�x�����]���Ŕ̔����̂��ׂẴX�|�[�c�u���͂�����</a></div>');
}

//�n�[�t�g�b�v�^�u���W���[�^����������C���i�[��p�W���}
if(param["C"] == "20008") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20008&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00476">�x�����]���Ŕ̔����̂��ׂẴn�[�t�g�b�v</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20008&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00977">�x�����]���Ŕ̔����̂��ׂẴn�[�t�g�b�v�͂�����</a></div>');
}

//�k�[�u���^�u���W���[�^����������C���i�[��p�W���}
if(param["C"] == "20007") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20007&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00477">�x�����]���Ŕ̔����̂��ׂẴk�[�u��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20007&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00978">�x�����]���Ŕ̔����̂��ׂẴk�[�u���͂�����</a></div>');
}

//�X�g���b�v��p�b�h��u�����ӏ����^�u���W���[�^����������C���i�[��p�W���}
if(param["C"] == "20009") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20009&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00478">�x�����]���Ŕ̔����̂��ׂẴX�g���b�v��p�b�h��u�����ӏ���</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20009&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00979">�x�����]���Ŕ̔����̂��ׂẴX�g���b�v��p�b�h��u�����ӏ����͂�����</a></div>');
}

//���̑��̃u���W���[���i�ꗗ�^�u���W���[�^����������C���i�[��p�W���}
if(param["C"] == "20099") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20099&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00479">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃u���W���[���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20099&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00980">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃u���W���[���i�ꗗ�͂�����</a></div>');
}

//�u���W���[���V���[�c�Z�b�g�^�u���W���[���V���[�c�Z�b�g�^����������C���i�[��p�W���}
if(param["C"] == "20100") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20100&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00480">�x�����]���Ŕ̔����̂��ׂẴu���W���[���V���[�c�Z�b�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20100&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00981">�x�����]���Ŕ̔����̂��ׂẴu���W���[���V���[�c�Z�b�g�͂�����</a></div>');
}

//���̑��̃u���W���[���V���[�c�Z�b�g���i�ꗗ�^�u���W���[���V���[�c�Z�b�g�^����������C���i�[��p�W���}
if(param["C"] == "20199") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20199&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00481">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃u���W���[���V���[�c�Z�b�g���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20199&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00982">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃u���W���[���V���[�c�Z�b�g���i�ꗗ�͂�����</a></div>');
}

//�X�^���_�[�h�V���[�c�^�V���[�c�^����������C���i�[��p�W���}
if(param["C"] == "20200") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20200&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00482">�x�����]���Ŕ̔����̂��ׂẴX�^���_�[�h�V���[�c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20200&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00983">�x�����]���Ŕ̔����̂��ׂẴX�^���_�[�h�V���[�c�͂�����</a></div>');
}

//�{�b�N�X�V���[�c�^�V���[�c�^����������C���i�[��p�W���}
if(param["C"] == "20201") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20201&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00483">�x�����]���Ŕ̔����̂��ׂẴ{�b�N�X�V���[�c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20201&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00984">�x�����]���Ŕ̔����̂��ׂẴ{�b�N�X�V���[�c�͂�����</a></div>');
}

//�q�b�v�n���O�V���[�c�^�V���[�c�^����������C���i�[��p�W���}
if(param["C"] == "20202") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20202&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00484">�x�����]���Ŕ̔����̂��ׂẴq�b�v�n���O�V���[�c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20202&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00985">�x�����]���Ŕ̔����̂��ׂẴq�b�v�n���O�V���[�c�͂�����</a></div>');
}

//�����t����n�C�E�G�X�g�V���[�c�^�V���[�c�^����������C���i�[��p�W���}
if(param["C"] == "20203") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20203&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00485">�x�����]���Ŕ̔����̂��ׂĂ̕����t����n�C�E�G�X�g�V���[�c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20203&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00986">�x�����]���Ŕ̔����̂��ׂĂ̕����t����n�C�E�G�X�g�V���[�c�͂�����</a></div>');
}

//�T�j�^���[�V���[�c�^�V���[�c�^����������C���i�[��p�W���}
if(param["C"] == "20204") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20204&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00486">�x�����]���Ŕ̔����̂��ׂẴT�j�^���[�V���[�c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20204&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00987">�x�����]���Ŕ̔����̂��ׂẴT�j�^���[�V���[�c�͂�����</a></div>');
}

//�T�|�[�g��V�F�C�v�V���[�c�^�V���[�c�^����������C���i�[��p�W���}
if(param["C"] == "20205") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20205&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00487">�x�����]���Ŕ̔����̂��ׂẴT�|�[�g��V�F�C�v�V���[�c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20205&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00988">�x�����]���Ŕ̔����̂��ׂẴT�|�[�g��V�F�C�v�V���[�c�͂�����</a></div>');
}

//�s�o�b�N��^���K�^�V���[�c�^����������C���i�[��p�W���}
if(param["C"] == "20206") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20206&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00488">�x�����]���Ŕ̔����̂��ׂĂ̂s�o�b�N��^���K</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20206&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00989">�x�����]���Ŕ̔����̂��ׂĂ̂s�o�b�N��^���K�͂�����</a></div>');
}

//���̑��̃V���[�c���i�ꗗ�^�V���[�c�^����������C���i�[��p�W���}
if(param["C"] == "20299") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20299&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00489">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃V���[�c���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20299&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00990">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃V���[�c���i�ꗗ�͂�����</a></div>');
}

//�����C���i�[�^�C���i�[�����������^����������C���i�[��p�W���}
if(param["C"] == "20300") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20300&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00490">�x�����]���Ŕ̔����̂��ׂĂ̒����C���i�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20300&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00991">�x�����]���Ŕ̔����̂��ׂĂ̒����C���i�[�͂�����</a></div>');
}

//��������������C���i�[�^�C���i�[�����������^����������C���i�[��p�W���}
if(param["C"] == "20301") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20301&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00491">�x�����]���Ŕ̔����̂��ׂĂ̎�������������C���i�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20301&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00992">�x�����]���Ŕ̔����̂��ׂĂ̎�������������C���i�[�͂�����</a></div>');
}

//������t�����`���C���i�[�^�C���i�[�����������^����������C���i�[��p�W���}
if(param["C"] == "20302") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20302&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00492">�x�����]���Ŕ̔����̂��ׂĂ̔�����t�����`���C���i�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20302&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00993">�x�����]���Ŕ̔����̂��ׂĂ̔�����t�����`���C���i�[�͂�����</a></div>');
}

//�^���N�g�b�v��m�[�X���[�u�C���i�[�^�C���i�[�����������^����������C���i�[��p�W���}
if(param["C"] == "20303") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20303&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00493">�x�����]���Ŕ̔����̂��ׂẴ^���N�g�b�v��m�[�X���[�u�C���i�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20303&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00994">�x�����]���Ŕ̔����̂��ׂẴ^���N�g�b�v��m�[�X���[�u�C���i�[�͂�����</a></div>');
}

//�L���~�\�[����x�A�g�b�v�^�C���i�[�����������^����������C���i�[��p�W���}
if(param["C"] == "20304") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20304&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00494">�x�����]���Ŕ̔����̂��ׂẴL���~�\�[����x�A�g�b�v</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20304&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00995">�x�����]���Ŕ̔����̂��ׂẴL���~�\�[����x�A�g�b�v�͂�����</a></div>');
}

//�����C���i�[�^�C���i�[�����������^����������C���i�[��p�W���}
if(param["C"] == "20307") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20307&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00495">�x�����]���Ŕ̔����̂��ׂĂ̊����C���i�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20307&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00996">�x�����]���Ŕ̔����̂��ׂĂ̊����C���i�[�͂�����</a></div>');
}

//���������C���i�[�^�C���i�[�����������^����������C���i�[��p�W���}
if(param["C"] == "20308") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20308&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00496">�x�����]���Ŕ̔����̂��ׂĂ̂��������C���i�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20308&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00997">�x�����]���Ŕ̔����̂��ׂĂ̂��������C���i�[�͂�����</a></div>');
}

//�����㉺�Z�b�g�^�C���i�[�����������^����������C���i�[��p�W���}
if(param["C"] == "20305") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20305&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00497">�x�����]���Ŕ̔����̂��ׂĂ̔����㉺�Z�b�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20305&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00998">�x�����]���Ŕ̔����̂��ׂĂ̔����㉺�Z�b�g�͂�����</a></div>');
}

//������ю��̃p���c�^�C���i�[�����������^����������C���i�[��p�W���}
if(param["C"] == "20306") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20306&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00498">�x�����]���Ŕ̔����̂��ׂĂ̕�����ю��̃p���c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20306&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00999">�x�����]���Ŕ̔����̂��ׂĂ̕�����ю��̃p���c�͂�����</a></div>');
}

//���̑��̃C���i�[�������������i�ꗗ�^�C���i�[�����������^����������C���i�[��p�W���}
if(param["C"] == "20399") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20399&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00499">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃C���i�[�������������i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20399&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01000">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃C���i�[�������������i�ꗗ�͂�����</a></div>');
}

//�X���b�v��L���~�\�[���^�����W�F���[�^����������C���i�[��p�W���}
if(param["C"] == "20400") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20400&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00500">�x�����]���Ŕ̔����̂��ׂẴX���b�v��L���~�\�[��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20400&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01001">�x�����]���Ŕ̔����̂��ׂẴX���b�v��L���~�\�[���͂�����</a></div>');
}

//�t���A�p���c��y�`�R�[�g�^�����W�F���[�^����������C���i�[��p�W���}
if(param["C"] == "20401") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20401&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00501">�x�����]���Ŕ̔����̂��ׂẴt���A�p���c��y�`�R�[�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20401&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01002">�x�����]���Ŕ̔����̂��ׂẴt���A�p���c��y�`�R�[�g�͂�����</a></div>');
}

//�x�r�[�h�[���^�����W�F���[�^����������C���i�[��p�W���}
if(param["C"] == "20403") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20403&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00502">�x�����]���Ŕ̔����̂��ׂẴx�r�[�h�[��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20403&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01003">�x�����]���Ŕ̔����̂��ׂẴx�r�[�h�[���͂�����</a></div>');
}

//���̑��̃����W�F���[���i�ꗗ�^�����W�F���[�^����������C���i�[��p�W���}
if(param["C"] == "20499") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20499&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00503">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃����W�F���[���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20499&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01004">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃����W�F���[���i�ꗗ�͂�����</a></div>');
}

//�K�[�h���^�K�[�h����␳��������ՃC���i�[�^����������C���i�[��p�W���}
if(param["C"] == "20500") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20500&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00504">�x�����]���Ŕ̔����̂��ׂẴK�[�h��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20500&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01005">�x�����]���Ŕ̔����̂��ׂẴK�[�h���͂�����</a></div>');
}

//�{�f�B�X�[�c��{�f�B�V�F�C�p�[�^�K�[�h����␳��������ՃC���i�[�^����������C���i�[��p�W���}
if(param["C"] == "20501") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20501&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00505">�x�����]���Ŕ̔����̂��ׂẴ{�f�B�X�[�c��{�f�B�V�F�C�p�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20501&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01006">�x�����]���Ŕ̔����̂��ׂẴ{�f�B�X�[�c��{�f�B�V�F�C�p�[�͂�����</a></div>');
}

//�o�X�g�A�b�v��o�X�g�j�b�p�[�^�K�[�h����␳��������ՃC���i�[�^����������C���i�[��p�W���}
if(param["C"] == "20504") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20504&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00506">�x�����]���Ŕ̔����̂��ׂẴo�X�g�A�b�v��o�X�g�j�b�p�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20504&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01007">�x�����]���Ŕ̔����̂��ׂẴo�X�g�A�b�v��o�X�g�j�b�p�[�͂�����</a></div>');
}

//�E�G�X�g�V�F�C�v��E�G�X�g�j�b�p�[�^�K�[�h����␳��������ՃC���i�[�^����������C���i�[��p�W���}
if(param["C"] == "20505") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20505&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00507">�x�����]���Ŕ̔����̂��ׂẴE�G�X�g�V�F�C�v��E�G�X�g�j�b�p�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20505&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01008">�x�����]���Ŕ̔����̂��ׂẴE�G�X�g�V�F�C�v��E�G�X�g�j�b�p�[�͂�����</a></div>');
}

//���ՃC���i�[�^�K�[�h����␳��������ՃC���i�[�^����������C���i�[��p�W���}
if(param["C"] == "20506") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20506&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00508">�x�����]���Ŕ̔����̂��ׂĂ̍��ՃC���i�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20506&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01009">�x�����]���Ŕ̔����̂��ׂĂ̍��ՃC���i�[�͂�����</a></div>');
}

//���̑��̃K�[�h����␳��������ՃC���i�[���i�ꗗ�^�K�[�h����␳��������ՃC���i�[�^����������C���i�[��p�W���}
if(param["C"] == "20599") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20599&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00509">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃K�[�h����␳��������ՃC���i�[���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20599&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01010">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃K�[�h����␳��������ՃC���i�[���i�ꗗ�͂�����</a></div>');
}

//�^�C�c�^�C����^�C�c��X�g�b�L���O�^����������C���i�[��p�W���}
if(param["C"] == "20600") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20600&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00510">�x�����]���Ŕ̔����̂��ׂẴ^�C�c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20600&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01011">�x�����]���Ŕ̔����̂��ׂẴ^�C�c�͂�����</a></div>');
}

//�X�g�b�L���O�^�C����^�C�c��X�g�b�L���O�^����������C���i�[��p�W���}
if(param["C"] == "20605") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20605&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00511">�x�����]���Ŕ̔����̂��ׂẴX�g�b�L���O</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20605&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01012">�x�����]���Ŕ̔����̂��ׂẴX�g�b�L���O�͂�����</a></div>');
}

//�C���^�C����^�C�c��X�g�b�L���O�^����������C���i�[��p�W���}
if(param["C"] == "20601") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20601&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00512">�x�����]���Ŕ̔����̂��ׂĂ̌C��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20601&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01013">�x�����]���Ŕ̔����̂��ׂĂ̌C���͂�����</a></div>');
}

//���b�O�E�H�[�}�[�^�C����^�C�c��X�g�b�L���O�^����������C���i�[��p�W���}
if(param["C"] == "20602") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20602&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00513">�x�����]���Ŕ̔����̂��ׂẴ��b�O�E�H�[�}�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20602&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01014">�x�����]���Ŕ̔����̂��ׂẴ��b�O�E�H�[�}�[�͂�����</a></div>');
}

//�t�b�g�J�o�[�^�C����^�C�c��X�g�b�L���O�^����������C���i�[��p�W���}
if(param["C"] == "20604") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20604&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00514">�x�����]���Ŕ̔����̂��ׂẴt�b�g�J�o�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20604&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01015">�x�����]���Ŕ̔����̂��ׂẴt�b�g�J�o�[�͂�����</a></div>');
}

//���̑��̌C����^�C�c��X�g�b�L���O���i�ꗗ�^�C����^�C�c��X�g�b�L���O�^����������C���i�[��p�W���}
if(param["C"] == "20699") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20699&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00515">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̌C����^�C�c��X�g�b�L���O���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20699&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01016">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̌C����^�C�c��X�g�b�L���O���i�ꗗ�͂�����</a></div>');
}

//���M���X��X�p�b�c�^���M���X��X�p�b�c�^����������C���i�[��p�W���}
if(param["C"] == "20900") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20900&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00516">�x�����]���Ŕ̔����̂��ׂẴ��M���X��X�p�b�c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20900&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01017">�x�����]���Ŕ̔����̂��ׂẴ��M���X��X�p�b�c�͂�����</a></div>');
}

//�g�����J�^���M���X��X�p�b�c�^����������C���i�[��p�W���}
if(param["C"] == "20901") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20901&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00517">�x�����]���Ŕ̔����̂��ׂẴg�����J</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20901&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01018">�x�����]���Ŕ̔����̂��ׂẴg�����J�͂�����</a></div>');
}

//���̑��̃��M���X��X�p�b�c���i�ꗗ�^���M���X��X�p�b�c�^����������C���i�[��p�W���}
if(param["C"] == "20999") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20999&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00518">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃��M���X��X�p�b�c���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20999&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01019">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃��M���X��X�p�b�c���i�ꗗ�͂�����</a></div>');
}

//���f�B�[�X�p�W���}�^���[���E�F�A��p�W���}�^����������C���i�[��p�W���}
if(param["C"] == "20700") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20700&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00519">�x�����]���Ŕ̔����̂��ׂẴ��f�B�[�X�p�W���}</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20700&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01020">�x�����]���Ŕ̔����̂��ׂẴ��f�B�[�X�p�W���}�͂�����</a></div>');
}

//����������[���E�F�A�^���[���E�F�A��p�W���}�^����������C���i�[��p�W���}
if(param["C"] == "20701") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20701&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00520">�x�����]���Ŕ̔����̂��ׂĂ̕���������[���E�F�A</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20701&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01021">�x�����]���Ŕ̔����̂��ׂĂ̕���������[���E�F�A�͂�����</a></div>');
}

//�K�E����͂�Ă�^���[���E�F�A��p�W���}�^����������C���i�[��p�W���}
if(param["C"] == "20702") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20702&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00521">�x�����]���Ŕ̔����̂��ׂẴK�E����͂�Ă�</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20702&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01022">�x�����]���Ŕ̔����̂��ׂẴK�E����͂�Ă�͂�����</a></div>');
}

//���̑��̃��[���E�F�A��p�W���}���i�ꗗ�^���[���E�F�A��p�W���}�^����������C���i�[��p�W���}
if(param["C"] == "20799") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20799&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00522">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃��[���E�F�A��p�W���}���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=20799&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01023">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃��[���E�F�A��p�W���}���i�ꗗ�͂�����</a></div>');
}

//�p���v�X�^�p���v�X����[�t�@�[�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30100") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30100&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00523">�x�����]���Ŕ̔����̂��ׂẴp���v�X</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30100&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01024">�x�����]���Ŕ̔����̂��ׂẴp���v�X�͂�����</a></div>');
}

//���[�t�@�[�^�p���v�X����[�t�@�[�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30102") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30102&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00524">�x�����]���Ŕ̔����̂��ׂẴ��[�t�@�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30102&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01025">�x�����]���Ŕ̔����̂��ׂẴ��[�t�@�[�͂�����</a></div>');
}

//�V���[�Y�A�N�Z�T���[�^�p���v�X����[�t�@�[�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30103") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30103&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00525">�x�����]���Ŕ̔����̂��ׂẴV���[�Y�A�N�Z�T���[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30103&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01026">�x�����]���Ŕ̔����̂��ׂẴV���[�Y�A�N�Z�T���[�͂�����</a></div>');
}

//���̑��̃p���v�X����[�t�@�[���i�ꗗ�^�p���v�X����[�t�@�[�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30199") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30199&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00526">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃p���v�X����[�t�@�[���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30199&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01027">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃p���v�X����[�t�@�[���i�ꗗ�͂�����</a></div>');
}

//�t���b�g�V���[�Y�^�t���b�g�V���[�Y��o���G�V���[�Y�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30200") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30200&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00527">�x�����]���Ŕ̔����̂��ׂẴt���b�g�V���[�Y</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30200&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01028">�x�����]���Ŕ̔����̂��ׂẴt���b�g�V���[�Y�͂�����</a></div>');
}

//�o���G�V���[�Y�^�t���b�g�V���[�Y��o���G�V���[�Y�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30201") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30201&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00528">�x�����]���Ŕ̔����̂��ׂẴo���G�V���[�Y</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30201&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01029">�x�����]���Ŕ̔����̂��ׂẴo���G�V���[�Y�͂�����</a></div>');
}

//���̑��̃t���b�g�V���[�Y��o���G�V���[�Y���i�ꗗ�^�t���b�g�V���[�Y��o���G�V���[�Y�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30299") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30299&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00529">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃t���b�g�V���[�Y��o���G�V���[�Y���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30299&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01030">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃t���b�g�V���[�Y��o���G�V���[�Y���i�ꗗ�͂�����</a></div>');
}

//�j�[�n�C�u�[�c�^�u�[�c�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30000") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30000&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00530">�x�����]���Ŕ̔����̂��ׂẴj�[�n�C�u�[�c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30000&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01031">�x�����]���Ŕ̔����̂��ׂẴj�[�n�C�u�[�c�͂�����</a></div>');
}

//�����O�u�[�c�^�u�[�c�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30001") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30001&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00531">�x�����]���Ŕ̔����̂��ׂẴ����O�u�[�c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30001&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01032">�x�����]���Ŕ̔����̂��ׂẴ����O�u�[�c�͂�����</a></div>');
}

//�~�h���u�[�c�^�u�[�c�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30002") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30002&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00532">�x�����]���Ŕ̔����̂��ׂẴ~�h���u�[�c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30002&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01033">�x�����]���Ŕ̔����̂��ׂẴ~�h���u�[�c�͂�����</a></div>');
}

//�V���[�g�u�[�c��u�[�e�B�^�u�[�c�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30003") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30003&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00533">�x�����]���Ŕ̔����̂��ׂẴV���[�g�u�[�c��u�[�e�B</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30003&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01034">�x�����]���Ŕ̔����̂��ׂẴV���[�g�u�[�c��u�[�e�B�͂�����</a></div>');
}

//�u�[�c�J�o�[��u�[�c�����^�u�[�c�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30004") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30004&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00534">�x�����]���Ŕ̔����̂��ׂẴu�[�c�J�o�[��u�[�c����</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30004&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01035">�x�����]���Ŕ̔����̂��ׂẴu�[�c�J�o�[��u�[�c�����͂�����</a></div>');
}

//���̑��̃u�[�c���i�ꗗ�^�u�[�c�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30099") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30099&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00535">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃u�[�c���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30099&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01036">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃u�[�c���i�ꗗ�͂�����</a></div>');
}

//�~���[����T���_���^�T���_����~���[���^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30300") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30300&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00536">�x�����]���Ŕ̔����̂��ׂẴ~���[����T���_��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30300&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01037">�x�����]���Ŕ̔����̂��ׂẴ~���[����T���_���͂�����</a></div>');
}

//�r�[�`�T���_������]�[�g�T���_���^�T���_����~���[���^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30301") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30301&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00537">�x�����]���Ŕ̔����̂��ׂẴr�[�`�T���_������]�[�g�T���_��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30301&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01038">�x�����]���Ŕ̔����̂��ׂẴr�[�`�T���_������]�[�g�T���_���͂�����</a></div>');
}

//���̑��̃T���_����~���[�����i�ꗗ�^�T���_����~���[���^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30399") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30399&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00538">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃T���_����~���[�����i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30399&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01039">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃T���_����~���[�����i�ꗗ�͂�����</a></div>');
}

//���C���u�[�c�^���C���u�[�c����C���V���[�Y�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30400") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30400&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00539">�x�����]���Ŕ̔����̂��ׂẴ��C���u�[�c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30400&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01040">�x�����]���Ŕ̔����̂��ׂẴ��C���u�[�c�͂�����</a></div>');
}

//���C���V���[�Y�^���C���u�[�c����C���V���[�Y�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30401") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30401&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00540">�x�����]���Ŕ̔����̂��ׂẴ��C���V���[�Y</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30401&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01041">�x�����]���Ŕ̔����̂��ׂẴ��C���V���[�Y�͂�����</a></div>');
}

//���̑��̃��C���u�[�c����C���V���[�Y���i�ꗗ�^���C���u�[�c����C���V���[�Y�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30499") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30499&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00541">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃��C���u�[�c����C���V���[�Y���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30499&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01042">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃��C���u�[�c����C���V���[�Y���i�ꗗ�͂�����</a></div>');
}

//�X�j�[�J�[�^�X�j�[�J�[��T�{��J�W���A���V���[�Y�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30500") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30500&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00542">�x�����]���Ŕ̔����̂��ׂẴX�j�[�J�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30500&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01043">�x�����]���Ŕ̔����̂��ׂẴX�j�[�J�[�͂�����</a></div>');
}

//�T�{�^�X�j�[�J�[��T�{��J�W���A���V���[�Y�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30502") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30502&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00543">�x�����]���Ŕ̔����̂��ׂẴT�{</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30502&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01044">�x�����]���Ŕ̔����̂��ׂẴT�{�͂�����</a></div>');
}

//�J�W���A���V���[�Y��X���b�|���^�X�j�[�J�[��T�{��J�W���A���V���[�Y�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30503") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30503&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00544">�x�����]���Ŕ̔����̂��ׂẴJ�W���A���V���[�Y��X���b�|��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30503&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01045">�x�����]���Ŕ̔����̂��ׂẴJ�W���A���V���[�Y��X���b�|���͂�����</a></div>');
}

//���̑��̃X�j�[�J�[��T�{��J�W���A���V���[�Y���i�ꗗ�^�X�j�[�J�[��T�{��J�W���A���V���[�Y�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30599") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30599&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00545">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃X�j�[�J�[��T�{��J�W���A���V���[�Y���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30599&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01046">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃X�j�[�J�[��T�{��J�W���A���V���[�Y���i�ꗗ�͂�����</a></div>');
}

//���̑��̔��e����N��G�N�T�T�C�Y�V���[�Y���i�ꗗ�^���e����N��G�N�T�T�C�Y�V���[�Y�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "31699") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31699&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00546">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̔��e����N��G�N�T�T�C�Y�V���[�Y���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31699&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01047">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̔��e����N��G�N�T�T�C�Y�V���[�Y���i�ꗗ�͂�����</a></div>');
}

//�C���\�[����C�̒��~���^�C�̒��~����������O�b�Y�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30600") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30600&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00547">�x�����]���Ŕ̔����̂��ׂẴC���\�[����C�̒��~��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30600&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01048">�x�����]���Ŕ̔����̂��ׂẴC���\�[����C�̒��~���͂�����</a></div>');
}

//���̑��̌C�̒��~����������O�b�Y���i�ꗗ�^�C�̒��~����������O�b�Y�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30699") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30699&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00548">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̌C�̒��~����������O�b�Y���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30699&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01049">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̌C�̒��~����������O�b�Y���i�ꗗ�͂�����</a></div>');
}

//�V�����_�[�o�b�O�^�o�b�O(��)�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30700") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30700&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00549">�x�����]���Ŕ̔����̂��ׂẴV�����_�[�o�b�O</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30700&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01050">�x�����]���Ŕ̔����̂��ׂẴV�����_�[�o�b�O�͂�����</a></div>');
}

//�g�[�g�o�b�O���񂰃o�b�O�^�o�b�O(��)�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30701") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30701&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00550">�x�����]���Ŕ̔����̂��ׂẴg�[�g�o�b�O���񂰃o�b�O</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30701&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01051">�x�����]���Ŕ̔����̂��ׂẴg�[�g�o�b�O���񂰃o�b�O�͂�����</a></div>');
}

//�����o�b�O�^�o�b�O(��)�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30702") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30702&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00551">�x�����]���Ŕ̔����̂��ׂĂ̂����o�b�O</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30702&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01052">�x�����]���Ŕ̔����̂��ׂĂ̂����o�b�O�͂�����</a></div>');
}

//�q�b�v�o�b�O��E�G�X�g�|�[�`�^�o�b�O(��)�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30703") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30703&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00552">�x�����]���Ŕ̔����̂��ׂẴq�b�v�o�b�O��E�G�X�g�|�[�`</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30703&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01053">�x�����]���Ŕ̔����̂��ׂẴq�b�v�o�b�O��E�G�X�g�|�[�`�͂�����</a></div>');
}

//�{�X�g���o�b�O�^�o�b�O(��)�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30704") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30704&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00553">�x�����]���Ŕ̔����̂��ׂẴ{�X�g���o�b�O</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30704&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01054">�x�����]���Ŕ̔����̂��ׂẴ{�X�g���o�b�O�͂�����</a></div>');
}

//�����b�N�^�o�b�O(��)�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30705") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30705&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00554">�x�����]���Ŕ̔����̂��ׂẴ����b�N</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30705&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01055">�x�����]���Ŕ̔����̂��ׂẴ����b�N�͂�����</a></div>');
}

//�X�|�[�c�o�b�O�^�o�b�O(��)�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30710") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30710&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00555">�x�����]���Ŕ̔����̂��ׂẴX�|�[�c�o�b�O</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30710&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01056">�x�����]���Ŕ̔����̂��ׂẴX�|�[�c�o�b�O�͂�����</a></div>');
}

//�L�����[�o�b�O��X�[�c�P�[�X�^�o�b�O(��)�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30706") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30706&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00556">�x�����]���Ŕ̔����̂��ׂẴL�����[�o�b�O��X�[�c�P�[�X</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30706&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01057">�x�����]���Ŕ̔����̂��ׂẴL�����[�o�b�O��X�[�c�P�[�X�͂�����</a></div>');
}

//�G�R�o�b�O��V���b�s���O�o�b�O�^�o�b�O(��)�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30707") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30707&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00557">�x�����]���Ŕ̔����̂��ׂẴG�R�o�b�O��V���b�s���O�o�b�O</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30707&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01058">�x�����]���Ŕ̔����̂��ׂẴG�R�o�b�O��V���b�s���O�o�b�O�͂�����</a></div>');
}

//�p�\�R���o�b�O��J�����o�b�O�^�o�b�O(��)�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30708") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30708&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00558">�x�����]���Ŕ̔����̂��ׂẴp�\�R���o�b�O��J�����o�b�O</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30708&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01059">�x�����]���Ŕ̔����̂��ׂẴp�\�R���o�b�O��J�����o�b�O�͂�����</a></div>');
}

//�N���b�`�o�b�O�^�o�b�O(��)�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30709") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30709&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00559">�x�����]���Ŕ̔����̂��ׂẴN���b�`�o�b�O</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30709&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01060">�x�����]���Ŕ̔����̂��ׂẴN���b�`�o�b�O�͂�����</a></div>');
}

//���̑��̃o�b�O(��)���i�ꗗ�^�o�b�O(��)�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30799") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30799&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00560">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃o�b�O(��)���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30799&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01061">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃o�b�O(��)���i�ꗗ�͂�����</a></div>');
}

//�����z�^���z��J�[�h�P�[�X��L�[�z���_�[�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "31000") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31000&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00561">�x�����]���Ŕ̔����̂��ׂĂ̒����z</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31000&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01062">�x�����]���Ŕ̔����̂��ׂĂ̒����z�͂�����</a></div>');
}

//�O�܂���z�^���z��J�[�h�P�[�X��L�[�z���_�[�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "31001") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31001&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00562">�x�����]���Ŕ̔����̂��ׂĂ̎O�܂���z</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31001&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01063">�x�����]���Ŕ̔����̂��ׂĂ̎O�܂���z�͂�����</a></div>');
}

//��܂���z�^���z��J�[�h�P�[�X��L�[�z���_�[�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "31002") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31002&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00563">�x�����]���Ŕ̔����̂��ׂĂ̓�܂���z</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31002&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01064">�x�����]���Ŕ̔����̂��ׂĂ̓�܂���z�͂�����</a></div>');
}

//���K����^���z��J�[�h�P�[�X��L�[�z���_�[�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "31004") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31004&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00564">�x�����]���Ŕ̔����̂��ׂĂ̏��K����</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31004&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01065">�x�����]���Ŕ̔����̂��ׂĂ̏��K����͂�����</a></div>');
}

//������ꥃJ�[�h�P�[�X�^���z��J�[�h�P�[�X��L�[�z���_�[�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "31005") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31005&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00565">�x�����]���Ŕ̔����̂��ׂĂ̒�����ꥃJ�[�h�P�[�X</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31005&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01066">�x�����]���Ŕ̔����̂��ׂĂ̒�����ꥃJ�[�h�P�[�X�͂�����</a></div>');
}

//�L�[�z���_�[��L�[�P�[�X�^���z��J�[�h�P�[�X��L�[�z���_�[�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "31006") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31006&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00566">�x�����]���Ŕ̔����̂��ׂẴL�[�z���_�[��L�[�P�[�X</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31006&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01067">�x�����]���Ŕ̔����̂��ׂẴL�[�z���_�[��L�[�P�[�X�͂�����</a></div>');
}

//���̑��̍��z��J�[�h�P�[�X��L�[�z���_�[���i�ꗗ�^���z��J�[�h�P�[�X��L�[�z���_�[�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "31099") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31099&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00567">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̍��z��J�[�h�P�[�X��L�[�z���_�[���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31099&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01068">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̍��z��J�[�h�P�[�X��L�[�z���_�[���i�ꗗ�͂�����</a></div>');
}

//�V�����_�[�|�[�`���񂰃|�[�`�^�|�[�`��o�b�O�C���o�b�O�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30800") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30800&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00568">�x�����]���Ŕ̔����̂��ׂẴV�����_�[�|�[�`���񂰃|�[�`</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30800&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01069">�x�����]���Ŕ̔����̂��ׂẴV�����_�[�|�[�`���񂰃|�[�`�͂�����</a></div>');
}

//���σ|�[�`�^�|�[�`��o�b�O�C���o�b�O�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30801") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30801&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00569">�x�����]���Ŕ̔����̂��ׂẲ��σ|�[�`</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30801&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01070">�x�����]���Ŕ̔����̂��ׂẲ��σ|�[�`�͂�����</a></div>');
}

//�o�b�O�C���o�b�O�^�|�[�`��o�b�O�C���o�b�O�^�C��o�b�O��A�N�Z�T���[

if(param["C"] == "30802") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30802&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00570">�x�����]���Ŕ̔����̂��ׂẴo�b�O�C���o�b�O</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30802&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01071">�x�����]���Ŕ̔����̂��ׂẴo�b�O�C���o�b�O�͂�����</a></div>');
}

//���̑��̃|�[�`��o�b�O�C���o�b�O���i�ꗗ�^�|�[�`��o�b�O�C���o�b�O�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30899") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30899&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00571">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃|�[�`��o�b�O�C���o�b�O���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30899&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01072">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃|�[�`��o�b�O�C���o�b�O���i�ꗗ�͂�����</a></div>');
}

//�w�֥�����O�^�A�N�Z�T���[��W���G���[�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30900") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30900&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00572">�x�����]���Ŕ̔����̂��ׂĂ̎w�֥�����O</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30900&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01073">�x�����]���Ŕ̔����̂��ׂĂ̎w�֥�����O�͂�����</a></div>');
}

//�s�A�X�^�A�N�Z�T���[��W���G���[�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30901") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30901&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00573">�x�����]���Ŕ̔����̂��ׂẴs�A�X</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30901&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01074">�x�����]���Ŕ̔����̂��ׂẴs�A�X�͂�����</a></div>');
}

//�C�������O�^�A�N�Z�T���[��W���G���[�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30902") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30902&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00574">�x�����]���Ŕ̔����̂��ׂẴC�������O</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30902&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01075">�x�����]���Ŕ̔����̂��ׂẴC�������O�͂�����</a></div>');
}

//�l�b�N���X��y���_���g��`���[�J�[�^�A�N�Z�T���[��W���G���[�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30904") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30904&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00575">�x�����]���Ŕ̔����̂��ׂẴl�b�N���X��y���_���g��`���[�J�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30904&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01076">�x�����]���Ŕ̔����̂��ׂẴl�b�N���X��y���_���g��`���[�J�[�͂�����</a></div>');
}

//�u���X���b�g��o���O���^�A�N�Z�T���[��W���G���[�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30905") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30905&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00576">�x�����]���Ŕ̔����̂��ׂẴu���X���b�g��o���O��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30905&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01077">�x�����]���Ŕ̔����̂��ׂẴu���X���b�g��o���O���͂�����</a></div>');
}

//�A���N���b�g��g�E�����O�^�A�N�Z�T���[��W���G���[�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30906") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30906&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00577">�x�����]���Ŕ̔����̂��ׂẴA���N���b�g��g�E�����O</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30906&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01078">�x�����]���Ŕ̔����̂��ׂẴA���N���b�g��g�E�����O�͂�����</a></div>');
}

//�R�T�[�W����u���[�`�^�A�N�Z�T���[��W���G���[�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30907") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30907&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00578">�x�����]���Ŕ̔����̂��ׂẴR�T�[�W����u���[�`</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30907&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01079">�x�����]���Ŕ̔����̂��ׂẴR�T�[�W����u���[�`�͂�����</a></div>');
}

//���̑��̃A�N�Z�T���[��W���G���[���i�ꗗ�^�A�N�Z�T���[��W���G���[�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "30999") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30999&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00579">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃A�N�Z�T���[��W���G���[���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=30999&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01080">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃A�N�Z�T���[��W���G���[���i�ꗗ�͂�����</a></div>');
}

//�V���V����w�A�S���^�w�A�A�N�Z�T���[�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "31700") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31700&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00580">�x�����]���Ŕ̔����̂��ׂẴV���V����w�A�S��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31700&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01081">�x�����]���Ŕ̔����̂��ׂẴV���V����w�A�S���͂�����</a></div>');
}

//�N���b�v��o���b�^��J�`���[�V���^�w�A�A�N�Z�T���[�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "31701") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31701&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00581">�x�����]���Ŕ̔����̂��ׂẴN���b�v��o���b�^��J�`���[�V��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31701&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01082">�x�����]���Ŕ̔����̂��ׂẴN���b�v��o���b�^��J�`���[�V���͂�����</a></div>');
}

//�w�A�A�����W�֘A���i�^�w�A�A�N�Z�T���[�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "31702") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31702&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00582">�x�����]���Ŕ̔����̂��ׂẴw�A�A�����W�֘A���i</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31702&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01083">�x�����]���Ŕ̔����̂��ׂẴw�A�A�����W�֘A���i�͂�����</a></div>');
}

//���̑��̃w�A�A�N�Z�T���[���i�ꗗ�^�w�A�A�N�Z�T���[�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "31799") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31799&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00583">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃w�A�A�N�Z�T���[���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31799&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01084">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃w�A�A�N�Z�T���[���i�ꗗ�͂�����</a></div>');
}

//�r�W�l�X��t�H�[�}���r���v�^�r���v�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "31100") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31100&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00584">�x�����]���Ŕ̔����̂��ׂẴr�W�l�X��t�H�[�}���r���v</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31100&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01085">�x�����]���Ŕ̔����̂��ׂẴr�W�l�X��t�H�[�}���r���v�͂�����</a></div>');
}

//�J�W���A����X�|�[�c�r���v�^�r���v�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "31101") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31101&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00585">�x�����]���Ŕ̔����̂��ׂẴJ�W���A����X�|�[�c�r���v</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31101&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01086">�x�����]���Ŕ̔����̂��ׂẴJ�W���A����X�|�[�c�r���v�͂�����</a></div>');
}

//���̑��̘r���v���i�ꗗ�^�r���v�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "31199") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31199&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00586">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̘r���v���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31199&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01087">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̘r���v���i�ꗗ�͂�����</a></div>');
}

//�x���g�^�x���g�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "31200") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31200&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00587">�x�����]���Ŕ̔����̂��ׂẴx���g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31200&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01088">�x�����]���Ŕ̔����̂��ׂẴx���g�͂�����</a></div>');
}

//���̑��̃x���g���i�ꗗ�^�x���g�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "31299") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31299&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00588">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃x���g���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31299&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01089">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃x���g���i�ꗗ�͂�����</a></div>');
}

//�X�J�[�t�^�X�J�[�t��X�g�[����}�t���[�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "31300") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31300&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00589">�x�����]���Ŕ̔����̂��ׂẴX�J�[�t</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31300&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01090">�x�����]���Ŕ̔����̂��ׂẴX�J�[�t�͂�����</a></div>');
}

//�X�g�[���^�X�J�[�t��X�g�[����}�t���[�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "31301") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31301&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00590">�x�����]���Ŕ̔����̂��ׂẴX�g�[��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31301&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01091">�x�����]���Ŕ̔����̂��ׂẴX�g�[���͂�����</a></div>');
}

//�X�k�[�h��e�B�y�b�h�^�X�J�[�t��X�g�[����}�t���[�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "31302") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31302&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00591">�x�����]���Ŕ̔����̂��ׂẴX�k�[�h��e�B�y�b�h</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31302&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01092">�x�����]���Ŕ̔����̂��ׂẴX�k�[�h��e�B�y�b�h�͂�����</a></div>');
}

//�l�b�N�E�H�[�}�[�^�X�J�[�t��X�g�[����}�t���[�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "31303") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31303&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00592">�x�����]���Ŕ̔����̂��ׂẴl�b�N�E�H�[�}�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31303&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01093">�x�����]���Ŕ̔����̂��ׂẴl�b�N�E�H�[�}�[�͂�����</a></div>');
}

//���̑��̃X�J�[�t��X�g�[����}�t���[���i�ꗗ�^�X�J�[�t��X�g�[����}�t���[�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "31399") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31399&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00593">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃X�J�[�t��X�g�[����}�t���[���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31399&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01094">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃X�J�[�t��X�g�[����}�t���[���i�ꗗ�͂�����</a></div>');
}

//�X�q�^�X�q�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "31400") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31400&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00594">�x�����]���Ŕ̔����̂��ׂĂ̖X�q</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31400&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01095">�x�����]���Ŕ̔����̂��ׂĂ̖X�q�͂�����</a></div>');
}

//���̑��̖X�q���i�ꗗ�^�X�q�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "31499") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31499&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00595">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̖X�q���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31499&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01096">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̖X�q���i�ꗗ�͂�����</a></div>');
}

//���P����J���p�P�^�P����C���O�b�Y�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "31900") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31900&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00596">�x�����]���Ŕ̔����̂��ׂĂ̓��P����J���p�P</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31900&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01097">�x�����]���Ŕ̔����̂��ׂĂ̓��P����J���p�P�͂�����</a></div>');
}

//�J�P�^�P����C���O�b�Y�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "31901") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31901&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00597">�x�����]���Ŕ̔����̂��ׂẲJ�P</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31901&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01098">�x�����]���Ŕ̔����̂��ׂẲJ�P�͂�����</a></div>');
}

//���C���R�[�g��|���`���^�P����C���O�b�Y�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "31902") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31902&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00598">�x�����]���Ŕ̔����̂��ׂẴ��C���R�[�g��|���`��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31902&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01099">�x�����]���Ŕ̔����̂��ׂẴ��C���R�[�g��|���`���͂�����</a></div>');
}

//���̑��̎P����C���O�b�Y���i�ꗗ�^�P����C���O�b�Y�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "31999") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31999&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00599">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̎P����C���O�b�Y���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31999&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01100">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̎P����C���O�b�Y���i�ꗗ�͂�����</a></div>');
}

//�������Տ����^�������Տ����^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "31800") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31800&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00600">�x�����]���Ŕ̔����̂��ׂĂ̊������Տ���</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31800&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01101">�x�����]���Ŕ̔����̂��ׂĂ̊������Տ����͂�����</a></div>');
}

//���̑��̊������Տ������i�ꗗ�^�������Տ����^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "31899") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31899&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00601">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̊������Տ������i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31899&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01102">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̊������Տ������i�ꗗ�͂�����</a></div>');
}

//�T���O���X����ă��K�l�^�t�@�b�V�����G�݁^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "31500") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31500&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00602">�x�����]���Ŕ̔����̂��ׂẴT���O���X����ă��K�l</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31500&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01103">�x�����]���Ŕ̔����̂��ׂẴT���O���X����ă��K�l�͂�����</a></div>');
}

//�V�ዾ����[�f�B���O�O���X�^�t�@�b�V�����G�݁^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "31507") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31507&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00603">�x�����]���Ŕ̔����̂��ׂĂ̘V�ዾ����[�f�B���O�O���X</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31507&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01104">�x�����]���Ŕ̔����̂��ׂĂ̘V�ዾ����[�f�B���O�O���X�͂�����</a></div>');
}

//��ܥ�A�[���J�o�[�^�t�@�b�V�����G�݁^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "31502") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31502&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00604">�x�����]���Ŕ̔����̂��ׂĂ̎�ܥ�A�[���J�o�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31502&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01105">�x�����]���Ŕ̔����̂��ׂĂ̎�ܥ�A�[���J�o�[�͂�����</a></div>');
}

//�n���J�`��n���h�^�I���^�t�@�b�V�����G�݁^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "31503") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31503&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00605">�x�����]���Ŕ̔����̂��ׂẴn���J�`��n���h�^�I��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31503&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01106">�x�����]���Ŕ̔����̂��ׂẴn���J�`��n���h�^�I���͂�����</a></div>');
}

//�X�g���b�v��`���[���^�t�@�b�V�����G�݁^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "31504") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31504&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00606">�x�����]���Ŕ̔����̂��ׂẴX�g���b�v��`���[��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31504&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01107">�x�����]���Ŕ̔����̂��ׂẴX�g���b�v��`���[���͂�����</a></div>');
}

//���K�l�P�[�X����K�l�p�i�^�t�@�b�V�����G�݁^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "31505") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31505&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00607">�x�����]���Ŕ̔����̂��ׂẴ��K�l�P�[�X����K�l�p�i</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31505&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01108">�x�����]���Ŕ̔����̂��ׂẴ��K�l�P�[�X����K�l�p�i�͂�����</a></div>');
}

//�a�������^�t�@�b�V�����G�݁^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "31506") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31506&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00608">�x�����]���Ŕ̔����̂��ׂĂ̘a������</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31506&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01109">�x�����]���Ŕ̔����̂��ׂĂ̘a�������͂�����</a></div>');
}

//���̑��̃t�@�b�V�����G�ݏ��i�ꗗ�^�t�@�b�V�����G�݁^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "31599") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31599&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00609">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃t�@�b�V�����G�ݏ��i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=31599&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01110">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃t�@�b�V�����G�ݏ��i�ꗗ�͂�����</a></div>');
}

//�i�[�X�T���_���^�i�[�X�T���_����i�[�X�V���[�Y�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "32000") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=32000&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00610">�x�����]���Ŕ̔����̂��ׂẴi�[�X�T���_��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=32000&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01111">�x�����]���Ŕ̔����̂��ׂẴi�[�X�T���_���͂�����</a></div>');
}

//�i�[�X�V���[�Y�^�i�[�X�T���_����i�[�X�V���[�Y�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "32001") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=32001&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00611">�x�����]���Ŕ̔����̂��ׂẴi�[�X�V���[�Y</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=32001&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01112">�x�����]���Ŕ̔����̂��ׂẴi�[�X�V���[�Y�͂�����</a></div>');
}

//���̑��̃i�[�X�T���_����i�[�X�V���[�Y���i�ꗗ�^�i�[�X�T���_����i�[�X�V���[�Y�^�C��o�b�O��A�N�Z�T���[
if(param["C"] == "32099") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=32099&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00612">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃i�[�X�T���_����i�[�X�V���[�Y���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=32099&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01113">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃i�[�X�T���_����i�[�X�V���[�Y���i�ꗗ�͂�����</a></div>');
}

//�_�C�j���O�e�[�u����Z�b�g�^�e�[�u����f�X�N������^�Ƌ漏��[
if(param["C"] == "90000") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90000&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00613">�x�����]���Ŕ̔����̂��ׂẴ_�C�j���O�e�[�u����Z�b�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90000&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01114">�x�����]���Ŕ̔����̂��ׂẴ_�C�j���O�e�[�u����Z�b�g�͂�����</a></div>');
}

//���[�e�[�u�������^�e�[�u����f�X�N������^�Ƌ漏��[
if(param["C"] == "90001") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90001&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00614">�x�����]���Ŕ̔����̂��ׂẴ��[�e�[�u�������</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90001&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01115">�x�����]���Ŕ̔����̂��ׂẴ��[�e�[�u�������͂�����</a></div>');
}

//�T�C�h�e�[�u����R���\�[���^�e�[�u����f�X�N������^�Ƌ漏��[
if(param["C"] == "90002") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90002&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00615">�x�����]���Ŕ̔����̂��ׂẴT�C�h�e�[�u����R���\�[��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90002&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01116">�x�����]���Ŕ̔����̂��ׂẴT�C�h�e�[�u����R���\�[���͂�����</a></div>');
}

//���[�N�f�X�N��p�\�R���f�X�N�^�e�[�u����f�X�N������^�Ƌ漏��[
if(param["C"] == "90003") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90003&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00616">�x�����]���Ŕ̔����̂��ׂẴ��[�N�f�X�N��p�\�R���f�X�N</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90003&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01117">�x�����]���Ŕ̔����̂��ׂẴ��[�N�f�X�N��p�\�R���f�X�N�͂�����</a></div>');
}

//�f�X�N���S����f�X�N�T�C�h���b�N�^�e�[�u����f�X�N������^�Ƌ漏��[
if(param["C"] == "90005") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90005&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00617">�x�����]���Ŕ̔����̂��ׂẴf�X�N���S����f�X�N�T�C�h���b�N</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90005&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01118">�x�����]���Ŕ̔����̂��ׂẴf�X�N���S����f�X�N�T�C�h���b�N�͂�����</a></div>');
}

//�����^�e�[�u����f�X�N������^�Ƌ漏��[
if(param["C"] == "90007") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90007&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00618">�x�����]���Ŕ̔����̂��ׂĂ̂�����</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90007&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01119">�x�����]���Ŕ̔����̂��ׂĂ̂����͂�����</a></div>');
}

//���̑��̃e�[�u����f�X�N��������i�ꗗ�^�e�[�u����f�X�N������^�Ƌ漏��[
if(param["C"] == "90099") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90099&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00619">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃e�[�u����f�X�N��������i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90099&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01120">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃e�[�u����f�X�N��������i�ꗗ�͂�����</a></div>');
}

//�_�C�j���O�`�F�A��x���`�^�`�F�A��֎q��X�c�[���^�Ƌ漏��[
if(param["C"] == "91000") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91000&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00620">�x�����]���Ŕ̔����̂��ׂẴ_�C�j���O�`�F�A��x���`</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91000&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01121">�x�����]���Ŕ̔����̂��ׂẴ_�C�j���O�`�F�A��x���`�͂�����</a></div>');
}

//�f�X�N�`�F�A����[�N�`�F�A�^�`�F�A��֎q��X�c�[���^�Ƌ漏��[
if(param["C"] == "91001") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91001&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00621">�x�����]���Ŕ̔����̂��ׂẴf�X�N�`�F�A����[�N�`�F�A</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91001&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01122">�x�����]���Ŕ̔����̂��ׂẴf�X�N�`�F�A����[�N�`�F�A�͂�����</a></div>');
}

//�����b�N�X�`�F�A��p�[�\�i���`�F�A�^�`�F�A��֎q��X�c�[���^�Ƌ漏��[
if(param["C"] == "91002") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91002&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00622">�x�����]���Ŕ̔����̂��ׂẴ����b�N�X�`�F�A��p�[�\�i���`�F�A</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91002&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01123">�x�����]���Ŕ̔����̂��ׂẴ����b�N�X�`�F�A��p�[�\�i���`�F�A�͂�����</a></div>');
}

//�X�c�[������[�X�c�[���^�`�F�A��֎q��X�c�[���^�Ƌ漏��[
if(param["C"] == "91003") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91003&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00623">�x�����]���Ŕ̔����̂��ׂẴX�c�[������[�X�c�[��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91003&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01124">�x�����]���Ŕ̔����̂��ׂẴX�c�[������[�X�c�[���͂�����</a></div>');
}

//���̑��̃`�F�A��֎q��X�c�[�����i�ꗗ�^�`�F�A��֎q��X�c�[���^�Ƌ漏��[
if(param["C"] == "91099") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91099&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00624">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃`�F�A��֎q��X�c�[�����i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91099&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01125">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃`�F�A��֎q��X�c�[�����i�ꗗ�͂�����</a></div>');
}

//�\�t�@�[�^�\�t�@�[��\�t�@�[�x�b�h����֎q�^�Ƌ漏��[
if(param["C"] == "90100") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90100&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00625">�x�����]���Ŕ̔����̂��ׂẴ\�t�@�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90100&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01126">�x�����]���Ŕ̔����̂��ׂẴ\�t�@�[�͂�����</a></div>');
}

//���[�\�t�@�[�^�\�t�@�[��\�t�@�[�x�b�h����֎q�^�Ƌ漏��[
if(param["C"] == "90103") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90103&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00626">�x�����]���Ŕ̔����̂��ׂẴ��[�\�t�@�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90103&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01127">�x�����]���Ŕ̔����̂��ׂẴ��[�\�t�@�[�͂�����</a></div>');
}

//�\�t�@�[�x�b�h�^�\�t�@�[��\�t�@�[�x�b�h����֎q�^�Ƌ漏��[
if(param["C"] == "90101") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90101&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00627">�x�����]���Ŕ̔����̂��ׂẴ\�t�@�[�x�b�h</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90101&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01128">�x�����]���Ŕ̔����̂��ׂẴ\�t�@�[�x�b�h�͂�����</a></div>');
}

//�I�b�g�}���^�\�t�@�[��\�t�@�[�x�b�h����֎q�^�Ƌ漏��[
if(param["C"] == "90104") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90104&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00628">�x�����]���Ŕ̔����̂��ׂẴI�b�g�}��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90104&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01129">�x�����]���Ŕ̔����̂��ׂẴI�b�g�}���͂�����</a></div>');
}

//���֎q�^�\�t�@�[��\�t�@�[�x�b�h����֎q�^�Ƌ漏��[
if(param["C"] == "90102") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90102&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00629">�x�����]���Ŕ̔����̂��ׂĂ̍��֎q</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90102&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01130">�x�����]���Ŕ̔����̂��ׂĂ̍��֎q�͂�����</a></div>');
}

//���̑��̃\�t�@�[��\�t�@�[�x�b�h����֎q���i�ꗗ�^�\�t�@�[��\�t�@�[�x�b�h����֎q�^�Ƌ漏��[
if(param["C"] == "90199") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90199&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00630">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃\�t�@�[��\�t�@�[�x�b�h����֎q���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90199&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01131">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃\�t�@�[��\�t�@�[�x�b�h����֎q���i�ꗗ�͂�����</a></div>');
}

//���̑��̃x�b�h��}�b�g���X���i�ꗗ�^�x�b�h��}�b�g���X�^�Ƌ漏��[
if(param["C"] == "90299") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90299&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00631">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃x�b�h��}�b�g���X���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90299&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01132">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃x�b�h��}�b�g���X���i�ꗗ�͂�����</a></div>');
}

//�X�^���h�~���[��p���^�~���[����䥃p�[�e�[�V�����^�Ƌ漏��[
if(param["C"] == "91200") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91200&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00632">�x�����]���Ŕ̔����̂��ׂẴX�^���h�~���[��p��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91200&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01133">�x�����]���Ŕ̔����̂��ׂẴX�^���h�~���[��p���͂�����</a></div>');
}

//�h���b�T�[�����^�~���[����䥃p�[�e�[�V�����^�Ƌ漏��[
if(param["C"] == "91201") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91201&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00633">�x�����]���Ŕ̔����̂��ׂẴh���b�T�[�����</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91201&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01134">�x�����]���Ŕ̔����̂��ׂẴh���b�T�[�����͂�����</a></div>');
}

//�p�[�e�[�V�����^�~���[����䥃p�[�e�[�V�����^�Ƌ漏��[
if(param["C"] == "91202") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91202&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00634">�x�����]���Ŕ̔����̂��ׂẴp�[�e�[�V����</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91202&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01135">�x�����]���Ŕ̔����̂��ׂẴp�[�e�[�V�����͂�����</a></div>');
}

//���̑��̃~���[����䥃p�[�e�[�V�������i�ꗗ�^�~���[����䥃p�[�e�[�V�����^�Ƌ漏��[
if(param["C"] == "91299") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91299&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00635">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃~���[����䥃p�[�e�[�V�������i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91299&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01136">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃~���[����䥃p�[�e�[�V�������i�ꗗ�͂�����</a></div>');
}

//�H��I��L�b�`���{�[�h�^�����W�䥃L�b�`�����[�^�Ƌ漏��[
if(param["C"] == "90500") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90500&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00636">�x�����]���Ŕ̔����̂��ׂĂ̐H��I��L�b�`���{�[�h</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90500&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01137">�x�����]���Ŕ̔����̂��ׂĂ̐H��I��L�b�`���{�[�h�͂�����</a></div>');
}

//�����W�䥃����W���b�N�^�����W�䥃L�b�`�����[�^�Ƌ漏��[
if(param["C"] == "90503") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90503&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00637">�x�����]���Ŕ̔����̂��ׂẴ����W�䥃����W���b�N</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90503&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01138">�x�����]���Ŕ̔����̂��ׂẴ����W�䥃����W���b�N�͂�����</a></div>');
}

//�L�b�`���X�g�b�J�[����Ԏ��[�^�����W�䥃L�b�`�����[�^�Ƌ漏��[
if(param["C"] == "90502") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90502&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00638">�x�����]���Ŕ̔����̂��ׂẴL�b�`���X�g�b�J�[����Ԏ��[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90502&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01139">�x�����]���Ŕ̔����̂��ׂẴL�b�`���X�g�b�J�[����Ԏ��[�͂�����</a></div>');
}

//�L�b�`���J�E���^�[�^�����W�䥃L�b�`�����[�^�Ƌ漏��[
if(param["C"] == "90501") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90501&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00639">�x�����]���Ŕ̔����̂��ׂẴL�b�`���J�E���^�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90501&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01140">�x�����]���Ŕ̔����̂��ׂẴL�b�`���J�E���^�[�͂�����</a></div>');
}

//�J�E���^�[����[�^�����W�䥃L�b�`�����[�^�Ƌ漏��[
if(param["C"] == "90504") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90504&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00640">�x�����]���Ŕ̔����̂��ׂẴJ�E���^�[����[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90504&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01141">�x�����]���Ŕ̔����̂��ׂẴJ�E���^�[����[�͂�����</a></div>');
}

//�J�E���^�[�����[�^�����W�䥃L�b�`�����[�^�Ƌ漏��[
if(param["C"] == "90505") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90505&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00641">�x�����]���Ŕ̔����̂��ׂẴJ�E���^�[�����[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90505&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01142">�x�����]���Ŕ̔����̂��ׂẴJ�E���^�[�����[�͂�����</a></div>');
}

//�L�b�`�����S�����؃��S���^�����W�䥃L�b�`�����[�^�Ƌ漏��[
if(param["C"] == "90506") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90506&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00642">�x�����]���Ŕ̔����̂��ׂẴL�b�`�����S�����؃��S��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90506&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01143">�x�����]���Ŕ̔����̂��ׂẴL�b�`�����S�����؃��S���͂�����</a></div>');
}

//���̑��̃����W�䥃L�b�`�����[���i�ꗗ�^�����W�䥃L�b�`�����[�^�Ƌ漏��[
if(param["C"] == "90599") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90599&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00643">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃����W�䥃L�b�`�����[���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90599&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01144">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃����W�䥃L�b�`�����[���i�ꗗ�͂�����</a></div>');
}

//�e���r��^�e���r�䥃��r���O���[�^�Ƌ漏��[
if(param["C"] == "90300") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90300&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00644">�x�����]���Ŕ̔����̂��ׂẴe���r��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90300&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01145">�x�����]���Ŕ̔����̂��ׂẴe���r��͂�����</a></div>');
}

//�R�[�i�[�e���r��^�e���r�䥃��r���O���[�^�Ƌ漏��[
if(param["C"] == "90302") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90302&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00645">�x�����]���Ŕ̔����̂��ׂẴR�[�i�[�e���r��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90302&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01146">�x�����]���Ŕ̔����̂��ׂẴR�[�i�[�e���r��͂�����</a></div>');
}

//�L�k�e���r�䥃t���L�V�u���e���r��^�e���r�䥃��r���O���[�^�Ƌ漏��[
if(param["C"] == "90303") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90303&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00646">�x�����]���Ŕ̔����̂��ׂĂ̐L�k�e���r�䥃t���L�V�u���e���r��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90303&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01147">�x�����]���Ŕ̔����̂��ׂĂ̐L�k�e���r�䥃t���L�V�u���e���r��͂�����</a></div>');
}

//�L���r�l�b�g����r���O�{�[�h��`�F�X�g�^�e���r�䥃��r���O���[�^�Ƌ漏��[
if(param["C"] == "90304") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90304&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00647">�x�����]���Ŕ̔����̂��ׂẴL���r�l�b�g����r���O�{�[�h��`�F�X�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90304&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01148">�x�����]���Ŕ̔����̂��ׂẴL���r�l�b�g����r���O�{�[�h��`�F�X�g�͂�����</a></div>');
}

//�d�b��FAX�䥑��i�`�F�X�g�^�e���r�䥃��r���O���[�^�Ƌ漏��[
if(param["C"] == "90301") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90301&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00648">�x�����]���Ŕ̔����̂��ׂĂ̓d�b��FAX�䥑��i�`�F�X�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90301&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01149">�x�����]���Ŕ̔����̂��ׂĂ̓d�b��FAX�䥑��i�`�F�X�g�͂�����</a></div>');
}

//�Q�[���@���[����r���O���[���S���^�e���r�䥃��r���O���[�^�Ƌ漏��[
if(param["C"] == "90305") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90305&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00649">�x�����]���Ŕ̔����̂��ׂẴQ�[���@���[����r���O���[���S��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90305&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01150">�x�����]���Ŕ̔����̂��ׂẴQ�[���@���[����r���O���[���S���͂�����</a></div>');
}

//���̑��̃e���r�䥃��r���O���[���i�ꗗ�^�e���r�䥃��r���O���[�^�Ƌ漏��[
if(param["C"] == "90399") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90399&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00650">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃e���r�䥃��r���O���[���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90399&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01151">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃e���r�䥃��r���O���[���i�ꗗ�͂�����</a></div>');
}

//�{�I����I��u�b�N�V�F���t�^�{�I����b�N��ǖʎ��[�^�Ƌ漏��[
if(param["C"] == "90601") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90601&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00651">�x�����]���Ŕ̔����̂��ׂĂ̖{�I����I��u�b�N�V�F���t</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90601&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01152">�x�����]���Ŕ̔����̂��ׂĂ̖{�I����I��u�b�N�V�F���t�͂�����</a></div>');
}

//�X�`�[�����b�N��I�[�v�����b�N�^�{�I����b�N��ǖʎ��[�^�Ƌ漏��[
if(param["C"] == "90602") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90602&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00652">�x�����]���Ŕ̔����̂��ׂẴX�`�[�����b�N��I�[�v�����b�N</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90602&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01153">�x�����]���Ŕ̔����̂��ׂẴX�`�[�����b�N��I�[�v�����b�N�͂�����</a></div>');
}

//�}�K�W�����b�N�^�{�I����b�N��ǖʎ��[�^�Ƌ漏��[
if(param["C"] == "90604") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90604&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00653">�x�����]���Ŕ̔����̂��ׂẴ}�K�W�����b�N</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90604&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01154">�x�����]���Ŕ̔����̂��ׂẴ}�K�W�����b�N�͂�����</a></div>');
}

//�ǖʎ��[�^�{�I����b�N��ǖʎ��[�^�Ƌ漏��[
if(param["C"] == "90611") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90611&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00654">�x�����]���Ŕ̔����̂��ׂĂ̕ǖʎ��[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90611&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01155">�x�����]���Ŕ̔����̂��ׂĂ̕ǖʎ��[�͂�����</a></div>');
}

//CD���b�N�DVD���b�N�^�{�I����b�N��ǖʎ��[�^�Ƌ漏��[
if(param["C"] == "90605") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90605&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00655">�x�����]���Ŕ̔����̂��ׂĂ�CD���b�N�DVD���b�N</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90605&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01156">�x�����]���Ŕ̔����̂��ׂĂ�CD���b�N�DVD���b�N�͂�����</a></div>');
}

//���̑��̖{�I����b�N��ǖʎ��[���i�ꗗ�^�{�I����b�N��ǖʎ��[�^�Ƌ漏��[
if(param["C"] == "90699") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90699&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00656">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̖{�I����b�N��ǖʎ��[���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90699&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01157">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̖{�I����b�N��ǖʎ��[���i�ꗗ�͂�����</a></div>');
}

//�^���X��ߗރ`�F�X�g����[�h���[�u�^�^���X��`�F�X�g��ߗގ��[�^�Ƌ漏��[
if(param["C"] == "90700") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90700&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00657">�x�����]���Ŕ̔����̂��ׂẴ^���X��ߗރ`�F�X�g����[�h���[�u</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90700&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01158">�x�����]���Ŕ̔����̂��ׂẴ^���X��ߗރ`�F�X�g����[�h���[�u�͂�����</a></div>');
}

//�n���K�[���b�N�^�^���X��`�F�X�g��ߗގ��[�^�Ƌ漏��[
if(param["C"] == "90701") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90701&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00658">�x�����]���Ŕ̔����̂��ׂẴn���K�[���b�N</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90701&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01159">�x�����]���Ŕ̔����̂��ׂẴn���K�[���b�N�͂�����</a></div>');
}

//�|�[���n���K�[�^�^���X��`�F�X�g��ߗގ��[�^�Ƌ漏��[
if(param["C"] == "90702") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90702&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00659">�x�����]���Ŕ̔����̂��ׂẴ|�[���n���K�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90702&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01160">�x�����]���Ŕ̔����̂��ׂẴ|�[���n���K�[�͂�����</a></div>');
}

//�N���[�[�b�g�n���K�[�^�^���X��`�F�X�g��ߗގ��[�^�Ƌ漏��[
if(param["C"] == "90712") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90712&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00660">�x�����]���Ŕ̔����̂��ׂẴN���[�[�b�g�n���K�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90712&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01161">�x�����]���Ŕ̔����̂��ׂẴN���[�[�b�g�n���K�[�͂�����</a></div>');
}

//�ߗރn���K�[��X���b�N�X�n���K�[�^�^���X��`�F�X�g��ߗގ��[�^�Ƌ漏��[
if(param["C"] == "90703") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90703&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00661">�x�����]���Ŕ̔����̂��ׂĂ̈ߗރn���K�[��X���b�N�X�n���K�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90703&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01162">�x�����]���Ŕ̔����̂��ׂĂ̈ߗރn���K�[��X���b�N�X�n���K�[�͂�����</a></div>');
}

//�ߗގ��[�ܥ���k�܁^�^���X��`�F�X�g��ߗގ��[�^�Ƌ漏��[
if(param["C"] == "90706") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90706&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00662">�x�����]���Ŕ̔����̂��ׂĂ̈ߗގ��[�ܥ���k��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90706&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01163">�x�����]���Ŕ̔����̂��ׂĂ̈ߗގ��[�ܥ���k�܂͂�����</a></div>');
}

//���̑��̃^���X��`�F�X�g��ߗގ��[���i�ꗗ�^�^���X��`�F�X�g��ߗގ��[�^�Ƌ漏��[
if(param["C"] == "90799") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90799&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00663">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃^���X��`�F�X�g��ߗގ��[���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90799&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01164">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃^���X��`�F�X�g��ߗގ��[���i�ꗗ�͂�����</a></div>');
}

//�z�c���[������ꃉ�b�N�^�����ꥃN���[�[�b�g���[�^�Ƌ漏��[
if(param["C"] == "91300") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91300&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00664">�x�����]���Ŕ̔����̂��ׂĂ̕z�c���[������ꃉ�b�N</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91300&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01165">�x�����]���Ŕ̔����̂��ׂĂ̕z�c���[������ꃉ�b�N�͂�����</a></div>');
}

//�ߑ��P�[�X����[�P�[�X�^�����ꥃN���[�[�b�g���[�^�Ƌ漏��[
if(param["C"] == "91301") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91301&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00665">�x�����]���Ŕ̔����̂��ׂĂ̈ߑ��P�[�X����[�P�[�X</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91301&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01166">�x�����]���Ŕ̔����̂��ׂĂ̈ߑ��P�[�X����[�P�[�X�͂�����</a></div>');
}

//�����ꥃN���[�[�b�g���[���S���^�����ꥃN���[�[�b�g���[�^�Ƌ漏��[
if(param["C"] == "91302") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91302&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00666">�x�����]���Ŕ̔����̂��ׂẲ����ꥃN���[�[�b�g���[���S��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91302&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01167">�x�����]���Ŕ̔����̂��ׂẲ����ꥃN���[�[�b�g���[���S���͂�����</a></div>');
}

//���̑��̉����ꥃN���[�[�b�g���[���i�ꗗ�^�����ꥃN���[�[�b�g���[�^�Ƌ漏��[
if(param["C"] == "91399") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91399&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00667">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̉����ꥃN���[�[�b�g���[���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91399&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01168">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̉����ꥃN���[�[�b�g���[���i�ꗗ�͂�����</a></div>');
}

//�A�N�Z�T���[���[��R���N�V�����P�[�X�^�t���[�{�b�N�X��������[�^�Ƌ漏��[
if(param["C"] == "91401") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91401&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00668">�x�����]���Ŕ̔����̂��ׂẴA�N�Z�T���[���[��R���N�V�����P�[�X</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91401&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01169">�x�����]���Ŕ̔����̂��ׂẴA�N�Z�T���[���[��R���N�V�����P�[�X�͂�����</a></div>');
}

//���C�N�{�b�N�X����C�N���S���^�t���[�{�b�N�X��������[�^�Ƌ漏��[
if(param["C"] == "91402") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91402&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00669">�x�����]���Ŕ̔����̂��ׂẴ��C�N�{�b�N�X����C�N���S��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91402&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01170">�x�����]���Ŕ̔����̂��ׂẴ��C�N�{�b�N�X����C�N���S���͂�����</a></div>');
}

//���[�^�[���[��d���^�b�v���[�^�t���[�{�b�N�X��������[�^�Ƌ漏��[
if(param["C"] == "91403") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91403&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00670">�x�����]���Ŕ̔����̂��ׂẴ��[�^�[���[��d���^�b�v���[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91403&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01171">�x�����]���Ŕ̔����̂��ׂẴ��[�^�[���[��d���^�b�v���[�͂�����</a></div>');
}

//�t���[�{�b�N�X��������[�P�[�X�^�t���[�{�b�N�X��������[�^�Ƌ漏��[
if(param["C"] == "91404") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91404&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00671">�x�����]���Ŕ̔����̂��ׂẴt���[�{�b�N�X��������[�P�[�X</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91404&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01172">�x�����]���Ŕ̔����̂��ׂẴt���[�{�b�N�X��������[�P�[�X�͂�����</a></div>');
}

//�����R����g�уX�^���h�^�t���[�{�b�N�X��������[�^�Ƌ漏��[
if(param["C"] == "91405") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91405&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00672">�x�����]���Ŕ̔����̂��ׂẴ����R����g�уX�^���h</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91405&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01173">�x�����]���Ŕ̔����̂��ׂẴ����R����g�уX�^���h�͂�����</a></div>');
}

//�Ǌ|�����[�^�t���[�{�b�N�X��������[�^�Ƌ漏��[
if(param["C"] == "91406") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91406&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00673">�x�����]���Ŕ̔����̂��ׂĂ̕Ǌ|�����[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91406&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01174">�x�����]���Ŕ̔����̂��ׂĂ̕Ǌ|�����[�͂�����</a></div>');
}

//���̑��̃t���[�{�b�N�X��������[���i�ꗗ�^�t���[�{�b�N�X��������[�^�Ƌ漏��[
if(param["C"] == "91499") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91499&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00674">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃t���[�{�b�N�X��������[���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91499&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01175">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃t���[�{�b�N�X��������[���i�ꗗ�͂�����</a></div>');
}

//���ʏ����[����Ԏ��[�^���ʏ�������h���[��g�C�����[�^�Ƌ漏��[
if(param["C"] == "90903") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90903&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00675">�x�����]���Ŕ̔����̂��ׂĂ̐��ʏ����[����Ԏ��[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90903&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01176">�x�����]���Ŕ̔����̂��ׂĂ̐��ʏ����[����Ԏ��[�͂�����</a></div>');
}

//�����h���[���b�N�����@���b�N�^���ʏ�������h���[��g�C�����[�^�Ƌ漏��[
if(param["C"] == "90902") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90902&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00676">�x�����]���Ŕ̔����̂��ׂẴ����h���[���b�N�����@���b�N</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90902&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01177">�x�����]���Ŕ̔����̂��ׂẴ����h���[���b�N�����@���b�N�͂�����</a></div>');
}

//�����h���[���S����o�X�P�b�g�^���ʏ�������h���[��g�C�����[�^�Ƌ漏��[
if(param["C"] == "90904") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90904&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00677">�x�����]���Ŕ̔����̂��ׂẴ����h���[���S����o�X�P�b�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90904&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01178">�x�����]���Ŕ̔����̂��ׂẴ����h���[���S����o�X�P�b�g�͂�����</a></div>');
}

//�g�C�����[�^���ʏ�������h���[��g�C�����[�^�Ƌ漏��[
if(param["C"] == "90901") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90901&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00678">�x�����]���Ŕ̔����̂��ׂẴg�C�����[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90901&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01179">�x�����]���Ŕ̔����̂��ׂẴg�C�����[�͂�����</a></div>');
}

//���̑��̐��ʏ�������h���[��g�C�����[���i�ꗗ�^���ʏ�������h���[��g�C�����[�^�Ƌ漏��[
if(param["C"] == "90999") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90999&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00679">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̐��ʏ�������h���[��g�C�����[���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90999&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01180">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̐��ʏ�������h���[��g�C�����[���i�ꗗ�͂�����</a></div>');
}

//���ʔ���V���[�Y�{�b�N�X�^���ʔ�����֥���O���[�^�Ƌ漏��[
if(param["C"] == "90800") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90800&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00680">�x�����]���Ŕ̔����̂��ׂẲ��ʔ���V���[�Y�{�b�N�X</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90800&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01181">�x�����]���Ŕ̔����̂��ׂẲ��ʔ���V���[�Y�{�b�N�X�͂�����</a></div>');
}

//�V���[�Y���b�N��u�[�c�X�^���h�^���ʔ�����֥���O���[�^�Ƌ漏��[
if(param["C"] == "90801") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90801&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00681">�x�����]���Ŕ̔����̂��ׂẴV���[�Y���b�N��u�[�c�X�^���h</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90801&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01182">�x�����]���Ŕ̔����̂��ׂẴV���[�Y���b�N��u�[�c�X�^���h�͂�����</a></div>');
}

//�V���[�Y�P�[�X��V���[�Y���[�p�i�^���ʔ�����֥���O���[�^�Ƌ漏��[
if(param["C"] == "90806") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90806&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00682">�x�����]���Ŕ̔����̂��ׂẴV���[�Y�P�[�X��V���[�Y���[�p�i</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90806&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01183">�x�����]���Ŕ̔����̂��ׂẴV���[�Y�P�[�X��V���[�Y���[�p�i�͂�����</a></div>');
}

//�X���b�p���b�N�^���ʔ�����֥���O���[�^�Ƌ漏��[
if(param["C"] == "90803") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90803&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00683">�x�����]���Ŕ̔����̂��ׂẴX���b�p���b�N</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90803&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01184">�x�����]���Ŕ̔����̂��ׂẴX���b�p���b�N�͂�����</a></div>');
}

//���֓��ݑ䥌��֎��[�֗��O�b�Y�^���ʔ�����֥���O���[�^�Ƌ漏��[
if(param["C"] == "90807") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90807&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00684">�x�����]���Ŕ̔����̂��ׂĂ̌��֓��ݑ䥌��֎��[�֗��O�b�Y</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90807&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01185">�x�����]���Ŕ̔����̂��ׂĂ̌��֓��ݑ䥌��֎��[�֗��O�b�Y�͂�����</a></div>');
}

//���O���[����u���^���ʔ�����֥���O���[�^�Ƌ漏��[
if(param["C"] == "90805") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90805&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00685">�x�����]���Ŕ̔����̂��ׂẲ��O���[����u��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90805&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01186">�x�����]���Ŕ̔����̂��ׂẲ��O���[����u���͂�����</a></div>');
}

//���O�@�J�o�[����O�@���b�N�^���ʔ�����֥���O���[�^�Ƌ漏��[
if(param["C"] == "90808") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90808&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00686">�x�����]���Ŕ̔����̂��ׂĂ̎��O�@�J�o�[����O�@���b�N</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90808&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01187">�x�����]���Ŕ̔����̂��ׂĂ̎��O�@�J�o�[����O�@���b�N�͂�����</a></div>');
}

//���̑��̉��ʔ�����֥���O���[���i�ꗗ�^���ʔ�����֥���O���[�^�Ƌ漏��[
if(param["C"] == "90899") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90899&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00687">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̉��ʔ�����֥���O���[���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=90899&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01188">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̉��ʔ�����֥���O���[���i�ꗗ�͂�����</a></div>');
}

//�����h�Z�����b�N�^�w�K����L�b�Y���[�^�Ƌ漏��[
if(param["C"] == "91500") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91500&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00688">�x�����]���Ŕ̔����̂��ׂẴ����h�Z�����b�N</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91500&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01189">�x�����]���Ŕ̔����̂��ׂẴ����h�Z�����b�N�͂�����</a></div>');
}

//�w�K����w�K�f�X�N�^�w�K����L�b�Y���[�^�Ƌ漏��[
if(param["C"] == "91501") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91501&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00689">�x�����]���Ŕ̔����̂��ׂĂ̊w�K����w�K�f�X�N</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91501&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01190">�x�����]���Ŕ̔����̂��ׂĂ̊w�K����w�K�f�X�N�͂�����</a></div>');
}

//�w�K���`�F�A��L�b�Y�`�F�A�^�w�K����L�b�Y���[�^�Ƌ漏��[
if(param["C"] == "91502") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91502&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00690">�x�����]���Ŕ̔����̂��ׂĂ̊w�K���`�F�A��L�b�Y�`�F�A</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91502&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01191">�x�����]���Ŕ̔����̂��ׂĂ̊w�K���`�F�A��L�b�Y�`�F�A�͂�����</a></div>');
}

//�w�K���֘A�A�C�e���^�w�K����L�b�Y���[�^�Ƌ漏��[
if(param["C"] == "91503") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91503&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00691">�x�����]���Ŕ̔����̂��ׂĂ̊w�K���֘A�A�C�e��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91503&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01192">�x�����]���Ŕ̔����̂��ׂĂ̊w�K���֘A�A�C�e���͂�����</a></div>');
}

//�L�b�Y�n���K�[�^�w�K����L�b�Y���[�^�Ƌ漏��[
if(param["C"] == "91504") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91504&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00692">�x�����]���Ŕ̔����̂��ׂẴL�b�Y�n���K�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91504&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01193">�x�����]���Ŕ̔����̂��ׂẴL�b�Y�n���K�[�͂�����</a></div>');
}

//�������᥊G�{���[�^�w�K����L�b�Y���[�^�Ƌ漏��[
if(param["C"] == "91505") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91505&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00693">�x�����]���Ŕ̔����̂��ׂĂ̂������᥊G�{���[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91505&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01194">�x�����]���Ŕ̔����̂��ׂĂ̂������᥊G�{���[�͂�����</a></div>');
}

//�L�b�Y�`�F�X�g��ߗގ��[�^�w�K����L�b�Y���[�^�Ƌ漏��[
if(param["C"] == "91506") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91506&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00694">�x�����]���Ŕ̔����̂��ׂẴL�b�Y�`�F�X�g��ߗގ��[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91506&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01195">�x�����]���Ŕ̔����̂��ׂẴL�b�Y�`�F�X�g��ߗގ��[�͂�����</a></div>');
}

//���̑��̊w�K����L�b�Y���[���i�ꗗ�^�w�K����L�b�Y���[�^�Ƌ漏��[
if(param["C"] == "91599") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91599&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00695">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̊w�K����L�b�Y���[���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=91599&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01196">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̊w�K����L�b�Y���[���i�ꗗ�͂�����</a></div>');
}

//�J�[�e���^�J�[�e����u���C���h�^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "120000") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120000&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00696">�x�����]���Ŕ̔����̂��ׂẴJ�[�e��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120000&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01197">�x�����]���Ŕ̔����̂��ׂẴJ�[�e���͂�����</a></div>');
}

//�Ռ��J�[�e���^�J�[�e����u���C���h�^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "120008") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120008&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00697">�x�����]���Ŕ̔����̂��ׂĂ̎Ռ��J�[�e��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120008&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01198">�x�����]���Ŕ̔����̂��ׂĂ̎Ռ��J�[�e���͂�����</a></div>');
}

//�ՔM�J�[�e���^�J�[�e����u���C���h�^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "120009") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120009&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00698">�x�����]���Ŕ̔����̂��ׂĂ̎ՔM�J�[�e��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120009&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01199">�x�����]���Ŕ̔����̂��ׂĂ̎ՔM�J�[�e���͂�����</a></div>');
}

//���[�X�J�[�e���^�J�[�e����u���C���h�^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "120001") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120001&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00699">�x�����]���Ŕ̔����̂��ׂẴ��[�X�J�[�e��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120001&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01200">�x�����]���Ŕ̔����̂��ׂẴ��[�X�J�[�e���͂�����</a></div>');
}

//�Ց����[�X�J�[�e���^�J�[�e����u���C���h�^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "120011") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120011&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00700">�x�����]���Ŕ̔����̂��ׂĂ̎Ց����[�X�J�[�e��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120011&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01201">�x�����]���Ŕ̔����̂��ׂĂ̎Ց����[�X�J�[�e���͂�����</a></div>');
}

//�ՔM���[�X�J�[�e���^�J�[�e����u���C���h�^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "120012") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120012&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00701">�x�����]���Ŕ̔����̂��ׂĂ̎ՔM���[�X�J�[�e��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120012&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01202">�x�����]���Ŕ̔����̂��ׂĂ̎ՔM���[�X�J�[�e���͂�����</a></div>');
}

//�J�[�e������[�X�J�[�e���Z�b�g�^�J�[�e����u���C���h�^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "120007") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120007&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00702">�x�����]���Ŕ̔����̂��ׂẴJ�[�e������[�X�J�[�e���Z�b�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120007&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01203">�x�����]���Ŕ̔����̂��ׂẴJ�[�e������[�X�J�[�e���Z�b�g�͂�����</a></div>');
}

//�I�[�_�[�J�[�e���^�J�[�e����u���C���h�^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "120002") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120002&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00703">�x�����]���Ŕ̔����̂��ׂẴI�[�_�[�J�[�e��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120002&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01204">�x�����]���Ŕ̔����̂��ׂẴI�[�_�[�J�[�e���͂�����</a></div>');
}

//�I�[�_�[���[�X�J�[�e���^�J�[�e����u���C���h�^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "120003") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120003&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00704">�x�����]���Ŕ̔����̂��ׂẴI�[�_�[���[�X�J�[�e��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120003&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01205">�x�����]���Ŕ̔����̂��ׂẴI�[�_�[���[�X�J�[�e���͂�����</a></div>');
}

//�̂��J�t�F�J�[�e���^�J�[�e����u���C���h�^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "120004") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120004&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00705">�x�����]���Ŕ̔����̂��ׂĂ̂̂��J�t�F�J�[�e��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120004&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01206">�x�����]���Ŕ̔����̂��ׂĂ̂̂��J�t�F�J�[�e���͂�����</a></div>');
}

//���[���X�N���[����u���C���h��V�F�[�h�^�J�[�e����u���C���h�^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "120005") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120005&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00706">�x�����]���Ŕ̔����̂��ׂẴ��[���X�N���[����u���C���h��V�F�[�h</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120005&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01207">�x�����]���Ŕ̔����̂��ׂẴ��[���X�N���[����u���C���h��V�F�[�h�͂�����</a></div>');
}

//�V�����[�J�[�e���^�J�[�e����u���C���h�^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "120013") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120013&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00707">�x�����]���Ŕ̔����̂��ׂẴV�����[�J�[�e��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120013&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01208">�x�����]���Ŕ̔����̂��ׂẴV�����[�J�[�e���͂�����</a></div>');
}

//�J�[�e�����[����A�N�Z�T���[�^�J�[�e����u���C���h�^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "120006") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120006&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00708">�x�����]���Ŕ̔����̂��ׂẴJ�[�e�����[����A�N�Z�T���[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120006&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01209">�x�����]���Ŕ̔����̂��ׂẴJ�[�e�����[����A�N�Z�T���[�͂�����</a></div>');
}

//���̑��̃J�[�e����u���C���h���i�ꗗ�^�J�[�e����u���C���h�^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "120099") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120099&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00709">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃J�[�e����u���C���h���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120099&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01210">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃J�[�e����u���C���h���i�ꗗ�͂�����</a></div>');
}

//���O�^���O��J�[�y�b�g�^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "120100") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120100&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00710">�x�����]���Ŕ̔����̂��ׂẴ��O</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120100&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01211">�x�����]���Ŕ̔����̂��ׂẴ��O�͂�����</a></div>');
}

//�L���g���O�^���O��J�[�y�b�g�^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "120105") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120105&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00711">�x�����]���Ŕ̔����̂��ׂẴL���g���O</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120105&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01212">�x�����]���Ŕ̔����̂��ׂẴL���g���O�͂�����</a></div>');
}

//�_�C�j���O���O�^���O��J�[�y�b�g�^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "120107") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120107&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00712">�x�����]���Ŕ̔����̂��ׂẴ_�C�j���O���O</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120107&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01213">�x�����]���Ŕ̔����̂��ׂẴ_�C�j���O���O�͂�����</a></div>');
}

//�J�[�y�b�g�^���O��J�[�y�b�g�^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "120101") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120101&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00713">�x�����]���Ŕ̔����̂��ׂẴJ�[�y�b�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120101&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01214">�x�����]���Ŕ̔����̂��ׂẴJ�[�y�b�g�͂�����</a></div>');
}

//�^�C���J�[�y�b�g��W���C���g�}�b�g�^���O��J�[�y�b�g�^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "120106") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120106&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00714">�x�����]���Ŕ̔����̂��ׂẴ^�C���J�[�y�b�g��W���C���g�}�b�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120106&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01215">�x�����]���Ŕ̔����̂��ׂẴ^�C���J�[�y�b�g��W���C���g�}�b�g�͂�����</a></div>');
}

//������u������|���O�^���O��J�[�y�b�g�^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "120104") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120104&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00715">�x�����]���Ŕ̔����̂��ׂĂ̂�����u������|���O</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120104&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01216">�x�����]���Ŕ̔����̂��ׂĂ̂�����u������|���O�͂�����</a></div>');
}

//���̑��̃��O��J�[�y�b�g���i�ꗗ�^���O��J�[�y�b�g�^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "120199") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120199&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00716">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃��O��J�[�y�b�g���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120199&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01217">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃��O��J�[�y�b�g���i�ꗗ�͂�����</a></div>');
}

//���փ}�b�g�^���փ}�b�g��}�b�g�^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "120700") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120700&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00717">�x�����]���Ŕ̔����̂��ׂĂ̌��փ}�b�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120700&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01218">�x�����]���Ŕ̔����̂��ׂĂ̌��փ}�b�g�͂�����</a></div>');
}

//�D���Ƃ��}�b�g��h�A�}�b�g�^���փ}�b�g��}�b�g�^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "120701") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120701&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00718">�x�����]���Ŕ̔����̂��ׂĂ̓D���Ƃ��}�b�g��h�A�}�b�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120701&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01219">�x�����]���Ŕ̔����̂��ׂĂ̓D���Ƃ��}�b�g��h�A�}�b�g�͂�����</a></div>');
}

//���̑��̌��փ}�b�g��}�b�g���i�ꗗ�^���փ}�b�g��}�b�g�^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "120799") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120799&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00719">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̌��փ}�b�g��}�b�g���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120799&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01220">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̌��փ}�b�g��}�b�g���i�ꗗ�͂�����</a></div>');
}

//�\�t�@�[�J�o�[�^�\�t�@�[�J�o�[��N�b�V�����^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "120400") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120400&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00720">�x�����]���Ŕ̔����̂��ׂẴ\�t�@�[�J�o�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120400&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01221">�x�����]���Ŕ̔����̂��ׂẴ\�t�@�[�J�o�[�͂�����</a></div>');
}

//�t���[�N���X��}���`�J�o�[�^�\�t�@�[�J�o�[��N�b�V�����^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "120401") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120401&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00721">�x�����]���Ŕ̔����̂��ׂẴt���[�N���X��}���`�J�o�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120401&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01222">�x�����]���Ŕ̔����̂��ׂẴt���[�N���X��}���`�J�o�[�͂�����</a></div>');
}

//�N�b�V��������z�c�^�\�t�@�[�J�o�[��N�b�V�����^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "120403") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120403&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00722">�x�����]���Ŕ̔����̂��ׂẴN�b�V��������z�c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120403&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01223">�x�����]���Ŕ̔����̂��ׂẴN�b�V��������z�c�͂�����</a></div>');
}

//�N�b�V�����J�o�[����z�c�J�o�[�^�\�t�@�[�J�o�[��N�b�V�����^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "120404") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120404&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00723">�x�����]���Ŕ̔����̂��ׂẴN�b�V�����J�o�[����z�c�J�o�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120404&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01224">�x�����]���Ŕ̔����̂��ׂẴN�b�V�����J�o�[����z�c�J�o�[�͂�����</a></div>');
}

//�֎q�J�o�[��V�[�g�N�b�V�����^�\�t�@�[�J�o�[��N�b�V�����^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "120405") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120405&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00724">�x�����]���Ŕ̔����̂��ׂĂ̈֎q�J�o�[��V�[�g�N�b�V����</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120405&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01225">�x�����]���Ŕ̔����̂��ׂĂ̈֎q�J�o�[��V�[�g�N�b�V�����͂�����</a></div>');
}

//���̑��̃\�t�@�[�J�o�[��N�b�V�������i�ꗗ�^�\�t�@�[�J�o�[��N�b�V�����^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "120499") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120499&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00725">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃\�t�@�[�J�o�[��N�b�V�������i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120499&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01226">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃\�t�@�[�J�o�[��N�b�V�������i�ꗗ�͂�����</a></div>');
}

//�����z�c�Z�b�g�^�����z�c�^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "120300") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120300&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00726">�x�����]���Ŕ̔����̂��ׂĂ̂����z�c�Z�b�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120300&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01227">�x�����]���Ŕ̔����̂��ׂĂ̂����z�c�Z�b�g�͂�����</a></div>');
}

//�����|���z�c�^�����z�c�^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "120301") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120301&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00727">�x�����]���Ŕ̔����̂��ׂĂ̂����|���z�c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120301&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01228">�x�����]���Ŕ̔����̂��ׂĂ̂����|���z�c�͂�����</a></div>');
}

//�����~���z�c�^�����z�c�^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "120302") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120302&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00728">�x�����]���Ŕ̔����̂��ׂĂ̂����~���z�c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120302&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01229">�x�����]���Ŕ̔����̂��ׂĂ̂����~���z�c�͂�����</a></div>');
}

//�����z�c�J�o�[���|���^�����z�c�^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "120304") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120304&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00729">�x�����]���Ŕ̔����̂��ׂĂ̂����z�c�J�o�[���|��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120304&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01230">�x�����]���Ŕ̔����̂��ׂĂ̂����z�c�J�o�[���|���͂�����</a></div>');
}

//�����p�ѕz����|���ѕz�^�����z�c�^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "120303") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120303&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00730">�x�����]���Ŕ̔����̂��ׂĂ̂����p�ѕz����|���ѕz</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120303&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01231">�x�����]���Ŕ̔����̂��ׂĂ̂����p�ѕz����|���ѕz�͂�����</a></div>');
}

//���̑��̂����z�c���i�ꗗ�^�����z�c�^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "120399") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120399&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00731">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̂����z�c���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120399&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01232">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̂����z�c���i�ꗗ�͂�����</a></div>');
}

//���̑��̃t�@�u���b�N�������i�ꗗ�^�t�@�u���b�N�����^�J�[�e������O��\�t�@�[�J�o�[
if(param["C"] == "120899") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120899&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00732">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃t�@�u���b�N�������i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=120899&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01233">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃t�@�u���b�N�������i�ꗗ�͂�����</a></div>');
}

//�|���z�c��H�ѕz�c�^�z�c�����ѕz��P�b�g�^�Q�凌z�c��x�b�h
if(param["C"] == "130000") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130000&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00733">�x�����]���Ŕ̔����̂��ׂĂ̊|���z�c��H�ѕz�c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130000&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01234">�x�����]���Ŕ̔����̂��ׂĂ̊|���z�c��H�ѕz�c�͂�����</a></div>');
}

//�~���z�c�^�z�c�����ѕz��P�b�g�^�Q�凌z�c��x�b�h
if(param["C"] == "130001") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130001&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00734">�x�����]���Ŕ̔����̂��ׂĂ̕~���z�c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130001&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01235">�x�����]���Ŕ̔����̂��ׂĂ̕~���z�c�͂�����</a></div>');
}

//�z�c�Z�b�g�^�z�c�����ѕz��P�b�g�^�Q�凌z�c��x�b�h
if(param["C"] == "130002") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130002&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00735">�x�����]���Ŕ̔����̂��ׂĂ̕z�c�Z�b�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130002&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01236">�x�����]���Ŕ̔����̂��ׂĂ̕z�c�Z�b�g�͂�����</a></div>');

}

//���^�z�c�����ѕz��P�b�g�^�Q�凌z�c��x�b�h
if(param["C"] == "130003") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130003&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00736">�x�����]���Ŕ̔����̂��ׂĂ̖�</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130003&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01237">�x�����]���Ŕ̔����̂��ׂĂ̖��͂�����</a></div>');
}

//�������^�z�c�����ѕz��P�b�g�^�Q�凌z�c��x�b�h
if(param["C"] == "130004") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130004&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00737">�x�����]���Ŕ̔����̂��ׂĂ̕�����</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130004&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01238">�x�����]���Ŕ̔����̂��ׂĂ̕������͂�����</a></div>');
}

//�ѕz�^�z�c�����ѕz��P�b�g�^�Q�凌z�c��x�b�h
if(param["C"] == "130005") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130005&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00738">�x�����]���Ŕ̔����̂��ׂĂ̖ѕz</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130005&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01239">�x�����]���Ŕ̔����̂��ׂĂ̖ѕz�͂�����</a></div>');
}

//�^�I���P�b�g��P�b�g�^�z�c�����ѕz��P�b�g�^�Q�凌z�c��x�b�h
if(param["C"] == "130006") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130006&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00739">�x�����]���Ŕ̔����̂��ׂẴ^�I���P�b�g��P�b�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130006&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01240">�x�����]���Ŕ̔����̂��ׂẴ^�I���P�b�g��P�b�g�͂�����</a></div>');
}

//�u�����P�b�g��Ђ��|���^�z�c�����ѕz��P�b�g�^�Q�凌z�c��x�b�h
if(param["C"] == "130007") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130007&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00740">�x�����]���Ŕ̔����̂��ׂẴu�����P�b�g��Ђ��|��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130007&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01241">�x�����]���Ŕ̔����̂��ׂẴu�����P�b�g��Ђ��|���͂�����</a></div>');
}

//���̑��̕z�c�����ѕz��P�b�g���i�ꗗ�^�z�c�����ѕz��P�b�g�^�Q�凌z�c��x�b�h
if(param["C"] == "130099") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130099&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00741">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̕z�c�����ѕz��P�b�g���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130099&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01242">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̕z�c�����ѕz��P�b�g���i�ꗗ�͂�����</a></div>');
}

//�|���z�c�J�o�[�^�z�c�J�o�[��V�[�c�^�Q�凌z�c��x�b�h
if(param["C"] == "130100") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130100&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00742">�x�����]���Ŕ̔����̂��ׂĂ̊|���z�c�J�o�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130100&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01243">�x�����]���Ŕ̔����̂��ׂĂ̊|���z�c�J�o�[�͂�����</a></div>');
}

//�z�c�J�o�[�Z�b�g�^�z�c�J�o�[��V�[�c�^�Q�凌z�c��x�b�h
if(param["C"] == "130101") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130101&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00743">�x�����]���Ŕ̔����̂��ׂĂ̕z�c�J�o�[�Z�b�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130101&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01244">�x�����]���Ŕ̔����̂��ׂĂ̕z�c�J�o�[�Z�b�g�͂�����</a></div>');
}

//�~���z�c�J�o�[��a���p�V�[�c�^�z�c�J�o�[��V�[�c�^�Q�凌z�c��x�b�h
if(param["C"] == "130102") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130102&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00744">�x�����]���Ŕ̔����̂��ׂĂ̕~���z�c�J�o�[��a���p�V�[�c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130102&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01245">�x�����]���Ŕ̔����̂��ׂĂ̕~���z�c�J�o�[��a���p�V�[�c�͂�����</a></div>');
}

//�{�b�N�X�V�[�c��x�b�h�V�[�c�^�z�c�J�o�[��V�[�c�^�Q�凌z�c��x�b�h
if(param["C"] == "130103") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130103&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00745">�x�����]���Ŕ̔����̂��ׂẴ{�b�N�X�V�[�c��x�b�h�V�[�c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130103&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01246">�x�����]���Ŕ̔����̂��ׂẴ{�b�N�X�V�[�c��x�b�h�V�[�c�͂�����</a></div>');
}

//���J�o�[��s���[�P�[�X�^�z�c�J�o�[��V�[�c�^�Q�凌z�c��x�b�h
if(param["C"] == "130104") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130104&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00746">�x�����]���Ŕ̔����̂��ׂĂ̖��J�o�[��s���[�P�[�X</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130104&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01247">�x�����]���Ŕ̔����̂��ׂĂ̖��J�o�[��s���[�P�[�X�͂�����</a></div>');
}

//�~���p�b�h��p�b�h�V�[�c�^�z�c�J�o�[��V�[�c�^�Q�凌z�c��x�b�h
if(param["C"] == "130105") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130105&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00747">�x�����]���Ŕ̔����̂��ׂĂ̕~���p�b�h��p�b�h�V�[�c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130105&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01248">�x�����]���Ŕ̔����̂��ׂĂ̕~���p�b�h��p�b�h�V�[�c�͂�����</a></div>');
}

//�p�b�h��̌^�x�b�h�p�V�[�c�^�z�c�J�o�[��V�[�c�^�Q�凌z�c��x�b�h
if(param["C"] == "130106") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130106&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00748">�x�����]���Ŕ̔����̂��ׂẴp�b�h��̌^�x�b�h�p�V�[�c</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130106&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01249">�x�����]���Ŕ̔����̂��ׂẴp�b�h��̌^�x�b�h�p�V�[�c�͂�����</a></div>');
}

//���̑��̕z�c�J�o�[��V�[�c���i�ꗗ�^�z�c�J�o�[��V�[�c�^�Q�凌z�c��x�b�h
if(param["C"] == "130199") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130199&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00749">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̕z�c�J�o�[��V�[�c���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130199&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01250">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̕z�c�J�o�[��V�[�c���i�ꗗ�͂�����</a></div>');
}

//�x�b�h����[�t���x�b�h�^�x�b�h����̂��x�b�h�^�Q�凌z�c��x�b�h
if(param["C"] == "130200") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130200&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00750">�x�����]���Ŕ̔����̂��ׂẴx�b�h����[�t���x�b�h</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130200&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01251">�x�����]���Ŕ̔����̂��ׂẴx�b�h����[�t���x�b�h�͂�����</a></div>');
}

//���t�g�x�b�h��n�C�x�b�h�^�x�b�h����̂��x�b�h�^�Q�凌z�c��x�b�h
if(param["C"] == "130201") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130201&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00751">�x�����]���Ŕ̔����̂��ׂẴ��t�g�x�b�h��n�C�x�b�h</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130201&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01252">�x�����]���Ŕ̔����̂��ׂẴ��t�g�x�b�h��n�C�x�b�h�͂�����</a></div>');
}

//��i�x�b�h��q���p�x�b�h�^�x�b�h����̂��x�b�h�^�Q�凌z�c��x�b�h
if(param["C"] == "130202") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130202&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00752">�x�����]���Ŕ̔����̂��ׂĂ̓�i�x�b�h��q���p�x�b�h</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130202&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01253">�x�����]���Ŕ̔����̂��ׂĂ̓�i�x�b�h��q���p�x�b�h�͂�����</a></div>');
}

//���̂��x�b�h�^�x�b�h����̂��x�b�h�^�Q�凌z�c��x�b�h
if(param["C"] == "130203") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130203&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00753">�x�����]���Ŕ̔����̂��ׂĂ̂��̂��x�b�h</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130203&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01254">�x�����]���Ŕ̔����̂��ׂĂ̂��̂��x�b�h�͂�����</a></div>');
}

//�d�����N���C�j���O�x�b�h�^�x�b�h����̂��x�b�h�^�Q�凌z�c��x�b�h
if(param["C"] == "130204") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130204&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00754">�x�����]���Ŕ̔����̂��ׂĂ̓d�����N���C�j���O�x�b�h</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130204&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01255">�x�����]���Ŕ̔����̂��ׂĂ̓d�����N���C�j���O�x�b�h�͂�����</a></div>');
}

//���̑��̃x�b�h����̂��x�b�h���i�ꗗ�^�x�b�h����̂��x�b�h�^�Q�凌z�c��x�b�h
if(param["C"] == "130299") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130299&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00755">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃x�b�h����̂��x�b�h���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130299&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01256">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃x�b�h����̂��x�b�h���i�ꗗ�͂�����</a></div>');
}

//�}�b�g���X�^�}�b�g���X��z�c�}�b�g�^�Q�凌z�c��x�b�h
if(param["C"] == "130300") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130300&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00756">�x�����]���Ŕ̔����̂��ׂẴ}�b�g���X</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130300&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01257">�x�����]���Ŕ̔����̂��ׂẴ}�b�g���X�͂�����</a></div>');
}

//�܂肽���݃}�b�g���X��z�c�}�b�g�^�}�b�g���X��z�c�}�b�g�^�Q�凌z�c��x�b�h
if(param["C"] == "130301") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130301&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00757">�x�����]���Ŕ̔����̂��ׂĂ̐܂肽���݃}�b�g���X��z�c�}�b�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130301&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01258">�x�����]���Ŕ̔����̂��ׂĂ̐܂肽���݃}�b�g���X��z�c�}�b�g�͂�����</a></div>');
}

//���̑��̃}�b�g���X��z�c�}�b�g���i�ꗗ�^�}�b�g���X��z�c�}�b�g�^�Q�凌z�c��x�b�h
if(param["C"] == "130399") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130399&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00758">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃}�b�g���X��z�c�}�b�g���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130399&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01259">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃}�b�g���X��z�c�}�b�g���i�ꗗ�͂�����</a></div>');
}

//���̑��̃p�W���}���i�ꗗ�^�p�W���}�^�Q�凌z�c��x�b�h
if(param["C"] == "130499") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130499&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00759">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃p�W���}���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=130499&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01260">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃p�W���}���i�ꗗ�͂�����</a></div>');
}

//�祓y�祈��͓�^�祃t���C�p����������^�L�b�`���p�i��������
if(param["C"] == "150000") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150000&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00760">�x�����]���Ŕ̔����̂��ׂĂ̓祓y�祈��͓�</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150000&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01261">�x�����]���Ŕ̔����̂��ׂĂ̓祓y�祈��͓�͂�����</a></div>');
}

//�t���C�p���^�祃t���C�p����������^�L�b�`���p�i��������
if(param["C"] == "150001") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150001&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00761">�x�����]���Ŕ̔����̂��ׂẴt���C�p��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150001&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01262">�x�����]���Ŕ̔����̂��ׂẴt���C�p���͂�����</a></div>');
}

//�₩��P�g���^�祃t���C�p����������^�L�b�`���p�i��������
if(param["C"] == "150002") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150002&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00762">�x�����]���Ŕ̔����̂��ׂĂ̂₩��P�g��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150002&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01263">�x�����]���Ŕ̔����̂��ׂĂ̂₩��P�g���͂�����</a></div>');
}

//�d�q�����W��I�[�u�������W�p������^�祃t���C�p����������^�L�b�`���p�i��������
if(param["C"] == "150006") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150006&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00763">�x�����]���Ŕ̔����̂��ׂĂ̓d�q�����W��I�[�u�������W�p������</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150006&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01264">�x�����]���Ŕ̔����̂��ׂĂ̓d�q�����W��I�[�u�������W�p������͂�����</a></div>');
}

//���̑��̓祃t���C�p����������i�ꗗ�^�祃t���C�p����������^�L�b�`���p�i��������
if(param["C"] == "150099") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150099&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00764">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̓祃t���C�p����������i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150099&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01265">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̓祃t���C�p����������i�ꗗ�͂�����</a></div>');
}

//��^���L�b�`���c�[���^�L�b�`���p�i��������
if(param["C"] == "150400") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150400&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00765">�x�����]���Ŕ̔����̂��ׂĂ̕</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150400&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01266">�x�����]���Ŕ̔����̂��ׂĂ̕�͂�����</a></div>');
}

//�܂Ȕ^���L�b�`���c�[���^�L�b�`���p�i��������
if(param["C"] == "150401") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150401&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00766">�x�����]���Ŕ̔����̂��ׂĂ̂܂Ȕ�</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150401&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01267">�x�����]���Ŕ̔����̂��ׂĂ̂܂Ȕ͂�����</a></div>');
}

//�X���C�T�[��s�[���[����낵��^���L�b�`���c�[���^�L�b�`���p�i��������
if(param["C"] == "150402") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150402&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00767">�x�����]���Ŕ̔����̂��ׂẴX���C�T�[��s�[���[����낵��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150402&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01268">�x�����]���Ŕ̔����̂��ׂẴX���C�T�[��s�[���[����낵��͂�����</a></div>');
}

//���饃{�E����p�b�g�^���L�b�`���c�[���^�L�b�`���p�i��������
if(param["C"] == "150403") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150403&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00768">�x�����]���Ŕ̔����̂��ׂĂ̂��饃{�E����p�b�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150403&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01269">�x�����]���Ŕ̔����̂��ׂĂ̂��饃{�E����p�b�g�͂�����</a></div>');
}

//�g���O��؂΂���A���Ċ�^���L�b�`���c�[���^�L�b�`���p�i��������
if(param["C"] == "150404") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150404&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00769">�x�����]���Ŕ̔����̂��ׂẴg���O��؂΂���A���Ċ�</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150404&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01270">�x�����]���Ŕ̔����̂��ׂẴg���O��؂΂���A���Ċ�͂�����</a></div>');
}

//�w������ʁ^���L�b�`���c�[���^�L�b�`���p�i��������
if(param["C"] == "150405") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150405&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00770">�x�����]���Ŕ̔����̂��ׂẴw�������</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150405&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01271">�x�����]���Ŕ̔����̂��ׂẴw������ʂ͂�����</a></div>');
}

//�v�ʃJ�b�v��L�b�`���X�P�[����^�C�}�[�^���L�b�`���c�[���^�L�b�`���p�i��������
if(param["C"] == "150406") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150406&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00771">�x�����]���Ŕ̔����̂��ׂĂ̌v�ʃJ�b�v��L�b�`���X�P�[����^�C�}�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150406&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01272">�x�����]���Ŕ̔����̂��ׂĂ̌v�ʃJ�b�v��L�b�`���X�P�[����^�C�}�[�͂�����</a></div>');
}

//�V���R���L�b�`���p�i��c�[���^���L�b�`���c�[���^�L�b�`���p�i��������
if(param["C"] == "150408") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150408&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00772">�x�����]���Ŕ̔����̂��ׂẴV���R���L�b�`���p�i��c�[��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150408&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01273">�x�����]���Ŕ̔����̂��ׂẴV���R���L�b�`���p�i��c�[���͂�����</a></div>');
}

//���̑��̕��L�b�`���c�[�����i�ꗗ�^���L�b�`���c�[���^�L�b�`���p�i��������
if(param["C"] == "150499") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150499&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00773">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̕��L�b�`���c�[�����i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150499&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01274">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̕��L�b�`���c�[�����i�ꗗ�͂�����</a></div>');
}

//���؂�J�S����b�N��z���}�b�g�^���؂肩������b�N��L�b�`���������[�p�i�^�L�b�`���p�i��������
if(param["C"] == "150200") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150200&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00774">�x�����]���Ŕ̔����̂��ׂĂ̐��؂�J�S����b�N��z���}�b�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150200&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01275">�x�����]���Ŕ̔����̂��ׂĂ̐��؂�J�S����b�N��z���}�b�g�͂�����</a></div>');
}

//�􂢉��^���؂肩������b�N��L�b�`���������[�p�i�^�L�b�`���p�i��������
if(param["C"] == "150207") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150207&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00775">�x�����]���Ŕ̔����̂��ׂĂ̐􂢉�</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150207&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01276">�x�����]���Ŕ̔����̂��ׂĂ̐􂢉��͂�����</a></div>');
}

//�O�p�R�[�i�[��X�|���W���b�N�^���؂肩������b�N��L�b�`���������[�p�i�^�L�b�`���p�i��������
if(param["C"] == "150201") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150201&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00776">�x�����]���Ŕ̔����̂��ׂĂ̎O�p�R�[�i�[��X�|���W���b�N</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150201&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01277">�x�����]���Ŕ̔����̂��ׂĂ̎O�p�R�[�i�[��X�|���W���b�N�͂�����</a></div>');
}

//�R�[�i�[���b�N��R����������[�^���؂肩������b�N��L�b�`���������[�p�i�^�L�b�`���p�i��������
if(param["C"] == "150202") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150202&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00777">�x�����]���Ŕ̔����̂��ׂẴR�[�i�[���b�N��R����������[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150202&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01278">�x�����]���Ŕ̔����̂��ׂẴR�[�i�[���b�N��R����������[�͂�����</a></div>');
}

//�V���N���襒�����㥓˂�������[�^���؂肩������b�N��L�b�`���������[�p�i�^�L�b�`���p�i��������
if(param["C"] == "150208") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150208&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00778">�x�����]���Ŕ̔����̂��ׂẴV���N���襒�����㥓˂�������[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150208&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01279">�x�����]���Ŕ̔����̂��ׂẴV���N���襒�����㥓˂�������[�͂�����</a></div>');
}

//�V���N�����[��R���������[�^���؂肩������b�N��L�b�`���������[�p�i�^�L�b�`���p�i��������
if(param["C"] == "150209") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150209&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00779">�x�����]���Ŕ̔����̂��ׂẴV���N�����[��R���������[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150209&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01280">�x�����]���Ŕ̔����̂��ׂẴV���N�����[��R���������[�͂�����</a></div>');
}

//�݂�˒I�����[�^���؂肩������b�N��L�b�`���������[�p�i�^�L�b�`���p�i��������
if(param["C"] == "150210") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150210&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00780">�x�����]���Ŕ̔����̂��ׂĂ݂̒�˒I�����[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150210&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01281">�x�����]���Ŕ̔����̂��ׂĂ݂̒�˒I�����[�͂�����</a></div>');
}

//���̑��̐��؂肩������b�N��L�b�`���������[�p�i���i�ꗗ�^���؂肩������b�N��L�b�`���������[�p�i�^�L�b�`���p�i��������
if(param["C"] == "150299") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150299&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00781">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̐��؂肩������b�N��L�b�`���������[�p�i���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150299&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01282">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̐��؂肩������b�N��L�b�`���������[�p�i���i�ꗗ�͂�����</a></div>');
}

//���َq���c�[���^���َq��襂��ٓ��p�i������^�L�b�`���p�i��������
if(param["C"] == "150500") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150500&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00782">�x�����]���Ŕ̔����̂��ׂĂ̂��َq���c�[��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150500&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01283">�x�����]���Ŕ̔����̂��ׂĂ̂��َq���c�[���͂�����</a></div>');
}

//���ٓ����c�[���^���َq��襂��ٓ��p�i������^�L�b�`���p�i��������
if(param["C"] == "150501") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150501&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00783">�x�����]���Ŕ̔����̂��ׂĂ̂��ٓ����c�[��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150501&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01284">�x�����]���Ŕ̔����̂��ׂĂ̂��ٓ����c�[���͂�����</a></div>');
}

//���ٓ�������ٓ��p�܁^���َq��襂��ٓ��p�i������^�L�b�`���p�i��������
if(param["C"] == "150502") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150502&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00784">�x�����]���Ŕ̔����̂��ׂĂ̂��ٓ�������ٓ��p��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150502&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01285">�x�����]���Ŕ̔����̂��ׂĂ̂��ٓ�������ٓ��p�܂͂�����</a></div>');
}

//������}�O�{�g�� �^���َq��襂��ٓ��p�i������^�L�b�`���p�i��������
if(param["C"] == "150503") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150503&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00785">�x�����]���Ŕ̔����̂��ׂĂ̐�����}�O�{�g�� </a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150503&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01286">�x�����]���Ŕ̔����̂��ׂĂ̐�����}�O�{�g�� �͂�����</a></div>');
}

//���̑��̂��َq��襂��ٓ��p�i��������i�ꗗ�^���َq��襂��ٓ��p�i������^�L�b�`���p�i��������
if(param["C"] == "150599") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150599&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00786">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̂��َq��襂��ٓ��p�i��������i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150599&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01287">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̂��َq��襂��ٓ��p�i��������i�ꗗ�͂�����</a></div>');
}

//���M����M��J���[�M�����܎M�^�H��J�g�����[�^�L�b�`���p�i��������
if(param["C"] == "150100") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150100&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00787">�x�����]���Ŕ̔����̂��ׂĂ̂��M����M��J���[�M�����܎M</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150100&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01288">�x�����]���Ŕ̔����̂��ׂĂ̂��M����M��J���[�M�����܎M�͂�����</a></div>');
}

//�����`�v���[�g�^�H��J�g�����[�^�L�b�`���p�i��������
if(param["C"] == "150104") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150104&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00788">�x�����]���Ŕ̔����̂��ׂẴ����`�v���[�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150104&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01289">�x�����]���Ŕ̔����̂��ׂẴ����`�v���[�g�͂�����</a></div>');
}

//�ǂ�Ԃ襏�������q��J�b�v�^�H��J�g�����[�^�L�b�`���p�i��������
if(param["C"] == "150105") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150105&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00789">�x�����]���Ŕ̔����̂��ׂĂ̂ǂ�Ԃ襏�������q��J�b�v</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150105&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01290">�x�����]���Ŕ̔����̂��ׂĂ̂ǂ�Ԃ襏�������q��J�b�v�͂�����</a></div>');
}

//�}�O�J�b�v��O���X��R�b�v�^�H��J�g�����[�^�L�b�`���p�i��������
if(param["C"] == "150101") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150101&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00790">�x�����]���Ŕ̔����̂��ׂẴ}�O�J�b�v��O���X��R�b�v</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150101&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01291">�x�����]���Ŕ̔����̂��ׂẴ}�O�J�b�v��O���X��R�b�v�͂�����</a></div>');
}

//����|�b�g�^�H��J�g�����[�^�L�b�`���p�i��������
if(param["C"] == "150102") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150102&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00791">�x�����]���Ŕ̔����̂��ׂĂ̒���|�b�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150102&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01292">�x�����]���Ŕ̔����̂��ׂĂ̒���|�b�g�͂�����</a></div>');
}

//�X�v�[����t�H�[�N����^�H��J�g�����[�^�L�b�`���p�i��������
if(param["C"] == "150103") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150103&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00792">�x�����]���Ŕ̔����̂��ׂẴX�v�[����t�H�[�N���</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150103&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01293">�x�����]���Ŕ̔����̂��ׂẴX�v�[����t�H�[�N����͂�����</a></div>');
}

//���~��g���C�^�H��J�g�����[�^�L�b�`���p�i��������
if(param["C"] == "150106") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150106&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00793">�x�����]���Ŕ̔����̂��ׂĂ̂��~��g���C</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150106&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01294">�x�����]���Ŕ̔����̂��ׂĂ̂��~��g���C�͂�����</a></div>');
}

//���̑��̐H��J�g�����[���i�ꗗ�^�H��J�g�����[�^�L�b�`���p�i��������
if(param["C"] == "150199") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150199&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00794">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̐H��J�g�����[���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150199&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01295">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̐H��J�g�����[���i�ꗗ�͂�����</a></div>');
}

//�L���j�X�^�[��ۑ��e��^�H�i�ۑ���I�C���|�b�g�^�L�b�`���p�i��������
if(param["C"] == "150600") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150600&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00795">�x�����]���Ŕ̔����̂��ׂẴL���j�X�^�[��ۑ��e��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150600&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01296">�x�����]���Ŕ̔����̂��ׂẴL���j�X�^�[��ۑ��e��͂�����</a></div>');
}

//�Ăт¥���C�X�X�g�b�J�[�^�H�i�ۑ���I�C���|�b�g�^�L�b�`���p�i��������
if(param["C"] == "150601") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150601&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00796">�x�����]���Ŕ̔����̂��ׂĂ̕Ăт¥���C�X�X�g�b�J�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150601&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01297">�x�����]���Ŕ̔����̂��ׂĂ̕Ăт¥���C�X�X�g�b�J�[�͂�����</a></div>');
}

//�␅����␅�|�b�g�^�H�i�ۑ���I�C���|�b�g�^�L�b�`���p�i��������
if(param["C"] == "150603") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150603&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00797">�x�����]���Ŕ̔����̂��ׂĂ̗␅����␅�|�b�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150603&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01298">�x�����]���Ŕ̔����̂��ׂĂ̗␅����␅�|�b�g�͂�����</a></div>');
}

//�X�p�C�X���b�N�����������^�H�i�ۑ���I�C���|�b�g�^�L�b�`���p�i��������
if(param["C"] == "150604") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150604&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00798">�x�����]���Ŕ̔����̂��ׂẴX�p�C�X���b�N�����������</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150604&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01299">�x�����]���Ŕ̔����̂��ׂẴX�p�C�X���b�N�����������͂�����</a></div>');
}

//�I�C���|�b�g��J�[�g���b�W�^�H�i�ۑ���I�C���|�b�g�^�L�b�`���p�i��������
if(param["C"] == "150605") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150605&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00799">�x�����]���Ŕ̔����̂��ׂẴI�C���|�b�g��J�[�g���b�W</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150605&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01300">�x�����]���Ŕ̔����̂��ׂẴI�C���|�b�g��J�[�g���b�W�͂�����</a></div>');
}

//���̑��̐H�i�ۑ���I�C���|�b�g���i�ꗗ�^�H�i�ۑ���I�C���|�b�g�^�L�b�`���p�i��������
if(param["C"] == "150699") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150699&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00800">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̐H�i�ۑ���I�C���|�b�g���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150699&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01301">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̐H�i�ۑ���I�C���|�b�g���i�ꗗ�͂�����</a></div>');
}

//�L�b�`���}�b�g�^�L�b�`���}�b�g��t�@�u���b�N�^�L�b�`���p�i��������
if(param["C"] == "150300") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150300&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00801">�x�����]���Ŕ̔����̂��ׂẴL�b�`���}�b�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150300&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01302">�x�����]���Ŕ̔����̂��ׂẴL�b�`���}�b�g�͂�����</a></div>');
}

//�e�[�u���N���X������`�����}�b�g�^�L�b�`���}�b�g��t�@�u���b�N�^�L�b�`���p�i��������
if(param["C"] == "150301") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150301&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00802">�x�����]���Ŕ̔����̂��ׂẴe�[�u���N���X������`�����}�b�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150301&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01303">�x�����]���Ŕ̔����̂��ׂẴe�[�u���N���X������`�����}�b�g�͂�����</a></div>');
}

//�G�v�����^�L�b�`���}�b�g��t�@�u���b�N�^�L�b�`���p�i��������
if(param["C"] == "150302") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150302&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00803">�x�����]���Ŕ̔����̂��ׂẴG�v����</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150302&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01304">�x�����]���Ŕ̔����̂��ׂẴG�v�����͂�����</a></div>');
}

//�~�g�����~���^�L�b�`���}�b�g��t�@�u���b�N�^�L�b�`���p�i��������
if(param["C"] == "150304") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150304&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00804">�x�����]���Ŕ̔����̂��ׂẴ~�g�����~��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150304&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01305">�x�����]���Ŕ̔����̂��ׂẴ~�g�����~���͂�����</a></div>');
}

//�ӂ��񥂨���ڂ�^�L�b�`���}�b�g��t�@�u���b�N�^�L�b�`���p�i��������
if(param["C"] == "150303") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150303&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00805">�x�����]���Ŕ̔����̂��ׂĂ̂ӂ��񥂨���ڂ�</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150303&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01306">�x�����]���Ŕ̔����̂��ׂĂ̂ӂ��񥂨���ڂ�͂�����</a></div>');
}

//���̑��̃L�b�`���}�b�g��t�@�u���b�N���i�ꗗ�^�L�b�`���}�b�g��t�@�u���b�N�^�L�b�`���p�i��������
if(param["C"] == "150399") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150399&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00806">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃L�b�`���}�b�g��t�@�u���b�N���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150399&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01307">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃L�b�`���}�b�g��t�@�u���b�N���i�ꗗ�͂�����</a></div>');
}

//�����W�K�[�h������W�t�B���^�[�IH�}�b�g�^�L�b�`���S�~����|���p�i�^�L�b�`���p�i��������
if(param["C"] == "150700") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150700&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00807">�x�����]���Ŕ̔����̂��ׂẴ����W�K�[�h������W�t�B���^�[�IH�}�b�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150700&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01308">�x�����]���Ŕ̔����̂��ׂẴ����W�K�[�h������W�t�B���^�[�IH�}�b�g�͂�����</a></div>');
}

//���̑��̃L�b�`���S�~����|���p�i���i�ꗗ�^�L�b�`���S�~����|���p�i�^�L�b�`���p�i��������
if(param["C"] == "150799") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150799&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00808">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃L�b�`���S�~����|���p�i���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=150799&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01309">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃L�b�`���S�~����|���p�i���i�ꗗ�͂�����</a></div>');
}

//�o�X�}�b�g�^�o�X�p�i��o�X�}�b�g����ʏ����^�o�X��g�C����|������^�I��
if(param["C"] == "180000") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180000&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00809">�x�����]���Ŕ̔����̂��ׂẴo�X�}�b�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180000&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01310">�x�����]���Ŕ̔����̂��ׂẴo�X�}�b�g�͂�����</a></div>');
}

//�o�X���[�u��o�X�h���X�^�o�X�p�i��o�X�}�b�g����ʏ����^�o�X��g�C����|������^�I��
if(param["C"] == "180003") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180003&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00810">�x�����]���Ŕ̔����̂��ׂẴo�X���[�u��o�X�h���X</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180003&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01311">�x�����]���Ŕ̔����̂��ׂẴo�X���[�u��o�X�h���X�͂�����</a></div>');
}

//���C�ӂ��^�o�X�p�i��o�X�}�b�g����ʏ����^�o�X��g�C����|������^�I��
if(param["C"] == "180004") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180004&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00811">�x�����]���Ŕ̔����̂��ׂĂ̕��C�ӂ�</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180004&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01312">�x�����]���Ŕ̔����̂��ׂĂ̕��C�ӂ��͂�����</a></div>');
}

//���C����������^�o�X�p�i��o�X�}�b�g����ʏ����^�o�X��g�C����|������^�I��
if(param["C"] == "180001") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180001&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00812">�x�����]���Ŕ̔����̂��ׂĂ̕��C���������</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180001&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01313">�x�����]���Ŕ̔����̂��ׂĂ̕��C����������͂�����</a></div>');
}

//�V�����v�[���b�N��o�X���b�N�^�o�X�p�i��o�X�}�b�g����ʏ����^�o�X��g�C����|������^�I��
if(param["C"] == "180005") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180005&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00813">�x�����]���Ŕ̔����̂��ׂẴV�����v�[���b�N��o�X���b�N</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180005&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01314">�x�����]���Ŕ̔����̂��ׂẴV�����v�[���b�N��o�X���b�N�͂�����</a></div>');
}

//�l�ߑւ��{�g����f�B�X�y���T�[�^�o�X�p�i��o�X�}�b�g����ʏ����^�o�X��g�C����|������^�I��
if(param["C"] == "180002") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180002&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00814">�x�����]���Ŕ̔����̂��ׂĂ̋l�ߑւ��{�g����f�B�X�y���T�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180002&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01315">�x�����]���Ŕ̔����̂��ׂĂ̋l�ߑւ��{�g����f�B�X�y���T�[�͂�����</a></div>');
}

//���u���V�X�^���h��\�[�v�g���C�^�o�X�p�i��o�X�}�b�g����ʏ����^�o�X��g�C����|������^�I��
if(param["C"] == "180006") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180006&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00815">�x�����]���Ŕ̔����̂��ׂĂ̎��u���V�X�^���h��\�[�v�g���C</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180006&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01316">�x�����]���Ŕ̔����̂��ׂĂ̎��u���V�X�^���h��\�[�v�g���C�͂�����</a></div>');
}

//���̑��̃o�X�p�i��o�X�}�b�g����ʏ������i�ꗗ�^�o�X�p�i��o�X�}�b�g����ʏ����^�o�X��g�C����|������^�I��
if(param["C"] == "180099") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180099&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00816">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃o�X�p�i��o�X�}�b�g����ʏ������i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180099&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01317">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃o�X�p�i��o�X�}�b�g����ʏ������i�ꗗ�͂�����</a></div>');
}

//�g�C���}�b�g��}�b�g���t�^�J�o�[�Z�b�g�^�g�C���p�i��g�C���}�b�g��J�o�[�^�o�X��g�C����|������^�I��
if(param["C"] == "180101") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180101&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00817">�x�����]���Ŕ̔����̂��ׂẴg�C���}�b�g��}�b�g���t�^�J�o�[�Z�b�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180101&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01318">�x�����]���Ŕ̔����̂��ׂẴg�C���}�b�g��}�b�g���t�^�J�o�[�Z�b�g�͂�����</a></div>');
}

//�t�^�J�o�[�^�g�C���p�i��g�C���}�b�g��J�o�[�^�o�X��g�C����|������^�I��
if(param["C"] == "180100") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180100&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00818">�x�����]���Ŕ̔����̂��ׂẴt�^�J�o�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180100&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01319">�x�����]���Ŕ̔����̂��ׂẴt�^�J�o�[�͂�����</a></div>');
}

//�֍��J�o�[�^�g�C���p�i��g�C���}�b�g��J�o�[�^�o�X��g�C����|������^�I��
if(param["C"] == "180103") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180103&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00819">�x�����]���Ŕ̔����̂��ׂĂ̕֍��J�o�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180103&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01320">�x�����]���Ŕ̔����̂��ׂĂ̕֍��J�o�[�͂�����</a></div>');
}

//�y�[�p�[�z���_�[�J�o�[��g�C���X���b�p�^�g�C���p�i��g�C���}�b�g��J�o�[�^�o�X��g�C����|������^�I��
if(param["C"] == "180102") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180102&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00820">�x�����]���Ŕ̔����̂��ׂẴy�[�p�[�z���_�[�J�o�[��g�C���X���b�p</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180102&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01321">�x�����]���Ŕ̔����̂��ׂẴy�[�p�[�z���_�[�J�o�[��g�C���X���b�p�͂�����</a></div>');
}

//�g�C���|�b�g��g�C���u���V�^�g�C���p�i��g�C���}�b�g��J�o�[�^�o�X��g�C����|������^�I��
if(param["C"] == "180104") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180104&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00821">�x�����]���Ŕ̔����̂��ׂẴg�C���|�b�g��g�C���u���V</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180104&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01322">�x�����]���Ŕ̔����̂��ׂẴg�C���|�b�g��g�C���u���V�͂�����</a></div>');
}

//���̑��̃g�C���p�i��g�C���}�b�g��J�o�[���i�ꗗ�^�g�C���p�i��g�C���}�b�g��J�o�[�^�o�X��g�C����|������^�I��
if(param["C"] == "180199") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180199&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00822">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃g�C���p�i��g�C���}�b�g��J�o�[���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180199&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01323">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃g�C���p�i��g�C���}�b�g��J�o�[���i�ꗗ�͂�����</a></div>');
}

//�����������^����p�i���������A�C������^�o�X��g�C����|������^�I��
if(param["C"] == "180300") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180300&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00823">�x�����]���Ŕ̔����̂��ׂĂ̎���������</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180300&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01324">�x�����]���Ŕ̔����̂��ׂĂ̎����������͂�����</a></div>');
}

//���O�������^����p�i���������A�C������^�o�X��g�C����|������^�I��
if(param["C"] == "180304") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180304&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00824">�x�����]���Ŕ̔����̂��ׂĂ̎��O������</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180304&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01325">�x�����]���Ŕ̔����̂��ׂĂ̎��O�������͂�����</a></div>');
}

//�x�����_�������^����p�i���������A�C������^�o�X��g�C����|������^�I��
if(param["C"] == "180305") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180305&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00825">�x�����]���Ŕ̔����̂��ׂẴx�����_������</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180305&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01326">�x�����]���Ŕ̔����̂��ׂẴx�����_�������͂�����</a></div>');
}

//�z�c�����^����p�i���������A�C������^�o�X��g�C����|������^�I��
if(param["C"] == "180306") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180306&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00826">�x�����]���Ŕ̔����̂��ׂĂ̕z�c����</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180306&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01327">�x�����]���Ŕ̔����̂��ׂĂ̕z�c�����͂�����</a></div>');
}

//�o�X�^�I����^�I���n���K�[�^����p�i���������A�C������^�o�X��g�C����|������^�I��
if(param["C"] == "180307") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180307&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00827">�x�����]���Ŕ̔����̂��ׂẴo�X�^�I����^�I���n���K�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180307&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01328">�x�����]���Ŕ̔����̂��ׂẴo�X�^�I����^�I���n���K�[�͂�����</a></div>');
}

//����n���K�[��s���`�n���K�[��p���\���n���K�[�^����p�i���������A�C������^�o�X��g�C����|������^�I��
if(param["C"] == "180301") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180301&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00828">�x�����]���Ŕ̔����̂��ׂĂ̐���n���K�[��s���`�n���K�[��p���\���n���K�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180301&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01329">�x�����]���Ŕ̔����̂��ׂĂ̐���n���K�[��s���`�n���K�[��p���\���n���K�[�͂�����</a></div>');
}

//����l�b�g����󏬕��^����p�i���������A�C������^�o�X��g�C����|������^�I��
if(param["C"] == "180302") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180302&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00829">�x�����]���Ŕ̔����̂��ׂĂ̐���l�b�g����󏬕�</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180302&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01330">�x�����]���Ŕ̔����̂��ׂĂ̐���l�b�g����󏬕��͂�����</a></div>');
}

//�����܁^����p�i���������A�C������^�o�X��g�C����|������^�I��
if(param["C"] == "180308") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180308&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00830">�x�����]���Ŕ̔����̂��ׂĂ̐�����</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180308&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01331">�x�����]���Ŕ̔����̂��ׂĂ̐����܂͂�����</a></div>');
}

//�A�C�����䥃A�C�����p�i�^����p�i���������A�C������^�o�X��g�C����|������^�I��
if(param["C"] == "180303") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180303&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00831">�x�����]���Ŕ̔����̂��ׂẴA�C�����䥃A�C�����p�i</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180303&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01332">�x�����]���Ŕ̔����̂��ׂẴA�C�����䥃A�C�����p�i�͂�����</a></div>');
}


//���̑��̐���p�i���������A�C�����䏤�i�ꗗ�^����p�i���������A�C������^�o�X��g�C����|������^�I��
if(param["C"] == "180399") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180399&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00832">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̐���p�i���������A�C�����䏤�i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180399&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01333">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̐���p�i���������A�C�����䏤�i�ꗗ�͂�����</a></div>');
}

//�r����X�e�b�v�X�c�[���^�|���p�i��X�e�b�v�X�c�[���^�o�X��g�C����|������^�I��
if(param["C"] == "180405") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180405&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00833">�x�����]���Ŕ̔����̂��ׂĂ̋r����X�e�b�v�X�c�[��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180405&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01334">�x�����]���Ŕ̔����̂��ׂĂ̋r����X�e�b�v�X�c�[���͂�����</a></div>');
}

//�L�b�`���|����������p�i�^�|���p�i��X�e�b�v�X�c�[���^�o�X��g�C����|������^�I��
if(param["C"] == "180404") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180404&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00834">�x�����]���Ŕ̔����̂��ׂẴL�b�`���|����������p�i</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180404&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01335">�x�����]���Ŕ̔����̂��ׂẴL�b�`���|����������p�i�͂�����</a></div>');
}

//�o�X��g�C���|����������p�i�^�|���p�i��X�e�b�v�X�c�[���^�o�X��g�C����|������^�I��
if(param["C"] == "180406") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180406&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00835">�x�����]���Ŕ̔����̂��ׂẴo�X��g�C���|����������p�i</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180406&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01336">�x�����]���Ŕ̔����̂��ׂẴo�X��g�C���|����������p�i�͂�����</a></div>');
}

//����T�b�V�|����������p�i�^�|���p�i��X�e�b�v�X�c�[���^�o�X��g�C����|������^�I��
if(param["C"] == "180407") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180407&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00836">�x�����]���Ŕ̔����̂��ׂĂ̑���T�b�V�|����������p�i</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180407&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01337">�x�����]���Ŕ̔����̂��ׂĂ̑���T�b�V�|����������p�i�͂�����</a></div>');
}

//���֥���O�|����������p�i�^�|���p�i��X�e�b�v�X�c�[���^�o�X��g�C����|������^�I��
if(param["C"] == "180408") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180408&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00837">�x�����]���Ŕ̔����̂��ׂĂ̌��֥���O�|����������p�i</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180408&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01338">�x�����]���Ŕ̔����̂��ׂĂ̌��֥���O�|����������p�i�͂�����</a></div>');
}

//�t���[�����O����|����������p�i�^�|���p�i��X�e�b�v�X�c�[���^�o�X��g�C����|������^�I��
if(param["C"] == "180401") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180401&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00838">�x�����]���Ŕ̔����̂��ׂẴt���[�����O����|����������p�i</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180401&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01339">�x�����]���Ŕ̔����̂��ׂẴt���[�����O����|����������p�i�͂�����</a></div>');
}

//���̑��̑|���p�i��X�e�b�v�X�c�[�����i�ꗗ�^�|���p�i��X�e�b�v�X�c�[���^�o�X��g�C����|������^�I��
if(param["C"] == "180499") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180499&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00839">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̑|���p�i��X�e�b�v�X�c�[�����i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180499&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01340">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̑|���p�i��X�e�b�v�X�c�[�����i�ꗗ�͂�����</a></div>');
}

//�L�b�`���̉���h�~�p�i�^����h�~�p�i�^�o�X��g�C����|������^�I��
if(param["C"] == "180600") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180600&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00840">�x�����]���Ŕ̔����̂��ׂẴL�b�`���̉���h�~�p�i</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180600&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01341">�x�����]���Ŕ̔����̂��ׂẴL�b�`���̉���h�~�p�i�͂�����</a></div>');
}

//�o�X��g�C���̉���h�~�p�i�^����h�~�p�i�^�o�X��g�C����|������^�I��
if(param["C"] == "180601") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180601&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00841">�x�����]���Ŕ̔����̂��ׂẴo�X��g�C���̉���h�~�p�i</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180601&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01342">�x�����]���Ŕ̔����̂��ׂẴo�X��g�C���̉���h�~�p�i�͂�����</a></div>');
}

//���ւ̉���h�~�p�i�^����h�~�p�i�^�o�X��g�C����|������^�I��
if(param["C"] == "180602") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180602&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00842">�x�����]���Ŕ̔����̂��ׂĂ̌��ւ̉���h�~�p�i</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180602&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01343">�x�����]���Ŕ̔����̂��ׂĂ̌��ւ̉���h�~�p�i�͂�����</a></div>');
}

//���̑��̉���h�~�p�i���i�ꗗ�^����h�~�p�i�^�o�X��g�C����|������^�I��
if(param["C"] == "180699") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180699&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00843">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̉���h�~�p�i���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180699&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01344">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̉���h�~�p�i���i�ꗗ�͂�����</a></div>');
}

//�L�b�`���S�~���^�S�~������ʃS�~���^�o�X��g�C����|������^�I��
if(param["C"] == "180500") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180500&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00844">�x�����]���Ŕ̔����̂��ׂẴL�b�`���S�~��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180500&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01345">�x�����]���Ŕ̔����̂��ׂẴL�b�`���S�~���͂�����</a></div>');
}

//�L�b�`�����ʃS�~���^�S�~������ʃS�~���^�o�X��g�C����|������^�I��
if(param["C"] == "180503") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180503&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00845">�x�����]���Ŕ̔����̂��ׂẴL�b�`�����ʃS�~��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180503&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01346">�x�����]���Ŕ̔����̂��ׂẴL�b�`�����ʃS�~���͂�����</a></div>');
}

//���r���O�S�~���^�S�~������ʃS�~���^�o�X��g�C����|������^�I��
if(param["C"] == "180505") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180505&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00846">�x�����]���Ŕ̔����̂��ׂẴ��r���O�S�~��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180505&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01347">�x�����]���Ŕ̔����̂��ׂẴ��r���O�S�~���͂�����</a></div>');
}

//���O��x�����_�S�~������ʃS�~���^�S�~������ʃS�~���^�o�X��g�C����|������^�I��
if(param["C"] == "180501") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180501&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00847">�x�����]���Ŕ̔����̂��ׂẲ��O��x�����_�S�~������ʃS�~��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180501&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01348">�x�����]���Ŕ̔����̂��ׂẲ��O��x�����_�S�~������ʃS�~���͂�����</a></div>');
}

//�V����G���X�g�b�J�[�^�S�~������ʃS�~���^�o�X��g�C����|������^�I��
if(param["C"] == "180502") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180502&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00848">�x�����]���Ŕ̔����̂��ׂĂ̐V����G���X�g�b�J�[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180502&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01349">�x�����]���Ŕ̔����̂��ׂĂ̐V����G���X�g�b�J�[�͂�����</a></div>');
}

//�S�~���t���L�b�`���Ƌ漏��[�^�S�~������ʃS�~���^�o�X��g�C����|������^�I��
if(param["C"] == "180504") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180504&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00849">�x�����]���Ŕ̔����̂��ׂẴS�~���t���L�b�`���Ƌ漏��[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180504&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01350">�x�����]���Ŕ̔����̂��ׂẴS�~���t���L�b�`���Ƌ漏��[�͂�����</a></div>');
}

//���̑��̃S�~������ʃS�~�����i�ꗗ�^�S�~������ʃS�~���^�o�X��g�C����|������^�I��
if(param["C"] == "180599") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180599&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00850">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃S�~������ʃS�~�����i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180599&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01351">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃S�~������ʃS�~�����i�ꗗ�͂�����</a></div>');
}

//�o�X�^�I����t�F�C�X�^�I���^�^�I���^�o�X��g�C����|������^�I��
if(param["C"] == "180200") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180200&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00851">�x�����]���Ŕ̔����̂��ׂẴo�X�^�I����t�F�C�X�^�I��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180200&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01352">�x�����]���Ŕ̔����̂��ׂẴo�X�^�I����t�F�C�X�^�I���͂�����</a></div>');
}

//�M�t�g�^�I��(������)�^�^�I���^�o�X��g�C����|������^�I��
if(param["C"] == "180201") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180201&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00852">�x�����]���Ŕ̔����̂��ׂẴM�t�g�^�I��(������)</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180201&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01353">�x�����]���Ŕ̔����̂��ׂẴM�t�g�^�I��(������)�͂�����</a></div>');
}

//���̑��̃^�I�����i�ꗗ�^�^�I���^�o�X��g�C����|������^�I��
if(param["C"] == "180299") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180299&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00853">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃^�I�����i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180299&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01354">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃^�I�����i�ꗗ�͂�����</a></div>');
}

//�h�ƃO�b�Y�^�h�ƃO�b�Y��h�ЃO�b�Y�^�o�X��g�C����|������^�I��
if(param["C"] == "180700") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180700&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00854">�x�����]���Ŕ̔����̂��ׂĂ̖h�ƃO�b�Y</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180700&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01355">�x�����]���Ŕ̔����̂��ׂĂ̖h�ƃO�b�Y�͂�����</a></div>');
}

//�h�ЃO�b�Y�^�h�ƃO�b�Y��h�ЃO�b�Y�^�o�X��g�C����|������^�I��
if(param["C"] == "180701") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180701&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00855">�x�����]���Ŕ̔����̂��ׂĂ̖h�ЃO�b�Y</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180701&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01356">�x�����]���Ŕ̔����̂��ׂĂ̖h�ЃO�b�Y�͂�����</a></div>');
}

//�~�}���^�h�ƃO�b�Y��h�ЃO�b�Y�^�o�X��g�C����|������^�I��
if(param["C"] == "180702") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180702&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00856">�x�����]���Ŕ̔����̂��ׂĂ̋~�}��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180702&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01357">�x�����]���Ŕ̔����̂��ׂĂ̋~�}���͂�����</a></div>');
}

//���̑��̖h�ƃO�b�Y��h�ЃO�b�Y���i�ꗗ�^�h�ƃO�b�Y��h�ЃO�b�Y�^�o�X��g�C����|������^�I��
if(param["C"] == "180799") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180799&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00857">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̖h�ƃO�b�Y��h�ЃO�b�Y���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180799&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01358">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̖h�ƃO�b�Y��h�ЃO�b�Y���i�ꗗ�͂�����</a></div>');
}

//���̑��̈ߗރn���K�[��ߗގ��[�ܥ���k�܏��i�ꗗ�^�ߗރn���K�[��ߗގ��[�ܥ���k�܁^�o�X��g�C����|������^�I��
if(param["C"] == "180899") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180899&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00858">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̈ߗރn���K�[��ߗގ��[�ܥ���k�܏��i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180899&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01359">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̈ߗރn���K�[��ߗގ��[�ܥ���k�܏��i�ꗗ�͂�����</a></div>');
}

//���C�΍���J�r�΍��p�i�^���C��J�r����I��j�I�C�΍�^�o�X��g�C����|������^�I��
if(param["C"] == "180900") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180900&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00859">�x�����]���Ŕ̔����̂��ׂĂ̎��C�΍���J�r�΍��p�i</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180900&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01360">�x�����]���Ŕ̔����̂��ׂĂ̎��C�΍���J�r�΍��p�i�͂�����</a></div>');
}

//���I�΍��p�i�^���C��J�r����I��j�I�C�΍�^�o�X��g�C����|������^�I��
if(param["C"] == "180901") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180901&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00860">�x�����]���Ŕ̔����̂��ׂĂ̌��I�΍��p�i</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180901&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01361">�x�����]���Ŕ̔����̂��ׂĂ̌��I�΍��p�i�͂�����</a></div>');
}

//�j�I�C�΍��p�i�^���C��J�r����I��j�I�C�΍�^�o�X��g�C����|������^�I��
if(param["C"] == "180902") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180902&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00861">�x�����]���Ŕ̔����̂��ׂẴj�I�C�΍��p�i</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180902&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01362">�x�����]���Ŕ̔����̂��ׂẴj�I�C�΍��p�i�͂�����</a></div>');
}

//���̑��̎��C��J�r����I��j�I�C�΍􏤕i�ꗗ�^���C��J�r����I��j�I�C�΍�^�o�X��g�C����|������^�I��
if(param["C"] == "180999") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180999&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00862">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̎��C��J�r����I��j�I�C�΍􏤕i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=180999&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01363">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̎��C��J�r����I��j�I�C�΍􏤕i�ꗗ�͂�����</a></div>');
}

//�ԕ��΍��p�i�^�ԕ�����O����ߓd�ȂǕ�炵�̂��Y�ݑ΍�^�o�X��g�C����|������^�I��
if(param["C"] == "181000") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=181000&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00863">�x�����]���Ŕ̔����̂��ׂẲԕ��΍��p�i</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=181000&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01364">�x�����]���Ŕ̔����̂��ׂẲԕ��΍��p�i�͂�����</a></div>');
}

//�����UV����O���΍��p�i�^�ԕ�����O����ߓd�ȂǕ�炵�̂��Y�ݑ΍�^�o�X��g�C����|������^�I��
if(param["C"] == "181001") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=181001&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00864">�x�����]���Ŕ̔����̂��ׂĂ̏����UV����O���΍��p�i</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=181001&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01365">�x�����]���Ŕ̔����̂��ׂĂ̏����UV����O���΍��p�i�͂�����</a></div>');
}

//����������ܕ��΍��p�i�^�ԕ�����O����ߓd�ȂǕ�炵�̂��Y�ݑ΍�^�o�X��g�C����|������^�I��
if(param["C"] == "181002") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=181002&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00865">�x�����]���Ŕ̔����̂��ׂĂ̊���������ܕ��΍��p�i</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=181002&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01366">�x�����]���Ŕ̔����̂��ׂĂ̊���������ܕ��΍��p�i�͂�����</a></div>');
}

//�ȃG�l��ߓd�΍��p�i�^�ԕ�����O����ߓd�ȂǕ�炵�̂��Y�ݑ΍�^�o�X��g�C����|������^�I��
if(param["C"] == "181003") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=181003&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00866">�x�����]���Ŕ̔����̂��ׂĂ̏ȃG�l��ߓd�΍��p�i</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=181003&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01367">�x�����]���Ŕ̔����̂��ׂĂ̏ȃG�l��ߓd�΍��p�i�͂�����</a></div>');
}

//�_�j��Q����Q���쏜�p�i�^�ԕ�����O����ߓd�ȂǕ�炵�̂��Y�ݑ΍�^�o�X��g�C����|������^�I��
if(param["C"] == "181004") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=181004&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00867">�x�����]���Ŕ̔����̂��ׂẴ_�j��Q����Q���쏜�p�i</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=181004&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01368">�x�����]���Ŕ̔����̂��ׂẴ_�j��Q����Q���쏜�p�i�͂�����</a></div>');
}

//���̑��̉ԕ�����O����ߓd�ȂǕ�炵�̂��Y�ݑ΍􏤕i�ꗗ�^�ԕ�����O����ߓd�ȂǕ�炵�̂��Y�ݑ΍�^�o�X��g�C����|������^�I��
if(param["C"] == "181099") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=181099&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00868">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̉ԕ�����O����ߓd�ȂǕ�炵�̂��Y�ݑ΍􏤕i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=181099&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01369">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̉ԕ�����O����ߓd�ȂǕ�炵�̂��Y�ݑ΍􏤕i�ꗗ�͂�����</a></div>');
}

//�y�b�g�p�i�^�y�b�g�p�i�^�o�X��g�C����|������^�I��
if(param["C"] == "181100") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=181100&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00869">�x�����]���Ŕ̔����̂��ׂẴy�b�g�p�i</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=181100&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01370">�x�����]���Ŕ̔����̂��ׂẴy�b�g�p�i�͂�����</a></div>');
}

//���̑��̃y�b�g�p�i���i�ꗗ�^�y�b�g�p�i�^�o�X��g�C����|������^�I��
if(param["C"] == "181199") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=181199&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00870">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃y�b�g�p�i���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=181199&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01371">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃y�b�g�p�i���i�ꗗ�͂�����</a></div>');
}

//�|�����v��u�����v�^���v��Ɩ����^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "101200") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=101200&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00871">�x�����]���Ŕ̔����̂��ׂĂ̊|�����v��u�����v</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=101200&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01372">�x�����]���Ŕ̔����̂��ׂĂ̊|�����v��u�����v�͂�����</a></div>');
}

//�Ɩ���弄y���_���g���C�g�^���v��Ɩ����^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "101201") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=101201&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00872">�x�����]���Ŕ̔����̂��ׂĂ̏Ɩ���弄y���_���g���C�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=101201&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01373">�x�����]���Ŕ̔����̂��ׂĂ̏Ɩ���弄y���_���g���C�g�͂�����</a></div>');
}

//���̑��̎��v��Ɩ����i�ꗗ�^���v��Ɩ����^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "101299") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=101299&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00873">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̎��v��Ɩ����i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=101299&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01374">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̎��v��Ɩ����i�ꗗ�͂�����</a></div>');
}

//�t�F�C�N�O���[����t�F�C�N�t�����[�^�t�F�C�N�O���[����t�F�C�N�t�����[�^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "101300") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=101300&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00874">�x�����]���Ŕ̔����̂��ׂẴt�F�C�N�O���[����t�F�C�N�t�����[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=101300&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01375">�x�����]���Ŕ̔����̂��ׂẴt�F�C�N�O���[����t�F�C�N�t�����[�͂�����</a></div>');
}

//���ԥ�v���U�[�u�h�t�����[�^�t�F�C�N�O���[����t�F�C�N�t�����[�^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "101301") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=101301&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00875">�x�����]���Ŕ̔����̂��ׂĂ̐��ԥ�v���U�[�u�h�t�����[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=101301&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01376">�x�����]���Ŕ̔����̂��ׂĂ̐��ԥ�v���U�[�u�h�t�����[�͂�����</a></div>');
}

//���̑��̃t�F�C�N�O���[����t�F�C�N�t�����[���i�ꗗ�^�t�F�C�N�O���[����t�F�C�N�t�����[�^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "101399") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=101399&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00876">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃t�F�C�N�O���[����t�F�C�N�t�����[���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=101399&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01377">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃t�F�C�N�O���[����t�F�C�N�t�����[���i�ꗗ�͂�����</a></div>');
}

//�苾����~���[�^�C���e���A�G�ݥ�����^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "100001") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100001&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00877">�x�����]���Ŕ̔����̂��ׂĂ̎苾����~���[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100001&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01378">�x�����]���Ŕ̔����̂��ׂĂ̎苾����~���[�͂�����</a></div>');
}

//�t�H�g�t���[����t�H�g�X�^���h�^�C���e���A�G�ݥ�����^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "100002") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100002&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00878">�x�����]���Ŕ̔����̂��ׂẴt�H�g�t���[����t�H�g�X�^���h</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100002&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01379">�x�����]���Ŕ̔����̂��ׂẴt�H�g�t���[����t�H�g�X�^���h�͂�����</a></div>');
}

//�C���e���A�V�[����ǂ̃C���e���A�^�C���e���A�G�ݥ�����^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "100004") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100004&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00879">�x�����]���Ŕ̔����̂��ׂẴC���e���A�V�[����ǂ̃C���e���A</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100004&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01380">�x�����]���Ŕ̔����̂��ׂẴC���e���A�V�[����ǂ̃C���e���A�͂�����</a></div>');
}

//�T���L���b�`���[�����^�C���e���A�G�ݥ�����^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "100014") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100014&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00880">�x�����]���Ŕ̔����̂��ׂẴT���L���b�`���[�����</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100014&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01381">�x�����]���Ŕ̔����̂��ׂẴT���L���b�`���[�����͂�����</a></div>');
}

//�I�[�i�����g��u���^�C���e���A�G�ݥ�����^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "100013") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100013&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00881">�x�����]���Ŕ̔����̂��ׂẴI�[�i�����g��u��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100013&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01382">�x�����]���Ŕ̔����̂��ׂẴI�[�i�����g��u���͂�����</a></div>');
}

//�ʂ�����ݥ�l�`�^�C���e���A�G�ݥ�����^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "100015") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100015&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00882">�x�����]���Ŕ̔����̂��ׂĂ̂ʂ�����ݥ�l�`</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100015&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01383">�x�����]���Ŕ̔����̂��ׂĂ̂ʂ�����ݥ�l�`�͂�����</a></div>');
}

//�e�B�b�V���P�[�X�^�C���e���A�G�ݥ�����^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "100007") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100007&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00883">�x�����]���Ŕ̔����̂��ׂẴe�B�b�V���P�[�X</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100007&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01384">�x�����]���Ŕ̔����̂��ׂẴe�B�b�V���P�[�X�͂�����</a></div>');
}

//�A���}�O�b�Y����F�^�C���e���A�G�ݥ�����^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "100003") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100003&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00884">�x�����]���Ŕ̔����̂��ׂẴA���}�O�b�Y����F</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100003&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01385">�x�����]���Ŕ̔����̂��ׂẴA���}�O�b�Y����F�͂�����</a></div>');
}

//���̑��̃C���e���A�G�ݥ�������i�ꗗ�^�C���e���A�G�ݥ�����^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "100099") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100099&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00885">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃C���e���A�G�ݥ�������i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100099&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01386">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃C���e���A�G�ݥ�������i�ꗗ�͂�����</a></div>');
}

//��ӥ�͂񂱥�X�^���v�^��ӥ�A���o����X�e�[�V���i���[�^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "100205") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100205&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00886">�x�����]���Ŕ̔����̂��ׂĂ̈�ӥ�͂񂱥�X�^���v</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100205&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01387">�x�����]���Ŕ̔����̂��ׂĂ̈�ӥ�͂񂱥�X�^���v�͂�����</a></div>');
}

//�A���o���CD�DVD���[�t�@�C���^��ӥ�A���o����X�e�[�V���i���[�^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "100201") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100201&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00887">�x�����]���Ŕ̔����̂��ׂẴA���o���CD�DVD���[�t�@�C��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100201&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01388">�x�����]���Ŕ̔����̂��ׂẴA���o���CD�DVD���[�t�@�C���͂�����</a></div>');
}

//���ރP�[�X����ރt�@�C������`�F�X�g�^��ӥ�A���o����X�e�[�V���i���[�^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "100202") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100202&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00888">�x�����]���Ŕ̔����̂��ׂĂ̏��ރP�[�X����ރt�@�C������`�F�X�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100202&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01389">�x�����]���Ŕ̔����̂��ׂĂ̏��ރP�[�X����ރt�@�C������`�F�X�g�͂�����</a></div>');
}

//���[�弄X�e�[�V���i���[�^��ӥ�A���o����X�e�[�V���i���[�^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "100200") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100200&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00889">�x�����]���Ŕ̔����̂��ׂĂ̕��[�弄X�e�[�V���i���[</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100200&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01390">�x�����]���Ŕ̔����̂��ׂĂ̕��[�弄X�e�[�V���i���[�͂�����</a></div>');
}

//�g�ѥ�X�}�[�g�t�H���֘A�p�i�^��ӥ�A���o����X�e�[�V���i���[�^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "100204") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100204&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00890">�x�����]���Ŕ̔����̂��ׂĂ̌g�ѥ�X�}�[�g�t�H���֘A�p�i</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100204&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01391">�x�����]���Ŕ̔����̂��ׂĂ̌g�ѥ�X�}�[�g�t�H���֘A�p�i�͂�����</a></div>');
}

//���̑��̈�ӥ�A���o����X�e�[�V���i���[���i�ꗗ�^��ӥ�A���o����X�e�[�V���i���[�^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "100299") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100299&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00891">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̈�ӥ�A���o����X�e�[�V���i���[���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100299&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01392">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̈�ӥ�A���o����X�e�[�V���i���[���i�ꗗ�͂�����</a></div>');
}

//�X���b�p�^�X���b�p����[���V���[�Y�^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "100300") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100300&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00892">�x�����]���Ŕ̔����̂��ׂẴX���b�p</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100300&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01393">�x�����]���Ŕ̔����̂��ׂẴX���b�p�͂�����</a></div>');
}

//���[���V���[�Y��o�u�[�V���^�X���b�p����[���V���[�Y�^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "100301") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100301&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00893">�x�����]���Ŕ̔����̂��ׂẴ��[���V���[�Y��o�u�[�V��</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100301&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01394">�x�����]���Ŕ̔����̂��ׂẴ��[���V���[�Y��o�u�[�V���͂�����</a></div>');
}

//���̑��̃X���b�p����[���V���[�Y���i�ꗗ�^�X���b�p����[���V���[�Y�^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "100399") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100399&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00894">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃X���b�p����[���V���[�Y���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100399&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01395">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃X���b�p����[���V���[�Y���i�ꗗ�͂�����</a></div>');
}

//�\�D�^�K�[�f�j���O��G���g�����X�p�i�^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "100904") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100904&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00895">�x�����]���Ŕ̔����̂��ׂĂ̕\�D</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100904&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01396">�x�����]���Ŕ̔����̂��ׂĂ̕\�D�͂�����</a></div>');
}

//�X�փ|�X�g�^�K�[�f�j���O��G���g�����X�p�i�^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "100900") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100900&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00896">�x�����]���Ŕ̔����̂��ׂĂ̗X�փ|�X�g</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100900&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01397">�x�����]���Ŕ̔����̂��ׂĂ̗X�փ|�X�g�͂�����</a></div>');
}

//�K�[�f�j���O�p�i�^�K�[�f�j���O��G���g�����X�p�i�^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "100903") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100903&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00897">�x�����]���Ŕ̔����̂��ׂẴK�[�f�j���O�p�i</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100903&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01398">�x�����]���Ŕ̔����̂��ׂẴK�[�f�j���O�p�i�͂�����</a></div>');
}

//�P���ā^�K�[�f�j���O��G���g�����X�p�i�^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "100905") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100905&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00898">�x�����]���Ŕ̔����̂��ׂĂ̎P����</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100905&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01399">�x�����]���Ŕ̔����̂��ׂĂ̎P���Ă͂�����</a></div>');
}

//�L�[�t�b�N��L�[�{�b�N�X�^�K�[�f�j���O��G���g�����X�p�i�^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "100906") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100906&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00899">�x�����]���Ŕ̔����̂��ׂẴL�[�t�b�N��L�[�{�b�N�X</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100906&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01400">�x�����]���Ŕ̔����̂��ׂẴL�[�t�b�N��L�[�{�b�N�X�͂�����</a></div>');
}

//���̑��̃K�[�f�j���O��G���g�����X�p�i���i�ꗗ�^�K�[�f�j���O��G���g�����X�p�i�^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "100999") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100999&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00900">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃K�[�f�j���O��G���g�����X�p�i���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100999&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01401">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃K�[�f�j���O��G���g�����X�p�i���i�ꗗ�͂�����</a></div>');
}

//��|����襃\�[�C���O�p�i�^�~�V����\�[�C���O���p�i�^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "100100") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100100&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00901">�x�����]���Ŕ̔����̂��ׂĂ̎�|����襃\�[�C���O�p�i</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100100&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01402">�x�����]���Ŕ̔����̂��ׂĂ̎�|����襃\�[�C���O�p�i�͂�����</a></div>');
}

//�ٖD����\�[�C���O�{�b�N�X�^�~�V����\�[�C���O���p�i�^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "100106") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100106&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00902">�x�����]���Ŕ̔����̂��ׂĂٖ̍D����\�[�C���O�{�b�N�X</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100106&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01403">�x�����]���Ŕ̔����̂��ׂĂٖ̍D����\�[�C���O�{�b�N�X�͂�����</a></div>');
}

//���̑��̃~�V����\�[�C���O���p�i���i�ꗗ�^�~�V����\�[�C���O���p�i�^�C���e���A�G�ݥ�X���b�p
if(param["C"] == "100199") {
	$('.bgcheck01').before('<div class="sn_sc99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100199&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_00903">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃~�V����\�[�C���O���p�i���i�ꗗ</a></div>');
	$('form[name="form_shn"]').before('<div class="ft_days99"><a href="/ep/s/?BELN_SHOP_KBN=100&C=100199&SHNCRTTKKRO_KBN=CT&DM3_KBN=bd_01404">�x�����]���Ŕ̔����̂��ׂĂ̂��̑��̃~�V����\�[�C���O���p�i���i�ꗗ�͂�����</a></div>');
}


}//end_DAYS����

}
days_timer_cnt ++;
if ( days_timer_cnt > 99 ) {
	clearInterval(days_timer);
	days_timer_cnt = 0;
	days_timer = setInterval('days_timer_func()',1000);
}
}