/*
 * spa.data.news.new_12.js
 * news for data
 * 新闻咨询 12 - 一个创业者的自述：橘子情感，专注情感，为爱而生
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.data.news.new_12 = (function () {
  var
    configMap = {
      main_html : String()
      + '一个创业者的自述：橘子情感，专注情感，为爱而生'
    },
    initModule;

  initModule = (function () {
    $('.spa-main').html(configMap.main_html);
  }());
}());
