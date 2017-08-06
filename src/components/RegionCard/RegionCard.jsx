import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import './RegionCard.css'

// Use named export for unconnected component (for tests)
export class RegionCard extends Component {

  makeRandomColor() {
    var text = "#";
    var possible = "0123456789";

    for (var i = 0; i < 6; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  render() {
    return (
      <div>
        <div className="region-card" style={{ backgroundColor: this.makeRandomColor() }}>
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
