import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AssetHub } from './app/AssetHub'
import { Briefs } from './app/Briefs'
import { CommandCentre } from './app/CommandCentre'
import { Playbook } from './app/Playbook'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CommandCentre />} />
          <Route path="assets" element={<AssetHub />} />
          <Route path="playbook" element={<Playbook />} />
          <Route path="briefs" element={<Briefs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
