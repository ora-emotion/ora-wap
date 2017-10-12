/*
 * spa.smistress.state.js
 * State module for Separate Mistress
 * 婚姻状况
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.smistress.state = (function () {
  var
    configMap = {
      main_html : String()
      + '<div class="spa-module-title">'
        + '<span class="spa-module-title-line"></span>'
        + '<p class="spa-module-title-txt">婚姻状况</p>'
        + '<span class="spa-module-title-line"></span>'
      +  '</div>'
    },
    initModule;

  initModule = function ($state) {
    $state.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
