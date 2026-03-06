import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ControlTower } from './app/ControlTower'
import { Demand } from './app/Demand'
import { Supply } from './app/Supply'
import { Flow } from './app/Flow'
import { Localization } from './app/Localization'
import { Reuse } from './app/Reuse'
import { Performance } from './app/Performance'
import { Governance } from './app/Governance'
import { Automation } from './app/Automation'
import { SystemHealth } from './app/SystemHealth'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ControlTower />} />
          <Route path="demand" element={<Demand />} />
          <Route path="supply" element={<Supply />} />
          <Route path="flow" element={<Flow />} />
          <Route path="localization" element={<Localization />} />
          <Route path="reuse" element={<Reuse />} />
          <Route path="performance" element={<Performance />} />
          <Route path="governance" element={<Governance />} />
          <Route path="automation" element={<Automation />} />
          <Route path="system-health" element={<SystemHealth />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
