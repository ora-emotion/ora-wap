/*
 * spa.forum.js
 * emotion forum module for SPA
 * 情感论坛
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.forum = (function () {
  var
    configMap = {
      main_html : String() + '情感论坛页面'
    },
    stateMap = { $container : null, $forum : null },
    jqueryMap = {},
    setJqueryMap, loadModule, initModule;

  setJqueryMap = function () {
    var
      $container = stateMap.$container,
      $forum     = stateMap.$forum;
    jqueryMap = {
      $container : $container,
      $forum     : $forum
    };
  };

  loadModule = function () {
    $('title').text('橘子情感 - 情感论坛');
  };

  initModule = function ($container, $forum) {
    stateMap.$container = $container;
    stateMap.$forum     = $forum;
    $forum.html(configMap.main_html);
    
    setJqueryMap();
    loadModule();
  };

  return { initModule : initModule };
}());
