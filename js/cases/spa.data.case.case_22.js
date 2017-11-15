/*
 * spa.data.case.case_22.js
 * case for data
 * 干货案例 22 - 你还说你无法挽回爱情？这才是挽回的正确打开方式！
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.data.case.case_22 = (function () {
  var
    configMap = {
      main_html : String()
      + '你还说你无法挽回爱情？这才是挽回的正确打开方式！'
    },
    initModule;

  initModule = (function () {
    $('.spa-main').html(configMap.main_html);
  }());
}());
