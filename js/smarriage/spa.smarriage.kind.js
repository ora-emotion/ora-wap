/*
 * spa.smarriage.kind.js
 * Kind module for Save Marriage
 * 擅长挽回的婚姻类型
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.smarriage.kind = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">擅长挽回的婚姻类型</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'
    },
    initModule;

  initModule = function ($kind) {
    $kind.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
