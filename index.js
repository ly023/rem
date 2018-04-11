(function () {
    var designWidth = 750; // 效果图宽度
    var designFont = 100; // 效果图下对应的html字体大小
    var maxFontSize = 54; // html最大font-size

    var rem = function(){
      var width = document.documentElement.clientWidth || window.innerWidth;  // 屏幕可视区域的宽度
      var fontSize = width / designWidth * designFont;
      document.documentElement.style.fontSize = Math.min(maxFontSize, fontSize) + 'px';
    };

    // rem();

    document.addEventListener("DOMContentLoaded", function() {
      rem();
    }, false);

    window.addEventListener('resize', function(){
      rem();
    }, false);

    // window.addEventListener('load', function() {
    //   rem();
    // }, false);

})();


