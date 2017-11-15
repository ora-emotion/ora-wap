/*
 * spa.data.news.new_06.js
 * news for data
 * 新闻咨询 06 - “暖爱计划”婚恋知识公益讲座报道
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.data.news.new_06 = (function () {
  var
    configMap = {
      main_html : String()
      + '“暖爱计划”婚恋知识公益讲座报道'
    },
    initModule;

  initModule = (function () {
    $('.spa-main').html(configMap.main_html);
  }());
}());
