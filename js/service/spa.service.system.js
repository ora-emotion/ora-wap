/*
 * spa.service.system.js
 * System module for Service
 * 服务介绍 - “挽爱计划”九维帮助服务体系
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.service.system = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">“挽爱计划”九维帮助服务体系</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'
    },
    initModule;

  initModule = function ($system) {
    $system.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
