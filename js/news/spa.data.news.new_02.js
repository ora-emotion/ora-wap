/*
 * spa.data.news.new_02.js
 * news for data
 * 新闻咨询 02 - 十大杰出诚信企业
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.data.news.new_02 = (function () {
  var
    configMap = {
      main_html : String()
      + '十大杰出诚信企业'
    },
    initModule;

  initModule = (function () {
    $('.spa-main').html(configMap.main_html);
  }());
}());
