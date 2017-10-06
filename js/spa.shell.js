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
      header_html : String() + '<header class="spa-header"></header>',
      preface_html : String() + '<div class="spa-preface"></div>',
      main_html : String() + '<div class="spa-main"></div>',
      footer_html: String() + '<footer class="spa-footer"></footer>'
    },
    stateMap = { $container : null },
    jqueryMap = {},
    onClickPage,
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

  onClickPage = function () {};

  // initModule()
  // 说明 : 初始化模块
  initModule = function ($container) {
    stateMap.$container = $container;
    $container.append(configMap.header_html);
    $container.append(configMap.preface_html);
    $container.append(configMap.main_html);
    $container.append(configMap.footer_html);

    setJqueryMap();

    spa.shell.header.initModule(jqueryMap.$header);
    spa.shell.preface.initModule(jqueryMap.$preface);
    spa.shell.footer.initModule(jqueryMap.$footer);

    spa.index.initModule(jqueryMap.$main);

    onClickPage();
  };

  // 导出公开方法
  return { initModule : initModule };
}());
