/*
 * spa.mentor.tutor.js
 * Tutor module for Mentor
 * 权威专家 - 橘子情感首席导师
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.mentor.tutor = (function () {
  var
    configMap = {},
    initModule;

  initModule = function ($tutor) {
    $tutor.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
