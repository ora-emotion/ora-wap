/*
 * spa.data.case.case_08.js
 * case for data
 * 干货案例 04 - 不会应对女生的“废物测试”，活该你追不到她
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.data.case.case_08 = (function () {
  var
    configMap = {
      main_html : String()
      + '不会应对女生的“废物测试”，活该你追不到她'
    },
    initModule;

  initModule = (function () {
    $('.spa-main').html(configMap.main_html);
  }());
}());
