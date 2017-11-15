/*
 * spa.data.news.new_09.js
 * news for data
 * 新闻咨询 09 - 社会各界人士交流会
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.data.news.new_09 = (function () {
  var
    configMap = {
      main_html : String()
      + '社会各界人士交流会'
    },
    initModule;

  initModule = (function () {
    $('.spa-main').html(configMap.main_html);
  }());
}());
