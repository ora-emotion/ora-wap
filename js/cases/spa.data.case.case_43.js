/*
 * spa.data.case.case_43.js
 * case for data
 * 干货案例 43 - 给他合适的爱才是正确的恋爱方法，橘子情感让我重新教会我爱情
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.data.case.case_43 = (function () {
  var
    configMap = {
      main_html : String()
      + '给他合适的爱才是正确的恋爱方法，橘子情感让我重新教会我爱情'
    },
    initModule;

  initModule = (function () {
    $('.spa-main').html(configMap.main_html);
  }());
}());
