import React from 'react';

const MetricCard = ({ title, value, change, icon, color = '#2E86AB' }) => {
  const isPositive = change >= 0;
  
  return (
    <div className="metric-card" style={{ borderLeft: `4px solid ${color}` }}>
      <div className="metric-header">
        <div className="metric-icon">
          {icon}
        </div>
        <h3 className="metric-title">{title}</h3>
      </div>
      <div className="metric-value">{value}</div>
      <div className={`metric-change ${isPositive ? 'positive' : 'negative'}`}>
        {isPositive ? '↗' : '↘'} {Math.abs(change)}%
      </div>
    </div>
  );
};

export default MetricCard;
