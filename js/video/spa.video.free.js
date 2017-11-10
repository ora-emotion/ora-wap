/*
 * spa.video.free.js
 * Free Video module for SPA
 * 视频预览
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.video.free = (function () {
  var
    configMap = {
      main_html : String()
        + '视频预览页面'
    },
    stateMap = { $free_video : null },
    jqueryMap = {},

    setJqueryMap, initModule;

  setJqueryMap = function () {
    var $free_video = stateMap.$free_video;

    jqueryMap = {
      $free_video : $free_video
    };
  };

  initModule = function ($free_video) {
    stateMap.$free_video = $free_video;
    $free_video.html(configMap.main_html);

    setJqueryMap();
  };

  return { initModule : initModule };
}());
