import { Link } from 'react-router-dom';
import { PageTitle } from '../components/PageTitle.jsx';
import { useTypingAnimation } from '../hooks/useTypingAnimation';

const INVITE_URL = 'https://discord.com/oauth2/authorize?client_id=1267307127609884793';

export function HomePage() {
  const titleText = useTypingAnimation(true);

  return (
    <>
      <PageTitle title="Bowler Stats – Clash Royale stats in Discord" />
      <section className="hero">
        <div className="hero-cards hero-cards--left" aria-hidden="true">
          <div
            className="hero-card hero-card--gold"
            style={{
              '--cf-z': 4,
              '--cf-tx': '22px',
              '--cf-rot': '-6deg',
              '--cf-dur': '5.5s',
              '--cf-delay': '0s',
              '--cf-glow': 'rgba(255,200,50,0.6)',
              '--cf-ry-from': '-6deg',
              '--cf-ry-to': '3deg',
            }}
          >
            <img src={`${import.meta.env.BASE_URL}assets/images/card-archer-queen.webp`} alt="" />
          </div>
          <div
            className="hero-card hero-card--log"
            style={{
              '--cf-z': 3,
              '--cf-tx': '-12px',
              '--cf-rot': '4deg',
              '--cf-dur': '4.8s',
              '--cf-delay': '-2s',
              '--cf-glow': 'rgba(174,229,115,0.45)',
              '--cf-ry-from': '-3deg',
              '--cf-ry-to': '5deg',
            }}
          >
            <img src={`${import.meta.env.BASE_URL}assets/images/card-the-log.webp`} alt="" />
          </div>
          <div
            className="hero-card hero-card--gold"
            style={{
              '--cf-z': 2,
              '--cf-tx': '28px',
              '--cf-rot': '-5deg',
              '--cf-dur': '6.2s',
              '--cf-delay': '-1s',
              '--cf-glow': 'rgba(255,185,0,0.55)',
              '--cf-ry-from': '-5deg',
              '--cf-ry-to': '2deg',
            }}
          >
            <img src={`${import.meta.env.BASE_URL}assets/images/card-knight-hero.webp`} alt="" />
          </div>
          <div
            className="hero-card hero-card--epic"
            style={{
              '--cf-z': 1,
              '--cf-tx': '-8px',
              '--cf-rot': '5deg',
              '--cf-dur': '5s',
              '--cf-delay': '-3.5s',
              '--cf-glow': 'rgba(252,152,252,0.5)',
              '--cf-ry-from': '-4deg',
              '--cf-ry-to': '6deg',
            }}
          >
            <img src={`${import.meta.env.BASE_URL}assets/images/card-pekka.webp`} alt="" />
          </div>
        </div>

        <div className="hero-cards hero-cards--right" aria-hidden="true">
          <div
            className="hero-card hero-card--gold"
            style={{
              '--cf-z': 4,
              '--cf-tx': '-22px',
              '--cf-rot': '7deg',
              '--cf-dur': '6s',
              '--cf-delay': '-0.6s',
              '--cf-glow': 'rgba(255,190,0,0.55)',
              '--cf-ry-from': '5deg',
              '--cf-ry-to': '-3deg',
            }}
          >
            <img src={`${import.meta.env.BASE_URL}assets/images/card-goblins-hero.webp`} alt="" />
          </div>
          <div
            className="hero-card hero-card--epic"
            style={{
              '--cf-z': 3,
              '--cf-tx': '12px',
              '--cf-rot': '-4deg',
              '--cf-dur': '5.2s',
              '--cf-delay': '-2.8s',
              '--cf-glow': 'rgba(252,152,252,0.5)',
              '--cf-ry-from': '4deg',
              '--cf-ry-to': '-5deg',
            }}
          >
            <img src={`${import.meta.env.BASE_URL}assets/images/card-royal-hogs.webp`} alt="" />
          </div>
          <div
            className="hero-card hero-card--epic"
            style={{
              '--cf-z': 2,
              '--cf-tx': '-28px',
              '--cf-rot': '5deg',
              '--cf-dur': '4.5s',
              '--cf-delay': '-1.5s',
              '--cf-glow': 'rgba(252,152,252,0.45)',
              '--cf-ry-from': '3deg',
              '--cf-ry-to': '-4deg',
            }}
          >
            <img src={`${import.meta.env.BASE_URL}assets/images/card-bowler.webp`} alt="" />
          </div>
          <div
            className="hero-card hero-card--rare"
            style={{
              '--cf-z': 1,
              '--cf-tx': '8px',
              '--cf-rot': '-5deg',
              '--cf-dur': '5.8s',
              '--cf-delay': '-4s',
              '--cf-glow': 'rgba(250,213,98,0.5)',
              '--cf-ry-from': '6deg',
              '--cf-ry-to': '-2deg',
            }}
          >
            <img src={`${import.meta.env.BASE_URL}assets/images/card-three-musketeers.webp`} alt="" />
          </div>
        </div>

        <h1 id="typing-title">{titleText}</h1>
        <p className="tagline">
          View and share your profile and recent battles, right in Discord. Privacy-first and easy to use.
        </p>
        <div className="cta-buttons">
          <a href={INVITE_URL} className="cta-skew" target="_blank" rel="noopener noreferrer">
            <span className="cta-skew__inner">
              <span className="cta-skew__label">Invite the bot</span>
              <span className="cta-skew__arrow" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <line className="sk-one" x1="1" y1="10" x2="10" y2="10" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  <line className="sk-two" x1="7" y1="10" x2="14" y2="10" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  <polyline
                    className="sk-three"
                    points="11,4 18,10 11,16"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </span>
          </a>
        </div>
      </section>

      <section>
        <h2>About</h2>
        <p className="intro">
          Bowler Stats is a fan-made Discord bot that lets you view and share your Clash Royale stats directly in your
          server. Link your player tag once and use slash commands to pull up your profile, recent battles and more.
        </p>
      </section>

      <section>
        <h2>Features</h2>
        <p>
          Commands for profile, battle logs, data management and customisation. Patreon supporters get extra perks like
          custom profile colours.
        </p>
        <p>
          <Link to="/features">See the full features list &rarr;</Link>
        </p>
      </section>

      <section>
        <h2>Invite the bot</h2>
        <p>
          You can add Bowler Stats either by asking a server admin to invite it to a server you share, or by adding it to
          your own apps so you can use it from any server you&apos;re in. Use the link below to get the invite.
        </p>
        <p>
          <a href={INVITE_URL} target="_blank" rel="noopener noreferrer">
            Get the invite link &rarr;
          </a>
        </p>
      </section>

      <section>
        <h2>Getting started</h2>
        <p>
          Once Bowler Stats has been invited, use <code>/help</code> in any channel to see the available commands and
          how to link your player tag. After linking your account, you can view your profile, check recent battles and
          manage your data directly in Discord.
        </p>
      </section>
    </>
  );
}
