/*
 * spa.clove.consequence.js
 * Consequence module for Customize Love
 * 定制爱情 - 错误做法导致后果
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.clove.consequence = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">错误做法导致后果</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'
    },
    initModule;

  initModule = function ($consequence) {
    $consequence.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
