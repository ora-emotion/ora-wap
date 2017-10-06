/*
 * spa.index.mentor_intro.js
 * Mentor Intro module for Index
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.index.mentor_intro = (function () {
  var
    configMap = {
      mentor_intro_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">导师介绍</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'
        + '<div class="index-company-intro-main"></div>'
    },
    stateMap = { $mentor_intro : null },
    jqueryMap = {},
    setJqueryMap, initModule;

  setJqueryMap = function () {
    var $mentor_intro = stateMap.$mentor_intro;
    jqueryMap = {
      $mentor_intro : $mentor_intro
    };
  };

  initModule = function ($mentor_intro) {
    stateMap.$mentor_intro = $mentor_intro;
    $mentor_intro.html(configMap.mentor_intro_html);
    setJqueryMap();
  };

  return { initModule : initModule };
}());
