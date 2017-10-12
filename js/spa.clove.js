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
    var preface_img = jqueryMap.$container.find('.spa-preface img');

    $('title').text('橘子情感 - 定制爱情');
    preface_img.attr('src', 'images/clove/preface.png');

    // 加载模块
  };

  initModule = function ($container, $clove) {
    stateMap.$container = $container;
    stateMap.$clove     = $clove;
    $clove.html(configMap.main_html);

    setJqueryMap();
    loadModule();
  };

  return { initModule : initModule };
}());
