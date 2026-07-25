import { lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
const HomePage = lazy(() => import('./pages/HomePage'));
const ProjectPage = lazy(() => import('./pages/ProjectPage'));
const LegalPage = lazy(() => import('./pages/LegalPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export default function App() {
  return <HelmetProvider><BrowserRouter><Layout><Suspense fallback={<div className="route-loader">Loading…</div>}><Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/projects/:slug" element={<ProjectPage />} />
    <Route path="/privacy" element={<LegalPage type="privacy" />} />
    <Route path="/terms" element={<LegalPage type="terms" />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes></Suspense></Layout></BrowserRouter></HelmetProvider>;
}
