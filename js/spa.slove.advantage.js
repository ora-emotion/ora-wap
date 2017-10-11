/*
 * spa.slove.advantage.js
 * advantage module for Save Love
 * 挽回爱情 - 橘子情感优势
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.slove.advantage = (function () {
  var
    configMap = {
      main_html : String() + '橘子情感优势模块'
    },
    initModule;

  initModule = function ($advantage) {
    $advantage.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
