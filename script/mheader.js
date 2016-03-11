if ((window.navigator.userAgent.toLowerCase().indexOf('msie') != -1) && (window.navigator.appVersion.toLowerCase().indexOf("msie 7.") != -1)) {
// IE7
	document.write('<div class="mboxDefault">');
	var strURL = location.href;
	/* 修正 130829brs4 TAM ココから */
	if ( (strURL.indexOf("/pr/") == -1) && (strURL.indexOf("/ep/srvlt/EPFB00/EPFB0005/dProdDtlShow") == -1)) {
	/* 修正 130829brs4 TAM ココまで */
	document.write('<div class="mt10 h50">');
	document.write('	<ul id="nav-one" class="cfx">');
	document.write('		<li id="gnav01" class="f-left">');
	document.write('		<img src="/pc/for_app/img/brs_img/btn/global-header01_st.gif" alt="ファッション">');
	document.write('			<ul>');
	document.write('			    <li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=1" onclick="s_objectID=\'cm_cat_00000001\';">レディースファッション</a></li>');
	document.write('			    <li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=2" onclick="s_objectID=\'cm_cat_00000002\';">女性下着･インナー･パジャマ</a></li>');
	document.write('			    <li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=3" onclick="s_objectID=\'cm_cat_00000003\';">靴・バッグ・アクセサリー</a></li>');
	document.write('			    <li><a href="http://www.bellemaison.jp/cpg/fashion/sports/sports_index.html" onclick="s_objectID=\'cm_cat_sports\';">スポーツウェア・スニーカー</a></li>');
	document.write('			    <li><a href="http://www.bellemaison.jp/cpg/lsize/index.html" onclick="s_objectID=\'cm_cat_lsize\';">大きいサイズ</a></li>');
	document.write('			    <li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=16" onclick="s_objectID=\'cm_cat_00000016\';">メンズファッション</a></li>');
	document.write('			    <li><a href="http://www.bellemaison.jp/cpg/brand/index.html" onclick="s_objectID=\'cm_cat_brand\';">インポートブランド</a></li>');
	document.write('			</ul>');
	document.write('		</li>');
	document.write('		<li id="gnav02" class="f-left">');
	/* 修正 121130brs1 TAM ココから */
	document.write('		<img src="/pc/for_app/img/brs_img/btn/global-header02_st.gif" alt="インテリア･雑貨">');
	/* 修正 121130brs1 TAM ココまで */
	document.write('			<ul>');
	document.write('			    <li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=9" onclick="s_objectID=\'cm_cat_00000009\';">家具・収納</a></li>');
	/* 修正 121130brs1 TAM ココから */
	document.write('			    <li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=12" onclick="s_objectID=\'cm_cat_00000012\';">カーテン･ラグ･ソファーカバー</a></li>');
	document.write('			    <li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=13" onclick="s_objectID=\'cm_cat_00000013\';">寝具･布団･ベッド</a></li>');
	document.write('			    <li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=15" onclick="s_objectID=\'cm_cat_00000015\';">キッチン用品･調理器具</a></li>');
	document.write('			    <li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=18" onclick="s_objectID=\'cm_cat_00000018\';">バス･トイレ･掃除洗濯･タオル</a></li>');
	document.write('			    <li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=10" onclick="s_objectID=\'cm_cat_00000010\';">インテリア雑貨･スリッパ</a></li>');
	document.write('			    <li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=70" onclick="s_objectID=\'cm_cat_00000070\';">家電</a></li>');
	document.write('			    <li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=71" onclick="s_objectID=\'cm_cat_00000071\';">レジャー･アウトドア･カー用品</a></li>');
	/* 修正 121130brs1 TAM ココまで */
	/* 修正 120801 TAM ココから */
	/* 修正 121130brs1 TAM ココから */
	/* 修正 121130brs1 TAM ココまで */
	/* 修正 120801 TAM ココから */
	document.write('			</ul>');
	document.write('		</li>');
	document.write('		<li id="gnav03" class="f-left">');
	/* 修正 111207 TAM ココから */
	document.write('		<img src="/pc/for_app/img/brs_img/btn/global-header03_st.gif" alt="妊娠・出産・子供">');
	/* 修正 111207 TAM ココまで */
	document.write('			<ul>');
	/* 修正 121130brs1 TAM ココから */
	document.write('			    <li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=4" onclick="s_objectID=\'cm_cat_00000004\';">マタニティ・授乳服</a></li>');
	/* 修正 121130brs1 TAM ココまで */
	document.write('			    <li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=17" onclick="s_objectID=\'cm_cat_00000017\';">ベビー服・ベビー用品</a></li>');
	document.write('			    <li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=5" onclick="s_objectID=\'cm_cat_00000005\';">子供服・子供用品</a></li>');
	/* 修正 140801 EC ココから */
	document.write('			    <li><a href="http://www.bellemaison.jp/mama/junior_main/junior_main_index.html">ジュニア・ティーンズ</a></li>');
	/* 修正 140801 EC ココまで */
	document.write('			</ul>');
	document.write('		</li>');
	document.write('		<li id="gnav04" class="f-left">');
	/* 修正 111207 TAM ココから */
	document.write('		<img src="/pc/for_app/img/brs_img/btn/global-header04_st.gif" alt="ビューティ">');
	/* 修正 111207 TAM ココまで */
	document.write('			<ul>');
	/* 修正 121130brs1 TAM ココから */
	document.write('			    <li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=7" onclick="s_objectID=\'cm_cat_00000007\';">コスメ・美容・香水</a></li>');
	document.write('			    <li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=8" onclick="s_objectID=\'cm_cat_00000008\';">ダイエット・健康・エクササイズ</a></li>');
	/* 修正 121130brs1 TAM ココまで */
	document.write('			</ul>');
	document.write('		</li>');
	document.write('		<li id="gnav05" class="f-left">');
	document.write('		<img src="/pc/for_app/img/brs_img/btn/global-header05_st.gif" alt="グルメ・ギフト">');
	document.write('			<ul>');
	document.write('			    <li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=11" onclick="s_objectID=\'cm_cat_00000011\';">食品・スイーツ</a></li>');
	/* 修正 121130brs1 TAM ココから */
	document.write('			    <li><a href="http://www.bellemaison.jp/cpg/gift/gift_top.html" onclick="s_objectID=\'cm_cat_gift\';">ギフト(内祝い・結婚祝い等)</a></li>');
	/* 修正 121130brs1 TAM ココまで */
	document.write('			</ul>');
	document.write('		</li>');
	document.write('		<li id="gnav06" class="f-left">');
	document.write('		<img src="/pc/for_app/img/brs_img/btn/global-header06_st.gif" alt="ディズニー">');
	document.write('			<ul>');
	/* 修正 121130brs1 TAM ココから */
	document.write('			    <li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=102&DAI_CATEGORY_ID=22" onclick="s_objectID=\'cm_cat_00000022\';">ディズニー</a></li>');
	/* 修正 121130brs1 TAM ココまで */
	document.write('			</ul>');
	document.write('		</li>');
	/* 修正 111207 TAM ココから */
	/* 修正 111207 TAM ココまで */
	document.write('		<li id="gnav07" class="f-left">');
	document.write('		<img src="/pc/for_app/img/brs_img/btn/global-header07_st.gif" alt="セール">');
	document.write('			<ul>');
	/* 修正 121205brs1 TAM ココから */
	document.write('			    <li><a href="http://www.bellemaison.jp/sale/index.html" onclick="s_objectID=\'cm_cat_sale\';">セール＆アウトレット</a></li>');
	/* 修正 121205brs1 TAM ココまで */
	document.write('			</ul>');
	document.write('		</li>');
	document.write('	</ul>');
	document.write('</div>');
	/* 修正 130829brs4 TAM ココから */
	} else  {
		
		$(document).ready(function(){
			$("#contentsArea").attr("class", "w960");
			$("#brs").attr("class", "w960");
	/* 修正 130905brs3 TAM ココから */
		});
	/* 修正 130905brs3 TAM ココまで */			
			document.write('<div class="mt10 h50">');
			document.write('	<ul id="nav-one" class="cfx">');
			document.write('		<li id="gnav01" class="f-left">');
			/* 修正 130620brs2 TAM ココから */
			document.write('		<img src="/pc/for_app/img/brs_img/btn/global-header01b_st.gif" alt="ファッション">');
			/* 修正 130620brs2 TAM ココまで */
			document.write('			<ul>');
			document.write('			    <li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=1" onclick="s_objectID=\'cm_cat_00000001\';">レディースファッション</a></li>');
			document.write('			    <li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=2" onclick="s_objectID=\'cm_cat_00000002\';">女性下着･インナー･パジャマ</a></li>');
			document.write('			    <li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=3" onclick="s_objectID=\'cm_cat_00000003\';">靴・バッグ・アクセサリー</a></li>');
			document.write('			    <li><a href="http://www.bellemaison.jp/cpg/fashion/sports/sports_index.html" onclick="s_objectID=\'cm_cat_sports\';">スポーツウェア・スニーカー</a></li>');
			document.write('			    <li><a href="http://www.bellemaison.jp/cpg/lsize/index.html" onclick="s_objectID=\'cm_cat_lsize\';">大きいサイズ</a></li>');
			document.write('			    <li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=16" onclick="s_objectID=\'cm_cat_00000016\';">メンズファッション</a></li>');
			document.write('			    <li><a href="http://www.bellemaison.jp/cpg/brand/index.html" onclick="s_objectID=\'cm_cat_brand\';">インポートブランド</a></li>');
			document.write('			</ul>');
			document.write('		</li>');
			document.write('		<li id="gnav02" class="f-left">');
			/* 修正 121130brs1 TAM ココから */
			/* 修正 130620brs2 TAM ココから */
			document.write('		<img src="/pc/for_app/img/brs_img/btn/global-header02b_st.gif" alt="インテリア･雑貨">');
			/* 修正 130620brs2 TAM ココまで */
			/* 修正 121130brs1 TAM ココまで */
			document.write('			<ul>');
			document.write('			    <li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=9" onclick="s_objectID=\'cm_cat_00000009\';">家具・収納</a></li>');
			/* 修正 121130brs1 TAM ココから */
			document.write('			    <li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=12" onclick="s_objectID=\'cm_cat_00000012\';">カーテン･ラグ･ソファーカバー</a></li>');
			document.write('			    <li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=3" onclick="s_objectID=\'cm_cat_00000013\';">寝具･布団･ベッド</a></li>');
			document.write('			    <li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=15" onclick="s_objectID=\'cm_cat_00000015\';">キッチン用品･調理器具</a></li>');
			document.write('			    <li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=18" onclick="s_objectID=\'cm_cat_00000018\';">バス･トイレ･掃除洗濯･タオル</a></li>');
			document.write('			    <li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=10" onclick="s_objectID=\'cm_cat_00000010\';">インテリア雑貨･スリッパ</a></li>');
			document.write('			    <li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=70" onclick="s_objectID=\'cm_cat_00000070\';">家電</a></li>');
			document.write('			    <li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=71" onclick="s_objectID=\'cm_cat_00000071\';">レジャー･アウトドア･カー用品</a></li>');
			/* 修正 121130brs1 TAM ココまで */
			/* 修正 120801 TAM ココから */
			/* 修正 121130brs1 TAM ココから */
			/* 修正 121130brs1 TAM ココまで */
			/* 修正 120801 TAM ココから */
			document.write('			</ul>');
			document.write('		</li>');
			document.write('		<li id="gnav03" class="f-left">');
			/* 修正 111207 TAM ココから */
			/* 修正 130620brs2 TAM ココから */
			document.write('		<img src="/pc/for_app/img/brs_img/btn/global-header03b_st.gif" alt="妊娠・出産・子供">');
			/* 修正 130620brs2 TAM ココまで */
			/* 修正 111207 TAM ココまで */
			document.write('			<ul>');
			/* 修正 121130brs1 TAM ココから */
			document.write('			    <li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=4" onclick="s_objectID=\'cm_cat_00000004\';">マタニティ・授乳服</a></li>');
			/* 修正 121130brs1 TAM ココまで */
			document.write('			    <li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=17" onclick="s_objectID=\'cm_cat_00000017\';">ベビー服・ベビー用品</a></li>');
			document.write('			    <li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=5" onclick="s_objectID=\'cm_cat_00000005\';">子供服・子供用品</a></li>');
	    /* 修正 140801 EC ココから */
	    document.write('			    <li><a href="http://www.bellemaison.jp/mama/junior_main/junior_main_index.html">ジュニア・ティーンズ</a></li>');
	    /* 修正 140801 EC ココまで */
			document.write('			</ul>');
			document.write('		</li>');
			document.write('		<li id="gnav04" class="f-left">');
			/* 修正 111207 TAM ココから */
			/* 修正 130620brs2 TAM ココから */
			document.write('		<img src="/pc/for_app/img/brs_img/btn/global-header04b_st.gif" alt="ビューティ">');
			/* 修正 130620brs2 TAM ココまで */
			/* 修正 111207 TAM ココまで */
			document.write('			<ul>');
			/* 修正 121130brs1 TAM ココから */
			document.write('			    <li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=7" onclick="s_objectID=\'cm_cat_00000007\';">コスメ・美容・香水</a></li>');
			document.write('			    <li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=8" onclick="s_objectID=\'cm_cat_00000008\';">ダイエット・健康・エクササイズ</a></li>');
			/* 修正 121130brs1 TAM ココまで */
			document.write('			</ul>');
			document.write('		</li>');
			document.write('		<li id="gnav05" class="f-left">');
			/* 修正 130620brs2 TAM ココから */
			document.write('		<img src="/pc/for_app/img/brs_img/btn/global-header05b_st.gif" alt="グルメ・ギフト">');
			/* 修正 130620brs2 TAM ココまで */
			document.write('			<ul>');
			document.write('			    <li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=11" onclick="s_objectID=\'cm_cat_00000011\';">食品・スイーツ</a></li>');
			/* 修正 121130brs1 TAM ココから */
			document.write('			    <li><a href="http://www.bellemaison.jp/cpg/gift/gift_top.html" onclick="s_objectID=\'cm_cat_gift\';">ギフト(内祝い・結婚祝い等)</a></li>');
			/* 修正 121130brs1 TAM ココまで */
			document.write('			</ul>');
			document.write('		</li>');
			document.write('		<li id="gnav06" class="f-left">');
			/* 修正 130620brs2 TAM ココから */
			document.write('		<img src="/pc/for_app/img/brs_img/btn/global-header06b_st.gif" alt="ディズニー">');
			/* 修正 130620brs2 TAM ココまで */
			document.write('			<ul>');
			/* 修正 121130brs1 TAM ココから */
			document.write('			    <li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=102&DAI_CATEGORY_ID=22" onclick="s_objectID=\'cm_cat_00000022\';">ディズニー</a></li>');
			/* 修正 121130brs1 TAM ココまで */
			document.write('			</ul>');
			document.write('		</li>');
			/* 修正 111207 TAM ココから */
			/* 修正 111207 TAM ココまで */
			document.write('		<li id="gnav07" class="f-left">');
			/* 修正 130620brs2 TAM ココから */
			document.write('		<img src="/pc/for_app/img/brs_img/btn/global-header07b_st.gif" alt="セール">');
			/* 修正 130620brs2 TAM ココまで */
			document.write('			<ul>');
			/* 修正 121205brs1 TAM ココから */
			/* 修正 131120brs1 TAM ココから */
			document.write('			    <li><a href="http://www.bellemaison.jp/sale/index.html" onclick="s_objectID=\'cm_cat_sale\';">セール＆アウトレット</a></li>');
			/* 修正 131120brs1 TAM ココまで */
			/* 修正 121205brs1 TAM ココまで */
			document.write('			</ul>');
			document.write('		</li>');
			document.write('	</ul>');
			document.write('</div>');
		/* 修正 130829brs4 TAM ココまで */
	/* 修正 130905brs3 TAM ココから */
	/* 修正 130905brs3 TAM ココまで */

	}
	document.write('</div>');
	document.write('<script type="text/javascript">');
	document.write('mboxCreate("bell_global_navi")');
	document.write('</script>');

	$(document).ready(function(){
	/* 修正 121205brs1 TAM ココから */
		if(navigator.userAgent.indexOf('Mac') != -1){
			$("#nav-one li a").css("font-size","11px");
		}
	/* 修正 121205brs1 TAM ココまで */
		$(".focuson01").find("a").mouseover(function () {
			$(this).parent("li").css("background-color", "#ABA49A");
		});
		$(".focuson01").find("a").mouseout(function () {
			if (($(this).parent("li").attr("class") == "current") || ($(this).parent("li").attr("class") == "current2")) {
				$(this).parent("li").css("background-color", "#ABA49A");
			} else {
				$(this).parent("li").css("background-color", "#FFFFFF");
			}
		});
		
	/* 修正 131114brs1 TAM ココから */
	/* 修正 131114brs1 TAM ココまで */

	/* 修正 111207 TAM ココから */
		$("#nav-one li#gnav01,#nav-one li#gnav02,#nav-one li#gnav03,#nav-one li#gnav04,#nav-one li#gnav05,#nav-one li#gnav06,#nav-one li#gnav07,#nav-one li#gnav08").hover(
	/* 修正 111207 TAM ココまで */
			function(){
	/* 修正 131120brs1 TAM ココから */
				$("ul", this).css("display", "block");
	/* 修正 131120brs1 TAM ココまで */
				var srcVal = $("img",this).attr("src").replace("_st.", "_mo.");
				$("img",this).attr("src",srcVal);
	/* 修正 110326 TAM 商品系修正ココから */
				$("#nav-one").attr("style","position:relative");
				$("#nav-one li").attr("style","position:relative");
	/* 修正 110326 TAM 商品系修正ココまで */
	/* 修正 120614 TAM ココから */
				$(".uksgst_results").css("display", "none");
	/* 修正 120614 TAM ココまで */
			},
			function(){
				var srcVal = $("img",this).attr("src").replace("_mo.", "_st.");
				$("img",this).attr("src",srcVal);
	/* 修正 110326 TAM 商品系修正ココから */
				$("#nav-one").attr("style","");
				$("#nav-one li").attr("style","");
	/* 修正 131120brs1 TAM ココから */
				$("#nav-one ul").css("display", "none");
	/* 修正 131120brs1 TAM ココまで */
	/* 修正 110326 TAM 商品系修正ココまで */
			}
		);
		if (document.all) {
			$("#nav-one li").hoverClass ("sfHover");
		}

	});

	function checkToggle(itemID) {
		if ($("#" + itemID).attr("checked")) {
			$("#" + itemID).attr("checked", "");
		} else {
			$("#" + itemID).attr("checked", "checked");
		}
	}

	/* 修正 110319 TAM ココから */
	// グローバルナビ
	$.fn.hoverClass = function(c) {
		return this.each(function(){
			$(this).hover( 
				function() { $(this).addClass(c);  },
				function() { $(this).removeClass(c); }
			);
		});
	};
	/* 修正 110319 TAM ココまで */


	/* 修正 131018brs1 TAM ココから */
	/* グローバルナビ、一覧左ナビ互換対応 */
	$(document).ready(function(){
		adjustMode();
	/* 修正 131114brs1 TAM ココから */
		adjustUseframeStyle()
	/* 修正 131114brs1 TAM ココまで */
	});

	function adjustMode() {
		if (document.compatMode == "BackCompat") {
			if ( window.navigator.userAgent.toLowerCase().indexOf('msie') != -1) {
				$("#nav-one #gnav01 ul li a").css("width","190px");
				$("#nav-one #gnav02 ul li a").css("width","233px");
				$("#nav-one #gnav03 ul li a").css("width","190px");
				$("#nav-one #gnav04 ul li a").css("width","193px");
				$("#nav-one #gnav05 ul li a").css("width","218px");
				$("#nav-one #gnav06 ul li a").css("width","118px");
				$("#nav-one #gnav07 ul li a").css("width","162px");
				$("#nav-one #gnav08 ul li a").css("width","225px");
				if (window.navigator.appVersion.toLowerCase().indexOf('msie 10.') != -1) {
					$("#brs .focuson01 li a, #brs .focuson01 li span").css("width","167px");
				}
			}
		}
	}
	/* 修正 131018brs1 TAM ココまで */
	
	/* 修正 131114brs1 TAM ココから */
	function adjustUseframeStyle() {

		if ($('.useframe').size()) {
			$('.useframe').each(function(){

				if ($(this).children("li").length > 10) {
					$(this).css("overflow", "auto");
					$(this).css("height", "225px");
					$(this).css("padding", "2px 0");
					$(this).css("border-left", "1px solid #BBB");
					$(this).css("border-top", "1px solid #BBB");
					$(this).css("border-bottom", "1px solid #BBB");
				}
			});
		}
	}
	/* 修正 131114brs1 TAM ココまで */
} else {

// IE7以外
	var globalnavi = ''
	+ '<div class="globalnavi-margin">'
	+ '<div class="globalnavi-inner">'
	+ '<div class="globalnavi-item01 globalnavi-item"><div class="globalnavi-item-inner"><span class="text">ファッション</span>'
	+ '<div class="globalnavi-sub"><ul>'
	+ '<li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=1">レディースファッション</a></li>'
	+ '<li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=2">女性下着･インナー･パジャマ</a></li>'
	+ '<li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=3">靴･バッグ･アクセサリー</a></li>'
	+ '<li><a href="http://www.bellemaison.jp/cpg/fashion/sports/sports_index.html">スポーツウエア･スニーカー</a></li>'
	+ '<li><a href="http://www.bellemaison.jp/cpg/lsize/index.html">大きいサイズ</a></li>'
	+ '<li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=16">メンズファッション</a></li>'
	+ '<li class="last"><a href="http://www.bellemaison.jp/cpg/brand/index.html">インポートブランド</a></li>'
	+ '</ul></div>'
	+ '</div></div>'
	+ '<div class="globalnavi-item02 globalnavi-item"><div class="globalnavi-item-inner"><span class="text">インテリア・雑貨</span>'
	+ '<div class="globalnavi-sub"><ul>'
	+ '<li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=9">家具･収納</a></li>'
	+ '<li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=12">カーテン･ラグ･ソファーカバー</a></li>'
	+ '<li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=13">寝具･布団･ベッド</a></li>'
	+ '<li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=15">キッチン用品･調理器具</a></li>'
	+ '<li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=18">バス･トイレ･掃除洗濯･タオル</a></li>'
	+ '<li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=10">インテリア雑貨･スリッパ</a></li>'
	+ '<li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=70">家電</a></li>'
	+ '<li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=71">レジャー･アウトドア･カー用品</a></li>'
	+ '</ul></div>'
	+ '</div></div>'
	+ '<div class="globalnavi-item03 globalnavi-item"><div class="globalnavi-item-inner"><span class="text">妊娠・出産・子供</span>'
	+ '<div class="globalnavi-sub"><ul>'
	+ '<li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=4">マタニティ･授乳服</a></li>'
	+ '<li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=17">ベビー服･ベビー用品</a></li>'
	+ '<li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=5">子供服･子供用品</a></li>'
	+ '<li class="last"><a href="http://www.bellemaison.jp/mama/junior_main/junior_main_index.html">ジュニア・ティーンズ</a></li>'
	+ '</ul></div>'
	+ '</div></div>'
	+ '<div class="globalnavi-item04 globalnavi-item"><div class="globalnavi-item-inner"><span class="text">ビューティ</span>'
	+ '<div class="globalnavi-sub"><ul>'
	+ '<li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=7">コスメ･美容･香水</a></li>'
	+ '<li class="last"><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=8">ダイエット･健康･エクササイズ</a></li>'
	+ '</ul></div>'
	+ '</div></div>'
	+ '<div class="globalnavi-item05 globalnavi-item"><div class="globalnavi-item-inner"><span class="text">グルメ・ギフト</span>'
	+ '<div class="globalnavi-sub"><ul>'
	+ '<li><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=100&DAI_CATEGORY_ID=11">食品･スイーツ</a></li>'
	+ '<li class="last"><a href="http://www.bellemaison.jp/cpg/gift/gift_top.html">ギフト(内祝い･結婚祝い等)</a></li>'
	+ '</ul></div>'
	+ '</div></div>'
	+ '<div class="globalnavi-item06 globalnavi-item"><div class="globalnavi-item-inner"><span class="text">ディズニー</span>'
	+ '<div class="globalnavi-sub"><ul>'
	+ '<li class="last"><a href="http://www.bellemaison.jp/ep/srvlt/EPFB00/EPFB0002/dMidCatLstShow?BELN_SHOP_KBN=102&DAI_CATEGORY_ID=22">ディズニー</a></li>'
	+ '</ul></div>'
	+ '</div></div>'
	+ '<div class="globalnavi-item07 globalnavi-item"><div class="globalnavi-item-inner"><span class="text">セール</span>'
	+ '<div class="globalnavi-sub"><ul>'
	+ '<li class="last"><a href="http://www.bellemaison.jp/sale/index.html">セール＆アウトレット</a></li>'
	+ '</ul></div>'
	+ '</div></div>'
	+ '<div class="globalnavi-item08 globalnavi-item"><div class="globalnavi-item-inner"><span class="text">ブランド一覧</span>'
	+ '<div class="globalnavi-sub"><ul>'
	+ '<li class="last"><a href="http://www.bellemaison.jp/cpg/special/allbrand/allbrand_index.html#original">ベルメゾン オリジナルブランド</a></li>'
	+ '<li><a href="http://www.bellemaison.jp/cpg/special/allbrand/allbrand_index.html#dealing">全てのブランド</a></li>'
	+ '</ul></div>'
	+ '</div></div>'
	+ '</div>'
	+ '</div>'
	+ '';

	$(function(){

		$('#headerArea').after('<div id="globalnavi" class="globalnavi"></div>');
		$('#globalnavi').html(globalnavi);
	
		var gni = $('.globalnavi-item');
		var gns = $('.globalnavi-sub');
		gni.each(function(index, el) {
			var $this = $(this);
			$this.hover(function() {
				gni.removeClass('hover');
				gns.hide();
			 var t = setTimeout(function() {
			 	$this.addClass('hover');
					$this.find('.globalnavi-sub').show();
			 }, 300);
			 $this.data('timeout', t);
			}, function() {
				gni.removeClass('hover');
				gns.hide();
			 clearTimeout($this.data('timeout'));
			});
		});
	});
}
