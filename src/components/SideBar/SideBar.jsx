import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMetaData, fetchIssuesList } from '../../redux/actions/issuesActions';

import './SideBar.css';

// Use named export for unconnected component (for tests)
export class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: '',
      tech_stack: '',
      experience_needed: '',
      regions: this.props.regionId,
    };
    this.props.dispatch(fetchMetaData());
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.dispatch(fetchIssuesList(this.state));
  }

  handleChange(name, event) {
    let change = {};
    change[name] = event.target.value;
    this.setState(change);
  }

  makeOptionsList(list) {
    let optionsList = [];
    optionsList = list.map((value, key) => {
      return <option key={key} value={value} />
    });
    return optionsList;
  }

  render() {
    const metadata = this.props.metadata;
    const languages = metadata.data.language;
    const experienceNeeded = metadata.data.experience_needed;
    const techStack = metadata.data.tech_stack;

    let renderingComponent;

    if (metadata.fetched) {
      renderingComponent = (
        <div>
          <form className="form-group" >
            <div className="form-group">
              <h5>Language</h5>
              <input id="language" list="languages" className="form-control" value={this.state.value} onChange={this.handleChange.bind(this, 'language')} />
              <datalist id="languages">
                {this.makeOptionsList(languages)}
              </datalist>
            </div>
            <div className="form-group">
              <h5>Experience Level</h5>
              <input id="experience_needed" list="experienceNeeded" className="form-control" value={this.state.value} onChange={this.handleChange.bind(this, 'experience_needed')} />
              <datalist id="experienceNeeded">
                {this.makeOptionsList(experienceNeeded)}
              </datalist>
            </div>
            <div className="form-group">
              <h5>Technology Stack</h5>
              <input id="tech_stack" list="techStack" className="form-control" value={this.state.value} onChange={this.handleChange.bind(this, 'tech_stack')} />
              <datalist id="techStack">
                {this.makeOptionsList(techStack)}
              </datalist>
            </div>
          </form>
          <button className="btn btn-primary" onClick={ e => this.handleClick() }>Submit</button>
        </div>
      );
    } else if (metadata.fetching) {
      renderingComponent = <h3>Loading... </h3>
    } else {
      renderingComponent = <h4 className="alert alert-warning">Error: Something went wrong</h4>;
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
    metadata: state.issues.metadata,
  };
}

// Use default export for the connected component (for app)
export default connect(mapStateToProps)(SideBar);
