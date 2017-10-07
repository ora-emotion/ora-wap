/*
 * spa.shell.js
 * Shell module for SPA
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.shell = (function () {
  var
    configMap = {
      main_html : String()
        + '<header class="spa-header"></header>'
        + '<div class="spa-preface"></div>'
        + '<div class="spa-main"></div>'
        + '<footer class="spa-footer"></footer>'
    },
    stateMap = { $container : null },
    jqueryMap = {},
    loadCommonModule,
    setJqueryMap, initModule;

  // setJqueryMap()
  // 功能 : 缓存 jQuery 集合
  //
  setJqueryMap = function () {
    var $container = stateMap.$container;
    jqueryMap = {
      $container : $container,
      $header    : $container.find('.spa-header'),
      $preface   : $container.find('.spa-preface'),
      $main      : $container.find('.spa-main'),
      $footer    : $container.find('.spa-footer')
    };
  };

  // loadCommonModule() - 加载公共模块
  loadCommonModule = function () {
    spa.shell.header.initModule(jqueryMap.$header);
    spa.shell.preface.initModule(jqueryMap.$preface);
    spa.shell.footer.initModule(jqueryMap.$footer);
  };

  // initModule()
  // 说明 : 初始化模块
  initModule = function ($container) {
    stateMap.$container = $container;
    $container.html(configMap.main_html);
    setJqueryMap();

    loadCommonModule();

    // 加载首页主内容区域
    spa.index.initModule(jqueryMap.$main);
  };

  // 导出公开方法
  return { initModule : initModule };
}());
