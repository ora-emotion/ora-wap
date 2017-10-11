/*
 * spa.slove.example.js
 * example module for Save Love
 * 挽回爱情 - 成功案例
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.slove.example = (function () {
  var
    configMap = {
      main_html : String() + '成功案例模块'
    },
    initModule;

  initModule = function ($example) {
    $example.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
