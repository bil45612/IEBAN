videojs.registerPlugin('browserErr', function() {
  var myPlayer = this;

  myPlayer.errors({
        "errors": {
          "BROWSER_ERR": {
            "headline": "Your Browser is not supported",
            "message": "IE 不支援, please change the browser that you are using."
          }
         }
  });
  myPlayer.on("loadstart", function () {
     if (videojs.Hls && window.navigator.userAgent.indexOf("Trident") > 0) {
      myPlayer.error({code:'BROWSER_ERR',dismiss: false});
     }
  });
});
