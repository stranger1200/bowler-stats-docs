import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout.jsx';
import { CommandsPage } from './pages/CommandsPage.jsx';
import { FeaturesPage } from './pages/FeaturesPage.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { PrivacyPage } from './pages/PrivacyPage.jsx';
import { DiscordPage } from './pages/DiscordPage.jsx';
import { InvitePage } from './pages/InvitePage.jsx';
import { TermsPage } from './pages/TermsPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/invite" element={<InvitePage />} />
      <Route path="/discord" element={<DiscordPage />} />
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/commands" element={<CommandsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Route>
    </Routes>
  );
}
