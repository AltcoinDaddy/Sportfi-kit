import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SportFiKitProvider } from 'sportfi-kit';
import { LandingPage } from './pages/LandingPage';
import { DocsLayout } from './pages/docs/DocsLayout';
import { Introduction } from './pages/docs/Introduction';
import { QuickstartDoc } from './pages/docs/QuickstartDoc';
import { ExamplesDoc } from './pages/docs/ExamplesDoc';
import { ComponentsDoc } from './pages/docs/ComponentsDoc';
import { HooksDoc } from './pages/docs/HooksDoc';
import { SmartContractsDoc } from './pages/docs/SmartContractsDoc';
import { SociosDoc } from './pages/docs/SociosDoc';
import { CoreConcepts } from './pages/docs/CoreConcepts';

function App() {
  return (
    <SportFiKitProvider config={{ reownProjectId: import.meta.env.VITE_REOWN_PROJECT_ID || '' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/docs" element={<DocsLayout />}>
            <Route index element={<Introduction />} />
            <Route path="quickstart" element={<QuickstartDoc />} />
            <Route path="concepts" element={<CoreConcepts />} />
            <Route path="examples" element={<ExamplesDoc />} />
            <Route path="components" element={<ComponentsDoc />} />
            <Route path="hooks" element={<HooksDoc />} />
            <Route path="smart-contracts" element={<SmartContractsDoc />} />
            <Route path="socios" element={<SociosDoc />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SportFiKitProvider>
  );
}

export default App;
