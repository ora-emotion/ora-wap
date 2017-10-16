/*
 * spa.smarriage.example.js
 * Example module for Save Marriage
 * 成功案例
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.smarriage.example = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">成功案例</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'

        + '<div class="smarriage-example-main">'
          + '<div class="smarriage-example-main-item">'
            + '<p>挽回老公的心，让婚姻走出“出轨”阴影</p>'
            + '<p>'
              + '我和老公恋爱了两年，结婚也有五年了。在孩子出生后，我开始专心在家里'
              + '带孩子，可我发现老公在外面有了别的女人。知道这个消息的时候我很崩溃，'
              + '老公不要我们了，我和孩子该怎么办？我还能挽回老公的心吗？'
            + '</p>'
          + '</div>'
          + '<div class="smarriage-example-main-item">'
            + '<p>维持好长期婚姻关系，让生活不再磕磕绊绊</p>'
            + '<p>'
              + '公婆有点重男轻女，在女儿出生之后，我和公婆的关系降到冰点。为了照顾'
              + '女儿，我只能在家里做全职妈妈。因为孩子的问题，我们开始争吵，他开始'
              + '敷衍我，对我和女儿都变得冷淡起来，我本来以为这只是短时间的事情，直'
              + '到他提了离婚……'
            + '</p>'
          + '</div>'
        + '</div>'

    },
    initModule;

  initModule = function ($example) {
    $example.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
