/*
 * spa.index.ora_dynamic.js
 * Ora Dynamic module for Index
 * 首页 - 橘子动态模块
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.slove = (function () {
  var
    configMap = {
      main_html : String() + '挽回爱情页面'
    },
    stateMap = { $container : null },
    jqueryMap = {},
    setJqueryMap, initModule;

  // Start : setJqueryMap()
  // 功能  : 缓存 jQuery 集合
  //
  setJqueryMap = function () {
    var $container = stateMap.$container;
    jqueryMap = {
      $container : $container
    };
  };
  // End : setJqueryMap()

  // Start : initModule()
  // 功能  : 初始化模块
  //
  initModule = function ($container) {
    stateMap.$container = $container;
    $container.html(configMap.main_html);
    setJqueryMap();
  };
  // End : initModule()

  return { initModule : initModule };
}());
