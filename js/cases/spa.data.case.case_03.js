/*
 * spa.data.case.case_03.js
 * case for data
 * 干货案例 03 - 爱情没了被拉黑怎么办？教你急速挽回的攻略
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.data.case.case_03 = (function () {
  var
    configMap = {
      main_html : String()
      + '爱情没了被拉黑怎么办？教你急速挽回的攻略'
    },
    stateMap = { $container : null },
    jqueryMap,

    setJqueryMap, initModule;

  setJqueryMap = function () {};

  initModule = (function () {
    $('.spa-main').html(configMap.main_html);
  }());
}());
