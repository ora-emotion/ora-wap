/*
 * spa.book.js
 * Book module for SPA
 * 嘉伟导师十本好书推荐
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.book = (function () {
  var
    configMap = {
      main_html : String()
        + '嘉伟导师十本好书推荐'
    },
    stateMap = {
      $container : null,
      $book      : null
    },
    jqueryMap = {},

    setJqueryMap, initModule;

  setJqueryMap = function () {
    var
      $container = stateMap.$container,
      $book = stateMap.$book;

    jqueryMap = {
      $container : $container,
      $book      : $book
    };
  };

  initModule = function ($container, $book) {
    stateMap.$container = $container;
    stateMap.$book = $book;
    $book.html(configMap.main_html);

    setJqueryMap();
  };

  return { initModule : initModule };
}());
