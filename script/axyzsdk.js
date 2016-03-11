//:***********************************************************
//:AXYZ Conductor release:CNDAX0801B_SSLPO_bellemaison
//:(c)Axyz,Inc. All Rights Reserved.
//:Programs (c)Irvine Systems,Inc. All Rights Reserved.
//:************************************************************
axyzua=navigator.userAgent.toLowerCase();try {axyzbr=window.opera?((/opera.\d*.\d*/).exec(axyzua)[0].split(/\/|\s/)):(((/msie\s\d*\.\d*|(firefox|netscape|safari)\d?\/\d*\.\d*/).exec(axyzua))[0].split(/\/|\s/));} catch(e) {axyzbr=["msie","99"];}AXYZ_V5=axyzua.indexOf('windows')!=-1;AXYZ_V6=axyzbr[0];AXYZ_V7=Number(axyzbr[1]);AXYZ_F1A=AXYZ_V6=="msie" && AXYZ_V5;delete axyzua;delete axyzbr;AXYZInitHighlightWords=AXYZDeleteKeepParameterLink=AXYZGetQueryString=AXYZHighlightWords=AXYZSetupHighlightWords=function(){}
;AXYZ_V2=AXYZ_V6=='msie'?window:document;AXYZ_V3=1000/12;AXYZ_V4=String(Math.random()).replace(/\./g,'');if(Array.prototype.push==null){Array.prototype.push=function(_0){this[this.length]=_0;}
}function AXYZ_F4(_0){_0=String(_0);return (_0=='undefined'||_0=='null')?'':_0;}
function AXYZ_FB(_0){return AXYZ_F4(_0).length>0;}
function AXYZ(_0){AXYZ_F1E(_0);}
function AXYZLink(_0,_1){document.write(AXYZ_F0(typeof(_1)=='string'?_1:(_1.TIMEOUT?_1.TIMEOUT:_1.NORMAL)));}
function AXYZ_F0(_0,_1){return '<span'+AXYZ_F1(_1)+'>'+_0+'</span>';}
function AXYZ_F1(_0){var _1,_2='';if(_0){for(_1 in _0){_2+=' '+_1.substring(1)+'="'+_0[_1]+'"';}}return _2;}
function AXYZ_F12(){document.write('<st'+'yle type="te'+'xt/cs'+'s">\n'+AXYZ_F14(arguments).join('\n')+'\n</st'+'yle>');}
function AXYZ_FL(_0){_0=Number(_0);return isNaN(_0)?0:_0;}
function AXYZ_FX(_0){return "#"+"AXYZ"+"NoneCreative_"+_0;}
function AXYZ_F1G(_0,_1){return "#"+"AXYZ"+"Fallback_"+_0+"_"+_1;}
function AXYZ_F1H(_0){return "#"+"AXYZ"+"Timeout_"+_0;}
function AXYZ_F1F(_0){return "#"+"AXYZ"+"Link_"+_0;}
AXYZ_VG='{display:none}';AXYZ_VH='{display:inline}';function AXYZ_F7(_0,_1,_2,_3){return 'rect('+_1+'px,'+_2+'px,'+_3+'px,'+_0+'px)';}
function AXYZ_FA(_0){return _0.replace(/^(\?|\&)|(\?|\&)$/g,'');}
AXYZ.noneCreative={};AXYZ.fallback={};function AXYZ_F13(_0){return Math.floor(Math.random()*_0);}
function AXYZ_F14(_0){var _1,_2=[];var _3;var _4,_5;for(_1=0;_1<_0.length;_1++){_2.push(_0[_1]);}return _2;}
function AXYZ_F1E(_0){var _1,_2=AXYZ_FX(_0.ID)+AXYZ_VH;if(_0.FALLBACK){_1=_0.FALLBACK.split(",");while(_1.length>0){_2+=AXYZ_F1G(_0.ID,_1.shift())+AXYZ_VG;}}AXYZ_F12(_2);}
function AXYZ_F15(){var _0=function(_0) {var _1=[/^https?:\/\/((.+\.)*(google|yahoo|bing|axyz|ubicast)\.(com|co\.jp))/,/^https?:\/\/(.+\.)*disney\.co\.jp/,/^https?:\/\/(.+\.)*kakaku\.com/];if (!_0) return false;var _2=0,_3=_1.length,_4;for (;_2 < _3;_2++) {_4=_1[_2];if (_4.test(_0)) {return true;}}return false;};if (!_0(document.referrer)) return;var _5=new Date(),_6,_7,_8=[],_9=document.getElementsByTagName('scr'+'ipt');for(_6=0;_6<_9.length;_6++){_7=_9[_6].getAttribute("src");if(_7!=null){if(_7.indexOf("axyzsdk")!=-1){_8=_7.split('?')[1].split(',');break;}}}AXYZDomain=_8[0];AXYZ_VA=['http','https'][parseInt(_8[1])]+':/'+'/'+AXYZDomain+'/service';document.write('<scr'+'ipt type="text/jav'+'ascr'+'ipt" src="'+AXYZ_VA+'/axyzcmp.js?'+Math.floor(_5.getTime()/600000)+'"></scr'+'ipt>');}
AXYZ_F15();function get_axyz_info(_0,_1){if(_1=="TIMEOUT"||_1=="NONECREATIVE") return true;return false;}
