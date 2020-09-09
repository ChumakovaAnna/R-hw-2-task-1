import React, { Component } from 'react';
import PropTypes from 'prop-types';
import projects from "./data";
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

export class Portfolio extends Component {
  constructor() {
    super();
    this.filters = ["All", "Websites", "Flayers", "Business Cards"];
    this.state = { selected: "All" };
    this.projects = projects;
  }

  onSelectFilter = (eve) => {
    const value = eve.currentTarget.innerText;
    this.setState({ selected: value });
  }

  render() {

    return (
      <>
        <Toolbar filters={this.filters} selected={this.state.selected} onSelectFilter={this.onSelectFilter}/>
        <ProjectList projects={projects} selected={this.state.selected} />
      </>
    );
  }
}

Portfolio.propTypes = {

};

export default Portfolio;