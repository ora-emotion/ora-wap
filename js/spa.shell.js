/*
 * spa.shell.js
 * Shell module for SPA
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.shell = (function () {
  var
    configMap = {
      anchor_schema_map : {
        news : {
          new_01 : true, new_02 : true, new_03 : true, new_04 : true,
          new_05 : true, new_06 : true, new_07 : true, new_08 : true,
          new_09 : true, new_10 : true, new_11 : true, new_12 : true
        },
        page : {
          save_love         : true, save_marriage : true,
          separate_mistress : true, custom_love   : true,
          emotion_forum     : true, mentor_team   : true,
          service_intro     : true, about_us      : true
        }
      },
      main_html : String()
        + '<header class="spa-header"></header>'
        + '<div class="spa-preface"></div>'
        + '<div class="spa-main"></div>'
        + '<footer class="spa-footer"></footer>',
      news_detail : {},
      page_detail : {}
    },
    stateMap = {
      $container : null,
      anchor_map : {},
      scroll : null
    },
    jqueryMap = {},
    root_ele,      device_width,
    setJqueryMap,  mergeConfigMap,
    fontAutomatic, /*watchScroll,*/ loadCommonModule,
    checkAnchor,   loadPage,
    onHashchange,  initModule;

  // Start : setJqueryMap()
  // 功能  : 缓存 jQuery 集合
  //
  setJqueryMap = function () {
    var $container = stateMap.$container;
    jqueryMap = {
      $container : $container,
      $header    : $container.find('.spa-header'),
      $preface   : $container.find('.spa-preface'),
      $main      : $container.find('.spa-main'),
      $footer    : $container.find('.spa-footer')
    };
  };
  // End : jqueryMap()

  // Start : mergeConfigMap()
  // 合并配置项，用于检查
  //
  mergeConfigMap = function () {
    var
      news_detail = spa.data.news.configMap;

    news_detail = $.extend(true, configMap.news_detail, news_detail);
  };
  // End : mergeConfigMap()

  // Start fontAutomatic()
  // 功能   :
  //   * 动态调整字体大小
  // 返回值 :none
  // 说明   :
  //   * root_ele     - html 元素
  //   * device_width - 设备宽度
  //
  fontAutomatic = function () {
    root_ele     = document.documentElement;
    device_width = root_ele.clientWidth;

    // 根元素字体大小 - 以 iPhone6 为准
    root_ele.style.fontSize   = device_width / 7.5 + 'px';

    // 当页面缩放时，动态更改字体大小
    window.onresize = function () {
      root_ele     = document.documentElement;
      device_width = root_ele.clientWidth;
      root_ele.style.fontSize = device_width / 7.5 + 'px';
    };

  };
  // End fontAutoMatic()

  // watchScroll = function () {
  //   i = 0;
  //
  //   $(window).scroll(function () {
  //     stateMap.scroll_top.previous = $(document).scrollTop();
  //     console.log(stateMap.scroll_top.previous);
  //   });
  //
  // };

  // Start : loadCommonModule() - 加载公共模块
  // 功能  : 加载公共模块
  //
  loadCommonModule = function () {
    spa.shell.header.initModule(jqueryMap.$header);
    spa.shell.preface.initModule(jqueryMap.$preface);
    spa.shell.footer.initModule(jqueryMap.$footer);
  };
  // End : loadCommonModule();

  // Start : checkAnchor()
  // 功能  :
  //   * 用于检查地址栏的哈西片段是否有对应的页面检查如果所检查的哈西片段没有对应
  //     页面，则返回首页
  //
  checkAnchor = function (key_name) {
    var anchor_map = $.uriAnchor.makeAnchorMap();

    delete anchor_map['_s_' + key_name];

    if (key_name === 'news') {
      spa.data.news.initModule(anchor_map[key_name]);
    }
    else if (key_name === 'page') {
      switch (anchor_map[key_name]) {
        case 'save_love' :          // 挽回爱情
          // stateMap.scroll = $(document).scrollTop();
          spa.slove.initModule(jqueryMap.$container, jqueryMap.$main);
          // $(document).scrollTop(0);
          break;
        case 'save_marriage' :      // 挽救婚姻
          spa.smarriage.initModule(jqueryMap.$container, jqueryMap.$main);
          break;
        case 'separate_mistress' :  // 分离小三
          spa.smistress.initModule(jqueryMap.$container, jqueryMap.$main);
          break;
        case 'custom_love' :        // 定制爱情
          spa.clove.initModule(jqueryMap.$container, jqueryMap.$main);
          break;
        case 'emotion_forum' :      // 情感论坛
          spa.forum.initModule(jqueryMap.$container, jqueryMap.$main);
          break;
        case 'mentor_team' :        // 权威专家
          spa.mentor.initModule(jqueryMap.$container, jqueryMap.$main);
          break;
        case 'service_intro' :      // 服务介绍
          spa.service.initModule(jqueryMap.$container, jqueryMap.$main);
          break;
        case 'about_us' :           // 关于我们
          spa.about.initModule(jqueryMap.$container, jqueryMap.$main);
          break;
        default:                    // 回到首页
          $.uriAnchor.setAnchor({});
          break;
      }
    }
    else if (key_name === 'case') {
      switch (anchor_map[key_name]) {
        case 'case_01' :
          spa.data.case.initModule(jqueryMap.$container, anchor_map[key_name]);
          break;
        case 'case_02' :
          spa.data.case.initModule(jqueryMap.$container, anchor_map[key_name]);
          break;
        case 'case_03' :
          spa.data.case.initModule(jqueryMap.$container, anchor_map[key_name]);
          break;
        case 'case_04' :
          spa.data.case.initModule(jqueryMap.$container, anchor_map[key_name]);
          break;
        case 'case_05' :
          spa.data.case.initModule(jqueryMap.$container, anchor_map[key_name]);
          break;
        case 'case_06' :
          spa.data.case.initModule(jqueryMap.$container, anchor_map[key_name]);
          break;
        case 'case_07' :
          spa.data.case.initModule(jqueryMap.$container, anchor_map[key_name]);
          break;
        case 'case_08' :
          spa.data.case.initModule(jqueryMap.$container, anchor_map[key_name]);
          break;
        case 'case_09' :
          spa.data.case.initModule(jqueryMap.$container, anchor_map[key_name]);
          break;
        case 'case_10' :
          spa.data.case.initModule(jqueryMap.$container, anchor_map[key_name]);
          break;
        default:
          break;
      }
    }

    return false;
  };
  // End : checkAnchor()

  // Start : loadPage()
  // 功能  : 加载子页面
  //
  loadPage = function (arg_map) {
    var is_key_name_exist = false, key_name, preface_img;

    for (key_name in arg_map) {
      if (arg_map.hasOwnProperty(key_name)) {
        is_key_name_exist = true;
        delete arg_map['_s_' + key_name];
      }
    }

    if (is_key_name_exist) {
      // 通过地址栏中的哈西片段定位到对应页面
      switch (key_name) {
        case 'news' :
          checkAnchor(key_name);
          break;
        case 'page' :
          checkAnchor(key_name);
          break;
        case 'case' :
          checkAnchor(key_name);
          break;
        default:
          break;
      }
    }

    // 若地址栏中的哈西片段没有对应的页面，加载首页
    if (!is_key_name_exist) {
      preface_img = jqueryMap.$container.find('.spa-preface img');

      spa.index.initModule( jqueryMap.$main );

      $(document).scrollTop(stateMap.scroll);

      preface_img.attr('src', 'images/index/preface.png');
    }

  };
  // End : loadPage()

  // Start : onHashchange()
  // 功能  : 监听地址栏哈西片段
  //
  onHashchange = function () {
    var anchor_map = $.uriAnchor.makeAnchorMap();
    loadPage(anchor_map);
  };
  // End : onHashchange()

  // initModule() - 初始化模块
  initModule = function ($container) {
    stateMap.$container = $container;
    $container.html(configMap.main_html);
    setJqueryMap();

    mergeConfigMap();
    fontAutomatic();
    loadCommonModule();

    // 加载首页主内容区域
    spa.index.initModule(jqueryMap.$main);

    $(window)
      .bind('hashchange', onHashchange)
      .trigger('hashchange');
  };

  // 导出公开方法
  return { initModule : initModule };
}());
