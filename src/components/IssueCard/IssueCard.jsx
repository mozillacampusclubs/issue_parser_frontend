import React, { Component } from 'react';
import dateFormat from 'dateformat';

import './IssueCard.css';

class IssueCard extends Component {
  formatDate(date) {
    return dateFormat(date, "dddd, mmmm dS, yyyy");
  }

  render() {
    const data = this.props.data;
    let labelsList;

    labelsList = data.issue_labels.map((labelInstance, key) => {
      return <span className="label label-default" key={key} style={{backgroundColor: '#' + labelInstance.label_color}}>{labelInstance.label_name}</span>;
    });

    return (
      <div>

        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">
              <b><a href={data.issue_url} target="_">{data.title}</a></b>
            </h4>
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
            <div className="gray-text">
              {labelsList}
            </div>
            <br/>
            <div className="row">
              <div className="col-md-6">
                <div className="gray-text">
                  <span>Experience Required: </span>
                  <span className="issue-card-attr"><b>{data.experience_needed}</b></span>
                </div>
                <br/>
                <div className="gray-text">
                  <span>Language: </span>
                  <span className="issue-card-attr"><b>{data.language}</b></span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="gray-text">
                  <span>Technology Stack: </span>
                  <span className="issue-card-attr"><b>{data.tech_stack}</b></span>
                </div>
                <br/>
                <div className="gray-text">
                  <span>Expected Time: </span>
                  <span className="issue-card-attr"><b>{data.expected_time}</b></span>
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
