// AMSオーダー情報入力フロー改善 add start 2016/02/25
brs_unique_param = "";
// AMSオーダー情報入力フロー改善 add end 2016/02/25
$(document).ready(function(){

/* 修正 130905brs2 TAM ココから */
	lnavi_init();
/* 修正 130905brs2 TAM ココまで */

/* 修正 130904brs1 TAM ココから */
	keyword_init();
/* 修正 130904brs1 TAM ココまで */

/* 修正 130905brs2 TAM ココから */
	detail_float_init();
/* 修正 130905brs2 TAM ココまで */

// AMSオーダー情報入力フロー改善 add start 2016/02/25
	if ($("#dtl-main-area").length) {
		initPullDown();
		getNrShnKbnInfo(brs_unique_param,$("#a-add-cart2"),$("#img-add-cart2"));
	}
// AMSオーダー情報入力フロー改善 add end 2016/02/25

});

/* 修正 110319 TAM ココから */
/* 修正 110319 TAM ココまで */

function inputClear(id) {
	if($('#brs #keyword').val !='キーワード(注文番号もOK)'){
		$('#brs #keyword').val('キーワード(注文番号もOK)');
		$('#brs #keyword').css('color', '#999999');
/* 修正 110408 TAM 商品系ココから */
		$('#brs .keyword-clear').css('display', 'none');
/* 修正 110408 TAM 商品系ココまで */
	}
}
/*
function smartRollover() {
	if(document.getElementsByTagName) {
		var images = document.getElementsByTagName("img");
		for(var i=0; i < images.length; i++) {
			if(images[i].getAttribute("src").match("_st."))
			{
				images[i].onmouseover = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_st.", "_mo."));
				}
				images[i].onmouseout = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_mo.", "_st."));
				}
			}
		}
	}
}
if(window.addEventListener) {
	window.addEventListener("load", smartRollover, false);
}
else if(window.attachEvent) {
	window.attachEvent("onload", smartRollover);
}
*/

// 左ナビ
function disp(hide,disp) {
		var divhide=document.getElementById(hide);
		if(divhide!=null) divhide.style.display="none";
		var divdisp=document.getElementById(disp);
		if(divdisp!=null) divdisp.style.display="block";
	}
function expand(tgt,bt) {
		var tgtul=document.getElementById(tgt);
		var tgtli = tgtul.getElementsByTagName("li");
		var tgtdiv=document.getElementById(bt);
		if(tgtul!=null&&tgtli!=null&&tgtdiv!=null){
			for(var i=10;i<tgtli.length;i++){
if(tgtli.item(i).style.display == "none"){
					tgtli.item(i).style.display = "block";
					tgtdiv.getElementsByTagName("a").item(0).style.display="none";
					tgtdiv.getElementsByTagName("a").item(1).style.display="block";
				} else {
					tgtli.item(i).style.display = "none";
					tgtdiv.getElementsByTagName("a").item(0).style.display="block";
					tgtdiv.getElementsByTagName("a").item(1).style.display="none";
				}
			}
		}
}


/* 修正 111226 TAM ココから */
function setFormHeadAction () {
/* 修正 120816 TAM ココから */
/* 修正 120823 TAM ココから */
	var belnShopKbun = document.form_head.KNSK_CTGR_TI.options[document.form_head.KNSK_CTGR_TI.selectedIndex].value.substring(0,3);
/* 修正 120823 TAM ココまで */
/* 修正 120816 TAM ココから */
	if (belnShopKbun == "all") {
		belnShopKbun = "100";
	}
	document.form_head.action = "http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0024/dHdExtSrchProc?BELN_SHOP_KBN=" +  belnShopKbun;
}
/* 修正 111226 TAM ココまで */

/* 修正 130905brs2 TAM ココから */
function lnavi_init() {
//左ナビ部分↓↓↓
/* 修正 110312 TAM 商品系修正ココから */
	$('.focuson01 li a, .focuson01 li input').blur()
/* 修正 110312 TAM 商品系修正ココまで */

	$('#brs .showall').nextAll().hide();
	$('#brs .showall').toggle(function(){
		$(this).nextAll().show();
		$(this).text('元に戻す');
	},function(){
		$(this).nextAll().hide();
		$(this).text('全て表示する▼');
	});
}
/* 修正 130905brs2 TAM ココまで */


/* 修正 130904brs1 TAM ココから */
function keyword_init() {
/* 修正 110408 TAM 商品系ココから */
	var keywordVal = $('#brs #keyword').attr("value");
/* 修正 130910brs3 TAM ココから */
	if (keywordVal != "" && keywordVal != "キーワード(注文番号もOK)") {
/* 修正 130910brs3 TAM ココまで */
		$('#brs .keyword-clear').css('display', 'inline');
		$('#brs #keyword').css('color', '#333333');
	} else {
		$('#brs .keyword-clear').css('display', 'none');
		$('#brs #keyword').val('キーワード(注文番号もOK)');
		$('#brs #keyword').css('color', '#999999');
	}
/* 修正 110408 TAM 商品系ココまで */
	$('#brs #keyword')
		.focus(function(){
			if(this.value =='キーワード(注文番号もOK)'){
				$(this).attr("value", "");
				this.style.color='#333333';
			}
		})
/* 修正 110408 TAM 商品系ココから */
		.blur(function(){
			if(this.value==''){
				this.value='キーワード(注文番号もOK)';
				this.style.color='#999999';
			}
		})
		.keyup(function(){
/* 修正 110408 TAM 商品系ココまで */
			if(this.value==''){
/* 修正 110408 TAM 商品系ココから */
				$('#brs .keyword-clear').css('display', 'none');
			} else {
				$('#brs .keyword-clear').css('display', 'inline');
/* 修正 110408 TAM 商品系ココまで */
			}
		});
}
/* 修正 130904brs1 TAM ココまで */


/* 修正 130905brs2 TAM ココから */
function detail_float_init() {
	/* 修正 130517brs2 TAM ココから */
	/* フロート表示 */
	/* 修正 130827brs1 TAM ココから */
	if ($("#dtl-main-area").length) {
	/* 修正 130827brs1 TAM ココまで */
	/* 修正 130829brs3 TAM ココから */
	if (navigator.userAgent.search(/iPhone/) == -1 && navigator.userAgent.search(/iPad/) == -1 && navigator.userAgent.search(/iPod/) == -1 && navigator.userAgent.search(/Android/) == -1) {
	/* 修正 130829brs3 TAM ココまで */
	/* 修正 130822brs2 TAM ココから */
	/* 修正 130906brs1 TAM ココから */
	/* 修正 130924brs1 TAM ココから */
		var skbn = $("input[name=BELN_SHOP_KBN]").attr("value");
		$("#contentsArea").append([
			'<div id="btmfix">',
				'<div id="btmwrap">',
					'<div class="btminner cfx">',
						'<form name="form02">',
						'<div id="btm-area1" class="btm-area1">',
						'</div>',
						'<div id="btm-area3" class="btm-area3">',
							'<ul class="cart-btn">',
								// AMSオーダー情報入力フロー改善 change start 2016/02/25
								// '<li class="enlargement" id="cart-add2"><a href="javascript:void(0)" onClick="cartAddByShnDtl(',skbn,', \'/ep/srvlt/EPFB00/EPFB0005/dProdDtlCartAdd?\');return false;"><img src="/pc/for_app/img/brs_img/btn/btn_cart.png" alt="カートに入れる" width="222" height="38"></a></li>',
								'<li class="enlargement" id="cart-add2"><a id="a-add-cart2" href="javascript:void(0)" onClick="cartAddByShnDtl(',skbn,', \'/ep/srvlt/EPFB00/EPFB0005/dProdDtlCartAdd?\');return false;"><img id="img-add-cart2" src="/pc/for_app/img/brs_img/btn/btn_cart.png" alt="カートに入れる" width="222" height="38"></a></li>',
								// AMSオーダー情報入力フロー改善 change end 2016/02/25
							'</ul>',
						'</div>',
						'</form>',
					'</div>',
				'</div>',
			'</div>'
		].join(""));
	/* 修正 130924brs1 TAM ココまで */
	/* 修正 130906brs1 TAM ココまで */
	/* 修正 130822brs2 TAM ココまで */
		
		$("#btm-area1").html($("*[name=form01] div:eq(0)").html());

	/* 修正 130822brs2 TAM ココから */
		$("form[name='form02'] p").each(function(){
	/* 修正 130830brs1 TAM ココから */
				if(!$(this).text()) {
					$(this).css("background-color", "black");
					$(this).css("display", "none");
					$(this).css("width", "0");
				} else {
				    if ($(this).text().length > 4) {
				        $(this).text($(this).text().substring(0, 3) + "…");
				    }
				}
	/* 修正 130830brs1 TAM ココまで */
		});
	/* 修正 130822brs2 TAM ココまで */
	/* 修正 130524brs1 TAM ココから */
		var userAgent = window.navigator.userAgent.toLowerCase();
		if (userAgent.indexOf('msie') != -1) {
	/* 修正 130822brs2 TAM ココから */
	/* 修正 130830brs1 TAM ココから */
	/* 修正 130830brs1 TAM ココまで */
	/* 修正 130822brs2 TAM ココまで */
			$("#btmfix").css("width", "100%");
			$("#btmwrap").css("margin", "0");
			$("#btmwrap").css("width", "950px");
		}

		$("#btm-area1 p").removeClass("mt10");
		$("#btm-area1 p:contains('数量')").addClass("btmarea-num1");
		$("#btm-area1 input").addClass("btmarea-num2");
		$("#btm-area1 p.fc-blue05").attr("id","zkJky2");

		var userAgent = window.navigator.userAgent.toLowerCase();
		if (userAgent.indexOf('msie') != -1) {
			$("#btm-area1 p").css("display" , "inline");
	/* 修正 130822brs2 TAM ココから */
			/*$("#btm-area1 p").before("&nbsp;");*/
	/* 修正 130822brs2 TAM ココまで */
	/* 修正 130830brs1 TAM ココから */
	/* 修正 130830brs1 TAM ココまで */

		} else {
	/* 修正 130822brs2 TAM ココから */
			/*$("#btm-area1 select").after("&nbsp;");*/
	/* 修正 130822brs2 TAM ココまで */
		}
		
		$("#btmfix").hide();
		var dtlinfo = $('.dtl-info-area');
		var dtlinfoTop = $(dtlinfo).offset().top - $(window).height();
		$(window).scroll(function () {
			if ($(this).scrollTop() > dtlinfoTop) {
				$("#btmfix").fadeIn();
			} else {
				$("#btmfix").fadeOut();	
			}
		});
	/* 修正 130524brs1 TAM ココまで */
		
		var varIRO = $("select[name=IRO_SKBT_SEQ]").attr("onchange");
		var funcIRO = Function(varIRO);
		$("select[name=IRO_SKBT_SEQ]").removeAttr("onchange");
		
		var varSIZE1 = $("select[name=SIZE1_SKBT_SEQ]").attr("onchange");
		var funcSIZE1 = Function(varSIZE1);
		$("select[name=SIZE1_SKBT_SEQ]").removeAttr("onchange");
		
		var varSIZE2 = $("select[name=SIZE2_SKBT_SEQ]").attr("onchange");
		var funcSIZE2 = Function(varSIZE2);
		$("select[name=SIZE2_SKBT_SEQ]").removeAttr("onchange");
		
		var varSIZE3 = $("select[name=SIZE3_SKBT_SEQ]").attr("onchange");
		var funcSIZE3 = Function(varSIZE3);
		$("select[name=SIZE3_SKBT_SEQ]").removeAttr("onchange");

	/* 修正 130822brs2 TAM ココから */
		if($('select[name=IRO_SKBT_SEQ]').eq(0).length){
			var changeIRO = $('select[name=IRO_SKBT_SEQ]').eq(0).val();
			$("select[name=IRO_SKBT_SEQ]").each(function(){
				$(this).val(changeIRO);
			});
		}
	/* 修正 130822brs2 TAM ココまで */
		
		$('select[name=IRO_SKBT_SEQ]').live("change", function(){
			var changeIRO = $(this).val();
			$("select[name=IRO_SKBT_SEQ]").each(function(){
				$(this).val(changeIRO);
			});
			funcIRO();
			// AMSオーダー情報入力フロー改善 add start 2016/02/25
			getNrShnKbnInfo(brs_unique_param,$("#a-add-cart2"),$("#img-add-cart2"));
			// AMSオーダー情報入力フロー改善 add end 2016/02/25
		});

	/* 修正 130822brs2 TAM ココから */
		if($('select[name=SIZE1_SKBT_SEQ]').eq(0).length){
			var changeSIZE1 = $('select[name=SIZE1_SKBT_SEQ]').eq(0).val();
			$("select[name=SIZE1_SKBT_SEQ]").each(function(){
				$(this).val(changeSIZE1);
			});
		}
	/* 修正 130822brs2 TAM ココまで */

		$('select[name=SIZE1_SKBT_SEQ]').live("change", function(){
		    var changeSIZE1 = $(this).val();
			$("select[name=SIZE1_SKBT_SEQ]").each(function(){
				$(this).val(changeSIZE1);
			});
			funcSIZE1();
			// AMSオーダー情報入力フロー改善 add start 2016/02/25
			getNrShnKbnInfo(brs_unique_param,$("#a-add-cart2"),$("#img-add-cart2"));
			// AMSオーダー情報入力フロー改善 add end 2016/02/25
		});

	/* 修正 130822brs2 TAM ココから */
		if($('select[name=SIZE2_SKBT_SEQ]').eq(0).length){
			var changeSIZE2 = $('select[name=SIZE2_SKBT_SEQ]').eq(0).val();
			$("select[name=SIZE2_SKBT_SEQ]").each(function(){
				$(this).val(changeSIZE2);
			});
		}
	/* 修正 130822brs2 TAM ココまで */


		$('select[name=SIZE2_SKBT_SEQ]').live("change", function(){
		    var changeSIZE2 = $(this).val();
			$("select[name=SIZE2_SKBT_SEQ]").each(function(){
				$(this).val(changeSIZE2);
			});
			funcSIZE2();
			// AMSオーダー情報入力フロー改善 add start 2016/02/25
			getNrShnKbnInfo(brs_unique_param,$("#a-add-cart2"),$("#img-add-cart2"));
			// AMSオーダー情報入力フロー改善 add end 2016/02/25
		});

	/* 修正 130822brs2 TAM ココから */
		if($('select[name=SIZE3_SKBT_SEQ]').eq(0).length){
			var changeSIZE3 = $('select[name=SIZE3_SKBT_SEQ]').eq(0).val();
			$("select[name=SIZE3_SKBT_SEQ]").each(function(){
				$(this).val(changeSIZE3);
			});
		}
	/* 修正 130822brs2 TAM ココまで */

		$('select[name=SIZE3_SKBT_SEQ]').live("change", function(){
		    var changeSIZE3 = $(this).val();
			$("select[name=SIZE3_SKBT_SEQ]").each(function(){
				$(this).val(changeSIZE3);
			});
			funcSIZE3();
			// AMSオーダー情報入力フロー改善 add start 2016/02/25
			getNrShnKbnInfo(brs_unique_param,$("#a-add-cart2"),$("#img-add-cart2"));
			// AMSオーダー情報入力フロー改善 add end 2016/02/25
		});

	/* 修正 130822brs2 TAM ココから */
		if($('input[name=Q]').eq(0).length){
			var changeQ = $('input[name=Q]').eq(0).val();
			$("input[name=Q]").each(function(){
				$(this).val(changeQ);
			});
		}
	/* 修正 130822brs2 TAM ココまで */

	/* 修正 130830brs2 TAM ココから */
	/* 修正 130906brs1 TAM ココから */
		$('input[name=Q]').live("keyup", function(e){
			if ((e.keyCode != 37) && (e.keyCode != 38) && (e.keyCode != 39) && (e.keyCode != 40)) {
				var changeQ = $(this).val();
				if (changeQ.length < 3) {
	/* 修正 130911brs1 TAM ココから */
					if ($('input[name=Q]').index(this) == 0) {
						$("input[name=Q]").eq(1).val(changeQ);
					} else if ($('input[name=Q]').index(this) == 1) {
						$("input[name=Q]").eq(0).val(changeQ);
					}
	/* 修正 130911brs1 TAM ココまで */
				}
			}
		});
	/* 修正 130906brs1 TAM ココまで */
	/* 修正 130830brs2 TAM ココまで */
		
	/* 修正 130829brs3 TAM ココから */
		$("input[name='Q']").eq(1).keydown(function(e) {
			switch(e.keyCode) {
				case 13:
				return false;
				break;
			}
		});
	/* 修正 130829brs3 TAM ココまで */
	    
	/* 修正 130517brs2 TAM ココまで */
	/* 修正 130829brs3 TAM ココから */
	}
	/* 修正 130829brs3 TAM ココまで */
	/* 修正 130827brs1 TAM ココから */
	}
	/* 修正 130827brs1 TAM ココまで */
}
/* 修正 130905brs2 TAM ココまで */


(function(){
	document.writeln('<script src="http://www.bellemaison.jp/pc/common/script/price_change_rsp_8per.js" type="text/javascript" charset="UTF-8"></script>'); // 消費税対応
})();
