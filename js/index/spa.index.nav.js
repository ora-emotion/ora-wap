spa.index.nav=function(){var i,n,a,o={page_arr:[{page:"save_love"},{page:"save_marriage"},{page:"separate_mistress"},{page:"custom_love"},{page:"emotion_forum"},{page:"mentor_team"},{page:"service_intro"},{page:"about_us"}],nav_html:String()+'<div class="index-nav-horizontal"><div class="index-nav-horizontal-item"><div class="index-nav-horizontal-item-icon"></div><p>挽回爱情</p></div><div class="index-nav-horizontal-item"><div class="index-nav-horizontal-item-icon"></div><p>挽救婚姻</p></div><div class="index-nav-horizontal-item"><div class="index-nav-horizontal-item-icon"></div><p>分离小三</p></div><div class="index-nav-horizontal-item"><div class="index-nav-horizontal-item-icon"></div><p>定制爱情</p></div></div><div class="index-nav-horizontal"><div class="index-nav-horizontal-item"><div class="index-nav-horizontal-item-icon"></div><p>情感论坛</p></div><div class="index-nav-horizontal-item"><div class="index-nav-horizontal-item-icon"></div><p>权威专家</p></div><div class="index-nav-horizontal-item"><div class="index-nav-horizontal-item-icon"></div><p>服务介绍</p></div><div class="index-nav-horizontal-item"><div class="index-nav-horizontal-item-icon"></div><p>关于我们</p></div></div>'},t={$nav:null},e={};return i=function(){var i=t.$nav;e={$nav:i,$slove:i.find(".index-nav-horizontal:nth-child(1) .index-nav-horizontal-item:nth-child(1)"),$smarriage:i.find(".index-nav-horizontal:nth-child(1) .index-nav-horizontal-item:nth-child(2)"),$smistress:i.find(".index-nav-horizontal:nth-child(1) .index-nav-horizontal-item:nth-child(3)"),$clove:i.find(".index-nav-horizontal:nth-child(1) .index-nav-horizontal-item:nth-child(4)"),$forum:i.find(".index-nav-horizontal:nth-child(2) .index-nav-horizontal-item:nth-child(1)"),$mentor:i.find(".index-nav-horizontal:nth-child(2) .index-nav-horizontal-item:nth-child(2)"),$service:i.find(".index-nav-horizontal:nth-child(2) .index-nav-horizontal-item:nth-child(3)"),$about:i.find(".index-nav-horizontal:nth-child(2) .index-nav-horizontal-item:nth-child(4)")}},n=function(){e.$slove.click(function(){$.uriAnchor.setAnchor(o.page_arr[0])}),e.$smarriage.click(function(){$.uriAnchor.setAnchor(o.page_arr[1])}),e.$smistress.click(function(){$.uriAnchor.setAnchor(o.page_arr[2])}),e.$clove.click(function(){$.uriAnchor.setAnchor(o.page_arr[3])}),e.$forum.click(function(){$.uriAnchor.setAnchor(o.page_arr[4])}),e.$mentor.click(function(){$.uriAnchor.setAnchor(o.page_arr[5])}),e.$service.click(function(){$.uriAnchor.setAnchor(o.page_arr[6])}),e.$about.click(function(){$.uriAnchor.setAnchor(o.page_arr[7])})},a=function(a){t.$nav=a,a.html(o.nav_html),i(),n()},{initModule:a}}();