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
      '<div class="top-bar">' +
        '<div class="top-bar__inner">' +
          '<header class="top-bar__header site-header">' +
            '<a href="index.html" class="header-title-row">' +
              '<img id="bot-avatar" src="" alt="" width="40" height="40">' +
              '<h1>Bowler Stats</h1>' +
            '</a>' +
          '</header>' +
          '<nav class="top-bar__nav site-nav" aria-label="Site">' +
            '<ul>' +
              '<li><a href="index.html"><svg class="nav-icon" width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1L2 6v8h4v-5h4v5h4V6L8 1z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg> Home</a></li>' +
              '<li><a href="features.html"><svg class="nav-icon" width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1l2 5h5l-4 3 1.5 5-4.5-3-4.5 3L6 9l-4-3h5l2-5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg> Features</a></li>' +
              '<li><a href="commands.html"><svg class="nav-icon" width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="12" height="10" rx="1" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M5 7h6M5 10h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg> Commands</a></li>' +
              '<li><a href="https://discord.com/oauth2/authorize?client_id=1267307127609884793" target="_blank" rel="noopener"><svg class="nav-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8,4 L18,4 C19.1046,4 20,4.89543 20,6 L20,18 C20,19.1046 19.1046,20 18,20 L8,20" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/><line x1="4" y1="12" x2="14" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M11,8 L13.5858,10.5858 C14.3668,11.3668 14.3668,12.6332 13.5858,13.4142 L11,16" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/></svg> Invite bot</a></li>' +
              '<li><a href="https://discord.gg/kUARCbYxR4" target="_blank" rel="noopener"><svg class="nav-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.8943 4.34399C17.5183 3.71467 16.057 3.256 14.5317 3C14.3396 3.33067 14.1263 3.77866 13.977 4.13067C12.3546 3.89599 10.7439 3.89599 9.14391 4.13067C8.99457 3.77866 8.77056 3.33067 8.58922 3C7.05325 3.256 5.59191 3.71467 4.22552 4.34399C1.46286 8.41865 0.716188 12.3973 1.08952 16.3226C2.92418 17.6559 4.69486 18.4666 6.4346 19C6.86126 18.424 7.24527 17.8053 7.57594 17.1546C6.9466 16.92 6.34927 16.632 5.77327 16.2906C5.9226 16.184 6.07194 16.0667 6.21061 15.9493C9.68793 17.5387 13.4543 17.5387 16.889 15.9493C17.0383 16.0667 17.177 16.184 17.3263 16.2906C16.7503 16.632 16.153 16.92 15.5236 17.1546C15.8543 17.8053 16.2383 18.424 16.665 19C18.4036 18.4666 20.185 17.6559 22.01 16.3226C22.4687 11.7787 21.2836 7.83202 18.8943 4.34399ZM8.05593 13.9013C7.01058 13.9013 6.15725 12.952 6.15725 11.7893C6.15725 10.6267 6.98925 9.67731 8.05593 9.67731C9.11191 9.67731 9.97588 10.6267 9.95454 11.7893C9.95454 12.952 9.11191 13.9013 8.05593 13.9013ZM15.065 13.9013C14.0196 13.9013 13.1652 12.952 13.1652 11.7893C13.1652 10.6267 13.9983 9.67731 15.065 9.67731C16.121 9.67731 16.985 10.6267 16.9636 11.7893C16.9636 12.952 16.1317 13.9013 15.065 13.9013Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" fill="none"/></svg> Discord</a></li>' +
            '</ul>' +
          '</nav>' +
        '</div>' +
      '</div>' +
      '<div class="container">' +
        mainContent +
        '<footer>' +
          '<p><a href="privacy.html">Privacy Policy</a> • <a href="terms.html">Terms of Service</a></p>' +
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
