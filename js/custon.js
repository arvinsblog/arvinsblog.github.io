/* 离开当前页面时修改网页标题，回到当前页面时恢复原来标题 */
window.onload = function() {
  var OriginTitile = document.title;
  var titleTime;
  document.addEventListener('visibilitychange', function() {
    if(document.hidden) {
      $('[rel="icon"]').attr('href', "/favicion.ico");
      $('[rel="shortcut icon"]').attr('href', "/fail.ico");
      document.title = '糟糕，崩溃啦！';
      clearTimeout(titleTime);
    } else {
      $('[rel="icon"]').attr('href', "/fail.ico");
      $('[rel="shortcut icon"]').attr('href', "/favicion.ico");
      document.title = '咦，逗你的！';
      titleTime = setTimeout(function() {
        document.title = OriginTitile;
      }, 2000);
	}
  });
}

//设置页脚博主
$(document).ready(function(e) {
  // 自己的请自行更改
  var since = 2020;
  var name = 'Arvin';
  var now = new Date();
  var nowYear = now.getFullYear();
  since = since == nowYear?since:since+" - "+nowYear;
  $('.copyright').html('©'+since+' <i style="color:#FF6A6A;animation: announ_animation 0.8s linear infinite;" class="fa fa-heartbeat"></i> '+name);
  
});


// 百度自动推送
(function(){
  var bp = document.createElement('script');
  var curProtocol = window.location.protocol.split(':')[0];
  if (curProtocol === 'https') {
      bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';        
  }
  else {
      bp.src = 'http://push.zhanzhang.baidu.com/push.js';
  }
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(bp, s);
})();


