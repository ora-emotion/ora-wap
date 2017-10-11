/*
 * spa.slove.wrong.js
 * wrong module for Save Love
 * 挽回爱情 - 错误做法
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.slove.wrong = (function () {
  var
    configMap = {
      main_html : String() + '错误做法模块'
    },
    initModule;

  initModule = function ($wrong) {
    $wrong.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
