/*
 * spa.data.case.case_04.js
 * case for data
 * 干货案例 04 - 爱情破碎女人绝情离开，坏男人帮你复联挽回爱情！
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.data.case.case_04 = (function () {
  var
    configMap = {
      main_html : String()
      + '爱情破碎女人绝情离开，坏男人帮你复联挽回爱情！'
    },
    initModule;

  initModule = (function () {
    $('.spa-main').html(configMap.main_html);
  }());
}());
