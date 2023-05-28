<!DOCTYPE html>
<html>
<head>
 <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="chrome=1, IE=Edge" />
  <meta name="format-detection" content="telephone=no">
  <meta name="HandheldFriendly" content="true" />
  <meta name="robots" content="noindex,nofollow" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  <meta name="apple-mobile-web-app-title" content="TT Studio">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <title>Bren Numbers</title>
  <style type="text/css">
    html, body, #game-container {margin: 0; width: 100%; height: 100%;}
    h1, .copy {display: none; font-family: saucer_bbregular;}
  </style>
</head>
<body>
  <h1>Bren Numbers</h1>
  <main class="main" role="main">
    <div id="game-container"></div>
  </main>
  <footer class="copy">&copy; TT Studio 2014</footer>
  <script src="http://172.16.1.119:8080/target/target-script-min.js#bren"></script>
  <script src="assets/libs/state-machine.min.js"></script>
  <script src="assets/libs/phaser.min.js"></script>
  <script src="assets/libs/helper.js?_=<?php echo rand(); ?>"></script>
  <script src="assets/libs/phaser.helper.js?_=<?php echo rand(); ?>"></script>
  <script src="model.js"></script>
  <script src="player.js"></script>
  <script src="menu.js?_=<?php echo rand(); ?>"></script>
  <script src="loading.js?_=<?php echo rand(); ?>"></script>
  <script src="play.js?_=<?php echo rand(); ?>"></script>
  <script src="result.js?_=<?php echo rand(); ?>"></script>
  <script src="game.js?_=<?php echo rand(); ?>"></script>
  <script src="assets/libs/webfont.js"></script>
  <script type="text/javascript">
    window.onload = function () {
      TTGame.start();
    };
  </script>
</body>
</html>