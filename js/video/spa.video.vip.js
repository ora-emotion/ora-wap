/*
 * spa.video.vip.js
 * Vip Video module for SPA
 * 付费视频
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.video.vip = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="video-vip-main">'
          + '<div class="play">'
            + '<div class="play-group">'
              + '<video class="active" poster="images/video/video-poster.jpg" controls width="100%" height="550">'
                + '<!-- （一）视频总概 -->'
                + '<source src="../media/vip/preview.mp4" type="video/mp4">'
              + '</video>'
              + '<video poster="images/video/video-poster.jpg" controls width="100%" height="550">'
                + '<!-- （二）正确认识你和女生的关系 -->'
                + '<source src="../media/vip/relationship-with-girl.mp4" type="video/mp4">'
              + '</video>'
              + '<video poster="images/video/video-poster.jpg" controls width="100%" height="550">'
                + '<!-- （三）男女分类系统 -->'
                + '<source src="../media/vip/system-of-men-and-women.mp4" type="video/mp4">'
              + '</video>'
              + '<video poster="images/video/video-poster.jpg" controls width="100%" height="550">'
                + '<!-- （四）形象建设 -->'
                + '<source src="../media/vip/face-build.mp4" type="video/mp4">'
              + '</video>'
              + '<video poster="images/video/video-poster.jpg" controls width="100%" height="550">'
                + '<!-- （五）朋友圈建设 -->'
                + '<source src="../media/vip/friend-circle-build.mp4" type="video/mp4">'
              + '</video>'
              + '<video poster="images/video/video-poster.jpg" controls width="100%" height="550">'
                + '<!-- （六）展示面实例讲解 -->'
                + '<source src="../media/vip/interface-build.mp4" type="video/mp4">'
              + '</video>'
              + '<video poster="images/video/video-poster.jpg" controls width="100%" height="550">'
                + '<!-- （七）线下搭讪认识女生 -->'
                + '<source src="../media/vip/knock-girl-offline.mp4" type="video/mp4">'
              + '</video>'
              + '<video poster="images/video/video-poster.jpg" controls width="100%" height="550">'
                + '<!-- （八）线上收集资源 -->'
                + '<source src="../media/vip/collection-online.mp4" type="video/mp4">'
              + '</video>'
              + '<video poster="images/video/video-poster.jpg" controls width="100%" height="550">'
                + '<!-- （九）聊天理论 -->'
                + '<source src="../media/vip/chat.mp4" type="video/mp4">'
              + '</video>'
              + '<video poster="images/video/video-poster.jpg" controls width="100%" height="550">'
                + '<!-- （十）聊天案例分析 -->'
                + '<source src="../media/vip/chat-analyse.mp4" type="video/mp4">'
              + '</video>'
              + '<video poster="images/video/video-poster.jpg" controls width="100%" height="550">'
                + '<!-- （十一）与妹子相处时的常见问题 -->'
                + '<source src="../media/vip/normal-problem-with-girl.mp4" type="video/mp4">'
              + '</video>'
              + '<video poster="images/video/video-poster.jpg" controls width="100%" height="550">'
                + '<!-- （十二）如何与女生约会 -->'
                + '<source src="../media/vip/how-to-date-with-girl.mp4" type="video/mp4">'
              + '</video>'
              + '<video poster="images/video/video-poster.jpg" controls width="100%" height="550">'
                + '<!-- （十三）处理asd及发生亲密行为 -->'
                + '<source src="../media/vip/close-relationship.mp4" type="video/mp4">'
              + '</video>'
              + '<video poster="images/video/video-poster.jpg" controls width="100%" height="550">'
                + '<!-- （十四）长期关系 -->'
                + '<source src="../media/vip/long-relationship.mp4" type="video/mp4">'
              + '</video>'
              + '<video poster="images/video/video-poster.jpg" controls width="100%" height="550">'
                + '<!-- （十五）挽回心态和心法 -->'
                + '<source src="../media/vip/save-method.mp4" type="video/mp4">'
              + '</video>'
              + '<video poster="images/video/video-poster.jpg" controls width="100%" height="550">'
                + '<!-- （十六）挽回的具体操作和技巧 -->'
                + '<source src="../media/vip/how-to-save.mp4" type="video/mp4">'
              + '</video>'
              + '<video poster="images/video/video-poster.jpg" controls width="100%" height="550">'
                + '<!-- （十七）狙击真命 -->'
                + '<source src="../media/vip/jujizhenming.mp4" type="video/mp4">'
              + '</video>'
              + '<video poster="images/video/video-poster.jpg" controls width="100%" height="550">'
                + '<!-- （十八）同性恋挽回 -->'
                + '<source src="../media/vip/homosexuality.mp4" type="video/mp4">'
              + '</video>'
              + '<video poster="images/video/video-poster.jpg" controls width="100%" height="550">'
                + '<!-- （十九）女性挽回之挽回方式的正确运用 -->'
                + '<source src="../media/vip/female-method.mp4" type="video/mp4">'
              + '</video>'
              + '<video poster="images/video/video-poster.jpg" controls width="100%" height="550">'
                + '<!-- （二十）女性挽回之断联的作用和意义 -->'
                + '<source src="../media/vip/female-meaning.mp4" type="video/mp4">'
              + '</video>'
              + '<video poster="images/video/video-poster.jpg" controls width="100%" height="550">'
                + '<!-- （二十一）女性挽回之夫妻关系中的问题及处理方法 -->'
                + '<source src="../media/vip/female-man-and-wife.mp4" type="video/mp4">'
              + '</video>'
            + '</div>'
            + '<div class="txt-group">'
              + '<div class="item active">'
                + '<p class="play-title">（一）视频总览</p>'
                + '<div class="play-des-group">'
                  + '<span class="icon"></span>'
                  + '<p class="play-des">视频总览</p>'
                + '</div>'
              + '</div>'
              + '<div class="item">'
                + '<p class="play-title">（二）正确认识你和女生的关系</p>'
                + '<div class="play-des-group">'
                  + '<span class="icon"></span>'
                  + '<p class="play-des">正确认识你和女生的关系</p>'
                + '</div>'
              + '</div>'
              + '<div class="item">'
                + '<p class="play-title">（三）男女分类系统</p>'
                + '<div class="play-des-group">'
                  + '<span class="icon"></span>'
                  + '<p class="play-des">男女分类系统</p>'
                + '</div>'
              + '</div>'
              + '<div class="item">'
                + '<p class="play-title">（四）形象建设</p>'
                + '<div class="play-des-group">'
                  + '<span class="icon"></span>'
                  + '<p class="play-des">形象建设</p>'
                + '</div>'
              + '</div>'
              + '<div class="item">'
                + '<p class="play-title">（五）朋友圈建设</p>'
                + '<div class="play-des-group">'
                  + '<span class="icon"></span>'
                  + '<p class="play-des">朋友圈建设</p>'
                + '</div>'
              + '</div>'
              + '<div class="item">'
                + '<p class="play-title">（六）展示面实例讲解</p>'
                + '<div class="play-des-group">'
                  + '<span class="icon"></span>'
                  + '<p class="play-des">展示面实例讲解</p>'
                + '</div>'
              + '</div>'
              + '<div class="item">'
                + '<p class="play-title">（七）线下搭讪认识女生</p>'
                + '<div class="play-des-group">'
                  + '<span class="icon"></span>'
                  + '<p class="play-des">线下搭讪认识女生</p>'
                + '</div>'
              + '</div>'
              + '<div class="item">'
                + '<p class="play-title">（八）线上收集资源</p>'
                + '<div class="play-des-group">'
                  + '<span class="icon"></span>'
                  + '<p class="play-des">线上收集资源</p>'
                + '</div>'
              + '</div>'
              + '<div class="item">'
                + '<p class="play-title">（九）聊天理论</p>'
                + '<div class="play-des-group">'
                  + '<span class="icon"></span>'
                  + '<p class="play-des">聊天理论</p>'
                + '</div>'
              + '</div>'
              + '<div class="item">'
                + '<p class="play-title">（十）聊天案例分析</p>'
                + '<div class="play-des-group">'
                  + '<span class="icon"></span>'
                  + '<p class="play-des">聊天案例分析</p>'
                + '</div>'
              + '</div>'
              + '<div class="item">'
                + '<p class="play-title">（十一）与妹子相处时的常见问题</p>'
                + '<div class="play-des-group">'
                  + '<span class="icon"></span>'
                  + '<p class="play-des">与妹子相处时的常见问题</p>'
                + '</div>'
              + '</div>'
              + '<div class="item">'
                + '<p class="play-title">（十二）如何与女生约会</p>'
                + '<div class="play-des-group">'
                  + '<span class="icon"></span>'
                  + '<p class="play-des">如何与女生约会</p>'
                + '</div>'
              + '</div>'
              + '<div class="item">'
                + '<p class="play-title">（十三）处理asd及发生亲密行为</p>'
                + '<div class="play-des-group">'
                  + '<span class="icon"></span>'
                  + '<p class="play-des">处理asd及发生亲密行为</p>'
                + '</div>'
              + '</div>'
              + '<div class="item">'
                + '<p class="play-title">（十四）长期关系</p>'
                + '<div class="play-des-group">'
                  + '<span class="icon"></span>'
                  + '<p class="play-des">长期关系</p>'
                + '</div>'
              + '</div>'
              + '<div class="item">'
                + '<p class="play-title">（十五）挽回心态和心法</p>'
                + '<div class="play-des-group">'
                  + '<span class="icon"></span>'
                  + '<p class="play-des">挽回心态和心法</p>'
                + '</div>'
              + '</div>'
              + '<div class="item">'
                + '<p class="play-title">（十六）挽回的具体操作和技巧</p>'
                + '<div class="play-des-group">'
                  + '<span class="icon"></span>'
                  + '<p class="play-des">挽回的具体操作和技巧</p>'
                + '</div>'
              + '</div>'
              + '<div class="item">'
                + '<p class="play-title">（十七）狙击真命</p>'
                + '<div class="play-des-group">'
                  + '<span class="icon"></span>'
                  + '<p class="play-des">狙击真命</p>'
                + '</div>'
              + '</div>'
              + '<div class="item">'
                + '<p class="play-title">（十八）同性恋挽回</p>'
                + '<div class="play-des-group">'
                  + '<span class="icon"></span>'
                  + '<p class="play-des">同性恋挽回</p>'
                + '</div>'
              + '</div>'
              + '<div class="item">'
                + '<p class="play-title">（十九）女性挽回之挽回方式的正确运用</p>'
                + '<div class="play-des-group">'
                  + '<span class="icon"></span>'
                  + '<p class="play-des">女性挽回之挽回方式的正确运用</p>'
                + '</div>'
              + '</div>'
              + '<div class="item">'
                + '<p class="play-title">（二十）女性挽回之断联的作用和意义</p>'
                + '<div class="play-des-group">'
                  + '<span class="icon"></span>'
                  + '<p class="play-des">女性挽回之断联的作用和意义</p>'
                + '</div>'
              + '</div>'
              + '<div class="item">'
                + '<p class="play-title">（二十一）女性挽回之夫妻关系中的问题及处理方法</p>'
                + '<div class="play-des-group">'
                  + '<span class="icon"></span>'
                  + '<p class="play-des">女性挽回之夫妻关系中的问题及处理方法'
                  + '</p>'
                + '</div>'
              + '</div>'

            + '</div>'
          + '</div>'
          + '<div class="split-line"></div>'
          + '<div class="video-list">'
            + '<p class="video-title">选集</p>'
            + '<div class="swiper-container">'
              + '<div class="swiper-wrapper">'
                + '<div class="swiper-slide">'
                  + '<div class="item">'
                    + '<img src="images/video/video-poster.jpg" alt="">'
                    + '<p>（一）视频总概</p>'
                  + '</div>'
                + '</div>'
                + '<div class="swiper-slide">'
                  + '<div class="item">'
                    + '<img src="images/video/video-poster.jpg" alt="">'
                    + '<p>（二）正确认识你和女生的关系</p>'
                  + '</div>'
                + '</div>'
                + '<div class="swiper-slide">'
                  + '<div class="item">'
                    + '<img src="images/video/video-poster.jpg" alt="">'
                    + '<p>（三）男女分类系统</p>'
                  + '</div>'
                + '</div>'
                + '<div class="swiper-slide">'
                  + '<div class="item">'
                    + '<img src="images/video/video-poster.jpg" alt="">'
                    + '<p>（四）形象建设</p>'
                  + '</div>'
                + '</div>'
                + '<div class="swiper-slide">'
                  + '<div class="item">'
                    + '<img src="images/video/video-poster.jpg" alt="">'
                    + '<p>（五）朋友圈建设</p>'
                  + '</div>'
                + '</div>'
                + '<div class="swiper-slide">'
                  + '<div class="item">'
                    + '<img src="images/video/video-poster.jpg" alt="">'
                    + '<p>（六）展示面实例讲解</p>'
                  + '</div>'
                + '</div>'
                + '<div class="swiper-slide">'
                  + '<div class="item">'
                    + '<img src="images/video/video-poster.jpg" alt="">'
                    + '<p>（七）线下搭讪认识女生</p>'
                  + '</div>'
                + '</div>'
                + '<div class="swiper-slide">'
                  + '<div class="item">'
                    + '<img src="images/video/video-poster.jpg" alt="">'
                    + '<p>（八）线上收集资源</p>'
                  + '</div>'
                + '</div>'
                + '<div class="swiper-slide">'
                  + '<div class="item">'
                    + '<img src="images/video/video-poster.jpg" alt="">'
                    + '<p>（九）聊天理论</p>'
                  + '</div>'
                + '</div>'
                + '<div class="swiper-slide">'
                  + '<div class="item">'
                    + '<img src="images/video/video-poster.jpg" alt="">'
                    + '<p>（十）聊天案例分析</p>'
                  + '</div>'
                + '</div>'
                + '<div class="swiper-slide">'
                  + '<div class="item">'
                    + '<img src="images/video/video-poster.jpg" alt="">'
                    + '<p>（十一）与妹子相处时的常见问题</p>'
                  + '</div>'
                + '</div>'
                + '<div class="swiper-slide">'
                  + '<div class="item">'
                    + '<img src="images/video/video-poster.jpg" alt="">'
                    + '<p>（十二）如何与女生约会</p>'
                  + '</div>'
                + '</div>'
                + '<div class="swiper-slide">'
                  + '<div class="item">'
                    + '<img src="images/video/video-poster.jpg" alt="">'
                    + '<p>（十三）处理asd及发生亲密行为</p>'
                  + '</div>'
                + '</div>'
                + '<div class="swiper-slide">'
                  + '<div class="item">'
                    + '<img src="images/video/video-poster.jpg" alt="">'
                    + '<p>（十四）长期关系</p>'
                  + '</div>'
                + '</div>'
                + '<div class="swiper-slide">'
                  + '<div class="item">'
                    + '<img src="images/video/video-poster.jpg" alt="">'
                    + '<p>（十五）挽回心态和心法</p>'
                  + '</div>'
                + '</div>'
                + '<div class="swiper-slide">'
                  + '<div class="item">'
                    + '<img src="images/video/video-poster.jpg" alt="">'
                    + '<p>（十六）挽回的具体操作和技巧</p>'
                  + '</div>'
                + '</div>'
                + '<div class="swiper-slide">'
                  + '<div class="item">'
                    + '<img src="images/video/video-poster.jpg" alt="">'
                    + '<p>（十七）狙击真命</p>'
                  + '</div>'
                + '</div>'
                + '<div class="swiper-slide">'
                  + '<div class="item">'
                    + '<img src="images/video/video-poster.jpg" alt="">'
                    + '<p>（十八）同性恋挽回</p>'
                  + '</div>'
                + '</div>'

                + '<!-- 2017.10.24 更新 -->'
                + '<div class="swiper-slide">'
                  + '<div class="item">'
                    + '<img src="images/video/video-poster.jpg" alt="">'
                    + '<p>（十九）女性挽回之挽回方式的正确运用</p>'
                  + '</div>'
                + '</div>'

                + '<div class="swiper-slide">'
                  + '<div class="item">'
                    + '<img src="images/video/video-poster.jpg" alt="">'
                    + '<p>（二十）女性挽回之断联的作用和意义</p>'
                  + '</div>'
                + '</div>'

                + '<div class="swiper-slide">'
                  + '<div class="item">'
                    + '<img src="images/video/video-poster.jpg" alt="">'
                    + '<p>（二十一）女性挽回之夫妻关系中的问题及处理方法</p>'
                  + '</div>'
                + '</div>'

              + '</div>'
            + '</div>'
          + '</div>'
        + '</div>'
    },
    stateMap = { $vip_video : null },
    jqueryMap = {},

  setJqueryMap, swiper, onClick, initModule;

  setJqueryMap = function () {
    var $vip_video = stateMap.$vip_video;

    jqueryMap = {
      $vip_video : $vip_video,
      $video_list_item : $vip_video.find('.video-list .swiper-slide .item'),
      $video_group     : $vip_video.find('.play .play-group'),
      $txt_group       : $vip_video.find('.play .txt-group'),
      $swiper          : $vip_video.find('.swiper-container'),
      $preface         : $vip_video.siblings('.spa-preface')
    };
  };

  swiper = function () {
    var mySwiper;
    mySwiper = new Swiper(jqueryMap.$swiper, {
      slidesPerView : 2.5
    });
  };

  onClick = function () {
    jqueryMap.$video_list_item.click(function () {
      var _index = $(this).parent().index();

      // 切换当前播放的视频
      jqueryMap.$video_group.find( 'video' ).removeClass( 'active' );
      $( jqueryMap.$video_group.find( 'video' )[_index] ).addClass( 'active' );

      jqueryMap.$txt_group.find( '.item' ).removeClass( 'active' );
      $( jqueryMap.$txt_group.find( '.item' )[_index] ).addClass( 'active' );
    });
  };

  initModule = function ($vip_video) {
    stateMap.$vip_video = $vip_video;
    // $vip_video.html(configMap.main_html);
    $vip_video.html('付费视频付费视频付费视频付费视频付费视频付费视频付费视频');

    setJqueryMap();
    swiper();
    onClick();

    // 移除页面顶部图片
    jqueryMap.$preface.remove();
  };

  return { initModule : initModule };
}());
