/*
 * spa.data.case.case_02.js
 * case for data
 * 干货案例 02 - 爱情分手被断联，不会这一招，怎么挽回女人？
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.data.case.case_02 = (function () {
  var
    configMap = {
      main_html : String()
      + '爱情分手被断联，不会这一招，怎么挽回女人？'
    },
    stateMap = { $container : null },
    jqueryMap,

    setJqueryMap, initModule;

  setJqueryMap = function () {};

  initModule = (function () {
    $('.spa-main').html(configMap.main_html);
  }());
}());
