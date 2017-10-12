/*
 * spa.smistress.reason.js
 * Reason module for Separate Mistress
 * 出现第三者的原因
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.smistress.reason = (function () {
  var
    configMap = {
      main_html : String()
      + '<div class="spa-module-title">'
        + '<span class="spa-module-title-line"></span>'
        + '<p class="spa-module-title-txt">出现第三者的原因</p>'
        + '<span class="spa-module-title-line"></span>'
      +  '</div>'
    },
    initModule;

  initModule = function ($reason) {
    $reason.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
