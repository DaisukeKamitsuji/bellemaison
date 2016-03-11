function createHttpRequest(){
	if(window.XMLHttpRequest){
    	//Win Mac Linux m1,f1,o8 Mac s1 Linux k3 & Win e7
    	return new XMLHttpRequest();
	} else if(window.ActiveXObject){
    	//Win e4,e5,e6
    	try {
		return new ActiveXObject("Msxml2.XMLHTTP") ;
	} catch (e) {
    	try {
        	return new ActiveXObject("Microsoft.XMLHTTP") ;
		} catch (e2) {  return null; }
		}
	}
}

function requestFile(data , method , fileName , async, target, search, nosearch)
{
    var httpoj = createHttpRequest();
    try{
	    if(httpoj != null){
	        httpoj.open( method , fileName , async );
	        httpoj.setRequestHeader("If-Modified-Since", "Thu, 01 Jun 1970 00:00:00 GMT");
		    if(async) {
	       		httpoj.onreadystatechange = function(){
	      	   		if(httpoj.readyState==4)
	            	{
	            	    on_loaded(httpoj, target, search, nosearch)
	            	}
	            }     
	       		httpoj.send( data );       
	        } else {
	        	httpoj.send( data );
	      		if(httpoj.readyState==4){
	                	on_loaded(httpoj, target, search, nosearch)
	            }
		    }
	    }
    }catch(e){}
}

function requestFileEPFB0040(data , method , fileName , async, target, target2, target3, search, nosearch)
{
    var httpoj = createHttpRequest();
    try{
	    if(httpoj != null){
	        httpoj.open( method , fileName , async );
	        httpoj.setRequestHeader("If-Modified-Since", "Thu, 01 Jun 1970 00:00:00 GMT");
		    if(async) {
	       		httpoj.onreadystatechange = function(){
	      	   		if(httpoj.readyState==4)
	            	{
	            	    on_loaded_EPFB0040(httpoj, target, target2, target3, search, nosearch)
	            	}
	            }    
	       		httpoj.send( data );
	        } else {
	        	httpoj.send( data );
	      		if(httpoj.readyState==4){
	                on_loaded_EPFB0040(httpoj, target, target2, target3, search, nosearch)
	            }
		    }
	    }
    }catch(e){}
}
function on_loaded(oj, target, search, nosearch)
{
    //get response.
	var res = oj.responseText;
	if(search =="" || search !="" && (pos = res.indexOf(search)) != -1) {
		if(nosearch =="" || nosearch !="" && (pos = res.indexOf(nosearch)) == -1) {
	   
			document.getElementById(target).innerHTML = res;
		}
	}
}
function on_loaded_EPFB0040(oj, target, target2, target3, search, nosearch)
{
/* èCê≥ 131111brs2 TAM ÉRÉRÇ©ÇÁ */
if ($("#CHMN_NO" + target3).val()) {
/* èCê≥ 131111brs2 TAM ÉRÉRÇ‹Ç≈ */

    //get response.
	var res = oj.responseText;
	if(search =="" || search !="" && (pos = res.indexOf(search)) != -1) {
		if(nosearch =="" || nosearch !="" && (pos = res.indexOf(nosearch)) == -1) {
		
			var reszaiko = res.substring(0,res.indexOf(","));
			var resshn = res.slice(res.indexOf(",") + 1);

			var zaiko_id = "zaiko" + target3;
			var shn_id = "shn" + target3;
			var zaiko_obj = document.getElementById(zaiko_id);
			var shn_obj = document.getElementById(shn_id);

			if(zaiko_obj != null && shn_obj != null){
				zaiko_obj.className = "cbg01 w56";
				shn_obj.className = "cbg02";
			}

			document.getElementById(target).innerHTML = reszaiko;
			document.getElementById(target2).innerHTML = "";
			$("#" + target2).append(resshn);
			
			if(target3 > 0){
				var shnms_status_id = "SHNMS_STATUS" + target3;
				var shnms_status_obj = document.getElementById(shnms_status_id);
                var gray_flg = "";
                if(zaiko_obj != null && shn_obj != null && shnms_status_obj != null){
                    if (shnms_status_obj.value == "2" ||
                        shnms_status_obj.value == "3" ||
                        shnms_status_obj.value == "4" ||
                        shnms_status_obj.value == "5" ) {
                        gray_flg = "g";
                    }
					zaiko_obj.className = "cbg01" + gray_flg + " w56";
					shn_obj.className = "cbg02" + gray_flg;
				}
			}
		}
	}
/* èCê≥ 131111brs2 TAM ÉRÉRÇ©ÇÁ */
}
/* èCê≥ 131111brs2 TAM ÉRÉRÇ‹Ç≈ */
}
