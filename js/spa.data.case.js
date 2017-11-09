/*
 * spa.data.case.js
 * case for Data
 * 干货案例
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.data.case = (function () {
  var
    configMap = {
      case_info : {
        case_01 : { title : '干货案例 01' },
        case_02 : { title : '干货案例 02' },
        case_03 : { title : '干货案例 03' },
        case_04 : { title : '干货案例 04' },
        case_05 : { title : '干货案例 05' },
        case_06 : { title : '干货案例 06' },
        case_07 : { title : '干货案例 07' },
        case_08 : { title : '干货案例 08' },
        case_09 : { title : '干货案例 09' },
        case_10 : { title : '干货案例 10' },
      },
      case_anchor_map : {
        case_01 : { case : 'case_01' },
        case_02 : { case : 'case_02' },
        case_03 : { case : 'case_03' },
        case_04 : { case : 'case_04' },
        case_05 : { case : 'case_05' },
        case_06 : { case : 'case_06' },
        case_07 : { case : 'case_07' },
        case_08 : { case : 'case_08' },
        case_09 : { case : 'case_09' },
        case_10 : { case : 'case_10' }
      },
      case_01 : String() + '干货案例 01',
      case_02 : String() + '干货案例 02',
      case_03 : String() + '干货案例 03',
      case_04 : String() + '干货案例 04',
      case_05 : String() + '干货案例 05',
      case_06 : String() + '干货案例 06',
      case_07 : String() + '干货案例 07',
      case_08 : String() + '干货案例 08',
      case_09 : String() + '干货案例 09',
      case_10 : String() + '干货案例 10'
    },
    stateMap = { $container : null },
    jqueryMap = {},

    setJqueryMap, loadPage, initModule;

  setJqueryMap = function () {
    var $container = stateMap.$container;

    jqueryMap = {
      $container : $container,
      $case      : $container.find('.spa-main'),
      $title     : $('head title')
    };
  };

  loadPage = function (key_name_value) {

    if (!configMap.hasOwnProperty(key_name_value)) {
      $.uriAnchor.setAnchor({});
      return false;
    }

    $.uriAnchor.setAnchor(configMap.case_anchor_map[key_name_value]);

    jqueryMap.$title
    .text('橘子情感 - ' + configMap.case_info[key_name_value].title);

    $( document ).scrollTop( 0 );

    jqueryMap.$case.html(configMap[key_name_value]);

    return false;
  };

  initModule = function ($container, key_name_value) {
    stateMap.$container = $container;
    setJqueryMap();

    loadPage(key_name_value);
  };

  return { initModule : initModule };
}());
