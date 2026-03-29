import { useEffect } from 'react';

const INVITE_URL = 'https://discord.com/oauth2/authorize?client_id=1267307127609884793';

export function InvitePage() {
  useEffect(() => {
    window.location.replace(INVITE_URL);
  }, []);

  return null;
}
