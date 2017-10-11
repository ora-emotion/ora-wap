/*
 * spa.slove.kind.js
 * kind module for Save Love
 * 挽回爱情 - 擅长挽回的爱情类型
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.slove.kind = (function () {
  var
    configMap = {
      main_html : String() + '擅长挽回的爱情类型模块'
    },
    initModule;

  initModule = function ($kind) {
    $kind.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
