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
        case_11 : { title : '干货案例 11' },
        case_12 : { title : '干货案例 12' },
        case_13 : { title : '干货案例 13' },
        case_14 : { title : '干货案例 14' },
        case_15 : { title : '干货案例 15' },
        case_16 : { title : '干货案例 16' },
        case_17 : { title : '干货案例 17' },
        case_18 : { title : '干货案例 18' },
        case_19 : { title : '干货案例 19' },
        case_20 : { title : '干货案例 20' },
        case_21 : { title : '干货案例 21' },
        case_22 : { title : '干货案例 22' },
        case_23 : { title : '干货案例 23' },
        case_24 : { title : '干货案例 24' },
        case_25 : { title : '干货案例 25' },
        case_26 : { title : '干货案例 26' },
        case_27 : { title : '干货案例 27' },
        case_28 : { title : '干货案例 28' },
        case_29 : { title : '干货案例 29' },
        case_30 : { title : '干货案例 30' },
        case_31 : { title : '干货案例 31' },
        case_32 : { title : '干货案例 32' },
        case_33 : { title : '干货案例 33' },
        case_34 : { title : '干货案例 34' },
        case_35 : { title : '干货案例 35' },
        case_36 : { title : '干货案例 36' },
        case_37 : { title : '干货案例 37' },
        case_38 : { title : '干货案例 38' },
        case_39 : { title : '干货案例 39' },
        case_40 : { title : '干货案例 40' },
        case_41 : { title : '干货案例 41' },
        case_42 : { title : '干货案例 42' },
        case_43 : { title : '干货案例 43' },
        case_44 : { title : '干货案例 44' },
        case_45 : { title : '干货案例 45' }
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
        case_10 : { case : 'case_10' },
        case_11 : { case : 'case_11' },
        case_12 : { case : 'case_12' },
        case_13 : { case : 'case_13' },
        case_14 : { case : 'case_14' },
        case_15 : { case : 'case_15' },
        case_16 : { case : 'case_16' },
        case_17 : { case : 'case_17' },
        case_18 : { case : 'case_18' },
        case_19 : { case : 'case_19' },
        case_20 : { case : 'case_20' },
        case_21 : { case : 'case_21' },
        case_22 : { case : 'case_22' },
        case_23 : { case : 'case_23' },
        case_24 : { case : 'case_24' },
        case_25 : { case : 'case_25' },
        case_26 : { case : 'case_26' },
        case_27 : { case : 'case_27' },
        case_28 : { case : 'case_28' },
        case_29 : { case : 'case_29' },
        case_30 : { case : 'case_30' },
        case_31 : { case : 'case_31' },
        case_32 : { case : 'case_32' },
        case_33 : { case : 'case_33' },
        case_34 : { case : 'case_34' },
        case_35 : { case : 'case_35' },
        case_36 : { case : 'case_36' },
        case_37 : { case : 'case_37' },
        case_38 : { case : 'case_38' },
        case_39 : { case : 'case_39' },
        case_40 : { case : 'case_40' },
        case_41 : { case : 'case_41' },
        case_42 : { case : 'case_42' },
        case_43 : { case : 'case_43' },
        case_44 : { case : 'case_44' },
        case_45 : { case : 'case_45' }
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
      case_10 : String() + '干货案例 10',
      case_10 : String() + '干货案例 10',
      case_11 : String() + '干货案例 11',
      case_12 : String() + '干货案例 12',
      case_13 : String() + '干货案例 13',
      case_14 : String() + '干货案例 14',
      case_15 : String() + '干货案例 15',
      case_16 : String() + '干货案例 16',
      case_17 : String() + '干货案例 17',
      case_18 : String() + '干货案例 18',
      case_19 : String() + '干货案例 19',
      case_20 : String() + '干货案例 20',
      case_21 : String() + '干货案例 21',
      case_22 : String() + '干货案例 22',
      case_23 : String() + '干货案例 23',
      case_24 : String() + '干货案例 24',
      case_25 : String() + '干货案例 25',
      case_26 : String() + '干货案例 26',
      case_27 : String() + '干货案例 27',
      case_28 : String() + '干货案例 28',
      case_29 : String() + '干货案例 29',
      case_30 : String() + '干货案例 30',
      case_31 : String() + '干货案例 31',
      case_32 : String() + '干货案例 32',
      case_33 : String() + '干货案例 33',
      case_34 : String() + '干货案例 34',
      case_35 : String() + '干货案例 35',
      case_36 : String() + '干货案例 36',
      case_37 : String() + '干货案例 37',
      case_38 : String() + '干货案例 38',
      case_39 : String() + '干货案例 39',
      case_40 : String() + '干货案例 40',
      case_41 : String() + '干货案例 41',
      case_42 : String() + '干货案例 42',
      case_43 : String() + '干货案例 43',
      case_44 : String() + '干货案例 44',
      case_45 : String() + '干货案例 45'
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
