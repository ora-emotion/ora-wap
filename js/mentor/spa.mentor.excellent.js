/*
 * spa.mentor.excellent.js
 * Excellent module for Mentor
 * 权威专家 - 专注卓越
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.mentor.excellent = (function () {
  var
    configMap = {},
    initModule;

  initModule = function ($excellent) {
    $excellent.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
