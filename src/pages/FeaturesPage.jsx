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
            <h2 className="feature-card__title">In-depth stats</h2>
            <ul>
              <li>Detailed Clash Royale statistics to show off to your friends</li>
              <li>Get a profile overview when someone posts a friend link in the server</li>
            </ul>
          </div>
        </article>

        <article className="feature-card">
          <div className="feature-card__image-wrap" />
          <div className="feature-card__body">
            <h2 className="feature-card__title">View your latest battles</h2>
            <ul>
              <li>View battle history with win/loss statistics</li>
              <li>Get stats based on cards you face and play</li>
            </ul>
          </div>
        </article>


        <article className="feature-card">
          <div className="feature-card__image-wrap" />
          <div className="feature-card__body">
            <h2 className="feature-card__title">Multi-tag support</h2>
            <ul>
              <li>Add multiple player tags and give them custom names</li>
              <li>Quickly switch between accounts with a single command</li>
            </ul>
          </div>
        </article>

        <article className="feature-card">
          <div className="feature-card__image-wrap" />
          <div className="feature-card__body">
            <h2 className="feature-card__title">Progress at a glance</h2>
            <ul>
              <li>Track your level, mastery progress, and achievement milestones</li>
              <li>See exactly how many cards you can upgrade and what it will cost to max your account</li>
            </ul>
          </div>
        </article>

        <article className="feature-card">
          <div className="feature-card__image-wrap" />
          <div className="feature-card__body">
            <h2 className="feature-card__title">Data &amp; privacy</h2>
            <ul>
              <li>Protect your privacy with private or anonymous responses</li>
              <li>Easily view and delete your personal data</li>
            </ul>
          </div>
        </article>

        <article className="feature-card">
          <div className="feature-card__image-wrap" />
          <div className="feature-card__body">
            <h2 className="feature-card__title">Easily customisable</h2>
            <ul>
              <li>Customise your embed colour by reaching in-game milestones</li>
              <li>Unlock custom embed colours by becoming a Patreon supporter</li>
            </ul>
          </div>
        </article>

        <article className="feature-card">
          <div className="feature-card__image-wrap" />
          <div className="feature-card__body">
            <h2 className="feature-card__title">Stats anywhere</h2>
            <ul>
              <li>Works in any server, your DMs, or servers the bot hasn&apos;t even joined</li>
              <li>No setup required — just invite and start using commands</li>
            </ul>
          </div>
        </article>

        <article className="feature-card">
          <div className="feature-card__image-wrap" />
          <div className="feature-card__body">
            <h2 className="feature-card__title">Easy to use</h2>
            <ul>
              <li>Intuitive design and easy to use commands</li>
              <li>Navigate responses with interactive buttons, no need to re-run commands</li>
              <li>Clear, easy to understand layout</li>
            </ul>
          </div>
        </article>

        <article className="feature-card">
          <div className="feature-card__image-wrap" />
          <div className="feature-card__body">
            <h2 className="feature-card__title">Dedicated support</h2>
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
