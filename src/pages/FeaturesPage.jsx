import { Link } from 'react-router-dom';
import { PageTitle } from '../components/PageTitle.jsx';

export function FeaturesPage() {
  return (
    <>
      <PageTitle title="Features – Bowler Stats" />
      <h1 className="page-title">Features</h1>

      <div className="features-grid">
        <article className="feature-card">
          <div className="feature-card__image-wrap" />
          <div className="feature-card__body">
            <h2 className="feature-card__title">Profile &amp; stats</h2>
            <ul>
              <li>Detailed Clash Royale statistics to show off to your friends</li>
              <li>Add multiple player tags and give them custom names</li>
              <li>Get a profile overview when someone posts a friend link in the server</li>
            </ul>
          </div>
        </article>

        <article className="feature-card">
          <div className="feature-card__image-wrap" />
          <div className="feature-card__body">
            <h2 className="feature-card__title">Battle logs</h2>
            <ul>
              <li>View battle history with win/loss statistics</li>
              <li>Get stats based on cards you face and play</li>
            </ul>
          </div>
        </article>

        <article className="feature-card">
          <div className="feature-card__image-wrap" />
          <div className="feature-card__body">
            <h2 className="feature-card__title">Account progress</h2>
            <ul>
              <li>View your progress including level, mastery and achievement summaries</li>
              <li>See how much gold you need to max your account</li>
              <li>See how many cards you can currently upgrade</li>
            </ul>
          </div>
        </article>

        <article className="feature-card">
          <div className="feature-card__image-wrap" />
          <div className="feature-card__body">
            <h2 className="feature-card__title">Data &amp; privacy</h2>
            <ul>
              <li>Protect your privacy with private or anonymous responses (anonymised data)</li>
              <li>Easily view and delete your personal data</li>
            </ul>
          </div>
        </article>

        <article className="feature-card">
          <div className="feature-card__image-wrap" />
          <div className="feature-card__body">
            <h2 className="feature-card__title">Customisation</h2>
            <ul>
              <li>Customise your embed colour by reaching in-game milestones</li>
              <li>Unlock custom embed colours by becoming a Patreon supporter</li>
            </ul>
          </div>
        </article>

        <article className="feature-card">
          <div className="feature-card__image-wrap" />
          <div className="feature-card__body">
            <h2 className="feature-card__title">Easy to use</h2>
            <ul>
              <li>Use commands in your servers, DMs, or even in servers the bot hasn&apos;t joined</li>
              <li>Intuitive design and easy to use commands</li>
              <li>Clear, easy to understand layout</li>
            </ul>
          </div>
        </article>

        <article className="feature-card">
          <div className="feature-card__image-wrap" />
          <div className="feature-card__body">
            <h2 className="feature-card__title">Support</h2>
            <ul>
              <li>
                Get help and report issues in our{' '}
                <a href="https://discord.gg/kUARCbYxR4" target="_blank" rel="noopener noreferrer">
                  Discord server
                </a>
              </li>
              <li>Suggest features and stay up to date with announcements</li>
            </ul>
          </div>
        </article>

        <article className="feature-card">
          <div className="feature-card__image-wrap" />
          <div className="feature-card__body">
            <h2 className="feature-card__title">Always up to date</h2>
            <ul>
              <li>Continuously updated, so you always get new features and fixes</li>
              <li>Always prepared for new Clash Royale updates</li>
            </ul>
          </div>
        </article>
      </div>

      <p className="note">
        See the <Link to="/commands">Commands</Link> page for the full list of slash commands and options, or use{' '}
        <code>/help</code> in Discord.
      </p>
    </>
  );
}
