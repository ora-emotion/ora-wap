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
      title : {
        case_01 : '「挽回女人」断联拉黑之后，好的心态才是拯救爱情的致胜之道',
        case_02 : '爱情分手被断联，不会这一招，怎么挽回女人？',
        case_03 : '爱情没了被拉黑怎么办？教你急速挽回的攻略',
        case_04 : '爱情破碎女人绝情离开，坏男人帮你复联挽回爱情！',
        case_05 : '被拉黑不知如何复联？学会这两点，完美逆袭挽回爱情！',
        case_06 : '被拉黑该如何恢复联系？教你这几步，挽回爱情指日可待！',
        case_07 : '女生的“废物测试”其实是对你有意思，你中招了吗？',
        case_08 : '不会应对女生的“废物测试”，活该你追不到她',
        case_09 : '读懂女生这四种行为，教你分分钟挽回他！',
        case_10 : '断联拉黑也不怕，教你学会怎么挽回让女人绝望的感情',
        case_11 : '分手后苦苦纠缠被拉黑？快速复联挽回男女生必备！',
        case_12 : '夫妻冷战离婚，怎样挽回即将破碎的婚姻？',
        case_13 : '感情疲惫、拉黑失联算什么？我照样挽回了她',
        case_14 : '合理套路，帮你把握住心仪的她',
        case_15 : '坏男人简单一招教你读懂女人，成功挽回爱情',
        case_16 : '简直不敢相信，被拉黑的你这样做竟然让她重新爱上你',
        case_17 : '警惕婚姻中的几大离婚前兆，解决情感危机',
        case_18 : '了解女人的爱情心理，分分钟破解拉黑复联成功，挽回爱情',
        case_19 : '坏男人教你：没有追不到的女生，只有不会聊天的愣头青',
        case_20 : '男人做好这关键的四点，就能快速挽回她！',
        case_21 : '你被定义渣男，分手后被拉黑，你懂得怎么挽回女人吗？',
        case_22 : '你还说你无法挽回爱情？这才是挽回的正确打开方式！',
        case_23 : '坏男人教你：女人多绝情，但没有挽回不了的爱情！',
        case_24 : '女人说分手拉黑后给你机会，掌握攻略教你复联挽回爱情',
        case_25 : '女人说你情商低、沟通差，一招教你快速起死回生，挽回爱情',
        case_26 : '普通白领男逆袭法国留学白富美',
        case_27 : '情商低被拉黑分手，真实案例教你如何逆袭挽回爱情',
        case_28 : '适度断联你都不懂，凭什么想挽回！',
        case_29 : '挽回爱情使用错误方法，果断被拉黑失联，学习妙招再次挽救',
        case_30 : '挽回攻略：如何跟女朋友复联进行二次吸引恢复爱情？',
        case_31 : '做好这关键的四点，就能快速挽回她！',
        case_32 : '当你下跪都无法挽回心死女友时，你该试试“幽灵心态”',
        case_33 : '百依百顺没有用，读懂女人心你才能挽回你的爱情',
        case_34 : '别因误会而分手，挽回爱情，“渣男”的锅你别背',
        case_35 : '“没感觉”不可怕，三招教你挽回她',
        case_36 : '学会“爱情兵法”，打赢挽回心理攻防战',
        case_37 : '提升“恋爱价值感”，女人不会因跪求而回心转意',
        case_38 : '表白无果，只用了三十天逆袭',
        case_39 : '深陷苦恋，多次表白没有结果，幸亏遇到你',
        case_40 : '老公在外找小三，教你见招拆招',
        case_41 : '从恩爱夫妻到仇人，都是小三搞得鬼',
        case_42 : '被拉黑之后才懂得怎么给她想要的，挽回原来这么简单',
        case_43 : '给他合适的爱才是正确的恋爱方法，橘子情感让我重新教会我爱情',
        case_44 : '维持好长期婚姻关系，让生活不再磕磕绊绊',
        case_45 : '挽回老公的心，让婚姻走出“出轨”阴影'
      },
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

    createScript, loadPage, initModule;

  createScript = function (key_name_value, src) {
    var script, head;

    script = document.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    head = document.getElementsByTagName('head')[0];

    script.setAttribute('class', 'data-case-' + key_name_value);
    script.setAttribute('charset', 'utf-8');

    head.appendChild(script);
  };

  loadPage = function () {
    var anchor_map, key_name, key_name_value, url;

    anchor_map = $.uriAnchor.makeAnchorMap();

    KEYVAL:
    for (key_name in anchor_map) {
      if (anchor_map.hasOwnProperty(key_name)) {
        if (key_name.indexOf('_') === 0) { continue KEYVAL; }

        key_name_value = anchor_map[key_name];

        url = 'js/cases/spa.data.case.' + key_name_value + '.js';
        createScript(key_name_value, url);

        // update title
        $('head title')
          .text(configMap.title[key_name_value] + ' | 橘子情感干货案例 | 橘子情感');

        // update keywords

        // update description
      }
    }
    return false;
  };

  initModule = function () {
    loadPage();
  };

  return { initModule : initModule };
}());
