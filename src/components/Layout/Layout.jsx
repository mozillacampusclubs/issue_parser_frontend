import React, { Component } from 'react';

import IssuesPageContainer from '../IssuesPageContainer/IssuesPageContainer';
import RegionsPageContainer from '../RegionsPageContainer/RegionsPageContainer';

// Use named export for unconnected component (for tests)
export class Layout extends Component {
  render() {
    return (
      <div className="container">
        <RegionsPageContainer />
        <IssuesPageContainer />
      </div>
    );
  }
}

// Use default export for the connected component (for app)
export default Layout;
