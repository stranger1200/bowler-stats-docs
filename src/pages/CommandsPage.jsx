import { useCallback, useEffect, useRef, useState } from 'react';
import { RichText } from '../components/RichText.jsx';
import { PageTitle } from '../components/PageTitle.jsx';
import { bowlerCommands } from '../data/commandsData.js';
import { useCommandSearch } from '../hooks/useCommandSearch.js';
import { formatUsageLine } from '../utils/formatUsageLine.js';
import { useNav } from '../context/NavContext.jsx';

function hasUsage(cmd) {
  const u = cmd.usage;
  if (!u) return false;
  return Boolean(u.lines?.length || u.note || u.preNote);
}

function commandCardKey(cmd) {
  return cmd.id ?? cmd.name;
}

function commandHeadingText(cmd) {
  return cmd.commandHeading ?? `/${cmd.name}`;
}

function CommandUsageContent({ cmd, onExpandAndScroll }) {
  const u = cmd.usage;
  const cardKey = commandCardKey(cmd);

  return (
    <>
      {u.preNote ? <p className="command-card__usage-note"><RichText content={u.preNote} /></p> : null}
      {u.lines?.length ? (
        <ul className="command-card__usage-list">
          {u.lines.map((line, i) => (
            <li key={`${cardKey}-usage-${line.sub ?? 'base'}-${i}`} className="command-card__usage-item">
              <pre className="command-card__usage-block">
                <code>{formatUsageLine(cmd.name, line)}</code>
              </pre>
              <p className="command-card__usage-line-detail">{line.detail}</p>
            </li>
          ))}
        </ul>
      ) : null}
      {u.note ? <p className="command-card__usage-note"><RichText content={u.note} /></p> : null}
      {u.seeAlso?.length ? (
        <p className="command-card__see-also">
          See also:{' '}
          {u.seeAlso.map((ref, i) => (
            <span key={ref.id}>
              {i > 0 ? ', ' : ''}
              <button
                type="button"
                className="command-card__see-also-link"
                onClick={() => onExpandAndScroll(ref.id)}
              >
                {ref.label}
              </button>
            </span>
          ))}
        </p>
      ) : null}
    </>
  );
}

function CommandCard({ cmd, expanded, onToggle, onExpandAndScroll }) {
  const expandable = hasUsage(cmd);
  const cardKey = commandCardKey(cmd);
  const heading = commandHeadingText(cmd);

  if (!expandable) {
    return (
      <article className="command-card" id={cardKey} data-command={cardKey}>
        <div className="command-card__name">
          <code>{heading}</code>
        </div>
        <div className="command-card__summary">
          <RichText content={cmd.summary} />
        </div>
      </article>
    );
  }

  const panelId = `cmd-usage-${cardKey}`;
  const triggerId = `cmd-trigger-${cardKey}`;

  return (
    <article className={`command-card command-card--expandable${expanded ? ' command-card--expanded' : ''}`} id={cardKey} data-command={cardKey}>
      <button
        type="button"
        className="command-card__toggle"
        id={triggerId}
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={() => onToggle(cardKey)}
      >
        <span className="command-card__toggle-inner">
          <span className="command-card__name">
            <code>{heading}</code>
          </span>
          <span className="command-card__summary">
            <RichText content={cmd.summary} />
          </span>
        </span>
        <span className="command-card__chevron" aria-hidden />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className="command-card__panel"
        aria-hidden={!expanded}
      >
        <div className="command-card__panel-inner">
          <div className="command-card__usage">
            <h3 className="command-card__usage-heading">Usage</h3>
            <div className="command-card__usage-body">
              <CommandUsageContent cmd={cmd} onExpandAndScroll={onExpandAndScroll} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function CommandSections({ grouped, expandedNames, onToggleExpand, onExpandAndScroll }) {
  return Object.entries(grouped).map(([category, list]) =>
    list.length === 0 ? null : (
      <section className="commands-section" key={category}>
        <h2>{category}</h2>
        <div className="command-cards">
          {list.map((cmd, index) => {
            const prev = list[index - 1];
            const showSub = cmd.subsection && (!prev || prev.subsection !== cmd.subsection);
            return (
              <div className="command-cards__cluster" key={commandCardKey(cmd)}>
                {showSub ? <h3 className="commands-subsection">{cmd.subsection}</h3> : null}
                <CommandCard
                  cmd={cmd}
                  expanded={expandedNames.has(commandCardKey(cmd))}
                  onToggle={onToggleExpand}
                  onExpandAndScroll={onExpandAndScroll}
                />
              </div>
            );
          })}
        </div>
      </section>
    )
  );
}

export function CommandsPage() {
  const { grouped, searchInputProps, query } = useCommandSearch(bowlerCommands);
  const [expandedNames, setExpandedNames] = useState(() => new Set());
  const { navRef } = useNav();
  const searchRef = useRef(null);
  const mirrorRef = useRef(null);

  const onToggleExpand = useCallback((name) => {
    setExpandedNames((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  }, []);

  const onExpandAndScroll = useCallback((id) => {
    setExpandedNames((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const navHeight = navRef.current?.offsetHeight ?? 0;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 32;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  }, [navRef]);

  useEffect(() => {
    setExpandedNames(new Set());
  }, [query]);

  useEffect(() => {
    const input = searchRef.current;
    const mirror = mirrorRef.current;
    if (!input || !mirror) return;
    mirror.textContent = input.placeholder;
    const minPx = mirror.offsetWidth * 1.02;
    mirror.textContent = query || input.placeholder;
    const MAX_PX = 32 * 16;
    input.style.width = `${Math.min(Math.max(mirror.offsetWidth, minPx), MAX_PX)}px`;
  }, [query]);

  return (
    <>
      <PageTitle title="Commands: Bowler Stats" />
      <h1 className="page-title">Commands</h1>
      <p className="intro">
        An overview of every command Bowler Stats has to offer. Click any card to see usage examples and available
        options. You can also run <code>/help</code> in Discord to browse commands from within the bot.
        <br /><br />
        In usage examples, <code>[square brackets]</code> are required and <code>(round brackets)</code> are optional.
      </p>

      <div className="commands-search-wrap">
        <svg className="commands-search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.6" />
          <line x1="12.5" y1="12.5" x2="17" y2="17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <span ref={mirrorRef} className="commands-search-mirror" aria-hidden="true" />
        <input
          ref={searchRef}
          type="search"
          id="commands-search"
          className="commands-search"
          placeholder="Search commands"
          aria-label="Search commands"
          {...searchInputProps}
        />
      </div>

      {!grouped ? (
        <p className="commands-no-results">
          No commands match your search. Try a command name like <code>progress</code> or <code>profile</code>.
        </p>
      ) : (
        <CommandSections grouped={grouped} expandedNames={expandedNames} onToggleExpand={onToggleExpand} onExpandAndScroll={onExpandAndScroll} />
      )}
    </>
  );
}
