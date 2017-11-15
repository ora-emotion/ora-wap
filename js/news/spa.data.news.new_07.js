/*
 * spa.data.news.new_07.js
 * news for data
 * 新闻咨询 07 - 正确恋爱观讲座
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.data.news.new_07 = (function () {
  var
    configMap = {
      main_html : String()
      + '正确恋爱观讲座'
    },
    initModule;

  initModule = (function () {
    $('.spa-main').html(configMap.main_html);
  }());
}());
