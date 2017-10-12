/*
 * spa.mentor.js
 * mentor team module for SPA
 * 权威专家
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.mentor = (function () {
  var
    configMap = {
      main_html : String() + '权威专家页面'
    },
    stateMap = { $container : null, $mentor : null },
    jqueryMap = {},
    setJqueryMap, loadModule, initModule;

  setJqueryMap = function () {
    var
      $container = stateMap.$container,
      $mentor    = stateMap.$mentor;

    jqueryMap = {
      $container : $container,
      $mentor    : $mentor
    };
  };

  loadModule = function () {
    $('title').text('橘子情感 - 权威专家');
  };

  initModule = function ($container, $mentor) {
    stateMap.$container = $container;
    stateMap.$mentor    = $mentor;
    $mentor.html(configMap.main_html);

    setJqueryMap();
    loadModule();
  };

  return { initModule : initModule };
}());
