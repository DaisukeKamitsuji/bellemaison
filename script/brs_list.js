function checkToggleAnchor(itemID) {
	if ($("#" + itemID).attr("checked")) {
/* 修正 130920brs1 TAM ココから */
		$("#" + itemID).attr("checked", false);
/* 修正 130920brs1 TAM ココまで */
		$("#" + itemID).parent('li').attr('class','');
	} else {
/* 修正 130920brs1 TAM ココから */
		$("#" + itemID).attr("checked", true);
/* 修正 130920brs1 TAM ココまで */
		$("#" + itemID).parent('li').attr('class','check');
	}
}
function checkToggleAnchor2(itemID) {
	if ($("#" + itemID).attr("checked")) {
/* 修正 130920brs1 TAM ココから */
		$("#" + itemID).attr("checked", false);
/* 修正 130920brs1 TAM ココまで */
	} else {
/* 修正 130920brs1 TAM ココから */
		$("#" + itemID).attr("checked", true);
/* 修正 130920brs1 TAM ココまで */
	}
}
function checkToggleInput(itemID) {
	if (!$("#" + itemID).attr("checked")) {
		$("#" + itemID).parent('li').attr('class','');
	} else {
		$("#" + itemID).parent('li').attr('class','check');
	}
}
