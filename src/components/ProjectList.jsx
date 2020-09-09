import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

ProjectList.propTypes = {
  props: PropTypes.shape({
    projects: PropTypes.array.isRequired,
    selected: PropTypes.string.isRequired,
  }
)};

function ProjectList(props) {
  const { projects, selected } = props;
  
  const projectsView = () => {
    if (selected === "All") {
      return projects;
    }
    return projects.filter(p => 
      p.category === selected);
    }
    return (
      <>
      <div className="projectList">{
        projectsView().map(p => 
          <div className="project" key={nanoid()}>
          <img alt=""  src={p.img}></img>
        </div>)
      }</div>
    </>
  );
}

export default ProjectList;