//:***********************************************************
//:axyzbt release:XXXXXXXXXXXXX
//:(c)Axyz,Inc. All Rights Reserved.
//:Programs (c)Axyz,Inc. All Rights Reserved.
//:ver 2.2
//:************************************************************
function AXYZBT_V1(_0) {if(typeof(axyzbt_ck)!='object') {return;}for(var key in axyzbt_ck){if(typeof(axyzbt_ck[key])=='function') {continue;};var _2=AXYZBT_GC(axyzbt_ck[key]);if(_2) {_0[key]=_2;}}}
function AXYZBT_V2(_0) {var _1=document,_2=_1.body;if(typeof(axyzbt_hist)!='object') {return;};var _3=_1.createElement('div');_3.id="axyzb"+"tHT";_2.appendChild(_3);for(var key in axyzbt_hist){if(typeof(axyzbt_hist[key])=='function') {continue;};var _5=axyzbt_hist[key].length;for(var _6=0;_6<_5;_6++){var _7=AXYZBT_GH(_3,key,axyzbt_hist[key][_6]);if(_7==1){_0[key]=_7;break;}}}_2.removeChild(_3);}
function AXYZBT_V4(_0) {if(typeof(axyzbt_vr)!='object') {return;}for(var key in axyzbt_vr){if(typeof(axyzbt_vr[key])=='function') {continue;}_0[key]=axyzbt_vr[key];}}
function AXYZBT_V5(_0) {if(typeof(axyzbt_fnc)!='object'||!axyzbt_fnc.condition) {return;}axyzbt_fnc.condition(_0);}
function AXYZBT_V3() {if(AXYZBT_GC('axyz_optout')==1) {return '';};var _0=new Array();var _1=new Array();AXYZBT_V1(_0);AXYZBT_V2(_0);AXYZBT_V4(_0);AXYZBT_V5(_0);for(var key1 in _0){var _3=_0[key1];if(typeof(_3)=='number'||typeof(_3)=='string'){_1.push(key1+"="+_3);}}return _1.join('&');}
function AXYZGetAllString() {try{var _0=new Array();var _1=(typeof(AXYZGetQueryString)=='function')?AXYZGetQueryString():"";var _2=AXYZBT_V3();if(_1){_0.push(_1);}if(_2){_0.push(_2);}return _0.join('&');}catch(e){return '';}}
function AXYZBT_GC(_0) {var _1=document.cookie;if (!_1||_1==''||_1.indexOf(_0)==-1) {return '';};var _2='';var _3=_1.split(';');for (var _4=0;_4 < _3.length;_4++) {var _5=(_3[_4]||"").replace(/^\s+/g,'');var _6=_5.indexOf('=');if (_5.substring(0,_6)==_0) {_2=_5.substring(_0.length+1);break;}}return _2;}
function AXYZBT_GH(_0,_1,_2) {var _3=_1;var _4=(_2.indexOf(String.fromCharCode(105,117,117,113))!=-1)?_2:String.fromCharCode(105,117,117,113,59,48)+_2;var _5=document.createElement("a");_5.href=AXYZBT_V12(_4);_0.appendChild(_5);if(AXYZBT_V10(_5).right=="0px"){return 1;}else{return 0;}}
function AXYZBT_V10(_0) {return _0.currentStyle||document.defaultView.getComputedStyle(_0,'');}
function AXYZBT_V11() {document.write('<st'+'yle type="te'+'xt/cs'+'s">\n'+"#axy"+"zbtHT a:vis"+"ited {dis"+"play:block;pos"+"ition:abso"+"lute;to"+"p:0;ri"+"ght:0;hei"+"ght:10px;}"+'\n</st'+'yle>');}
AXYZBT_V11();function AXYZBT_V12(_0) {var _1="",chr=0;for(var _2=0;_2<_0.length;_2++){chr=_0.charCodeAt(_2);if(chr==61){chr=127;}_1+=String.fromCharCode(chr-1);}return _1;}
function AXYZBT_PM() {var _0=new Array(),_1=document.location.search;if(!_1||_1=="") {return _0;};var _2=_1.replace(/^(\?)+/,"").split("&");var _3=new Array,_4;for(var _5=0;_2.length>_5;_5++){_4=_2[_5].split("=");if(_4[0]==""){continue;}_3[_4[0]]=(typeof(_4[1])=='undefined')?true:_4[1];}return _3;}
function AXYZBT_V13(_0) {if (typeof(encodeURIComponent)=='function') {return encodeURIComponent(_0);}else {return escape(_0);}}
function AXYZBT_V14(_0) {if (typeof(decodeURIComponent)=='function') {return decodeURIComponent(_0);}else {return unescape(_0);}}
function AXYZBT_SC(_0,_1,_2,_3) {if(!_0||_0==""||!_3) {return};var _4=';path=/';var _5=(_3 && _3!='localhost')?';domain='+(_3):'';var _6='';if(_2){var _7=new Date((new Date()).getTime()+(_2*1000));_6=';expires='+_7.toGMTString();}document.cookie=_0+'='+_1+_6+_4+_5;}
function AXYZBT_EVE(_0,_1,_2,_3){if(!_0){return;}else if(_0.addEventListener){_0.addEventListener(_1,_2,_3);}else if(_0.attachEvent){_0.attachEvent('on'+_1,_2);}}