import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMetaData } from '../../redux/actions/issuesActions';
import DataList from '../DataList/DataList.jsx';

import './SideBar.css';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(fetchMetaData())
  }

  render() {
    const metadata = this.props.metadata;
    const languages = metadata.data.language;
    const experienceNeeded = metadata.data.experience_needed;
    const techStack = metadata.data.tech_stack;

    const fetched = (
      <div>
        <DataList options={languages} title="language" />
        <DataList options={experienceNeeded} title="experience level" />
        <DataList options={techStack} title="technology stack" />
      </div>
    );

    const fetching = <h3>Loading... </h3>;

    const error = <h4>Server Error</h4>;

    return (
      <div>
        {metadata.fetched ? fetched : (metadata.error ? error : fetching)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    metadata: state.issues,
  };
}

export default connect(mapStateToProps)(SideBar);
