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
    stateMap = { $service : null },
    jqueryMap = {},
    setJqueryMap, initModule;

  setJqueryMap = function () {
    var $service = stateMap.$service;
    jqueryMap = {
      $service : $service
    };
  };

  initModule = function ($service) {
    stateMap.$service = $service;
    $service.html(configMap.main_html);
    $('title').text('橘子情感 - 服务介绍');
    setJqueryMap();
  };

  return { initModule : initModule };
}());
