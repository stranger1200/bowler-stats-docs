/**
 * Typing animation for hero title on home page.
 */
(function () {
  var titles = [
    'Clash Royale stats. On Discord.',
    'Flex on your friends with Bowler Stats.',
    'Get your stats anywhere, no matter the server.',
    'Feature rich? Customisable? That\'s Bowler Stats.',
    'Privacy first? You\'re safe with Bowler Stats.',
    'Got impressive stats? Show them with Bowler Stats.',
  ];

  var titleEl = document.getElementById('typing-title');
  if (!titleEl) return;

  var currentTitleIndex = 0;
  var currentCharIndex = 0;
  var isDeleting = false;
  var typingSpeed = 80;
  var deletingSpeed = 40;
  var pauseAfterComplete = 5000;
  var pauseAfterDelete = 500;
  var timeoutId = null;

  function typeTitle() {
    var currentTitle = titles[currentTitleIndex];
    
    if (isDeleting) {
      if (currentCharIndex > 0) {
        titleEl.textContent = currentTitle.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        timeoutId = setTimeout(typeTitle, deletingSpeed);
      } else {
        isDeleting = false;
        currentTitleIndex = (currentTitleIndex + 1) % titles.length;
        timeoutId = setTimeout(typeTitle, pauseAfterDelete);
      }
    } else {
      if (currentCharIndex < currentTitle.length) {
        titleEl.textContent = currentTitle.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        timeoutId = setTimeout(typeTitle, typingSpeed);
      } else {
        isDeleting = true;
        timeoutId = setTimeout(typeTitle, pauseAfterComplete);
      }
    }
  }

  function init() {
    titleEl = document.getElementById('typing-title');
    if (titleEl) {
      typeTitle();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
