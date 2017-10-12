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
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">挽回失败原因</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'
        + '<div class="slove-fail-main">'
          + '<div class="slove-fail-main-item">'
            + '<div class="">'
            + '</div>'
          + '</div>'
        + '</div>'
    },
    stateMap = { $fail : null },
    jqueryMap = {},
    setJqueryMap, initModule;

  setJqueryMap = function () {
    var $fail = stateMap.$fail;
    jqueryMap = {
      $fail : $fail
    };
  };

  initModule = function ($fail) {
    stateMap.$fail = $fail;
    $fail.html(configMap.main_html);
    setJqueryMap();
  };

  return { initModule : initModule };
}());
