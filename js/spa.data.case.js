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
      keywords : {
        case_01 : '橘子情感, 干货案例, 拯救爱情',
        case_02 : '橘子情感, 干货案例, 拯救爱情',
        case_03 : '橘子情感, 干货案例, 拯救爱情',
        case_04 : '橘子情感, 干货案例, 拯救爱情',
        case_05 : '橘子情感, 干货案例, 拯救爱情',
        case_06 : '橘子情感, 干货案例, 拯救爱情',
        case_07 : '橘子情感, 干货案例, 拯救爱情',
        case_08 : '橘子情感, 干货案例, 拯救爱情',
        case_09 : '橘子情感, 干货案例, 拯救爱情',
        case_10 : '橘子情感, 干货案例, 拯救爱情',
        case_11 : '橘子情感, 干货案例, 拯救爱情',
        case_12 : '橘子情感, 干货案例, 拯救爱情',
        case_13 : '橘子情感, 干货案例, 拯救爱情',
        case_14 : '橘子情感, 干货案例, 拯救爱情',
        case_15 : '橘子情感, 干货案例, 拯救爱情',
        case_16 : '橘子情感, 干货案例, 拯救爱情',
        case_17 : '橘子情感, 干货案例, 拯救爱情',
        case_18 : '橘子情感, 干货案例, 拯救爱情',
        case_19 : '橘子情感, 干货案例, 拯救爱情',
        case_20 : '橘子情感, 干货案例, 拯救爱情',
        case_21 : '橘子情感, 干货案例, 拯救爱情',
        case_22 : '橘子情感, 干货案例, 拯救爱情',
        case_23 : '橘子情感, 干货案例, 拯救爱情',
        case_24 : '橘子情感, 干货案例, 拯救爱情',
        case_25 : '橘子情感, 干货案例, 拯救爱情',
        case_26 : '橘子情感, 干货案例, 拯救爱情',
        case_27 : '橘子情感, 干货案例, 拯救爱情',
        case_28 : '橘子情感, 干货案例, 拯救爱情',
        case_29 : '橘子情感, 干货案例, 拯救爱情',
        case_30 : '橘子情感, 干货案例, 拯救爱情',
        case_31 : '橘子情感, 干货案例, 拯救爱情',
        case_32 : '橘子情感, 干货案例, 拯救爱情',
        case_33 : '橘子情感, 干货案例, 拯救爱情',
        case_34 : '橘子情感, 干货案例, 拯救爱情',
        case_35 : '橘子情感, 干货案例, 拯救爱情',
        case_36 : '橘子情感, 干货案例, 拯救爱情',
        case_37 : '橘子情感, 干货案例, 拯救爱情',
        case_38 : '橘子情感, 干货案例, 拯救爱情',
        case_39 : '橘子情感, 干货案例, 拯救爱情',
        case_40 : '橘子情感, 干货案例, 拯救爱情',
        case_41 : '橘子情感, 干货案例, 拯救爱情',
        case_42 : '橘子情感, 干货案例, 拯救爱情',
        case_43 : '橘子情感, 干货案例, 拯救爱情',
        case_44 : '橘子情感, 干货案例, 拯救爱情',
        case_45 : '橘子情感, 干货案例, 拯救爱情'
      },
      description : {
        case_01 : '橘子情感，您身边的爱情指导挽回专家！',
        case_02 : '橘子情感，您身边的爱情指导挽回专家！',
        case_03 : '橘子情感，您身边的爱情指导挽回专家！',
        case_04 : '橘子情感，您身边的爱情指导挽回专家！',
        case_05 : '橘子情感，您身边的爱情指导挽回专家！',
        case_06 : '橘子情感，您身边的爱情指导挽回专家！',
        case_07 : '橘子情感，您身边的爱情指导挽回专家！',
        case_08 : '橘子情感，您身边的爱情指导挽回专家！',
        case_09 : '橘子情感，您身边的爱情指导挽回专家！',
        case_10 : '橘子情感，您身边的爱情指导挽回专家！',
        case_11 : '橘子情感，您身边的爱情指导挽回专家！',
        case_12 : '橘子情感，您身边的爱情指导挽回专家！',
        case_13 : '橘子情感，您身边的爱情指导挽回专家！',
        case_14 : '橘子情感，您身边的爱情指导挽回专家！',
        case_15 : '橘子情感，您身边的爱情指导挽回专家！',
        case_16 : '橘子情感，您身边的爱情指导挽回专家！',
        case_17 : '橘子情感，您身边的爱情指导挽回专家！',
        case_18 : '橘子情感，您身边的爱情指导挽回专家！',
        case_19 : '橘子情感，您身边的爱情指导挽回专家！',
        case_20 : '橘子情感，您身边的爱情指导挽回专家！',
        case_21 : '橘子情感，您身边的爱情指导挽回专家！',
        case_22 : '橘子情感，您身边的爱情指导挽回专家！',
        case_23 : '橘子情感，您身边的爱情指导挽回专家！',
        case_24 : '橘子情感，您身边的爱情指导挽回专家！',
        case_25 : '橘子情感，您身边的爱情指导挽回专家！',
        case_26 : '橘子情感，您身边的爱情指导挽回专家！',
        case_27 : '橘子情感，您身边的爱情指导挽回专家！',
        case_28 : '橘子情感，您身边的爱情指导挽回专家！',
        case_29 : '橘子情感，您身边的爱情指导挽回专家！',
        case_30 : '橘子情感，您身边的爱情指导挽回专家！',
        case_31 : '橘子情感，您身边的爱情指导挽回专家！',
        case_32 : '橘子情感，您身边的爱情指导挽回专家！',
        case_33 : '橘子情感，您身边的爱情指导挽回专家！',
        case_34 : '橘子情感，您身边的爱情指导挽回专家！',
        case_35 : '橘子情感，您身边的爱情指导挽回专家！',
        case_36 : '橘子情感，您身边的爱情指导挽回专家！',
        case_37 : '橘子情感，您身边的爱情指导挽回专家！',
        case_38 : '橘子情感，您身边的爱情指导挽回专家！',
        case_39 : '橘子情感，您身边的爱情指导挽回专家！',
        case_40 : '橘子情感，您身边的爱情指导挽回专家！',
        case_41 : '橘子情感，您身边的爱情指导挽回专家！',
        case_42 : '橘子情感，您身边的爱情指导挽回专家！',
        case_43 : '橘子情感，您身边的爱情指导挽回专家！',
        case_44 : '橘子情感，您身边的爱情指导挽回专家！',
        case_45 : '橘子情感，您身边的爱情指导挽回专家！'
      }
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

        console.log($('head meta[name="keywords"]'));

        // update keywords
        $('head meta[name="keywords"]')
          .attr('content', configMap.keywords[key_name_value]);

        // update description
        $('head meta[name="description"]')
          .attr('content', configMap.description[key_name_value]);
      }
    }
    return false;
  };

  initModule = function () {
    loadPage();
  };

  return { initModule : initModule };
}());
