spa.shell=function(){var e,a,n,i,s,t,o,c,r,d,l={anchor_schema_map:{news:{new_01:!0,new_02:!0,new_03:!0,new_04:!0,new_05:!0,new_06:!0,new_07:!0,new_08:!0,new_09:!0,new_10:!0,new_11:!0,new_12:!0},page:{save_love:!0,save_marriage:!0,separate_mistress:!0,custom_love:!0,emotion_forum:!0,mentor_team:!0,service_intro:!0,about_us:!0}},main_html:String()+'<header class="spa-header"></header><div class="spa-preface"></div><div class="spa-main"></div><footer class="spa-footer"></footer>',news_detail:{},page_detail:{}},m={$container:null,anchor_map:{}},_={};return n=function(){var e=m.$container;_={$container:e,$header:e.find(".spa-header"),$preface:e.find(".spa-preface"),$main:e.find(".spa-main"),$footer:e.find(".spa-footer")}},i=function(){var e=spa.data.news.configMap;e=$.extend(!0,l.news_detail,e)},s=function(){e=document.documentElement,a=e.clientWidth,e.style.fontSize=a/7.5+"px",window.onresize=function(){e=document.documentElement,a=e.clientWidth,e.style.fontSize=a/7.5+"px"}},t=function(){spa.shell.header.initModule(_.$header),spa.shell.preface.initModule(_.$preface),spa.shell.footer.initModule(_.$footer)},o=function(e){var a=$.uriAnchor.makeAnchorMap();if(delete a["_s_"+e],"news"===e)spa.data.news.initModule(a[e]);else if("page"===e)switch(a[e]){case"save_love":spa.slove.initModule(_.$container,_.$main);break;case"save_marriage":spa.smarriage.initModule(_.$container,_.$main);break;case"separate_mistress":spa.smistress.initModule(_.$container,_.$main);break;case"custom_love":spa.clove.initModule(_.$container,_.$main);break;case"emotion_forum":spa.forum.initModule(_.$container,_.$main);break;case"mentor_team":spa.mentor.initModule(_.$container,_.$main);break;case"service_intro":spa.service.initModule(_.$container,_.$main);break;case"about_us":spa.about.initModule(_.$container,_.$main)}else if("case"===e)switch(a[e]){case"case_01":case"case_02":case"case_03":case"case_04":case"case_05":case"case_06":case"case_07":case"case_08":case"case_09":case"case_10":spa.data.case.initModule(_.$container,a[e])}return!1},c=function(e){var a,n,i=!1;for(a in e)e.hasOwnProperty(a)&&(i=!0,delete e["_s_"+a]);if(i)switch(a){case"news":case"page":case"case":o(a);break;default:$.uriAnchor.setAnchor({})}i||(n=_.$container.find(".spa-preface img"),spa.index.initModule(_.$main),n.attr("src","images/index/preface.png"))},r=function(){var e=$.uriAnchor.makeAnchorMap();$(document).scrollTop(0),c(e)},d=function(e){m.$container=e,e.html(l.main_html),n(),i(),s(),t(),spa.index.initModule(_.$main),$(window).bind("hashchange",r).trigger("hashchange")},{initModule:d}}();