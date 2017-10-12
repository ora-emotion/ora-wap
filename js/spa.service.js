/*
 * spa.service.js
 * service intro module for SPA
 * 服务介绍
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.service = (function () {
  var
    configMap = {
      main_html : String() + '服务介绍页面'
    },
    stateMap = { $container : null, $service : null },
    jqueryMap = {},
    setJqueryMap, loadModule, initModule;

  setJqueryMap = function () {
    var
      $container = stateMap.$container,
      $service   = stateMap.$service;

    jqueryMap = {
      $container : $container,
      $service   : $service
    };
  };

  loadModule = function () {
    var preface_img = jqueryMap.$container.find('.spa-preface img');

    $('title').text('橘子情感 - 服务介绍');
    preface_img.attr('src', 'images/service/preface.png');

    // 加载模块
  };

  initModule = function ($container, $service) {
    stateMap.$container = $container;
    stateMap.$service   = $service;

    $service.html(configMap.main_html);

    setJqueryMap();
    loadModule();
  };

  return { initModule : initModule };
}());
