import React from 'react';
import Card from "../../Components/Shared/Card"; 

export default function StatCards({ stats }) {
  return (
    <div className="stat-grid">
      {stats.map((item, index) => (
        <Card
          key={index}
          icon={item.icon?<item.icon className="stat-icon" /> : null}
          className={`stat-card ${item.color}`}
          title={item.label}
          content={item.value}
        />
      ))}
    </div>
  );
}