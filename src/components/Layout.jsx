import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { NavContext } from '../context/NavContext.jsx';
import { useTheme } from '../context/ThemeContext';

const BOT_USER_ID = '1267307127609884793';
const BOT_AVATAR_HASH = 'ce24d7a3738c1ba8251322ee7cf907fe';
const INVITE_URL = `https://discord.com/oauth2/authorize?client_id=${BOT_USER_ID}`;
const DISCORD_SERVER_URL = 'https://discord.gg/kUARCbYxR4';

function IconHome() {
  return (
    <svg className="nav-icon" width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M8 1L2 6v8h4v-5h4v5h4V6L8 1z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function IconFeatures() {
  return (
    <svg className="nav-icon" width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M8 1l2 5h5l-4 3 1.5 5-4.5-3-4.5 3L6 9l-4-3h5l2-5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function IconCommands() {
  return (
    <svg className="nav-icon" width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden>
      <rect x="2" y="3" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M5 7h6M5 10h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconInvite() {
  return (
    <svg className="nav-icon" width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8,4 L18,4 C19.1046,4 20,4.89543 20,6 L20,18 C20,19.1046 19.1046,20 18,20 L8,20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <line x1="4" y1="12" x2="14" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M11,8 L13.5858,10.5858 C14.3668,11.3668 14.3668,12.6332 13.5858,13.4142 L11,16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function IconDiscord() {
  return (
    <svg className="nav-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M18.8943 4.34399C17.5183 3.71467 16.057 3.256 14.5317 3C14.3396 3.33067 14.1263 3.77866 13.977 4.13067C12.3546 3.89599 10.7439 3.89599 9.14391 4.13067C8.99457 3.77866 8.77056 3.33067 8.58922 3C7.05325 3.256 5.59191 3.71467 4.22552 4.34399C1.46286 8.41865 0.716188 12.3973 1.08952 16.3226C2.92418 17.6559 4.69486 18.4666 6.4346 19C6.86126 18.424 7.24527 17.8053 7.57594 17.1546C6.9466 16.92 6.34927 16.632 5.77327 16.2906C5.9226 16.184 6.07194 16.0667 6.21061 15.9493C9.68793 17.5387 13.4543 17.5387 16.889 15.9493C17.0383 16.0667 17.177 16.184 17.3263 16.2906C16.7503 16.632 16.153 16.92 15.5236 17.1546C15.8543 17.8053 16.2383 18.424 16.665 19C18.4036 18.4666 20.185 17.6559 22.01 16.3226C22.4687 11.7787 21.2836 7.83202 18.8943 4.34399ZM8.05593 13.9013C7.01058 13.9013 6.15725 12.952 6.15725 11.7893C6.15725 10.6267 6.98925 9.67731 8.05593 9.67731C9.11191 9.67731 9.97588 10.6267 9.95454 11.7893C9.95454 12.952 9.11191 13.9013 8.05593 13.9013ZM15.065 13.9013C14.0196 13.9013 13.1652 12.952 13.1652 11.7893C13.1652 10.6267 13.9983 9.67731 15.065 9.67731C16.121 9.67731 16.985 10.6267 16.9636 11.7893C16.9636 12.952 16.1317 13.9013 15.065 13.9013Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function Layout() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  const botAvatarSrc = BOT_AVATAR_HASH
    ? `https://cdn.discordapp.com/avatars/${BOT_USER_ID}/${BOT_AVATAR_HASH}.png?size=80`
    : '';

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    const threshold = 16;
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setScrolled(y > threshold);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  return (
    <>
      <div className={`top-bar${scrolled ? ' top-bar--scrolled' : ''}`}>
        <div className="top-bar__inner">
          <header className="top-bar__header site-header">
            <Link to="/" className="header-title-row" onClick={closeMenu}>
              {botAvatarSrc ? (
                <img id="bot-avatar" src={botAvatarSrc} alt="Bowler Stats bot avatar" width="40" height="40" />
              ) : null}
              <h1>Bowler Stats</h1>
            </Link>
          </header>

          <button
            type="button"
            className={`mobile-menu-toggle${menuOpen ? ' mobile-menu-active' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>

          <nav ref={navRef} className={`top-bar__nav site-nav${menuOpen ? ' mobile-menu-open' : ''}`} aria-label="Site">
            <ul>
              <li>
                <Link to="/" onClick={closeMenu}>
                  <IconHome /> Home
                </Link>
              </li>
              <li>
                <Link to="/features" onClick={closeMenu}>
                  <IconFeatures /> Features
                </Link>
              </li>
              <li>
                <Link to="/commands" onClick={closeMenu}>
                  <IconCommands /> Commands
                </Link>
              </li>
              <li>
                <a href={INVITE_URL} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                  <IconInvite /> Invite bot
                </a>
              </li>
              <li>
                <a href={DISCORD_SERVER_URL} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                  <IconDiscord /> Discord
                </a>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            className="theme-toggle"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            onClick={toggleTheme}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <circle className="icon-sun" cx="12" cy="12" r="4" />
              <path
                className="icon-sun"
                d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
                strokeLinecap="round"
              />
              <path
                className="icon-moon"
                d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <NavContext.Provider value={{ navRef }}>
      <div className={`container${menuOpen ? ' menu-blur' : ''}`} id="main-content">
        <Outlet />
        <footer>
          <p>
            <Link to="/privacy">Privacy Policy</Link> • <Link to="/terms">Terms of Service</Link>
          </p>
          <p className="footer-disclaimer">
            Bowler Stats is not affiliated with, endorsed by, or sponsored by Supercell. It is operated in line with the{' '}
            <a href="https://supercell.com/en/fan-content-policy/" target="_blank" rel="noopener noreferrer">
              Supercell Fan Content Policy
            </a>
            .
          </p>
        </footer>
      </div>
      </NavContext.Provider>
    </>
  );
}
