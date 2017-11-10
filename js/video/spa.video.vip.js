/*
 * spa.video.vip.js
 * Vip Video module for SPA
 * 付费视频
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.video.vip = (function () {
  var
    configMap = {
      main_html : String()
        + '付费视频页面'
    },
    stateMap = { $vip_video : null },
    jqueryMap = {},

  setJqueryMap, initModule;

  setJqueryMap = function () {
    var $vip_video = stateMap.$vip_video;

    jqueryMap = {
      $vip_video : $vip_video
    };
  };

  initModule = function ($vip_video) {
    stateMap.$vip_video = $vip_video;
    $vip_video.html(configMap.main_html);

    setJqueryMap();
  };

  return { initModule : initModule };
}());
