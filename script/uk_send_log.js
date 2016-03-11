// This JS requires cookie_common.js

var _ukwq = _ukwq || [];
var _ukwhost = '';

function sendImpLogToUk() {
	var f = arguments;
	if( f["length"] < 1 ){
		return;
	}

	var load = _ukwhost == '';
	_ukwhost = f[0];
	_ukwq.push(['_setClient','bellemaison']);
	var s = getKnStatus();
	if( s != '0'){
		s = cookieRrkProdRd('Apache');
	}
	_ukwq.push(['_setLoginID',s]);
	_ukwq.push(['_setRequestURL',document.URL]);
	
	for (var i = 1; i < f["length"]; i++) {
		_ukwq.push(f[i]);
	}
	_ukwq.push(['_getImpression']);

	if(load && $('#ukSendLog').size() == 0){
		var _ukt = document.createElement('script'); 
		_ukt.type = 'text/javascript';
		_ukt.id = 'ukSendLog'; 
		_ukt.async = true;
		_ukt.src = '//' + _ukwhost + 'ukan/ukwlg.js';
		var _uks = document.getElementsByTagName('script')[0]; 
		_uks.parentNode.insertBefore(_ukt,_uks);
		window.onunload = function(){};
	}
}

function sendImpLogToUkMC() {
	var f = arguments;
	if( f["length"] < 1 ){
		return;
	}

	var load = _ukwhost == '';
	_ukwhost = f[0];
	_ukwq.push(['_setClient','monthlyclub']);
	var s = getKnStatus();
	if( s != '0'){
		s = cookieRrkProdRd('Apache');
	}
	_ukwq.push(['_setLoginID',s]);
	_ukwq.push(['_setRequestURL',document.URL]);
	
	for (var i = 1; i < f["length"]; i++) {
		_ukwq.push(f[i]);
	}
	_ukwq.push(['_getImpression']);

	if(load && $('#ukSendLog').size() == 0){
		var _ukt = document.createElement('script'); 
		_ukt.type = 'text/javascript';
		_ukt.id = 'ukSendLog'; 
		_ukt.async = true;
		_ukt.src = '//' + _ukwhost + 'ukan/ukwlg.js';
		var _uks = document.getElementsByTagName('script')[0]; 
		_uks.parentNode.insertBefore(_ukt,_uks);
		window.onunload = function(){};
	}
}