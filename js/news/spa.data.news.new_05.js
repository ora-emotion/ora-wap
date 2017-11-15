/*
 * spa.data.news.new_05.js
 * news for data
 * 新闻咨询 05 - 凤凰网人物访谈
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.data.news.new_05 = (function () {
  var
    configMap = {
      main_html : String()
      + '凤凰网人物访谈'
    },
    initModule;

  initModule = (function () {
    $('.spa-main').html(configMap.main_html);
  }());
}());
