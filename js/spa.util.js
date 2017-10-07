/*
 * spa.js
 * Util module for SPA
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.util = (function () {
  var
    configMap = {
      anchor_schema_map : {
        news : {
          new_01 : true,
          new_02 : true
        }
      }
    },
    onHashchange, initModule;

  onHashchange = function () {

  };

  initModule = function () {
    $(window)
      .bind('hashchange', onHashchange)
      .trigger('hashchange');
  };

  // return { initModule : initModule };
}());
