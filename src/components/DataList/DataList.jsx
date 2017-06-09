import React, { Component } from 'react';

import ReactDatalist from 'react-datalist';
import './DataList.css';

class DataList extends Component {
  render() {
    const options = this.props.options;

    return (
      <div>
        <h5>Select a {this.props.title}</h5>
        <ReactDatalist list={this.props.title} options={options} />
      </div>
    );
  }
}

export default DataList;
