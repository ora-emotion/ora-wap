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
      main_html : String()
        + '<div class="slove-separate"></div>'
        + '<div class="slove-wrong"></div>'
        + '<div class="slove-fail"></div>'
        + '<div class="slove-advantage"></div>'
        + '<div class="slove-kind"></div>'
        + '<div class="slove-service"></div>'
        + '<div class="slove-example"></div>'
        + '<div class="slove-mentor"></div>'
        + '<div class="slove-step"></div>'
    },
    stateMap = {
      $container : null,
      $slove     : null
    },
    jqueryMap = {},
    setJqueryMap, changePrefaceImg, insertModule, initModule;

  // Start : setJqueryMap()
  // 功能  : 缓存 jQuery 集合
  //
  setJqueryMap = function () {
    var
      $container = stateMap.$container,
      $slove     = stateMap.$slove;

    jqueryMap = {
      $container : $container,
      $slove     : $slove,
      $separate  : $slove.find('.slove-separate'),
      $wrong     : $slove.find('.slove-wrong'),
      $fail      : $slove.find('.slove-fail'),
      $advantage : $slove.find('.slove-advantage'),
      $kind      : $slove.find('.slove-kind'),
      $service   : $slove.find('.slove-service'),
      $example   : $slove.find('.slove-example'),
      $mentor    : $slove.find('.slove-mentor'),
      $step      : $slove.find('.slove-step')
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

  // Start : insertModule()
  // 功能  : 插入模块
  //
  insertModule = function () {
    $('title').text('橘子情感 - 挽回爱情');

    changePrefaceImg();

    spa.slove.separate.initModule(jqueryMap.$separate);
    spa.slove.wrong.initModule(jqueryMap.$wrong);
    spa.slove.fail.initModule(jqueryMap.$fail);
    spa.slove.advantage.initModule(jqueryMap.$advantage);
    spa.slove.kind.initModule(jqueryMap.$kind);
    spa.slove.service.initModule(jqueryMap.$service);
    spa.slove.example.initModule(jqueryMap.$example);
    spa.slove.mentor.initModule(jqueryMap.$mentor);
    spa.slove.step.initModule(jqueryMap.$step);
  };
  // End : insertModule()

  // Start : initModule()
  // 功能  : 初始化模块
  //
  initModule = function ($container, $slove) {
    stateMap.$container  = $container;
    stateMap.$slove      = $slove;
    $slove.html(configMap.main_html);

    setJqueryMap();
    insertModule();
  };
  // End : initModule()

  return { initModule : initModule, configMap : configMap };
}());
