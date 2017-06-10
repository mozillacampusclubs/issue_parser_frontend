import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

import { connect } from 'react-redux';
import IssueCard from '../IssueCard/IssueCard'

class IssueList extends Component {
  render() {
    const issuesList = this.props.issuesList;
    let renderingComponent = <h1>Be With Us! :)</h1>;
    let IssueCardList;

    if (issuesList.fetched) {
      IssueCardList = issuesList.data.map((issue, key) => {
        return <IssueCard key={key} data={issue} />
      });
      renderingComponent = (
        <div>
          <div>
            <h3>
              <b>Issues</b>
              <div className="pull-right">
                <DropdownButton bsStyle="primary" title="Sort" id="sort">
                  <MenuItem eventKey="1">Action</MenuItem>
                </DropdownButton>
              </div>
            </h3>
          </div>
          <br/>
          <div>
            {IssueCardList}
          </div>
        </div>
      );
    } else if (issuesList.fetching) {
      renderingComponent = (
        <div>
          <br/><br/>
          <h4>Loading...</h4>
        </div>
      );
    } else if (issuesList.error) {
      renderingComponent = (
        <div>
          <br/>
          <div className="alert alert-warning ">Something went wrong</div>
        </div>
      );
    }

    return (
      <div>
        {renderingComponent}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    issuesList: state.issues.issuesList,
  };
}

export default connect(mapStateToProps)(IssueList);
