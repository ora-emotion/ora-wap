/*
 * spa.data.case.case_19.js
 * case for data
 * 干货案例 04 - 坏男人教你：没有追不到的女生，只有不会聊天的愣头青
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.data.case.case_19 = (function () {
  var
    configMap = {
      main_html : String()
      + '坏男人教你：没有追不到的女生，只有不会聊天的愣头青'
    },
    initModule;

  initModule = (function () {
    $('.spa-main').html(configMap.main_html);
  }());
}());
