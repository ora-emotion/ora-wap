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
    stateMap = { $container : null, $about: null },
    jqueryMap = {},
    setJqueryMap, loadModule, initModule;

  setJqueryMap = function () {
    var
      $container = stateMap.$container,
      $about     = stateMap.$about;

    jqueryMap = {
      $container : $container,
      $about     : $about
    };
  };

  loadModule = function () {
    var preface_img = jqueryMap.$container.find('.spa-preface img');

    $('title').text('橘子情感 - 关于我们');
    preface_img.attr('src', 'images/about/preface.png');

    // 加载模块
  };

  initModule = function ($container, $about) {
    stateMap.$container = $container;
    stateMap.$about     = $about;
    $about.html(configMap.main_html);

    setJqueryMap();
    loadModule();
  };

  return { initModule : initModule };
}());
