function checkToggleAnchor(itemID) {
	if ($("#" + itemID).attr("checked")) {
/* �C�� 130920brs1 TAM �R�R���� */
		$("#" + itemID).attr("checked", false);
/* �C�� 130920brs1 TAM �R�R�܂� */
		$("#" + itemID).parent('li').attr('class','');
	} else {
/* �C�� 130920brs1 TAM �R�R���� */
		$("#" + itemID).attr("checked", true);
/* �C�� 130920brs1 TAM �R�R�܂� */
		$("#" + itemID).parent('li').attr('class','check');
	}
}
function checkToggleAnchor2(itemID) {
	if ($("#" + itemID).attr("checked")) {
/* �C�� 130920brs1 TAM �R�R���� */
		$("#" + itemID).attr("checked", false);
/* �C�� 130920brs1 TAM �R�R�܂� */
	} else {
/* �C�� 130920brs1 TAM �R�R���� */
		$("#" + itemID).attr("checked", true);
/* �C�� 130920brs1 TAM �R�R�܂� */
	}
}
function checkToggleInput(itemID) {
	if (!$("#" + itemID).attr("checked")) {
		$("#" + itemID).parent('li').attr('class','');
	} else {
		$("#" + itemID).parent('li').attr('class','check');
	}
}
