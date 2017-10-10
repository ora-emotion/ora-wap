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
    configMap = {},
    stateMap = { $container : null },
    jqueryMap = {},
    loadPage,
    setJqueryMap, initModule;

  setJqueryMap = function () {
    var $container   = stateMap.$container;

    jqueryMap = { $container : $container };
  };

  // loadPage() - 加载子页面
  loadPage = function (key_name_value) {
    // 加载首页下的子页面
    spa.router.index.initModule(jqueryMap.$container, key_name_value);
  };

  // Start initModule()
  // 功能 : 初始化模块
  // 说明 :
  //   * $container - $('#spa')
  //
  initModule = function ($container, key_name_value) {
    stateMap.$container = $container;
    setJqueryMap();

    loadPage(key_name_value);
  };
  // End initModule()

  // 导出公开方法
  return { initModule : initModule };
}());
