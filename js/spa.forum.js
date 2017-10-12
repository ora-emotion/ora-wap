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
    stateMap = { $forum : null },
    jqueryMap = {},
    setJqueryMap, initModule;

  setJqueryMap = function () {
    var $forum = stateMap.$forum;
    jqueryMap = {
      $forum : $forum
    };
  };

  initModule = function ($forum) {
    stateMap.$forum = $forum;
    $forum.html(configMap.main_html);
    $('title').text('橘子情感 - 情感论坛');
    setJqueryMap();
  };

  return { initModule : initModule };
}());
