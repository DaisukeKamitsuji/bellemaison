/*
 * ���L�b�h�����i���i�ꗗ�j
 */

$(function() {

  // �񓯊��������̍Ď��s
  var url = location.href;
  setInterval(function(){
    if (url != location.href) {
      url = location.href;
      adjustWidth();
      changeCheck01();
      var timerRc20 = setInterval(changeRc20, 1000);
    }
  }, 1000);

  // ������
  adjustWidth();
  $(window).resize(function() {
    adjustWidth();
  });
  function adjustWidth() {
    if ($('body').width() > 961) {
      $('#asc_top .f-right').width($('#contentsArea').width() - 240);
    } else {
      $('#asc_top .f-right').width($('#contentsArea').width() - 220);
    }
    $('#brs .lnavi01').width('100%');
    $('.lineup-item').width('24.5%');
    $('#brs .lineup-item01 .lineup-itembox').width('auto');
    $('#brs .lineup-item01 .lineup-itembox .img a img').width('100%').height('auto');
  }

  // �{�������摜�����ւ�
  var timerCheck01 = setInterval(changeCheck01, 1000);
  function changeCheck01() {
    if ($('#iframe02 .lineup-item .img img').size() > 0) {
      $('#iframe02 .lineup-item .img img').each(function() {
        if ($(this).attr('src') !== undefined) {
          $(this).attr('src', $(this).attr('src').replace('pic_s', 'pic_m').replace('ps', 'pm'));
        }
      });
      $('#iframe02 .lineup-item').css('width', '20%');
      clearInterval(timerCheck01);
    }
  }

  // ���R�����h�摜�����ւ�
  var timerRc20 = setInterval(changeRc20, 1000);

  function changeRc20() {
    if ($('#recommender_20 .dv_rc_items .dv_rc_img img').size() > 0) {
      $('#recommender_20 .dv_rc_items .dv_rc_img img').each(function() {
        if ($(this).attr('src') !== undefined) {
          $(this).attr('src', $(this).attr('src').replace('pic_s', 'pic_m').replace('ps', 'pm'));
        }
      });
      clearInterval(timerRc20);
    }
  }

  // ���R�����h�摜�����ւ��i0��A�j
  var timerRc23 = setInterval(changeRc23, 1000);

  function changeRc23() {
    if ($('#recommender_23 .dv_rc_items .dv_rc_img img').size() > 0) {
      $('#recommender_23 .dv_rc_items .dv_rc_img img').each(function() {
        if ($(this).attr('src') !== undefined) {
          $(this).attr('src', $(this).attr('src').replace('pic_s', 'pic_m').replace('ps', 'pm'));
        }
      });
      clearInterval(timerRc23);
    }
  }

  // ���R�����h�摜�����ւ��i0��B�j
  var timerRc10 = setInterval(changeRc10, 1000);

  function changeRc10() {
    if ($('#recommender_10 .dv_rc_items .dv_rc_img img').size() > 0) {
      $('#recommender_10 .dv_rc_items .dv_rc_img img').each(function() {
        if ($(this).attr('src') !== undefined) {
          $(this).attr('src', $(this).attr('src').replace('pic_s', 'pic_m').replace('ps', 'pm'));
        }
      });
      clearInterval(timerRc10);
    }
  }
});