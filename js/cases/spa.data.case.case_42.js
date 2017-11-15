/*
 * spa.data.case.case_42.js
 * case for data
 * 干货案例 42 - 被拉黑之后才懂得怎么给她想要的，挽回原来这么简单
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.data.case.case_42 = (function () {
  var
    configMap = {
      main_html : String()
      + '被拉黑之后才懂得怎么给她想要的，挽回原来这么简单'
    },
    initModule;

  initModule = (function () {
    $('.spa-main').html(configMap.main_html);
  }());
}());
