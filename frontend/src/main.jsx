import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './landingpage.jsx';
import Templates from './templates.jsx';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<App />} />
            {/* <Route path="/templates" element={<Templates />} /> */}
        </Routes>
    </BrowserRouter>
    
)
