import React, { Component } from 'react';
import { connect } from 'react-redux';

import { RegionCard } from '../RegionCard/RegionCard';
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
        return (
          <div key={value.id} className="col-md-4">
            <RegionCard regionData={value} />
          </div>
        )
      });
      const allIssuesValue = {
        id: 'all',
        region_name: "Show me all the issues in the universe!"
      }
      renderingComponent = (
        <div className="row">
          <div className="col-md-12">
            <RegionCard regionData={allIssuesValue} />
          </div>
          {regions}
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
