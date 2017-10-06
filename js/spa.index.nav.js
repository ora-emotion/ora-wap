/*
 * spa.index.nav.js
 * navigation module for Index
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.index.nav = (function () {
  var
    configMap = {
      nav_html : String()
        + '<div class="index-nav-horizontal">'
          + '<div class="index-nav-horizontal-item">'
            + '<div class="index-nav-horizontal-item-icon"></div>'
            + '<p>挽回爱情</p>'
          + '</div>'
          + '<div class="index-nav-horizontal-item">'
            + '<div class="index-nav-horizontal-item-icon"></div>'
            + '<p>挽救婚姻</p>'
          + '</div>'
          + '<div class="index-nav-horizontal-item">'
            + '<div class="index-nav-horizontal-item-icon"></div>'
            + '<p>分离小三</p>'
          + '</div>'
          + '<div class="index-nav-horizontal-item">'
            + '<div class="index-nav-horizontal-item-icon"></div>'
            + '<p>定制爱情</p>'
          + '</div>'
        + '</div>'
        + '<div class="index-nav-horizontal">'
          + '<div class="index-nav-horizontal-item">'
            + '<div class="index-nav-horizontal-item-icon"></div>'
            + '<p>情感论坛</p>'
          + '</div>'
          + '<div class="index-nav-horizontal-item">'
            + '<div class="index-nav-horizontal-item-icon"></div>'
            + '<p>权威专家</p>'
          + '</div>'
          + '<div class="index-nav-horizontal-item">'
            + '<div class="index-nav-horizontal-item-icon"></div>'
            + '<p>服务介绍</p>'
          + '</div>'
          + '<div class="index-nav-horizontal-item">'
            + '<div class="index-nav-horizontal-item-icon"></div>'
            + '<p>关于我们</p>'
          + '</div>'
        + '</div>'
    },
    stateMap = { $nav : null },
    jqueryMap = {},
    setJqueryMap, initModule;

  setJqueryMap = function () {
    var $nav = stateMap.$nav;
    jqueryMap = {
      $nav : $nav
    };
  };

  initModule = function ($nav) {
    stateMap.$nav = $nav;
    $nav.html(configMap.nav_html);
    setJqueryMap();
  };

  return { initModule : initModule };
}());
