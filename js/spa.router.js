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

    jqueryMap = {
      $container : $container
    };
  };

  // loadPage() - 加载子页面
  loadPage = function () {
    // 加载首页下的子页面
    spa.router.index.initModule(jqueryMap.$container);
  };

  initModule = function ($container) {
    stateMap.$container = $container;
    setJqueryMap();

    loadPage();
  };

  return { initModule : initModule };
}());
