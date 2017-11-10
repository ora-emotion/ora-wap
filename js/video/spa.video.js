/*
 * spa.video.js
 * Video module for SPA
 * 橘子视频
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.video = (function () {
  var
    stateMap = { $video : null },
    jqueryMap = {},

    setJqueryMap, loadPage, initModule;

  setJqueryMap = function () {
    var $video = stateMap.$video;

    jqueryMap = {
      $video     : $video
    };
  };

  loadPage = function () {
    var anchor_map, key_name;
    anchor_map = $.uriAnchor.makeAnchorMap();

    for (key_name in anchor_map) {
      if (anchor_map.hasOwnProperty(key_name)) {
        switch (anchor_map[key_name]) {
          case 'free' :
            spa.video.free.initModule(jqueryMap.$video);
            break;
          case 'vip' :
            spa.video.vip.initModule(jqueryMap.$video);
            break;
          default:
            break;
        }
      }
    }
  };

  initModule = function ($video) {
    stateMap.$video = $video;

    setJqueryMap();
    loadPage();
  };

  return { initModule : initModule };
}());
