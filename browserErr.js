videojs.registerPlugin('browserErr', function() {
  var myPlayer = this;

  myPlayer.errors({
        "errors": {
          "BROWSER_ERR": {
            "headline": "不支援您使用的瀏覽器",
            "message": "本站不支援IE ,請使用其他瀏覽器"
          }
         }
  });
  myPlayer.on("loadstart", function () {
     if (videojs.Hls && window.navigator.userAgent.indexOf("Trident") > 0) {
      myPlayer.error({code:'BROWSER_ERR',dismiss: false});
     }
  });
});
