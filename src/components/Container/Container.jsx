import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Container.css';
import SideBar from '../SideBar/SideBar.jsx';
import IssueList from '../IssueList/IssueList.jsx';

class Container extends Component {
  render() {
    return (
      <div className="container">
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

export default Container;
