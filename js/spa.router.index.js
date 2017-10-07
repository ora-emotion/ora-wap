/*
 * spa.router.index.js
 * Router module for Index
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.router.index = (function () {
  var
    stateMap = { $page_map : null },
    jqueryMap = {},
    loadPage,
    initModule;

  setJqueryMap = function () {
    var $page_map = stateMap.$page_map;
    jqueryMap = {
      $page_map : $page_map
    };
  };

  loadPage = function () {
    var $page_map = jqueryMap.$page_map;
    $($page_map['$slide_01']).click(function () {
      alert('slide one');
    });
    $($page_map['$slide_02']).click(function () {
      alert('slide two');
    });
  };

  initModule = function ($page_map) {
    stateMap.$page_map = $page_map;
    setJqueryMap();

    loadPage();
  };

  return { initModule : initModule };
}());
