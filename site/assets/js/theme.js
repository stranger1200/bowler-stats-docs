(function () {
  var STORAGE_KEY = 'bowler-stats-theme';
  var theme = localStorage.getItem(STORAGE_KEY) || 'dark';
  var root = document.documentElement;
  var TRANSITION_MS = 420;

  function setTheme(value) {
    theme = value;
    root.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }

  function init() {
    root.setAttribute('data-theme', theme);
    var btn = document.querySelector('.theme-toggle');
    if (btn) {
      btn.addEventListener('click', function () {
        var next = theme === 'dark' ? 'light' : 'dark';
        document.body.classList.add('theme-switching');
        setTheme(next);
        setTimeout(function () {
          document.body.classList.remove('theme-switching');
        }, TRANSITION_MS);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
