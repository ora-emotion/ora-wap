/*
 * spa.about.js
 * about us module for SPA
 * 关于我们
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.about = (function () {
  var
    configMap = {
      main_html : String() + '关于我们页面'
    },
    stateMap = { $about: null },
    jqueryMap = {},
    setJqueryMap, initModule;

  setJqueryMap = function () {};

  initModule = function ($about) {
    stateMap.$about = $about;
    $about.html(configMap.main_html);
    $('title').text('橘子情感 - 关于我们');
    setJqueryMap();
  };

  return { initModule : initModule };
}());
