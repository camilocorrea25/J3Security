/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import Home from './pages/Home';
import Catalog from './pages/Catalog';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#050B14] text-slate-200 font-sans selection:bg-[#00FF9D]/30 relative overflow-x-hidden">
        {/* Metallic Gradient Background Overlay */}
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent pointer-events-none z-0"></div>
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#00FF9D]/10 via-transparent to-transparent pointer-events-none z-0"></div>
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalogo" element={<Catalog />} />
            </Routes>
          </main>
          <Footer />
          <AIChat />
        </div>
      </div>
    </Router>
  );
}
