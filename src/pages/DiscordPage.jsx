import { useEffect } from 'react';

const DISCORD_SERVER_URL = 'https://discord.gg/kUARCbYxR4';

export function DiscordPage() {
  useEffect(() => {
    window.location.replace(DISCORD_SERVER_URL);
  }, []);

  return null;
}
