/*
 * spa.clove.js
 * custom love mistress module for SPA
 * 定制爱情
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.clove = (function () {
  var
    configMap = {
      main_html : String() +'定制爱情页面'
    },
    stateMap = { $clove : null },
    jqueryMap = {},
    setJqueryMap, initModule;

  setJqueryMap = function () {
    var $clove = stateMap.$clove;
    jqueryMap = {
      $clove : $clove
    };
  };

  initModule = function ($clove) {
    stateMap.$clove = $clove;
    $clove.html(configMap.main_html);
    $('title').text('橘子情感 - 定制爱情');
    setJqueryMap();
  };

  return { initModule : initModule };
}());
