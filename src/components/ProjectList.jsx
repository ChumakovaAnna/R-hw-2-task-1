import React from 'react';
import PropTypes from 'prop-types';

ProjectList.propTypes = {
  
};

function ProjectList(props) {
  const { projects, selected } = props;

  const projectsView = () => {
    console.log(selected);
    if (selected === "All") {
      return projects;
    }
    return projects.filter(p => 
      p.category === selected);
  }
console.log(projectsView());
  return (
    <>
      <div className="projectList">{
        projectsView().map(p => 
        <div className="project">
          <img alt="" src={p.img}></img>
        </div>)
      }</div>
    </>
  );
}

export default ProjectList;