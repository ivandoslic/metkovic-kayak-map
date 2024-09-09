import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './i18n.ts';
import './styles/index.css';

createRoot(document.getElementById('root')!).render(<App />);
