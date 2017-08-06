import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
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

  handleChange(name, value) {
    let change = {};
    change[name] = value.value;
    this.setState(change);
  }

  makeOptionsList(list) {
    let optionsList = {};
    optionsList = list.map((option, key) => {
      return {value: option, label: option}
    });
    return optionsList;
  }

  render() {
    const metadata = this.props.metadata;
    const languages = metadata.data.language;
    const experienceNeeded = metadata.data.experience_needed;
    const techStack = metadata.data.tech_stack;

    const language_label = 'language';
    const experience_needed_label = 'experience_needed';
    const tech_stack_label = 'tech_stack';

    let renderingComponent;

    if (metadata.fetched) {
      renderingComponent = (
        <div>
          <form className="form-group" >
            <div className="form-group">
              <h5>Language</h5>
              <Select
                autofocus
                name="form-field-name"
                clearable={false}
                value={this.state.language}
                options={this.makeOptionsList(languages)}
                onChange={this.handleChange.bind(this, language_label)}
              />
            </div>
            <div className="form-group">
              <h5>Experience Level</h5>
              <Select
                autofocus
                name="form-field-name"
                clearable={false}
                value={this.state.experience_needed}
                options={this.makeOptionsList(experienceNeeded)}
                onChange={this.handleChange.bind(this, experience_needed_label)}
              />
            </div>
            <div className="form-group">
              <h5>Technology Stack</h5>
              <Select
                autofocus
                name="form-field-name"
                value={this.state.tech_stack}
                clearable={false}
                options={this.makeOptionsList(techStack)}
                onChange={this.handleChange.bind(this, tech_stack_label)}
              />
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
