/*
 * spa.data.news.new_08.js
 * news for data
 * 新闻咨询 08 - 客户远道而来，送来锦旗向导师团队致谢
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.data.news.new_08 = (function () {
  var
    configMap = {
      main_html : String()
      + '客户远道而来，送来锦旗向导师团队致谢'
    },
    initModule;

  initModule = (function () {
    $('.spa-main').html(configMap.main_html);
  }());
}());
