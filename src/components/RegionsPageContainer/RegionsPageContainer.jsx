import React, { Component } from 'react';

// Use named export for unconnected component (for tests)
export class RegionsPageContainer extends Component {
  render() {
    return (
      <div>
        <h1>Check</h1>
      </div>
    );
  }
}

// Use default export for the connected component (for app)
export default RegionsPageContainer;
