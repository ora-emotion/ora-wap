/*
 * spa.about.dynamic.js
 * Dynamic module for ABOUT
 * 关于我们 - 橘子动态
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.about.dynamic = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">橘子动态</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'
        +  '</div class="about-dynamic-main">'
          + '<div class="about-dynamic-main-swiper">'
            + '<div class="swiper-container">'
                + '<div class="swiper-wrapper">'
                    + '<div class="swiper-slide">'
                      + '<img src="images/about/dynamic-swiper-pic01.png">'
                      + '<p class="swiper-slide-title">联合青岛大学举办分享讲座</p>'
                      + '<!-- <img src="images/about/dynamic-swiper-pic01.png"> -->'
                      + '<!-- <p class="swiper-slide-title">荣获杰出诚信企业称号</p> -->'
                    + '</div>'
                    + '<div class="swiper-slide">'
                      + '<img src="images/about/dynamic-swiper-pic02.png">'
                      + '<p class="swiper-slide-title">社会各界人士交流会</p>'
                    + '</div>'
                    + '<div class="swiper-slide">'
                      + '<img src="images/about/dynamic-swiper-pic03.png">'
                      + '<p class="swiper-slide-title">凤凰网人物访谈</p>'
                    + '</div>'
                + '</div>'
                + '<!-- Add Pagination -->'
                + '<div class="swiper-pagination"></div>'
            + '</div>'
          + '</div>'
          + '<div class="about-dynamic-main-bottom">'
            + '<div class="top">'
              + '<div class="item-group">'
                + '<div class="item">'
                  + '<img class="item-img" src="images/about/dynamic-bottom-pic01.png" alt="">'
                  + '<p class="item-title">第六届情感导师行业交流指导会</p>'
                  + '<p class="item-link">点击查看>>></p>'
                + '</div>'
                + '<div class="item">'
                  + '<img class="item-img" src="images/about/dynamic-bottom-pic02.png" alt="">'
                  + '<p class="item-title">橘子情感联合山东省创业中心举办中俄新兴行业交流会</p>'
                  + '<!-- <img class="item-img" src="images/about/dynamic-bottom-pic02.png" alt="">'
                  + '<p class="item-title">青岛市市南区区长社会保障局局长亲临视察指导工作</p> -->'
                  + '<p class="item-link">点击查看>>></p>'
                + '</div>'
              + '</div>'
              + '<div class="item-group">'
                + '<div class="item">'
                  + '<img class="item-img" src="images/about/dynamic-bottom-pic03.png" alt="">'
                  + '<p class="item-title">橘子情感，行业导师培植计划</p>'
                  + '<p class="item-link">点击查看>>></p>'
                + '</div>'
                + '<div class="item">'
                  + '<img class="item-img" src="images/about/dynamic-bottom-pic04.png" alt="">'
                  + '<p class="item-title">“暖爱计划”婚恋知识公益讲座</p>'
                  + '<p class="item-link">点击查看>>></p>'
                + '</div>'
              + '</div>'
            + '</div>'
            + '<div class="bottom">'
              + '<div class="item-group">'
                + '<div class="item active">'
                  + '<span class="item-title">客户远道而来，送来锦旗向导师团队致谢</span>'
                  + '<span class="item-link">点击查看>>></span>'
                + '</div>'
                + '<div class="item active">'
                  + '<span class="item-title">正确恋爱观讲座</span>'
                  + '<span class="item-link">点击查看>>></span>'
                + '</div>'
                + '<div class="item active">'
                  + '<span class="item-title">团队理论研发</span>'
                  + '<span class="item-link">点击查看>>></span>'
                + '</div>'
                + '<!-- <div class="item active">'
                  + '<span class="item-title">橘子情感联合青岛大学商学院举办创业就业经验分享讲座</span>'
                  + '<span class="item-link">点击查看>>></span>'
                + '</div>'
                + '<div class="item">'
                  + '<span class="item-title">橘子情感联合山东省创业中心举办中俄新兴行业交流会</span>'
                  + '<span class="item-link">点击查看>>></span>'
                + '</div> -->'
              + '</div>'
              + '<!-- 添加新闻之后，显示该按钮 -->'
              + '<!-- <span class="more">查看更多</span> -->'
            + '</div>'
          + '</div>'
        +  '</div>'
    },
    stateMap = { $dynamic : null },
    jqueryMap = {},

    setJqueryMap, swiper, initModule;

  setJqueryMap = function () {
    var $dynamic = stateMap.$dynamic;

    jqueryMap = {
      $dynamic    : $dynamic,
      $swiper     : $dynamic.find('.swiper-container'),
      $pagination : $dynamic.find('.swiper-pagination')
    };
  };

  swiper = function () {
    var mySwiper;
    mySwiper = new Swiper(jqueryMap.$swiper, {
      initialSlide   : 1,
      slidesPerView  : 2,
      centeredSlides : true,
      pagination     : jqueryMap.$pagination
    });
  };

  initModule = function ($dynamic) {
    stateMap.$dynamic = $dynamic;
    $dynamic.html(configMap.main_html);

    setJqueryMap();
    swiper();
  };
  return { initModule : initModule };
}());
