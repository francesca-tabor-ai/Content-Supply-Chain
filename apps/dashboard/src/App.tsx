import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ControlTower } from './app/ControlTower'
import { SectionPage } from './app/SectionPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ControlTower />} />
          <Route path="strategy/brand-guidelines" element={<SectionPage />} />
          <Route path="strategy/campaign-planning" element={<SectionPage />} />
          <Route path="content-production/pipeline" element={<SectionPage />} />
          <Route path="content-production/asset-library" element={<SectionPage />} />
          <Route path="content-production/automation" element={<SectionPage />} />
          <Route path="localization/market-adaptation" element={<SectionPage />} />
          <Route path="localization/market-readiness" element={<SectionPage />} />
          <Route path="distribution/channel-deployment" element={<SectionPage />} />
          <Route path="distribution/campaign-launch" element={<SectionPage />} />
          <Route path="measurement/content-performance" element={<SectionPage />} />
          <Route path="measurement/campaign-impact" element={<SectionPage />} />
          <Route path="measurement/content-analytics" element={<SectionPage />} />
          <Route path="governance/change-management" element={<SectionPage />} />
          <Route path="governance/compliance" element={<SectionPage />} />
          <Route path="data-systems/tracking" element={<SectionPage />} />
          <Route path="data-systems/taxonomy" element={<SectionPage />} />
          <Route path="data-systems/integrations" element={<SectionPage />} />
          <Route path="insights/supply-chain-intelligence" element={<SectionPage />} />
          <Route path="insights/optimization" element={<SectionPage />} />
          <Route path="admin/user-management" element={<SectionPage />} />
          <Route path="admin/system-settings" element={<SectionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
