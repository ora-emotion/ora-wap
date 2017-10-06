/*
 * spa.shell.footer.js
 * Footer module for Shell
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.shell.footer = (function () {
  var
    configMap = {
      footer_html : String()
        + '<div class="spa-footer-column">'
          + '<img src="images/util/logo-footer.png">'
        + '</div>'
        + '<div class="spa-footer-column">'
          + '<div class="spa-footer-column-phone">'
            + '<div class="spa-footer-column-phone-icon"></div>'
            + '<div class="spa-footer-column-phone-txt">'
              + '<p>橘子情感热线</p>'
              + '<p>4006-299-520</p>'
            + '</div>'
          + '</div>'
          + '<div class="spa-footer-column-wechat">'
            + '<p>橘子微信公众平台：</p>'
            + '<p>jzqinggan</p>'
          + '</div>'
          + '<div class="spa-footer-column-address">'
            + '<p>地址：</p>'
            + '<p>青岛市市南区银川西路67号动漫产业园A座212B</p>'
          + '</div>'
          + '<div class="spa-footer-column-name">'
            + '<p></p>'
            + '<p>青岛橘子创想文化传播有限公司</p>'
          + '</div>'
          + '<div class="spa-footer-column-record">'
            + '<p>备案号：</p>'
            + '<p>鲁ICP备17023741号</p>'
          + '</div>'
        + '</div>'
    },
    stateMap = { $footer : null },
    jqueryMap = {},
    setJqueryMap, initModule;

  setJqueryMap = function () {
    var $footer = stateMap.$footer;
    jqueryMap = {
      $footer : $footer
    };
  };

  initModule = function ($footer) {
    stateMap.$footer = $footer;
    $footer.html(configMap.footer_html);
  };

  return { initModule : initModule };
}());
