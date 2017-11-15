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
        + '<div class="spa-slide">'
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
            + '<span class="spa-slide-btn-retract"></span>'
          + '</div>'
        + '</div>',

        slide : {
          extend_width  : '-5.2rem',
          retract_width : '0'
        }
    },
    stateMap = {
      $container : null,
      is_slide_retract : true
    },
    jqueryMap = {},

  setJqueryMap, toggleModal, toggleSlide, onClickSlide, initModule;

  setJqueryMap = function () {
    var $container = stateMap.$container;

    jqueryMap = {
      $container   : $container,
      $slide       : $container.find('.spa-slide'),
      $slide_list  : $container.find('.spa-slide-main'),
      $btn_retract : $container.find('.spa-slide-btn-retract'),
      $btn_extend  : $container.find('.spa-slide-btn-extend')
    };
  };

  toggleModal = function (slide_state) {
    var slide_modal;
    slide_modal = document.createElement('div');
    slide_modal.setAttribute('class', 'spa-slide-modal');

    if (slide_state) {
      $('.spa-slide-modal').animate({ opacity : 0 }, 150);
      $('.spa-slide-modal').remove();
    } else {
      jqueryMap.$container.append($(slide_modal));
      $('.spa-slide-modal').animate({ opacity : .5 }, 150);
    }
  };

  toggleSlide = function (slide_state) {
    // 展开左侧导航
    if (!slide_state) {
      jqueryMap.$slide.animate({ left : configMap.slide.retract_width }, 150);
      jqueryMap.$slide_list.animate({ opacity : 1 }, 150);

      jqueryMap.$btn_extend.animate({ opacity : 0 }, 150, function () {
        jqueryMap.$btn_extend.css({ display : 'none' });
      });

      jqueryMap.$btn_retract.css({ display : 'inline-block' });
      jqueryMap.$btn_retract.animate({ opacity : 1 }, 150);

      // 显示模态层
      toggleModal(slide_state);
      return false;
    }

    // 收起左侧导航
    if (slide_state) {
      jqueryMap.$slide.animate({ left : configMap.slide.extend_width }, 150);
      jqueryMap.$slide_list.animate({ opacity : 0 }, 150);

      jqueryMap.$btn_extend.css({ display : 'inline-block' });
      jqueryMap.$btn_extend.animate({ opacity : 1 }, 150);

      jqueryMap.$btn_retract.animate({ opacity : 0 }, 150);
      jqueryMap.$btn_retract.css({ display : 'none' });

      // 隐藏模态层
      toggleModal(slide_state);
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
        case 'spa-slide-btn-retract' :  // 收起左侧导航
          toggleSlide(true);
          break;
        case 'spa-slide-modal' :        // 收起左侧导航
          toggleSlide(true);
          break;
        default:
          break;
      }
    });
  };

  initModule = function ($container) {
    stateMap.$container = $container;
    $container.append(configMap.main_html);

    setJqueryMap();
    onClickSlide();
  };

  return { initModule : initModule, toggleSlide : toggleSlide };
}());
