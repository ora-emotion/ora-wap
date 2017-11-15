/*
 * spa.data.news.new_13.js
 * news for data
 * 新闻咨询 13 - 团队理论研发
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.data.news.new_13 = (function () {
  var
    configMap = {
      main_html : String()
      + '团队理论研发'
    },
    initModule;

  initModule = (function () {
    $('.spa-main').html(configMap.main_html);
  }());
}());
