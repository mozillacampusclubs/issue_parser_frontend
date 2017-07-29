import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Panel } from 'react-bootstrap';

import { fetchRegionList } from '../../redux/actions/regionsActions';

// Use named export for unconnected component (for tests)
export class RegionsPageContainer extends Component {
  componentWillMount() {
    this.props.dispatch(fetchRegionList());
  }

  render() {
    const regionList = this.props.regionList;
    let renderingComponent = null;

    if (regionList.fetched) {
      let regions;
      regions = regionList.data.map((value, key) => {
        return <Link to={'/issues/' + value.id}><Panel key={key}>{value.region_name}</Panel></Link>
      });
      renderingComponent = (
        <div>
          <ul>
            {regions}
          </ul>
        </div>
      );
    } else if (regionList.fetching) {
      renderingComponent = <h3>Loading... </h3>;
    } else {
      renderingComponent = <h4 className="alert alert-warning">Error: Something went wrong</h4>;
    }

    return (
      <div>
        <br/><br/>
        {renderingComponent}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    regionList: state.regions.regionList,
  };
}

// Use default export for the connected component (for app)
export default connect(mapStateToProps)(RegionsPageContainer);
