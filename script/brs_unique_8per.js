// AMS�I�[�_�[�����̓t���[���P add start 2016/02/25
brs_unique_param = "";
// AMS�I�[�_�[�����̓t���[���P add end 2016/02/25
$(document).ready(function(){

/* �C�� 130905brs2 TAM �R�R���� */
	lnavi_init();
/* �C�� 130905brs2 TAM �R�R�܂� */

/* �C�� 130904brs1 TAM �R�R���� */
	keyword_init();
/* �C�� 130904brs1 TAM �R�R�܂� */

/* �C�� 130905brs2 TAM �R�R���� */
	detail_float_init();
/* �C�� 130905brs2 TAM �R�R�܂� */

// AMS�I�[�_�[�����̓t���[���P add start 2016/02/25
	if ($("#dtl-main-area").length) {
		initPullDown();
		getNrShnKbnInfo(brs_unique_param,$("#a-add-cart2"),$("#img-add-cart2"));
	}
// AMS�I�[�_�[�����̓t���[���P add end 2016/02/25

});

/* �C�� 110319 TAM �R�R���� */
/* �C�� 110319 TAM �R�R�܂� */

function inputClear(id) {
	if($('#brs #keyword').val !='�L�[���[�h(�����ԍ���OK)'){
		$('#brs #keyword').val('�L�[���[�h(�����ԍ���OK)');
		$('#brs #keyword').css('color', '#999999');
/* �C�� 110408 TAM ���i�n�R�R���� */
		$('#brs .keyword-clear').css('display', 'none');
/* �C�� 110408 TAM ���i�n�R�R�܂� */
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

// ���i�r
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


/* �C�� 111226 TAM �R�R���� */
function setFormHeadAction () {
/* �C�� 120816 TAM �R�R���� */
/* �C�� 120823 TAM �R�R���� */
	var belnShopKbun = document.form_head.KNSK_CTGR_TI.options[document.form_head.KNSK_CTGR_TI.selectedIndex].value.substring(0,3);
/* �C�� 120823 TAM �R�R�܂� */
/* �C�� 120816 TAM �R�R���� */
	if (belnShopKbun == "all") {
		belnShopKbun = "100";
	}
	document.form_head.action = "http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0024/dHdExtSrchProc?BELN_SHOP_KBN=" +  belnShopKbun;
}
/* �C�� 111226 TAM �R�R�܂� */

/* �C�� 130905brs2 TAM �R�R���� */
function lnavi_init() {
//���i�r����������
/* �C�� 110312 TAM ���i�n�C���R�R���� */
	$('.focuson01 li a, .focuson01 li input').blur()
/* �C�� 110312 TAM ���i�n�C���R�R�܂� */

	$('#brs .showall').nextAll().hide();
	$('#brs .showall').toggle(function(){
		$(this).nextAll().show();
		$(this).text('���ɖ߂�');
	},function(){
		$(this).nextAll().hide();
		$(this).text('�S�ĕ\�����遥');
	});
}
/* �C�� 130905brs2 TAM �R�R�܂� */


/* �C�� 130904brs1 TAM �R�R���� */
function keyword_init() {
/* �C�� 110408 TAM ���i�n�R�R���� */
	var keywordVal = $('#brs #keyword').attr("value");
/* �C�� 130910brs3 TAM �R�R���� */
	if (keywordVal != "" && keywordVal != "�L�[���[�h(�����ԍ���OK)") {
/* �C�� 130910brs3 TAM �R�R�܂� */
		$('#brs .keyword-clear').css('display', 'inline');
		$('#brs #keyword').css('color', '#333333');
	} else {
		$('#brs .keyword-clear').css('display', 'none');
		$('#brs #keyword').val('�L�[���[�h(�����ԍ���OK)');
		$('#brs #keyword').css('color', '#999999');
	}
/* �C�� 110408 TAM ���i�n�R�R�܂� */
	$('#brs #keyword')
		.focus(function(){
			if(this.value =='�L�[���[�h(�����ԍ���OK)'){
				$(this).attr("value", "");
				this.style.color='#333333';
			}
		})
/* �C�� 110408 TAM ���i�n�R�R���� */
		.blur(function(){
			if(this.value==''){
				this.value='�L�[���[�h(�����ԍ���OK)';
				this.style.color='#999999';
			}
		})
		.keyup(function(){
/* �C�� 110408 TAM ���i�n�R�R�܂� */
			if(this.value==''){
/* �C�� 110408 TAM ���i�n�R�R���� */
				$('#brs .keyword-clear').css('display', 'none');
			} else {
				$('#brs .keyword-clear').css('display', 'inline');
/* �C�� 110408 TAM ���i�n�R�R�܂� */
			}
		});
}
/* �C�� 130904brs1 TAM �R�R�܂� */


/* �C�� 130905brs2 TAM �R�R���� */
function detail_float_init() {
	/* �C�� 130517brs2 TAM �R�R���� */
	/* �t���[�g�\�� */
	/* �C�� 130827brs1 TAM �R�R���� */
	if ($("#dtl-main-area").length) {
	/* �C�� 130827brs1 TAM �R�R�܂� */
	/* �C�� 130829brs3 TAM �R�R���� */
	if (navigator.userAgent.search(/iPhone/) == -1 && navigator.userAgent.search(/iPad/) == -1 && navigator.userAgent.search(/iPod/) == -1 && navigator.userAgent.search(/Android/) == -1) {
	/* �C�� 130829brs3 TAM �R�R�܂� */
	/* �C�� 130822brs2 TAM �R�R���� */
	/* �C�� 130906brs1 TAM �R�R���� */
	/* �C�� 130924brs1 TAM �R�R���� */
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
								// AMS�I�[�_�[�����̓t���[���P change start 2016/02/25
								// '<li class="enlargement" id="cart-add2"><a href="javascript:void(0)" onClick="cartAddByShnDtl(',skbn,', \'/ep/srvlt/EPFB00/EPFB0005/dProdDtlCartAdd?\');return false;"><img src="/pc/for_app/img/brs_img/btn/btn_cart.png" alt="�J�[�g�ɓ����" width="222" height="38"></a></li>',
								'<li class="enlargement" id="cart-add2"><a id="a-add-cart2" href="javascript:void(0)" onClick="cartAddByShnDtl(',skbn,', \'/ep/srvlt/EPFB00/EPFB0005/dProdDtlCartAdd?\');return false;"><img id="img-add-cart2" src="/pc/for_app/img/brs_img/btn/btn_cart.png" alt="�J�[�g�ɓ����" width="222" height="38"></a></li>',
								// AMS�I�[�_�[�����̓t���[���P change end 2016/02/25
							'</ul>',
						'</div>',
						'</form>',
					'</div>',
				'</div>',
			'</div>'
		].join(""));
	/* �C�� 130924brs1 TAM �R�R�܂� */
	/* �C�� 130906brs1 TAM �R�R�܂� */
	/* �C�� 130822brs2 TAM �R�R�܂� */
		
		$("#btm-area1").html($("*[name=form01] div:eq(0)").html());

	/* �C�� 130822brs2 TAM �R�R���� */
		$("form[name='form02'] p").each(function(){
	/* �C�� 130830brs1 TAM �R�R���� */
				if(!$(this).text()) {
					$(this).css("background-color", "black");
					$(this).css("display", "none");
					$(this).css("width", "0");
				} else {
				    if ($(this).text().length > 4) {
				        $(this).text($(this).text().substring(0, 3) + "�c");
				    }
				}
	/* �C�� 130830brs1 TAM �R�R�܂� */
		});
	/* �C�� 130822brs2 TAM �R�R�܂� */
	/* �C�� 130524brs1 TAM �R�R���� */
		var userAgent = window.navigator.userAgent.toLowerCase();
		if (userAgent.indexOf('msie') != -1) {
	/* �C�� 130822brs2 TAM �R�R���� */
	/* �C�� 130830brs1 TAM �R�R���� */
	/* �C�� 130830brs1 TAM �R�R�܂� */
	/* �C�� 130822brs2 TAM �R�R�܂� */
			$("#btmfix").css("width", "100%");
			$("#btmwrap").css("margin", "0");
			$("#btmwrap").css("width", "950px");
		}

		$("#btm-area1 p").removeClass("mt10");
		$("#btm-area1 p:contains('����')").addClass("btmarea-num1");
		$("#btm-area1 input").addClass("btmarea-num2");
		$("#btm-area1 p.fc-blue05").attr("id","zkJky2");

		var userAgent = window.navigator.userAgent.toLowerCase();
		if (userAgent.indexOf('msie') != -1) {
			$("#btm-area1 p").css("display" , "inline");
	/* �C�� 130822brs2 TAM �R�R���� */
			/*$("#btm-area1 p").before("&nbsp;");*/
	/* �C�� 130822brs2 TAM �R�R�܂� */
	/* �C�� 130830brs1 TAM �R�R���� */
	/* �C�� 130830brs1 TAM �R�R�܂� */

		} else {
	/* �C�� 130822brs2 TAM �R�R���� */
			/*$("#btm-area1 select").after("&nbsp;");*/
	/* �C�� 130822brs2 TAM �R�R�܂� */
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
	/* �C�� 130524brs1 TAM �R�R�܂� */
		
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

	/* �C�� 130822brs2 TAM �R�R���� */
		if($('select[name=IRO_SKBT_SEQ]').eq(0).length){
			var changeIRO = $('select[name=IRO_SKBT_SEQ]').eq(0).val();
			$("select[name=IRO_SKBT_SEQ]").each(function(){
				$(this).val(changeIRO);
			});
		}
	/* �C�� 130822brs2 TAM �R�R�܂� */
		
		$('select[name=IRO_SKBT_SEQ]').live("change", function(){
			var changeIRO = $(this).val();
			$("select[name=IRO_SKBT_SEQ]").each(function(){
				$(this).val(changeIRO);
			});
			funcIRO();
			// AMS�I�[�_�[�����̓t���[���P add start 2016/02/25
			getNrShnKbnInfo(brs_unique_param,$("#a-add-cart2"),$("#img-add-cart2"));
			// AMS�I�[�_�[�����̓t���[���P add end 2016/02/25
		});

	/* �C�� 130822brs2 TAM �R�R���� */
		if($('select[name=SIZE1_SKBT_SEQ]').eq(0).length){
			var changeSIZE1 = $('select[name=SIZE1_SKBT_SEQ]').eq(0).val();
			$("select[name=SIZE1_SKBT_SEQ]").each(function(){
				$(this).val(changeSIZE1);
			});
		}
	/* �C�� 130822brs2 TAM �R�R�܂� */

		$('select[name=SIZE1_SKBT_SEQ]').live("change", function(){
		    var changeSIZE1 = $(this).val();
			$("select[name=SIZE1_SKBT_SEQ]").each(function(){
				$(this).val(changeSIZE1);
			});
			funcSIZE1();
			// AMS�I�[�_�[�����̓t���[���P add start 2016/02/25
			getNrShnKbnInfo(brs_unique_param,$("#a-add-cart2"),$("#img-add-cart2"));
			// AMS�I�[�_�[�����̓t���[���P add end 2016/02/25
		});

	/* �C�� 130822brs2 TAM �R�R���� */
		if($('select[name=SIZE2_SKBT_SEQ]').eq(0).length){
			var changeSIZE2 = $('select[name=SIZE2_SKBT_SEQ]').eq(0).val();
			$("select[name=SIZE2_SKBT_SEQ]").each(function(){
				$(this).val(changeSIZE2);
			});
		}
	/* �C�� 130822brs2 TAM �R�R�܂� */


		$('select[name=SIZE2_SKBT_SEQ]').live("change", function(){
		    var changeSIZE2 = $(this).val();
			$("select[name=SIZE2_SKBT_SEQ]").each(function(){
				$(this).val(changeSIZE2);
			});
			funcSIZE2();
			// AMS�I�[�_�[�����̓t���[���P add start 2016/02/25
			getNrShnKbnInfo(brs_unique_param,$("#a-add-cart2"),$("#img-add-cart2"));
			// AMS�I�[�_�[�����̓t���[���P add end 2016/02/25
		});

	/* �C�� 130822brs2 TAM �R�R���� */
		if($('select[name=SIZE3_SKBT_SEQ]').eq(0).length){
			var changeSIZE3 = $('select[name=SIZE3_SKBT_SEQ]').eq(0).val();
			$("select[name=SIZE3_SKBT_SEQ]").each(function(){
				$(this).val(changeSIZE3);
			});
		}
	/* �C�� 130822brs2 TAM �R�R�܂� */

		$('select[name=SIZE3_SKBT_SEQ]').live("change", function(){
		    var changeSIZE3 = $(this).val();
			$("select[name=SIZE3_SKBT_SEQ]").each(function(){
				$(this).val(changeSIZE3);
			});
			funcSIZE3();
			// AMS�I�[�_�[�����̓t���[���P add start 2016/02/25
			getNrShnKbnInfo(brs_unique_param,$("#a-add-cart2"),$("#img-add-cart2"));
			// AMS�I�[�_�[�����̓t���[���P add end 2016/02/25
		});

	/* �C�� 130822brs2 TAM �R�R���� */
		if($('input[name=Q]').eq(0).length){
			var changeQ = $('input[name=Q]').eq(0).val();
			$("input[name=Q]").each(function(){
				$(this).val(changeQ);
			});
		}
	/* �C�� 130822brs2 TAM �R�R�܂� */

	/* �C�� 130830brs2 TAM �R�R���� */
	/* �C�� 130906brs1 TAM �R�R���� */
		$('input[name=Q]').live("keyup", function(e){
			if ((e.keyCode != 37) && (e.keyCode != 38) && (e.keyCode != 39) && (e.keyCode != 40)) {
				var changeQ = $(this).val();
				if (changeQ.length < 3) {
	/* �C�� 130911brs1 TAM �R�R���� */
					if ($('input[name=Q]').index(this) == 0) {
						$("input[name=Q]").eq(1).val(changeQ);
					} else if ($('input[name=Q]').index(this) == 1) {
						$("input[name=Q]").eq(0).val(changeQ);
					}
	/* �C�� 130911brs1 TAM �R�R�܂� */
				}
			}
		});
	/* �C�� 130906brs1 TAM �R�R�܂� */
	/* �C�� 130830brs2 TAM �R�R�܂� */
		
	/* �C�� 130829brs3 TAM �R�R���� */
		$("input[name='Q']").eq(1).keydown(function(e) {
			switch(e.keyCode) {
				case 13:
				return false;
				break;
			}
		});
	/* �C�� 130829brs3 TAM �R�R�܂� */
	    
	/* �C�� 130517brs2 TAM �R�R�܂� */
	/* �C�� 130829brs3 TAM �R�R���� */
	}
	/* �C�� 130829brs3 TAM �R�R�܂� */
	/* �C�� 130827brs1 TAM �R�R���� */
	}
	/* �C�� 130827brs1 TAM �R�R�܂� */
}
/* �C�� 130905brs2 TAM �R�R�܂� */


(function(){
	document.writeln('<script src="http://www.bellemaison.jp/pc/common/script/price_change_rsp_8per.js" type="text/javascript" charset="UTF-8"></script>'); // ����őΉ�
})();
