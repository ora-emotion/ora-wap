/*
 * spa.data.news.new_11.js
 * news for data
 * 新闻咨询 11 - 我们是一家人：飞扬老师、千无老师生日
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.data.news.new_11 = (function () {
  var
    configMap = {
      main_html : String()
      + '我们是一家人：飞扬老师、千无老师生日'
    },
    initModule;

  initModule = (function () {
    $('.spa-main').html(configMap.main_html);
  }());
}());
