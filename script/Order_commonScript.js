function waitAMoment(msgId, waitMsg){

	msgWrite(msgId, waitMsg);

	var linkObj = document.getElementsByTagName('A');
	for(i=0; i<linkObj.length; i++){
		linkObj[i].removeAttribute('href');
	}
}

function msgWrite(msgId, waitMsg) {
	if (document.all) {
		// for IE4?
		document.all(msgId).innerHTML = waitMsg;
	} else if (document.getElementById) {
		// for NN6?
		document.getElementById(msgId).childNodes[0].nodeValue = waitMsg; 
	} else if (document.layers) {
		// for NN4
		with(document.layers[msgId]) {
			document.open();
			document.write(waitMsg);
			document.close();
		}
	}
}

function openShnWin(url){

	window.open(url, "subwindow", "width=750, height=560, scrollbars=yes, resizable=yes");

}

function openSubWin(url, id, ptn){

	var width = 0;
	var height = 0;
	var winname = "";
	var opt = "scrollbars=yes, resizable=yes";
	
	if(id == 1){
		winname = "subwindow";
	}else if(id == 2){
		winname = "subwindow2";
	}
	
	switch(ptn){
		case 1:
			width = "360";
			height = "330";
			break;
		case 2:
			width = "540";
			height = "480";
			break;
		case 3:
			width = "560";
			height = "560";
			break;
		case 4:
			width = "680";
			height = "480";
			break;
		case 5:
			width = "750";
			height = "480";
			break;
		case 6:
			width = "750";
			height = "560";
			break;
		case 7:
			width = "800";
			height = "560";
			break;
		case 8:
			width = "600";
			height = "540";
			break;
		case 9:
			width = "540";
			height = "560";
			break;
		case 10:
			width = "540";
			height = "680";
			break;
		case 11:
			width = "540";
			height = "780";
			break;
		case 12:
			width = "600";
			height = "360";
			break;
	}
	
	if(width != 0 && height != 0 && winname != ""){
		window.open(url, winname, "width=" + width + ", height=" + height + ", " + opt);	
	}
}

function openSubWinFocus(url, id, ptn){

	var width = 0;
	var height = 0;
	var winname = "";
	var opt = "scrollbars=yes, resizable=yes";
	
	if(id == 1){
		winname = "subwindow";
	}else if(id == 2){
		winname = "subwindow2";
	}
	
	switch(ptn){
		case 1:
			width = "360";
			height = "330";
			break;
		case 2:
			width = "540";
			height = "480";
			break;
		case 3:
			width = "560";
			height = "560";
			break;
		case 4:
			width = "680";
			height = "480";
			break;
		case 5:
			width = "750";
			height = "480";
			break;
		case 6:
			width = "750";
			height = "560";
			break;
		case 7:
			width = "800";
			height = "560";
			break;
		case 8:
			width = "600";
			height = "540";
			break;
		case 9:
			width = "540";
			height = "600";
			break;
		case 10:
			width = "540";
			height = "700";
			break;
		case 11:
			width = "750";
			height = "600";
			break;
		case 12:
			width = "750";
			height = "700";
			break;
		case 13:
			width = "600";
			height = "700";
			break;	
	}
	
	if(width != 0 && height != 0 && winname != ""){
		win = window.open(url, winname, "width=" + width + ", height=" + height + ", " + opt);	
		win.focus();
	}
}

//œ20110215 AMS 017818_yŽó’Œnzƒxƒ‹ƒƒ]ƒ“ƒlƒbƒgƒŠƒjƒ…[ƒAƒ‹ ‚Å’Ç‰Á startœ
function openOrdSubWinFocus(url, id, ptn){
	var width = 0;
	var height = 0;
	var winname = "";
	var opt = "scrollbars=yes, resizable=yes";
	
	if(id == 1){
		winname = "subwindow1";
	}else if(id == 2){
		winname = "subwindow2";
	}else if(id == 3){
		winname = "subwindow3";
	}else if(id == 4){
		winname = "subwindow4";
	}else if(id == 5){
		winname = "subwindow5";
	}
	switch(ptn){
		case 1:
			width = "800";
			height = "560";
			break;
		case 2:
			width = "750";
			height = "560";
			break;
		case 3:
			width = "360";
			height = "330";
			break;
		case 4:
			width = "600";
			height = "540";
			break;
		case 5:
			width = "740";
			height = "480";
			break;
		case 6:
			width = "480";
			height = "600";
			break;
	}
	if(width != 0 && height != 0 && winname != ""){
		win = window.open(url, winname, "width=" + width + ", height=" + height + ", " + opt);	
		win.focus();
	}
}
//œ20110215 AMS 017818_yŽó’Œnzƒxƒ‹ƒƒ]ƒ“ƒlƒbƒgƒŠƒjƒ…[ƒAƒ‹ ‚Å’Ç‰Á endœ