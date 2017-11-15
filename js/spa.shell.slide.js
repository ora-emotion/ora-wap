/*
 * spa.slide.js
 * Slide module for SPA
 * 侧导航
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.shell.slide = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-slide-main">'
          + '<a class="spa-slide-main-item" href="./spa.html">'
            + '<span class=>'
            + '<span class="spa-slide-main-item-icon"></span>'
            + '<span class="spa-slide-main-item-txt">返回首页</span>'
          + '</a>'
          + '<a class="spa-slide-main-item" href="./spa.html#!page=save_love">'
            + '<span class="spa-slide-main-item-icon"></span>'
            + '<span class="spa-slide-main-item-txt">挽回爱情</span>'
          + '</a>'
          + '<a class="spa-slide-main-item" href="./spa.html#!page=save_marriage">'
            + '<span class="spa-slide-main-item-icon"></span>'
            + '<span class="spa-slide-main-item-txt">挽救婚姻</span>'
          + '</a>'
          + '<a class="spa-slide-main-item" href="./spa.html#!page=separate_mistress">'
            + '<span class="spa-slide-main-item-icon"></span>'
            + '<span class="spa-slide-main-item-txt">分离小三</span>'
          + '</a>'
          + '<a class="spa-slide-main-item" href="./spa.html#!page=custom_love">'
            + '<span class="spa-slide-main-item-icon"></span>'
            + '<span class="spa-slide-main-item-txt">定制爱情</span>'
          + '</a>'
          + '<a class="spa-slide-main-item" href="./spa.html#!page=emotion_forum">'
            + '<span class="spa-slide-main-item-icon"></span>'
            + '<span class="spa-slide-main-item-txt">情感论坛</span>'
          + '</a>'
          + '<a class="spa-slide-main-item" href="./spa.html#!page=mentor_team">'
            + '<span class="spa-slide-main-item-icon"></span>'
            + '<span class="spa-slide-main-item-txt">权威专家</span>'
          + '</a>'
          + '<a class="spa-slide-main-item" href="./spa.html#!page=service_intro">'
            + '<span class="spa-slide-main-item-icon"></span>'
            + '<span class="spa-slide-main-item-txt">服务介绍</span>'
          + '</a>'
          + '<a class="spa-slide-main-item" href="./spa.html#!page=about_us">'
            + '<span class="spa-slide-main-item-icon"></span>'
            + '<span class="spa-slide-main-item-txt">关于我们</span>'
          + '</a>'
        + '</div>'
        + '<div class="spa-slide-btn">'
          + '<span class="spa-slide-btn-extend"></span>'
        + '</div>',

        slide : {
          extend_width  : '-5.2rem',
          retract_width : '0'
        }
    },
    stateMap = {
      $slide : null,
      is_slide_retract : true
    },
    jqueryMap = {},

  setJqueryMap, toggleSlide, onClickSlide, initModule;

  setJqueryMap = function () {
    var $container, $slide;

      $container = $('#spa');
      $slide = stateMap.$slide;

    jqueryMap = {
      $container  : $container,
      $modal      : $container.find('.spa-modal'),
      $slide      : $slide,
      $slide_list : $slide.find('.spa-slide-main'),
      $btn_extend : $slide.find('.spa-slide-btn-extend')
    };
  };

  toggleSlide = function (slide_state) {
    // 展开左侧导航
    if (!slide_state) {
      jqueryMap.$slide.animate({ left : configMap.slide.retract_width }, 150);

      jqueryMap.$modal.show();
      jqueryMap.$modal.animate({ opacity : .7 }, 150);

      return false;
    }

    // 收起左侧导航
    if (slide_state) {
      jqueryMap.$slide.css({ left : configMap.slide.extend_width });

      jqueryMap.$modal.css({ opacity : 0 });
      jqueryMap.$modal.hide();

      return false;
    }
  };

  onClickSlide = function () {
    jqueryMap.$container.click(function (e) {
      var target;

      e = event || window.event;
      target = e.target;

      switch ( $(target)[0].className ) {
        case 'spa-slide-btn-extend' :   // 展开左侧导航
          toggleSlide(false);
          break;
        case 'spa-modal' :              // 收起左侧导航
          toggleSlide(true);
          break;
        default:
          break;
      }
    });
  };

  initModule = function ($slide) {
    stateMap.$slide = $slide;
    $slide.html(configMap.main_html);

    setJqueryMap();
    onClickSlide();
  };

  return { initModule : initModule, toggleSlide : toggleSlide };
}());
