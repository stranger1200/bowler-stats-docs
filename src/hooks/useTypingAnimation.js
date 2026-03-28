import { useEffect, useState } from 'react';

const TITLES = [
  'Clash Royale stats. On Discord.',
  'Flex on your friends with Bowler Stats.',
  'Get your stats anywhere,\nno matter the server.',
  'Feature rich? Customisable?\nThat\'s Bowler Stats.',
  'Privacy first? You\'re safe with Bowler Stats.',
  'Got impressive stats?\nShow them with Bowler Stats.',
];

const TYPING_MS = 80;
const DELETING_MS = 40;
const PAUSE_COMPLETE_MS = 5000;
const PAUSE_DELETE_MS = 500;

export function useTypingAnimation(enabled) {
  const [text, setText] = useState('');

  useEffect(() => {
    if (!enabled) return undefined;

    let currentTitleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let timeoutId = null;
    let cancelled = false;

    function schedule(fn, delay) {
      timeoutId = window.setTimeout(fn, delay);
    }

    function tick() {
      if (cancelled) return;
      const currentTitle = TITLES[currentTitleIndex];

      if (isDeleting) {
        if (currentCharIndex > 0) {
          currentCharIndex -= 1;
          setText(currentTitle.slice(0, currentCharIndex));
          schedule(tick, DELETING_MS);
        } else {
          isDeleting = false;
          currentTitleIndex = (currentTitleIndex + 1) % TITLES.length;
          schedule(tick, PAUSE_DELETE_MS);
        }
      } else if (currentCharIndex < currentTitle.length) {
        currentCharIndex += 1;
        setText(currentTitle.slice(0, currentCharIndex));
        schedule(tick, TYPING_MS);
      } else {
        isDeleting = true;
        schedule(tick, PAUSE_COMPLETE_MS);
      }
    }

    tick();

    return () => {
      cancelled = true;
      if (timeoutId != null) window.clearTimeout(timeoutId);
    };
  }, [enabled]);

  return text;
}
