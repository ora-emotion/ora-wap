/*
 * spa.slove.js
 * save love module for SPA
 * 挽回爱情
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.slove = (function () {
  var
    configMap = {
      main_html : String() + '挽回爱情页面'
    },
    stateMap = {
      $container : null,
      $slove     : null
    },
    jqueryMap = {},
    setJqueryMap, changePrefaceImg, initModule;

  // Start : setJqueryMap()
  // 功能  : 缓存 jQuery 集合
  //
  setJqueryMap = function () {
    var
      $container = stateMap.$container,
      $slove     = stateMap.$slove;

    jqueryMap = {
      $container : $container,
      $slove     : $slove
    };
  };
  // End : setJqueryMap()

  // Start : changePrefaceImg()
  // 功能  : 动态更换头图
  //
  changePrefaceImg = function () {
    var preface_img = jqueryMap.$container.find('.spa-preface img');

    preface_img.attr('src', 'images/slove/preface.png');
  };
  // End : changePrefaceImg()

  // Start : initModule()
  // 功能  : 初始化模块
  //
  initModule = function ($container, $slove) {
    stateMap.$container  = $container;
    stateMap.$slove_main = $slove;

    $('title').text('橘子情感 - 挽回爱情');
    $slove.html(configMap.main_html);
    setJqueryMap();

    changePrefaceImg();

  };
  // End : initModule()

  return { initModule : initModule, configMap : configMap };
}());
