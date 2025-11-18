import React from 'react';
import MetricCard from './MetricCard';

const KpiSection = () => {
  return (
    <section className="kpi-section">
      <div className="section-header">
        <h2>Métricas Principales</h2>
        <p>Resumen de indicadores clave</p>
      </div>
      <div className="kpi-grid">
        <MetricCard
          title="Huella Total CO₂"
          value="12.5 t"
          change={-8.2}
          icon="🌱"
          color="#27AE60"
        />
        <MetricCard
          title="Energía Consumida"
          value="2,450 kWh"
          change={-3.1}
          icon="⚡"
          color="#F39C12"
        />
        <MetricCard
          title="Transporte"
          value="850 km"
          change={12.5}
          icon="🚗"
          color="#E74C3C"
        />
        <MetricCard
          title="Eficiencia"
          value="85%"
          change={5.2}
          icon="📊"
          color="#2980B9"
        />
      </div>
    </section>
  );
};

export default KpiSection;
