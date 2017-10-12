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
    stateMap = { $mentor : null },
    jqueryMap = {},
    setJqueryMap, initModule;

  setJqueryMap = function () {
    var $mentor = stateMap.$mentor;
    jqueryMap = {
      $mentor : $mentor
    };
  };

  initModule = function ($mentor) {
    stateMap.$mentor = $mentor;
    $mentor.html(configMap.main_html);
    $('title').text('橘子情感 - 权威专家');
    setJqueryMap();
  };

  return { initModule : initModule };
}());
