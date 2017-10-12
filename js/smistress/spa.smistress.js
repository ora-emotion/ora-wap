/*
 * spa.smistress.js
 * separate mistress module for SPA
 * 分离小三
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.smistress = (function () {
  var
    configMap = {
      main_html : String() + '分离小三页面'
    },
    stateMap = { $smistress : null },
    jqueryMap = {},
    setJqueryMap, initModule;

  setJqueryMap = function () {
    var $smistress = stateMap.$smistress;
    jqueryMap = {
      $smistress : $smistress
    };
  };

  initModule = function ($smistress) {
    stateMap.$smistress = $smistress;
    $smistress.html(configMap.main_html);
    $('title').text('橘子情感 - 分离小三');
    setJqueryMap();
  };

  return { initModule : initModule };
}());
