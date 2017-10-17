/*
 * spa.smistress.service.js
 * Service module for Separate Mistress
 * 分离小三 - 能够提供的分离小三服务
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.smistress.service = (function () {
  var
    configMap = {
      main_html : String()
      + '<div class="spa-module-title">'
        + '<span class="spa-module-title-line"></span>'
        + '<p class="spa-module-title-txt">能够提供的分离小三服务</p>'
        + '<span class="spa-module-title-line"></span>'
      +  '</div>'
    },
    initModule;

  initModule = function ($service) {
    $service.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
