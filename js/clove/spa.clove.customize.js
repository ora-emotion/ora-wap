/*
 * spa.clove.customize.js
 * Customize module for Customize Love
 * 定制爱情 - 橘子情感定制服务
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.clove.customize = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">橘子情感定制服务</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'
    },
    initModule;

  initModule = function ($customize) {
    $customize.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
