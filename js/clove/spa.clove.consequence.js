spa.clove.consequence=function(){var e,n,a={main_html:String()+'<div class="spa-module-title"><span class="spa-module-title-line"></span><p class="spa-module-title-txt">错误做法导致后果</p><span class="spa-module-title-line"></span></div>'},c={$consequence:null},s={};return e=function(){var e=c.$consequence;s={$consequence:e,$main:e.find(".clove-consequence-main"),$swiper_container:e.find(".swiper-container")}},function(){var e=new Swiper(s.$swiper_container,{onSlideChangeStart:function(){$(".clove-consequence-main .tabs .active").removeClass("active"),$(".clove-consequence-main .tabs span").eq(e.activeIndex).addClass("active")}});$(".clove-consequence-main .tabs span").on("touchstart mousedown",function(n){n.preventDefault(),$(".clove-consequence-main .tabs .active").removeClass("active"),$(this).addClass("active"),e.slideTo($(this).index())}),$(".clove-consequence-main .tabs span").click(function(e){e.preventDefault()})},n=function(n){c.$consequence=n,n.html(a.main_html),e()},{initModule:n}}();