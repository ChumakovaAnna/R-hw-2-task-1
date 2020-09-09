import React from 'react';
import PropTypes from 'prop-types';

Toolbar.propTypes = {
  props: PropTypes.shape({
    filters: PropTypes.arrayOf(PropTypes.string).isRequired,
    selected: PropTypes.string.isRequired,
    onSelectFilter: PropTypes.func.isRequired,
  }
)};

function Toolbar(props) {
  const { filters, selected} = props;
  const onSelectFilter = props.onSelectFilter;
  return (
    <>
      <div className="toolbar">{filters.map(filter => 
        <div className={filter === selected ? "active filter" : "filter"} 
         key={filter} onClick={(eve) => onSelectFilter(eve)}>{filter}</div>
      )}
      </div>
    </>
  );
}

export default Toolbar;