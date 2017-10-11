/*
 * spa.slove.js
 * save marriage module for SPA
 * 挽救婚姻
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.smarriage = (function () {
  var
    configMap = {
      main_html : String() + '挽救婚姻页面'
    },
    stateMap = { $smarriage : null },
    jqueryMap = {},
    setJqueryMap, initModule;

  setJqueryMap = function () {
    var $smarriage = stateMap.$smarriage;
    jqueryMap = {
      $smarriage : $smarriage
    };
  };

  initModule = function ($smarriage, key_name_value) {
    stateMap.$smarriage = $smarriage;
    $smarriage.html(configMap.main_html);
    $('title').text('橘子情感 - 挽救婚姻');

    setJqueryMap();
  };

  return { initModule : initModule };
}());
