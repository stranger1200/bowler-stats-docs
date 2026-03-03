/**
 * Bowler Stats command definitions. Used for rendering and search.
 * Add commands here when extending the bot – search ranks by: exact name match, then keywords, then description.
 */
window.BOWLER_COMMANDS = [
  {
    category: 'Profile & stats',
    name: 'tag',
    description: 'Manage your saved Clash Royale player tags. <strong>save</strong> – save a tag (optional name, e.g. Main/Mini); <strong>remove</strong> – remove a saved tag; <strong>select</strong> – set which account is active; <strong>list</strong> – list all saved tags. Supporters can save more tags.'
  },
  {
    category: 'Profile & stats',
    name: 'profile',
    keywords: ['view profile'],
    description: 'View your Clash Royale profile (or another player\'s). Shows trophies, arena, wins/losses, clan, Path of Legends, masteries and card stats. Optional: <code>user</code> or <code>tag</code>. You can also right‑click a user → <strong>Apps</strong> → <strong>View Profile</strong>.'
  },
  {
    category: 'Profile & stats',
    name: 'battlelog',
    keywords: ['view battle log', 'battle log'],
    description: 'View your Clash Royale battle log (or another player\'s). Browse recent battles, switch rounds in duels, and use <strong>View Summary</strong> for win rates and card performance from your last 25 battles. Optional: <code>user</code> or <code>tag</code>. You can also right‑click a user → <strong>Apps</strong> → <strong>View Battle Log</strong>.'
  },
  {
    category: 'Profile & stats',
    name: 'deck',
    keywords: ['show', 'latest', 'random', 'ranked'],
    description: 'View Clash Royale decks. Subcommands: <strong>show</strong> – your most used deck (or another player\'s, optional deck URL); <strong>latest</strong> – deck from your most recent battle; <strong>random</strong> – random deck with random tower troop; <strong>ranked</strong> – random deck from a top Ranked player.'
  },
  {
    category: 'Profile & stats',
    name: 'progress',
    keywords: ['card levels', 'upgrade', 'masteries', 'achievements'],
    description: 'View your Clash Royale progress (or another player\'s): card levels, upgrade costs, masteries, available upgrades and misc achievements. Optional: <code>user</code> or <code>tag</code>.'
  },
  {
    category: 'Profile & stats',
    name: 'achievement',
    keywords: ['claim', 'list', 'progress'],
    description: 'View and manage your achievements. <strong>claim</strong> – check and claim available achievements; <strong>list</strong> – view all available achievements; <strong>progress</strong> – view progress towards unclaimed achievements.'
  },
  {
    category: 'Account & data',
    name: 'data',
    keywords: ['view', 'delete', 'info'],
    description: 'Manage your stored data. <strong>view</strong> – see what the bot stores for your account; <strong>delete</strong> – permanently delete your saved data; <strong>info</strong> – information about what data we collect.'
  },
  {
    category: 'Account & data',
    name: 'settings',
    keywords: ['colour', 'color', 'privacy', 'anonymous', 'customise'],
    description: 'Customise your experience: profile colour (Patreon: custom hex), public profile, private responses (ephemeral), anonymous mode (hide in-game identifiers), display alt text on images, and show bot tips.'
  },
  {
    category: 'Utility & support',
    name: 'help',
    keywords: ['search', 'view'],
    description: 'View help information for bot commands. Use the dropdown to switch pages, or use the <code>view</code> option to search for a specific command or page.'
  },
  {
    category: 'Utility & support',
    name: 'invite',
    keywords: ['add', 'server'],
    description: 'Get an invite link to add the bot to other servers.'
  },
  {
    category: 'Utility & support',
    name: 'ping',
    keywords: ['latency', 'api'],
    description: 'Check the bot\'s latency and the ping to the Clash Royale API.'
  },
  {
    category: 'Utility & support',
    name: 'patreon',
    keywords: ['support', 'supporter', 'perks', 'colours'],
    description: 'View information about supporting the bot on Patreon and the perks (e.g. custom colours, more tag slots, lower cooldowns).'
  },
  {
    category: 'Server settings',
    name: 'friend-links',
    keywords: ['friend link', 'whitelist', 'blacklist', 'toggle'],
    description: 'Manage automatic friend link profile detection for this server (requires Manage Server). <strong>toggle</strong> – enable or disable; <strong>whitelist-channel</strong> / <strong>blacklist-channel</strong> – limit which channels are monitored; <strong>status</strong> – view current settings.'
  }
];
