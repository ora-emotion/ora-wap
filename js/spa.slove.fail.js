/*
 * spa.slove.fail.js
 * fail module for Save Love
 * 挽回爱情 - 挽回失败原因
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.slove.fail = (function () {
  var
    configMap = {
      main_html : String() + '挽回失败原因模块'
    },
    initModule;

  initModule = function ($fail) {
    $fail.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
