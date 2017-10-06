/*
 * spa.index.four_services.js
 * Four Services module for Index
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.index.four_services = (function () {
  var
    configMap = {
      four_services_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">四项服务</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'
        + '<div class="index-company-intro-main"></div>'
    },
    stateMap = { $four_services : null },
    jqueryMap = {},
    setJqueryMap, initModule;

  setJqueryMap = function () {
    var $four_services = stateMap.$four_services;
    jqueryMap = {
      $four_services : $four_services
    };
  };

  initModule = function ($four_services) {
    stateMap.$four_services = $four_services;
    $four_services.html(configMap.four_services_html);
    setJqueryMap();
  };

  return { initModule : initModule };
}());
