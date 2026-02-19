/**
 * Shared layout for Bowler Stats site: theme, background orbs, header, footer.
 * Each page only needs <div id="main-content">...</div>; this script injects the rest.
 */
(function () {
  document.documentElement.setAttribute('data-theme', 'dark');

  var BOT_USER_ID = '1267307127609884793';
  var BOT_AVATAR_HASH = 'ce24d7a3738c1ba8251322ee7cf907fe';

  function getLayoutHTML(mainContent) {
    return (
      '<div class="bg-canvas" aria-hidden="true">' +
        '<div class="bg-glow bg-glow--tl"></div>' +
        '<div class="bg-glow bg-glow--tr"></div>' +
        '<div class="bg-glow bg-glow--bl"></div>' +
        '<div class="bg-glow bg-glow--br"></div>' +
      '</div>' +
      '<div class="container">' +
        '<div class="top-bar">' +
          '<header class="top-bar__header site-header">' +
            '<a href="index.html" class="header-title-row">' +
              '<img id="bot-avatar" src="" alt="" width="40" height="40">' +
              '<h1>Bowler Stats</h1>' +
            '</a>' +
          '</header>' +
          '<nav class="top-bar__nav site-nav" aria-label="Site">' +
            '<ul>' +
              '<li><a href="index.html">Home</a></li>' +
              '<li><a href="features.html">Features</a></li>' +
              '<li><a href="commands.html">Commands</a></li>' +
              '<li><a href="privacy.html">Privacy Policy</a></li>' +
              '<li><a href="terms.html">Terms of Service</a></li>' +
            '</ul>' +
          '</nav>' +
        '</div>' +
        mainContent +
        '<footer>' +
          '<p>Bowler Stats • <a href="index.html">Home</a> • <a href="features.html">Features</a> • <a href="commands.html">Commands</a> • <a href="privacy.html">Privacy Policy</a> • <a href="terms.html">Terms of Service</a></p>' +
          '<p class="footer-disclaimer">Bowler Stats is not affiliated with, endorsed by, or sponsored by Supercell. It is operated in line with the <a href="https://supercell.com/en/fan-content-policy/" target="_blank" rel="noopener">Supercell Fan Content Policy</a>.</p>' +
        '</footer>' +
      '</div>'
    );
  }

  var GLOW_FADE_IN_MS = 2200;
  var GLOW_FADE_OUT_MS = 2500;
  var GLOW_OPACITY_MIN = 0.35;
  var GLOW_OPACITY_MAX = 0.62;
  var GLOW_VISIBLE_MS_MIN = 4000;
  var GLOW_VISIBLE_MS_MAX = 11000;
  var GLOW_HIDDEN_MS_MIN = 2000;
  var GLOW_HIDDEN_MS_MAX = 7000;
  var GLOW_FIRST_DELAY_MS_MIN = 0;
  var GLOW_FIRST_DELAY_MS_MAX = 9000;
  var GLOW_SIZE_MIN_PCT = 42;
  var GLOW_SIZE_MAX_PCT = 74;

  function randomBetween(min, max) {
    return min + Math.random() * (max - min);
  }

  function getGlows() {
    return document.querySelectorAll('.bg-canvas .bg-glow');
  }

  function countVisibleGlows(excludeGlow) {
    var glows = getGlows();
    var n = 0;
    for (var i = 0; i < glows.length; i++) {
      if (glows[i] === excludeGlow) continue;
      if (parseFloat(glows[i].style.opacity) > 0) n++;
    }
    return n;
  }

  function setGlowRandomSize(glow) {
    var pct = Math.round(randomBetween(GLOW_SIZE_MIN_PCT, GLOW_SIZE_MAX_PCT));
    glow.style.width = pct + '%';
    glow.style.height = pct + '%';
  }

  function scheduleGlowFadeIn(glow, immediate) {
    var isFirst = !glow._glowScheduled;
    glow._glowScheduled = true;
    var delay = immediate ? 0 : (isFirst
      ? randomBetween(GLOW_FIRST_DELAY_MS_MIN, GLOW_FIRST_DELAY_MS_MAX)
      : randomBetween(GLOW_HIDDEN_MS_MIN, GLOW_HIDDEN_MS_MAX));
    setTimeout(function () {
      if (!glow.parentNode) return;
      setGlowRandomSize(glow);
      glow.style.opacity = String(randomBetween(GLOW_OPACITY_MIN, GLOW_OPACITY_MAX));
      setTimeout(function () {
        scheduleGlowFadeOut(glow);
      }, randomBetween(GLOW_VISIBLE_MS_MIN, GLOW_VISIBLE_MS_MAX));
    }, delay);
  }

  function scheduleGlowFadeOut(glow) {
    if (!glow.parentNode) return;
    var visibleOthers = countVisibleGlows(glow);
    var iAmVisible = parseFloat(glow.style.opacity) > 0;
    if (iAmVisible && visibleOthers === 0) {
      var glows = getGlows();
      var others = [];
      for (var g = 0; g < glows.length; g++) {
        if (glows[g] !== glow && parseFloat(glows[g].style.opacity) === 0) others.push(glows[g]);
      }
      if (others.length > 0) {
        var other = others[Math.floor(Math.random() * others.length)];
        scheduleGlowFadeIn(other, true);
      }
    }
    glow.style.opacity = '0';
    setTimeout(function () {
      scheduleGlowFadeIn(glow, false);
    }, GLOW_FADE_OUT_MS);
  }

  function initGlows() {
    var glows = getGlows();
    for (var i = 0; i < glows.length; i++) {
      glows[i].style.opacity = '0';
      setGlowRandomSize(glows[i]);
    }
    var firstIdx = Math.floor(Math.random() * glows.length);
    scheduleGlowFadeIn(glows[firstIdx], true);
    for (var j = 0; j < glows.length; j++) {
      if (j === firstIdx) continue;
      scheduleGlowFadeIn(glows[j], false);
    }
  }

  function setBotAvatar() {
    var img = document.getElementById('bot-avatar');
    if (!img) return;
    img.alt = 'Bowler Stats bot avatar';
    if (BOT_AVATAR_HASH) {
      img.src = 'https://cdn.discordapp.com/avatars/' + BOT_USER_ID + '/' + BOT_AVATAR_HASH + '.png?size=80';
    } else {
      img.style.display = 'none';
    }
  }

  function loadThemeScript() {
    var s = document.createElement('script');
    s.src = 'assets/js/theme.js';
    s.async = false;
    document.body.appendChild(s);
  }

  function loadTypingScript() {
    var titleEl = document.getElementById('typing-title');
    if (titleEl) {
      var s = document.createElement('script');
      s.src = 'assets/js/typing.js';
      s.async = false;
      document.body.appendChild(s);
    }
  }

  function init() {
    var main = document.getElementById('main-content');
    if (!main) return;
    var mainHTML = main.innerHTML;
    document.body.innerHTML = getLayoutHTML(mainHTML);
    initGlows();
    setBotAvatar();
    loadTypingScript();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
