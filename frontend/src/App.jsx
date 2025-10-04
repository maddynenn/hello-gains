<<<<<<< Updated upstream
import LoginPage from "./pages/LoginPage";

function App() {
  return <LoginPage />;
=======
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import FAQ from './pages/FAQ';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  );
>>>>>>> Stashed changes
}

export default App;
