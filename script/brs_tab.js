//追加 150409 EC ここから
function addQAdtl2(){
	$('#dtl-info-nav04').bind('click', function(){
			$('.dtl-info-nav h2').removeClass("selected");
			$(this).addClass("selected");
			$('#brs div[id^=dtl-info-area]').hide();
			$('#dtl-info-area04').show();
			return false;	
	});
    $('#dtl-info-area02').after($('#dtl-info-area04'));
}
//追加 150409 EC ここまで

//追加 150218 EC ここから
function addQAdtl(){
	$('#dtl-info-nav02').after('<h2 id="dtl-info-nav04"><a href="#dtl-info-area04" onfocus="this.blur();"><span>よくあるご質問</span></a></h2>');
	$('#dtl-info-nav04').bind('click', function(){
			$('.dtl-info-nav h2').removeClass("selected");
			$(this).addClass("selected");
			$('#brs div[id^=dtl-info-area]').hide();
			$('#dtl-info-area04').show();
			return false;	
	});
    $('#dtl-info-area02').after($('#dtl-info-area04'));
}
//追加 150218 EC ここまで

$(function(){
		$("#brs div[id^=dtl-info-area]:not("+$("div.dtl-info-nav h2.selected a").attr("href")+")").hide();
		$("div.dtl-info-nav h2").click(function(){
			$("div.dtl-info-nav h2").removeClass("selected");
			$(this).addClass("selected");
			$("#brs div[id^=dtl-info-area]").hide();
			$($($(this).children("a")).attr("href")).show();
			return false;
		});
});

/*
$(function(){
		$("#brs div[id^=dtl-info-area]:not("+$("ul.dtl-info-nav li a.selected").attr("href")+")").hide();
		$("ul.dtl-info-nav li a").click(function(){
			$("ul.dtl-info-nav li a").removeClass("selected");
			$(this).addClass("selected");
			$("#brs div[id^=dtl-info-area]").hide();
			$($(this).attr("href")).show();
			return false;
		});
});*/