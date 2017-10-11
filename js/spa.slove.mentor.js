/*
 * spa.slove.mentor.js
 * mentor team module for Save Love
 * 挽回爱情 - 导师团队
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.slove.mentor = (function () {
  var
    configMap = {
      main_html : String() + '导师团队模块'
    },
    initModule;

  initModule = function ($mentor) {
    $mentor.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
