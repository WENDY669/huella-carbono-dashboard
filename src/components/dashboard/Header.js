import React from 'react';

const Header = () => {
  return (
    <header className="dashboard-header">
      <div className="header-content">
        <h1 className="dashboard-title">
          🌍 Dashboard de Huella de Carbono
        </h1>
        <p className="dashboard-subtitle">
          Monitoreo en tiempo real de métricas ambientales
        </p>
      </div>
      <div className="header-actions">
        <div className="date-selector">
          <span>📅 Últimos 30 días</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
