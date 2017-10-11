/*
 * spa.slove.js
 * save love module for SPA
 * 挽回爱情
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
    stateMap = { $slove : null },
    jqueryMap = {},
    setJqueryMap, initModule;

  // Start : setJqueryMap()
  // 功能  : 缓存 jQuery 集合
  //
  setJqueryMap = function () {
    var $slove = stateMap.$slove;
    jqueryMap = {
      $slove : $slove
    };
  };
  // End : setJqueryMap()

  // Start : initModule()
  // 功能  : 初始化模块
  //
  initModule = function ($slove) {
    stateMap.$slove_main = $slove;
    $slove.html(configMap.main_html);
    $('title').text('橘子情感 - 挽回爱情');

    setJqueryMap();
  };
  // End : initModule()

  return { initModule : initModule, configMap : configMap };
}());
