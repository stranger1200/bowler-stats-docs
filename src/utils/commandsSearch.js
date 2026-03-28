import { richToText } from '../components/RichText.jsx';
import { formatUsageLine } from './formatUsageLine.js';

/** Plain-text from `usage` for search. */
export function usageSearchText(usage, commandName = '') {
  if (!usage) return '';
  const chunks = [];
  if (usage.lines?.length && commandName) {
    for (const line of usage.lines) {
      chunks.push(formatUsageLine(commandName, line), line.detail || '');
    }
  } else if (usage.lines?.length) {
    for (const line of usage.lines) {
      chunks.push(line.invoke || '', line.sub || '', line.detail || '');
    }
  }
  if (usage.note) chunks.push(richToText(usage.note));
  if (usage.preNote) chunks.push(richToText(usage.preNote));
  return chunks.join(' ');
}

/** Lowercase plain-text blob of summary + usage for matching. */
export function commandSearchBlob(cmd) {
  const heading = cmd.commandHeading || '';
  const raw = `${heading} ${richToText(cmd.summary)} ${usageSearchText(cmd.usage, cmd.name)}`;
  return raw.toLowerCase().replace(/\s+/g, ' ').trim();
}

export function getSearchScore(cmd, rawQuery) {
  if (!rawQuery || !rawQuery.trim()) return 0;
  const q = rawQuery.trim().toLowerCase().replace(/^\//, '');
  const name = cmd.name.toLowerCase();
  const cmdId = (cmd.id || cmd.name).toLowerCase();
  const blob = commandSearchBlob(cmd);
  const keywords = (cmd.keywords || []).join(' ').toLowerCase();
  if (cmdId === q) return 100;
  if (name === q) return 95;
  if (name.startsWith(q)) return 90;
  if (name.includes(q)) return 80;
  if (keywords.includes(q)) return 60;
  if (blob.includes(q)) return 30;
  return 0;
}

export function filterAndSortCommands(commands, rawQuery) {
  if (!rawQuery || !rawQuery.trim()) return commands;
  return commands
    .map((cmd) => ({ cmd, score: getSearchScore(cmd, rawQuery) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((x) => x.cmd);
}

export function groupByCategory(cmdList) {
  const groups = {};
  for (const c of cmdList) {
    const cat = c.category || 'Other';
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(c);
  }
  return groups;
}
