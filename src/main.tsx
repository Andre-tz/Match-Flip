import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "./i18n"; // Ensure i18n is initialized before rendering

createRoot(document.getElementById('root')!).render(
    <App />
)
