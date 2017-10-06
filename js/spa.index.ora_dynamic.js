/*
 * spa.index.ora_dynamic.js
 * Ora Dynamic module for Index
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.index.ora_dynamic = (function () {
  var
    configMap = {
      ora_dynamic_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">橘子动态</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'
        + '<div class="index-company-intro-main"></div>'
    },
    stateMap = { $ora_dynamic : null },
    jqueryMap = {},
    setJqueryMap, initModule;

  setJqueryMap = function () {
    var $ora_dynamic = stateMap.$ora_dynamic;
    jqueryMap = {
      $ora_dynamic : $ora_dynamic
    };
  };

  initModule = function ($ora_dynamic) {
    stateMap.$ora_dynamic = $ora_dynamic;
    $ora_dynamic.html(configMap.ora_dynamic_html);
    setJqueryMap();
  };

  return { initModule : initModule };
}());
