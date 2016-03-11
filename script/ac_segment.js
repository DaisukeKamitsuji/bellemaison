// 
// Copyright 2005-2010 activecore. Inc. 
//
// ad insight V1.3 - Attribute Setting Tag
// This software/code is licensed by activecore, Inc.
// You can N O T modify/use/distribute this file 
// except in compliance with the License.
//
//  Product  : ad insight for PC
//  Version  : 1.3
//  Rev      : 1.0

var _cid = 12003; 
var _var1=""; 
var _var2=""; 
var _var3=""; 
var _var4=""; 
var _var5=""; 
var _delim="*"; 
var _entry_js = "//tracer04.a-cast.jp/actag?attr_cid=";
try{
    var _url = window.location;
    var _path = new String(location.pathname);

    //check attr1
    if( _path.indexOf("/disney/", 0) < 0){
        _var1 = _getAttrNo(_path, _var_arr1);
    }
    //check attr2
    if( _path.indexOf("/100/", 0) >= 0 || _path.indexOf("/disney/", 0) >= 0){
        _var2 = _getAttrNo(_path, _var_arr2);
    }
    //check attr3
    if( _path.indexOf("/100/", 0) >= 0 || _path.indexOf("/disney/", 0) >= 0){
        _var3 = _getAttrNo(_path, _var_arr3);
    }
}catch(e){
    // ignore
}

if(_var1=="" && _var2=="" && _var3=="" && _var4=="" && _var5==""){
	// ignore
}else{
	var _proto = window.location.protocol; 
	if (_proto == "http:" || _proto == "https:") { 
    	document.write('<script type="text/javascript" ' 
    	+ 'language="JavaScript" src="' 
    	+ _proto + _entry_js + _cid 
    	+ '&info={' 
    	+ 'ac_user_data=' + _var1 + _delim + _var2 + _delim 
    	+ _var3 + _delim + _var4 + _delim + _var5 + '}' 
    	+ '" ></' + 'script>');
    }
}

function _getAttrNo(_path, _var_arr){
    if(_path == null || _path == undefined) {
        return "";
    }
    for(var i=0; i<_var_arr.length; i++){
        for(var j=0; j<_var_arr[i][1].length; j++){
            if(_path.indexOf(_var_arr[i][1][j], 0) >= 0){
                return _var_arr[i][0];
           }
        }
    }
    return "";
}

