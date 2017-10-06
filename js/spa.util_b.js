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
    root_ele,      device_width,
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

  initModule = function () {
    fontAutomatic();
  };

  return { initModule : initModule };
}());
