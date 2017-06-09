import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Container.css';
import SideBar from '../SideBar/SideBar.jsx';

class Container extends Component {
  render() {
    return (
      <div className="App">
        <section className="row">
          <section className="col-md-3 side-search-bar">
            <SideBar />
          </section>
          <section className="col-md-9">
          </section>
        </section>
        <footer></footer>
      </div>
    );
  }
}

export default Container;
