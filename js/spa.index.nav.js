/*
 * spa.index.nav.js
 * navigation module for Index
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.index.nav = (function () {
  var
    configMap = {
      page_arr : [
        { page : 'save_love' },
        { page : 'save_marriage' },
        { page : 'separate_mistress' },
        { page : 'custom_love' },
        { page : 'emotion_forum' },
        { page : 'mentor_team' },
        { page : 'service_intro' },
        { page : 'about_us' },
      ],
      nav_html : String()
        + '<div class="index-nav-horizontal">'
          + '<div class="index-nav-horizontal-item">'
            + '<div class="index-nav-horizontal-item-icon"></div>'
            + '<p>挽回爱情</p>'
          + '</div>'
          + '<div class="index-nav-horizontal-item">'
            + '<div class="index-nav-horizontal-item-icon"></div>'
            + '<p>挽救婚姻</p>'
          + '</div>'
          + '<div class="index-nav-horizontal-item">'
            + '<div class="index-nav-horizontal-item-icon"></div>'
            + '<p>分离小三</p>'
          + '</div>'
          + '<div class="index-nav-horizontal-item">'
            + '<div class="index-nav-horizontal-item-icon"></div>'
            + '<p>定制爱情</p>'
          + '</div>'
        + '</div>'
        + '<div class="index-nav-horizontal">'
          + '<div class="index-nav-horizontal-item">'
            + '<div class="index-nav-horizontal-item-icon"></div>'
            + '<p>情感论坛</p>'
          + '</div>'
          + '<div class="index-nav-horizontal-item">'
            + '<div class="index-nav-horizontal-item-icon"></div>'
            + '<p>权威专家</p>'
          + '</div>'
          + '<div class="index-nav-horizontal-item">'
            + '<div class="index-nav-horizontal-item-icon"></div>'
            + '<p>服务介绍</p>'
          + '</div>'
          + '<div class="index-nav-horizontal-item">'
            + '<div class="index-nav-horizontal-item-icon"></div>'
            + '<p>关于我们</p>'
          + '</div>'
        + '</div>'
    },
    stateMap = { $nav : null },
    jqueryMap = {},
    setJqueryMap, onClickBtn, initModule;

  // Start : setJqueryMap()
  // 功能  : 缓存 jQuery 集合
  //
  setJqueryMap = function () {
    var $nav = stateMap.$nav;
    jqueryMap = {
      $nav   : $nav,
      $slove : $nav.find('.index-nav-horizontal:nth-child(1) .index-nav-horizontal-item:nth-child(1)')
    };
  };
  // End : setJqueryMap()

  //-------------------------- Start : 事件处理程序 -----------------------------
  onClickBtn = function () {
    // 挽回爱情
    // jqueryMap.$slove.click(function () {
    //   $.uriAnchor.setAnchor(configMap.page_arr[0]);
    // });
    // 挽救婚姻
    // 分离小三
    // 定制爱情
    // 情感论坛
    // 权威专家
    // 服务介绍
    // 关于我们
  };
  //--------------------------- End : 事件处理程序 ------------------------------

  // Start : initModule()
  // 功能  : 初始化模块
  //
  initModule = function ($nav) {
    stateMap.$nav = $nav;
    $nav.html(configMap.nav_html);
    setJqueryMap();

    onClickBtn();
  };
  // End : initModule()

  // 导出公开方法
  return { initModule : initModule };
}());
