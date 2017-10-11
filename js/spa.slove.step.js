/*
 * spa.slove.step.js
 * step module for Save Love
 * 挽回爱情 - 挽回爱情服务流程
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.slove.step = (function () {
  var
    configMap = {
      main_html : String() + '挽回爱情服务流程模块'
    },
    initModule;

  initModule = function ($step) {
    $step.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
