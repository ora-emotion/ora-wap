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
    stateMap = {
      $container : null,
      $smarriage : null
    },
    jqueryMap = {},
    setJqueryMap, changePrefaceImg, insertModule, initModule;

  setJqueryMap = function () {
    var
      $smarriage = stateMap.$smarriage,
      $container = stateMap.$container;

    jqueryMap = {
      $container : $container,
      $smarriage : $smarriage
    };
  };

  changePrefaceImg = function () {
    var preface_img = jqueryMap.$container.find('.spa-preface img');

    preface_img.attr('src', 'images/smarriage/preface.png');
  };

  insertModule = function () {
    $('title').text('橘子情感 - 挽回爱情');

    changePrefaceImg();
  };

  initModule = function ($container, $smarriage, key_name_value) {
    stateMap.$container = $container;
    stateMap.$smarriage = $smarriage;
    $smarriage.html(configMap.main_html);

    setJqueryMap();
    insertModule();
  };

  return { initModule : initModule };
}());
