videojs.registerPlugin('browserErr', function() {
  var myPlayer = this;

  myPlayer.errors({
        "errors": {
          "BROWSER_ERR": {
            "headline": "Your Browser is not supported",
            "message": "IE is not a supported browser, please change the browser that you are using."
          }
         dismiss: false
        }
  });
  myPlayer.on("loadstart", function () {
     if (videojs.Hls && window.navigator.userAgent.indexOf("Trident") > 0) {
      myPlayer.error({code:'BROWSER_ERR'});
     }
  });
});
