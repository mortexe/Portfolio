function hasScrolled(){var o=$(this).scrollTop();Math.abs(lastScrollTop-o)<=delta||(o>lastScrollTop&&o>navbarHeight?($("nav").removeClass("nav-bar").addClass("nav-up"),$("nav").css("opacity","0")):o+$(window).height()<$(document).height()&&($("nav").removeClass("nav-up").addClass("nav-bar"),$("nav").css("opacity",".7")),lastScrollTop=o)}var didScroll,lastScrollTop=0,delta=5,navbarHeight=$("header .nav-bar").outerHeight();$(window).scroll(function(o){didScroll=!0}),setInterval(function(){didScroll&&(hasScrolled(),didScroll=!1)},250),$(window).resize(function(){$(window).width()<990?$("#border.about").show():$("#border.about").hide()}).resize(),$("body").on("click",".pointer-wrap a",function(){$("html, body").animate({scrollTop:$(".container").offset().top},1e3)}),$("body").on("click",".pointer-wrap svg",function(){$("html, body").animate({scrollTop:$(".container").offset().top},1e3)}),$("body").on("click touchstart","#button-top h4",function(){$("html, body").animate({scrollTop:$(".email-sect").offset().top},1500)}),$("body").on("click touchstart",".serv",function(){$("html, body").animate({scrollTop:$(".services").offset().top},1e3)}),$("body").on("click touchstart",".work",function(){$("html, body").animate({scrollTop:$(".work-sect").offset().top},1e3)}),$("body").on("click touchstart",".about",function(){$("html, body").animate({scrollTop:$(".about-sect").offset().top},1e3)}),$("body").on("click touchstart",".cont",function(){$("html, body").animate({scrollTop:$(".email-sect").offset().top},1e3)}),$("body").on("click",".btn",function(){$("body").css("overflow-y","hidden"),$("body").css("overflow-x","hidden")}).on("click",".cd-modal-close",function(){$("body").css("overflow-x","visible"),$("body").css("overflow-y","visible")});