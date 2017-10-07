/*
 * spa.router.js
 * Router module for SPA
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.router = (function () {
  var
    configMap = {
      src_map : {}
    },
    stateMap = { $container : null },
    jqueryMap = {},
    loadPage,
    setJqueryMap, initModule;

  setJqueryMap = function () {
    var $container   = stateMap.$container;

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

  // loadPage() - 加载子页面
  loadPage = function (src_map) {
    // 加载首页下的子页面
    spa.router.index.initModule(jqueryMap.$index_ora_dynamic);
  };

  initModule = function ($container, src_map) {
    stateMap.$container = $container;
    configMap.src_map   = src_map;
    setJqueryMap();

    loadPage(src_map);
  };

  return { initModule : initModule };
}());
