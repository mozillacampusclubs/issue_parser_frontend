import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import './RegionCard.css'

// Use named export for unconnected component (for tests)
export class RegionCard extends Component {
  render() {
    return (
      <div>
        <div className="region-card">
            <h1>
              <Link className="region-card-link" to={'/issues/' + this.props.regionData.id}>
                {this.props.regionData.region_name}
              </Link>
            </h1>
        </div>
      </div>
    );
  }
}

// Use default export for the connected component (for app)
export default RegionCard;
