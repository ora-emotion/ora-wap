/*
 * spa.data.case.case_21.js
 * case for data
 * 干货案例 21 - 你被定义渣男，分手后被拉黑，你懂得怎么挽回女人吗？
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.data.case.case_21 = (function () {
  var
    configMap = {
      main_html : String()
      + '你被定义渣男，分手后被拉黑，你懂得怎么挽回女人吗？'
    },
    initModule;

  initModule = (function () {
    $('.spa-main').html(configMap.main_html);
  }());
}());
