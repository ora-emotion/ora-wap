/*
 * spa.data.news.new_15.js
 * news for data
 * 新闻咨询 15 - 橘子情感联合山东省创业中心举办中俄新兴行业交流会
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.data.news.new_15 = (function () {
  var
    configMap = {
      main_html : String()
      + '橘子情感联合山东省创业中心举办中俄新兴行业交流会'
    },
    initModule;

  initModule = (function () {
    $('.spa-main').html(configMap.main_html);
  }());
}());
