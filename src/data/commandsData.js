/**
 * Bowler Stats command definitions. Used by CommandsPage and search.
 * - `usage.lines`: formatted by formatUsageLine (supports sub/args/kind/invoke/optional).
 * - `summary` / `usage.note` / `usage.preNote`: plain string or RichText array ({ bold }).
 * - `usage.seeAlso`: [{ id, label }] cross-links. `id` + `commandHeading`: for split commands sharing a name.
 */
export const bowlerCommands = [
  {
    category: 'Profile & stats',
    name: 'tag',
    summary: 'Manage your saved Clash Royale player tags.',
    usage: {
      lines: [
        {
          sub: 'save',
          args: [{ name: 'tag', optional: false }, { name: 'name', optional: true }],
          detail: 'Link a Clash Royale player tag to your Discord account. Add a custom label (e.g. Main, Mini) or let the bot pick one.',
        },
        { sub: 'remove', args: [{ name: 'tag', optional: false }], detail: 'Stop tracking that tag and drop it from your saved list.' },
        {
          sub: 'select',
          detail: 'Open the interactive menu to choose your active account.',
        },
        {
          sub: 'select',
          args: [{ name: 'name', optional: true }],
          detail: 'Switch the active account using the custom name you saved for that tag.',
        },
        { sub: 'list', detail: 'List every saved tag and highlight which one is active.' },
      ],
    },
  },
  {
    category: 'Profile & stats',
    name: 'profile',
    keywords: ['view profile'],
    summary: 'View your Clash Royale profile.',
    usage: {
      lines: [
        { detail: 'View your profile.' },
        {
          kind: 'argument',
          optional: true,
          sub: 'user',
          detail: "View another player's profile using their Discord account.",
        },
        {
          kind: 'argument',
          optional: true,
          sub: 'tag',
          detail: "View another player's profile using their Clash Royale tag.",
        },
      ],
      note: [
        'You can also right‑click a user → ',
        { bold: 'Apps' },
        ' → ',
        { bold: 'View Profile' },
        '.',
      ],
    },
  },
  {
    category: 'Profile & stats',
    name: 'battlelog',
    keywords: ['view battle log', 'battle log'],
    summary: 'View your latest Clash Royale battles and get statistics based off them.',
    usage: {
      lines: [
        { detail: 'View your battle log.' },
        {
          kind: 'argument',
          optional: true,
          sub: 'user',
          detail: "View another member's recent battles and the same stats rollup (up to 25 battles) from their linked tag.",
        },
        {
          kind: 'argument',
          optional: true,
          sub: 'tag',
          detail: "View another player's battle log and stats using their Clash Royale tag.",
        },
      ],
      note: [
        'You can also right‑click a user → ',
        { bold: 'Apps' },
        ' → ',
        { bold: 'View Battle Log' },
        '.',
      ],
    },
  },
  {
    category: 'Deck',
    id: 'deck-show',
    name: 'deck',
    commandHeading: '/deck show',
    keywords: ['deck', 'show', 'most used', 'deck link', 'url'],
    summary: 'View your most-used Clash Royale deck or load one from a deck link.',
    usage: {
      lines: [
        { sub: 'show', detail: 'Your most-used deck from your linked tag.' },
        {
          sub: 'show',
          args: [{ name: 'user', optional: true }],
          detail: "View that member's most-used deck.",
        },
        {
          sub: 'show',
          args: [{ name: 'tag', optional: true }],
          detail: 'View the most-used deck for that Clash Royale tag.',
        },
        {
          sub: 'show',
          args: [{ name: 'url', optional: true }],
          detail: 'Import and display a deck from a Clash Royale deck link (levels normalised for display).',
        },
      ],
    },
  },
  {
    category: 'Deck',
    id: 'deck-latest',
    name: 'deck',
    commandHeading: '/deck latest',
    keywords: ['deck', 'latest', 'recent battle'],
    summary: 'View the deck from your most recent battle.',
    usage: {
      lines: [
        { sub: 'latest', detail: 'View your deck from your most recent battle.' },
        {
          sub: 'latest',
          args: [{ name: 'user', optional: true }],
          detail: "View that member's deck from their most recent battle.",
        },
        {
          sub: 'latest',
          args: [{ name: 'tag', optional: true }],
          detail: 'View the deck from the latest battle for that Clash Royale tag.',
        },
      ],
    },
  },
  {
    category: 'Deck',
    id: 'deck-random',
    name: 'deck',
    commandHeading: '/deck random',
    keywords: ['deck', 'random'],
    summary: 'Generate a completely random deck.',
    usage: {
      lines: [{ sub: 'random', detail: 'Roll a completely random deck for fun or inspiration.' }],
    },
  },
  {
    category: 'Deck',
    id: 'deck-ranked',
    name: 'deck',
    commandHeading: '/deck ranked',
    keywords: ['deck', 'ranked', 'path of legends', 'top ladder'],
    summary: 'Get a random deck used by a top Ranked player.',
    usage: {
      lines: [
        {
          sub: 'ranked',
          detail: "Pull a build from the bot's Ranked leaderboard pool to copy high-level lists.",
        },
      ],
    },
  },
  {
    category: 'Achievements',
    id: 'achievement-claim',
    name: 'achievement',
    commandHeading: '/achievement claim',
    keywords: ['achievement', 'claim', 'achievements', 'colours'],
    summary: 'Check for any achievements you have completed and claim their rewards.',
    usage: {
      lines: [
        { sub: 'claim', detail: 'Claim any completed achievements in order to unlock new embed colours.' },
      ],
      seeAlso: [{ id: 'settings-colour', label: '/settings colour' }],
    },
  },
  {
    category: 'Achievements',
    id: 'achievement-list',
    name: 'achievement',
    commandHeading: '/achievement list',
    keywords: ['achievement', 'list', 'catalogue', 'requirements'],
    summary: 'Browse every available achievement and its requirements.',
    usage: {
      lines: [
        { sub: 'list', detail: 'Shows a list of achievements you can work towards.' },
      ],
    },
  },
  {
    category: 'Achievements',
    id: 'achievement-progress',
    name: 'achievement',
    commandHeading: '/achievement progress',
    keywords: ['achievement', 'progress', 'unclaimed'],
    summary: 'See how close you are to completing achievements you have not yet claimed.',
    usage: {
      lines: [
        { sub: 'progress', detail: 'Shows your current progress towards each unclaimed achievement.' },
      ],
    },
  },
  {
    category: 'Profile & stats',
    name: 'progress',
    keywords: ['card levels', 'upgrade', 'masteries', 'achievements'],
    summary: 'View your Clash Royale account progress.',
    usage: {
      lines: [
        { detail: 'View your card levels, upgrade costs, masteries, available upgrades, and misc achievements.' },
        {
          kind: 'argument',
          optional: true,
          sub: 'user',
          detail: "View another player's progress (levels, upgrades, masteries, and achievements) via their Discord account.",
        },
        {
          kind: 'argument',
          optional: true,
          sub: 'tag',
          detail: "View another player's progress using their Clash Royale tag.",
        },
      ],
    },
  },
  {
    category: 'Settings',
    id: 'settings-general',
    name: 'settings',
    commandHeading: '/settings general',
    keywords: ['settings', 'general'],
    summary: 'Manage your general bot settings.',
    usage: {
      lines: [
        { sub: 'general', detail: 'Opens the general settings context menu. Select an option to toggle it.' },
      ],
    },
  },
  {
    category: 'Settings',
    id: 'settings-privacy',
    name: 'settings',
    commandHeading: '/settings privacy',
    keywords: ['settings', 'privacy'],
    summary: 'Manage your privacy settings.',
    usage: {
      lines: [
        { sub: 'privacy', detail: 'Opens the privacy settings context menu. Select an option to toggle it.' },
      ],
    },
  },
  {
    category: 'Settings',
    id: 'settings-colour',
    name: 'settings',
    commandHeading: '/settings colour',
    keywords: ['settings', 'colour', 'color', 'hex', 'customise'],
    summary: 'View and change your profile embed colour. Unlock new colours by completing achievements.',
    usage: {
      lines: [
        { sub: 'colour', detail: 'Opens the colour picker.' },
        {
          sub: 'colour',
          args: [{ name: 'hex', optional: true }],
          detail: 'Supporter only — jump straight to a custom hex colour.',
        },
      ],
      note: [
        'Discord may show this as ',
        { bold: 'color' },
        ' or ',
        { bold: 'colour' },
        ' depending on your locale.',
      ],
      seeAlso: [{ id: 'achievement-claim', label: 'Achievements' }],
    },
  },
  {
    category: 'Settings',
    id: 'settings-toggle',
    name: 'settings',
    commandHeading: '/settings toggle',
    keywords: ['settings', 'toggle'],
    summary: 'Quickly toggle a specific setting on or off without opening the full settings context menu.',
    usage: {
      lines: [
        {
          sub: 'toggle',
          args: [{ name: 'setting', optional: false }],
          detail: 'Pick a setting from the list in Discord to toggle it on or off.',
        },
      ],
    },
  },
  {
    category: 'Utility & support',
    name: 'data',
    keywords: ['view', 'delete', 'info'],
    summary: 'Manage the data Bowler Stats stores for your Discord account.',
    usage: {
      lines: [
        { sub: 'view', detail: 'See what the bot stores for your account.' },
        { sub: 'delete', detail: 'Permanently delete your saved data.' },
        { sub: 'info', detail: 'Information about what data we collect.' },
      ],
    },
  },
  {
    category: 'Utility & support',
    name: 'help',
    keywords: ['search', 'view'],
    summary: 'Browse all bot commands and help topics directly inside Discord.',
    usage: {
      lines: [
        { detail: 'Opens the help embed.' },
        {
          kind: 'argument',
          optional: true,
          sub: 'view',
          detail: 'Jump straight to a matching help page or command (minimum three characters).',
        },
      ],
      note: 'Use the select menu on the help embed to switch between pages.',
    },
  },
  {
    category: 'Utility & support',
    name: 'invite',
    keywords: ['add', 'server'],
    summary: 'Get an invite link to add the bot to a server.',
  },
  {
    category: 'Utility & support',
    name: 'ping',
    keywords: ['latency', 'api'],
    summary: "Check the bot's latency and the ping to the Clash Royale API.",
  },
  {
    category: 'Utility & support',
    name: 'patreon',
    keywords: ['support', 'supporter', 'perks', 'colours'],
    summary: 'Read about supporting the bot on Patreon and supporter perks.',
    usage: {
      note: 'Perks include custom profile colours, more tag slots, lower cooldowns, and other benefits as announced on Patreon.',
    },
  },
  {
    category: 'Server settings',
    name: 'friend-links',
    keywords: ['friend link', 'whitelist', 'blacklist', 'toggle'],
    summary: [
      'Configure automatic profile summaries when someone posts a Clash Royale friend link in this server. Requires the ',
      { bold: 'Manage Server' },
      ' permission.',
    ],
    usage: {
      preNote: 'When enabled, the bot monitors all channels by default. Use the whitelist or blacklist subcommands to restrict which channels are watched.',
      lines: [
        { sub: 'toggle', detail: 'Enable or disable friend-link detection for this server.' },
        {
          sub: 'whitelist-channel',
          args: [{ name: 'channel', optional: false }],
          detail: 'Add a channel so only whitelisted channels are monitored.',
        },
        {
          sub: 'blacklist-channel',
          args: [{ name: 'channel', optional: false }],
          detail: 'Ignore friend links posted in this channel.',
        },
        {
          sub: 'remove-channel',
          args: [{ name: 'channel', optional: false }],
          detail: 'Remove a channel from both whitelist and blacklist.',
        },
        { sub: 'list', detail: 'Show current friend-link detection settings.' },
      ],
    },
  },
];
