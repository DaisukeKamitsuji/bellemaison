/*
 * ���L�b�h�����i���i�ڍׁj
 */

$(function() {
  // �p�������ʒu�ړ�
  $('#contentsArea').before($('.dtl-head'));

  // DAYS�C���N���[�h�Ή�
  if ($('#carouselArea01').prev().find('img').attr('src') != undefined && $('#carouselArea01').prev().find('img').attr('src').match(/_under/) != null ) {
    $('#carouselArea01').prev().css('width','800px').css('margin', 'auto');
  }

  // �X���C�h�n�̉摜�����ւ�
  $('#carouselArea01Item .item a img, #carouselArea02Item .item a img')
      .each(function() {
        if ($(this).attr('src') !== undefined) {
          $(this).attr(
              'src', $(this).attr('src')
              .replace('pic_s', 'pic_m')
              .replace('ps', 'pm')
          );
        }
      });

  // �{�������摜�����ւ�
  var timerCheckImg = setInterval(changeCheckImg, 1000);
  function changeCheckImg() {
    if ($('.check01 .net-gentei-item a img').size() > 0) {
      $('.check01 .net-gentei-item a img').each(function() {
        if ($(this).attr('src') !== undefined) {
          $(this).attr(
              'src', $(this).attr('src')
              .replace('pic_s', 'pic_m')
              .replace('ps', 'pm')
          );
        }
      });
      clearInterval(timerCheckImg);
    }
  }

  // ���R�����h�摜�����ւ�
  var timerRc1Img = setInterval(changeRc1Img, 1000);
  function changeRc1Img() {
    if ($('#recommender_1 .dv_rc_items .dv_rc_img img').size() > 0) {
      $('#recommender_1 .dv_rc_items .dv_rc_img img').each(function() {
        if ($(this).attr('src') !== undefined) {
          $(this).attr(
              'src', $(this).attr('src')
              .replace('pic_s', 'pic_m')
              .replace('ps', 'pm')
          );
        }
      });
      clearInterval(timerRc1Img);
    }
  }

  // ���C���摜�����ւ�
  var timerMainImg = setInterval(changeMainImg, 1000);
  function changeMainImg() {
    var $viewer = $('#viewer1'),
        $zoomImg = $viewer.attr('src').replace('img2', 'img').replace('product', 'product_2').replace('pic_b', 'pic_x').replace('pb', 'px'),
        $frame = $('#image-viewer-epfb0006_zoom .frame'),
        objZoom = $("#epfb0006_zoom").serializeArray(),
        objZoomSize = objZoom.length;

    if ($viewer.attr('src').indexOf('img2') >= 0 && $frame.width() > 500) {
      for (var i=0; i<objZoomSize; i++) {
      	if ($zoomImg == objZoom[i]['value']) {
          $viewer.attr(
              'src' ,
              $viewer
              .attr('src')
              .replace('img2', 'img')
              .replace('product', 'product_2')
              .replace('pic_b', 'pic_x')
              .replace('pb', 'px')
          );
          break;
      	}
      }
    }
  }

  adjustMainImg();

  $(window).resize(function() {
    adjustMainImg();
  });

  // ���C���摜���C�A�E�g����
  function adjustMainImg() {
    var $window = $(window),
        $body = $('body'),
        $next = $('#brs .dtl-img-area.w504 .dtl-img-next'),
        imgSize;

    if ($window.width() >= 960) {
      $('body,html').css('width', '100%');
      $body.css('overflow-x', 'hidden');
    } else {
      $('body,html').css('width', '960px');
      $body.css('overflow-x', 'auto');
    }

    if ($window.height() > 780 && $window.width() >= 1100) {
      $body.addClass('main-adjust');
      $next.css('right', '0px');
      imgSize = $('.dtl-img-area').width();
    } else {
      $body.removeClass('main-adjust');
      $next.css('right', '3px');
      imgSize = 500;
    }

    $('#brs #image-viewer-epfb0006_zoom').css('height', (imgSize + 40) + 'px');
    $('#image-viewer-epfb0006_zoom .page').css('top', (imgSize + 5) + 'px');
    $('.dtl-img-main .frame').css({
      'width': imgSize + 'px',
      'height': imgSize + 'px'
    });
  }

});
