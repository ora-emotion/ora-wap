/*
 * spa.router.index.js
 * Router module for Index
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.router.index = (function () {
  var
    configMap = {
      page_map_detail : {
        slide_01 : {},
        slide_02 : {},
        slide_03 : {},
        slide_04 : {},
        slide_05 : {},
        slide_06 : {}
      }
    },
    stateMap = { $container : null },
    jqueryMap = {},
    onClickLink, loadPage,
    initModule;

  setJqueryMap = function () {
    var $container = stateMap.$container;
    jqueryMap = {
      $container : $container,
      $index_ora_dynamic : {
        $slide_01 : $container.find('.swiper-slide:nth-child(1)'),
        $slide_02 : $container.find('.swiper-slide:nth-child(2)'),
        $slide_03 : $container.find('.swiper-slide:nth-child(3)'),
        $slide_04 : $container.find('.swiper-slide:nth-child(4)'),
        $slide_05 : $container.find('.swiper-slide:nth-child(5)'),
        $slide_06 : $container.find('.swiper-slide:nth-child(6)')
      }
    };
  };

  onClickLink = function (key_name, new_name) {
    var $page_map = jqueryMap.$index_ora_dynamic;

    $page_map[key_name].click(function () {
      spa.data.news.initModule(new_name);
    });
  };

  // Start loadPage()
  // 功能 : 加载新闻页面
  loadPage = function () {
    var
      key_name,
      $page_map = jqueryMap.$index_ora_dynamic;

    for (key_name in $page_map) {
      switch (key_name) {
        case '$slide_01' :  // 客户远道而来，送来锦旗向导师团队致谢
          onClickLink(key_name, 'new_01');
          break;
        case '$slide_02' :  // 主导师团队分析学院情况以及制定方案
          onClickLink(key_name, 'new_02');
          break;
        case '$slide_03' :  // 第六届情感导师行业交流指导会
          onClickLink(key_name, 'new_03');
          break;
        case '$slide_04' :  // “暖爱计划”婚恋知识公益讲座报道
          onClickLink(key_name, 'new_04');
          break;
        case '$slide_05' :  // 十大杰出诚信企业
          onClickLink(key_name, 'new_05');
          break;
        case '$slide_06' :  // 青岛市市南区区长，亲临视察工作
          onClickLink(key_name, 'new_06');
          break;
        default:
          break;
      }
    }

  };
  // End loadPage()

  initModule = function ($container) {
    stateMap.$container = $container;
    setJqueryMap();

    loadPage();
  };

  return { initModule : initModule };
}());
