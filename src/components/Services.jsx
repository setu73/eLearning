import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <div className="services-grid">
        <div className="service-tile tile1">
          <h3 className="service-header">Interactive Lessons</h3>
          <p className="service-description">Engaging and interactive lessons to enhance learning experience.</p>
        </div>
        <div className="service-tile tile2">
          <h3 className="service-header">24x7 Online Support</h3>
          <p className="service-description">Round-the-clock online support for any queries or assistance.</p>
        </div>
        <div className="service-tile tile3">
          <h3 className="service-header">Placement Guidelines</h3>
          <p className="service-description">Guidance and support for job placements and carrer .</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
