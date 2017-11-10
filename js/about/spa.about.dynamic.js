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
