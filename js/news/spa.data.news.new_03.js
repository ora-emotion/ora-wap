/*
 * spa.data.news.new_03.js
 * news for data
 * 新闻咨询 03 - 市南区区长参观
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.data.news.new_03 = (function () {
  var
    configMap = {
      main_html : String()
      + '市南区区长参观'
    },
    initModule;

  initModule = (function () {
    $('.spa-main').html(configMap.main_html);
  }());
}());
