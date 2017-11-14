/*
 * spa.data.case.case_16.js
 * case for data
 * 干货案例 04 - 简直不敢相信，被拉黑的你这样做竟然让她重新爱上你
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.data.case.case_16 = (function () {
  var
    configMap = {
      main_html : String()
      + '简直不敢相信，被拉黑的你这样做竟然让她重新爱上你'
    },
    initModule;

  initModule = (function () {
    $('.spa-main').html(configMap.main_html);
  }());
}());
