// ---------- GLOBAL VARIABLES ----------
var showvideo = function(pRefid, prep){
	var $ = showvideo.$;

	/**************************************************************
		���̏�ōĐ��ɗ��p����v���C���[��Web�T�C�g���ߍ��݃R�[�h���A�ȉ���appenCode�ϐ��ɑ�����܂��B
		�Eobject�^�O�����i���L�Q�Ɓj�̕����݂̂��A1�s�ɂ܂Ƃ߂�`�ŋL�ڂ��������B
		�Ewidth������height�����͎��ۂɃv���C���[��\�����������T�C�Y�ŋL�ڂ��������B
		�E�w<param name="@videoPlayer" value="12453" />�x�̂悤��@videoPlayer������param�^�O�������Ɠ��삵�Ȃ����߁A�����ꍇ�̓R�[�h���ɒǉ����Ă��������B
		
		�����̂悤�ȃR�[�h��1�s�ɂ܂Ƃ߂�appendCode�̕��������ɏ�������܂��B
		<object id="myExperience" class="BrightcoveExperience">
			<param name="bgcolor" value="#FFFFFF" />
			<param name="width" value="576" />
			<param name="height" value="324" />
			<param name="playerID" value="16429406002" />
			<param name="playerKey" value="AQ~~,AAAA3RWC_1k~,iXUOKogxQGz6r5l20nErEqEWtyjwDsTf" />
			<param name="isVid" value="true" />
			<param name="isUI" value="true" />
			<param name="dynamicStreaming" value="true" />
			<param name="@videoPlayer" value="12453" />
		</object>
	**************************************************************/
	var appendCode = $('<object id="myExperience" class="BrightcoveExperience"><param name="bgcolor" value="#FFFFFF" /><param name="width" value="576" /><param name="height" value="324" /><param name="playerID" value="16429406002" /><param name="playerKey" value="AQ~~,AAAA3RWC_1k~,iXUOKogxQGz6r5l20nErEqEWtyjwDsTf" /><param name="isVid" value="true" /><param name="isUI" value="true" /><param name="dynamicStreaming" value="true" /><param name="templateLoadHandler" value="showvideo.onTemplateLoaded" /><param name="@videoPlayer" value="12453" /><param name="includeAPI" value="true" /></object>');
	
	var appendCode2 = $('<div width="576" height="324" style="magin:0px; padding:0px; display:block;"></div>');
	
	var appendPlayer = $('<div id="bc_player"></div>');
	/**************************************************************
	* �ݒ肱���܂�
	**************************************************************/
	//���[�f�B���O�\������
	var loadingAnimation = $('<div id="cboxLoadingGraphic" style="width:100%; height:100%;"></div>');
	appendCode.find('param[name="@videoPlayer"]').attr('value', 'ref:'+pRefid);
	var self = this;

	var playerWidth = parseInt(appendCode.find('param[name="width"]').attr('value'));
	var playerHeight = parseInt(appendCode.find('param[name="height"]').attr('value'));
	playerWidth+=30;
	playerHeight+=20;
	var overlayWidth = playerWidth+2;
	var overlayHeight = playerHeight+50;
	if ($.browser.msie && (!$.boxModel || $.browser.version < 7.0)){
		overlayHeight += 35;
	}
	
	var F_resizeOverlay = function(){
		$('#cboxOverlay').css({'width':$(document).width()+'px', 'height':$(document).height()+'px'});
	}

	var bc_isMobile = function() {
		if (navigator.userAgent.indexOf('iPhone') > -1) return -1;
		if (navigator.userAgent.indexOf('Android') > -1) return -2;
		return 0;
	}

	var resizePlayer = function(){
		if(bc_isMobile() == 0) {
			var bc_player_selector = $("#myExperience");
			showvideo.bc_selector.css('position', 'absolute');

			var wDiff = (($(window).width() / 2) + $(window).scrollLeft()) - ($("#myExperience").width() / 2);
			var hDiff = (($(window).height() / 2) + $(window).scrollTop()) - ($("#myExperience").height() / 2);

			if ($.browser.msie && (!$.boxModel || $.browser.version < 7.0)){
				hDiff -= 25;
			} else {
				hDiff -= 10;
			}

			showvideo.bc_selector.css('left', wDiff);
			showvideo.bc_selector.css('top', hDiff);
		}
	}

	var isEmpty = function(str) {
		if(str == null || str == undefined || str.length == 0 || str == "") {
			return true;
		}
		return false;
	}

	// �ŏ�����
	if(bc_isMobile() == 0) {
		if(prep != null && prep == true) {
			appendPlayer.appendTo($('body'));
			showvideo.bc_selector = $("#bc_player");
			
			showvideo.bc_selector.offset({left:-5000, top:-5000});
			showvideo.bc_selector.css('z-index', 10000);

			appendCode.appendTo(showvideo.bc_selector);
			brightcove.createExperiences();

			resizePlayer();
			showvideo.bc_selector.offset({left:-5000, top:-5000});

			return;
		}
		if( isEmpty(pRefid) ) {
			return;
		}
		if(showvideo.bc_videoPlayerModule == null) {
			// setTimeout(showvideo, 1000, pRefid, prep);
			setTimeout(function() {
				showvideo(pRefid, prep);
			}, 1000);			
			return;
		}
		showvideo.bc_videoPlayerModule.loadVideoByReferenceID(pRefid);
		content = appendCode2;
	} else {
		if(prep != null && prep == true) {
			return;
		}
		content = appendCode.get(0);
	}
	
	$.colorbox({
		html: content,
		width: overlayWidth,
		height: overlayHeight,
		close: 'close',
		opacity: '0.75',
		open: true,
		transition: 'none',
		speed: 0,
		
		onOpen: function(){
			//IE��quirks���[�h�ŃI�[�o�[���C�̈ʒu�����������Ȃ��Ă��܂����ɑΏ�
			if ($.browser.msie && (!$.boxModel || $.browser.version < 7.0)){
				$('#cboxOverlay').css({'position':'absolute', 'width':'99%', 'height':'99%', 'overflow-x':'hidden'});
				$(window).bind("resize", F_resizeOverlay);
				F_resizeOverlay.call(this);
				
				$('#cboxTopLeft').parent().css({'display':'none'});
				$('#cboxBottomLeft').parent().css({'display':'none'});
			}

			$(window).bind("resize", resizePlayer);
		},
		onComplete: function(){
			//�v���C���[�̃��[�h
			if(bc_isMobile() != 0) {
				brightcove.createExperiences();
			}

			//�{�b�N�X�����̕���{�^���̕\��
			$('<a />')
				.attr('id', 'cboxClose2')
				.click(function(){$('#cboxClose').click()})
				.appendTo($('#cboxContent'));
			$('#cboxClose2').css({'left':Math.floor( (showvideo.$('#cboxContent').width()-showvideo.$('#cboxClose2').width())/2 )})

			//�ǂݍ��ݒ��}�[�N��\������
			$('#cboxLoadingOverlay').show().append(loadingAnimation);

			$(window).trigger("resize");
		},
		onCleanup: function(){
			//�v���[���[�B���āA�Đ����~�߂�
			if(bc_isMobile() == 0) {
				showvideo.bc_selector.offset({left: -5000, right: -5000});
				showvideo.bc_videoPlayerModule.pause(true);
			}

			$('#cboxLoadedContent').html('');
			if ($.browser.msie && (!$.boxModel || $.browser.version < 7.0)){
				$(window).unbind("resize", F_resizeOverlay);
			}
			$('#cboxClose2').remove();

			$(window).unbind("resize", resizePlayer);
		}
	});
	
}

showvideo.$ = jQuery.noConflict(true);

showvideo.bc_videoPlayerModule = null;
showvideo.bc_selector = null;

showvideo.$(document).ready(function($){
	$('a[onclick*="showvideo("]').click(function(evt){
		evt.preventDefault();
	})
		
	showvideo(null, true);
});

showvideo.onTemplateLoaded = function(id) {
	var bc_player = brightcove.api.getExperience(id);
	if (bc_player) {
		onPlayerLoadedHandlerSub(id);
		showvideo.bc_videoPlayerModule = bc_player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
		this.$('#cboxLoadingOverlay').hide();
	} else {
		return;
	}
}
