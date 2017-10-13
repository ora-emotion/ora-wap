/*
 * spa.mentor.team.js
 * Team module for Mentor
 * 权威专家 - 橘子情感导师团队
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.mentor.team = (function () {
  var
    configMap = {},
    initModule;

  initModule = function ($mentor) {
    $mentor.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
