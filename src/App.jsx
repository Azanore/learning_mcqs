import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navigation from './components/Navigation';
import FlashcardsPage from './pages/FlashcardsPage';
import MCQPage from './pages/MCQPage';
import MapsPage from './pages/MapsPage';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <div className="app">
          <header className="header">
            <h1>Révision QCM Junior Dev</h1>
          </header>

          <Navigation />

          <main className="main">
            <Routes>
              <Route path="/" element={<Navigate to="/flashcards" replace />} />
              <Route path="/flashcards" element={<FlashcardsPage />} />
              <Route path="/mcq" element={<MCQPage />} />
              <Route path="/maps" element={<MapsPage />} />
            </Routes>
          </main>
        </div>
      </AppProvider>
    </BrowserRouter>
  );
}
