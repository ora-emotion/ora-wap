/*
 * spa.data.case.case_07.js
 * case for data
 * 干货案例 04 - 女生的“废物测试”其实是对你有意思，你中招了吗？
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.data.case.case_07 = (function () {
  var
    configMap = {
      main_html : String()
      + '女生的“废物测试”其实是对你有意思，你中招了吗？'
    },
    initModule;

  initModule = (function () {
    $('.spa-main').html(configMap.main_html);
  }());
}());
