import React from 'react';
import Header from './components/dashboard/Header';
import KpiSection from './components/dashboard/KpiSection';
import './styles/dashboard.css';

function App() {
  return (
    <div className="app">
      <div className="main-content">
        <Header />
        <main className="dashboard-container">
          <KpiSection />
        </main>
      </div>
    </div>
  );
}

export default App;
