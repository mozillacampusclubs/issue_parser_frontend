import React, { Component } from 'react';
import './IssuesPageContainer.css';
import SideBar from '../SideBar/SideBar.jsx';
import IssueList from '../IssueList/IssueList.jsx';

// Use named export for unconnected component (for tests)
export class IssuesPageContainer extends Component {
  render() {
    return (
      <div>
        <section className="row">
          <section className="col-md-3 side-bar">
            <br/>
            <SideBar />
          </section>
          <section className="col-md-9">
            <IssueList />
          </section>
        </section>
        <footer></footer>
      </div>
    );
  }
}

// Use default export for the connected component (for app)
export default IssuesPageContainer;
