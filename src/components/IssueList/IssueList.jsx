import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

import { connect } from 'react-redux';
import { sortIssues } from '../../redux/actions/issuesActions';
import IssueCard from '../IssueCard/IssueCard'

// Use named export for unconnected component (for tests)
export class IssueList extends Component {
  constructor() {
    super();
    this.state = {
      ordering : 'random',
    }
    this.sortIssues = this.sortIssues.bind(this);
  }

  sortIssues(value, order) {
    this.props.dispatch(sortIssues(value, order));
    let sort = order === 1 ? ' (ascending)' : ' (descending)';
    this.setState({ordering: value + sort});
  }

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
              <b className="gray-text">Issues</b>
              <div className="pull-right">
                <span className="badge">Ordering: {this.state.ordering} </span>
                <DropdownButton bsSize="small" bsStyle="info" title="Sort" id="sort">
                  <MenuItem id="sort-asc-experience_needed" onClick={e => this.sortIssues("experience_needed", 1)} eventKey="1">Exp-level (ascending)</MenuItem>
                  <MenuItem id="sort-desc-experience_needed" onClick={e => this.sortIssues("experience_needed", -1)} eventKey="2">Exp-level (descending)</MenuItem>
                  <MenuItem divider />
                  <MenuItem id="sort-asc-expected_time" onClick={e => this.sortIssues("expected_time", 1)} eventKey="3">Expected time (descending)</MenuItem>
                  <MenuItem id="sort-desc-expected_time" onClick={e => this.sortIssues("expected_time", -1)} eventKey="4">Expected time (descending)</MenuItem>
                </DropdownButton>
              </div>
            </h3>
          </div>
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

// Use default export for the connected component (for app)
export default connect(mapStateToProps)(IssueList);
