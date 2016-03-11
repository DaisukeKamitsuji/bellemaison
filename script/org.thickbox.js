/*
 * Thickbox 3.1 - One Box To Rule Them All.
 * By Cody Lindley (http://www.codylindley.com)
 * Copyright (c) 2007 cody lindley
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
*/
/* èCê≥ 151130brs1 TAM ÉRÉRÇ©ÇÁ */
 var orgtb_pathToImage = "/pc/for_app/img/brs_img/loadingAnimation.gif";
/* èCê≥ 151130brs1 TAM ÉRÉRÇ‹Ç≈ */

/*!!!!!!!!!!!!!!!!! edit below this line at your own risk !!!!!!!!!!!!!!!!!!!!!!!*/

//on page load call tb_init
$(document).ready(function(){   
	orgtb_init('a.thickbox_org, area.thickbox_org, input.thickbox_org');//pass where to apply thickbox
	orgimgLoader = new Image();// preload image
/* èCê≥ 151130brs1 TAM ÉRÉRÇ©ÇÁ */
 	orgimgLoader.src = orgtb_pathToImage;
/* èCê≥ 151130brs1 TAM ÉRÉRÇ‹Ç≈ */
});

//add thickbox to href & area elements that have a class of .thickbox
function orgtb_init(domChunk){
	$(domChunk).click(function(){
	var t = this.title || this.name || null;
	var a = this.href || this.alt;
	var g = this.rel || false;
	orgtb_show(t,a,g);
	this.blur();
	return false;
	});
}

function orgtb_show(caption, url, imageGroup) {//function called when the user clicks on a thickbox link

	try {
		if (typeof document.body.style.maxHeight === "undefined") {//if IE 6
			$("body","html").css({height: "100%", width: "100%"});
			$("html").css("overflow","hidden");
			if (document.getElementById("org_TB_HideSelect") === null) {//iframe to hide select elements in ie6
				$("body").append("<iframe id='org_TB_HideSelect'></iframe><div id='org_TB_overlay'></div><div id='org_TB_window'></div>");
				$("#org_TB_overlay").click(orgtb_remove);
			}
		}else{//all others
			if(document.getElementById("org_TB_overlay") === null){
				$("body").append("<div id='org_TB_overlay'></div><div id='org_TB_window'></div>");
				$("#org_TB_overlay").click(orgtb_remove);
			}
		}
		
		if(orgtb_detectMacXFF()){
			$("#org_TB_overlay").addClass("org_TB_overlayMacFFBGHack");//use png overlay so hide flash
		}else{
			$("#org_TB_overlay").addClass("org_TB_overlayBG");//use background and opacity
		}
		
		if(caption===null){caption="";}
		$("body").append("<div id='org_TB_load'><img src='"+orgimgLoader.src+"' /></div>");//add loader to the page
		$('#org_TB_load').show();//show loader
		
		var baseURL;
	   if(url.indexOf("?")!==-1){ //ff there is a query string involved
			baseURL = url.substr(0, url.indexOf("?"));
	   }else{ 
	   		baseURL = url;
	   }
	   
	   var urlString = /\.jpg$|\.jpeg$|\.png$|\.gif$|\.bmp$/;
	   var urlType = baseURL.toLowerCase().match(urlString);

		if(urlType == '.jpg' || urlType == '.jpeg' || urlType == '.png' || urlType == '.gif' || urlType == '.bmp'){//code to show images
				
			TB_PrevCaption = "";
			TB_PrevURL = "";
			TB_PrevHTML = "";
			TB_NextCaption = "";
			TB_NextURL = "";
			TB_NextHTML = "";
			TB_imageCount = "";
			TB_FoundURL = false;
			if(imageGroup){
				TB_TempArray = $("a[@rel="+imageGroup+"]").get();
				for (TB_Counter = 0; ((TB_Counter < TB_TempArray.length) && (TB_NextHTML === "")); TB_Counter++) {
					var urlTypeTemp = TB_TempArray[TB_Counter].href.toLowerCase().match(urlString);
						if (!(TB_TempArray[TB_Counter].href == url)) {						
							if (TB_FoundURL) {
								TB_NextCaption = TB_TempArray[TB_Counter].title;
								TB_NextURL = TB_TempArray[TB_Counter].href;
								TB_NextHTML = "<span id='TB_next'>&nbsp;&nbsp;<a href='#'>Next &gt;</a></span>";
							} else {
								TB_PrevCaption = TB_TempArray[TB_Counter].title;
								TB_PrevURL = TB_TempArray[TB_Counter].href;
								TB_PrevHTML = "<span id='TB_prev'>&nbsp;&nbsp;<a href='#'>&lt; Prev</a></span>";
							}
						} else {
							TB_FoundURL = true;
							TB_imageCount = "Image " + (TB_Counter + 1) +" of "+ (TB_TempArray.length);											
						}
				}
			}

			imgPreloader = new Image();
			imgPreloader.onload = function(){		
			imgPreloader.onload = null;
				
			// Resizing large images - orginal by Christian Montoya edited by me.
			var pagesize = orgtb_getPageSize();
			var x = pagesize[0] - 150;
			var y = pagesize[1] - 150;
			var imageWidth = imgPreloader.width;
			var imageHeight = imgPreloader.height;
			if (imageWidth > x) {
				imageHeight = imageHeight * (x / imageWidth); 
				imageWidth = x; 
				if (imageHeight > y) { 
					imageWidth = imageWidth * (y / imageHeight); 
					imageHeight = y; 
				}
			} else if (imageHeight > y) { 
				imageWidth = imageWidth * (y / imageHeight); 
				imageHeight = y; 
				if (imageWidth > x) { 
					imageHeight = imageHeight * (x / imageWidth); 
					imageWidth = x;
				}
			}
			// End Resizing
			
			TB_WIDTH = imageWidth + 30;
			TB_HEIGHT = imageHeight + 60;
			$("#org_TB_window").append("<a href='' id='TB_ImageOff' title='Close'><img id='TB_Image' src='"+url+"' width='"+imageWidth+"' height='"+imageHeight+"' alt='"+caption+"'/></a>" + "<div id='org_TB_caption'>"+caption+"<div id='org_TB_secondLine'>" + TB_imageCount + TB_PrevHTML + TB_NextHTML + "</div></div><div id='org_TB_closeWindow'><a href='#' id='org_TB_closeWindowButton' title='Close'>close</a> or Esc Key</div>"); 		
			
			$("#org_TB_closeWindowButton").click(orgtb_remove);
			
			if (!(TB_PrevHTML === "")) {
				function goPrev(){
					if($(document).unbind("click",goPrev)){$(document).unbind("click",goPrev);}
					$("#org_TB_window").remove();
					$("body").append("<div id='org_TB_window'></div>");
					orgtb_show(TB_PrevCaption, TB_PrevURL, imageGroup);
					return false;	
				}
				$("#TB_prev").click(goPrev);
			}
			
			if (!(TB_NextHTML === "")) {		
				function goNext(){
					$("#org_TB_window").remove();
					$("body").append("<div id='org_TB_window'></div>");
					orgtb_show(TB_NextCaption, TB_NextURL, imageGroup);				
					return false;	
				}
				$("#TB_next").click(goNext);
				
			}

			document.onkeydown = function(e){ 	
				if (e == null) { // ie
					keycode = event.keyCode;
				} else { // mozilla
					keycode = e.which;
				}
				if(keycode == 27){ // close
					orgtb_remove();
				} else if(keycode == 190){ // display previous image
					if(!(TB_NextHTML == "")){
						document.onkeydown = "";
						goNext();
					}
				} else if(keycode == 188){ // display next image
					if(!(TB_PrevHTML == "")){
						document.onkeydown = "";
						goPrev();
					}
				}	
			};
			
			orgtb_position();
			$("#org_TB_load").remove();
			$("#TB_ImageOff").click(orgtb_remove);
			$("#org_TB_window").css({display:"block"}); //for safari using css instead of show
			};
			
			imgPreloader.src = url;
		}else{//code to show html

			var queryString = url.replace(/^[^\?]+\??/,'');
			var params = orgtb_parseQuery( queryString );
			TB_WIDTH = (params['width']*1)/* + 30*/ || 630; //defaults to 630 if no paramaters were added to URL
			TB_HEIGHT = (params['height']*1) /*+ 40*/ || 440; //defaults to 440 if no paramaters were added to URL
			ajaxContentW = TB_WIDTH /*- 30*/;
			ajaxContentH = TB_HEIGHT/* - 45*/;
			
			if(url.indexOf('TB_iframe') != -1){// either iframe or ajax window		
					urlNoQuery = url.split('TB_');
					$("#org_TB_iframeContent").remove();
					if(params['modal'] != "true"){//iframe no modal
						$("#org_TB_window").append("<div id='org_TB_title'><div id='org_TB_ajaxWindowTitle'>"+caption+"</div><div id='org_TB_closeAjaxWindow'><a href='#' id='org_TB_closeWindowButton' title='Close'>close</a> or Esc Key</div></div><iframe frameborder='0' hspace='0' src='"+urlNoQuery[0]+"' id='org_TB_iframeContent' name='org_TB_iframeContent"+Math.round(Math.random()*1000)+"' onload='orgtb_showIframe()' style='width:"+(ajaxContentW + 29)+"px;height:"+(ajaxContentH + 17)+"px;' > </iframe>");
					}else{//iframe modal
					$("#org_TB_overlay").unbind();
						$("#org_TB_window").append("<iframe frameborder='0' hspace='0' src='"+urlNoQuery[0]+"' id='org_TB_iframeContent' name='org_TB_iframeContent"+Math.round(Math.random()*1000)+"' onload='orgtb_showIframe()' style='width:"+(ajaxContentW + 29)+"px;height:"+(ajaxContentH + 17)+"px;'> </iframe>");
					}
			}else{// not an iframe, ajax
					if($("#org_TB_window").css("display") != "block"){
						if(params['modal'] != "true"){//ajax no modal
						$("#org_TB_window").append("<div id='org_TB_title'><div id='org_TB_ajaxWindowTitle'>"+caption+"</div><div id='org_TB_closeAjaxWindow'><a href='#' id='org_TB_closeWindowButton'>close</a> or Esc Key</div></div><div id='org_TB_ajaxContent' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px'></div>");
						}else{//ajax modal
						$("#org_TB_overlay").unbind();
						$("#org_TB_window").append("<div id='org_TB_ajaxContent' class='TB_modal' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px;'></div>");	
						}
					}else{//this means the window is already up, we are just loading new content via ajax
						$("#org_TB_ajaxContent")[0].style.width = ajaxContentW +"px";
						$("#org_TB_ajaxContent")[0].style.height = ajaxContentH +"px";
						$("#org_TB_ajaxContent")[0].scrollTop = 0;
						$("#org_TB_ajaxWindowTitle").html(caption);
					}
			}
					
			$("#org_TB_closeWindowButton").click(orgtb_remove);
			
				if(url.indexOf('TB_inline') != -1){	
					$("#org_TB_ajaxContent").append($('#' + params['inlineId']).children());
					$("#org_TB_window").unload(function () {
						$('#' + params['inlineId']).append( $("#org_TB_ajaxContent").children() ); // move elements back when you're finished
					});
					orgtb_position();
					$("#org_TB_load").remove();
					$("#org_TB_window").css({display:"block"}); 
				}else if(url.indexOf('TB_iframe') != -1){
					orgtb_position();
					if($.browser.safari){//safari needs help because it will not fire iframe onload
						$("#org_TB_load").remove();
						$("#org_TB_window").css({display:"block"});
					}
				}else{
					$("#org_TB_ajaxContent").load(url += "&random=" + (new Date().getTime()),function(){//to do a post change this load method
						orgtb_position();
						$("#org_TB_load").remove();
						tb_init("#org_TB_ajaxContent a.thickbox");
						$("#org_TB_window").css({display:"block"});
					});
				}
			
		}

		if(!params['modal']){
			document.onkeyup = function(e){ 	
				if (e == null) { // ie
					keycode = event.keyCode;
				} else { // mozilla
					keycode = e.which;
				}
				if(keycode == 27){ // close
					orgtb_remove();
				}	
			};
		}
		
	} catch(e) {
		//nothing here
	}
}

//helper functions below
function orgtb_showIframe(){
	$("#org_TB_load").remove();
	$("#org_TB_window").css({display:"block"});
}

function orgtb_remove() {
 	$("#TB_imageOff").unbind("click");
	$("#org_TB_closeWindowButton").unbind("click");
	$("#org_TB_window").fadeOut("fast",function(){$('#org_TB_window,#org_TB_overlay,#org_TB_HideSelect').trigger("unload").unbind().remove();});
	$("#org_TB_load").remove();
	if (typeof document.body.style.maxHeight == "undefined") {//if IE 6
		$("body","html").css({height: "auto", width: "auto"});
		$("html").css("overflow","");
	}
	document.onkeydown = "";
	document.onkeyup = "";
	return false;
}

/*function orgtb_position() {
$("#org_TB_window").css({marginLeft: '-' + parseInt((TB_WIDTH / 2),10) + 'px', width: TB_WIDTH + 'px'});
	if ( !(jQuery.browser.msie && jQuery.browser.version < 7)) { // take away IE6
		$("#org_TB_window").css({marginTop: '-' + parseInt((TB_HEIGHT / 2),10) + 'px'});
	}
}*/

function orgtb_position() { // hot fixed for microsuck internet exploiter
jQuery("#org_TB_window").css({marginLeft: '-' + parseInt((TB_WIDTH /2),
10) + 'px', width: TB_WIDTH + 'px'});
var dtop=parseInt((TB_HEIGHT / 2),10);
var scrolledDown=0;
if(jQuery.browser.msie){//ie hax
if(document.body != null){
scrolledDown=document.body.scrollTop;
}
else if(document.documentElement != null){
scrolledDown = document.documentElement.scrollTop; //ie7
}
}
if(scrolledDown){
jQuery("#org_TB_window").css({marginTop: '+' + scrolledDown + 'px'});
}
else{
jQuery("#org_TB_window").css({marginTop: '-' + dtop + 'px'});
}
}



function orgtb_parseQuery ( query ) {
   var Params = {};
   if ( ! query ) {return Params;}// return empty object
   var Pairs = query.split(/[;&]/);
   for ( var i = 0; i < Pairs.length; i++ ) {
      var KeyVal = Pairs[i].split('=');
      if ( ! KeyVal || KeyVal.length != 2 ) {continue;}
      var key = unescape( KeyVal[0] );
      var val = unescape( KeyVal[1] );
      val = val.replace(/\+/g, ' ');
      Params[key] = val;
   }
   return Params;
}

function orgtb_getPageSize(){
	var de = document.documentElement;
	var w = window.innerWidth || self.innerWidth || (de&&de.clientWidth) || document.body.clientWidth;
	var h = window.innerHeight || self.innerHeight || (de&&de.clientHeight) || document.body.clientHeight;
	arrayPageSize = [w,h];
	return arrayPageSize;
}

function orgtb_detectMacXFF() {
  var userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.indexOf('mac') != -1 && userAgent.indexOf('firefox')!=-1) {
    return true;
  }
}


