/*
 * spa.js
 * Util Browser module for SPA
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.util_b = (function () {
  var
    root_ele,      device_width, onHashchange,
    fontAutomatic, initModule;

  // Start fontAutomatic()
  // 功能   :
  //   * 动态调整字体大小
  // 返回值 :none
  // 说明   :
  //   * root_ele     - html 元素
  //   * device_width - 设备宽度
  //
  fontAutomatic = function () {
    root_ele     = document.documentElement;
    device_width = root_ele.clientWidth;

    // 根元素字体大小 - 以 iPhone6 为准
    root_ele.style.fontSize   = device_width / 7.5 + 'px';

    // 当页面缩放时，动态更改字体大小
    window.onresize = function () {
      root_ele     = document.documentElement;
      device_width = root_ele.clientWidth;
      root_ele.style.fontSize = device_width / 7.5 + 'px';
    };

  };
  // End fontAutoMatic()

  // Start onHashchange()
  // 功能 : 监听地址栏哈西片段
  onHashchange = function () {
    var
      anchor_map = $.uriAnchor.makeAnchorMap(),
      has_key_name = false,
      key_name;

    for (key_name in anchor_map) {
      has_key_name = true;
    }

    if (has_key_name) {
      switch (key_name) {
        case 'news'    :
          // spa.router.initModule(anchor_map[key_name]);
          spa.data.news.initModule(anchor_map[key_name]);
          break;
        case '_s_news' :
          spa.data.news.initModule(anchor_map[key_name]);
          break;
        default:
          break;
      }
    }

    // 当地址栏中没有哈希片段时，加载首页
    if (!has_key_name) { spa.shell.initModule( $('#spa') ); }

  };
  // End onHashchange()

  initModule = function () {
    fontAutomatic();

    $(window)
      .bind('hashchange', onHashchange)
      .trigger('hashchange');
  };

  return { initModule : initModule };
}());
