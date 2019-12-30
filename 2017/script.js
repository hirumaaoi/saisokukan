var fadeDelay,scrollTop;

$(window).on("load", function(){topPage(2000); });

function topPage(fadeDelay){

$(window).on("scroll",function(){
  scrollTop = $(window).scrollTop();
if(scrollTop > 30){  $("footer").addClass("bgWhite"); $(".crossfade,.ttl_wrap").addClass("fadeOut");}
else {$("footer").removeClass("bgWhite"); $(".crossfade,.ttl_wrap").removeClass("fadeOut");}
});

  setTimeout(function(){
  $("#canvasOverlay").animate({opacity:0},fadeDelay,function(){$(this).remove()});
		$("#myCanvas").delay(fadeDelay).animate({opacity:0},function(){$(this).remove()});
	$(".svg_logo,#shiro").addClass("stopTop");
	$("#contents").addClass("bottomScroll").removeClass("bgw");
},1500);
}

// (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
// (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
// m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
// })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
//
// ga('create', 'UA-62035241-1', 'auto');
// ga('send', 'pageview');
