/*
 * spa.data.news.js
 * News module for Data
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */


spa.data.news = (function () {
  var
    configMap = {
      news_info : {
        new_01 : { title : '客户远道而来，送来锦旗向导师团队致谢' },
        new_02 : { title : '主导师团队分析学院情况以及制定方案' },
        new_03 : { title : '第六届情感导师行业交流指导会' },
        new_04 : { title : '“暖爱计划”婚恋知识公益讲座报道' },
        new_05 : { title : '十大杰出诚信企业' },
        new_06 : { title : '青岛市市南区区长，亲临视察工作' },
        new_07 : { title : '' },
        new_08 : { title : '' },
        new_09 : { title : '' },
        new_10 : { title : '' },
        new_11 : { title : '' },
        new_12 : { title : '' }
      },
      new_01 : String()
        + '<div class="module">'
          + '<div class="main">'
            + '<h2>第六届情感导师行业交流指导会</h2>'
            + '<p>'
              + '由橘子情感主办的第六届情感导师行业指导会如期召开。本次会议针对现今'
              + '中国社会普遍存在的情感问题展开讨论，分为家庭责任感、伴侣高效沟通、'
              + '提高国民爱情安全感、情感导师社会责任等多个议题，以最大限度提供专注'
              + '情感问题的专业服务为目标。到场嘉宾包括国内约会专家、国内权威情感挽'
              + '回专家、进化心理学专家、婚姻家庭咨询师等专业情感导师团队，会议现场'
              + '座无虚席。'
            + '</p>'
            + '<div class="center">'
              + '<img src="images/news/1.jpg">'
            + '</div>'
            + '<span>图为主会场</span>'
            + '<p>'
              + '橘子情感团队创始人之一嘉伟老师在开场致辞中提到:“我们将继续贯彻‘专注'
              + '情感，为爱而生’的宗旨，努力打造情感挽回行业第一权威品牌，不断简化理'
              + '论，直接高效的解决问题，针对不同客户的情感需求，专门开设技巧培训课'
              + '程，从互联网线上线下多平台全面入手，为更多人提供相应的两性情感服'
              + '务。”'
            + '</p>'
            + '<p>'
              + '交流环节中，权威进化心理学教授，NLP国际认证导师千芜老师；国家二级心'
              + '理咨询师，橘子情感首席女导师杰妮老师；门萨俱乐部精英，两性心理学专家'
              + '查尔斯老师参与讨论。三位情感挽回行业嘉宾分享了自己面临过的服务困难和'
              + '难题，现场讨论问题答疑解惑，气氛十分活跃。'
            + '</p>'
            + '<div class="center">'
              + '<img src="images/news/2.jpg">'
            + '</div>'
            + '<span>图为现场正在讨论问题</span>'
            + '<p>'
              + '很多同行业的品牌都有一个不错的故事，例如它们的历史、它们正在做的事'
              + '情、它们将要打造的未来。品牌故事不难讲，难的是你们怎样将所提供的服'
              + '务打造成一个被认可的品牌并让客户满意。这是橘子情感一直所关注的内容'
              + '，期间共有7位精英情感导师分享了自己的服务观点。'
            + '</p>'
            + '<div class="center">'
              + '<img src="images/news/3.jpg">'
            + '</div>'
            + '<span>图为嘉伟老师发表讲话</span>'
            + '<p>'
              + '“没有梦想的生活只能算是苟且，没有创新的生活也只是一潭死水。情感挽回'
              + '行业也是一样，需要不断的创新、进步。优化，带给客户最好的服务体验，'
              + '把从前我们观念中无法触及的领域变成现实。我们需要更多新的方法和新的可'
              + '能性，以及更新颖的服务理念。”橘子情感创始人嘉伟老师如是说。'
            + '</p>'
          + '</div>'
        + '</div>',
      new_02 : String() + 'new_02',
      new_03 : String() + 'new_03',
      new_04 : String() + 'new_04',
      new_05 : String() + 'new_05',
      new_06 : String() + 'new_06',
      new_07 : String() + 'new_07',
      new_08 : String() + 'new_08',
      new_09 : String() + 'new_09',
      new_10 : String() + 'new_10',
      new_11 : String() + 'new_11',
      new_12 : String() + 'new_12'
    },
    stateMap = { $container : null },
    jqueryMap = {},

    setJqueryMap, loadPage, changeAnchorPart,
    onHashchange, initModule;


  // setJqueryMap() - 缓存 jQuery 集合
  setJqueryMap = function () {
    var $container = stateMap.$container;
    jqueryMap = {
      $container : $container,
      $title     : $('head title')
    };
  };

  loadPage = function (key_name_value) {
    var news_info = configMap['news_info'];

    if (!configMap.hasOwnProperty(key_name_value)) {
      $.uriAnchor.setAnchor({});
      return false;
    }

    $( document ).scrollTop( 0 );
    jqueryMap.$container.html(configMap[key_name_value]);
    jqueryMap.$title
      .text('橘子情感 - ' + news_info[key_name_value]['title']);

    return false;
  };

  initModule = function (key_name_value) {
    stateMap.$container = $('.spa-main');
    setJqueryMap();

    loadPage(key_name_value);
  };

  return { initModule : initModule, configMap : configMap };
}());
