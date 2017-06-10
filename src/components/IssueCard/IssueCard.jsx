import React, { Component } from 'react';
import dateFormat from 'dateformat';

import './IssueCard.css';

class IssueCard extends Component {
  formatDate(date) {
    return dateFormat(date, "dddd, mmmm dS, yyyy");
  }

  render() {
    const data = this.props.data;

    return (
      <div>

        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title gray-text"><b>{data.title}</b></h4>
            <div className="lightslategray-text issue-card-date">
              <span>
                Created: {this.formatDate(data.created_at)}
              </span>
              <span className="pull-right">
                Last Updated: {this.formatDate(data.updated_at)}
              </span>
            </div>
          </div>

          <div className="panel-body">
            <div className="row">
              <div className="col-md-6">
                <div className="gray-text">
                  <span>Experience Required: </span>
                  <span className="label label-primary">{data.experience_needed}</span>
                </div>
                <br/>
                <div className="gray-text">
                  <span>Language: </span>
                  <span className="label label-warning">{data.language}</span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="gray-text">
                  <span>Technology Stack: </span>
                  <span className="label label-success">{data.tech_stack}</span>
                </div>
                <br/>
                <div className="gray-text">
                  <span>Expected Time: </span>
                  <span className="label label-info">{data.expected_time}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default IssueCard;
