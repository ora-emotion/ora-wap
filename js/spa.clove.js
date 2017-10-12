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
    stateMap = { $container : null, $clove : null },
    jqueryMap = {},
    setJqueryMap, loadModule, initModule;

  setJqueryMap = function () {
    var
      $container = stateMap.$container,
      $clove     = stateMap.$clove;
    jqueryMap = {
      $container : $container,
      $clove     : $clove
    };
  };

  loadModule = function () {
    $('title').text('橘子情感 - 定制爱情');
  };

  initModule = function ($container, $clove) {
    stateMap.$container = $container;
    stateMap.$clove     = $clove;
    $clove.html(configMap.main_html);

    setJqueryMap();
  };

  return { initModule : initModule };
}());
