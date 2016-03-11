document.writeln("<style type='text/css'><!--")
if (navigator.appVersion.indexOf("Win")!=-1) {
  document.write("body {font-family:'ƒƒCƒŠƒI',Meiryo,'‚l‚r ‚oƒSƒVƒbƒN',sans-serif;}");
}
document.writeln("--></style>");



$(document).ready(function(){
    var tgDetails = $("div.details");
	flag = 0;
	
/*infobox‚Ì‚‚³‘µ‚¦*/
           tallest = 0;
           $(".infobox").each(function() {
               thisHeight = $(this).height();
               if(thisHeight > tallest) {
                  tallest = thisHeight;
               }
           });
	   infoSize = tallest+10;
           $(".infobox").height(infoSize);
/*‚±‚±‚Ü‚Å@infobox‚Ì‚‚³‘µ‚¦*/

           drgSizeS = $("div.draggable").height();
	   drgSizeL = 0;


	   draggableHeight = "";
	   mdObj = "";
	   targetDiv = "";
	   targetHandle = "";

	  tgl = 0;

	$(".toggle").click(function () {
		$(".tgbtn img").toggle();
		tgDetails.slideToggle(0);

	    if(tgl == 0){ tgl = 1 }else{ tgl = 0 }

	    $("div.draggable").css("height", "auto");
            equalHeight($(".detailsTxt")); 
	    draggableHeight = "";
		});

	$("div.item").mouseout(function() {  
		if(targetDiv != ""){ 
		$(targetDiv).css("border-color","#ccc");
		  targetDiv = "";
		}
	})  
	$("div.item").mouseover(function() {  
		targetDiv = this;
		$(targetDiv).css("border-color","#3466cc");
 
	});     
	$("div.handle").mouseover(function() {  
		targetHandle = this;
		$(targetHandle).addClass("mo");
	})  
	$("div.handle").mouseout(function() {  
		if(targetHandle != ""){ 
		$(targetHandle).removeClass("mo");
		  targetHandle = "";
		}
	});

	$("body").mouseup(function() {
		if(mdObj != ""){ 
		  $(mdObj).attr("src","/pc/for_app/img/spacer.gif");
		  $(mdObj).parents("div.handle").removeClass("mo");
		  $(mdObj).parents("div.item").removeClass("selected");
		  mdObj = "";
		}
	    $("div.draggable").css("height", "auto");
	})  
	$("img.handImg").mousedown(function() {  
		mdObj = this;
		$(mdObj).attr("src","/pc/for_app/img/epfb0050_hand02.gif");
		$(mdObj).parents("div.item").addClass("selected");
	    if(tgl == 0){
		$("div.draggable").css("height", drgSizeS);
	    }else{
		if(drgSizeL == 0){
		    drgSizeL = $("div.draggable").height();
		}
		$("div.draggable").css("height", drgSizeL );
	    }
	});     



});

	detailsSize = 0;
         function equalHeight(group) {
            tallest = 0;
            group.each(function() {
               thisHeight = $(this).height();
               if(thisHeight > tallest) {
                  tallest = thisHeight;
               }
            });
	    if(detailsSize == 0){
		detailsSize = tallest+10;
	    }
            group.height(detailsSize);
         }


function itmSort(){
  itmNo = new Array();
//alert(document.mylist.length);
  for(i=0; i<document.mylist.length; i++){
    if(document.mylist.elements[i].name == "itmId"){
//alert(document.mylist.elements[i].value);
      itmNo[i] = document.mylist.elements[i].value;
//alert(itmNo[i]);
    }

  }
}

//•À‚×‘Ö‚¦î•ñ‚ð•Ï”Ši”[‚µ‚½‚¢‚Æ‚«AˆÈ‰ºƒRƒƒ“ƒgƒAƒEƒg‚ðƒgƒ‹
//window.onblur=itmSort;


draggableCount = 0;
function itmCount(oknirShnKq){
	draggableCount= oknirShnKq;
}



