/*
 * spa.slove.separate.js
 * separate module for Save Love
 * 挽回爱情 - 分手状态
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.slove.separate = (function () {
  var
    configMap = {
      main_html : String() + '分手状态模块'
    },
    initModule;

  initModule = function ($separate) {
    $separate.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
